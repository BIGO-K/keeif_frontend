<template>
	<layout
		title="교환 신청 완료"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<h3 class="mm_heading m_popup-myclaim-title">
			<b>교환 신청이 완료되었습니다</b>
		</h3>

		<!-- 교환 상품 목록 -->
		<div class="mm_order-item">
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
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_1.png"
										></lazyload>
										<figcaption>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_option">
												베이지 FREE / 10개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<p class="text_changed">
										<strong class="mm_text-variable">변경된 옵션</strong>
										<span>베이지 FREE / 2개</span>
									</p>
								</div>
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
											<p class="text_option">
												베이지 FREE / 10개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<p class="text_changed">
										<strong class="mm_text-variable">변경된 옵션</strong>
										<span>베이지 FREE / 2개</span>
									</p>
								</div>
							</div>
						</li>
						<li>
							<p class="text_seller">
								<i class="ico_shop"></i>엠몬스타
							</p>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_1.png"
										></lazyload>
										<figcaption>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_option">
												베이지 FREE / 10개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<p class="text_changed">
										<strong class="mm_text-variable">변경된 옵션</strong>
										<span>베이지 FREE / 2개</span>
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mm_inner">
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=equal">
						<mm-link
							class="mm_btn T=line T=dark"
							:to="{ name: 'Main' }"
						>
							<b>메인으로 이동</b>
						</mm-link>
						<mm-link
							class="mm_btn T=primary"
							:to="{ name: 'MyOrderExchange' }"
						>
							<b>교환내역 확인</b>
						</mm-link>
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
</script>