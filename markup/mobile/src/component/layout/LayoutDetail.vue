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
					@click.prevent="$router.go(-1)"
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
					<i class="ico_cart"></i><strong class="text_badge">2</strong><b class="mm_ir-blind">장바구니</b>
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
			<slot name="option-button"></slot>

			<slot name="timedeal"></slot>

			<share v-if="shareStore.isShareOpen"></share>

			<scroll-top></scroll-top>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useShareStore } from '$/stores/useShareStore';
	import ScrollTop from '@/component/ScrollTop.vue';
	import Share from '@/component/Share.vue';
	import AppFooter from '@/component/app/a/AppFooter.vue';

	const shareStore = useShareStore();
</script>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-productDetail.js"></script> -->