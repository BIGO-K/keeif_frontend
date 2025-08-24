<template>
	<layout-main>
		<!-- 이벤트 -->
		<section class="mm_inner">
			<h2 class="m_event-title">
				<b>EVENT</b>
			</h2>

			<!-- 이벤트 메뉴 -->
			<div class="m_event-menu">
				<!-- (D) 선택된 탭메뉴에 'S=menu-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul>
					<li
						v-for="tab in processTabs"
						:key="tab.value"
					>
						<mm-link
							:class="{ 'S=menu-on': processState == tab.value }"
							:to="{ name: 'Event', query: { process: tab.value }}"
						>
							<b>{{ tab.label }}</b>
						</mm-link>
					</li>
				</ul>
				<mm-link
					class="btn_experience"
					:to="{ name: 'Experience' }"
				>
					<b>체험단 후기</b><i class="ico_link T=sm"></i>
				</mm-link>
			</div>

			<ul
				v-if="!paginator"
				class="m_event-list T=skeleton"
			>
				<li>
					<i class="image_banner"></i>
					<p class="text_main"></p>
					<p class="text_sub"></p>
					<p class="text_period"></p>
				</li>
				<li>
					<i class="image_banner"></i>
					<p class="text_main"></p>
					<p class="text_sub"></p>
					<p class="text_period"></p>
				</li>
			</ul>

			<p
				v-else-if="paginator.total < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>등록된 이벤트가 없습니다
			</p>

			<template v-else>
				<!-- 이벤트 리스트 -->
				<ul class="m_event-list">
					<li
						v-for="specialEvent in paginator.data"
						:key="specialEvent.id"
					>
						<mm-link :to="specialEvent.is_use_detail_url ? specialEvent.detail_url : { name: 'EventDetail', params: { id: specialEvent.id } }">
							<figure>
								<lazyload
									class="mm_bg-cover image_banner"
									:src="specialEvent.image_url"
								></lazyload>
								<figcaption>
									<p class="text_main">
										{{ specialEvent.title }}
									</p>
									<p class="text_sub">
										{{ specialEvent.description }}
									</p>
									<p class="text_period">
										{{ date(specialEvent.start_at, 'YYYY.MM.DD') }} ~
										{{ date(specialEvent.end_at, 'YYYY.MM.DD') }}
									</p>
								</figcaption>
							</figure>
						</mm-link>
					</li>
				</ul>

				<pagination
					v-bind="{
						currentPage: paginator?.current_page,
						itemsPerPage: paginator?.per_page,
						totalCount: paginator?.total
					}"
					@move:page="fetch"
				></pagination>
			</template>
		</section>
	</layout-main>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useSpecialEvent } from '$/composables/useSpecialEvent';
	import LayoutMain from '@/component/layout/LayoutMain.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';


	const { route, loading } = useGlobalPageContext();
	const { date } = useFormatter();
	const { processTabs, getPaginator } = useSpecialEvent();

	const processState = computed(() => {
		const process = `${route.query.process}` as ProcessLabel;

		return processTabs.map(tab => tab.value).includes(process) ? process : 'all';
	});

	const paginator = ref<Paginator<SpecialEvent>>();

	async function fetch(page: number = 1) {
		try {
			paginator.value = await getPaginator(processState.value, page);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	watch(processState, async () => {
		await fetch();
	}, {
		immediate: true,
	});
</script>

<style src="./_event.scss" lang="scss"></style>