<template>
	<div class="m_product-option-select">
		<h5 class="mm_strapline">
			<b>필수 옵션</b>
		</h5>
		<template v-if="has3DepthOption">
			<dropdown
				v-model:is-active="isActiveOption1Dropdown"
				:tag="`div`"
				:icon-class="`T=bold`"
				:class="{ 'S=option-selected' : selectedOption !== undefined }"
				@toggle="() => { isActiveOption2Dropdown = false; isActiveOption3Dropdown = false; }"
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
								<button
									type="button"
									class="btn_option"
									@click="handleDepth1Option(option)"
								>
									<b>{{ option.name }}</b>
								</button>
							</li>
						</ul>
					</div>
				</template>
			</dropdown>
			<dropdown
				v-model:is-active="isActiveOption2Dropdown"
				:tag="`div`"
				:icon-class="`T=bold`"
				:class="{ 'S=option-selected' : depth2Option && selectedOption }"
				@toggle="() => { isActiveOption1Dropdown = false; isActiveOption3Dropdown = false; }"
			>
				<h6 class="mm_ir-blind">
					<b>옵션2</b>
				</h6>

				<template #button>
					<b>{{ depth2Option !== undefined ? depth2Option.name : '선택하세요' }}</b>
				</template>

				<template #content>
					<div class="mm_scroller">
						<ul>
							<li
								v-for="subOption in (selectedOption?.sub as GoodsSubWithChildOption[])"
								:key="subOption.name"
							>
								<button
									type="button"
									class="btn_option"
									@click="handleDepth2Option(subOption)"
								>
									<b>{{ subOption.name }}</b>
								</button>
							</li>
						</ul>
					</div>
				</template>
			</dropdown>
			<dropdown
				v-model:is-active="isActiveOption3Dropdown"
				:tag="`div`"
				:icon-class="`T=bold`"
				:active-class="`S=on`"
			>
				<h6 class="mm_ir-blind">
					<b>옵션3</b>
				</h6>

				<template #button>
					<b>{{ selectedSubOption !== undefined ? selectedSubOption.name : '선택하세요' }}</b>
				</template>

				<template #content>
					<div class="mm_scroller">
						<ul>
							<li
								v-for="subOption in (depth2Option?.sub as GoodsSubOption[])"
								:key="subOption.code"
							>
								<button
									v-if="subOption.qty > 0"
									type="button"
									class="btn_option"
									disabled
								>
									<b>{{ subOption.name }}(선택불가)</b>
								</button>
								<button
									v-else
									type="button"
									class="btn_option"
									@click="handleSubOption(subOption)"
								>
									<b>{{ subOption.name }}</b>
								</button>
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
				:class="{ 'S=option-selected' : selectedOption !== undefined }"
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
							v-for="option in soldOutOptions"
							:key="`option1_${option.name}`"
						>
							<li>
								<button
									type="button"
									class="btn_option"
									@click="handleOption(option)"
								>
									<b>{{ option.name }}</b>
								</button>
							</li>
						</ul>
					</div>
				</template>
			</dropdown>
			<dropdown
				v-model:is-active="isActiveOption2Dropdown"
				:tag="`div`"
				:icon-class="`T=bold`"
				:active-class="`S=on`"
				@toggle="() => isActiveOption1Dropdown = false"
			>
				<h6 class="mm_ir-blind">
					<b>옵션2</b>
				</h6>

				<template #button>
					<b>{{ selectedSubOption !== undefined ? selectedSubOption.name : '선택하세요' }}</b>
				</template>

				<template #content>
					<div class="mm_scroller">
						<ul>
							<li
								v-for="subOption in (selectedOption?.sub as GoodsSubOption[])"
								:key="subOption.code"
							>
								<button
									type="button"
									class="btn_option"
									@click="handleSubOption(subOption)"
								>
									<b>{{ subOption.name }}
									</b>
								</button>
							</li>
						</ul>
					</div>
				</template>
			</dropdown>
		</template>
	</div>
	<div class="mm_foot">
		<div class="mm_btn_box">
			<button
				type="button"
				class="mm_btn T=line T=primary"
				@click="apply"
			>
				<b>재입고 알림 신청하기</b>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useGoodsAdditional } from '$/composables/useGoodsAdditional';
	import Dropdown from '@/component/Dropdown.vue';

	defineExpose<OverlayComponentExpose>({
		title: `재입고 알림 신청`,
		class: 'm_modal-restock',
	});
	const props = withDefaults(defineProps<{
		goodsId: number
		options: GoodsOption[]
		closer: CloseHandler<void>
		has3DepthOption: boolean
	}>(), {
		options: () => [],
	});

	const { applyRestockNotify } = useGoodsAdditional();
	const { bom, loading } = mons();
	const isActiveOption1Dropdown = ref<boolean>(false);
	const isActiveOption2Dropdown = ref<boolean>(false);
	const isActiveOption3Dropdown = ref<boolean>(false);
	const selectedOption = ref<GoodsOption | undefined>(undefined);
	const selectedSubOption = ref<GoodsSubOption | undefined>(undefined);
	const depth2Option = ref<GoodsSubWithChildOption | undefined>(undefined);

	const selectedOptionCode = computed<number|null>(() => {
		if (selectedSubOption.value) {
			return selectedSubOption.value.code;
		}

		return null;
	});

	const soldOutOptions = computed<GoodsOption[]>(() => {
		return props.options.map(option => {
			return {
				name: option.name,
				sub: (option.sub as GoodsSubOption[]).filter(sub => sub.qty < 1),
				is_selectable: option.is_selectable,
			};
		}).filter(option => option.sub.length > 0);
	});

	/**
	 * 재입고 알림 신청
	*/
	async function apply() {
		if (selectedOptionCode.value === null) {
			return bom.alert('상품을 선택 해주세요.');
		}
		loading.show();
		try {
			await applyRestockNotify(props.goodsId, selectedOptionCode.value);
			bom.alert('재입고 알림 신청이 완료 되었습니다.\n (30일 이후 자동 해제됩니다)', () => {
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

	const handleDepth1Option = (option: GoodsOption) => {
		selectedOption.value = option;
		depth2Option.value = undefined;
		selectedSubOption.value = undefined;
		isActiveOption1Dropdown.value = false;
		isActiveOption2Dropdown.value = true;
	};

	const handleDepth2Option = (option: GoodsSubWithChildOption) => {
		depth2Option.value = option;
		selectedSubOption.value = undefined;
		isActiveOption1Dropdown.value = false;
		isActiveOption2Dropdown.value = false;
		isActiveOption3Dropdown.value = true;
	};

	const handleOption = (option: GoodsOption) => {
		selectedOption.value = option;
		selectedSubOption.value = undefined;
		isActiveOption1Dropdown.value = false;
		isActiveOption2Dropdown.value = true;
	};

	const handleSubOption = (subOption: GoodsSubOption) => {
		selectedSubOption.value = subOption;
		isActiveOption2Dropdown.value = false;
		isActiveOption3Dropdown.value = false;
	};
</script>

<style src="./_restock.scss" lang="scss"></style>