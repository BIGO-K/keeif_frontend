<template>
	<layout title="상품 공구관">
		<div class="m_coopbuy">
			<div class="mm_inner">
				<!-- 메뉴 -->
				<div
					ref="$coopbuyMenu"
					class="m_coopbuy-menu"
					:class="classSticky"
				>
					<div class="m_coopbuy-menu-list">
						<ul class="mm_flex T=equal">
							<li
								v-for="item in tabItems"
								:key="item.name"
							>
								<mm-link
									:class="{ 'S=menu-on': item.name === route.name }"
									active-class="S=menu-on"
									:to="{ name: item.name }"
									replace
									@click="scrollReset($event, item.name === route.name)"
								>
									<b>{{ item.meta?.tab ?? '' }}</b>
								</mm-link>
							</li>
						</ul>
					</div>
				</div>
				<router-view></router-view>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed, watch, onMounted } from 'vue';
	import { useRoute } from 'vue-router';
	import { useScroll } from '@vueuse/core';
	import { useScrollPositionStore } from '$/stores/useScrollPositionStore';
	import Layout from '@/component/layout/Layout.vue';

	const route = useRoute();
	const tabItems = route.matched.at(-2)?.children;

	const $scroller = ref<HTMLElement|null>(null);
	const $coopbuyMenu = ref<HTMLElement|null>(null);

	const classSticky = ref('');

	const smooth = ref(false);
	const behavior = computed(() => smooth.value ? 'smooth' : 'auto');
	const { y } = useScroll($scroller, { behavior });

	watch(y, (_currentScrollY, _beforeScrollY) => {

		if (!_beforeScrollY || _beforeScrollY < 1 || !$coopbuyMenu.value) return;

		classSticky.value = ($coopbuyMenu.value.getBoundingClientRect().top + $coopbuyMenu.value.offsetHeight < 0) ? 'S=sticky-on' : '';

	}, {
		immediate: true,
	});


	const { getCurrentPageContext } = useScrollPositionStore();
	function scrollReset(event: Event, isSamePage: boolean) {
		if (isSamePage) {
			event.preventDefault();

			return;
		}
		y.value = 0;
	}
	onMounted(() => {
		const scroller = document.querySelector<HTMLElement>(`[data-path="${route.path}"] #mm_body > .mm_scroller`);
		if (scroller) {
			$scroller.value = scroller;
			if ((getCurrentPageContext(route.path)?.scrollTop || 0) > 100) {
				classSticky.value = 'S=sticky-on';
			}
		}
	});
</script>