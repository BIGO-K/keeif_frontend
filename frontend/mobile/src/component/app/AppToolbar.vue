<template>
	<!-- 툴바 -->
	<div class="mm_toolbar T=tg">
		<ul class="mm_flex T=equal">
			<li>
				<mm-link :to="{ name: 'Coop' }">
					<i class="ico_coop"></i>
					<b>공동구매</b>
				</mm-link>
			</li>
			<li>
				<mm-link :to="{ name: 'MyFollow' }">
					<i class="ico_following"></i>
					<b>팔로잉</b>
				</mm-link>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="goMainOrReFresh"
				>
					<i class="ico_home-ff34"></i>
					<b>홈</b>
				</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="overlayProductRecently"
				>
					<i class="ico_recent"></i>
					<b>최근본상품</b>
				</a>
			</li>
			<li>
				<mm-link :to="{ name: 'MyMain' }">
					<i class="ico_mypage"></i>
					<b>마이페이지</b>
				</mm-link>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useRouter } from 'vue-router';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';

	const layerContextStore = useLayerContextStore();

	function overlayProductRecently() {
		const component = defineAsyncComponent(() => import('@/page/product/recently/ProductRecently.vue'));

		return layerContextStore.openOverlay(component);
	}
	const router = useRouter();

	const goMainOrReFresh = () => {
		if (router.currentRoute.value.path === '/') {
			router.go(0);
		}

		router.push('/');
	};
</script>

<style lang="scss">
	@use '../../asset/scss/helper/mixin';
	@use '../../asset/scss/helper/function';

	.mm_toolbar#{function.escape('.T=tg')} {
		border-top: 1px solid #e8e8e8;
		background-color: #fff;

		> ul {
			position: relative;
			z-index: 1;
			height: 100%;
			background-color: #fff;

			> li {
				[class*='ico_'] {
					padding-top: 8px;
					height: 32px;
				}

				.ico_following {
					&::before {
						margin-top: 2px;
					}
				}

				b {
					display: block;
					@include mixin.font(var(--color_text_base) '1rem');
				}
			}
		}
	}
</style>