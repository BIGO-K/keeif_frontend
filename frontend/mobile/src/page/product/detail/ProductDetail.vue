<template>
	<layout-detail v-if="goodsDetail">
		<template #page>
			<div class="m_prodetail">
				<!-- 상품상세 상단 -->
				<div class="m_prodetail-head">
					<!-- 품절임박 -->
					<!-- (D) 품절임박 상품 일 때만 노출합니다. -->
					<p
						v-if="!stockState.is_soldout && stockState.stock < 6"
						class="m_prodetail-head-stock"
					>
						<i class="ico_clock"></i><strong>품절임박</strong>서두르세요!<span>남은수량</span><strong class="text_stock">{{ stockState?.stock }}<sub>개</sub></strong>
					</p>

					<!-- 품절 -->
					<p
						v-if="stockState.is_soldout"
						class="m_prodetail-head-soldout"
					>
						SOLD OUT
					</p>

					<!-- 상품정보 -->
					<div class="m_prodetail-head-product">
						<!-- 상품이미지 -->
						<carousel
							:key="goodsDetail.name"
							:items="goodsDetail.thumbnail_urls"
							effect="cover"
							:use-pagination="true"
							:is-more-side="true"
							:is-error-remove="true"
						>
							<template #default="{ item : imageUrl }">
								<lazyload
									class="mm_bg-contain"
									:src="imageUrl"
									is-force
								>
								</lazyload>
							</template>
						</carousel>
						<div class="m...product-info">
							<p
								v-if="shoppingAggregate.total_review_count > 0"
								class="text_star"
							>
								<!-- (D) span 태그에 별점을 10단위로 %값을 width로 설정해줍니다. -->
								<i>
									<i
										class="ico_star-fill"
										title="별점"
									></i>
									<span :style="{ width: `${shoppingAggregate.review_average_star / 0.05}%` }"><i class="ico_star-fill"></i></span>
								</i>
								<span>{{ shoppingAggregate.review_average_star }} </span>
								<button
									type="button"
									class="btn_review"
									@click="toTab = 'review'"
								>
									<b>리뷰 {{ number(shoppingAggregate.total_review_count) }}개 보기</b>
								</button>
							</p>
							<mm-link
								class="btn_brand"
								:to="{ name: 'BrandShop', params: { id: goodsDetail.brand_id } }"
							>
								<b>{{ goodsDetail.brand_name }}</b><i class="ico_link"></i>
							</mm-link>
							<p class="text_product">
								<span
									v-if="goodsDetail.headline"
									class="text_foreword"
								>[{{ goodsDetail.headline }}]</span>{{ goodsDetail.name }}
							</p>
							<p class="text_price">
								<span
									v-if="promotion.sale_rate > 0"
									class="text_sale"
								>{{ promotion.sale_rate }}%</span>
								<strong>{{ number(promotion.base_discounted_price) }}</strong>
								<del v-if="promotion.sale_rate > 0">{{ number(promotion.price) }}</del>
							</p>
						</div>
					</div>
					<div class="mm_inner">
						<!-- 할인정보 -->
						<div class="m_prodetail-head-benefit">
							<div
								v-if="couponDownloadable"
								class="m...benefit-coupon"
							>
								<p>{{ shop.name }} 쇼핑몰 고객을 위한 혜택</p>
								<a
									class="btn_coupon"
									href="#"
									@click.prevent="overlayProductDetailCoupon"
								>
									<b>쿠폰 받기<i class="ico_coupon-download"></i></b>
								</a>
							</div>
							<dropdown
								v-if="false"
								button-class="mm_flex"
							>
								<template #button>
									<b>최대 할인가</b><b class="text_price"><strong>{{ number(promotion.max_discounted_price) }}</strong></b>
								</template>
								<template #content>
									<div class="m...benefit-detail">
										<h4><b>비회원가</b></h4>
										<dl>
											<dt>정가</dt><dd class="text_price">
												<span>{{ number(promotion.price) }}</span>
											</dd>
										</dl>
										<dl v-if="promotion.price - promotion.sell_price > 0">
											<dt>특가할인</dt><dd class="text_price">
												<span>- {{ number(promotion.price - promotion.sell_price) }}</span>
											</dd>
										</dl>
										<dl>
											<dt>판매가</dt><dd class="text_price">
												<span>{{ number(promotion.sell_price) }}</span>
											</dd>
										</dl>
									</div>
									<div class="m...benefit-detail">
										<h4><b>회원가</b></h4>
										<dl v-if="promotion.sell_price > promotion.base_discounted_price">
											<dt>회원할인</dt><dd class="text_price">
												<span>- {{ number(promotion.sell_price - promotion.base_discounted_price) }}</span>
											</dd>
										</dl>
										<dl v-if="promotion.highest_downloadable_coupon_amount > 0">
											<dt>쿠폰할인</dt><dd class="text_price">
												<span>- {{ number(promotion.highest_downloadable_coupon_amount) }}</span>
											</dd>
										</dl>
										<dl v-if="promotion.immediately_sale_amount">
											<dt>즉시할인</dt><dd class="text_price">
												<span>- {{ number(promotion.immediately_sale_amount) }}</span>
											</dd>
										</dl>
										<dl v-if="promotion.night_sale_amount">
											<dt>심야할인</dt><dd class="text_price">
												<span>- {{ number(promotion.night_sale_amount) }}</span>
											</dd>
										</dl>
										<dl v-if="promotion.max_discounted_price">
											<dt>회원 혜택가</dt><dd class="text_price">
												<span>{{ number(promotion.max_discounted_price) }}</span>
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

								<!-- 새벽배송 -->
								<dawn-delivery v-if="goodsDetail.delivery_info.is_dawn_delivery"></dawn-delivery>
								<!-- // 새벽배송 -->
								<template v-if="goodsDetail.delivery_info.is_free_delivery">
									<dd>무료배송</dd>
								</template>
								<template v-else>
									<dd>
										배송비 {{ number(goodsDetail.delivery_info.shipping_price) }}원
										{{ goodsDetail.delivery_info.dawn_delivery_extra_shipping_price > 0 ? `(새벽배송 ${number(goodsDetail.delivery_info.shipping_price + goodsDetail.delivery_info.dawn_delivery_extra_shipping_price)}) `: '' }}
										{{ goodsDetail.delivery_info.is_package_delivery ? '' : ' (개별 부과)' }}
									</dd>
								</template>
								<template v-if="goodsDetail.delivery_info.is_conditional_free_delivery">
									<dd>무료배송 조건 {{ number(goodsDetail.delivery_info.conditional_free_price) }}원~</dd>
								</template>
								<dd v-if="goodsDetail.delivery_info.extra_shipping_price > 0">
									도서산간지역 {{ number(goodsDetail.delivery_info.extra_shipping_price) }}원
								</dd>
								<template v-if="goodsDetail.is_custom_made">
									<!-- (D) 주문제작 상품인 경우 노출합니다 -->
									<dd>배송기간 {{ goodsDetail.custom_made_delivery_day }}일</dd>
									<dd>주문 제작 상품 교환/반품 불가합니다</dd>
								</template>
								<template v-if="goodsDetail.is_oversea_delivery">
									<dd>해외배송 상품</dd>
									<dd>배송기간 {{ goodsDetail.oversea_delivery_min }} ~ {{ goodsDetail.oversea_delivery_max }}일</dd>
								</template>
							</dl>
							<arrive-probability
								v-if="goodsDetail.delivery_info.shipping_arrival_probability_list.length > 0"
								:shipping-arrival-probabilities="goodsDetail.delivery_info.shipping_arrival_probability_list"
								:exportable-message="goodsDetail.delivery_info.today_exportable_message"
							></arrive-probability>
							<dl v-if="creditCardInstallment">
								<dt>혜택</dt>
								<dd>
									<a
										href="#"
										@click.prevent="overlayCardBenefit"
									>
										<b>{{ creditCardInstallment.title }}</b><i class="ico_help-fill"></i>
									</a>
								</dd>
							</dl>
							<!-- (D) 예약판매 상품인 경우 입력한 예약판매 스케줄을 노출합니다. -->

							<template v-if="goodsDetail.sale_reserve">
								<dl>
									<dt>예약배송</dt>
									<dd><p><span>예약판매 기간</span>{{ goodsDetail.sale_reserve.sell_start_at }} ~ {{ goodsDetail.sale_reserve.sell_end_at }}</p></dd>
									<dd><p><span>예약배송 기간</span>{{ goodsDetail.sale_reserve.ship_start_at }} ~ {{ goodsDetail.sale_reserve.ship_end_at }}</p></dd>
								</dl>
							</template>
							<gift-info-button
								v-if="goodsDetail.giveaways.length > 0"
								:gifts="goodsDetail.giveaways"
							></gift-info-button>
						</div>
						<!-- 판매자샵 더보기 -->
						<template v-if="goodsDetail.type === 'IM' || goodsDetail.type === 'SM'">
							<mm-link
								class="btn_seller"
								:to="{ name: 'InfluencerShop', params: { id: goodsDetail.seller_id } }"
							>
								<b>판매자의 다른상품 더보기</b><i class="ico_link"></i>
							</mm-link>
						</template>
						<template
							v-else
						>
							<mm-link
								class="btn_seller"
								:to="{ name: 'SellerShop', params: { id: goodsDetail.seller_id } }"
							>
								<b>판매자의 다른상품 더보기</b><i class="ico_link"></i>
							</mm-link>
						</template>
					</div>
					<!-- 찜/공유하기 -->
					<div class="m_prodetail-head-like">
						<div class="mm_flex T=equal">
							<toggle
								class="btn_like"
								:is-active="goodsForMe.is_wished"
								is-lazy
								@click="overlayMyWishlistProductFolder"
							>
								<i class="ico_like"></i><b>찜<span>{{ number(shoppingAggregate.wish_count) }}</span></b>
							</toggle>
							<button
								type="button"
								class="btn_sns-share"
								@click="shareStore.open($event, goodsDetail.name, `#${goodsDetail.brand_name}#${goodsDetail.name}`, goodsDetail.thumbnail_urls[0])"
							>
								<i class="ico_share"></i><b>공유하기</b>
							</button>
						</div>
					</div>
					<!-- 추천 아이템 -->
					<template v-if="packageGoodsList.length">
						<section class="m_prodetail-head-recommend">
							<h3 class="m_prodetail-strapline">
								<b>이런 아이템은 어떠세요?</b>
							</h3>
							<div class="mm_scroller T=x">
								<div class="mm_product-list T=card">
									<ul>
										<li
											v-for="goods in packageGoodsList"
											:key="goods.id"
										>
											<goods-item
												class="T=pa"
												:goods="goods"
											></goods-item>
										</li>
									</ul>
								</div>
							</div>
						</section>
					</template>
				</div>

				<!-- 상품상세 탭 -->
				<component-tab
					v-model:to-tab-id="toTab"
					:need-tab-focus-change="needTabFocusChange"
					:data="{
						goodsId,
						brandName: goodsDetail.brand_name,
						information,
						shoppingAggregate,
						reviewWritable: goodsForMe.is_writable_review,
						deliveryInfo: goodsDetail.delivery_info,
						returnDeliveryInfo: goodsDetail.return_delivery_info,
					}"
				></component-tab>

				<div class="m_prodetail-foot">
					<!-- 추천 상품 -->
					<!-- categoryBestGoodsList.length > 0 -->
					<template v-if="false">
						<section>
							<h3 class="m_prodetail-strapline">
								<b>이 상품도 좋아하실 것 같아요</b>
							</h3>
							<div class="mm_scroller T=x">
								<div class="mm_product-list T=card">
									<ul>
										<li
											v-for="goods in categoryBestGoodsList"
											:key="goods.id"
										>
											<goods-item
												class="T=pa"
												hide-tag
												:goods="goods"
											></goods-item>
										</li>
									</ul>
								</div>
							</div>
						</section>
					</template>


					<!-- 인기 상품 -->
					<!-- brandBestGoodsList.length > 0 -->
					<template v-if="false">
						<section>
							<h3 class="m_prodetail-strapline">
								<b>이 브랜드의 인기상품</b>
							</h3>
							<div class="mm_scroller T=x">
								<div class="mm_product-list T=card">
									<ul>
										<li
											v-for="goods in brandBestGoodsList"
											:key="goods.id"
										>
											<goods-item
												class="T=pa"
												hide-tag
												:goods="goods"
											></goods-item>
										</li>
									</ul>
								</div>
							</div>
						</section>
					</template>

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
													<td>{{ goodsDetail.id }}</td>
												</tr>
												<tr>
													<th scope="row">
														<b>상품상태</b>
													</th>
													<td>{{ information?.use_state_label }}</td>
												</tr>
												<tr>
													<th scope="row">
														<b>브랜드</b>
													</th>
													<td>{{ goodsDetail.brand_name }}</td>
												</tr>
												<tr>
													<th scope="row">
														<b>원산지</b>
													</th>
													<td>{{ information?.origin_label }}</td>
												</tr>
											</tbody>
										</table>
									</template>
								</dropdown>
							</li>
							<li v-if="information">
								<dropdown tag="dl">
									<template #button>
										<p><b>상품정보고시</b></p>
									</template>
									<template #content>
										<table>
											<tbody>
												<tr
													v-for="mandatory in information.mandatory"
													:key="mandatory.title"
												>
													<th scope="row">
														<b>{{ mandatory.title }}</b>
													</th>
													<td>{{ mandatory.content }}</td>
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

		<template #option>
			<div
				v-if="!stockState.is_soldout"
				ref="$productOption"
				class="m_product-option"
				:class="[{ 'S=option-open': optionOpen }, { 'T=option-single': isSingleOption && !stockState.is_soldout }]"
			>
				<button
					type="button"
					class="btn_option-close"
					@click="() => { optionOpen = !optionOpen }"
				>
					<i class="ico_toast"></i><b class="mm_ir-blind">옵션선택 닫기</b>
				</button>
				<!-- </a> -->
				<!-- 옵션 목록 -->
				<!--
					(D) 모든 옵션은 옵션의 순서와 무관하게 우선 선택이 가능합니다(예: 옵션2부터 선택가능)
					(D) 옵션1, 2가 1개의 옵션만 있을 경우 별도의 옵션 선택 동작 없이 옵션이 선택된 상태로 노출되며, 수량 변경만 가능합니다.
					(D) 옵션1 혹은 옵션2만 등록한 단일옵션의 경우 1개의 옵션만 선택하게 됩니다. 이 때 옵션의 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
					(D) 셀렉트형 옵션인 경우 옵션선택 레이어 오픈 시 옵션1의 dropdown 요소에 'S=on' 클래스를 추가하여 옵션1을 바로 선택 가능하도록 합니다.
					(D) 옵션이 선택된 경우 'btn_option' 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다.
				-->
				<goods-options
					v-if="!isSingleOption && !stockState.is_soldout"
					:options="options"
					:has-depth3-option="is3DepthOptionRequired"
					add-option-with-clear
					:is-disabled-restock="goodsDetail.type === 'IM' || goodsDetail.type === 'SM'"
					@add-option="addOption"
				></goods-options>


				<!-- 선택된 옵션 -->
				<div
					v-if="selectedOptions.length > 0"
					class="mm_scroller m_product-option-selected"
				>
					<ul>
						<li
							v-for="selectedOption in selectedOptions"
							:key="selectedOption.code"
						>
							<div class="m...selected-info">
								<p>
									<span class="text_option1">{{ selectedOption.name }}</span>
									<template v-if="is3DepthOptionRequired">
										<span
											v-if="selectedOption.option2_name !== '-'"
											class="text_option2"
										>{{ selectedOption.option2_name }}</span>
										<span
											v-if="selectedOption.option3_name !== '-' || selectedOption.option_price > 0"
											class="text_option3"
										>{{ selectedOption.option3_name === '-' ? '' : selectedOption.option3_name }}{{ selectedOption.option_price ? `(${selectedOption.option_price > 0 ? '+' : ''}${number(selectedOption.option_price)}원)` : '' }}</span>
									</template>
									<template v-else>
										<span class="text_option2">{{ selectedOption.option2_name }} {{ selectedOption.option_price ? `(${number(selectedOption.option_price)}원)` : '' }}</span>
									</template>
								</p>
								<!-- (D) 구매가능 수량이 5개 이하인 경우에만 'text_stock' 요소를 노출합니다 -->
								<span
									v-if="selectedOption.stock <= 5"
									class="text_stock"
								>남은 수량 {{ selectedOption.stock }}개</span>
							</div>

							<form-steeper
								v-model="selectedOption.buy_amount"
								:max="selectedOption.stock"
							>
							</form-steeper>
							<p class="text_price">
								<strong>{{ number((promotion.base_discounted_price + selectedOption.option_price) * selectedOption.buy_amount) }}</strong>
							</p>
							<button
								type="button"
								class="btn_option-remove"
								@click="removeSelected(selectedOption)"
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
							<strong class="mm_text-variable">{{ number(totalSelectedPrice) }}</strong>
						</dd>
					</dl>
					<div class="mm_btn_box">
						<div class="mm_flex T=equal">
							<button
								type="button"
								class="mm_btn T=line T=dark"
								@click="addCart()"
							>
								<b>장바구니</b>
							</button>
							<button
								type="button"
								class="mm_btn T=primary"
								@click="buy()"
							>
								<b>구매하기</b>
							</button>
						</div>
					</div>
				</div>
			</div>
		</template>

		<template #fixed>
			<div class="mm_flex">
				<toggle
					class="btn_like btn_product-like"
					:is-active="goodsForMe.is_wished"
					is-lazy
					@click="overlayMyWishlistProductFolder"
				>
					<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
				</toggle>
				<template v-if="(goodsDetail.type === 'IM' || goodsDetail.type === 'SM') && influencerMarketing && (isBeforeSellStartInfluencerGoods || !isBeforeSellEndInfluencerGoods)">
					<button
						v-if="isBeforeSellEndInfluencerGoods"
						type="button"
						class="btn_product-buy"
						@click="coopDealNotify"
					>
						<b>공구 알림 받기</b>
					</button>
					<b
						v-else
						class="btn_product-buy T=disabled"
					>진행 마감</b>
				</template>
				<template v-else>
					<button
						v-if="!stockState.is_soldout"
						type="button"
						class="btn_product-buy"
						@click="() => { optionOpen = true }"
					>
						<b>구매하기</b>
					</button>
					<b
						v-else-if="stockState.is_soldout && stockState.stock > 1"
						class="btn_product-buy T=disabled"
					>품절</b>
					<button
						v-else-if="goodsDetail.type !== 'IM' && goodsDetail.type !== 'SM'"
						type="button"
						class="btn_restock"
						@click="modalRestockApply"
					>
						<b>재입고 알림받기</b>
					</button>
					<button
						v-else
						type="button"
						class="btn_product-buy"
						disabled
					>
						<b>품절</b>
					</button>
				</template>
			</div>
		</template>

		<template
			v-if="(goodsDetail.type === 'IM' || goodsDetail.type === 'SM' )&& influencerMarketing && (isBeforeSellEndInfluencerGoods)"
			#timedeal
		>
			<timedeal-countdown
				:influencer-marketing="influencerMarketing"
			></timedeal-countdown>
		</template>
	</layout-detail>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref, computed, watch, onBeforeUnmount, onMounted } from 'vue';
	import { onBeforeRouteLeave } from 'vue-router';
	import * as ChannelService from '@channel.io/channel-web-sdk-loader';
	import { useOrderStore } from '$/stores/useOrderStore';
	import { usePopupStore } from '$/stores/usePopupStore';
	import { useRecentViewGoodsStore } from '$/stores/useRecentViewGoodsStore';
	import { useShareStore } from '$/stores/useShareStore';
	import { useWishedStore } from '$/stores/useWishedStore';
	import config from '$/utils/config';
	import monsDate from '$/utils/date';
	import mons from '$/utils/mons';
	import { useAirbridge } from '$/composables/useAirbridge';
	import { useCart } from '$/composables/useCart';
	import { useChannelTalk } from '$/composables/useChannelTalk';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useGoodsAdditional } from '$/composables/useGoodsAdditional';
	import { useGoodsDetail } from '$/composables/useGoodsDetail';
	import { useGoodsZoomLoaderImage } from '$/composables/useGoodsZoomLoaderImage';
	import { useHead } from '$/composables/useHead';
	import { useThirdPartyTracking } from '$/composables/useThirdPartyTracking';
	import LayoutDetail from '@/component/layout/LayoutDetail.vue';
	import Carousel from '@/component/Carousel.vue';
	import ComponentTab from '@/component/ComponentTab.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import GoodsItem from '@/component/GoodsItem.vue';
	import GoodsOptions from '@/component/GoodsOptions.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';
	import FormSteeper from '@/component/form/FormSteeper.vue';
	import ArriveProbability from '@/feature/arrive-probability/component/ArriveProbability.vue';
	import GiftInfoButton from '@/feature/gift/component/GiftInfoButton.vue';
	import TimedealCountdown from '@/feature/timedeal/component/TimedealCountdown.vue';
	import ProductDetailPcs from '@/page/product/detail/ProductDetailPcs.vue';
	import DawnDelivery from '@/custom/dawn/component/DawnProduct.vue';

	const shareStore = useShareStore();
	const { number } = useFormatter();
	const { member, isMember, route, router, openModal, openOverlay } = useGlobalPageContext();

	const { bom, loading } = mons();
	const { removeCloneImage } = useGoodsZoomLoaderImage();
	const shop = config('shop');
	const goodsId = computed(() => (Number(`${route.params.id}`)));
	const totalSelectedPrice = computed(() => {
		return selectedOptions.value.reduce((sum, selectedOption) =>
			sum + ((promotion.value.base_discounted_price + selectedOption.option_price) * selectedOption.buy_amount), 0,
		);
	});

	const {
		goodsDetail,
		options,
		promotion,
		stockState,
		shoppingAggregate,
		creditCardInstallment,
		getPackageGoodsList,
		// getBrandBestGoodsList,
		// getCategoryBestGoodsList,
		getDownloadableCoupons,
		refetch,
		getInfluencerMarketing,
		me,
		getEpCoupon,
		is3DepthOptionRequired,
	} = await useGoodsDetail(goodsId.value);

	const toTab = ref<string>('');
	const needTabFocusChange = ref<boolean>(true);
	const epCoupon = ref<EPCoupon|null>(null);
	const channelTalk = useChannelTalk();
	useHead({ title: goodsDetail.value.name });
	const influencerMarketing = ref<GoodsInfluencerMarketing|undefined>(undefined);
	const thirdPartyTracking = useThirdPartyTracking();

	function addThirdPartyTrackingViewGoods() {
		thirdPartyTracking.viewGoods({
			isMobile: false,
			isTablet: false,
			isDesktop: true,
			goodsId: goodsDetail.value.id,
			goodsName: goodsDetail.value.name,
			listPrice: promotion.value.price,
			sellPrice: promotion.value.sell_price,
			discountedPrice: promotion.value.base_discounted_price,
			imageUrls: goodsDetail.value.thumbnail_urls,
			categoryFullPath: goodsDetail.value.category.full_label,
			isSoldout: stockState.value.is_soldout,
			categoryCode: goodsDetail.value.category.depth3_category_code,
			brandName: goodsDetail.value.brand_name,
		});

		channelTalk.productView({
			id: goodsDetail.value.id,
			name: goodsDetail.value.name,
			price: promotion.value.price,
		});

	}
	if (goodsDetail.value.type === 'IM' || goodsDetail.value.type === 'SM') {
		influencerMarketing.value = await getInfluencerMarketing(goodsId.value);
	}

	addThirdPartyTrackingViewGoods();

	const isBeforeSellStartInfluencerGoods = computed(() => {
		if (!influencerMarketing.value) {
			return false;
		}

		return monsDate().isBefore(influencerMarketing.value.sell_start_at, 'seconds');
	});

	const isBeforeSellEndInfluencerGoods = computed(() => {
		if (!influencerMarketing.value) {
			return false;
		}

		return monsDate().isBefore(influencerMarketing.value.sell_end_at, 'seconds');
	});

	const optionOpen = ref(false);
	/** 선택된 옵션 항목 **/
	type SelectedItem = {
		name: string
		option2_name: string
		option3_name?: string
		code: number
		stock: number
		buy_amount: number
		option_price: number
		goods_price: number
	}


	const selectedOptions = ref<SelectedItem[]>([]);
	const isSingleOption = computed(() => !is3DepthOptionRequired.value && options.value.length === 1 && options.value[0].sub.length === 1);
	if (isSingleOption.value && !stockState.value.is_soldout) {
		const subOption = options.value[0].sub[0] as GoodsSubOption;
		selectedOptions.value.push({
			name: options.value[0].name,
			code: subOption.code,
			option2_name: subOption.name,
			option_price: subOption.extra_amount,
			goods_price: promotion.value.sell_price,
			buy_amount: 1,
			stock: subOption.qty,
		});
	}

	const couponDownloadable = computed(() => (
		member.value !== null
		&& promotion.value.is_downloadable_coupon
	));

	/** 패키지(세트) 상품 */
	const packageGoodsList = ref<PackageGoods[]>([]);
	/** 카테고리 / 브랜드 베스트 상품 */
	const categoryBestGoodsList = ref<BestGoods[]>([]);
	const brandBestGoodsList = ref<BestGoods[]>([]);
	const information = ref<GoodsInformation>();
	const { getInformation, applyRestockNotify, applyCoopDealNotify } = useGoodsAdditional();
	information.value = await getInformation(goodsId.value);
	removeCloneImage();
	const goodsForMe = ref<{is_wished: boolean, is_writable_review: boolean}>({
		is_wished: false,
		is_writable_review: false,
	});

	const popupStore = usePopupStore();

	async function fetchAdditionalData() {
		// 일반상품의 경우 EP 조회
		if (goodsDetail.value.type === 'GN') {
			epCoupon.value = await getEpCoupon(goodsId.value);
		}

		if (epCoupon.value && !popupStore.isHide(`${epCoupon.value.site_code}_${goodsId.value}`)) {
			openModal(ProductDetailPcs, {
				props: {
					epCoupon: epCoupon.value,
					goodsId: goodsId.value,
				},
			});
		}

		Promise.all([
			getPackageGoodsList(goodsDetail.value.id)
				.then(list => packageGoodsList.value = list),
			// getCategoryBestGoodsList(goodsId.value)
			// 	.then(bestGoodsList => categoryBestGoodsList.value = bestGoodsList),
			// getBrandBestGoodsList(goodsId.value)
			// 	.then(bestGoodsList => brandBestGoodsList.value = bestGoodsList),
			member.value ? me(goodsId.value).then(me => goodsForMe.value = me) : null,
		]);
	}

	function overlayCardBenefit() {
		const component = defineAsyncComponent(() => import('@/page/card-benefit/CardBenefit.vue'));

		return openOverlay(component, {
			props: {
				cardInstallmentInfo: creditCardInstallment.value,
			},
		});
	}
	const { isWishedGoods, remove } = useWishedStore();
	async function overlayMyWishlistProductFolder() {
		if (member.value === null) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: router.currentRoute.value.fullPath,
						},
					});
				}
			});
		}

		if (goodsForMe.value.is_wished) {
			goodsForMe.value.is_wished = false;
			shoppingAggregate.value.wish_count = shoppingAggregate.value.wish_count - 1;

			return await remove([goodsId.value]);
		}

		const component = defineAsyncComponent(() => import('@/page/mypage/wishlist/product/folder/MyWishlistProductFolder.vue'));

		return openOverlay(component, {
			props: {
				goodsId: goodsId.value,
			},
			onClose: () => {
				goodsForMe.value.is_wished = isWishedGoods(goodsId.value);
				if (goodsForMe.value.is_wished) {
					shoppingAggregate.value.wish_count = shoppingAggregate.value.wish_count + 1;
					channelTalk.addWishGoods({
						id: goodsId.value,
						name: goodsDetail.value.name,
						price: promotion.value.price,
					});
				}
			},
		});
	}

	async function overlayProductDetailCoupon() {
		const downloadCoupons = await getDownloadableCoupons(goodsId.value);
		const component = defineAsyncComponent(() => import('@/page/product/detail/coupon/ProductDetailCoupon.vue'));

		return openOverlay(component, {
			props: {
				coupons: downloadCoupons,
			},
		});
	}

	const $productOption = ref<HTMLElement|null>(null);
	function addOption(selectedItem: Omit<SelectedItem, 'goods_price'>) {
		if (selectedOptions.value.find((option) => option.code === selectedItem.code)) {
			return bom.alert('이미 존재하는 옵션입니다.');
		}
		selectedOptions.value.push({
			name: selectedItem.name,
			code: selectedItem.code,
			option2_name: selectedItem.option2_name,
			option3_name: selectedItem.option3_name,
			option_price: selectedItem.option_price,
			goods_price: promotion.value.sell_price,
			buy_amount: 1,
			stock: selectedItem.stock,
		});

		if (!$productOption.value) return;
		if (!$productOption.value.style.height) $productOption.value.style.height = '77%';
	}

	async function addCart() {
		if (selectedOptions.value.length < 1) {
			return bom.alert('필수 옵션을 전부 선택해주세요.');
		}

		loading.show();
		try {
			const cartIdsInfo = await useCart().add(selectedOptions.value.map(selected => ({
				goods_id: goodsId.value,
				option_id: selected.code,
				ea: selected.buy_amount,
			})));
			for (const selectedItem of selectedOptions.value) {
				useAirbridge().addCart(
					goodsDetail.value.is_influencer ? '인플루언서' : '브랜드',
					{
						products: [{
							productID: `${goodsId.value}`,
							name: `${goodsDetail.value.name}`,
							brandName: goodsDetail.value.brand_name,
							price: promotion.value.sell_price,
							currency: 'KRW',
							quantity: selectedItem.buy_amount,
							position: 1,
						}],
						cartID: `${cartIdsInfo.find(cartInfo => cartInfo.option_id === selectedItem.code)?.cart_id || ''}`,
						totalValue: (promotion.value.sell_price + selectedItem.option_price) * selectedItem.buy_amount,
					},
				);

				channelTalk.addCart({
					id: goodsId.value,
					ea: selectedItem.buy_amount,
					price: promotion.value.sell_price + selectedItem.option_price,
				});
			}

			bom.confirm('선택하신 상품을 장바구니에 담았습니다. \n장바구니로 이동하시겠습니까?', flag => {
				if (!flag) {
					return;
				}
				router.push({
					name: 'Cart',
				});

			}, {
				okLabel: '장바구니 가기',
				cancelLabel: '쇼핑 계속하기',
			});
		}
		catch (error) {
			useErrorAlert(error);
		}
		finally {
			loading.hide();
		}
	}
	const orderStore = useOrderStore();
	/** 선택된 옵션 삭제 처리 **/
	function removeSelected(selected: SelectedItem) {
		selectedOptions.value = selectedOptions.value.filter((option) => option.code !== selected.code);
	}


	/** 구매처리 **/
	async function buy() {
		if (selectedOptions.value.length < 1) {
			return bom.alert('필수 옵션을 전부 선택해주세요.');
		}
		const buyItems: SelectedForOrder[] = selectedOptions.value.map((option) => {
			return {
				goods_id: goodsId.value,
				option_id: option.code,
				ea: option.buy_amount,
				is_dawn_delivery: goodsDetail.value.delivery_info.is_dawn_delivery,
			};
		});

		// 인플루언서 공구상품 최대 구매 수량 제한 처리
		if ((goodsDetail.value.type === 'IM' || goodsDetail.value.type === 'SM') && influencerMarketing.value && influencerMarketing.value.max_orderable_count > 0) {
			const sumBuyAmount = selectedOptions.value.reduce(
				(previousValue, currentValue) => previousValue + currentValue.buy_amount,
				0,
			);
			if (sumBuyAmount > influencerMarketing.value.max_orderable_count) {
				return bom.alert(`1인당 구매제한 개수는 ${influencerMarketing.value.max_orderable_count}개 입니다.`);
			}
		}

		if (!member.value) {
			orderStore.temporarySelected = buyItems;

			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: 'order',
						},
					});
				}
			});
		}

		if (!member.value.is_certificated) {
			orderStore.temporarySelected = buyItems;
			const component = defineAsyncComponent(() => import('@/page/auth/certificate/AuthCertificate.vue'));

			return openOverlay(component, {
				props: {
					needVerify: true,
					redirectPath: `${route.fullPath}`,
				},
				onClose: async () => {
					buy();

					return;
				},
				onCancelClose: () => {
					return bom.alert('본인인증을 취소 하셨습니다.\n 본인인증 후 상품구매가 가능합니다.');
				},
			});

		}

		loading.show();
		try {
			const orderId = await orderStore.generateOrderId(buyItems);

			router.push({
				name: 'Order',
				params: {
					id: orderId,
				},
			});
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}

	}

	onBeforeUnmount(() => {
		goodsIdWatcher();
	});

	const goodsIdWatcher = watch(goodsId, async (to) => {
		if (route.name !== 'ProductDetail') {
			return;
		}

		needTabFocusChange.value = false;
		toTab.value = 'info';
		loading.show();
		const scroller = document.querySelector('.mm_scroller');
		try {
			await refetch(to);
			if (scroller) {
				scroller.scrollTop = 0;
			}

			information.value = await getInformation(goodsId.value);
			useHead({ title: goodsDetail.value.name });
			addThirdPartyTrackingViewGoods();
			addRecentViewGoods({
				id: goodsId.value,
				name: goodsDetail.value.name,
				brand_name: goodsDetail.value.brand_name,
				thumbnail_url: goodsDetail.value.thumbnail_urls[0],
				base_discounted_price: promotion.value.base_discounted_price,
				sale_rate: promotion.value.sale_rate,
				is_soldout: stockState.value.is_soldout,
			});
			fetchAdditionalData();
			selectedOptions.value = [];
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			removeCloneImage();
			loading.hide();
			needTabFocusChange.value = true;
		}

	});

	const { add: addRecentViewGoods } = useRecentViewGoodsStore();

	onMounted(() => {
		ChannelService.hideChannelButton();
		fetchAdditionalData();
		addRecentViewGoods({
			id: goodsId.value,
			name: goodsDetail.value.name,
			brand_name: goodsDetail.value.brand_name,
			thumbnail_url: goodsDetail.value.thumbnail_urls[0],
			base_discounted_price: promotion.value.base_discounted_price,
			sale_rate: promotion.value.sale_rate,
			is_soldout: stockState.value.is_soldout,
		});
	});

	async function modalRestockApply() {
		if (member.value === null) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: router.currentRoute.value.fullPath,
						},
					});
				}
			});
		}

		if (isSingleOption.value) {
			loading.show();
			try {
				await applyRestockNotify(goodsId.value, (options.value[0].sub[0] as GoodsSubOption).code);
				bom.alert('재입고 신청이 완료 되었습니다.');
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}

			return;
		}

		const component = defineAsyncComponent(() => import('@/feature/restock/RestockApply.vue'));

		return openModal(component, {
			props: {
				goodsId: goodsId.value,
				options: options.value,
			},
			onClose: () => {

			},
		});
	}

	function coopDealNotify() {
		if (!isMember.value) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: router.currentRoute.value.fullPath,
						},
					});
				}
			});
		}

		bom.confirm('해당 상품이 공구를 시작할 때\n알림톡으로 안내해드릴게요',
			async (_flag) => {
				if (_flag) {
					try {
						await applyCoopDealNotify(goodsId.value);
						bom.alert('공구 시작 알림톡 발송에 동의하셨습니다.');
					}
					catch (e) {
						useErrorAlert(e);
					}
				}
			},
			{
				title: '공구 알림 동의',
			},
		);
	}

	onBeforeRouteLeave(() => {
		ChannelService.showChannelButton();
	});
</script>

<style lang="scss">
	.hide_auto {
		opacity: 0;
		transition: opacity 0.4s ease-in-out 0.3s;
	}
</style>