<template>
	<template v-if="prop.layout === 'none'">
		<slot></slot>
	</template>
	<template v-else>
		<div :class="layoutClass">
			<!-- 헤더 -->
			<header
				ref="headerElement"
				class="mm_header"
			>
				<h1 :class="{ 'mm_ir-blind': prop.hideTitle }">
					<b>{{ prop.title }}</b>
				</h1>
				<slot name="after-title"></slot>

				<template v-if="prop.layout !== 'popup'">
					<div class="mm_lside">
						<a
							class="btn_back"
							href="#"
							@click.prevent="$router.go(-1)"
						>
							<i class="ico_history-back"></i><b class="mm_ir-blind">이전으로</b>
						</a>
					</div>
				</template>

				<template v-if="prop.layout === 'popup'">
					<div class="mm_rside">
						<button
							type="button"
							class="btn_popup-close"
							@click="$router.go(-1)"
						>
							<i class="ico_popup-close"></i><b class="mm_ir-blind">팝업 닫기</b>
						</button>
					</div>
				</template>
				<template v-else-if="!layoutClass.includes('L=lowbtn')">
					<div class="mm_rside">
						<mm-link :to="{ name: 'Search' }">
							<i class="ico_search"></i><b class="mm_ir-blind">검색</b>
						</mm-link>
						<mm-link :to="{ name: 'Cart' }">
							<i class="ico_cart"></i><strong class="text_badge">2</strong><b class="mm_ir-blind">장바구니</b>
						</mm-link>
					</div>
				</template>
			</header>

			<!-- 내용 -->
			<div
				id="mm_body"
				class="mm_page"
			>
				<div
					ref="scroller"
					class="mm_scroller"
				>
					<div class="mm_page-inner">
						<!-- 본문 -->
						<div class="mm_page-content">
							<slot></slot>
						</div>

						<app-footer v-if="isFooter"></app-footer>
					</div>
				</div>

				<!-- 하단고정버튼 -->
				<slot name="button"></slot>

				<scroll-top></scroll-top>
			</div>

			<app-toolbar v-if="isToolbar"></app-toolbar>

			<share v-if="shareStore.isShareOpen"></share>
		</div>
	</template>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useShareStore } from '$/stores/useShareStore';
	import ScrollTop from '@/component/ScrollTop.vue';
	import Share from '@/component/Share.vue';
	import AppFooter from '@/component/app/a/AppFooter.vue';
	import AppToolbar from '@/component/app/g/AppToolbar.vue';

	const shareStore = useShareStore();

	defineOptions({
		inheritAttrs: false,
	});

	const prop = withDefaults(defineProps<{
		/** @prop { string } - @requires h1 */
		title: string;
		/** @prop { boolean } - `default: false` - h1 mm_ir-blind 적용 */
		hideTitle?: boolean;
		/** @prop { 'popup' | 'none' | null } `default: null` - none(오버레이), null(서브) */
		layout?: 'popup' | 'none' | null;
		/** @prop { string | string[] | null } `default: null` - mm_view에 추가되는 class */
		class?: string | string[] | null;
		isFooter?: boolean;
		isToolbar?: boolean;
	}>(), {
		hideTitle: false,
		layout: null,
		class: null,
		isFooter: true,
		isToolbar: true,
	});

	const layoutClass = computed(() => {
		let classes = ['mm_view'];

		if (prop.layout != null) classes.push(`L=${prop.layout}`);
		if (prop.class != null) classes = classes.concat(prop.class);

		return classes;
	});
</script>