<template>
	<layout
		title="회원등급 및 혜택"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-cs-benefit">
			<div class="mm_grade">
				<h3><b>등급별 혜택 안내</b></h3>
				<p>최근 3개월간 실 결제금액을 기준으로 매월 1일<br>구매등급에 반영됩니다</p>
				<div class="mm_accordion">
					<ul>
						<li>
							<dropdown
								tag="dl"
								group="help-level"
							>
								<template #button>
									<p class="text_grade">
										<strong>
											<lazyload
												class="mm_bg-cover image_grade"
												src="/image/common/level5.png"
											></lazyload>등급1
										</strong><span>200만원 이상, 10건 이상 구매</span>
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
								group="help-level"
							>
								<template #button>
									<p class="text_grade">
										<strong>
											<lazyload
												class="mm_bg-cover image_grade"
												src="/image/common/level4.png"
											></lazyload>등급2
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
								group="help-level"
							>
								<template #button>
									<p class="text_grade">
										<strong>
											<lazyload
												class="mm_bg-cover image_grade"
												src="/image/common/level3.png"
											></lazyload>등급3
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
								group="help-level"
							>
								<template #button>
									<p class="text_grade">
										<strong>
											<lazyload
												class="mm_bg-cover image_grade"
												src="/image/common/level2.png"
											></lazyload>등급4
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
								group="help-level"
							>
								<template #button>
									<p class="text_grade">
										<strong>
											<lazyload
												class="mm_bg-cover image_grade"
												src="/image/common/level1.png"
											></lazyload>등급5
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
			<div class="mm_note">
				<ul class="mm_inner">
					<li>회원 등급은 산정 기준에 따라 매월 1일에 확정됩니다.</li>
					<li>등급별 쿠폰은 매월 1일 다운로드 가능하며, 해당 월에 한하여 사용 가능합니다.</li>
					<li>받으신 쿠폰은 <strong>마이페이지 &#62; 혜택관리 &#62; 보유 쿠폰</strong> 페이지에서 확인 가능합니다.</li>
					<li>기간 내 사용하지 않은 쿠폰은 이월되지 않으며, 타 쿠폰과 중복 사용 불가합니다.</li>
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