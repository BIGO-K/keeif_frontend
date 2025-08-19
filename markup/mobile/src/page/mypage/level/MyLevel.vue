<template>
	<layout
		title="회원등급 및 혜택"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<section class="m_popup-mymember T=level5">
			<h2>
				<lazyload
					class="mm_bg-contain image_grade"
					src="/image/common/level5.png"
				></lazyload>
				<b>홍길동님은 <strong>VIP</strong>입니다</b>
			</h2>

			<!-- 등급 구매정보 -->
			<div class="m_popup-mymember-amount">
				<!-- 구매금액 -->
				<div class="m...amount-progress">
					<dl class="mm_flex">
						<dt class="mm_flex-equal">
							구매금액<small>최근 12개월</small>
						</dt>
						<dd class="text_price">
							<strong>3,150,000</strong>
						</dd>
					</dl>
					<!-- (D) 'm...amount-progress-bar > i'의 title, width 값에 목표 금액 대비 현재 구매액의 비율값을 추가합니다. -->
					<b class="m...amount-progress-bar">
						<i
							title="100%"
							style="width:100%;"
						></i>
					</b>
					<p class="text_price">
						<strong class="text_min">1,000,000</strong>
						<strong class="text_max">2,000,000</strong>
					</p>
				</div>

				<!-- 구매횟수 -->
				<div class="m...amount-progress">
					<dl class="mm_flex">
						<dt class="mm_flex-equal">
							구매횟수<small>최근 12개월</small>
						</dt>
						<dd><strong>5</strong><sub>건</sub></dd>
					</dl>
					<!-- (D) 'm...amount-progress-bar > i'의 title, width 값에 목표 금액 대비 현재 구매액의 비율값을 추가합니다. -->
					<b class="m...amount-progress-bar">
						<i
							title="30%"
							style="width:30%;"
						></i>
					</b>
					<p>
						<strong class="text_min">0<sub>건</sub></strong>
						<strong class="text_max">10<sub>건</sub></strong>
					</p>
				</div>
				<p>
					<b>추가로 <strong>100,000</strong>원 또는 <strong>10</strong>건 더 구매하시면</b>
					<span><strong>VIP</strong>등급을 유지할 수 있어요</span>
					<!-- (D) 버튼 클릭 시 노출 되어야 하는 등급별 혜택 안내 내용의 index 값을 moveToBenefit 이벤트 parameter 값으로 넣어줍니다 -->
					<button
						type="button"
						class="btn_benefit"
						onclick="moveToBenefit(0);"
					>
						<b>혜택보기</b><i class="ico_link-circle"></i>
					</button>
				</p>
			</div>

			<!-- 등급 쿠폰정보 -->
			<div class="m_popup-mymember-coupon">
				<ul>
					<li>
						<strong><span>x</span>1<sub>장</sub></strong>
						<div class="mm_coupon T=xl">
							<mm-link
								class="mm_coupon-inner"
								:to="{ name: '' }"
							>
								<p class="text_percent">
									<strong>7</strong><sub>%</sub>
								</p>
								<p class="text_coupon">
									등급별 쿠폰
								</p>
								<p class="text_download">
									쿠폰받기<i class="ico_coupon-download T=circle"></i>
								</p>
							</mm-link>
						</div>
					</li>
					<li>
						<!-- (D) 무제한 쿠폰의 경우 strong 태그에 T=unlimited 클래스를 추가합니다 -->
						<strong class="T=unlimited">무제한</strong>
						<div class="mm_coupon T=xl">
							<mm-link
								class="mm_coupon-inner"
								:to="{ name: '' }"
							>
								<p class="text_percent">
									<strong>7</strong><sub>%</sub>
								</p>
								<p class="text_coupon">
									등급별 쿠폰
								</p>
								<p class="text_download">
									쿠폰받기<i class="ico_coupon-download T=circle"></i>
								</p>
							</mm-link>
						</div>
					</li>
				</ul>
			</div>

			<!-- 유의사항 -->
			<div class="mm_note">
				<dropdown
					:is-active="true"
					icon-class="T=box"
				>
					<template #button>
						<i class="ico_info"></i><b>쿠폰 유의사항</b>
					</template>
					<template #content>
						<ul>
							<li>회원 등급은 산정 기준에 따라 매월 1일에 확정됩니다.</li>
							<li>등급별 쿠폰은 매월 1일 자동 발급되며 해당월에 한하여 사용 가능합니다.</li>
							<li>받으신 쿠폰은 <strong>마이페이지 &#62; 혜택관리 &#62; 보유 쿠폰</strong>에서 확인할 수 있습니다.</li>
							<li>기간 내 사용하지 않은 쿠폰은 이월되지 않으며, 타쿠폰과 중복 사용 불가합니다.</li>
						</ul>
					</template>
				</dropdown>
			</div>
		</section>
		<hr class="mm_line">
		<div class="mm_grade">
			<h3><b>등급별 혜택 안내</b></h3>
			<p>최근 3개월간 실 결제금액을 기준으로 매월 1일<br>구매등급에 반영됩니다</p>
			<div class="mm_accordion">
				<ul>
					<li>
						<dropdown
							tag="dl"
							group="my-level"
						>
							<template #button>
								<p class="text_grade">
									<strong>
										<lazyload
											class="mm_bg-cover image_grade"
											src="/image/common/level5.png"
										></lazyload>
										등급1
									</strong>
									<span>200만원 이상, 10건 이상 구매</span>
								</p>
							</template>
							<template #content>
								<dl>
									<dt>등급별 쿠폰</dt>
									<dd>
										<p>7% 할인</p>
										<div class="mm_coupon">
											<div class="mm_coupon-inner">
												<p class="text_percent">
													<strong>7</strong><sub>%</sub>
												</p>
												<p class="text_coupon">
													등급할인 쿠폰
												</p>
											</div>
										</div>
										<span class="text_amount">x 1<sub>장</sub></span>
									</dd>
									<dd>
										<!-- (D) 무제한 쿠폰의 경우 text_amount 태그에 T=unlimited 클래스를 추가합니다 -->
										<p>7% 할인</p>
										<div class="mm_coupon">
											<div class="mm_coupon-inner">
												<p class="text_percent">
													<strong>7</strong><sub>%</sub>
												</p>
												<p class="text_coupon">
													등급할인 쿠폰
												</p>
											</div>
										</div>
										<span class="text_amount T=unlimited"><span>x</span> 무제한</span>
									</dd>
								</dl>
								<dl>
									<dt>등급 적립율</dt>
									<dd>5%</dd>
								</dl>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="my-level"
						>
							<template #button>
								<p class="text_grade">
									<strong>
										<lazyload
											class="mm_bg-cover image_grade"
											src="/image/common/level4.png"
										></lazyload>
										등급2
									</strong>
									<span>150만원 이상, 5건 이상 구매</span>
								</p>
							</template>
							<template #content>
								<dl>
									<dt>등급별 쿠폰</dt>
									<dd>
										<p>5% 할인</p>
										<div class="mm_coupon">
											<div class="mm_coupon-inner">
												<p class="text_percent">
													<strong>5</strong><sub>%</sub>
												</p>
												<p class="text_coupon">
													등급할인 쿠폰
												</p>
											</div>
										</div>
										<span class="text_amount">x 1<sub>장</sub></span>
									</dd>
								</dl>
								<dl>
									<dt>등급 적립율</dt>
									<dd>4%</dd>
								</dl>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="my-level"
						>
							<template #button>
								<p class="text_grade">
									<strong>
										<lazyload
											class="mm_bg-cover image_grade"
											src="/image/common/level3.png"
										></lazyload>
										등급3
									</strong>
									<span>100만원 이상, 2건 이상 구매</span>
								</p>
							</template>
							<template #content>
								<dl>
									<dt>등급별 쿠폰</dt>
									<dd>
										<p>5% 할인</p>
										<div class="mm_coupon">
											<div class="mm_coupon-inner">
												<p class="text_percent">
													<strong>3</strong><sub>%</sub>
												</p>
												<p class="text_coupon">
													등급할인 쿠폰
												</p>
											</div>
										</div>
										<span class="text_amount">x 1<sub>장</sub></span>
									</dd>
								</dl>
								<dl>
									<dt>등급 적립율</dt>
									<dd>3%</dd>
								</dl>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="my-level"
						>
							<template #button>
								<p class="text_grade">
									<strong>
										<lazyload
											class="mm_bg-cover image_grade"
											src="/image/common/level2.png"
										></lazyload>
										등급4
									</strong>
									<span>50만원 이상, 1건 이상 구매</span>
								</p>
							</template>
							<template #content>
								<dl>
									<dt>등급별 쿠폰</dt>
									<dd>
										<p>15,000원 할인</p>
										<div class="mm_coupon">
											<div class="mm_coupon-inner">
												<p class="text_price">
													<strong>15,000</strong>
												</p>
												<p class="text_coupon">
													등급할인 쿠폰
												</p>
											</div>
										</div>
										<span class="text_amount">x 1<sub>장</sub></span>
									</dd>
								</dl>
								<dl>
									<dt>등급 적립율</dt>
									<dd>2%</dd>
								</dl>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="my-level"
						>
							<template #button>
								<p class="text_grade">
									<strong>
										<lazyload
											class="mm_bg-cover image_grade"
											src="/image/common/level1.png"
										></lazyload>
										등급5
									</strong>
									<span>신규 회원 및 미구매</span>
								</p>
							</template>
							<template #content>
								<dl>
									<dt>등급별 쿠폰</dt>
									<dd>-</dd>
								</dl>
								<dl>
									<dt>등급 적립율</dt>
									<dd>1%</dd>
								</dl>
							</template>
						</dropdown>
					</li>
				</ul>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
</script>

<!-- 현재 페이지 스크립트 -->
<!--
	<script>
	function moveToBenefit(__targetIndex) {

	var $gradeList = mm.find('.mm_accordion li');

	if (__targetIndex < 0) __targetIndex = 0;

	var $target = $gradeList[__targetIndex].children[0];
	mm.scroll.to($target, { _margin: 45 });
	if (!$target.classList.contains('S=on')) mm.find('.btn_dropdown', $target)[0].click();

	}
	</script>
-->