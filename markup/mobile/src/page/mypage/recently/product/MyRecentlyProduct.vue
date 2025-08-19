<template>
	<p
		v-if="items.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>최근 본 상품이 없습니다
	</p>

	<template v-else>
		<p class="m_myrecent-note">
			* 2주 후 자동 삭제
		</p>
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
										시스루스트라이프셔츠
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
									src="/image/_sample/prod_x1_2.png"
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
									src="/image/_sample/prod_x1_3.png"
								></lazyload>
								<figcaption>
									<p class="text_brand">
										엠몬스타
									</p>
									<p class="text_product">
										데일리&데이트 13,900원 균일
									</p>
									<p class="text_price">
										<strong>13,900</strong>
									</p>
								</figcaption>
							</figure>
						</mm-link>
					</div>
				</li>
			</ul>
		</div>
	</template>
</template>

<script setup lang="ts">
	import Lazyload from '@/component/Lazyload.vue';

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>