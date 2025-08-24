<template>
	<layout
		title="1:1 고객상담"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="mm_inner m_overlay-inquiry">
			<form-select
				v-model.number="form.type"
				@change="() => {
					form.sub_type = null;
					form.order_id = '';
					form.order_item_ids = [];
				}"
			>
				<option>1차 문의 유형 선택</option>
				<option
					v-for="qnaType in qnaTypes"
					:key="qnaType.code"
					:value="qnaType.code"
				>
					{{ qnaType.label }}
				</option>
			</form-select>
			<form-select v-model.number="form.sub_type">
				<option>2차 문의 유형 선택</option>
				<option
					v-for="subType in qnaSubTypes"
					:key="subType.code"
					:value="subType.code"
				>
					{{ subType.label }}
				</option>
			</form-select>
			<div
				v-if="requireOrder"
				class="mm_syncer-inquiry-order S=option-use"
			>
				<form-select
					v-model="form.order_id"
					@change="form.order_item_ids = [];"
				>
					<option>주문번호 선택</option>
					<option
						v-for="order in orders"
						:key="order.order_id"
						:value="order.order_id"
					>
						{{ `${order.order_id} (주문일: ${date(order.ordered_at, 'YYYY-MM-DD')})` }}
					</option>
				</form-select>
				<div class="mm_product-select T=inquiry">
					<dropdown
						v-model:is-active="isOrderItemDropdownActive"
						icon-class="T=bold"
					>
						<template #button>
							<b>상품을 선택해주세요</b>
						</template>
						<template #content>
							<div class="mm_scroller">
								<div class="mm_product-list T=xs">
									<ul>
										<li
											v-for="orderItem in orderItems"
											:key="orderItem.id"
										>
											<div class="mm_product-item">
												<a
													@click="selectOrderItem(orderItem.id)"
												>
													<figure>
														<lazyload
															class="mm_bg-cover image_product"

															:src="orderItem.thumbnail_url"
														></lazyload>
														<figcaption>
															<p class="text_product">{{ orderItem.goods_name }}</p>
															<p class="text_option">{{ optionText(orderItem.option_name) }}</p>
														</figcaption>
													</figure>
												</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</template>
					</dropdown>
					<!-- (D) 선택된 상품이 노출됩니다. -->
					<div
						v-if="selectedOrderItems.length > 0"
						class="mm_product-select-complete"
					>
						<div class="mm_scroller">
							<div class="mm_product-list T=xs">
								<ul>
									<li
										v-for="orderItem in selectedOrderItems"
										:key="orderItem.id"
									>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"

														:src="orderItem.thumbnail_url"
													></lazyload>
													<figcaption>
														<p class="text_product">{{ orderItem.goods_name }}</p>
														<p class="text_option">{{ optionText(orderItem.option_name) }}</p>
													</figcaption>
												</figure>
											</a>
										</div>
										<button
											type="button"
											class="btn_remove"
											@click="unselectOrderItem(orderItem.id)"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">삭제하기</b>
										</button>
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
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useInquiry } from '$/composables/useInquiry';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import MyInquiryInput from '@/page/mypage/inquiry/component/MyInquiryInput.vue';

	const { bom, router, loading } = useGlobalPageContext();
	/** 문의 컴포저블 */
	const { getQnaTypes, getQnaOrders, storeQna } = useInquiry();
	/** formatter 컴포저블 */
	const { date, optionText } = useFormatter();

	/** 문의유형 및 문의가능 주문 조회 */
	const [qnaTypes, orders] = await Promise.all([
		getQnaTypes(),
		getQnaOrders(),
	]);

	/** 주문 필수 문의 유형 코드 리스트 */
	const qnaTypeCodesWithOrder = qnaTypes.filter(type => type.is_with_order).map(type => type.code);

	/** 1:1 문의 등록 validation rule */
	const rules = {
		'type(1차 문의 유형)': ['required', `in:${qnaTypes.map(type => type.code).join(',')}`],
		'sub_type(2차 문의 유형)': ['required'],
		'order_id(주문 번호)': [`requiredIf:type,${qnaTypeCodesWithOrder.join(',')}`],
		'order_item_ids(문의 상품)': [`requiredIf:type,${qnaTypeCodesWithOrder.join(',')}`],
		'title(문의 제목)': ['required', 'maxLength:50'],
		'contents(문의 내용)': ['required', 'minLength:10', 'maxLength:2000'],
	};

	/** form composable */
	const { form, validate } = useForm<QnaStoreForm>(
		{
			type: null,
			sub_type: null,
			order_id: '',
			order_item_ids: [],
			title: '',
			contents: '',
		},
		{
			rule: rules,
			message: {
				'type.required': ':param(을/를) 선택해주세요.',
				'sub_type.required': ':param(을/를) 선택해주세요.',
				'order_id.requiredIf': ':param(을/를) 선택해주세요.',
				'order_item_ids.requiredIf': ':param(을/를) 선택해주세요.',
			},
		},
	);

	/** 2차 문의유형 리스트 */
	const qnaSubTypes = computed<QnaSubType[]>(() => qnaTypes.find(type => type.code === form.value.type)?.children || []);
	/** 주문 필수여부 */
	const requireOrder = computed<boolean>(() => form.value.type ? qnaTypeCodesWithOrder.includes(form.value.type) : false);
	/** 문의가능 주문상품 리스트 */
	const orderItems = computed<QnaOrderItem[]>(() => orders?.find(order => order.order_id === form.value.order_id)?.items || []);
	/** 선택된 주문상품 리스트 */
	const selectedOrderItems = computed(() => orderItems.value.filter(item => form.value.order_item_ids.includes(item.id)));

	/** 주문상품 선택 dropdown 활성화 여부 */
	const isOrderItemDropdownActive = ref(false);

	/** 주문상품 선택 처리 */
	function selectOrderItem(orderItemId: number) {
		form.value.order_item_ids = form.value.order_item_ids.filter(itemId => orderItemId != itemId).concat([orderItemId]);
		isOrderItemDropdownActive.value = false;
	}
	/** 주문상품 선택취소 처리 */
	function unselectOrderItem(orderItemId: number) {
		form.value.order_item_ids = form.value.order_item_ids.filter(itemId => orderItemId != itemId);
	}

	/** 문의 등록 */
	async function store() {
		loading.show();
		try {
			await validate();
			await storeQna(form.value);
			bom.alert('1:1 문의가 등록되었습니다.', () => {
				router.push({
					name: 'MyInquirySingle',
				});
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