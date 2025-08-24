<template>
	<layout
		title="취소 완료"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<h3 class="mm_heading m_popup-myclaim-title">
			<b>주문 취소가 완료되었습니다</b>
		</h3>

		<!-- 취소 상품 목록 -->
		<div class="mm_order-item">
			<form-check
				v-model="checkedAll"
				label="전체선택"
			></form-check>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<p class="text_ship">
						<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
					</p>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<form-check
								v-model="selectedItems"
								:value="orderItems[0]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<p class="text_seller">
								<i class="ico_shop"></i>엠몬스타
							</p>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_2.png"
										></lazyload>
										<figcaption>
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
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<p class="text_ship">
						<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
					</p>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<p class="text_seller">
								<i class="ico_shop"></i>엠몬스타
							</p>
							<div class="mm_product-item">
								<a>
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_1.png"
										></lazyload>
										<p class="text_soldout">품절</p>
										<figcaption>
											<p class="text_brand">엠몬스타</p>
											<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스</p>
											<p class="text_price"><strong>54,800</strong></p>
											<p class="text_option">베이지 FREE / 10개</p>
										</figcaption>
									</figure>
								</a>
							</div>
						</li>
						<li>
							<form-check
								v-model="selectedItems"
								:value="orderItems[1]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<p class="text_seller">
								<i class="ico_shop"></i>엠몬스타
							</p>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_3.png"
										></lazyload>
										<figcaption>
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
												베이지 FREE / 10개
											</p>
										</figcaption>
									</figure>
								</mm-link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mm_inner">
			<div class="mm_note">
				<ul>
					<li>판매자의 <strong>승인 전까지 주문은 실제로 취소되지 않으며,</strong> 사정에 따라 <strong>취소 거부</strong>가 될 수 있습니다.</li>
					<li>노출되는 가격 및 옵션은 현재와 다를 수 있습니다.</li>
					<li>품절 등 장바구니에 담을 수 없는 상품은 체크하실 수 없습니다.</li>
					<li>취소 수량과 별개로 장바구니에는 1개의 수량만 담깁니다.</li>
				</ul>
			</div>
		</div>
		<div class="m_popup-myclaim-foot">
			<div class="mm_btn_box">
				<div class="mm_flex T=equal">
					<mm-link
						class="mm_btn T=line T=dark"
						:to="{ name: 'MyOrderCancel' }"
					>
						<b>취소내역 확인</b>
					</mm-link>
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>장바구니 담기</b>
					</button>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';

	// XXX 임시 인터페이스
	interface test {
		id: string;
	}
	const orderItems = ref<test[]>([
		{ id: '1' },
		{ id: '2' }
	]);
	const selectedItems = ref<test[]>(orderItems.value.filter(_item => !_item.id));

	const checkedAll = computed({
		get: () => selectedItems.value.length === orderItems.value.length,
		set: _value => {
			selectedItems.value = _value ? [...orderItems.value] : [];
		}
	});
</script>

<!-- 현재 페이지 스크립트 -->
<!--
	<script>
	// 하단버튼 sticky
	(function() {

	var $btnFoot = mm.find('.m_popup-myclaim-foot')[0];
	var _classOn = 'S=sticky-off';

	function footSticky() {

	if ((window.innerHeight - (mm.element.offset($btnFoot).top + $btnFoot.offsetHeight)) >= 0) $btnFoot.classList.add(_classOn);
	else $btnFoot.classList.remove(_classOn);

	}
	footSticky();

	mm.event.on(mm.scroll.el, 'scroll', footSticky);

	})();
	</script>
-->