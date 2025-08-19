<template>
	<layout title="이벤트">
		<div
			ref="$event"
			class="mm_event"
		>
			<!-- 관련정보 -->
			<div class="mm_event-head">
				<h2><b>{{ specialEvent.title }}</b></h2>
				<!-- SNS 공유 -->
				<button
					type="button"
					class="btn_sns-share"
					@click="eventShare($event)"
				>
					<i class="ico_share"></i><b class="mm_ir-blind">공유하기</b>
				</button>
			</div>

			<!-- 이벤트 상세 이미지 -->
			<div class="m_event-hero">
				<!-- 이미지 등록 -->
				<i
					v-if="specialEvent.contents_type === 'image'"
					class="image_banner"
				>
					<lazyload
						tag="img"
						:src="specialEvent.contents_image_url"
						:alt="specialEvent.contents_image_alt"
					></lazyload>
				</i>

				<!-- 에디터 등록 -->
				<div
					v-else-if="specialEvent.contents_type === 'html'"
					class="mm_editor"
				>
					<div
						class="section1 w750"
						v-html="specialEvent.contents_html"
					>
					</div>
					<!--
						<style>
						.mm_editor .w750 {max-width: 750px;}
						.mm_editor .section1 {text-align:center;}
						.mm_event .mm_editor .item {padding: 30px 0;}
						</style>
					-->
				</div>
			</div>

			<!-- (D) 이벤트 등록시 상품 그룹을 등록한 경우에만 '상품 그룹 앵커(mm_event-anchor)' 및 '상품 그룹 목록(mm_event-list)'을 노출합니다. -->
			<!-- 상품 그룹 앵커 -->
			<template v-if="specialEvent.goods_groups.length > 0">
				<div
					v-anchor-sticky
					class="mm_event-anchor"
					:class="classSticky"
				>
					<dropdown :is-active="isDropDown">
						<template #button>
							<b>{{ selectedGroupTitle || specialEvent.goods_groups[0].title }}</b>
						</template>
						<template #content>
							<ul>
								<li
									v-for="group in specialEvent.goods_groups"
									:key="group.id"
								>
									<a
										:href="`#event_prod_section${group.id}`"
										@click.prevent="moveAnchor(group)"
									><b>{{ group.title }}</b></a>
								</li>
							</ul>
						</template>
					</dropdown>
				</div>

				<!-- 상품 그룹 목록 -->
				<!-- (D) 앵커 이동을 위해 id 값을 순서대로 넣어주세요. -->
				<div
					v-for="group in specialEvent.goods_groups"
					:id="`event_prod_section${group.id}`"
					:key="group.id"
					v-product-section="{ setOnGroupTitle: (title: string) => { selectedGroupTitle = title }}"
					class="mm_event-list"
				>
					<h3><b>{{ group.title }}</b></h3>
					<div class="mm_product-list T=card">
						<ul>
							<li
								v-for="goods in group.goods_list"
								:key="goods.id"
							>
								<goods-item
									class="T=pa"
									:goods="goods"
								></goods-item>
							</li>
						</ul>
					</div>
				</div>
			</template>

			<!-- 이벤트 댓글 -->
			<event-comments
				v-if="specialEvent.is_commentable"
				v-bind="{
					paginator: commentPaginator,
					loadedComments,
				}"
				@fetch-more="fetchMoreComment"
				@add="createComment"
				@update="editComment"
				@destroy="destroyComment"
			></event-comments>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed, watch, DirectiveBinding } from 'vue';
	import { useScroll, useIntersectionObserver } from '@vueuse/core';
	import { useShareStore } from '$/stores/useShareStore';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useSpecialEvent } from '$/composables/useSpecialEvent';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import GoodsItem from '@/component/GoodsItem.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import EventComments from '@/page/promotion/component/Comments.vue';

	const props = defineProps<{
		id: number
	}>();

	const { bom, loading } = useGlobalPageContext();
	const {
		getDetail,
		getGoodsGroup,
		getCommentPaginator,
		addComment,
		updateComment,
		removeComment,
	} = useSpecialEvent();

	const specialEvent = ref<SpecialEventDetail>(await getDetail(props.id));
	const commentPaginator = await getCommentPaginator(props.id);
	const loadedComments = ref<SpecialEventComment[]>(commentPaginator.data);
	Promise.all([
		specialEvent.value.goods_groups.forEach(async (group) => {
			group.goods_list = await getGoodsGroup(props.id, group.id);
		}),

	]);
	const selectedGroupTitle = ref<string>('');

	const shareStore = useShareStore();

	const $scroller = ref<HTMLElement|null>(null);
	const $anchor = ref<HTMLElement|null>(null);
	const $event = ref<HTMLElement|null>(null);

	const isDropDown = ref<boolean>(true);
	const classSticky = ref('');
	let productSections: Element[] = [];

	// 상품 그룹 앵커 sticky
	const vAnchorSticky = {
		mounted(_$element: HTMLElement) {

			$anchor.value = _$element;
			$scroller.value = document.querySelector('.mm_page > .mm_scroller') as HTMLElement;

			const smooth = ref(false);
			const behavior = computed(() => smooth.value ? 'smooth' : 'auto');
			const { y } = useScroll($scroller, { behavior });

			watch(y, () => {

				const offsetTop = _$element.getBoundingClientRect().top;
				const $lastAnchorSection = productSections[productSections.length - 1] as HTMLElement;

				if (offsetTop + _$element.offsetHeight <= 0 && $lastAnchorSection.offsetHeight + $lastAnchorSection.getBoundingClientRect().top > _$element.offsetHeight) {
					_$element.style.height = getComputedStyle(_$element)['height'];
					classSticky.value = 'S=anchor-sticky';
					isDropDown.value = false;
				}
				else {
					_$element.style.height = '';
					classSticky.value = '';
					isDropDown.value = true;
				}

			});

		},
	};

	// 상품 그룹 감지
	const vProductSection = {
		mounted(_$element: HTMLElement, binding: DirectiveBinding<{ setOnGroupTitle: (title: string) => void }>) {
			productSections.push(_$element);
			const anchorBtns = $anchor.value?.querySelectorAll('a');
			const classAnchorOn = 'S=anchor-on';

			useIntersectionObserver(_$element, _entries => {
					for (const entry of _entries) {
						if (entry.isIntersecting) {
							if (!anchorBtns) return;

							anchorBtns.forEach((_$btn) => {

								_$btn.classList.remove(classAnchorOn);
								_$btn.setAttribute('title', '');

								if (_$btn === anchorBtns[productSections.indexOf(entry.target)]) {
									_$btn.classList.add(classAnchorOn);
									_$btn.setAttribute('title', '선택됨');
									binding.value.setOnGroupTitle(_$btn.textContent || '');
								}

							});
						}
					}
				},
				{
					rootMargin: '-35% 0px -60% 0px', // 요소의 상단이 스크롤 높이의 35%
					threshold: [0, 1], // 요소의 시작과 끝 모두 감지
				},
			);
		},
	};

	async function fetchMoreComment(refresh: boolean = false) {
		loading.show();
		try {
			if (refresh) {
				commentPaginator.current_page = 0;
				loadedComments.value = [];
			}
			const newComments = (await getCommentPaginator(props.id, ++commentPaginator.current_page)).data;
			loadedComments.value = loadedComments.value.concat(newComments);
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	async function createComment(form: PlanningCommentForm) {
		await addComment(props.id, form);
		fetchMoreComment(true);
		bom.alert('댓글이 작성되었습니다.');
	}

	async function editComment(commentId: number, form: PlanningCommentForm) {
		await updateComment(props.id, commentId, form);
		bom.alert('댓글이 수정되었습니다.');
	}

	async function destroyComment(commentId: number) {
		await removeComment(props.id, commentId);
		bom.alert('댓글이 삭제되었습니다.');
		fetchMoreComment(true);
	}

	function moveAnchor(group: SpecialEventDetail['goods_groups'][number]) {
		selectedGroupTitle.value = group.title;
		const target = document.querySelector<HTMLElement>(`#event_prod_section${group.id}`);
		if (!target) return;

		(target as HTMLElement).scrollIntoView({
			block: 'start',
		});

		if ($scroller.value) {
			// .mm_event-list에 Padding Top 만큼
			$scroller.value.scrollTop = $scroller.value.scrollTop - 54;
		}
		isDropDown.value = false;

	}

	// 공유하기
	function eventShare(_e: MouseEvent) {
		if (!$event.value) return;

		const $firstImage = $event.value.querySelector('img') as HTMLElement;
		const $firstProductImage = $event.value.querySelector('.mm_product-item .image_product') as HTMLElement;
		const $ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement;

		let imageUrl: string = '';

		const imageRatio = ($firstImage?.offsetWidth / $firstImage?.offsetHeight);
		if (imageRatio > 0.85 && imageRatio < 1.15) imageUrl = $firstImage.getAttribute('src') ?? '';
		else if ($firstProductImage) imageUrl = $firstProductImage.style.backgroundImage;
		else if ($ogImage) imageUrl = $ogImage.content;
		shareStore.open(_e, specialEvent.value.title, `#이벤트#${specialEvent.value.title}`, imageUrl);
	}
</script>

<style src="./_event.scss" lang="scss"></style>