<template>
	<layout-detail>
		<template #page>
			<div class="m_prodetail">
				<!-- 상품상세 상단 -->
				<div class="m_prodetail-head">
					<!-- 품절임박 -->
					<!-- (D) 품절임박 상품 일 때만 노출합니다. -->
					<p class="m_prodetail-head-stock">
						<i class="ico_clock"></i><strong>품절임박</strong>서두르세요!<span>남은수량</span><strong class="text_stock">1<sub>개</sub></strong>
					</p>

					<!-- 품절 -->
					<!-- (D) 품절된 상품일 경우 노출합니다. -->
					<p class="m_prodetail-head-soldout">
						SOLD OUT
					</p>

					<!-- 상품정보 -->
					<div class="m_prodetail-head-product">
						<!-- 상품이미지 -->
						<carousel
							:items="detailCarouselItems"
							effect="cover"
							:use-pagination="true"
							:is-more-side="true"
							:is-error-remove="true"
						>
							<template #default="{ item }">
								<lazyload
									class="mm_bg-contain"
									:src="item.image"
								></lazyload>
								<span class="mm_ir-blind">{{ item.alt }}</span>
							</template>
						</carousel>
						<div class="m...product-info">
							<p class="text_star">
								<i
									class="ico_star-fill"
									title="별점"
								></i>
								<span>4.5</span>
								<button
									type="button"
									class="btn_review"
								>
									<b>리뷰 828개 보기</b>
								</button>
							</p>
							<mm-link
								class="btn_brand"
								:to="{ name: 'BrandShop', params: { id: 123 } }"
							>
								<b>엠몬스타</b><i class="ico_link"></i>
							</mm-link>
							<p class="text_product">
								<span class="text_foreword">[단독]</span>찰리브라운 폭신폭신 슬리퍼 3colors(Butter컬러 28일발송) N212UTS906
							</p>
							<p class="text_price">
								<span class="text_sale">10%</span><strong>235,000</strong><del>350,000</del>
							</p>
						</div>
					</div>
					<div class="mm_inner">
						<!-- 할인정보 -->
						<div class="m_prodetail-head-benefit">
							<div class="m...benefit-coupon">
								<p>M.MON 쇼핑몰 고객을 위한 혜택</p>
								<a
									class="btn_coupon"
									href="#"
									@click.prevent="overlayProductDetailCoupon"
								>
									<b>쿠폰 받기<i class="ico_coupon-download"></i></b>
								</a>

								<!-- (D) 쿠폰 다운이 완료된 경우에 노출합니다. -->
								<!-- <a class="btn_coupon T=coupon-complete"><b>쿠폰받기 완료<i class="ico_coupon-complete"></i></b></a> -->
							</div>
							<dropdown button-class="mm_flex">
								<template #button>
									<b>최대 할인가</b><b class="text_price"><strong>208,000</strong></b>
								</template>
								<template #content>
									<div class="m...benefit-detail">
										<h4><b>비회원가</b></h4>
										<dl>
											<dt>정가</dt><dd class="text_price">
												<span>353,000</span>
											</dd>
										</dl>
										<dl>
											<dt>특가할인</dt><dd class="text_price">
												<span>- 10,000</span>
											</dd>
										</dl>
										<dl>
											<dt>판매가</dt><dd class="text_price">
												<span>343,000</span>
											</dd>
										</dl>
									</div>
									<div class="m...benefit-detail">
										<h4><b>회원가</b></h4>
										<dl>
											<dt>회원할인</dt><dd class="text_price">
												<span>- 30,000</span>
											</dd>
										</dl>
										<dl>
											<dt>쿠폰할인</dt><dd class="text_price">
												<span>- 22,000</span>
											</dd>
										</dl>
										<dl>
											<dt>즉시할인</dt><dd class="text_price">
												<span>- 22,000</span>
											</dd>
										</dl>
										<dl>
											<dt>심야할인</dt><dd class="text_price">
												<span>- 22,000</span>
											</dd>
										</dl>
										<dl>
											<dt>회원 혜택가</dt><dd class="text_price">
												<span>208,000</span>
											</dd>
										</dl>
									</div>
									<div class="mm_note">
										<ul>
											<li>현재 최대 할인가의 금액 기준은 할인 혜택이 적용된 금액이며 일부는 회원에게만 적용될 수 있습니다.</li>
											<li>쿠폰 받기 버튼을 누르셔서 쿠폰을 다운로드하셔야 쿠폰 할인이 가능합니다.</li>
											<li>즉시 할인의 경우 주문 시 사용하는 쿠폰 및 적립금에 따라 할인금액이 변경될 수 있습니다.</li>
										</ul>
									</div>
								</template>
							</dropdown>
						</div>

						<!-- 배송정보 및 혜택 -->
						<div class="m_prodetail-head-info">
							<dl>
								<dt>배송정보</dt>

								<dawn-delivery></dawn-delivery>

								<dd>무료배송</dd>
								<dd>도서산간지역 5,000원</dd>
								<dd>배송기간 5~7일</dd>
								<dd>주문제작 상품으로 교환/반품 불가</dd>
							</dl>

							<arrive-probability v-if="true"></arrive-probability>

							<dl>
								<dt>혜택</dt>
								<dd>
									<a
										href="#"
										@click.prevent="overlayCardBenefit"
									>
										<b>50,000원 이상 결제 시 무이자할부</b><i class="ico_help-fill"></i>
									</a>
								</dd>
							</dl>
							<!-- (D) 예약판매 상품인 경우 입력한 예약판매 스케줄을 노출합니다. -->
							<!--
								<dl>
								<dt>예약배송</dt>
								<dd><p><span>예약판매 기간</span>2024-00-00 ~ 2024-00-00</p></dd>
								<dd><p><span>예약배송 기간</span>2024-00-00 ~ 2024-00-00</p></dd>
								</dl>
							-->

							<gift-info-button v-if="true"></gift-info-button>
						</div>

						<!-- 판매자샵 더보기 -->
						<mm-link
							class="btn_seller"
							:to="{ name: 'SellerShop', params: { id: 123 } }"
						>
							<b>판매자의 다른상품 더보기</b><i class="ico_link"></i>
						</mm-link>
					</div>
					<!-- 찜/공유하기 -->
					<div class="m_prodetail-head-like">
						<div class="mm_flex T=equal">
							<toggle
								class="btn_like"
								@click="overlayMyWishlistProductFolder"
							>
								<i class="ico_like"></i><b>찜<span>1,674</span></b>
							</toggle>
							<button
								type="button"
								class="btn_sns-share"
								@click="shareStore.open"
							>
								<i class="ico_share"></i><b>공유하기</b>
							</button>
						</div>
					</div>

					<!-- 추천 아이템 -->
					<section class="m_prodetail-head-recommend">
						<h3 class="m_prodetail-strapline">
							<b>이런 아이템은 어떠세요?</b>
						</h3>
						<div class="mm_scroller T=x">
							<div class="mm_product-list T=card">
								<ul>
									<li
										v-for="item in 5"
										:key="item"
									>
										<product-item
											class="T=pa"
											:is-sale-price="false"
											:is-react="false"
											:is-badge="false"
										></product-item>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>

				<!-- 상품상세 탭 -->
				<div
					v-tabSticky
					class="m_prodetail-tab"
				>
					<component-tab
						:tab-items="tabItems"
						:class="classSticky"
					></component-tab>
				</div>

				<div class="m_prodetail-foot">
					<!-- 추천 상품 -->
					<section>
						<h3 class="m_prodetail-strapline">
							<b>이 상품도 좋아하실 것 같아요</b>
						</h3>
						<div class="mm_scroller T=x">
							<div class="mm_product-list T=card">
								<ul>
									<li
										v-for="item in 5"
										:key="item"
									>
										<product-item
											class="T=pa"
											:is-sale-price="false"
											:is-react="false"
											:is-badge="false"
										></product-item>
									</li>
								</ul>
							</div>
						</div>
					</section>

					<!-- 인기 상품 -->
					<section>
						<h3 class="m_prodetail-strapline">
							<b>이 브랜드의 인기상품</b>
						</h3>
						<div class="mm_scroller T=x">
							<div class="mm_product-list T=card">
								<ul>
									<li
										v-for="item in 5"
										:key="item"
									>
										<product-item
											class="T=pa"
											:is-sale-price="false"
											:is-react="false"
											:is-badge="false"
										></product-item>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<div class="mm_accordion m_prodetail-info">
						<ul>
							<li>
								<dropdown tag="dl">
									<template #button>
										<p><b>일반 상품 정보</b></p>
									</template>
									<template #content>
										<table>
											<tbody>
												<tr>
													<th scope="row">
														<b>상품번호</b>
													</th>
													<td>123456</td>
												</tr>
												<tr>
													<th scope="row">
														<b>상품상태</b>
													</th>
													<td>새상품</td>
												</tr>
												<tr>
													<th scope="row">
														<b>브랜드</b>
													</th>
													<td>MMON</td>
												</tr>
												<tr>
													<th scope="row">
														<b>원산지</b>
													</th>
													<td>대한민국</td>
												</tr>
											</tbody>
										</table>
									</template>
								</dropdown>
							</li>
							<li>
								<dropdown tag="dl">
									<template #button>
										<p><b>상품정보고시</b></p>
									</template>
									<template #content>
										<table>
											<tbody>
												<tr>
													<th scope="row">
														<b>소재</b>
													</th>
													<td>겉감 – 나일론78%<br> 폴리에스터22%<br> 배색-나일론100%<br> 안감-폴리에스터 100%</td>
												</tr>
												<tr>
													<th scope="row">
														<b>색상</b>
													</th>
													<td>MUSTARD_150, MELANGE GREY_932, WINE_503</td>
												</tr>
												<tr>
													<th scope="row">
														<b>치수</b>
													</th>
													<td>090, 095, 100, 105, 110</td>
												</tr>
												<tr>
													<th scope="row">
														<b>제조자</b>
													</th>
													<td>㈜네파/㈜네파</td>
												</tr>
												<tr>
													<th scope="row">
														<b>제조국</b>
													</th>
													<td>베트남</td>
												</tr>
												<tr>
													<th scope="row">
														<b>세탁방법<br> 및 취급 시<br> 주의사항</b>
													</th>
													<td>표백제 및 강력 효소 세제는 절대로 사용하지 마십시오. 드라이를 권장합니다. 손세탁을 하 실 경우 30도 이하의 온도에서 드라이 세제 를 이용하여 세탁하여 주시고, 뜨거운 물에 세탁을 하시면 제품에 이상이 생길 수 있으므로 자제하시기 바랍니다</td>
												</tr>
												<tr>
													<th scope="row">
														<b>제조연월</b>
													</th>
													<td>20140801</td>
												</tr>
												<tr>
													<th scope="row">
														<b>품질보증<br> 기준</b>
													</th>
													<td>본 제품은 공정거래위원회 고시 소비자 분쟁해결기준에 의거, 보상받으실 수 있습니다</td>
												</tr>
												<tr>
													<th scope="row">
														<b>A/S책임자<br> 및 연락처</b>
													</th>
													<td>판매자 고객센터 1599-0403</td>
												</tr>
											</tbody>
										</table>
									</template>
								</dropdown>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</template>

		<template #option-button>
			<div
				class="m_product-option"
				:class="{ 'S=option-open': isOptionOpen }"
			>
				<button
					type="button"
					class="btn_option-close"
					@click="isOptionOpen = false"
				>
					<i class="ico_toast"></i><b class="mm_ir-blind">옵션선택 닫기</b>
				</button>
				<a
					class="btn_size"
					href="#"
					@click.prevent="overlayProductSizeGuide"
				>
					<i class="ico_size"></i><b>사이즈 가이드</b>
					<i class="ico_link"></i>
				</a>
				<!-- 옵션 목록 -->
				<!--
					(D) 모든 옵션은 옵션의 순서와 무관하게 우선 선택이 가능합니다(예: 옵션2부터 선택가능)
					(D) 옵션1, 2가 1개의 옵션만 있을 경우 별도의 옵션 선택 동작 없이 옵션이 선택된 상태로 노출되며, 수량 변경만 가능합니다.
					(D) 옵션1 혹은 옵션2만 등록한 단일옵션의 경우 1개의 옵션만 선택하게 됩니다. 이 때 옵션의 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
					(D) 셀렉트형 옵션인 경우 옵션선택 레이어 오픈 시 옵션1의 dropdown 요소에 'S=on' 클래스를 추가하여 옵션1을 바로 선택 가능하도록 합니다.
					(D) 옵션이 선택된 경우 'btn_option' 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다.
				-->
				<div class="m_product-option-select">
					<!-- (D) 셀렉트형 옵션 기본 -->
					<h5 class="mm_strapline">
						<b>필수 옵션</b>
					</h5>
					<dropdown
						group="product-option"
						icon-class="T=bold"
					>
						<h6 class="mm_ir-blind">
							<b>옵션1</b>
						</h6>
						<template #button>
							<b>선택하세요</b>
						</template>
						<template #content>
							<div class="mm_scroller">
								<ul>
									<li>
										<span
											class="btn_option"
											title="품절"
										>
											<b>네이비</b>
											<b>(품절)</b>
										</span>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>레드</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>블랙</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>화이트</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>그레이</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>그린</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>블루</b>
										</button>
									</li>
								</ul>
							</div>
						</template>
					</dropdown>
					<dropdown
						group="product-option"
						icon-class="T=bold"
					>
						<h6 class="mm_ir-blind">
							<b>옵션2</b>
						</h6>
						<template #button>
							<b>선택하세요</b>
						</template>
						<template #content>
							<div class="mm_scroller">
								<ul>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>85<span class="text_price"><small>-37,000</small></span></b>
										</button>
									</li>
									<li>
										<span
											class="btn_option"
											title="품절"
										>
											<b>90<span class="text_price"><small>-37,000</small></span></b>
											<b>(품절)</b>
										</span>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>95<span class="text_price"><small>-37,000</small></span></b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>100<span class="text_price"><small>-37,000</small></span></b>
											<b>(1개)</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>105<span class="text_price"><small>-37,000</small></span></b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>110<span class="text_price"><small>-37,000</small></span></b>
										</button>
									</li>
								</ul>
							</div>
						</template>
					</dropdown>
					<dropdown
						group="product-option"
						icon-class="T=bold"
					>
						<h6 class="mm_ir-blind">
							<b>옵션3</b>
						</h6>
						<template #button>
							<b>선택하세요</b>
						</template>
						<template #content>
							<div class="mm_scroller">
								<ul>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>85<span class="text_price"><small>-37,000</small></span></b>
										</button>
									</li>
									<li>
										<span
											class="btn_option"
											title="품절"
										>
											<b>90<span class="text_price"><small>-37,000</small></span></b>
											<b>(품절)</b>
										</span>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>95<span class="text_price"><small>-37,000</small></span></b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>100<span class="text_price"><small>-37,000</small></span></b>
											<b>(1개)</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>105<span class="text_price"><small>-37,000</small></span></b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>110<span class="text_price"><small>-37,000</small></span></b>
										</button>
									</li>
								</ul>
							</div>
						</template>
					</dropdown>

					<restock-apply v-if="true"></restock-apply>
				</div>

				<!-- 선택된 옵션 -->
				<div class="mm_scroller m_product-option-selected">
					<ul>
						<li>
							<div class="m...selected-info">
								<p>
									<span class="text_option1">모로오렌지 클렌즈</span><span class="text_option2">60일분 2Box</span><span class="text_option3">마이해빗 보틀 1 (-37,000원)</span>
								</p>
								<!-- (D) 구매가능 수량이 5개 이하인 경우에만 'text_stock' 요소를 노출합니다 -->
								<span class="text_stock">남은 수량 5개</span>
							</div>
							<div
								class="mm_stepper"
								data-stepper="{ '_max': 99 }"
							>
								<div class="mm_form-text">
									<label>
										<input
											type="text"
											class="textfield text_stepper"
											data-text
										>
										<i class="bg_text"></i>
										<span class="mm_ir-blind text_placeholder">수량</span>
									</label>
								</div>
								<button
									type="button"
									class="btn_stepper-subtract"
								>
									<i class="ico_stepper-subtract"></i><b class="mm_ir-blind">수량 빼기</b>
								</button>
								<button
									type="button"
									class="btn_stepper-add"
								>
									<i class="ico_stepper-add"></i><b class="mm_ir-blind">수량 더하기</b>
								</button>
							</div>
							<p class="text_price">
								<strong>208,000</strong>
							</p>
							<button
								type="button"
								class="btn_option-remove"
							>
								<i class="ico_option-remove"></i><b class="mm_ir-blind">옵션삭제</b>
							</button>
						</li>
					</ul>
				</div>
				<div class="m_product-option-foot">
					<dl>
						<dt>총 상품 금액</dt>
						<dd class="text_price">
							<strong class="mm_text-variable">416,000</strong>
						</dd>
					</dl>
					<div class="mm_btn_box">
						<div class="mm_flex T=equal">
							<button
								type="button"
								class="mm_btn T=line T=dark"
							>
								<b>장바구니</b>
							</button>
							<button
								type="button"
								class="mm_btn T=primary"
							>
								<b>구매하기</b>
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- 하단고정버튼 -->
			<div class="mm_btn_box T=fixed">
				<div class="mm_flex">
					<toggle
						class="btn_like btn_product-like"
					>
						<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
					</toggle>
					<button
						type="button"
						class="btn_product-buy"
						@click="isOptionOpen = true"
					>
						<b>구매하기</b>
					</button>
				</div>
			</div>
		</template>

		<template #timedeal>
			<timedeal-countdown v-if="true"></timedeal-countdown>
		</template>
	</layout-detail>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useIntersectionObserver } from '@vueuse/core';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { useShareStore } from '$/stores/useShareStore';
	import LayoutDetail from '@/component/layout/LayoutDetail.vue';
	import Carousel from '@/component/Carousel.vue';
	import ComponentTab from '@/component/ComponentTab.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import ProductItem from '@/component/ProductItem.vue';
	import Toggle from '@/component/Toggle.vue';
	import ArriveProbability from '@/feature/arrive-probability/component/ArriveProbability.vue';
	import GiftInfoButton from '@/feature/gift/component/GiftInfoButton.vue';
	import RestockApply from '@/feature/restock/component/RestockApplyButton.vue';
	import TimedealCountdown from '@/feature/timedeal/component/TimedealCountdown.vue';
	import DawnDelivery from '@/custom/dawn/component/DawnProduct.vue';

	const detailCarouselItems = [
		{
			image: '/image/_sample/prod_x3_1.png',
			alt: '찰리브라운 폭신폭신 슬리퍼 3colors(Butter컬러 28일발송) N212UTS906',
		},
		{
			image: '/image/_sample/prod_x3_2.png',
			alt: '찰리브라운 폭신폭신 슬리퍼 3colors(Butter컬러 28일발송) N212UTS906',
		},
		{
			image: '/image/_sample/prod_x3_3.png',
			alt: '찰리브라운 폭신폭신 슬리퍼 3colors(Butter컬러 28일발송) N212UTS906',
		},
	];

	const layerContextStore = useLayerContextStore();
	const shareStore = useShareStore();

	function overlayCardBenefit() {
		const component = defineAsyncComponent(() => import('@/page/card-benefit/CardBenefit.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyWishlistProductFolder() {
		const component = defineAsyncComponent(() => import('@/page/mypage/wishlist/product/folder/MyWishlistProductFolder.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayProductDetailCoupon() {
		const component = defineAsyncComponent(() => import('@/page/product/detail/coupon/ProductDetailCoupon.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayProductSizeGuide() {
		const component = defineAsyncComponent(() => import('@/page/product/size/guide/ProductSizeGuide.vue'));

		return layerContextStore.openOverlay(component);
	}

	const tabItems = [
		{
			id: 'info',
			tab: '상세정보',
			component: defineAsyncComponent(() => import(`@/page/product/detail/component/ProductDetailInfo.vue`)),
		},
		{
			id: 'review',
			tab: `<b>리뷰</b><small>${999}</small>`,
			isTabHTML: true,
			component: defineAsyncComponent(() => import(`@/page/product/detail/component/ProductDetailReview.vue`)),
		},
		{
			id: 'qna',
			tab: `<b>상품 Q&A</b><small></small>`,
			isTabHTML: true,
			component: defineAsyncComponent(() => import(`@/page/product/detail/component/ProductDetailQna.vue`)),
		},
		{
			id: 'seller',
			tab: '판매자 정보',
			component: defineAsyncComponent(() => import(`@/page/product/detail/component/ProductDetailSeller.vue`)),
		},
	];

	// 탭 sticky
	const classSticky = ref('');
	const vTabSticky = {
		mounted(_$element: HTMLElement) {
			useIntersectionObserver(_$element, _entries => {
					for (const entry of _entries) {
						classSticky.value = (entry.isIntersecting) ? 'S=tabmenu-sticky' : '';
					}
				},
				{
					root: null,
					threshold: 0,
					rootMargin: `0px 0px -${(document.documentElement.clientHeight)}px`,
				},
			);
		},
	};

	const isOptionOpen = ref(false);
</script>