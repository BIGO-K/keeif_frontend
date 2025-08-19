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
						@click="copyPath"
					>
						<b>URL</b>
					</button>
				</li>
				<li>
					<button
						type="button"
						class="btn_sns-kakaotalk"
						href="#"
						@click.prevent="kakaoShare"
					>
						<i class="ico_sns-kakao"></i><b class="mm_ir-blind">카카오톡 공유</b>
					</button>
				</li>
			</ul>
			<button
				ref="$kakaoShareBtn"
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
	import { computed, ref } from 'vue';
	import { useRoute } from 'vue-router';
	import { useShareStore } from '$/stores/useShareStore';
	import config from '$/utils/config';
	import mons from '$/utils/mons';

	const shop = config('shop');
	const { Kakao } = window;

	const route = useRoute();
	const shareStore = useShareStore();
	const positionTop = computed(() => shareStore.clickTarget!.getBoundingClientRect().top + (shareStore.clickTarget!.offsetTop >= window.innerHeight / 2 ? -105 : 105));

	// URL 복사
	function copyPath() {

		const textArea = document.createElement('textarea');
		textArea.value = shareStore.shared.url || location.href;
		textArea.style.position = 'absolute';
		textArea.style.zIndex = '-1';
		textArea.style.top = '-100%';
		textArea.style.left = '-100%';
		textArea.style.pointerEvents = 'none';

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		document.execCommand('copy');
		textArea.remove();

		return mons().bom.alert('주소가 복사되었습니다\n 원하는 곳에 붙여넣기(Ctrl+V)해주세요.');
	}

	const $kakaoShareBtn = ref<HTMLElement|null>(null);
	const kakaoKey = location.hostname.includes('dev') || location.hostname.includes('local')
		? 'af953fb9afc88ff8f49985da877e23c9'
		: 'dc1a80a1d842666d32a3fe2697e15542';

	(() => {
		if (!Kakao.isInitialized()) {
			try {
				Kakao.init(kakaoKey);
			}
			catch (e) {
				console.error(e);
			}
		}
	})();


	function kakaoShare() {
		try {
			// TODO link 값 수정 필요
			Kakao.Share.sendDefault({
				// container: _$share,
				objectType: 'feed',
				content: {
					title: shareStore.shared.title,
					description: `${shareStore.shared.content} #${shop.name}`,
					imageUrl: shareStore.shared.imageUrl,
					link: {
						mobileWebUrl: shareStore.shared.url || `${location.origin}${route.fullPath}`,
						webUrl: shareStore.shared.url || `${location.origin}${route.fullPath}`,
					},
				},
			});
		}
		catch (e) {
			console.error(e);
			mons().bom.alert('카카오톡 공유하기에 실패 하였습니다.');
		}
	}
</script>