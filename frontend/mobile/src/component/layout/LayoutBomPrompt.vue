
<template>
	<ul class="mm_bom...content-form">
		<template
			v-for="form in forms"
			:key="form"
		>
			<li v-if="form.type == 'textarea'">
				<div class="mm_form-textarea">
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<textarea
							v-model="form.value"
							:name="form.name"
							class="textfield"
						></textarea>
						<i class="bg_text"></i>
						<span class="text_placeholder">{{ form.placeholder }}</span>
					</label>
				</div>
			</li>
			<li v-else-if="form.type == 'select'">
				<form-select v-model="form.value">
					<option
						v-for="(option, index) in form.options"
						:key="`${index}_${option.value}`"
						:value="option.value"
					>
						{{ option.text }}
					</option>
				</form-select>
			</li>
			<li v-else>
				<form-text
					v-model="form.value"
					:type="form.type"
					:name="form.name"
					:placeholder="form.type === 'password' && form.placeholder == null ? '비밀번호 영문/특수문자/숫자 8~16자' : form.placeholder"
					:maxlength="form.maxLength"
				></form-text>
			</li>
		</template>
	</ul>
</template>

<script setup lang='ts'>
	import { computed } from 'vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';

	const props = defineProps<{ promptOptions: PromptOptions }>();
	const forms = computed(() => props.promptOptions.forms);
</script>
