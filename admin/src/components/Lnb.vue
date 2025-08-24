<template>
	<component :is="route.meta.version ? lnbComponentMap[route.meta.version][route.path.split('/')[2]] : lnbComponentMap[route.path.split('/')[1]]"></component>
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from 'vue';
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const lnbComponentMap = {
		mall: defineAsyncComponent(() => import('@/pages/common/mall/components/MallLnb.vue')),
		member: defineAsyncComponent(() => import('@/pages/common/member/components/MemberLnb.vue')),
		seller: defineAsyncComponent(() => import('@/pages/common/seller/components/SellerLnb.vue')),
		product: defineAsyncComponent(() => import('@/pages/common/product/components/ProductLnb.vue')),
		promotion: defineAsyncComponent(() => import('@/pages/common/promotion/components/PromotionLnb.vue')),
		order: defineAsyncComponent(() => import('@/pages/common/order/components/OrderLnb.vue')),
		display: defineAsyncComponent(() => import('@/pages/common/display/components/DisplayLnb.vue')),
		cs: defineAsyncComponent(() => import('@/pages/common/cs/components/CsLnb.vue')),
		calc: defineAsyncComponent(() => import('@/pages/common/calc/components/CalcLnb.vue')),
		stats: defineAsyncComponent(() => import('@/pages/common/stats/components/StatsLnb.vue')),
		affiliate: defineAsyncComponent(() => import('@/pages/common/affiliate/components/AffiliateLnb.vue')),
		pro: {
			seller: defineAsyncComponent(() => import('@/pages/pro/seller/components/SellerLnb.vue')),
			product: defineAsyncComponent(() => import('@/pages/pro/product/components/ProductLnb.vue')),
			order: defineAsyncComponent(() => import('@/pages/pro/order/components/OrderLnb.vue')),
			display: defineAsyncComponent(() => import('@/pages/pro/display/components/DisplayLnb.vue')),
			calc: defineAsyncComponent(() => import('@/pages/pro/calc/components/CalcLnb.vue')),
			stats: defineAsyncComponent(() => import('@/pages/pro/stats/components/StatsLnb.vue')),
			affiliate: defineAsyncComponent(() => import('@/pages/pro/affiliate/components/AffiliateLnb.vue')),
		},
	};
</script>