<template>
	<layout title="공지사항">
		<p
			v-if="importantNotices.length < 1 && paginator.total < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>공지사항 내역이 없습니다
		</p>

		<template v-else>
			<div class="mm_accordion">
				<ul>
					<li
						v-for="important in importantNotices"
						:key="important.id"
					>
						<dropdown
							tag="dl"
							group="cs-notice"
						>
							<template #button>
								<p><b class="text_important">중요</b><b>{{ important.title }}</b></p>
							</template>
							<template #content>
								<p v-html="newLineToBr(important.contents)"></p>
							</template>
						</dropdown>
					</li>
					<li
						v-for="notice in paginator.data"
						:key="notice.id"
					>
						<dropdown
							tag="dl"
							group="cs-notice"
						>
							<template #button>
								<p><b>{{ notice.title }}</b></p>
							</template>
							<template #content>
								<p v-html="newLineToBr(notice.contents)"></p>
							</template>
						</dropdown>
					</li>
				</ul>
			</div>

			<pagination
				v-bind="{
					currentPage: paginator?.current_page,
					itemsPerPage: paginator?.per_page,
					totalCount: paginator?.total
				}"
				@move:page="fetch"
			></pagination>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useFormatter } from '$/composables/useFormatter';
	import { useNotice } from '$/composables/useNotice';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Pagination from '@/component/Pagination.vue';

	const { newLineToBr } = useFormatter();

	const { getImportants, getPaginator } = useNotice();
	const importantNotices = await getImportants();
	const paginator = ref(await getPaginator(1));

	/**
	 * 공지 페이지네이터 조회
	 * @param page
	 */
	async function fetch(page: number = 1) {
		paginator.value = await getPaginator(page);
	}
</script>