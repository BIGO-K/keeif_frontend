<template>
	<layout
		title="반품 전환"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div
			ref="$process"
			class="mm_process"
		>
			<!-- 상품 선택 -->
			<div class="mm_process-item">
				<!-- 주문목록 -->
				<article class="mm_order-item">
					<h5><b>2022.05.14</b><strong>주문번호: 2005141142151234562</strong></h5>
					<div class="mm_order-item-seller">
						<div class="mm_order...seller-head">
							<p class="text_ship">
								<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
							</p>
						</div>
						<div class="mm_product-list T=sm">
							<ul>
								<li>
									<form-check
										v-model="selectedItems"
										:value="returnItems[0]"
										label="상품 선택"
										:label-on-blind="true"
									></form-check>
									<p class="text_seller">
										<i class="ico_shop"></i>엠몬스타
									</p>
									<div class="mm_product-item">
										<a>
											<figure>
												<lazyload
													class="mm_bg-cover image_product"
													src="/image/_sample/prod_x1_1.png"
												></lazyload>
												<figcaption>
													<p class="text_status">교환 신청</p>
													<p class="text_brand">엠몬스타</p>
													<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스</p>
													<p class="text_price"><strong>54,800</strong></p>
													<p class="text_option">베이지 FREE / 10개</p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="mm_order-item-seller">
						<div class="mm_order...seller-head">
							<p class="text_ship">
								<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
							</p>
						</div>
						<div class="mm_product-list T=sm">
							<ul>
								<li>
									<form-check
										v-model="selectedItems"
										:value="returnItems[1]"
										label="상품 선택"
										:label-on-blind="true"
									></form-check>
									<p class="text_seller">
										<i class="ico_shop"></i>엠몬스타
									</p>
									<div class="mm_product-item">
										<a>
											<figure>
												<lazyload
													class="mm_bg-cover image_product"
													src="/image/_sample/prod_x1_2.png"
												></lazyload>
												<figcaption>
													<p class="text_status">교환 신청</p>
													<p class="text_brand">엠몬스타</p>
													<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스</p>
													<p class="text_price"><strong>54,800</strong></p>
													<p class="text_option">베이지 FREE / 1개</p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<form-check
										v-model="selectedItems"
										:value="returnItems[2]"
										label="상품 선택"
										:label-on-blind="true"
									></form-check>
									<p class="text_seller">
										<i class="ico_shop"></i>엠몬스타
									</p>
									<div class="mm_product-item">
										<a>
											<figure>
												<lazyload
													class="mm_bg-cover image_product"
													src="/image/_sample/prod_x1_3.png"
												></lazyload>
												<figcaption>
													<p class="text_status">교환 신청</p>
													<p class="text_brand">엠몬스타</p>
													<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스</p>
													<p class="text_price"><strong>54,800</strong></p>
													<p class="text_option">베이지 FREE / 1개</p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</article>

				<!-- 반품신청 -->
				<div class="mm_inner">
					<div class="mm_foot">
						<div class="mm_btn_box">
							<button
								type="button"
								class="mm_btn T=primary"
								@click="index++"
							>
								<b>다음 단계로</b>
							</button>
						</div>
					</div>
					<div class="mm_note">
						<dropdown
							:is-active="true"
							icon-class="T=box"
						>
							<template #button>
								<i class="ico_info"></i><b>반품 주의사항</b>
							</template>
							<template #content>
								<ul>
									<li>반품 전환의 경우 수량 부분 선택이 불가능합니다.</li>
									<li>반품 전환하신 상품은 바로 반품 완료 처리가 진행됩니다.</li>
								</ul>
							</template>
						</dropdown>
					</div>
				</div>
			</div>

			<!-- 반품 사유 -->
			<div class="mm_process-item">
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>반품 사유를 선택하세요</b>
					</h3>
					<div class="m_popup-myclaim-reason">
						<ul>
							<li>
								<form-radio
									v-model="claimReason"
									name="dev_radio-reason"
									value=""
								>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<i class="ico_my-change"><i class="ico_my-cancel"></i></i>
										<strong>상품을 받고 마음이 변했어요</strong>
										<span>구매자 반품비용 부담</span>
									</b>
								</form-radio>
							</li>
							<li>
								<form-radio
									v-model="claimReason"
									name="dev_radio-reason"
									value="defects"
								>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<i class="ico_my-defects"><i class="ico_my-cancel"></i></i>
										<strong>상품에 하자가 있어요</strong>
										<span>판매자 반품비용 부담</span>
									</b>
								</form-radio>
							</li>
							<li>
								<form-radio
									v-model="claimReason"
									name="dev_radio-reason"
									value="other"
								>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<i class="ico_my-other"><i class="ico_my-question"></i></i>
										<strong>다른 상품이 배송됐어요</strong>
										<span>판매자 반품비용 부담</span>
									</b>
								</form-radio>
							</li>
						</ul>
						<div
							class="mm_syncer-reason"
							:class="{ 'S=radio-use': claimReason }"
						>
							<h6 class="mm_strapline">
								<b>상세사유</b><strong>(필수입력)</strong>
							</h6>
							<form-textarea
								placeholder="상세 사유를 입력하세요"
								:byte="2000"
							></form-textarea>
						</div>
					</div>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_flex T=auto">
								<button
									type="button"
									class="mm_btn T=line T=light btn_back"
									@click="index--"
								>
									<i class="ico_page-prev"></i><b>이전으로</b>
								</button>
								<button
									type="button"
									class="mm_btn T=primary"
									@click="index++"
								>
									<b>다음으로</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- 환불관련정보 -->
			<div class="mm_process-item">
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>예상 환불금액을 확인하세요</b>
					</h3>
					<div class="mm_cost">
						<table>
							<tbody>
								<tr>
									<th scope="row">
										<b>반품 상품 주문 금액</b>
									</th>
									<td>
										<p class="text_price">
											<strong>210,000</strong>
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>면제 배송비</b>
									</th>
									<td>
										<p class="text_price">
											- <strong>2,500</strong>
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>반품 배송비</b>
									</th>
									<td>
										<p class="text_price">
											+ <strong>2,500</strong>
										</p>
									</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<th scope="row">
										<b>환불 예상 금액</b>
									</th>
									<td>
										<p class="text_price mm_text-variable">
											<strong>210,000</strong>
										</p>
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
					<h6 class="mm_strapline">
						<b>환불 정보</b>
					</h6>
					<div class="mm_cost">
						<table>
							<tbody>
								<tr>
									<th scope="row">
										<b>신용카드 환불</b>
									</th>
									<td>
										<p class="text_price">
											<strong>210,000</strong>
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>적립금 환불</b>
									</th>
									<td>
										<p class="text_point">
											<strong>2,000</strong><sub>원</sub>
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="mm_note">
						<ul>
							<li>최종적으로 환불 받으실 금액은 상이할 수 있습니다.</li>
						</ul>
					</div>
					<h6 class="mm_strapline">
						<b>환불 계좌 관리</b>
					</h6>
					<div class="mm_order-refund">
						<p class="text_bank">
							KEB하나은행
						</p>
						<p class="text_name">
							홍길동
						</p>
						<p>1234567891234</p>
						<a
							class="mm_btn T=xs T=dark"
							href="#"
							@click.prevent="overlayMyRefundUpdate"
						>
							<b>변경하기</b><i class="ico_link T=sm"></i>
						</a>
					</div>
					<!-- (D) 등록된 계좌가 없을 경우 노출합니다. -->
					<!--
						<div class="mm_order-refund-none">
						<p>환불 계좌를 등록하세요</p>
						<a class="mm_btn T=dark" href="_popup_myRefundAccountRegister.html"><b>환불 계좌 등록하기</b></a>
						</div>
					-->
					<div class="mm_note">
						<ul>
							<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
						</ul>
					</div>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_flex T=auto">
								<button
									type="button"
									class="mm_btn T=line T=light btn_back"
									@click="index--"
								>
									<i class="ico_page-prev"></i><b>이전으로</b>
								</button>
								<a
									class="mm_btn T=primary"
									href="#"
									@click.prevent="$router.push({ name: 'MyOrderToReturnSuccess' })"
								>
									<b>반품 전환하기</b>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, watch, defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';

	const $process = ref<HTMLElement>();
	const index = ref(0);

	const layerContextStore = useLayerContextStore();

	function overlayMyRefundUpdate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/refund/update/MyRefundUpdate.vue'));

		return layerContextStore.openOverlay(component);
	}

	watch([$process, index], () => {
			if ($process.value == null) return;

			const $items = Object.values($process.value.children);
			for (const [i, $el] of $items.entries()) $el.classList[i === index.value ? 'add' : 'remove']('S=process-on');
		},
		{ immediate: true, flush: 'post' }
	);

	const claimReason = ref('');

	// XXX 임시 인터페이스
	interface test {
		id: string;
	}
	const returnItems = ref<test[]>([
		{ id: '1' },
		{ id: '2' },
		{ id: '3' }
	]);
	const selectedItems = ref<test[]>(returnItems.value.filter(_item => !_item.id));
</script>