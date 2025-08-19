<template>
	<div class="m_popup-recent">
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
									<p class="text_brand">
										엠몬스타
									</p>
									<p class="text_product">
										남녀공용 블랙 숏 라이너 리버시블 점퍼
									</p>
									<p class="text_price">
										<strong>90,150</strong>
									</p>
								</figcaption>
							</figure>
						</mm-link>
					</div>
				</li>
				<li>
					<div class="mm_product-item">
						<a>
							<figure>
								<lazyload
									class="mm_bg-cover image_product"
									src="/image/_sample/prod_x1_2.png"
								></lazyload>
								<p class="text_soldout">품절</p>
								<figcaption>
									<p class="text_brand">엠몬스타</p>
									<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140</p>
									<p class="text_price"><strong>54,800</strong></p>
								</figcaption>
							</figure>
						</a>
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
									<p class="text_brand">
										엠몬스타
									</p>
									<p class="text_product">
										[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
									</p>
									<p class="text_price">
										<strong>54,800</strong>
									</p>
								</figcaption>
							</figure>
						</mm-link>
					</div>
				</li>
				<li>
					<div class="mm_product-item">
						<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
							<figure>
								<lazyload
									class="mm_bg-cover image_product"
									src="/image/_sample/prod_x1_4.png"
								></lazyload>
								<figcaption>
									<p class="text_brand">
										엠몬스타
									</p>
									<p class="text_product">
										[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
									</p>
									<p class="text_price">
										<strong>54,800</strong>
									</p>
								</figcaption>
							</figure>
						</mm-link>
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
									<p class="text_brand">
										엠몬스타
									</p>
									<p class="text_product">
										[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
									</p>
									<p class="text_price">
										<strong>54,800</strong>
									</p>
								</figcaption>
							</figure>
						</mm-link>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Lazyload from '@/component/Lazyload.vue';

	defineExpose<OverlayComponentExpose>({
		title: `최근 본 상품`,
	});
</script>