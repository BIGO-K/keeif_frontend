<template>
	<!-- 옵션 목록 -->
	<!--
		(D) 옵션1, 2가 1개의 옵션만 있을 경우 별도의 옵션 선택 동작 없이 옵션이 선택된 상태로 노출되며, 수량 변경만 가능합니다.
		(D) 옵션1 혹은 옵션2만 등록한 단일옵션의 경우 1개의 옵션만 선택하게 됩니다. 이 때 옵션의 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
		(D) 셀렉트형 옵션인 경우 옵션선택 레이어 오픈 시 옵션1의 dropdown 요소에 'S=on' 클래스를 추가하여 옵션1을 바로 선택 가능하도록 합니다.
		(D) 옵션이 선택된 경우 'btn_option' 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다.
	-->
	<div
		v-if="!modifyContext.isSingleOption"
		class="m_product-option-select"
	>
		<h5 class="mm_strapline">
			<b>필수 옵션</b>
		</h5>
		<template v-if="isSingleOptionAndSubOption">
			<dropdown
				v-model:is-active="isActiveSingleOption"
				icon-class="T=bold"
			>
				<h6 class="mm_ir-blind">
					<b>옵션</b>
				</h6>
				<template #button>
					<b>{{ selectedSingleOptionName }}</b>
				</template>
				<template #content>
					<div class="mm_scroller">
						<ul>
							<li
								v-for="singleOption in singleSelectAbleOption"
								:key="`${singleOption.option.name}_${singleOption.sub.name}`"
							>
								<template v-if="singleOption.option.is_selectable">
									<button
										type="button"
										class="btn_option"
										@click="handleAddSingleOption(singleOption)"
									>
										<b>{{ isSingleOption ? singleOption.sub.name : singleOption.option.name }}
											<span
												v-if="singleOption.sub.extra_amount || singleOption.sub.extra_amount_by_marketing"
												class="text_price"
											><small>{{ number(singleOption.sub.extra_amount + singleOption.sub.extra_amount_by_marketing) }}</small></span>
										</b>
										<b v-if="singleOption.sub.qty < 6">({{ singleOption.sub.qty }}개)</b>
									</button>
								</template>
								<template v-else>
									<span
										class="btn_option"
										title="품절"
									>
										<b>{{ isSingleOption ? singleOption.sub.name : singleOption.option.name }}</b>
										<b>(품절)</b>
									</span>
								</template>
							</li>
						</ul>
					</div>
				</template>
			</dropdown>
		</template>
		<template v-else>
			<dropdown
				v-model:is-active="isActiveOption1Dropdown"
				:tag="`div`"
				:icon-class="`T=bold`"
				:class="{ 'S=option-selected' : selectedOption }"
				@toggle="() => isActiveOption2Dropdown = false"
			>
				<h6 class="mm_ir-blind">
					<b>옵션1</b>
				</h6>

				<template #button>
					<b>{{ selectedOption ? selectedOption.name : '선택하세요' }}</b>
				</template>
				<template #content>
					<div class="mm_scroller">
						<ul
							v-for="option in options"
							:key="`option1_${option.name}`"
						>
							<li>
								<template v-if="option.is_selectable">
									<button
										type="button"
										class="btn_option"
										@click="handleOption1(option)"
									>
										<b>{{ option.name }}</b>
									</button>
								</template>
								<template v-else>
									<span
										class="btn_option"
										title="품절"
									><b>{{ option.name }}</b>
										<b>(품절)</b>
									</span>
								</template>
							</li>
						</ul>
					</div>
				</template>
			</dropdown>

			<dropdown
				v-model:is-active="isActiveOption2Dropdown"
				:tag="`div`"
				:icon-class="`T=bold`"
				:class="{ 'S=option-selected' : hasDepth3Option ? depth2Options : selectedSubOption }"
				@toggle="() => isActiveOption1Dropdown = false"
			>
				<h6 class="mm_ir-blind">
					<b>옵션2</b>
				</h6>

				<template #button>
					<template v-if="!hasDepth3Option">
						<b>{{ selectedSubOption ? selectedSubOption.name : '선택하세요' }}</b>
					</template>
					<template v-else>
						<b>{{ depth2Options ? depth2Options.name : '선택하세요' }}</b>
					</template>
				</template>

				<template #content>
					<div class="mm_scroller">
						<ul>
							<template v-if="!hasDepth3Option">
								<li
									v-for="subOption in (selectedOption?.sub as GoodsSubOption[])"
									:key="subOption.name"
								>
									<template v-if="subOption.is_selectable">
										<button
											type="button"
											class="btn_option"
											@click="handleSubOption(subOption)"
										>
											<b>{{ subOption.name }}
												<span
													v-if="subOption.extra_amount"
													class="text_price"
												>
													<small>{{ number(subOption.extra_amount) }}</small>
												</span>
											</b>
											<b v-if="subOption.qty < 6">({{ subOption.qty }}개)</b>
										</button>
									</template>
									<template v-else>
										<span
											class="btn_option"
											title="품절"
										><b>{{ subOption.name }}</b>
											<b>(품절)</b>
										</span>
									</template>
								</li>
							</template>
							<template v-else>
								<li
									v-for="subOption in (selectedOption?.sub as GoodsSubWithChildOption[])"
									:key="subOption.name"
								>
									<button
										type="button"
										class="btn_option"
										@click="handleSubOption2(subOption)"
									>
										<b>{{ subOption.name }}</b>
									</button>
								</li>
							</template>
						</ul>
					</div>
				</template>
			</dropdown>
			<dropdown
				v-if="hasDepth3Option"
				v-model:is-active="isActiveOption3Dropdown"
				:tag="`div`"
				:icon-class="`T=bold`"
				:active-class="`S=on`"
			>
				<h6 class="mm_ir-blind">
					<b>옵션3</b>
				</h6>

				<template #button>
					<b>{{ selectedSubOption ? selectedSubOption.name : '선택하세요' }}</b>
				</template>

				<template #content>
					<div class="mm_scroller">
						<ul>
							<li
								v-for="subOption in depth2Options?.sub"
								:key="subOption.code"
							>
								<template v-if="subOption.is_selectable">
									<button
										type="button"
										class="btn_option"
										@click="handleDepth3Option(subOption)"
									>
										<b>{{ subOption.name }}
											<span
												v-if="subOption.extra_amount"
												class="text_price"
											>
												<small>{{ number(subOption.extra_amount) }}</small>
											</span>
										</b>
										<b v-if="subOption.qty < 6">({{ subOption.qty }}개)</b>
									</button>
								</template>
								<template v-else>
									<span
										class="btn_option"
										title="품절"
									><b>{{ subOption.name }}</b>
										<b>(품절)</b>
									</span>
								</template>
							</li>
						</ul>
					</div>
				</template>
			</dropdown>
		</template>
	</div>

	<div
		class="m_cart-option-quantity"
	>
		<form-steeper
			v-model="buyAmount"
			:max="(selectedSubOption?.qty || 0)"
			:disabled="selectedOption == undefined || selectedSubOption == undefined"
		>
		</form-steeper>
		<!-- (D) 선택 옵션의 구매가능 수량이 5개 이하인 경우에만 text_stock 요소를 노출합니다 -->
		<span
			v-if="selectedSubOption && selectedSubOption.qty <= 5"
			class="text_stock"
		>구매가능 수량 {{ number(selectedSubOption.qty) }} 개</span>
	</div>
	<div class="mm_btn_box">
		<div class="mm_flex T=equal">
			<button
				type="button"
				class="mm_btn T=sm T=line T=light"
				@click="closeContext"
			>
				<b>취소</b>
			</button>
			<button
				type="button"
				class="mm_btn T=sm T=dark"
				:disabled="!selectedSubOption"
				@click="optionChange"
			>
				<b>변경</b>
			</button>
		</div>
	</div>
</template>

<script setup lang='ts'>
	import { computed, ref, watch } from 'vue';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import Dropdown from '@/component/Dropdown.vue';
	import FormSteeper from '@/component/form/FormSteeper.vue';

	type SelectAbleOption = {
		option: {
			name: string,
			is_selectable: boolean
		}
		sub: GoodsSubOption
	}

	const props = defineProps<{
		options: GoodsOption[],
		modifyContext: CartItemModifyContext;
	}>();

	const emit = defineEmits<{
		'changeOption': [code: number, buyAmount: number];
		'closeContext': [];
	}>();

	const { number } = useFormatter();
	const { bom } = useGlobalPageContext();
	const hasDepth3Option = computed(() => props.modifyContext.has3DepthOption);

	const isActiveSingleOption = ref<boolean>(false);
	/** 옵션1 드롭다운 */
	const isActiveOption1Dropdown = ref<boolean>(false);
	/** 옵션2 드롭다운 */
	const isActiveOption2Dropdown = ref<boolean>(false);
	/** 옵션3 드롭다운 */
	const isActiveOption3Dropdown = ref<boolean>(false);
	const defaultSelectedOption = computed(() => props.modifyContext.selectedOption);
	const options = computed(() => props.options);
	const buyAmount = ref<number>(props.modifyContext.buyAmount);
	const selectedOption = ref<GoodsOption | undefined>(defaultSelectedOption.value.option1);
	const depth2Options = ref<GoodsSubWithChildOption | undefined>(defaultSelectedOption.value.option2);
	const selectedSubOption = ref<GoodsSubOption | undefined>(defaultSelectedOption.value.selected);
	const isSingleSubOption = computed(() => options.value.every(option => option.sub.length === 1));
	const isSingleOption = computed(() => options.value.length === 1);
	const isSingleOptionAndSubOption = computed(() => !hasDepth3Option.value && (isSingleSubOption.value || isSingleOption.value));

	const handleOption1 = (option: GoodsOption) => {
		selectedOption.value = option;
		isActiveOption1Dropdown.value = false;
		isActiveOption2Dropdown.value = true;

	};
	const handleSubOption2 = (subOption: GoodsSubWithChildOption) => {
		depth2Options.value = subOption;
		isActiveOption1Dropdown.value = false;
		isActiveOption2Dropdown.value = false;
		isActiveOption3Dropdown.value = true;
	};

	/**
	 * 선택2 옵션 처리
	*/
	const handleDepth3Option = (subOption: GoodsSubOption) => {
		if (!selectedOption.value || !depth2Options.value) return;

		selectedSubOption.value = subOption;
		// 옵션 선택값 상위로 보내주고
		// emit('addOption2', selectedOptionInfo.value);
		isActiveOption3Dropdown.value = false;
	};

	/**
	 * 선택2 옵션 처리
	*/
	function handleSubOption(subOption: GoodsSubOption) {
		if (!selectedOption.value) {
			return;
		}
		selectedSubOption.value = subOption;
		// 옵션 선택값 상위로 보내주고
		// emit('addOption', selectedOptionInfo.value.option1, selectedSubOption.value);
		isActiveOption2Dropdown.value = false;
	}

	/** 단일옵션일때는 선택가능한 옵션이 변경된다 **/
	// 옵션1이 다중이고 옵션2개 한개일때
	// 옵션1은 한개고 옵션2가 다중일 떄
	const singleSelectAbleOption = computed<SelectAbleOption[]>(() => {
		if (isSingleOption.value) {
			const option1 = options.value[0];

			return (option1.sub as GoodsSubOption[]).map(subOption => {
				return {
					option: {
						name: option1.name,
						is_selectable: option1.is_selectable,
					},
					sub: subOption,
				};
			});
		}

		return options.value.map(option => {
			const subOption = option.sub[0] as GoodsSubOption;

			return {
				option: {
					name: option.name,
					is_selectable: option.is_selectable,
				},
				sub: {
					code: subOption.code,
					name: subOption.name,
					extra_amount: subOption.extra_amount,
					extra_amount_by_marketing: subOption.extra_amount_by_marketing,
					is_selectable: subOption.is_selectable,
					qty: subOption.qty,
				} as GoodsSubOption,
			};
		});
	});


	const selectedSingleOptionName = computed(() => {
		if (isSingleOption.value) {
			return selectedSubOption.value?.name || '선택하세요';
		}

		return selectedOption.value?.name || '선택하세요';
	});

	/** 단일 옵션 처리 **/
	function handleAddSingleOption(singleOption: SelectAbleOption) {

		if (!singleOption) {
			return;
		}

		if (isSingleSubOption.value) {
			selectedOption.value = singleOption.option as GoodsOption;
			selectedSubOption.value = singleOption.sub as GoodsSubOption;
		}
		else {
			if (!selectedOption.value) {
				selectedOption.value = {
					name: singleOption.option.name,
					is_selectable: singleOption.option.is_selectable,
					sub: [],

				};
			}
			selectedSubOption.value = singleOption.sub as GoodsSubOption;
		}

		if (!selectedOption.value || !selectedSubOption.value) {
			return;
		}
		isActiveSingleOption.value = false;
	}

	/** 실제 변경시 실행되는 함수 */
	const optionChange = () => {
		if (!selectedOption.value || !selectedSubOption.value) {
			return bom.alert('변경할 옵션을 선택 해주세요.');
		}

		emit('changeOption', selectedSubOption.value.code, buyAmount.value);
	};

	/** 옵션1 변경시 옵션2,3 초기화 실행 */
	watch(selectedOption, () => {
		// 옵션2,3 초기화 처리
		depth2Options.value = undefined;
		selectedSubOption.value = undefined;
		isActiveOption3Dropdown.value = false;
		buyAmount.value = 1;
	});

	/** 옵션3존재하는 경우 옵션2  watch 체크 */
	watch(depth2Options, () => {
		selectedSubOption.value = undefined;
		buyAmount.value = 1;
	});

	const closeContext = () => {
		emit('closeContext');
	};
</script>