<template>
	<div class="m_overlay-myreview">
		<!-- 상품정보 : 선택형 -->
		<div class="m_overlay-myreview-product">
			<div class="m...product-point S=point-on">
				<p><i class="ico_review-photo"></i>포토 리뷰 등록 시 최대<b><strong>{{ number(myReviewPointSetting.photoReviewPoint) }}</strong><sub>원</sub></b>적립!</p>
				<div class="m...product-point-inner">
					<dl><dt>텍스트 리뷰</dt><dd><strong>{{ number(myReviewPointSetting.textReviewPoint) }}</strong><sub>원</sub></dd></dl>
					<dl><dt>포토 리뷰</dt><dd><strong>{{ number(myReviewPointSetting.photoReviewPoint) }}</strong><sub>원</sub></dd></dl>
				</div>
			</div>
			<div
				v-if="reviewableOrderItems.length"
				class="mm_product-select"
			>
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
										v-for="reviewableOrderItem in reviewableOrderItems"
										:key="`${reviewableOrderItem.goods.id}_${reviewableOrderItem.option_id}`"
									>
										<div
											class="mm_product-item"
											@click="() => {
												selectedOrderItem = reviewableOrderItem;
												isOrderItemDropdownActive = false;
											}"
										>
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														:src="reviewableOrderItem.goods.thumbnail_url"
													></lazyload>
													<figcaption>
														<p class="text_product">{{ reviewableOrderItem.goods.name }}</p>
														<p class="text_option">{{ optionText(reviewableOrderItem.option_name) }}</p>
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
					v-if="selectedOrderItem"
					class="mm_product-select-complete"
				>
					<div class="mm_product-item T=single-xs">
						<a>
							<figure>
								<lazyload
									class="mm_bg-cover image_product"
									:src="selectedOrderItem.goods.thumbnail_url"
								></lazyload>
								<figcaption>
									<p class="text_product">{{ selectedOrderItem.goods.name }}</p>
									<p class="text_option">{{ optionText(selectedOrderItem.option_name) }}</p>
								</figcaption>
							</figure>
						</a>
					</div>
					<button
						type="button"
						class="btn_remove"
						@click="selectedOrderItem = null"
					>
						<i class="ico_remove"></i><b class="mm_ir-blind">삭제하기</b>
					</button>
				</div>
			</div>
			<div v-else-if="orderItem && selectedOrderItem">
				<div class="mm_product-item T=single-xs">
					<a>
						<figure>
							<lazyload
								class="mm_bg-cover image_product"
								:src="selectedOrderItem.goods.thumbnail_url"
							></lazyload>
							<figcaption>
								<p class="text_product">{{ selectedOrderItem.goods.name }}</p>
								<p class="text_option">{{ optionText(selectedOrderItem.option_name) }}</p>
							</figcaption>
						</figure>
					</a>
				</div>
			</div>
		</div>
		<hr class="mm_line">

		<my-review-input
			v-model:rate="form.rate"
			v-model:contents="form.contents"
			v-model:selected-review-templates="form.selected_review_templates"
			v-model:images="form.images"
			v-model:height="form.height"
			v-model:weight="form.weight"
			v-model:shoes-size="form.shoes_size"
			v-bind="{
				useReviewTemplate,
				reviewTemplates,
				usePersonalization: isUsePersonalization
			}"
		></my-review-input>

		<div class="mm_inner">
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
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, ref, watch } from 'vue';
	import { useChannelTalk } from '$/composables/useChannelTalk';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { usePersonalization } from '$/composables/usePersonalization';
	import { useReview } from '$/composables/useReview';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import MyReviewInput from '@/page/mypage/review/component/MyReviewInput.vue';

	const props = withDefaults(defineProps<{
		orderItem?: Nullable<ReviewableOrderItem>
		orderItems?: NormalStepOrderItem[]
		orderId?: string
		closer: CloseHandler<void>
	}>(), {
		orderItem: null,
		orderItems: () => [],
		orderId: '',
	});
	defineExpose<OverlayComponentExpose>({
		title: `리뷰 쓰기`,
	});

	const { bom, loading } = useGlobalPageContext();
	const { optionText, number } = useFormatter();
	const { getMySize } = usePersonalization();
	/** 리뷰 composable */
	const {
		myReviewPointSetting,
		useReviewTemplate,
		usePersonalization: isUsePersonalization,
		add,
		getReviewTemplates,
	} = useReview();

	/** 주문상품 선택 dropdown 활성화 여부 */
	const isOrderItemDropdownActive = ref(false);

	const reviewableOrderItems = computed<ReviewableOrderItem[]>(() => {
		const mapped: ReviewableOrderItem[] = props.orderItems.filter(item => item.review_writable).map(item => {
			return {
				order_id: props.orderId,
				option_id: item.goods.option_id,
				goods: item.goods,
				ea: 1,
				option_name: item.goods.option_name,
				ordered_at: '',
			};
		});

		const grouped = (mapped).reduce((
			accumulator: {[orderId: number]: ReviewableOrderItem},
			current: ReviewableOrderItem,
		) => {
			const key = current.option_id;
			if (!accumulator[key]) {
				accumulator[key] = current;
			}
			else {
				accumulator[key].ea++;
			}

			return accumulator;
		}, {} as {[orderId: number]: ReviewableOrderItem});

		return Object.values(grouped);
	});

	const selectedOrderItem = ref(props.orderItem);

	const reviewTemplates = ref<ReviewTemplate[]>([]);

	const mySize = ref<MySize|null>(isUsePersonalization ? await getMySize() : null);

	/** form composable */
	const { form, validate } = useForm<ReviewStoreForm>(
		{
			order_id: '',
			option_id: null,
			rate: null,
			contents: '',
			height: mySize.value?.height,
			weight: mySize.value?.weight,
			shoes_size: mySize.value?.shoes_size_id,
			selected_review_templates: [],
			images: [],
			ea: 0,
		},
		{
			rule: {
				'order_id(주문상품)': ['required'],
				'option_id(주문상품)': ['required'],
				'rate(별점)': ['required'],
				'height(키)': ['number'],
				'weight(몸무게)': ['number'],
				'contents(내용)': ['required', 'minLength:10', 'maxLength:2000', 'blank', 'noRepeat'],
			},
			message: {
				'order_id.required': ':param(을/를) 선택해주세요.',
				'option_id.required': ':param(을/를) 선택해주세요.',
				'rate.required': ':param(을/를) 선택해주세요.',
			},
		},
	);

	async function store() {
		loading.show();
		try {
			await validate();
			await add(form.value);
			if (selectedOrderItem.value) {
				/** 채널톡에 상품가격정보를 넣기.. */
				useChannelTalk().reviewComplete({
					orderId: selectedOrderItem.value?.order_id,
					goods: {
						id: selectedOrderItem.value.goods.id,
						name: selectedOrderItem.value.goods.name,
						// price: selectedOrderItem.value.goods.price,
					},
				});
			}

			bom.alert('리뷰가 등록되었습니다.', props.closer);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	watch(selectedOrderItem, async (newOrderItem) => {
		if (!newOrderItem) {
			form.value.order_id = '';
			form.value.option_id = null;
			form.value.ea = 0;

			return;
		}

		if (useReviewTemplate) {
			reviewTemplates.value = await getReviewTemplates(newOrderItem.goods.id);
		}
		form.value.order_id = newOrderItem.order_id;
		form.value.option_id = newOrderItem.option_id;
		form.value.ea = newOrderItem.ea;
	}, {
		immediate: true,
	});
</script>

<!--
	<script>
	(function() {

	//< 별점 선택
	var $starscore = mm.find('.m_overlay-myreview-starscore');
	var $star = mm.find('li', $starscore);

	mm.event.on($star, 'click', function(__e) {

	$starscore[0].classList.add('S=starscore-choice');

	var _currentIndex = mm.element.index(mm.find('li', $starscore), __e.currentTarget);

	_.each($star, function(__element, __index) {
	if (__index > _currentIndex) {
	__element.classList.remove('S=starscore-on');
	__element.children[0].removeAttribute('title');
	}
	else {
	__element.classList.add('S=starscore-on');
	__element.children[0].setAttribute('title', '선택됨');
	}
	});

	mm.find('input[type=hidden]', $starscore)[0].value = _currentIndex + 1;

	});
	//> 별점 선택

	// 리뷰 상품 선택시 포인트 안내 노출
	var $prodSelect = mm.find('.mm_product-select')[0];
	var $selectComplete = mm.find('.mm_product-select-complete', $prodSelect)[0];
	mm.event.on(mm.find('.mm_product-item', $prodSelect), 'click', function(__e) {

	var $reviewPoint = mm.find('.m\\.\\.\\.product-point')[0];
	var _classOn = 'S=point-on';

	if ($reviewPoint.classList.contains(_classOn)) return;

	$reviewPoint.classList.add(_classOn);

	mm.delegate.on($selectComplete, '.btn_remove', 'click', function(__e) {

	$reviewPoint.classList.remove(_classOn);

	});

	});

	})();
	</script>
-->