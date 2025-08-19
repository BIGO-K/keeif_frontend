<template>
	<div class="mm_view L=lowbtn">
		<!-- 헤더 -->
		<header class="mm_header">
			<h1 class="mm_ir-blind">
				<b>상품상세</b>
			</h1>
			<div class="mm_lside">
				<a
					class="btn_back"
					href="#"
					@click.prevent="historyBack()"
				>
					<i class="ico_history-back"></i><b class="mm_ir-blind">이전으로</b>
				</a>
			</div>
			<div class="mm_rside">
				<mm-link
					class="btn_home"
					:to="{ name: 'Main' }"
				>
					<i class="ico_home-ff34"></i><b class="mm_ir-blind">홈</b>
				</mm-link>
				<mm-link :to="{ name: 'Search' }">
					<i class="ico_search"></i><b class="mm_ir-blind">검색</b>
				</mm-link>
				<mm-link :to="{ name: 'Cart' }">
					<i class="ico_cart"></i><strong class="text_badge">{{ count || 0 }}</strong><b class="mm_ir-blind">장바구니</b>
				</mm-link>
			</div>
		</header>

		<!-- 내용 -->
		<div
			id="mm_body"
			class="mm_page"
		>
			<!-- (D) 실제 내용을 추가하는 부분입니다. -->

			<!-- (D) 페이지 하단에 고정버튼이 있는 경우에는 html, mm_view 태그에 'L=lowbtn' 클래스를 추가합니다. -->
			<div class="mm_scroller">
				<div class="mm_page-inner">
					<!-- 본문 -->
					<div class="mm_page-content">
						<slot name="page"></slot>
					</div>

					<app-footer></app-footer>
				</div>
			</div>

			<!-- 하단 옵션선택 -->
			<slot name="option"></slot>

			<!-- 하단고정버튼 -->
			<div class="mm_btn_box T=fixed">
				<slot name="fixed"></slot>
			</div>

			<slot name="timedeal"></slot>

			<share v-if="shareStore.isShareOpen"></share>

			<scroll-top v-if="isMounted"></scroll-top>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import { useShareStore } from '$/stores/useShareStore';
	import { useCart } from '$/composables/useCart';
	import ScrollTop from '@/component/ScrollTop.vue';
	import Share from '@/component/Share.vue';
	import AppFooter from '@/component/app/AppFooter.vue';

	const { count } = useCart();
	const shareStore = useShareStore();

	const router = useRouter();
	const route = useRoute();
	/** 브라우저 뒤로가기와, 자체 버튼 뒤로가기 처리를 위해 필요 **/
	function historyBack() {
		if (window.history.state.position === 0
			&& window.history.state.back == null
		) {
			router.push('/');

			return;
		}

		route.meta.pushedBack = true;
		router.go(-1);
	}

	const isMounted = ref<boolean>(false);
	onMounted(() => {
		isMounted.value = true;
	});
</script>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-productDetail.js"></script> -->