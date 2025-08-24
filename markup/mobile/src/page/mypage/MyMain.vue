<template>
	<layout title="마이페이지">
		<!-- 회원정보 -->
		<!--
			(D) 'm_my-member' 영역에 회원 등급에 맞는 'T=등급' 클래스를 추가합니다.
			등급 : level5, level4, level3, level2, level1
		-->
		<section class="m_mymain-member">
			<!-- TODO 등급은 추후 추가 예정 -->
			<!--
				<h2>
				<lazyload
				class="mm_bg-contain image_grade"
				src="/image/common/level5.png"
				></lazyload>
				<b>홍길동님은 <strong>VIP</strong>입니다</b>
				</h2>
			-->
			<h2>
				<b>홍길동님 안녕하세요!</b>
			</h2>
			<ul class="mm_flex T=equal m_mymain-member-like">
				<li>
					<mm-link :to="{ name: 'MyWishlistProduct' }">
						<dl><dt><i class="ico_like"></i>Item</dt><dd>19</dd></dl>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyWishlistBrand' }">
						<dl><dt><i class="ico_like"></i>Brand</dt><dd>31</dd></dl>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyFollow' }">
						<dl><dt><i class="ico_like"></i>Following</dt><dd>221</dd></dl>
					</mm-link>
				</li>
			</ul>
			<div class="m_mymain-member-info">
				<mm-link :to="{ name: 'MyBenefitCoupon' }">
					<dl class="mm_flex">
						<dt class="mm_flex-equal">
							보유 쿠폰
						</dt>
						<dd><strong>10</strong><sub>장</sub></dd>
					</dl>
				</mm-link>
				<mm-link :to="{ name: 'MyBenefitPoint' }">
					<dl class="mm_flex">
						<dt class="mm_flex-equal">
							보유 적립금
						</dt>
						<dd><strong>3,200</strong><sub>원</sub></dd>
					</dl>
				</mm-link>
				<div class="mm_flex T=auto">
					<!-- TODO 등급은 추후 추가 예정 -->
					<!--
						<mm-link :to="{ name: 'MyLevel' }">
						<b>등급혜택</b>
						</mm-link>
					-->
					<mm-link :to="{ name: 'MySetting' }">
						<b>앱설정</b>
					</mm-link>
					<mm-link :to="{ name: 'MyInfoUpdate' }">
						<b>정보관리</b>
					</mm-link>

					<review-template-button v-if="true"></review-template-button>
				</div>
			</div>
		</section>

		<!-- 진행중인 주문 -->
		<section class="m_mymain-order">
			<h3 class="mm_heading">
				<b>진행중인 주문<small>최근 3주 기준</small></b>
			</h3>
			<!-- (D) 진행중인 주문건이 1건 이상인 경우 strong 태그에 mm_text-variable 클래스를 추가합니다. -->
			<ol class="mm_flex T=equal">
				<li>
					<mm-link :to="{ name: 'MyOrder' }">
						<strong>0</strong><b>입금대기</b>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyOrder' }">
						<strong class="mm_text-variable">2</strong><b>결제완료</b>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyOrder' }">
						<strong>0</strong><b>배송준비</b>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyOrder' }">
						<strong>0</strong><b>배송중</b>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyOrder' }">
						<strong>0</strong><b>배송완료</b>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyOrder' }">
						<strong class="mm_text-variable">8</strong><b>구매확정</b>
					</mm-link>
				</li>
			</ol>

			<!-- (D) 취소, 교환, 반품이 1건 미만인 경우 <span> 태그, 1건 이상인 경우에는 <strong> 태그로 감싸줍니다. -->
			<ul class="mm_flex T=equal">
				<li>
					<mm-link :to="{ name: 'MyOrderCancel' }">
						<p>취소<strong>3</strong></p>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyOrderReturn' }">
						<p>반품<strong>12</strong></p>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyOrderExchange' }">
						<p>교환<strong>0</strong></p>
					</mm-link>
				</li>
			</ul>
		</section>

		<!-- 마이페이지 메뉴 -->
		<div class="m_mymain-menu">
			<ul>
				<li>
					<mm-link :to="{ name: 'MyOrder' }">
						<b>주문 관리</b><i class="ico_link"></i>
					</mm-link>
				</li>
				<!-- TODO 등급은 추후 추가 예정 -->
				<!--
					<li>
					<mm-link :to="{ name: 'MyBenefitCoupon' }">
					<b>혜택 관리</b><i class="ico_link"></i>
					</mm-link>
					</li>
				-->
				<li>
					<mm-link :to="{ name: 'MyWishlistProduct' }">
						<b>My 찜</b><i class="ico_link"></i>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyReviewPending' }">
						<b>리뷰 관리</b><i class="ico_link"></i>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyInquirySingle' }">
						<b>문의 관리</b><i class="ico_link"></i>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyInquirySingleCreate' }">
						<b>1:1 문의하기</b><i class="ico_link"></i>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyRefund' }">
						<b>환불 계좌 관리</b><i class="ico_link"></i>
					</mm-link>
				</li>
			</ul>
		</div>

		<!-- 최근 본 상품 -->
		<section class="m_mymain-recent">
			<h3 class="mm_strapline">
				<b>최근 본 상품</b><strong>5</strong>
			</h3>
			<div class="mm_scroller T=x">
				<ul>
					<li>
						<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
							<figure>
								<lazyload
									class="mm_bg-cover image_product"
									src="/image/_sample/prod_x1_2.png"
								></lazyload>
								<figcaption class="mm_ir-blind">
									<p class="text_brand">
										엠몬스타
									</p>
									<p class="text_product">
										[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
									</p>
								</figcaption>
							</figure>
						</mm-link>
					</li>
					<li>
						<a>
							<figure>
								<lazyload
									class="mm_bg-cover image_product"
									src="/image/_sample/prod_x1_1.png"
								></lazyload>
								<p class="text_soldout"><b>품절</b></p>
								<figcaption class="mm_ir-blind">
									<p class="text_brand">엠몬스타</p>
									<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
							<figure>
								<lazyload
									class="mm_bg-cover image_product"
									src="/image/_sample/prod_x1_3.png"
								></lazyload>
								<figcaption class="mm_ir-blind">
									<p class="text_brand">
										엠몬스타
									</p>
									<p class="text_product">
										[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
									</p>
								</figcaption>
							</figure>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
							<figure>
								<lazyload
									class="mm_bg-cover image_product"
									src="/image/_sample/prod_x1_4.png"
								></lazyload>
								<figcaption class="mm_ir-blind">
									<p class="text_brand">
										엠몬스타
									</p>
									<p class="text_product">
										[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
									</p>
								</figcaption>
							</figure>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
							<figure>
								<lazyload
									class="mm_bg-cover image_product"
									src="/image/_sample/prod_x1_1.png"
								></lazyload>
								<figcaption class="mm_ir-blind">
									<p class="text_brand">
										엠몬스타
									</p>
									<p class="text_product">
										[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
									</p>
								</figcaption>
							</figure>
						</mm-link>
					</li>
				</ul>
			</div>
			<mm-link
				class="btn_more"
				:to="{ name: 'MyRecentlyProduct' }"
			>
				<b>더보기</b><i class="ico_link"></i>
			</mm-link>
		</section>

		<!-- 최근 본 기획전 -->
		<section class="m_mymain-recent">
			<h3 class="mm_strapline">
				<b>최근 본 기획전</b><strong>5</strong>
			</h3>
			<div class="mm_list">
				<ul>
					<li>
						<mm-link :to="{ name: 'PromotionDetail', params: { id: 123 } }">
							<b class="text_status">진행중</b><b>특가! 봄 신상 핫 세일</b>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: 'PromotionDetail', params: { id: 123 } }">
							<b class="text_status">진행중</b><b>깜짝 브랜드day ♡ MAX 추가 20%인하</b>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: 'PromotionDetail', params: { id: 123 } }">
							<b class="text_status">진행중</b><b>단 하나의 ONE-PIECE!</b>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: 'PromotionDetail', params: { id: 123 } }">
							<b class="text_status">진행중</b><b>꾸안꾸를 위해 티셔츠를 모았어요</b>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: 'PromotionDetail', params: { id: 123 } }">
							<b class="text_status T=status-off">종료</b><b>브랜드 위크 최대 24% 쿠폰혜택</b>
						</mm-link>
					</li>
				</ul>
			</div>
			<mm-link
				class="btn_more"
				:to="{ name: 'MyRecentlyPromotion' }"
			>
				<b>더보기</b><i class="ico_link"></i>
			</mm-link>
		</section>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import ReviewTemplateButton from '@/feature/review-template/component/ReviewTemplateMyButton.vue';
</script>