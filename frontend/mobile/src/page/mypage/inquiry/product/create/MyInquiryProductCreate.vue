<template>
	<div class="m_overlay-inquiry">
		<dl><dt>업체 정보</dt><dd>{{ qnaWriteBaseInfo.seller.name }}/{{ qnaWriteBaseInfo.seller.tel }}</dd></dl>
		<p>
			결제/적립금/환불 관련문의
			<mm-link :to="{ name: 'CsMain' }">
				<b>고객센터 바로가기</b><i class="ico_link"></i>
			</mm-link>
		</p>
		<div class="mm_product-item T=single-sm">
			<a>
				<figure>
					<lazyload
						class="mm_bg-cover image_product"
						is-force
						:src="qnaWriteBaseInfo.goods.thumbnail_url"
					></lazyload>
					<figcaption>
						<p class="text_brand">
							{{ qnaWriteBaseInfo.goods.brand_name }}
						</p>
						<p class="text_product">
							{{ qnaWriteBaseInfo.goods.name }}
						</p>
					</figcaption>
				</figure>
			</a>
		</div>
		<div class="mm_inner">
			<h6 class="mm_text-label">
				<b>문의 유형</b>
			</h6>
			<form-select v-model.number="qnaForm.sub_type">
				<option value="0">
					문의 유형을 선택하세요
				</option>
				<option
					v-for="qnaType in sellerQnaTypes"
					:key="qnaType.code"
					:value="qnaType.code"
				>
					{{ qnaType.label }}
				</option>
			</form-select>

			<my-inquiry-input
				v-model:title="qnaForm.title"
				v-model:contents="qnaForm.contents"
			></my-inquiry-input>

			<form-check
				v-model="qnaForm.is_private"
				label="비공개"
			></form-check>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
						@click="store"
					>
						<b>등록하기</b>
					</button>
				</div>
			</div>
			<div class="mm_note">
				<dropdown
					:is-active="true"
					icon-class="T=box"
				>
					<template #button>
						<i class="ico_info"></i><b>상품 문의 시 유의사항</b>
					</template>
					<template #content>
						<ul>
							<li>주문내역의 변경(확인)에 대한 내용, 주민등록번호, 연락처 등의 정보는 노출되지 않도록 주의해주세요.</li>
							<li>비방, 음란 등 제반 법령에 저촉되거나 광고성 등 게시글은 사전 고지 없이 삭제될 수 있습니다.</li>
						</ul>
					</template>
				</dropdown>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useInquiry } from '$/composables/useInquiry';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import MyInquiryInput from '@/page/mypage/inquiry/component/MyInquiryInput.vue';

	defineExpose<OverlayComponentExpose>({
		title: `상품 문의하기`,
	});

	const props = defineProps<{
		qnaWriteBaseInfo: GoodsQnaCreateInfo,
		sellerQnaTypes: SellerQnaType[],
		closer: CloseHandler<void>
	}>();

	const { storeGoodsQna } = useInquiry();

	/** form composable */
	const { form: qnaForm, validate } = useForm<GoodsQnaStoreForm>(
		{
			title: '',
			sub_type: null,
			contents: '',
			is_private: false,
		},
		{
			rule: {
				'sub_type(문의 유형)': ['required'],
				'title(문의 제목)': ['required', 'maxLength:50'],
				'contents(문의 내용)': ['required', 'minLength:10', 'maxLength:2000'],
			},
			message: {
				'sub_type.required': ':param(을/를) 선택해주세요.',
			},
		},
	);

	const { loading, bom } = mons();
	async function store() {
		loading.show();
		try {
			await validate();
			await storeGoodsQna(props.qnaWriteBaseInfo.goods.id, qnaForm.value);
			bom.alert('문의가 등록되었습니다.', () => {
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