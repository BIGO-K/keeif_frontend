<template>
	<p
		v-if="planningEvents.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>최근 본 기획전이 없습니다
	</p>

	<template v-else>
		<p class="m_myrecent-note">
			* 2주 후 자동 삭제
		</p>
		<div class="mm_list m_myrecent-promo">
			<ul>
				<li
					v-for="planning in planningEvents"
					:key="planning.id"
				>
					<a
						href="#"
						@click.prevent="goPromotionPage(planning)"
					>
						<b
							v-if="planning.is_ended"
							class="text_status T=status-off"
						>종료</b>
						<b
							v-else
							class="text_status"
						>진행중</b>
						<p>{{ planning.title }}</p>
					</a>
				</li>
			</ul>
		</div>
	</template>
</template>

<script setup lang="ts">
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyShopping } from '$/composables/useMyShopping';
	const { bom, router } = useGlobalPageContext();
	const planningEvents = await useMyShopping().getRecentViewPlanningEvents(30);

	function goPromotionPage(planning: RecentViewPlanningEvent) {
		if (planning.is_ended) {
			return bom.alert('종료된 기획전 입니다.');
		}

		return router.push({
			name: 'PromotionDetail',
			params: {
				id: planning.id,
			},
		});
	}
</script>