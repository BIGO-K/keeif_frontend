<template>
	<p
		v-if="!paginator || paginator.data.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>문의 내역이 없습니다
	</p>

	<template v-else>
		<div class="mm_qna m_myinquiry">
			<ul>
				<li
					v-for="qna in paginator.data"
					:key="qna.id"
				>
					<div
						v-if="qna.top_goods"
						class="mm_product-item T=single-sm"
					>
						<figure>
							<lazyload
								class="mm_bg-cover image_product"

								:src="qna.top_goods.thumbnail_url"
							></lazyload>
							<figcaption>
								<p class="text_brand">
									{{ qna.top_goods.brand_name }}
								</p>
								<p class="text_product">
									{{ qna.top_goods.name }}
								</p>
								<span v-if="qna.goods_count > 1">외 <strong>{{ qna.goods_count - 1 }}</strong>건</span>
								<p
									v-if="qna.top_goods.option_name"
									class="text_option"
								>
									{{ optionText(qna.top_goods.option_name) }}
								</p>
							</figcaption>
						</figure>
					</div>
					<dropdown
						tag="dl"
						group="my-inquiry"
					>
						<template #button>
							<strong
								:class="['text_state', { 'mm_text-variable': qna.answer }]"
							>{{ qna.answer ? '답변완료' : '답변대기' }}</strong>
							<p>
								<span class="text_title">{{ qna.title }}</span>
								<span class="text_date">{{ date(qna.created_at, 'YYYY.MM.DD') }}</span>
								<i
									v-if="qna.is_private"
									class="ico_secret"
								></i>
							</p>
						</template>
						<template #content>
							<div class="mm_qna-qustion">
								<p v-html="newLineToBr(qna.contents)"></p>
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button
											type="button"
											class="mm_btn T=2xs T=line T=lighter"
											@click="remove(qna.id)"
										>
											<b>삭제</b>
										</button>
										<!-- (D) 판매자 문의 건의 경우 판매자 문의 수정 팝업으로 연결합니다.  -->
										<a
											class="mm_btn T=2xs T=line T=ligher"
											href="#"
											@click.prevent="overlayMyInquirySellerUpdate(qna.id)"
										>
											<b>수정</b>
										</a>
									</div>
								</div>
							</div>
							<div
								v-if="qna.answer"
								class="mm_qna-answer"
							>
								<p v-html="newLineToBr(qna.answer.contents)"></p>
								<span class="text_date">답변일: {{ date(qna.answer.created_at, 'YYYY.MM.DD') }}</span>
							</div>
						</template>
					</dropdown>
				</li>
			</ul>
		</div>

		<pagination
			v-bind="{
				currentPage: paginator?.current_page,
				itemsPerPage: paginator?.per_page,
				totalCount: paginator?.total
			}"
			@move:page="fetch"
		></pagination>
	</template>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useInquiry } from '$/composables/useInquiry';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';

	/** 전역 페이지 composable */
	const { bom, loading, openOverlay } = useGlobalPageContext();
	/** formatter composable */
	const { newLineToBr, date, optionText } = useFormatter();
	/** 문의 composable */
	const { getSellerQnaPaginator, destroySellerQna } = useInquiry();

	/** [판매자 문의] 페이지네이터 */
	const paginator = ref<Paginator<SellerQna>>();

	/**
	 * [판매자 문의] 수정 모달 OPEN
	 * @param id
	 */
	function overlayMyInquirySellerUpdate(id: number) {
		const component = defineAsyncComponent(() => import('@/page/mypage/inquiry/seller/update/MyInquirySellerUpdate.vue'));

		return openOverlay(component, {
			props: { id },
			onClose: () => fetch(paginator.value?.current_page),
		});
	}

	/** [판매자 문의] 조회 */
	async function fetch(pageNumber: number = 1) {
		try {
			paginator.value = await getSellerQnaPaginator(pageNumber);
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	/** [판매자 문의] 삭제 */
	async function remove(id: number) {
		bom.confirm('판매자 문의를 삭제하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await destroySellerQna(id);
				bom.alert('판매자 문의가 삭제되었습니다.', async () => {
					await fetch(paginator.value?.current_page);
				});
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}

	/** [1:1 문의] 조회 */
	await fetch();

	// function overlayMyInquiryProductUpdate() {
	// 	const component = defineAsyncComponent(() => import('@/page/mypage/inquiry/product/update/MyInquiryProductUpdate.vue'));

	// 	return openOverlay(component);
	// }
</script>