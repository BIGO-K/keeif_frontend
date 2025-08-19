<template>
	<layout
		title="리뷰 관리"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<router-tab
			class="m_my-tab"
			:aggregates="Object.values(reviewAggregatesData)"
		></router-tab>
	</layout>
</template>

<script setup lang="ts">
	import { useReview } from '$/composables/useReview';
	import Layout from '@/component/layout/Layout.vue';
	import RouterTab from '@/component/RouterTab.vue';

	const { getMyReviewAggregate } = useReview();

	const reviewAggregatesData = await getMyReviewAggregate();
</script>