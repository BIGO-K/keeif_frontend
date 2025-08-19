
<template>
	<div :class="['mm_bom-item', className]">
		<div class="mm_bom-item-dim"></div>
		<div class="mm_bom-item-inner">
			<i class="ico_bom-alert"></i>
			<div class="mm_bom...content">
				<h2><b>{{ bom.options.title }}</b></h2>
				<template v-if="bomMessage">
					<p v-html="bomMessage"></p>
				</template>
				<template v-if="bom.type === 'prompt'">
					<bom-prompt :prompt-options="bom.options"></bom-prompt>
				</template>
			</div>
			<div class="mm_bom...btn">
				<div class="mm_flex T=equal">
					<button
						v-if="bom.options.cancelLabel"
						type="button"
						class="btn_no"
						@click="closeBom(false)"
					>
						<b>{{ bom.options.cancelLabel }}</b>
					</button>
					<button
						ref="closeButton"
						type="button"
						class="btn_ok"
						@click="closeBom(true)"
					>
						<b>{{ bom.options.okLabel }}</b>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
	import { ref, computed, defineAsyncComponent, onMounted } from 'vue';
	import { useBomStore } from '$/stores/useBomStore';
	import { useFormatter } from '$/composables/useFormatter';

	const bomPrompt = defineAsyncComponent(() => import('@/component/layout/LayoutBomPrompt.vue'));
	const props = defineProps<{ bom: BomContext }>();
	const currentBom = computed(() => props.bom);
	const closeButton = ref<HTMLElement>();
	const bomStore = useBomStore();
	const className = computed(() => {
		if (bomStore.focusedBomContext === null) {
			return '';
		}

		return bomStore.focusedBomContext.uuid === currentBom.value.uuid ? 'S=on' : 'S=old';
	});

	const bomMessage = computed(() => {
		if (!currentBom.value.message) {
			return '';
		}

		return useFormatter().newLineToBr(currentBom.value.message);
	});

	function closeBom(select: boolean) {
		if (currentBom.value.type === 'prompt') {
			const promptForm = currentBom.value as BomPrompt;
			const inputValues: Record<string, string> = {};

			if (promptForm.options.forms) {
				promptForm.options.forms.forEach((form) => {
					inputValues[form.name] = `${form.value}`;
				});
			}
			(currentBom.value as BomPrompt).formCallback(select, inputValues);
		}
		else {
			currentBom.value.callback(select);
		}
		bomStore.removeBomContext(currentBom.value);
	}

	onMounted(() => {
		if (closeButton.value) {
			closeButton.value.focus();
		}
	});
</script>
