<template>
	<layout title="자주하는 질문">
		<div class="m_cs-faq">
			<!-- 검색 -->
			<div class="m_cs-faq-search">
				<form-text
					v-model="filter.searchWord"
					placeholder="검색어를 입력하세요"
					@keydown.enter="fetch()"
				>
					<template #button>
						<button
							type="button"
							class="btn_search"
							@click="fetch"
						>
							<i class="ico_search"></i><b class="mm_ir-blind">검색하기</b>
						</button>
					</template>
				</form-text>
			</div>

			<!-- 자주하는 질문 키워드 -->
			<div class="mm_inner m_cs-faq-menu">
				<ul>
					<li
						v-for="faqType in faqTypes"
						:key="faqType.id"
					>
						<mm-link
							:class="{'S=menu-on': faqType.id == filter.type && searchedWord == ''}"
							:to="{ name: 'CsFaq', query: { type: faqType.id } }"
							replace
						>
							<b>{{ faqType.name }}</b>
						</mm-link>
					</li>
				</ul>
			</div>

			<!-- 자주하는 질문 내용 목록 -->
			<div
				v-if="!searchedWord"
				class="mm_accordion"
			>
				<p
					v-if="faqList.length < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>등록된 FAQ가 없습니다
				</p>
				<ul v-else>
					<li
						v-for="faq in faqList"
						:key="faq.id"
					>
						<dropdown
							tag="dl"
							group="cs-faq"
						>
							<template #button>
								<p><b>{{ faq.title }}</b></p>
							</template>
							<template #content>
								<p v-html="faq.contents"></p>
							</template>
						</dropdown>
					</li>
				</ul>
			</div>

			<!-- 자주하는 질문 검색 -->
			<div
				v-else
				class="m_cs-faq-result"
			>
				<h3 class="mm_heading">
					<b><strong class="text_search">{{ korean(`${searchedWord}(으로/로)`) }}</strong> 검색한 결과</b>
					<strong class="mm_text-variable">{{ faqList.length }}개</strong>
				</h3>

				<p
					v-if="faqList.length < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>검색결과가 없습니다
				</p>

				<div
					v-else
					class="mm_accordion"
				>
					<ul>
						<li
							v-for="faq in faqList"
							:key="faq.id"
						>
							<dropdown
								tag="dl"
								group="cs-faq"
							>
								<template #button>
									<p v-html="wrapSearchWord(faq.title)"></p>
								</template>
								<template #content>
									<p v-html="wrapSearchWord(faq.contents)"></p>
								</template>
							</dropdown>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, watch } from 'vue';
	import { useFaq } from '$/composables/useFaq';
	import { useFormatter } from '$/composables/useFormatter';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';

	const props = withDefaults(defineProps<{
		faqTypeId: number|null
	}>(), {
		faqTypeId: null,
	});

	const { korean } = useFormatter();
	const { getTypes, getAll } = useFaq();

	const faqTypes = await getTypes();
	const faqList = ref<Faq[]>([]);

	const filter = ref<{
		type: number|null,
		searchWord: string
	}>({
		type: props.faqTypeId || faqTypes[0].id,
		searchWord: '',
	});
	const searchedWord = ref('');

	async function fetch() {
		faqList.value = await getAll(filter.value.type, filter.value.searchWord);
		searchedWord.value = filter.value.searchWord;
	}

	function wrapSearchWord(target: string) {
		return target.split(searchedWord.value).join(`<strong>${searchedWord.value}</strong>`);
	}

	watch(() => props.faqTypeId, (newFaqTypeId) => {
		filter.value.type = newFaqTypeId || faqTypes[0].id;
		filter.value.searchWord = '';
		fetch();
	}, {
		immediate: true,
	});
</script>