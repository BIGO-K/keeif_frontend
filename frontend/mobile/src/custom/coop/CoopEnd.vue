<template>
	<!-- 띠배너 -->
	<coop-banner
		v-if="banners.length > 0"
		:banners="banners"
	></coop-banner>
	<p
		v-if="coopDealPaginator.total < 1 && !pending"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>마감된 공구 일정이 없습니다
	</p>
	<template v-else>
		<div
			:key="COOP_DEAL_STATUSES.end"
			class="mm_coopbuy"
		>
			<form-select
				v-model="paramsForCommand.sorting"
			>
				<option
					v-for="sort in goodsSorts"
					:key="sort.value"
					:value="sort.value"
				>
					{{ sort.label }}
				</option>
			</form-select>
			<coop-infinite-scroll
				:total-count="coopDealPaginator.total"
				:init-page="initPage"
				:items-per-page="coopDealPaginator.per_page"
				:is-loading="pending"
				:items="displayedItems|| []"
				@page-required="nextPage"
			>
				<template #item="{ item: coopDeal}">
					<li v-if="coopDeal">
						<coop-item
							:coop-deal-goods="coopDeal"
							:use-timer="false"
							force-badge
						></coop-item>
					</li>
				</template>
			</coop-infinite-scroll>
		</div>
	</template>
</template>

<script setup lang="ts">
	import { useCoopDealShop } from '$/composables/useCoopDeal';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { COOP_DEAL_STATUSES } from '$/constants/index';
	import FormSelect from '@/component/form/FormSelect.vue';
	import CoopBanner from '@/custom/coop/component/CoopBanner.vue';
	import CoopInfiniteScroll from '@/custom/coop/component/CoopInfiniteScroll.vue';
	import CoopItem from '@/custom/coop/component/CoopItem.vue';
	const { loading } = useGlobalPageContext();

	loading.show();
	const {
		goodsSorts,
		paramsForCommand,
		startContext,
		coopDealPaginator,
		applyPage,
		pending,
		banners,
		displayedItems,
		initPage,
	} = useCoopDealShop(COOP_DEAL_STATUSES.end);

	await startContext();
	loading.hide();
	async function nextPage(page: number) {
		await applyPage(page);
	}
</script>