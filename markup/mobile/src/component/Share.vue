<template>
	<div class="mm_sns">
		<div class="mm_sns-dim"></div>
		<div
			class="mm_sns-list"
			:style="{ top: `${positionTop}px` }"
		>
			<ul>
				<li>
					<button
						type="button"
						class="btn_sns-url"
					>
						<b>URL</b>
					</button>
				</li>
				<li>
					<mm-link
						class="btn_sns-kakaotalk"
						to="http://"
					>
						<i class="ico_sns-kakao"></i><b class="mm_ir-blind">카카오톡 공유</b>
					</mm-link>
				</li>
			</ul>
			<button
				type="button"
				class="btn_sns-close"
				@click="shareStore.isShareOpen = false"
			>
				<i class="ico_sns-close"></i><b class="mm_ir-blind">공유 모달 닫기</b>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useShareStore } from '$/stores/useShareStore';

	const shareStore = useShareStore();
	const positionTop = computed(() => shareStore.clickTarget!.getBoundingClientRect().top + (shareStore.clickTarget!.offsetTop >= window.innerHeight / 2 ? -105 : 105));
</script>