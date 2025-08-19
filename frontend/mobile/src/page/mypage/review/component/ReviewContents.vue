<template>
	<toggle
		class="text_review"
		tag="p"
		title="열기"
		active-title="닫기"
		parent-selector=".mm_review"
	>
		<b
			v-contents-clamps
			v-html="newLineToBr(contents)"
		></b>
		<span
			v-if="needClampIcon"
			class="mm_btn T=line T=dark"
		><i class="ico_toggle"></i></span>
	</toggle>
</template>
<script lang="ts" setup>
	import { ref } from 'vue';
	import { useFormatter } from '$/composables/useFormatter';
	import Toggle from '@/component/Toggle.vue';

	defineProps<{
		contents: string
	}>();

	const { newLineToBr } = useFormatter();
	const needClampIcon = ref<boolean>(false);
	const vContentsClamps = {
		mounted: (el: HTMLElement) => {
			if (el.scrollHeight <= el.clientHeight) {
				return;
			}

			needClampIcon.value = true;
		},
	};
</script>