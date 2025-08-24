<template>
	<layout title="기획전">
		<div
			ref="$event"
			class="mm_event"
		>
			<!-- 관련정보 -->
			<div class="mm_event-head">
				<h2><b>{{ planningEvent.title }}</b></h2>
				<!-- SNS 공유 -->
				<button
					type="button"
					class="btn_sns-share"
					@click="promotionShare($event)"
				>
					<i class="ico_share"></i><b class="mm_ir-blind">공유하기</b>
				</button>
			</div>

			<!-- 상세 컨텐츠 -->
			<div
				v-for="section in planningEvent.sections"
				:key="section.id"
				class="mm_event-content"
			>
				<!-- 에디터 등록 -->
				<div class="mm_editor">
					<div
						class="section1 w750"
						v-html="section.mobile_html"
					>
					</div>
					<!--
						<style>
						.mm_editor .w750 {max-width: 750px;}
						.mm_editor .section1 {text-align:center;}
						</style>
					-->
				</div>

				<!-- 상품리스트 -->
				<div
					v-if="section.goods_list.length > 0"
					class="mm_scroller T=x"
				>
					<div class="mm_product-list T=card">
						<ul>
							<li
								v-for="goods in section.goods_list"
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
			</div>

			<!-- (D) 기획전 등록시 상품 그룹을 등록한 경우에만 '상품 그룹 앵커(mm_event-anchor)' 및 '상품 그룹 목록(mm_event-list)'을 노출합니다. -->
			<!-- 상품 그룹 앵커 -->
			<div
				v-if="planningEvent.groups.length > 0"
				v-anchor-sticky
				class="mm_event-anchor"
				:class="classSticky"
			>
				<dropdown v-model:is-active="isDropDown">
					<template #button>
						<b>{{ selectedGroupTitle || planningEvent.groups[0].title }}</b>
					</template>
					<template #content>
						<ul>
							<li
								v-for="group in planningEvent.groups"
								:key="group.id"
							>
								<a
									:href="`#event_prod_section_${group.id}`"
									@click.prevent="moveAnchor($event, group)"
								><b>{{ group.title }}</b></a>
							</li>
						</ul>
					</template>
				</dropdown>
			</div>

			<!-- 상품 그룹 목록 -->
			<!-- (D) 앵커 이동을 위해 id 값을 순서대로 넣어주세요. -->
			<div
				v-for="group in planningEvent.groups"
				:id="`event_prod_section_${group.id}`"
				:key="`p_${group.id}`"
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

			<!-- 이벤트 댓글 -->
			<event-comments
				v-if="planningEvent.is_use_comment"
				v-bind="{
					paginator: commentPaginator,
					loadedComments,
				}"
				@fetch-more="fetchMoreComment"
				@add="createComment"
				@update="editComment"
				@destroy="destroyComment"
			></event-comments>
			<div
				v-if="false"
				class="mm_event-reply"
			>
				<!-- 댓글 작성 -->
				<!-- (D) 작성자가 비로그인 상태일 경우 -->
				<div class="mm_event-reply-write">
					<div class="mm_inner">
						<p class="text_login">
							로그인을 하셔야 댓글을 등록하실 수 있습니다
						</p>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<mm-link
									class="mm_btn T=sm T=primary"
									:to="{ name: 'Login' }"
								>
									<b>댓글 작성하기</b>
								</mm-link>
							</div>
						</div>
					</div>
				</div>

				<!-- 댓글 목록 -->
				<div class="mm_event-reply-list">
					<h5><b><strong>0</strong>개의 댓글이 있습니다</b></h5>
					<p class="mm_text-none">
						<i class="ico_text-none"></i>등록된 댓글이 없습니다
					</p>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, watch, computed, DirectiveBinding, onMounted } from 'vue';
	import { useScroll, useIntersectionObserver } from '@vueuse/core';
	import { useShareStore } from '$/stores/useShareStore';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { usePlanningEvent } from '$/composables/usePlanningEvent';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import GoodsItem from '@/component/GoodsItem.vue';
	import EventComments from '@/page/promotion/component/Comments.vue';

	const $scroller = ref<HTMLElement|null>(null);
	const $anchor = ref<HTMLElement|null>(null);
	let productSections: Element[] = [];
	const selectedGroupTitle = ref<string>('');
	const isDropDown = ref<boolean>(true);
	const classSticky = ref('');

	const shareStore = useShareStore();
	const { bom, loading, isMember, route } = useGlobalPageContext();
	const promotionId = Number(route.params.id);
	const {
		getDetail,
		getGoodsGroup,
		getCommentPaginator,
		addComment,
		updateComment,
		removeComment,
		addRecentView,
	} = usePlanningEvent();
	const planningEvent = ref<PlanningEvent>(await getDetail(promotionId));
	const commentPaginator = await getCommentPaginator(promotionId);
	const loadedComments = ref<SpecialEventComment[]>(commentPaginator.data);

	Promise.all([
		planningEvent.value.groups.forEach(group =>
			getGoodsGroup(promotionId, group.id)
				.then((groupGoods) => {
					group.goods_list = groupGoods;
				}),
		),
	]);

	function moveAnchor(event: Event, group: PlanningEventGroup) {
		selectedGroupTitle.value = group.title;
		const target = document.querySelector<HTMLElement>(`#event_prod_section_${group.id}`);
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
			const newComments = (await getCommentPaginator(promotionId, ++commentPaginator.current_page)).data;
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
		await addComment(promotionId, form);
		fetchMoreComment(true);
		bom.alert('댓글이 작성되었습니다.');
	}

	async function editComment(commentId: number, form: PlanningCommentForm) {
		await updateComment(promotionId, commentId, form);
		bom.alert('댓글이 수정되었습니다.');
	}

	async function destroyComment(commentId: number) {
		await removeComment(promotionId, commentId);
		bom.alert('댓글이 삭제되었습니다.');
		fetchMoreComment(true);
	}

	// 기획전 공유하기
	function promotionShare(_e: MouseEvent) {

		const $event = ref<HTMLElement|null>(null);
		if (!$event.value) return;

		const $firstImage = $event.value.querySelector('img') as HTMLElement;
		const $firstProductImage = $event.value.querySelector('.mm_product-item .image_product') as HTMLElement;
		const $ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement;

		let imageUrl: string = '';

		const imageRatio = ($firstImage?.offsetWidth / $firstImage?.offsetHeight);
		if (imageRatio > 0.85 && imageRatio < 1.15) imageUrl = $firstImage.getAttribute('src') ?? '';
		else if ($firstProductImage) imageUrl = $firstProductImage.style.backgroundImage;
		else if ($ogImage) imageUrl = $ogImage.content;

		shareStore.open(_e, planningEvent.value.title, `#기획전#${planningEvent.value.title}`, imageUrl);

	}

	onMounted(() => {
		if (isMember.value) {
			addRecentView(promotionId);
		}
	});
</script>