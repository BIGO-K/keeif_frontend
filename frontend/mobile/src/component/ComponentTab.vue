<template>
	<div
		ref="$tab"
		class="m_prodetail-tab"
	>
		<div
			class="mm_tab_menu"
			:class="props.class"
		>
			<ul class="mm_flex T=equal">
				<li
					v-for="(tab, _index) in tabs"
					:key="tab.id"
				>
					<a
						class="btn_tab"
						:class="{ 'S=tab-on': _index === currentTabIndex }"
						active-class="S=tab-on"
						:href="`#${tab.id}`"
						@click.prevent="toTabId = tab.id"
					>
						<b>{{ tab.name }}</b>
						<small v-if="tab.useCount">{{ tab.getCount() }}</small>
					</a>
				</li>
			</ul>
		</div>
		<template v-if="currentTab">
			<component
				:is="currentTab.component"
				v-bind="currentTab.getProps()"
				v-if="!props.isKeep"
			></component>
			<keep-alive
				v-else
				:max="8"
			>
				<component
					:is="currentTab.component"
					v-bind="currentTab.getProps()"
				></component>
			</keep-alive>
		</template>
	</div>
</template>

<script setup lang="ts" generic="T">
	import { defineAsyncComponent, ref, computed, watch } from 'vue';
	import { useRoute, onBeforeRouteLeave } from 'vue-router';
	import { useScrollPositionStore } from '$/stores/useScrollPositionStore';
	import { usePageScroller } from '$/composables/usePageScroller';

	const props = withDefaults(defineProps<{
		/** @prop { boolean } `default: true` */
		isKeep?: boolean;
		/** @prop { string | Record<string, boolean> | (string | Record<string, boolean>)[] } `default: ''` */
		class?: string | Record<string, boolean> | (string | Record<string, boolean>)[];
		toTabId?: string;
		needTabFocusChange?: boolean;
		data: {
			goodsId: number
			brandName: string
			information?: GoodsInformation
			shoppingAggregate: GoodsReactionAggregate
			reviewWritable: boolean
			deliveryInfo: GoodsDeliveryInfo
			returnDeliveryInfo: GoodsReturnDeliveryInfo
		}
	}>(), {
		isKeep: false,
		toTabId: '',
		class: '',
	});

	const emit = defineEmits<(e: 'update:toTabId', value: string) => void>();
	const { scrollTo } = usePageScroller();
	const route = useRoute();
	const { applyPageContext, getCurrentPageContext } = useScrollPositionStore();

	/** 현재 탭 id */
	const toTabId = computed({
		get: () => props.toTabId,
		set: (value) => {
			emit('update:toTabId', value);
		},
	});

	const currentTabIndex = ref(0);
	const currentTab = computed(() => {
		const tab = tabs[currentTabIndex.value];

		return tab?.id == 'info' && !props.data.information ? null : tab;
	});
	const $tab = ref<HTMLElement>();
	const tabs = [
		{
			id: 'info',
			name: '상세정보',
			useCount: false,
			component: defineAsyncComponent(() => import(`@/page/product/detail/component/ProductDetailInfo.vue`)),
			getProps: () => {
				return {
					goodsId: props.data.goodsId,
					information: props.data.information,
				};
			},
			getCount: () => 0,
		},
		{
			id: 'review',
			name: `리뷰`,
			useCount: true,
			component: defineAsyncComponent(() => import(`@/page/product/detail/component/ProductDetailReview.vue`)),
			getProps: () => {
				return {
					goodsId: props.data.goodsId,
					shoppingAggregate: props.data.shoppingAggregate,
					reviewWritable: props.data.reviewWritable,
				};
			},
			getCount: () => props.data.shoppingAggregate.total_review_count,
		},
		{

			id: 'qna',
			name: `상품 Q&A`,
			useCount: true,
			component: defineAsyncComponent(() => import(`@/page/product/detail/component/ProductDetailQna.vue`)),
			getProps: () => {
				return {
					goodsId: props.data.goodsId,
				};
			},
			getCount: () => props.data.shoppingAggregate.total_qna_count,
		},
		{
			id: 'seller',
			name: '판매자 정보',
			useCount: false,
			component: defineAsyncComponent(() => import(`@/page/product/detail/component/ProductDetailSeller.vue`)),
			getProps: () => {
				return {
					deliveryInfo: props.data.deliveryInfo,
					returnDeliveryInfo: props.data.returnDeliveryInfo,
					brandName: props.data.brandName,
				};
			},
			getCount: () => 0,
		},
	];

	const needTabFocusChange = computed(() => props.needTabFocusChange);

	toTabId.value = `${getCurrentPageContext(route.path)?.optional?.goodsTab}` || toTabId.value;
	if (toTabId.value && toTabId.value != 'info') {
		currentTabIndex.value = tabs.findIndex(tab => tab.id == toTabId.value) || 0;
	}

	watch(toTabId, (_toTabId) => {
		if (!_toTabId) return;
		const toTabIndex = tabs.findIndex(tab => tab.id == _toTabId);
		// 탭 변경처리
		if (toTabIndex < 0) return;
		currentTabIndex.value = toTabIndex;
		toTabId.value = '';
		// 탭 상단으로 스크롤 처리
		if (!$tab.value || !needTabFocusChange.value) return;
		scrollTo($tab.value, { margin: 0 });
	});

	onBeforeRouteLeave(() => {
		if (!currentTab.value) return;

		applyPageContext({
			key: route.path,
			scrollTop: 0,
			optional: {
				goodsTab: currentTab.value.id,
			},
		});
	});
</script>