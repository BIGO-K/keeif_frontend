<template>
	<p
		v-if="recentViewGoods.length < 1"
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
				<li
					v-for="recent in recentViewGoods"
					:key="recent.goods.id"
				>
					<div class="mm_product-item">
						<mm-link :to="{ name: 'ProductDetail', params: { id: recent.goods.id } }">
							<figure>
								<lazyload
									class="mm_bg-cover image_product"
									:src="recent.goods.thumbnail_url"
								></lazyload>
								<figcaption>
									<p class="text_brand">
										{{ recent.goods.brand_name }}
									</p>
									<p class="text_product">
										{{ recent.goods.name }}
									</p>
									<p class="text_price">
										<strong>{{ number(recent.goods.base_discounted_price) }}</strong>
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
	import { storeToRefs } from 'pinia';
	import { useRecentViewGoodsStore } from '$/stores/useRecentViewGoodsStore';
	import { useFormatter } from '$/composables/useFormatter';
	import Lazyload from '@/component/Lazyload.vue';

	const { number } = useFormatter();
	const { recordsByRecent: recentViewGoods } = storeToRefs(useRecentViewGoodsStore());
</script>