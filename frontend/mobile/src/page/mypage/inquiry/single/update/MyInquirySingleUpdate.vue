<template>
	<div class="mm_inner m_overlay-inquiry">
		<div class="mm_form-select">
			<label>
				<span class="text_disabled">{{ qna.type_label }}</span>
				<i class="ico_form-select"></i>
			</label>
		</div>
		<div class="mm_form-select">
			<label>
				<span class="text_disabled">{{ qna.sub_type_label }}</span>
				<i class="ico_form-select"></i>
			</label>
		</div>
		<div
			v-if="qna.order_id && qna.goods_list"
			class="mm_syncer-inquiry-order S=option-use"
		>
			<div class="mm_form-select">
				<label>
					<span class="text_disabled">{{ `${qna.order_id} (주문일: ${date(qna.ordered_at || '', 'YYYY-MM-DD')})` }}</span>
					<i class="ico_form-select"></i>
				</label>
			</div>
			<div class="mm_product-select T=inquiry">
				<!-- (D) 선택된 상품이 노출됩니다. -->
				<div class="mm_product-select-complete">
					<div class="mm_scroller">
						<div class="mm_product-list T=xs">
							<ul>
								<li
									v-for="goods in qna.goods_list"
									:key="goods.id"
								>
									<div class="mm_product-item">
										<a>
											<figure>
												<lazyload
													class="mm_bg-cover image_product"

													:src="goods.thumbnail_url"
												></lazyload>
												<figcaption>
													<p class="text_product">{{ goods.name }}</p>
													<p class="text_option">{{ optionText(goods.option_name) }}</p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<my-inquiry-input
			v-model:title="form.title"
			v-model:contents="form.contents"
		></my-inquiry-input>

		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=primary"
					@click="update"
				>
					<b>수정하기</b>
				</button>
			</div>
		</div>
		<div class="mm_note">
			<dropdown
				:is-active="true"
				icon-class="T=box"
			>
				<template #button>
					<i class="ico_info"></i><b>1:1 고객상담 문의 시 유의사항</b>
				</template>
				<template #content>
					<ul>
						<li>주민등록번호, 전화번호, 이메일 등 개인정보를 남기면 타인에 의해 도용될 수 있으니 문의하기 작성 시 주의해 주세요.</li>
						<li>이메일/SMS 답변 수신은 주문, 회원가입 시 작성한 정보를 기준으로 발송됩니다.</li>
					</ul>
				</template>
			</dropdown>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useInquiry } from '$/composables/useInquiry';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import MyInquiryInput from '@/page/mypage/inquiry/component/MyInquiryInput.vue';

	const props = defineProps<{
		id: number
		closer: CloseHandler<void>
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `1:1 고객상담 수정`,
	});

	/** 전역 페이지 composable */
	const { bom, loading } = useGlobalPageContext();
	/** 1:1 문의 composable */
	const { getQnaDetail, updateQna } = useInquiry();
	/** formatter composable */
	const { date, optionText } = useFormatter();

	/** 작성한 qna 정보 조회 */
	const qna = await getQnaDetail(props.id);

	/** form composable */
	const { form, validate } = useForm<QnaUpdateForm>(
		{
			title: qna.title,
			contents: qna.contents,
		},
		{
			rule: {
				'title(문의 제목)': ['required', 'maxLength:50'],
				'contents(문의 내용)': ['required', 'minLength:10', 'maxLength:2000'],
			},
		}
	);

	/** 문의 수정 */
	async function update() {
		loading.show();
		try {
			await validate();
			await updateQna(props.id, form.value);
			bom.alert('1:1 문의가 수정되었습니다.', () => {
				props.closer();
			});
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}
</script>