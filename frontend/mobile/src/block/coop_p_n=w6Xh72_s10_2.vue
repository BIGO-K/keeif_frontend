<template>
	<base-block :block="block">
		<div class="mui_product-list">
			<ul>
				<li
					v-for="goods in coopDealGoodsList"
					:key="goods.id"
				>
					<coop-item
						:coop-deal-goods="goods"
						is-block
						:use-timer="false"
					></coop-item>
				</li>
			</ul>
		</div>
	</base-block>
</template>
<script setup lang="ts">
	import { computed } from 'vue';
	import BaseBlock from '@/component/block/BaseBlock.vue';
	import CoopItem from '@/custom/coop/component/CoopItem.vue';
	const props = defineProps<{ block: Block }>();

	const coopDealGoodsList = computed(() => props.block.coop_deal_partition?.goods_list || []);
</script>
<style lang="scss">
	@import 'src/asset/scss/block/feature/coop_p_n=w6Xh72_s10_2';
</style>
