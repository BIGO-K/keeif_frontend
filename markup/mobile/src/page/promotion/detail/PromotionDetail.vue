<template>
	<layout title="기획전">
		<div class="mm_event">
			<!-- 관련정보 -->
			<div class="mm_event-head">
				<h2><b>EXOPLORE OCEANIA EXOPLORE OCEANIA</b></h2>
				<!-- SNS 공유 -->
				<button
					type="button"
					class="btn_sns-share"
					@click="shareStore.open"
				>
					<i class="ico_share"></i><b class="mm_ir-blind">공유하기</b>
				</button>
			</div>

			<!-- 상세 컨텐츠 1 -->
			<div class="mm_event-content">
				<!-- 에디터 등록 -->
				<div class="mm_editor">
					<div class="section1 w750">
						<img
							src="/image/_sample/promo_detail_1.png"
							alt=""
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
				<div class="mm_scroller T=x">
					<div class="mm_product-list T=card">
						<ul>
							<li
								v-for="item in 5"
								:key="item"
							>
								<product-item
									class="T=pa"
									:is-sale-price="false"
									:is-react="false"
								></product-item>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- 상세 컨텐츠 2 -->
			<div class="mm_event-content">
				<!-- 에디터 등록 -->
				<div class="mm_editor">
					<div class="section1 w750">
						<img
							src="/image/_sample/promo_detail_2.png"
							alt=""
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

				<!-- 상품리스트 -->
				<div class="mm_scroller T=x">
					<div class="mm_product-list T=card">
						<ul>
							<li
								v-for="item in 5"
								:key="item"
							>
								<product-item
									class="T=pa"
									:is-sale-price="false"
									:is-react="false"
								></product-item>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- 상세 컨텐츠 3 -->
			<div class="mm_event-content">
				<!-- <script src="../js/app_page-event.js"></script> -->
				<div class="mm_editor">
					<img
						src="/image/_sample/promo_detail_3.png"
						alt=""
					>
				</div>

				<!-- 상품리스트 -->
				<div class="mm_scroller T=x">
					<div class="mm_product-list T=card">
						<ul>
							<li
								v-for="item in 5"
								:key="item"
							>
								<product-item
									class="T=pa"
									:is-sale-price="false"
									:is-react="false"
								></product-item>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- (D) 기획전 등록시 상품 그룹을 등록한 경우에만 '상품 그룹 앵커(mm_event-anchor)' 및 '상품 그룹 목록(mm_event-list)'을 노출합니다. -->
			<!-- 상품 그룹 앵커 -->
			<div
				v-anchorSticky
				class="mm_event-anchor"
				:class="classSticky"
			>
				<dropdown :is-active="isDropDown">
					<template #button>
						<b>BEST ITEM</b>
					</template>
					<template #content>
						<ul>
							<li><a href="#event_prod_section1"><b>BEST ITEM</b></a></li>
							<li><a href="#event_prod_section2"><b>FASHION</b></a></li>
							<li><a href="#event_prod_section3"><b>BAG & SHOES & JEWELRY</b></a></li>
							<li><a href="#event_prod_section4"><b>MD PICK</b></a></li>
						</ul>
					</template>
				</dropdown>
			</div>

			<!-- 상품 그룹 목록 -->
			<!-- (D) 앵커 이동을 위해 id 값을 순서대로 넣어주세요. -->
			<div
				v-for="index in 4"
				:id="`event_prod_section${index}`"
				:key="index"
				v-productSection
				class="mm_event-list"
			>
				<h3>
					<b v-if="true">BEST ITEM {{ index }}</b>
					<mm-link
						v-else
						to="http://"
					>
						<i>
							<lazyload
								tag="img"
								src="/image/_sample/promo_detail_title_1.png"
								alt="FASHION"
							></lazyload>
						</i>
					</mm-link>
				</h3>
				<div class="mm_product-list T=card">
					<ul>
						<li
							v-for="item in 5"
							:key="item"
						>
							<product-item class="T=pa"></product-item>
						</li>
					</ul>
				</div>
			</div>

			<!-- 이벤트 댓글 -->
			<div
				ref="$reply"
				class="mm_event-reply"
			>
				<!-- 댓글 작성 -->
				<!-- (D) 작성자가 로그인 상태일 경우 -->
				<div class="mm_event-reply-write">
					<div class="mm_inner">
						<form-textarea
							maxlength="200"
							:resize="{ 'min': 5, 'max': 9 }"
							placeholder="댓글을 작성하세요"
						></form-textarea>
						<form-check
							v-model="eventReplySecret"
							label="비공개"
						></form-check>
						<div class="mm_btn_box">
							<button
								type="button"
								class="mm_btn T=primary"
							>
								<b>작성완료</b>
							</button>
						</div>
					</div>
				</div>

				<!-- 댓글 목록 -->
				<div class="mm_event-reply-list">
					<h5><b><strong>3,145</strong>개의 댓글이 있습니다</b></h5>
					<ul>
						<li class="mm_event-reply-item">
							<p class="text_user">
								<lazyload
									class="mm_bg-contain image_grade"
									src="/image/common/level5.png"
								></lazyload>a****
							</p>
							<toggle
								class="text_reply"
								title="펼쳐보기"
								active-title="접어놓기"
								parent-selector=".mm_event-reply-item"
							>
								<b>1번! 거금주고 스타일바꿔보려고 산옷<br>왜때문에 편한항상 입던스타일에만 손이가고..<br>비싸다고 처분도 못하고 자리만 차지하고ㅠ 언젠가 입을날이 올것같고 안입던스타일이라 매칭할 아이템도 부족해서 더 손안가고.ㅠㅠ 새로운스타일 도전은 저렴이로 해야한다는 교훈을 얻었지만;;새로운 도전은 계속되어야겠죠잉?ㅋㅋㅋ</b>
								<i class="ico_dropdown"></i>
							</toggle>
							<p class="text_date">
								2020.05.26 11:12:00
							</p>
						</li>
						<!-- (D) 댓글 내용이 2줄 미만인 경우 아래와 같이 노출합니다. -->
						<li class="mm_event-reply-item">
							<p class="text_user">
								<lazyload
									class="mm_bg-contain image_grade"
									src="/image/common/level2.png"
								></lazyload>i******
							</p>
							<p class="text_reply">
								<b>만족합니다!</b>
							</p>
							<p class="text_date">
								2020.05.26 11:12:00
							</p>
						</li>

						<!--
							(D) 내가 쓴 댓글일 경우 mm_event-reply-item 요소에 T=item-my 클래스와 회원 등급에 맞는 'T=등급' 클래스를 추가합니다.
							등급: level1 ~ level5
						-->
						<!-- 내가 쓴 댓글 수정 -->
						<li class="mm_event-reply-item T=item-my">
							<p class="text_user">
								<lazyload
									class="mm_bg-contain image_grade"
									src="/image/common/level4.png"
								></lazyload>a****
							</p>
							<form-textarea
								model-value="2번이요!! 다이어트 성공하면 입을라구 슬립드레스 샀는데 한번도 입은적이 없답니다"
								maxlength="200"
								:resize="{ 'min': 4, 'max': 6 }"
								placeholder="댓글을 작성하세요"
							></form-textarea>
							<form-check
								v-model="eventReplySecret"
								label="비공개"
							></form-check>
							<div class="mm_btn_box">
								<button
									type="button"
									class="btn_modify"
								>
									<b>수정</b>
								</button>
							</div>
						</li>

						<!-- 내가 쓴 댓글 -->
						<li class="mm_event-reply-item T=item-my T=level4">
							<p class="text_user">
								<lazyload
									class="mm_bg-contain image_grade"
									src="/image/common/level4.png"
								></lazyload>a****<b class="text_tag">내 댓글</b>
							</p>
							<toggle
								class="text_reply"
								title="펼쳐보기"
								active-title="접어놓기"
								parent-selector=".mm_event-reply-item"
							>
								<b>1번! 거금주고 스타일바꿔보려고 산옷<br>왜때문에 편한항상 입던스타일에만 손이가고..<br>비싸다고 처분도 못하고 자리만 차지하고ㅠ 언젠가 입을날이 올것같고 안입던스타일이라 매칭할 아이템도 부족해서 더 손안가고.ㅠㅠ 새로운스타일 도전은 저렴이로 해야한다는 교훈을 얻었지만;;새로운 도전은 계속되어야겠죠잉?ㅋㅋㅋ</b>
								<i class="ico_dropdown"></i>
							</toggle>
							<p class="text_date">
								2020.05.26 11:12:00
							</p>
							<div class="mm_btn_box">
								<button
									type="button"
									class="btn_remove"
								>
									<b>삭제</b>
								</button>
								<button
									type="button"
									class="btn_modify"
								>
									<b>수정</b>
								</button>
							</div>
						</li>
						<li class="mm_event-reply-item T=item-my T=level4">
							<p class="text_user">
								<lazyload
									class="mm_bg-contain image_grade"
									src="/image/common/level4.png"
								></lazyload>a****<b class="text_tag">내 댓글</b><i class="ico_secret"></i>
							</p>
							<toggle
								class="text_reply"
								title="펼쳐보기"
								active-title="접어놓기"
								parent-selector=".mm_event-reply-item"
							>
								<b>1번! 거금주고 스타일바꿔보려고 산옷<br>왜때문에 편한항상 입던스타일에만 손이가고..<br>비싸다고 처분도 못하고 자리만 차지하고ㅠ 언젠가 입을날이 올것같고 안입던스타일이라 매칭할 아이템도 부족해서 더 손안가고.ㅠㅠ 새로운스타일 도전은 저렴이로 해야한다는 교훈을 얻었지만;;새로운 도전은 계속되어야겠죠잉?ㅋㅋㅋ</b>
								<i class="ico_dropdown"></i>
							</toggle>
							<p class="text_date">
								2020.05.26 11:12:00
							</p>
							<div class="mm_btn_box">
								<button
									type="button"
									class="btn_remove"
								>
									<b>삭제</b>
								</button>
								<button
									type="button"
									class="btn_modify"
								>
									<b>수정</b>
								</button>
							</div>
						</li>

						<!-- 내가 쓴 비공개 댓글 -->
						<li class="mm_event-reply-item">
							<p class="text_user">
								<lazyload
									class="mm_bg-contain image_grade"
									src="/image/common/level1.png"
								></lazyload>k****
							</p>
							<toggle
								class="text_reply"
								title="펼쳐보기"
								active-title="접어놓기"
								parent-selector=".mm_event-reply-item"
							>
								<b>1번! 거금주고 스타일바꿔보려고 산옷<br>왜때문에 편한항상 입던스타일에만 손이가고..<br>비싸다고 처분도 못하고 자리만 차지하고ㅠ 언젠가 입을날이 올것같고 안입던스타일이라 매칭할 아이템도 부족해서 더 손안가고.ㅠㅠ 새로운스타일 도전은 저렴이로 해야한다는 교훈을 얻었지만;;새로운 도전은 계속되어야겠죠잉?ㅋㅋㅋ</b>
								<i class="ico_dropdown"></i>
							</toggle>
							<p class="text_date">
								2020.05.26 11:12:00
							</p>
						</li>
						<!-- 비공개 댓글 -->
						<li class="mm_event-reply-item">
							<p class="text_user">
								<lazyload
									class="mm_bg-contain image_grade"
									src="/image/common/level2.png"
								></lazyload>h********
							</p>
							<p class="text_reply">
								비공개 댓글입니다<i class="ico_secret"></i>
							</p>
							<p class="text_date">
								2020.05.26 11:12:00
							</p>
						</li>
					</ul>
				</div>

				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=line T=dark"
						>
							<b>더보기</b><i class="ico_more"></i>
						</button>
					</div>
				</div>
			</div>

			<!-- 이벤트 댓글 -->
			<div
				v-if="true"
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
	import { ref, computed, watch } from 'vue';
	import { useScroll, useIntersectionObserver } from '@vueuse/core';
	import { useShareStore } from '$/stores/useShareStore';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import ProductItem from '@/component/ProductItem.vue';
	import Toggle from '@/component/Toggle.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';

	const shareStore = useShareStore();
	const eventReplySecret = ref(false);

	const $scroller = ref<HTMLElement|null>(null);
	const $anchor = ref<HTMLElement|null>(null);
	const $reply = ref<HTMLElement|null>(null);

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

		}
	};

	// 상품 그룹 감지
	const vProductSection = {
		mounted(_$element: HTMLElement) {
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
								}

							});
						}
					}
				},
				{
					rootMargin: '-35% 0px -60% 0px', // 요소의 상단이 스크롤 높이의 35%
					threshold: [0, 1], // 요소의 시작과 끝 모두 감지
				}
			);
		}
	};
</script>