<template>
	<layout
		title="주문 취소"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<!-- 주문목록 -->
		<!-- (D) '입금 대기' 상태일 경우 상단에 상품선택 체크박스는 노출하지 않습니다. -->
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
							<p class="text_seller">
								<i class="ico_shop"></i>엠몬스타
							</p>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_1.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												입금 대기
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
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
								<div class="mm_product-item-footer">
									<p class="text_point">
										사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
									</p>
								</div>
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
								:value="cancelItems[0]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<p class="text_seller">
								<i class="ico_shop"></i>엠몬스타
							</p>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_2.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												배송 준비중
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												베이지 FREE / 10개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<div class="mm_product...footer-indent">
										<p>취소 수량: 4개</p>
										<a
											class="mm_btn T=sm T=line T=primary"
											href="#"
											@click.prevent="overlayMyCancleChoice"
										>
											<b>부분 선택</b>
										</a>
									</div>
									<p class="text_point">
										사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
									</p>
								</div>
							</div>
						</li>
						<li>
							<form-check
								v-model="selectedItems"
								:value="cancelItems[1]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<p class="text_seller">
								<i class="ico_shop"></i>엠몬스타
							</p>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_3.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												결제 완료
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
											</p>
											<p class="text_price">
												<strong>54,800</strong>
											</p>
											<p class="text_option">
												베이지 FREE / 10개
											</p>
										</figcaption>
									</figure>
								</mm-link>
								<div class="mm_product-item-footer">
									<div class="mm_product...footer-indent">
										<p>취소 수량: 4개</p>
										<a
											class="mm_btn T=sm T=line T=primary"
											href="#"
											@click.prevent="overlayMyCancleChoice"
										>
											<b>부분 선택</b>
										</a>
									</div>
									<p class="text_point">
										사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
									</p>
								</div>
							</div>
						</li>
						<li>
							<form-check
								v-model="selectedItems"
								:value="cancelItems[2]"
								label="상품 선택"
								:label-on-blind="true"
							></form-check>
							<p class="text_seller">
								<i class="ico_shop"></i>엠몬스타
							</p>
							<div class="mm_product-item">
								<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
									<figure>
										<lazyload
											class="mm_bg-cover image_product"
											src="/image/_sample/prod_x1_4.png"
										></lazyload>
										<figcaption>
											<p class="text_status">
												결제 완료
											</p>
											<p class="text_brand">
												엠몬스타
											</p>
											<p class="text_product">
												[매긴나잇브릿지]플리츠 디테일 드레스
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
								<div class="mm_product-item-footer">
									<p class="text_point">
										사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>

		<!-- 취소신청 -->
		<div class="mm_inner m_popup-myclaim-cancel">
			<h6 class="mm_strapline">
				<b>취소 사유</b>
			</h6>
			<form-select
				v-model="cancelReason"
				:v-model="sortCencel"
			>
				<option>취소 사유를 선택하세요</option>
				<option value="etc">
					기타
				</option>
			</form-select>
			<div
				class="mm_syncer-reason"
				:class="{ 'S=select-use': cancelReason === 'etc' }"
			>
				<form-textarea
					placeholder="취소 사유를 입력하세요(필수입력)"
					:byte="2000"
				></form-textarea>
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
						<tr>
							<th scope="row">
								<b>환불 예상금액</b>
							</th>
							<td>
								<p class="text_price mm_text-variable">
									<strong>235,450</strong>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
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
				<a
				class="mm_btn T=dark"
				href="#"
				@click.prevent="overlayMyRefundUpdate"
				>
				<b>환불 계좌 등록하기</b>
				</a>
				</div>
			-->
			<div class="mm_note">
				<ul>
					<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
				</ul>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>취소 신청하기</b>
					</button>
				</div>
			</div>
			<div class="mm_note">
				<dropdown
					:is-active="true"
					icon-class="T=box"
				>
					<template #button>
						<i class="ico_info"></i><b>주문 취소 주의사항</b>
					</template>
					<template #content>
						<ul>
							<li>무통장 입금을 제외한 나머지 결제 수단의 경우 원 결제 수단 취소로 진행됩니다.</li>
							<li>휴대폰 주문은 결제한 당월이 지날 경우 원 결제 취소가 불가합니다.</li>
							<li>에스크로 결제 건은 부분 취소가 불가능하고, 전체 취소만 가능합니다.</li>
						</ul>
					</template>
				</dropdown>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';

	const layerContextStore = useLayerContextStore();

	function overlayMyCancleChoice() {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/pick/MyOrderPick.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyRefundUpdate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/refund/update/MyRefundUpdate.vue'));

		return layerContextStore.openOverlay(component);
	}

	const sortCencel = ref('');
	const cancelReason = ref('');

	// XXX 임시 인터페이스
	interface test {
		id: string;
	}
	const cancelItems = ref<test[]>([
		{ id: '1' },
		{ id: '2' },
		{ id: '3' }
	]);
	const selectedItems = ref<test[]>(cancelItems.value.filter(_item => !_item.id));
</script>