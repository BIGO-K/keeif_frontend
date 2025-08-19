<template>
	<p
		v-if="items.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>교환 내역이 없습니다
	</p>
	<!-- 교환목록 -->
	<div
		v-else
		class="mm_order-list"
	>
		<article class="mm_order-item">
			<h5><b>2023.00.00</b><strong>주문번호: 2005141142151234562</strong></h5>
			<mm-link
				class="btn_detail"
				:to="{ name: 'GuestOrderDetail', params: { id: 123 } }"
			>
				<b>주문상세</b><i class="ico_link"></i>
			</mm-link>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params:{ id:'123'} }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_3.png"
										>
										</lazyload>
										<figcaption>
											<p class="text_status">
												교환 신청
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
									<p class="text_changed">
										<strong class="mm_text-variable">변경된 옵션</strong>
										<span>베이지 FREE / 1개</span>
										<span>레드 FREE / 1개</span>
									</p>
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<button
												type="button"
												class="mm_btn T=sm T=line"
											>
												<b>교환철회</b>
											</button>
											<mm-link
												class="mm_btn T=sm T=line T=variable"
												:to="{}"
												target="_blank"
												title="새 창 열림"
											>
												<b>반송조회</b>
											</mm-link>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params:{ id:'123'} }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_2.png"
										>
										</lazyload>
										<figcaption>
											<p class="text_status">
												교환 신청
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
									<p class="text_changed">
										<strong class="mm_text-variable">변경된 옵션</strong>
										<span>레드 FREE / 1개</span>
									</p>
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<button
												type="button"
												class="mm_btn T=sm T=line"
											>
												<b>교환철회</b>
											</button>
											<mm-link
												class="mm_btn T=sm T=line T=variable"
												:to="{}"
												target="_blank"
												title="새 창 열림"
											>
												<b>반송조회</b>
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
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params:{ id:'123'} }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_3.png"
										>
										</lazyload>
										<figcaption>
											<p class="text_status">
												교환 승인
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
									<p class="text_changed">
										<strong class="mm_text-variable">변경된 옵션</strong>
										<span>베이지 FREE / 1개</span>
										<span>레드 FREE / 1개</span>
									</p>
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<mm-link
												class="mm_btn T=sm T=line T=variable"
												:to="{}"
												target="_blank"
												title="새 창 열림"
											>
												<b>반송조회</b>
											</mm-link>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params:{ id:'123'} }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_2.png"
										>
										</lazyload>
										<figcaption>
											<p class="text_status">
												교환 승인
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
									<p class="text_changed">
										<strong class="mm_text-variable">변경된 옵션</strong>
										<span>레드 FREE / 1개</span>
									</p>
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<mm-link
												class="mm_btn T=sm T=line T=variable"
												:to="{}"
												target="_blank"
												title="새 창 열림"
											>
												<b>반송조회</b>
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
				:to="{ name: 'GuestOrderDetail', params: { id: 123 } }"
			>
				<b>주문상세</b><i class="ico_link"></i>
			</mm-link>
			<div class="mm_order-item-seller">
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params:{ id:'123'} }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_2.png"
										>
										</lazyload>
										<figcaption>
											<p class="text_status">
												상품 도착
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
									<p class="text_changed">
										<strong class="mm_text-variable">변경된 옵션</strong>
										<span>레드 FREE / 1개</span>
									</p>
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<mm-link
												class="mm_btn T=sm T=line"
												:to="{ name: 'GuestOrderToReturn'}"
											>
												<b>반품전환</b>
											</mm-link>
											<mm-link
												class="mm_btn T=sm T=line T=variable"
												:to="{}"
												target="_blank"
												title="새 창 열림"
											>
												<b>반송조회</b>
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
	</div>
</template>

<script setup lang="ts">
	import Lazyload from '@/component/Lazyload.vue';

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>