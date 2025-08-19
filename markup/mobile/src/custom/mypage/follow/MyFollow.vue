<template>
	<layout
		title="팔로잉 목록"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div
			class="m_mylike-following"
			:class="{ 'T=skeleton': isLoading }"
		>
			<div class="mm_inner">
				<p class="text_total">
					팔로잉<strong>1,221</strong>
				</p>
				<p
					v-if="items.length < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>팔로잉 내역이 없습니다
				</p>
				<template v-else>
					<ul
						v-if="isLoading"
						:class="{ 'T=skeleton': isLoading }"
					>
						<li
							v-for="item in 5"
							:key="item"
						>
							<div class="btn_influencer">
								<i></i>
								<strong></strong>
								<p></p>
							</div>
							<div class="mm_btn_box">
								<div class="mm_btn"></div>
								<div class="btn_alarm"></div>
							</div>
						</li>
					</ul>

					<ul v-else>
						<li>
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<figure>
									<lazyload
										class="mm_bg-cover"
										src="/image/_sample/influencer_profile1.jpg"
									></lazyload>
									<figcaption>
										<strong>강하나</strong>
										<p>강하나의 건강한 라이프</p>
									</figcaption>
								</figure>
							</mm-link>
							<div class="mm_btn_box">
								<toggle
									class="mm_btn T=sm T=lighter"
									title="팔로잉 해제"
									active-title="팔로잉"
									active-class="S=off"
								>
									<b>팔로잉</b>
								</toggle>
								<toggle
									class="btn_alarm"
									title="알림 해제"
									active-title="알림 설정"
									active-class="S=off"
								>
									<i class="ico_alarm"></i>
								</toggle>
							</div>
						</li>
						<li>
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<figure>
									<lazyload
										class="mm_bg-cover"
										src="/image/_sample/influencer_profile2.jpg"
									></lazyload>
									<figcaption>
										<strong>뚠미</strong>
										<p>𝘄𝗲𝗹𝗹𝗻𝗲𝘀𝘀 𝗱𝗶𝗿𝗲𝗰𝘁𝗼𝗿🖤</p>
									</figcaption>
								</figure>
							</mm-link>
							<div class="mm_btn_box">
								<toggle
									class="mm_btn T=sm T=lighter"
									title="팔로잉 해제"
									active-title="팔로잉"
									active-class="S=off"
								>
									<b>팔로잉</b>
								</toggle>
								<toggle
									class="btn_alarm"
									title="알림 해제"
									active-title="알림 설정"
									active-class="S=off"
								>
									<i class="ico_alarm"></i>
								</toggle>
							</div>
						</li>
						<li>
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<figure>
									<lazyload
										class="mm_bg-cover"
										src="/image/_sample/influencer_profile3.jpg"
									></lazyload>
									<figcaption>
										<strong>김베리</strong>
										<p>먹방요정 김베리🍰</p>
									</figcaption>
								</figure>
							</mm-link>
							<div class="mm_btn_box">
								<toggle
									class="mm_btn T=sm T=lighter"
									title="팔로잉 해제"
									active-title="팔로잉"
									active-class="S=off"
								>
									<b>팔로잉</b>
								</toggle>
								<toggle
									class="btn_alarm"
									title="알림 해제"
									active-title="알림 설정"
									active-class="S=off"
								>
									<i class="ico_alarm"></i>
								</toggle>
							</div>
						</li>
						<li>
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<figure>
									<lazyload
										class="mm_bg-cover"
										src="/image/_sample/influencer_profile4.jpg"
									></lazyload>
									<figcaption>
										<strong>스미</strong>
										<p>스미홈트&스미마켓</p>
									</figcaption>
								</figure>
							</mm-link>
							<div class="mm_btn_box">
								<toggle
									class="mm_btn T=sm T=lighter"
									title="팔로잉 해제"
									active-title="팔로잉"
									active-class="S=off"
								>
									<b>팔로잉</b>
								</toggle>
								<toggle
									class="btn_alarm"
									title="알림 해제"
									active-title="알림 설정"
									active-class="S=off"
								>
									<i class="ico_alarm"></i>
								</toggle>
							</div>
						</li>
						<li>
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<figure>
									<lazyload
										class="mm_bg-cover"
										src="/image/_sample/influencer_profile5.jpg"
									></lazyload>
									<figcaption>
										<strong>연정</strong>
										<p>연정이네🧸</p>
									</figcaption>
								</figure>
							</mm-link>
							<div class="mm_btn_box">
								<toggle
									class="mm_btn T=sm T=lighter"
									title="팔로잉 해제"
									active-title="팔로잉"
									active-class="S=off"
								>
									<b>팔로잉</b>
								</toggle>
								<toggle
									class="btn_alarm"
									title="알림 해제"
									active-title="알림 설정"
									active-class="S=off"
								>
									<i class="ico_alarm"></i>
								</toggle>
							</div>
						</li>
						<li>
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<figure>
									<lazyload
										class="mm_bg-cover"
										src="/image/_sample/influencer_profile1.jpg"
									></lazyload>
									<figcaption>
										<strong>강하나</strong>
										<p>강하나의 건강한 라이프 강하나의 건강한 라이프 강하나의 건강한 라이프 강하나의 건강한 라이프 강하나의 건강한 라이프 강하나의 건강한 라이프 강하나의 건강한 라이프</p>
									</figcaption>
								</figure>
							</mm-link>
							<div class="mm_btn_box">
								<toggle
									class="mm_btn T=sm T=lighter"
									title="팔로잉 해제"
									active-title="팔로잉"
									active-class="S=off"
								>
									<b>팔로잉</b>
								</toggle>
								<toggle
									class="btn_alarm"
									title="알림 해제"
									active-title="알림 설정"
									active-class="S=off"
								>
									<i class="ico_alarm"></i>
								</toggle>
							</div>
						</li>
						<li>
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<figure>
									<lazyload
										class="mm_bg-cover"
										src="/image/_sample/influencer_profile2.jpg"
									></lazyload>
									<figcaption>
										<strong>뚠미</strong>
										<p>𝘄𝗲𝗹𝗹𝗻𝗲𝘀𝘀 𝗱𝗶𝗿𝗲𝗰𝘁𝗼𝗿🖤</p>
									</figcaption>
								</figure>
							</mm-link>
							<div class="mm_btn_box">
								<toggle
									class="mm_btn T=sm T=lighter"
									title="팔로잉 해제"
									active-title="팔로잉"
									active-class="S=off"
								>
									<b>팔로잉</b>
								</toggle>
								<toggle
									class="btn_alarm"
									title="알림 해제"
									active-title="알림 설정"
									active-class="S=off"
								>
									<i class="ico_alarm"></i>
								</toggle>
							</div>
						</li>
						<li>
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<figure>
									<lazyload
										class="mm_bg-cover"
										src="/image/_sample/influencer_profile3.jpg"
									></lazyload>
									<figcaption>
										<strong>김베리</strong>
										<p>먹방요정 김베리🍰</p>
									</figcaption>
								</figure>
							</mm-link>
							<div class="mm_btn_box">
								<toggle
									class="mm_btn T=sm T=lighter"
									title="팔로잉 해제"
									active-title="팔로잉"
									active-class="S=off"
								>
									<b>팔로잉</b>
								</toggle>
								<toggle
									class="btn_alarm"
									title="알림 해제"
									active-title="알림 설정"
									active-class="S=off"
								>
									<i class="ico_alarm"></i>
								</toggle>
							</div>
						</li>
						<li>
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<figure>
									<lazyload
										class="mm_bg-cover"
										src="/image/_sample/influencer_profile4.jpg"
									></lazyload>
									<figcaption>
										<strong>스미</strong>
										<p>스미홈트&스미마켓</p>
									</figcaption>
								</figure>
							</mm-link>
							<div class="mm_btn_box">
								<toggle
									class="mm_btn T=sm T=lighter"
									title="팔로잉 해제"
									active-title="팔로잉"
									active-class="S=off"
								>
									<b>팔로잉</b>
								</toggle>
								<toggle
									class="btn_alarm"
									title="알림 해제"
									active-title="알림 설정"
									active-class="S=off"
								>
									<i class="ico_alarm"></i>
								</toggle>
							</div>
						</li>
						<li>
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<figure>
									<lazyload
										class="mm_bg-cover"
										src="/image/_sample/influencer_profile5.jpg"
									></lazyload>
									<figcaption>
										<strong>연정</strong>
										<p>연정이네🧸</p>
									</figcaption>
								</figure>
							</mm-link>
							<div class="mm_btn_box">
								<toggle
									class="mm_btn T=sm T=lighter"
									title="팔로잉 해제"
									active-title="팔로잉"
									active-class="S=off"
								>
									<b>팔로잉</b>
								</toggle>
								<toggle
									class="btn_alarm"
									title="알림 해제"
									active-title="알림 설정"
									active-class="S=off"
								>
									<i class="ico_alarm"></i>
								</toggle>
							</div>
						</li>
					</ul>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button
									type="button"
									class="mm_btn T=sm T=line btn_more"
								>
									<b>팔로잉 리스트 더보기</b><i class="ico_more"></i>
								</button>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	const isLoading = false;

	// 팔로잉 버튼 제어
	// function followChange(__e) {

	// 	var $this = this;
	// 	var $thisText = mm.find('b', this)[0];
	// 	var $nextBtn = this.nextElementSibling;

	// 	if (__e) {
	// 		$thisText.innerText = '팔로우';
	// 		mm.switch.on($nextBtn);
	// 	}
	// 	else {
	// 		$thisText.innerText = '팔로잉';
	// 		mm.switch.off($nextBtn);
	// 	}

	// }
</script>