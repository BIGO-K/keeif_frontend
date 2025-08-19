<template>
	<div class="m_myreview">
		<template v-if="!paginator || paginator.data.length < 1">
			<p class="mm_text-none">
				<i class="ico_text-none"></i>작성 가능한 리뷰가 없습니다
			</p>

			<!-- 유의사항 -->
			<div class="mm_note">
				<ul>
					<li>리뷰는 배송출발 시점부터 바로 작성할 수 있습니다.</li>
					<li>구매확정 후 30일 경과 시 리뷰를 작성할 수 없습니다.</li>
				</ul>
			</div>
		</template>

		<template v-else>
			<p class="m_myreview-note">
				{{ paginator.total }}건의 리뷰를 작성하시면 <strong class="mm_text-variable">최대 {{ number(myReviewPointSetting.photoReviewPoint * paginator.total) }}원</strong>을 드립니다
			</p>
			<!-- 리뷰목록 -->
			<div class="m_myreview-list">
				<ul>
					<li
						v-for="orderItem in paginator.data"
						:key="orderItem.order_id + orderItem.option_id"
					>
						<p class="text_date">
							{{ date(orderItem.ordered_at, 'YYYY.MM.DD') }}
						</p>
						<div class="mm_product-item T=single-sm">
							<mm-link :to="{ name: 'ProductDetail', params: { id: orderItem.goods.id } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										:src="orderItem.goods.thumbnail_url"
									></lazyload>
									<figcaption>
										<p class="text_brand">
											{{ orderItem.goods.brand_name }}
										</p>
										<p class="text_product">
											{{ orderItem.goods.name }}
										</p>
										<p class="text_option">
											{{ optionText(orderItem.option_name) }} / {{ orderItem.ea }}개
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
						<p class="m_myreview-tooltip">
							최대 <strong class="mm_text-secondary">{{ number(myReviewPointSetting.photoReviewPoint) }}원</strong> 적립
						</p>
						<a
							class="btn_write-review"
							href="#"
							@click.prevent="overlayMyReviewCreate(orderItem)"
						>
							<i class="ico_review-write"></i><b class="mm_ir-blind">리뷰 작성하기</b>
						</a>
					</li>
				</ul>
			</div>

			<!-- 유의사항 -->
			<div class="mm_note">
				<ul>
					<li>리뷰는 배송출발 시점부터 바로 작성할 수 있습니다.</li>
					<li>구매확정 후 30일 경과 시 리뷰를 작성할 수 없습니다.</li>
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
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useReview } from '$/composables/useReview';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';


	/** 전역 페이지 composable */
	const { openOverlay } = useGlobalPageContext();
	/** formatter composable */
	const { optionText, date, number } = useFormatter();
	/** 리뷰 composable */
	const { myReviewPointSetting, getReviewablePaginator } = useReview();


	/** 리뷰 페이지네이터 */
	const paginator = ref<Paginator<ReviewableOrderItem>>();


	function overlayMyReviewCreate(orderItem: ReviewableOrderItem) {
		const component = defineAsyncComponent(() => import('@/page/mypage/review/create/MyReviewCreate.vue'));

		return openOverlay(component, {
			props: {
				orderItem,
			},
			onClose: () => {
				location.reload();
			},
		});
	}

	async function fetch(pageNumber: number = 1) {
		try {
			paginator.value = await getReviewablePaginator(pageNumber);
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	await fetch();
</script>