<template>
	<!-- 페이지네이션 -->
	<!-- (D) 현재 페이지의 메뉴에 'S=page-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
	<div
		v-if="totalCount > 0 && totalCount > itemsPerPage"
		class="mm_pagination"
	>
		<div class="mm_inline">
			<ol>
				<li
					v-for="page in currentPageItems"
					:key="page"
				>
					<a
						href="#"
						:class="page == currentPage ? 'S=page-on' : ''"
						:title="page == currentPage ? '선택됨' : ''"
						@click.prevent="movePageTo(page);"
					><b>{{ page }}</b></a>
				</li>
			</ol>
			<button
				type="button"
				class="btn_control-first"
				:disabled="currentPageBlock == 1"
				@click="movePageTo(1)"
			>
				<i class="ico_page-first"></i><b class="mm_ir-blind">처음</b>
			</button>
			<button
				type="button"
				class="btn_control-prev"
				:disabled="currentPageBlock == 1"
				@click="movePageTo(lastPageOfPreviousBlock)"
			>
				<i class="ico_page-prev"></i><b class="mm_ir-blind">이전</b>
			</button>
			<button
				type="button"
				class="btn_control-next"
				:disabled="currentPageBlock == lastPageBlock"
				@click="movePageTo(firstPageOfNextBlock)"
			>
				<i class="ico_page-next"></i><b class="mm_ir-blind">다음</b>
			</button>
			<button
				type="button"
				class="btn_control-last"
				:disabled="currentPageBlock == lastPageBlock"
				@click="movePageTo(lastPage)"
			>
				<i class="ico_page-last"></i><b class="mm_ir-blind">마지막</b>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, toRefs } from 'vue';

	const props = withDefaults(defineProps<{
		/** 페이지 블록 갯수 */
		pageBlockCount?: number
		/** 현재 페이지 번호*/
		currentPage?: number
		/** 페이지당 아이템수 */
		itemsPerPage?: number
		/** 총 아이템 수 */
		totalCount?: number
		/** 세로 스크롤 타겟 위치 */
		scrollYTarget?: HTMLElement|null
	}>(), {
		pageBlockCount: 3,
		currentPage: 1,
		itemsPerPage: 20,
		totalCount: 0,
		scrollYTarget: null,
	});

	const emit = defineEmits<{
		'move:page': [page: number];
	}>();


	const {
		pageBlockCount,
		currentPage,
		itemsPerPage,
		totalCount,
		scrollYTarget,
	} = toRefs(props);

	/** 마지막 페이지 번호 */
	const lastPage = computed(() => Math.ceil(totalCount.value / itemsPerPage.value));
	/** 이전 페이지블록의 마지막 페이지 번호 */
	const lastPageOfPreviousBlock = computed<number>(() => Math.max(currentPageItems.value[0] - 1, 1));
	/** 다음 페이지블록의 첫번째 페이지번호 */
	const firstPageOfNextBlock = computed<number>(() => Math.min(currentPageItems.value[pageBlockCount.value - 1] + 1, lastPage.value));

	/** 현재 페이지블록 */
	const currentPageBlock = computed(() => Math.ceil(currentPage.value / pageBlockCount.value));
	const lastPageBlock = computed(() => Math.ceil(lastPage.value / pageBlockCount.value));

	/** 현재 페이지아이템 리스트 */
	const currentPageItems = computed<number[]>(() => {
		return Array(...Array(pageBlockCount.value))
			.map((_, index) => (currentPageBlock.value - 1) * pageBlockCount.value + (index + 1))
			.filter(pageItem => pageItem <= lastPage.value);
	});


	/** 페이지 이동 */
	function movePageTo(toPage: number) {
		emit('move:page', toPage);
		scrollTop();
	}

	// 블록 페이지네이터에서도 scroll top 필요한 경우 사용
	function scrollTop() {
		if (!scrollYTarget.value) {
			return;
		}

		scrollYTarget.value.scrollIntoView();
	}
</script>