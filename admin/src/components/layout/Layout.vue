<template>
	<app-header v-if="$route.meta.isShowHeader != false"></app-header>

	<!-- LNB -->
	<template v-if="$route.meta.isShowLnb != false">
		<div class="mm_lnb">
			<button type="button" class="mm_switch" data-switch="{ '_classOn': 'S=lnb-off', '_title': '펼쳐보기', '_defaultTitle': '접어보기', '_isParent': true, '_parentSelector': '.mm_view', 'onChange': 'mm.table.resize' }">
				<i class="ico_lnb"></i>
			</button>
			<lnb></lnb>
		</div>
	</template>
	<!-- // LNB -->

	<div id="mm_body" class="mm_page">
		<template v-if="$route.meta.isShowHeader != false">
			<section class="mm_bookmark">
				<h6><i class="ico_bookmark"></i><b>즐겨찾기</b></h6>
				<ul>
					<li>
						<a href="#" data-href="{ '_type': 'link' }"><b>고객주문조회</b></a>
						<button type="button" class="btn_remove">
							<b class="mm_ir-blind">삭제</b><i class="ico_close"></i>
						</button>
					</li>
					<li>
						<a href="#" data-href="{ '_type': 'link' }"><b>배송처리현황</b></a>
						<button type="button" class="btn_remove">
							<b class="mm_ir-blind">삭제</b><i class="ico_close"></i>
						</button>
					</li>
					<li>
						<a href="#" data-href="{ '_type': 'link' }"><b>가송장 관리</b></a>
						<button type="button" class="btn_remove">
							<b class="mm_ir-blind">삭제</b><i class="ico_close"></i>
						</button>
					</li>
					<li>
						<a href="#" data-href="{ '_type': 'link' }"><b>고객문의 게시판</b></a>
						<button type="button" class="btn_remove">
							<b class="mm_ir-blind">삭제</b><i class="ico_close"></i>
						</button>
					</li>
					<li>
						<a href="#" data-href="{ '_type': 'link' }"><b>공지사항</b></a>
						<button type="button" class="btn_remove">
							<b class="mm_ir-blind">삭제</b><i class="ico_close"></i>
						</button>
					</li>
					<li>
						<a href="#" data-href="{ '_type': 'link' }"><b>상품등록</b></a>
						<button type="button" class="btn_remove">
							<b class="mm_ir-blind">삭제</b><i class="ico_close"></i>
						</button>
					</li>
					<li>
						<a href="#" data-href="{ '_type': 'link' }"><b>상품조회/수정</b></a>
						<button type="button" class="btn_remove">
							<b class="mm_ir-blind">삭제</b><i class="ico_close"></i>
						</button>
					</li>
					<li>
						<a href="#" data-href="{ '_type': 'link' }"><b>옵션가 상품등록</b></a>
						<button type="button" class="btn_remove">
							<b class="mm_ir-blind">삭제</b><i class="ico_close"></i>
						</button>
					</li>
					<li>
						<a href="#" data-href="{ '_type': 'link' }"><b>상품단가변경</b></a>
						<button type="button" class="btn_remove">
							<b class="mm_ir-blind">삭제</b><i class="ico_close"></i>
						</button>
					</li>
					<li>
						<a href="#" data-href="{ '_type': 'link' }"><b>상품진열순서</b></a>
						<button type="button" class="btn_remove">
							<b class="mm_ir-blind">삭제</b><i class="ico_close"></i>
						</button>
					</li>
				</ul>
			</section>

			<div class="mm_sidebar">
				<div class="mm_container">
					<div class="mm_sidebar-rside">
						<ul class="mm_sidebar-csmenu">
							<li>
								<a href="#" data-href="{ '_type': 'link' }">
									<p>
										CS알리미
										<span><strong class="text_num">80</strong>건</span>
										<!-- <span class="text_loading"><i class="ico_loading T=dotted S=ani-gradation"></i><b>건</b></span> -->
									</p>
								</a>
							</li>
							<li>
								<a href="#" data-href="{ '_type': 'link' }">
									<p>
										고객문의<br>게시판
										<span><strong class="text_num">45</strong>건</span>
										<!-- <span class="text_loading"><i class="ico_loading T=dotted S=ani-gradation"></i><b>건</b></span> -->
									</p>
								</a>
							</li>
						</ul>
						<button type="button" class="btn_refresh" onclick="window.reload();">
							<b>새로고침</b><i class="ico_refresh"></i>
						</button>
						<a class="btn_topmost" href="#mm_app" data-href="{ '_type': 'anchor' }" title="페이지 처음으로 이동"><i class="ico_topmost"></i><b>TOP</b></a>
					</div>
				</div>
			</div>
		</template>

		<!-- 본문 -->
		<slot name="content"></slot>
	</div>

	<app-footer v-if="$route.meta.isShowFooter != false || !$route.meta.isPopup != true"></app-footer>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';
	import { useRoute } from 'vue-router';
	import AppFooter from '@/components/AppFooter.vue';
	import AppHeader from '@/components/AppHeader.vue';
	import Lnb from '@/components/Lnb.vue';

	const route = useRoute();
	if (route.meta.layout) document.documentElement.classList.add(route.meta.layout);

	onMounted(() => {

		// app_page-common.js의 load와 ready를 재실행
		mm.event.dispatch(document, 'DOMContentLoaded'); // ready
		mm.event.dispatch(window, 'load'); // load

	});
</script>
