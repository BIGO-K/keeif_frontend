<template>
	<!-- 헤더 -->
	<!-- (D) 텍스트 흰색을 선택한다면 mm_header에 T=text-white 클래스를 추가합니다. -->
	<header
		ref="$header"
		class="mm_header T=hg"
	>
		<h1>
			<mm-link :to="{ name: 'Main' }">
				<i class="image_logo"></i><b class="mm_ir-blind">Keeif</b>
			</mm-link>
		</h1>
		<div class="mm_rside">
			<mm-link :to="{ name: 'Search' }">
				<b class="mm_ir-blind">검색하기</b><i class="ico_search"></i>
			</mm-link>

			<mm-link :to="{ name: 'Cart' }">
				<i class="ico_cart"></i><strong class="text_badge">2</strong><b class="mm_ir-blind">장바구니</b>
			</mm-link>
		</div>
	</header>
</template>

<script setup lang="ts">
	import { ref, computed, watch, onMounted } from 'vue';
	import { useScroll } from '@vueuse/core';

	const $view = ref<HTMLElement|null>(null);
	const $header = ref<HTMLElement|null>(null);
	const $scroller = ref<HTMLElement|null>(null);

	const smooth = ref(false);
	const behavior = computed(() => smooth.value ? 'smooth' : 'auto');
	const { y } = useScroll($scroller, { behavior });

	watch(y, (_currentScrollY, _beforeScrollY) => {

		if (_beforeScrollY < 1 || !$header.value || !$scroller.value) return;

		// 헤더 노출/숨김(keeif minishop에서는 헤더 숨기지 않음)
		if ($header.value && !$view.value?.classList.contains('L=minishop')) {
			// 헤더 G타입
			if ($header.value.classList.contains('T=hg')) {
				if (_currentScrollY > $header.value?.offsetHeight * 2) $header.value.classList.add('S=sm');
				else $header.value.classList.remove('S=sm');
			}
		}

	});

	onMounted(() => {

		$view.value = document.querySelector('.mm_view') as HTMLElement;
		if ($view.value !== null) $scroller.value = $view.value.querySelector('.mm_page > .mm_scroller') as HTMLElement;

	});
</script>
<!--
	<script>

	// 인기검색어 스위칭
	function searchPopularChange(__is) {

	mm.observer.dispatch('SEARCH_POPULAR_CHANGE', { _isLocal: true, data: { _is: __is } });

	}

	(function () {

	// 인기검색어 롤링
	var $popular = mm.find('.m_main-popular')[0];
	var $popularItems = mm.find('ol > li', $popular);
	var _index = 0;
	var popularInterval;

	function popularAutoPlay() {

	popularInterval = setInterval(function() {

	gsap.fromTo($popularItems[_index], { y: '0%' }, { y: '-100%', duration: 0.3, ease: 'sine.inOut' });

	_index = (_index === $popularItems.length - 1) ? 0 : _index + 1;
	gsap.fromTo($popularItems[_index], { y: '100%' }, { y: '0', duration: 0.3, ease: 'sine.inOut' });

	}, 4000);

	}

	popularAutoPlay();

	mm.observer.on($popular, 'SEARCH_POPULAR_CHANGE', function(__e) {

	if (__e.detail._is) {
	gsap.killTweensOf($popularItems);
	clearInterval(popularInterval);
	mm.element.style($popularItems, { 'transform': '' });
	}
	else {
	_index = 0;
	popularAutoPlay();
	}

	});

	})();
	</script>
-->

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';
	@use '../../../asset/scss/helper/function';

	:root {
		/* 높이 */
		--header_height_base: 45px;
		--header_height_main: 71px;
		--gnb_height_base: 47px;
		--toolbar_height_base: 51px;
	}

	.mm_header#{function.escape('.T=hg')} {
		border-bottom: 0;
		text-align: left;

		// 앱으로 보기 상단 배너 있을 때
		#{function.escape('.L=main')} .m_main-app-view ~ & {
			height: calc(var(--header_height_main) + 50px);

			.mm_rside {
				top: 61px;
			}
		}

		// 스크롤 시
		&#{function.escape('.S=sm')} {
			display: flex;
			align-items: center;
			height: var(--header_height_base);

			#{function.escape('.L=main')} .m_main-app-view ~ & {
				height: calc(var(--header_height_base) + 50px);

				.mm_rside {
					top: 48px;
				}
			}

			> h1 {
				margin: 0;
			}

			.mm_rside {
				top: -2px;
			}
		}

		h1 {
			margin-top: 16px;

			a {
				padding: 8px 22px;

				.image_logo {
					width: 68px;
					height: 21px;
					@include mixin.background(url('/image/common/logo_keeif.svg') '50% 50%/contain' no-repeat);
				}
			}
		}

		.mm_rside {
			top: 11px;
			padding: 0 9px;

			.ico_search {
				margin-right: 0;

				&::before {
					width: 22px;
					height: 25px;
					@include mixin.svg(var(--color_text_base) url('/image/common/ico_search_medium.svg'));
				}
			}

			.ico_cart {
				margin-top: 11px;

				&::before {
					background-color: var(--color_text_base);
				}

				+ .text_badge {
					position: absolute;
					top: 11px;
					right: 0;
					left: 23px;
					padding-top: 2px;
					width: 20px;
					height: 20px;
					border-radius: 100%;
					background-color: #101010;
					@include mixin.font(#fff 700 '1.2rem/1.6rem' center);
				}
			}
		}
	}
</style>