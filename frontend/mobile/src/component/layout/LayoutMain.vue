<template>
	<div class="mm_view L=main">
		<!-- 앱으로 보기 상단 배너 -->
		<div
			v-if="!isAppUser && isMobileUser"
			class="m_main-app-view"
		>
			<a
				href="https://triz.keeif.kr/dlqwny"
				target="blank"
			>
				<b>앱으로 더 편리하게 쇼핑해보세요</b><i>앱으로 보기</i>
			</a>
		</div>

		<app-header></app-header>

		<!-- 내용 -->
		<div
			id="mm_body"
			class="mm_page"
		>
			<!-- (D) 실제 내용을 추가하는 부분입니다. -->

			<div class="mm_scroller">
				<div class="mm_page-inner">
					<!-- 본문 -->
					<div class="mm_page-content">
						<!-- GNB -->
						<div
							v-if="false"
							class="mm_gnb"
						>
							<!-- (D) 메뉴가 모바일 가로 사이즈보다 적으면 mm_gnb에 'S=flex' 클래스가 추가됩니다. -->
							<div class="mm_gnb-inner">
								<div class="mm_scroller T=x">
									<ul>
										<li>
											<mm-link
												active-class="S=gnb-on"
												:to="{ name: 'Main' }"
											>
												<b>홈</b>
											</mm-link>
										</li>
										<li>
											<mm-link
												:class="{ 'S=gnb-on' : $route.name === 'Best' }"
												active-class="S=gnb-on"
												:to="{ name: 'Best' }"
											>
												<b>베스트</b>
											</mm-link>
										</li>
										<li>
											<mm-link
												:class="{ 'S=gnb-on' : $route.name === 'Event' }"
												active-class="S=gnb-on"
												:to="{ name: 'Event' }"
											>
												<b>이벤트</b>
											</mm-link>
										</li>
										<li>
											<mm-link
												:class="{ 'S=gnb-on' : $route.name === 'Codyshot' }"
												active-class="S=gnb-on"
												:to="{ name: 'Codyshot' }"
											>
												<b>코디샷</b>
											</mm-link>
										</li>
										<li>
											<mm-link
												:class="{ 'S=gnb-on' : $route.name === 'Coop' }"
												active-class="S=gnb-on"
												:to="{ name: 'Coop' }"
											>
												<b>공동구매</b>
											</mm-link>
										</li>
										<li>
											<mm-link
												:class="{ 'S=gnb-on' : $route.name === 'Showcase' }"
												active-class="S=gnb-on"
												:to="{ name: 'Showcase' }"
											>
												<b>쇼케이스</b>
											</mm-link>
										</li>
										<li><a href="#"><b>신상품</b></a></li>
										<li><a href="#"><b>추가메뉴1</b></a></li>
										<li><a href="#"><b>추가메뉴5</b></a></li>
										<li><a href="#"><b>스팟성 테마관</b></a></li>
									</ul>
								</div>
							</div>
						</div>

						<!-- 홈 -->
						<div
							v-if="$route.name === 'Main'"
							class="m_main"
						>
							<slot name="main"></slot>
						</div>

						<!-- 서브메인 노출 영역 -->
						<slot name="default"></slot>
					</div>

					<app-footer></app-footer>
				</div>
			</div>

			<scroll-top v-if="isMounted"></scroll-top>
		</div>

		<app-toolbar></app-toolbar>

		<!-- 메인 레이어 팝업 -->
		<main-layer v-if="isMounted"></main-layer>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import { useHead } from '$/composables/useHead';
	import { useUserAgent } from '$/composables/useUserAgent';
	import ScrollTop from '@/component/ScrollTop.vue';
	import AppFooter from '@/component/app/AppFooter.vue';
	import AppHeader from '@/component/app/AppHeader.vue';
	import AppToolbar from '@/component/app/AppToolbar.vue';
	import MainLayer from '@/page/main/component/layer/MainLayer.vue';

	const { isAppUser, isIosUser, isAndroidUser, isMobileUser } = useUserAgent();

	useHead({ title: '메인' });
	function appStoreLink() {
		if (isIosUser) {
			return window.open('itms-apps://itunes.apple.com/kr/app/apple-store/id6470781539', '_blank');
		}
		else if (isAndroidUser) {
			return window.open('https://play.google.com/store/apps/details?id=kr.triz.keeif', '_blank');
		}
		else {
			return;
		}
	}

	const isMounted = ref<boolean>(false);
	onMounted(() => {
		isMounted.value = true;
	});
</script>