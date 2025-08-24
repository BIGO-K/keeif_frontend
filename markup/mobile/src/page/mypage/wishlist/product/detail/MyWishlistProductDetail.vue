<template>
	<layout
		title="살까말까"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-mylike-folder">
			<!-- 상단영역 -->
			<div class="m...folder-head">
				<div class="mm_lside">
					<p>전체<strong class="mm_text-variable">3개</strong></p>
				</div>
				<div class="mm_rside">
					<div class="mm_btn_box">
						<div class="mm_inline">
							<button
								type="button"
								class="mm_btn T=sm T=line T=light btn_modify"
							>
								<i class="ico_modify"></i><b>편집</b>
							</button>
							<button
								type="button"
								class="mm_btn T=sm T=line T=primary btn_move"
								disabled
							>
								<b>이동</b>
							</button>
							<button
								type="button"
								class="mm_btn T=sm T=line T=primary btn_remove"
								disabled
							>
								<b>삭제</b>
							</button>
							<button
								type="button"
								class="mm_btn T=sm T=line T=light btn_modify-cancel"
							>
								<i class="ico_modify"></i><b>편집취소</b>
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- 상품목록 -->
			<p
				v-if="items.length < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>찜한 아이템이 없습니다
			</p>

			<div
				v-else
				class="mm_product-list T=sm"
			>
				<ul>
					<li>
						<div class="mm_product-item">
							<form-check
								v-model="selectedItems"
								:value="wishItems[0]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/prod_x1_1.png"
									></lazyload>
									<figcaption>
										<p class="text_brand">
											엠몬스타
										</p>
										<p class="text_product">
											[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
										</p>
										<p class="text_price">
											<strong>54,800</strong>
										</p>
										<p class="text_option">
											베이지 FREE / 1개
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<form-check
								v-model="selectedItems"
								:value="wishItems[1]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<a>
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/prod_x1_2.png"
									></lazyload>
									<p class="text_soldout">품절</p>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">시스루스트라이프셔츠</p>
										<p class="text_price"><strong>54,800</strong></p>
										<p class="text_option">베이지 FREE / 1개</p>
									</figcaption>
								</figure>
							</a>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<form-check
								v-model="selectedItems"
								:value="wishItems[2]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/prod_x1_3.png"
									></lazyload>
									<figcaption>
										<p class="text_brand">
											엠몬스타
										</p>
										<p class="text_product">
											데일리&데이트 13,900원 균일
										</p>
										<p class="text_price">
											<strong>13,900</strong>
										</p>
										<p class="text_option">
											베이지 FREE / 1개
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수

	// XXX 임시 인터페이스
	interface test {
		id: string;
	}
	const wishItems = ref<test[]>([
		{ id: '1' },
		{ id: '2' },
		{ id: '3' }
	]);
	const selectedItems = ref<test[]>(wishItems.value.filter(_item => !_item.id));
</script>