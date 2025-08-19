<template>
	<div class="m_overlay-inquiry">
		<dl><dt>판매자 정보</dt><dd>{{ qna.seller.name }} / {{ qna.seller.tel }}</dd></dl>
		<div
			v-if="qna.goods_list.length > 0"
			class="mm_product-select T=inquiry-list"
		>
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
		<div class="mm_inner">
			<div class="mm_form-select">
				<label>
					<span class="text_disabled">{{ qna.type_label }}</span>
					<i class="ico_form-select"></i>
				</label>
			</div>

			<my-inquiry-input
				v-model:title="form.title"
				v-model:contents="form.contents"
			></my-inquiry-input>

			<div class="mm_note">
				<ul>
					<li>결제, 적립금, 환불 관련 문의는 고객센터 &#62; 1:1 고객 상담를 통해 문의하세요.</li>
					<li>상품, 배송, 기타를 선택한 문의는 해당 상품의 상세 페이지 &#62; Q&#38;A 영역에 노출됩니다.</li>
				</ul>
			</div>
			<form-check v-model="form.is_private">
				<span class="text_label">비공개</span>
			</form-check>
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
						<i class="ico_info"></i><b>판매자 문의 시 유의사항</b>
					</template>
					<template #content>
						<ul>
							<li>알림톡/SMS 답변 수신은 주문, 회원가입 시 작성한 정보를 기준으로 발송됩니다.</li>
							<li>주민등록번호, 전화번호, 이메일 등 개인 정보를 남기면 타인에 의해 도용될 수 있습니다.</li>
						</ul>
					</template>
				</dropdown>
			</div>
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
	import FormCheck from '@/component/form/FormCheck.vue';
	import MyInquiryInput from '@/page/mypage/inquiry/component/MyInquiryInput.vue';

	const props = defineProps<{
		id: number
		closer: CloseHandler<void>
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `판매자 문의하기`,
	});

	/** 전역 페이지 composable */
	const { bom, loading } = useGlobalPageContext();
	const { optionText } = useFormatter();
	/** 1:1 문의 composable */
	const { getSellerQnaDetail, updateSellerQna } = useInquiry();

	/** 작성한 qna 정보 조회 */
	const qna = await getSellerQnaDetail(props.id);


	/** form composable */
	const { form, validate } = useForm<SellerQnaUpdateForm>(
		{
			title: qna.title,
			contents: qna.contents,
			is_private: qna.is_private
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
			await updateSellerQna(props.id, form.value);
			bom.alert('판매자 문의가 수정되었습니다.', () => {
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