<template>
	<h6 class="mm_text-label">
		<b>새벽배송 정보 입력</b>
	</h6>
	<div class="mm_radio-list">
		<ul>
			<li>
				<form-radio
					v-model="dawnDeliveryInfo"
					name="dev_radio-info"
					value="0"
				>
					<b class="mm_block">
						<i class="ico_form-radio"></i>
						<span class="text_label">자유 출입 가능</span>
					</b>
				</form-radio>
			</li>
			<li>
				<form-radio
					v-model="dawnDeliveryInfo"
					name="dev_radio-info"
					value="password"
				>
					<b class="mm_block">
						<i class="ico_form-radio"></i>
						<span class="text_label">공동현관 비밀번호</span>
					</b>
				</form-radio>
				<div
					class="mm_syncer-info"
					:class="{ 'S=radio-use': dawnDeliveryInfo === 'password' }"
				>
					<form-text
						placeholder="예) 열쇠 #1234 종 호출"
					></form-text>
				</div>
			</li>
			<li>
				<form-radio
					v-model="dawnDeliveryInfo"
					name="dev_radio-info"
					value="other"
				>
					<b class="mm_block">
						<i class="ico_form-radio"></i>
						<span class="text_label">기타</span>
					</b>
				</form-radio>
				<div
					class="mm_syncer-info"
					:class="{ 'S=radio-use': dawnDeliveryInfo === 'other' }"
				>
					<form-text
						placeholder="기타 정보를 입력해 주세요"
					></form-text>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormText from '@/component/form/FormText.vue';

	const dawnDeliveryInfo = ref('');
</script>