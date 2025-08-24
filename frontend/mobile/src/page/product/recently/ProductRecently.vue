<template>
	<div class="m_popup-recent">
		<template v-if="recentViewGoodsRecords.length > 0">
			<div class="mm_product-list T=sm">
				<ul>
					<li
						v-for="recentViewGoods in displayedGoods"
						:key="recentViewGoods.goods.id"
					>
						<div class="mm_product-item">
							<mm-link :to="{ name: 'ProductDetail', params: { id: recentViewGoods.goods.id } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										:src="recentViewGoods.goods.thumbnail_url"
									></lazyload>
									<figcaption>
										<p class="text_brand">
											{{ recentViewGoods.goods.brand_name }}
										</p>
										<p class="text_product">
											{{ recentViewGoods.goods.name }}
										</p>
										<p class="text_price">
											<strong>{{ number(recentViewGoods.goods.base_discounted_price) }}</strong>
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
					</li>
				</ul>
			</div>
		</template>
		<template v-else>
			<p class="mm_text-none">
				<i class="ico_text-none"></i>등록된 상품이 없습니다
			</p>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useRecentViewGoodsStore } from '$/stores/useRecentViewGoodsStore';
	import { useFormatter } from '$/composables/useFormatter';
	import Lazyload from '@/component/Lazyload.vue';

	defineExpose<OverlayComponentExpose>({
		title: `최근 본 상품`,
	});

	const props = withDefaults(defineProps<{
		layout?: string
		hideCurrentGoods?: boolean
		closer: CloseHandler<void>
	}>(), {
		layout: 'none',
		hideCurrentGoods: false,
	});

	const { number } = useFormatter();
	const { recordsByRecent: recentViewGoodsRecords } = useRecentViewGoodsStore();

	const displayedGoods = computed(() => {
		if (recentViewGoodsRecords.length < 1) {
			return [];
		}

		if (props.hideCurrentGoods) {
			return [...recentViewGoodsRecords].splice(1);
		}

		return recentViewGoodsRecords;
	});
</script>