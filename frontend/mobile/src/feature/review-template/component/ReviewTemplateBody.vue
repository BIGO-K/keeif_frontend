<template>
	<h6 class="mm_text-label">
		<b>신체 정보 입력</b><strong class="mm_text-variable">(선택)</strong>
	</h6>
	<div class="mm_flex T=equal">
		<div class="mm_form_mix-linked">
			<form-text
				v-model.number="height"
				input-mode="number"
				placeholder="키"
			></form-text>
			<span class="text_linked">cm</span>
		</div>
		<div class="mm_form_mix-linked">
			<form-text
				v-model.number="weight"
				input-mode="number"
				placeholder="몸무게"
			></form-text>
			<span class="text_linked">kg</span>
		</div>
		<div class="mm_form_mix-linked">
			<form-select v-model.number="shoesSize">
				<option>발 사이즈</option>
				<option
					v-for="size in shoesSizeList"
					:key="size.id"
					:value="size.id"
				>
					{{ size.label }}
				</option>
			</form-select>
			<span class="text_linked">mm</span>
		</div>
	</div>
	<div class="mm_note">
		<ul>
			<li>해당 정보는 다른 분들의 사이즈 참고용으로만 사용되고 개인식별정보는 공개되지 않습니다</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { usePersonalization } from '$/composables/usePersonalization';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';

	const props = withDefaults(defineProps<{
		height: number|null
		weight: number|null
		shoesSize: number|null
	}>(), {
		height: null,
		weight: null,
		shoesSize: null,
	});

	const emit = defineEmits<{
		(e: 'update:height', value: number|null): void
		(e: 'update:weight', value: number|null): void
		(e: 'update:shoesSize', value: number|null): void
	}>();

	const { getShoesSizes } = usePersonalization();
	const shoesSizeList = ref<ShoesSize[]>(await getShoesSizes());

	const height = computed({
		get: () => props.height,
		set: (value) => emit('update:height', value),
	});

	const weight = computed({
		get: () => props.weight,
		set: (value) => emit('update:weight', value),
	});

	const shoesSize = computed({
		get: () => props.shoesSize,
		set: (value) => emit('update:shoesSize', value),
	});
</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';

	/** 리뷰관리 */
	// 리뷰 쓰기
	.m_overlay-myreview {
		> .mm_inner {
			.mm_note {
				+ .mm_text-label {
					margin-top: 0;
					padding-top: 20px;
				}
			}

			// 신체정보입력
			> .mm_flex {
				@include mixin.prefix(flex-wrap, wrap, webkit);
				margin-top: -8px;
				padding-top: 2px;

				> .mm_form_mix-linked {
					margin-top: 8px;
					min-width: 130px;
					max-width: 50%;

					.text_linked {
						margin-right: 0;
						width: 46px;
						line-height: 4.6rem;
					}
				}

				+ .mm_note {
					margin-top: 8px;
					padding: 0;
				}
			}
		}
	}
</style>