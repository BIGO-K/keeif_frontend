<template>
	<h6 class="mm_text-label">
		<b>문의 제목</b>
	</h6>
	<form-text
		v-model="title"
		placeholder="문의 제목을 입력하세요"
	></form-text>
	<h6 class="mm_text-label">
		<b>문의 내용</b>
	</h6>
	<form-textarea
		v-model="contents"
		class="textfield"
		placeholder="최소 10자 이상 입력하세요"
		:byte="2000"
	></form-textarea>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import FormText from '@/component/form/FormText.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';

	const props = withDefaults(defineProps<{
		title: string
		contents: string
	}>(), {
		title: '',
		contents: ''
	});

	const emit = defineEmits<{
		(e: 'update:title', value: string): void
		(e: 'update:contents', value: string): void
	}>();

	/** 문의 제목 */
	const title = computed({
		get: () => props.title,
		set: (newTitle) => emit('update:title', newTitle)
	});

	/** 문의 내용 */
	const contents = computed({
		get: () => props.contents,
		set: (newContents) => emit('update:contents', newContents)
	});
</script>