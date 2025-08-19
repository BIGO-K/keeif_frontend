<template>
	<!-- 주문목록 정렬 -->
	<div class="m_myorder-sort">
		<form-select
			:v-model="sortRange"
			class="T=sm"
		>
			<option>최근 1개월</option>
		</form-select>
		<form-select
			v-model="orderSort"
			:v-model="sortState"
			class="T=sm"
		>
			<option value="review">
				주문상태 전체
			</option>
			<option>입금 대기</option>
			<option>결제 완료</option>
			<option>배송 준비 중</option>
			<option value="review">
				배송 중
			</option>
			<option value="review">
				배송 완료
			</option>
			<option>구매 확정</option>
		</form-select>
	</div>

	<div class="mm_note">
		<ul>
			<!-- (D) 주문 필터가 [전체, 배송중, 배송완료] 상태 일때만 노출합니다. -->
			<li
				class="mm_syncer-order-review"
				:class="{ 'S=select-use': orderSort === 'review' }"
			>
				리뷰는 구매확정 시점으로부터 30일까지 작성 가능합니다.
			</li>

			<dawn-notice></dawn-notice>
		</ul>
	</div>

	<!-- 주문목록 -->
	<p
		v-if="items.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>주문 내역이 없습니다
	</p>

	<div
		v-else
		class="mm_order-list"
	>
		<article class="mm_order-item">
			<h5><b>2023.00.00</b><strong>주문번호: 2005141142151234562</strong></h5>
			<mm-link
				class="btn_detail"
				:to="{ name: 'MyOrderDetail', params: { id: 123 } }"
			>
				<b>주문상세</b><i class="ico_link"></i>
			</mm-link>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
					<a
						href="#"
						@click.prevent="overlayMyInquirySellerCreate"
					>
						<b>판매자 문의하기</b>
					</a>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_3.png"
										></lazyload>
										<figcaption>
											<dawn-tag></dawn-tag>

											<p class="text_status">
												입금 대기
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												모로오렌지 클렌즈 / 60일분 2Box / 마이해빗 보틀 1 (-37,000원) / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<mm-link
												class="mm_btn T=sm T=line"
												:to="{ name: 'MyOrderCancelCreate' }"
											>
												<b>주문취소</b>
											</mm-link>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_2.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												결제 완료
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												모로오렌지 클렌즈 / 60일분 2Box / 마이해빗 보틀 1 (-37,000원) / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<mm-link
												class="mm_btn T=sm T=line"
												:to="{ name: 'MyOrderCancelCreate' }"
											>
												<b>주문취소</b>
											</mm-link>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_1.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												배송 준비중
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												베이지 FREE / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<mm-link
												class="mm_btn T=sm T=line"
												:to="{ name: 'MyOrderCancelCreate' }"
											>
												<b>주문취소</b>
											</mm-link>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
					<a
						href="#"
						@click.prevent="overlayMyInquirySellerCreate"
					>
						<b>판매자 문의하기</b>
					</a>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_2.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												배송 준비중
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												베이지 FREE / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<mm-link
												class="mm_btn T=sm T=line"
												:to="{ name: 'MyOrderCancelCreate' }"
											>
												<b>주문취소</b>
											</mm-link>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_3.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												배송 중
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
											</p>
											<p class="text_price">
												<strong>54,800</strong><del><span>118,800</span></del>
											</p>
											<p class="text_option">
												베이지 FREE / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<button
												type="button"
												class="mm_btn T=sm"
											>
												<b>수취확인</b>
											</button>
											<mm-link
												class="mm_btn T=sm T=line T=variable"
												to="http://"
											>
												<b>배송조회</b>
											</mm-link>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>
		<article class="mm_order-item">
			<h5><b>2023.00.00</b><strong>주문번호: 2005141142151234562</strong></h5>
			<mm-link
				class="btn_detail"
				:to="{ name: 'MyOrderDetail', params: { id: 123 } }"
			>
				<b>주문상세</b><i class="ico_link"></i>
			</mm-link>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
					<a
						href="#"
						@click.prevent="overlayMyInquirySellerCreate"
					>
						<b>판매자 문의하기</b>
					</a>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_4.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												배송 완료
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												베이지 FREE / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<mm-link
												class="mm_btn T=sm T=line"
												:to="{ name: 'MyOrderExchangeCreate' }"
											>
												<b>교환신청</b>
											</mm-link>
											<mm-link
												class="mm_btn T=sm T=line"
												:to="{ name: 'MyOrderReturnCreate' }"
											>
												<b>반품신청</b>
											</mm-link>
											<mm-link
												class="mm_btn T=sm T=line T=variable"
												to="http://"
											>
												<b>배송조회</b>
											</mm-link>
											<a
												class="mm_btn T=sm T=variable"
												href="#"
												@click.prevent="overlayMyOrderConfirm"
											>
												<b>구매확정</b>
											</a>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>
		<article class="mm_order-item">
			<h5><b>2023.00.00</b><strong>주문번호: 2005141142151234562</strong></h5>
			<mm-link
				class="btn_detail"
				:to="{ name: 'MyOrderDetail', params: { id: 123 } }"
			>
				<b>주문상세</b><i class="ico_link"></i>
			</mm-link>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
					<a
						href="#"
						@click.prevent="overlayMyInquirySellerCreate"
					>
						<b>판매자 문의하기</b>
					</a>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_1.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												구매 확정
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												베이지 FREE / 1개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<a
												class="mm_btn T=sm T=line T=variable"
												href="#"
												@click.prevent="overlayMyReviewCreate"
											>
												<b>리뷰 쓰기</b>
											</a>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>
	</div>
</template>

<script setup lang="ts">
	import { ref, defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Lazyload from '@/component/Lazyload.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import DawnNotice from '@/custom/dawn/component/DawnMyNotice.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const layerContextStore = useLayerContextStore();

	function overlayMyOrderConfirm() {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/confirm/MyOrderConfirm.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyInquirySellerCreate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/inquiry/seller/create/MyInquirySellerCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyReviewCreate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/review/create/MyReviewCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	const sortState = ref('');
	const sortRange = ref('');
	const orderSort = ref('');
	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>