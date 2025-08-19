<template>
	<layout title="판매자샵">
		<div
			v-if="bestGoods.length > 0 || newGoods.length > 0"
			class="m_product-seller"
		>
			<!-- BEST ITEM -->
			<section v-if="bestGoods.length > 0">
				<h3 class="mm_strapline">
					<b>BEST ITEM</b>
				</h3>
				<div class="mm_scroller T=x">
					<div class="mm_product-list T=card">
						<ul>
							<li
								v-for="bestGood in bestGoods"
								:key="bestGood.id"
							>
								<goods-item
									class="T=pa"
									hide-tag
									:goods="bestGood"
								></goods-item>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<!-- NEW IN -->
			<section v-if="newGoods.length > 0">
				<h3 class="mm_strapline">
					<b>NEW IN</b>
				</h3>
				<div class="mm_scroller T=x">
					<div class="mm_product-list T=card">
						<ul>
							<li
								v-for="newGood in newGoods"
								:key="newGood.id"
							>
								<goods-item
									class="T=pa"
									hide-tag
									:goods="newGood"
								></goods-item>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>

		<!-- 상품리스트 -->
		<filtered-goods-list
			:total-count="totalCount"
			:filterable="filterable"
			:goods-list-by-page="goodsListByPage"
			:init-params-for-command="paramsForCommand"
			:fetch-count="fetchCount"
			:fetch-list="fetchList"
		>
		</filtered-goods-list>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useRoute } from 'vue-router';
	import { useWishedStore } from '$/stores/useWishedStore';
	import { useFilterable } from '$/composables/useFilterable';
	import { useSellerShop } from '$/composables/useSellerShop';
	import Layout from '@/component/layout/Layout.vue';
	import FilteredGoodsList from '@/component/FilterGoodsList.vue';
	import GoodsItem from '@/component/GoodsItem.vue';

	const route = useRoute();
	const sellerId = Number(route.params.id);

	const {
		getBestAndNewGoods,
		fetchFilterable,
		fetchList,
		fetchCount,
	} = useSellerShop(sellerId);

	const {
		filterable,
		goodsListByPage,
		paramsForCommand,
		totalCount,
		startContext,
	} = useFilterable(
		fetchFilterable,
		fetchCount,
		fetchList,
	);

	const bestGoods = ref<Goods[]>([]);
	const newGoods = ref<Goods[]>([]);

	await Promise.all([
		getBestAndNewGoods().then((data) => {
			bestGoods.value = data.best_goods;
			newGoods.value = data.new_goods;
		}),
		startContext(),
	]);

	const { check } = useWishedStore();

	const bestAndNewGoodsIds = bestGoods.value.map(bestGoods => bestGoods.id).concat(newGoods.value.map(newGoods => newGoods.id));
	if (bestAndNewGoodsIds.length > 0) {
		check(bestAndNewGoodsIds);
	}
</script>