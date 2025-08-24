<template>
	<layout title="마이페이지">
		<!-- 회원정보 -->
		<section
			v-if="member"
			class="m_mymain-member"
		>
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
				<b>{{ member.name }}님 안녕하세요!</b>
			</h2>
			<ul class="mm_flex T=equal m_mymain-member-like">
				<li>
					<mm-link :to="{ name: 'MyWishlistProduct' }">
						<dl><dt><i class="ico_like"></i>Item</dt><dd>{{ number(wishCounts.wished_item_count) }}</dd></dl>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyWishlistBrand' }">
						<dl><dt><i class="ico_like"></i>Brand</dt><dd>{{ number(wishCounts.wished_brand_count) }}</dd></dl>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyFollow' }">
						<dl><dt><i class="ico_like"></i>Following</dt><dd>{{ number(wishCounts.following_count) }}</dd></dl>
					</mm-link>
				</li>
			</ul>
			<div class="m_mymain-member-info">
				<mm-link :to="{ name: 'MyBenefitCoupon' }">
					<dl class="mm_flex">
						<dt class="mm_flex-equal">
							보유 쿠폰
						</dt>
						<dd><strong>{{ number(benefitState.coupon_count) }}</strong><sub>장</sub></dd>
					</dl>
				</mm-link>
				<mm-link :to="{ name: 'MyBenefitPoint' }">
					<dl class="mm_flex">
						<dt class="mm_flex-equal">
							보유 적립금
						</dt>
						<dd><strong>{{ number(benefitState.point) }}</strong><sub>원</sub></dd>
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
				</div>
			</div>
		</section>

		<!-- 진행중인 주문 -->
		<section class="m_mymain-order">
			<h3 class="mm_heading">
				<b>진행중인 주문<small>최근 3주 기준</small></b>
			</h3>
			<ol class="mm_flex T=equal">
				<!-- (D) 진행중인 주문건이 1건 이상인 경우 strong 태그에 mm_text-variable 클래스를 추가합니다. -->
				<li
					v-for="step in normalSteps"
					:key="step.key"
				>
					<mm-link :to="{ name: 'MyOrder', query: { status_code: step.code } }">
						<strong :class="{ 'mm_text-variable': step.count > 0 }">{{ step.count }}</strong>
						<b>{{ step.label }}</b>
					</mm-link>
				</li>
			</ol>

			<!-- (D) 취소, 교환, 반품이 1건 미만인 경우 <span> 태그, 1건 이상인 경우에는 <strong> 태그로 감싸줍니다. -->
			<ul class="mm_flex T=equal">
				<li>
					<mm-link :to="{ name: 'MyOrderCancel' }">
						<p>
							취소
							<component :is="cancelCount > 0 ? 'strong' : 'span'">
								{{ cancelCount }}
							</component>
						</p>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyOrderReturn' }">
						<p>
							반품
							<component :is="returnCount > 0 ? 'strong' : 'span'">
								{{ returnCount }}
							</component>
						</p>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'MyOrderExchange' }">
						<p>
							교환
							<component :is="exchangeCount > 0 ? 'strong' : 'span'">
								{{ exchangeCount }}
							</component>
						</p>
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
				<b>최근 본 상품</b><strong>{{ recentViewGoodsRecords.length }}</strong>
			</h3>
			<template v-if="recentViewGoodsRecords.length < 1">
				<p class="mm_text-none">
					<i class="ico_text-none"></i>최근 본 상품이 없습니다
				</p>
			</template>
			<template v-else>
				<div class="mm_scroller T=x">
					<ul>
						<li
							v-for="recentViewGoodsRecord in recentViewGoodsRecords"
							:key="recentViewGoodsRecord.goods.id"
						>
							<mm-link :to="{ name: 'ProductDetail', params: { id: recentViewGoodsRecord.goods.id } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										:src="recentViewGoodsRecord.goods.thumbnail_url"
									></lazyload>
									<p
										v-if="recentViewGoodsRecord.goods.is_soldout"
										class="text_soldout"
									>
										<b>품절</b>
									</p>
									<figcaption class="mm_ir-blind">
										<p class="text_brand">
											{{ recentViewGoodsRecord.goods.brand_name }}
										</p>
										<p class="text_product">
											{{ recentViewGoodsRecord.goods.name }}
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</li>
					</ul>
				</div>
				<mm-link
					class="btn_more"
					:to="{ name: 'MyRecentlyProduct'}"
				>
					<b>더보기</b><i class="ico_link"></i>
				</mm-link>
			</template>
		</section>

		<!-- 최근 본 기획전 -->
		<section class="m_mymain-recent">
			<h3 class="mm_strapline">
				<b>최근 본 기획전</b><strong>{{ recentViewPlanningEvents.length }}</strong>
			</h3>
			<template v-if="recentViewPlanningEvents.length < 1">
				<p class="mm_text-none">
					<i class="ico_text-none"></i>최근 본 기획전이 없습니다
				</p>
			</template>
			<template v-else>
				<div class="mm_list">
					<ul>
						<li
							v-for="planning in recentViewPlanningEvents"
							:key="planning.id"
						>
							<a
								href="#"
								@click.prevent="goPromotionPage(planning)"
							>
								<b
									v-if="planning.is_ended"
									class="text_status T=status-off"
								>종료</b>
								<b
									v-else
									class="text_status"
								>진행중</b>
								<b>{{ planning.title }}</b>
							</a>
						</li>
					</ul>
				</div>
				<mm-link
					:to="{ name: 'MyRecentlyPromotion' }"
					class="btn_more"
				>
					<b>더보기</b><i class="ico_link"></i>
				</mm-link>
			</template>
		</section>
	</layout>
</template>

<script setup lang="ts">
	import { storeToRefs } from 'pinia';
	import { useRecentViewGoodsStore } from '$/stores/useRecentViewGoodsStore';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyShopping } from '$/composables/useMyShopping';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const { number } = useFormatter();
	const myShopping = useMyShopping();
	const { router, member, bom } = useGlobalPageContext();
	const { recordsByRecent: recentViewGoodsRecords } = storeToRefs(useRecentViewGoodsStore());

	const [orderState, benefitState, recentViewPlanningEvents, wishCounts] = await Promise.all(
		[
			myShopping.getOrderStateContext(),
			myShopping.getBenefitStates(),
			myShopping.getRecentViewPlanningEvents(10),
			myShopping.getWishCounts(),
		],
	);
	const { normalSteps, cancelCount, returnCount, exchangeCount } = orderState;

	function goPromotionPage(planning: RecentViewPlanningEvent) {
		if (planning.is_ended) {
			return bom.alert('종료된 기획전 입니다.');
		}

		return router.push({
			name: 'PromotionDetail',
			params: {
				id: planning.id,
			},
		});
	}
</script>