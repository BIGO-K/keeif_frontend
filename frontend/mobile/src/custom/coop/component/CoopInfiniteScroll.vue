<template>
	<div
		ref="container$"
		class="mm_product-list T=card"
		:style="{ minHeight: `${minHeight}px`}"
	>
		<ul
			ref="itemContainer$"
			:class="[attrs.class]"
			:style="{
				paddingTop: `${paddingTop}px`,
				paddingBottom: `${paddingBottom}px`,
			}"
		>
			<template
				v-for="itemWrapper in itemWrappersForDisplay"
				:key="itemWrapper._index"
			>
				<slot
					name="item"
					:item="itemWrapper.item"
					:index="itemWrapper._index"
				></slot>
			</template>
			<template v-if="pending">
				<li
					v-for="_index in itemsPerPage"
					:key="_index"
				>
					<div class="mm_product-item">
						<i class="image_product"></i>
						<div class="mm_product-item-info">
							<p class="text_brand"></p>
							<p class="text_product"></p>
							<p class="text_price"></p>
						</div>
					</div>
				</li>
			</template>
		</ul>

		<div class="mm_foot">
			<div class="mm_btn_box">
				<p
					v-if="items.length === totalCount"
					id="text_last"
					class="mm_btn T=sm T=line"
				>
					마지막 페이지입니다
				</p>

				<button
					v-if="!startVirtual && totalCount > itemsPerPage"
					type="button"
					class="mm_btn T=line T=dark btn_more"
					@click="scrollEventStart"
				>
					<b>더보기</b><i class="ico_more"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" generic="T">
	import { onMounted, ref, computed, watch, useAttrs } from 'vue';
	import { useRoute } from 'vue-router';
	import { useScroll } from '@vueuse/core';
	import { useScrollPositionStore } from '$/stores/useScrollPositionStore';
	// 실제로 보여질 아이템
	interface ItemWrapper {
		_index: number,
		_isEmptyItem: boolean,
		item: T,
	}

	const props = withDefaults(defineProps<{
		items: T[]
		initPage: number
		itemsPerPage: number
		totalCount: number
		isLoading: boolean
		padCount?: number
	}>(), {
		items: () => [],
		initPage: 1,
		itemsPerPage: 100,
		isLoading: true,
		padCount: 6,
	});

	const emit = defineEmits<{
		(e: 'pageRequired', value: number): void
	}>();
	const attrs = useAttrs();
	const totalCount = computed(() => props.totalCount);
	const itemsPerPage = computed(() => props.itemsPerPage);
	const items = computed(() => props.items);

	const heightPxPerItem = ref<number>(410.16);
	const scrollPositionStore = useScrollPositionStore();
	const route = useRoute();
	const currentPageContextTop = computed(() => scrollPositionStore.getCurrentPageContext(route.path)?.scrollTop || 0);
	// const { items, itemsPerPage } = toRefs(props);
	const offsetTopToItemContainer = ref(608);
	const minHeight = ref(currentPageContextTop.value);
	const pageOnView = ref(props.initPage);
	// 컨테이너 돔
	const itemContainer$ = ref<HTMLUListElement|null>(null);
	watch(itemContainer$, (to) => {
		if (to) {
			offsetTopToItemContainer.value = getOffsetFromParent(to);
		}

	});
	const container$ = ref<HTMLElement|null>(null);
	const scroller = ref<HTMLElement|null>(null);
	const startVirtual = ref<boolean>(false);
	const pending = computed(() => props.isLoading);
	// 앞뒤로 쿠션을 채울 아이템 수
	const padItemCount = ref(props.padCount);
	const itemWrappersForDisplay = computed<ItemWrapper[]>(() => {
		return items.value
			.map((item, index) => {
				return ({
					_index: index,
					_isEmptyItem: item == null || item == undefined,
					item,
				}) as ItemWrapper;
			})
			.slice(itemIndexStartPadded.value, itemIndexEndPadded.value);
	});

	// 앞 쿠션을 반영한 시작 아이템 인덱스
	const itemIndexStartPadded = computed(() => {
		return Math.max(itemIndexStartDisplay.value - padItemCount.value, 0);
	});

	// 뒤 쿠션을 반영한 종료 아이템 인덱스
	const itemIndexEndPadded = computed(() => {
		return Math.min(itemIndexEndDisplay.value + padItemCount.value, items.value.length);
	});

	// 쿠션이 반영되지 않은 시작 아이템 인덱스(순수 뷰 화면에 보여질 대상)
	const itemIndexStartDisplay = computed(() => {
		const rawIndex = Math.floor(
			Math.max(scrollYPosition.value - offsetTopToItemContainer.value, 0) / heightPxPerItem.value,
		);

		return rawIndex;
	});

	// 쿠션이 반영되지 않은 종료 아이템 인덱스(순수 뷰 화면에 보여질 대상)
	const itemIndexEndDisplay = computed(() => {
		const rawIndex = Math.ceil(
			Math.max(viewEnd.value - offsetTopToItemContainer.value, 0) / heightPxPerItem.value,
		);

		return rawIndex;
	});

	// 뷰 영역의 종료 Y축 값
	const viewEnd = computed(() => {
		return scrollYPosition.value + window.innerHeight;
	});

	// 쿠션 픽셀값
	const paddingTop = computed(() => {
		return heightPxPerItem.value * itemIndexStartPadded.value;
	});

	const paddingBottom = computed(() => {
		return heightPxPerItem.value * (items.value.length - itemIndexEndPadded.value);
	});

	/** FUNCTION */
	function getOffsetFromParent(el: Element|null): number {
		if (!el || !(el instanceof HTMLElement)) {
			return 0;
		}

		return getOffsetFromParent(el.offsetParent) + el.offsetTop;
	}

	function getTopToItemContainer() {
		if (!itemContainer$.value) {
			return;
		}
		offsetTopToItemContainer.value = getOffsetFromParent(itemContainer$.value);
	}

	const { y: scrollYPosition, directions } = useScroll(scroller);

	const stopPageWatch = watch(pageOnView, async (to) => {
		if (!startVirtual.value) {
			return;
		}
		await emit('pageRequired', to);
	});


	const stopScrollWatch = watch(scrollYPosition, async (to) => {
		/**
		 * 화면상의 페이지를 유추
		 * 사용자가 보고있다고 '판단하는' 페이지
		 *
		* 화면 하단 기준으로 계산(2페이지의 상단 끄트머리만 보여도 2페이지로 취급)
		*/
		pageOnView.value = Math.max(
			Math.ceil(
				(to - offsetTopToItemContainer.value + window.innerHeight) / (heightPxPerItem.value * itemsPerPage.value),
			),
			1,
		);

		if (directions.top) {
			pageOnView.value = Math.max(
				Math.ceil(
					(to - offsetTopToItemContainer.value) / (heightPxPerItem.value * itemsPerPage.value),
				),
				1,
			);
		}

	});


	function scrollEventStart() {
		startVirtual.value = true;
		emit('pageRequired', 2);
	}

	/** VUE LIFE CYCLE */
	onMounted(async () => {
		if (props.initPage > 1) {
			startVirtual.value = true;
		}

		getTopToItemContainer();
		if (container$.value !== null) {
			const itemElement = container$.value.querySelector('li div.mm_product-item:not([data-skeleton])');
			if (itemElement) {
				heightPxPerItem.value = itemElement.getBoundingClientRect().height;
			}

			scroller.value = container$.value.closest('.mm_scroller');
			if (scroller.value && props.initPage > 1) {
				/**
				 * 초기렌더링을 약간 더 자연스럽게 만들기 위해 일단 스크롤을 내려둠
				 */
				scroller.value.scrollTop = currentPageContextTop.value;
			}
		}

		if (props.totalCount < props.itemsPerPage) {
			stopScrollWatch();
			stopPageWatch();
		}
	});
</script>