<template>
	<h6 class="mm_text-label">
		<b>새벽배송 정보 입력</b>
	</h6>
	<div class="mm_radio-list">
		<ul>
			<li>
				<form-radio
					v-model.number="entranceType"
					name="radio-delivery-info"
					:value="DAWN_DELIVERY_ENTRANCE_TYPE.password"
				>
					<b class="mm_block">
						<i class="ico_form-radio"></i>
						<span class="text_label">공동현관 비밀번호</span>
					</b>
				</form-radio>
				<div
					class="mm_syncer-info"
					:class="{ 'S=radio-use': entranceType === DAWN_DELIVERY_ENTRANCE_TYPE.password }"
				>
					<form-text
						v-model="entrancePassword"
						maxlength="50"
						placeholder="예) 열쇠 #1234 종 호출"
					></form-text>
				</div>
			</li>
			<li>
				<form-radio
					v-model.number="entranceType"
					name="radio-delivery-info"
					:value="DAWN_DELIVERY_ENTRANCE_TYPE.nonePassword"
				>
					<b class="mm_block">
						<i class="ico_form-radio"></i>
						<span class="text_label">자유 출입 가능</span>
					</b>
				</form-radio>
			</li>
			<li>
				<form-radio
					v-model.number="entranceType"
					name="radio-delivery-info"
					:value="DAWN_DELIVERY_ENTRANCE_TYPE.etc"
				>
					<b class="mm_block">
						<i class="ico_form-radio"></i>
						<span class="text_label">기타</span>
					</b>
				</form-radio>
				<div
					class="mm_syncer-info"
					:class="{ 'S=radio-use': entranceType === DAWN_DELIVERY_ENTRANCE_TYPE.etc }"
				>
					<form-text
						v-model="etc"
						maxlength="50"
						placeholder="기타 정보를 입력해 주세요"
					></form-text>
				</div>
			</li>
			<li>
				<form-radio
					v-model.number="entranceType"
					name="radio-delivery-info"
					:value="DAWN_DELIVERY_ENTRANCE_TYPE.none"
				>
					<b class="mm_block">
						<i class="ico_form-radio"></i>
						<span class="text_label">선택안함</span>
					</b>
				</form-radio>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { DAWN_DELIVERY_ENTRANCE_TYPE } from '$/constants/index';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormText from '@/component/form/FormText.vue';

	const props = withDefaults(defineProps<{
		entranceType: number
		entrancePassword: string
		etc: string
	}>(), {
		entrancePassword: '',
		etc: '',
	});


	const emit = defineEmits<{
		(e: 'update:entranceType', value: number): void
		(e: 'update:description', value: string): void
		(e: 'update:entrancePassword', value: string): void
		(e: 'update:etc', value: string): void
	}>();

	const entranceType = computed({
		get: () => props.entranceType,
		set: (value: number) => emit('update:entranceType', value),
	});

	const entrancePassword = computed({
		get: () => props.entrancePassword,
		set: (value) => emit('update:entrancePassword', value),
	});

	const etc = computed({
		get: () => props.etc,
		set: (value) => emit('update:etc', value),
	});
</script>