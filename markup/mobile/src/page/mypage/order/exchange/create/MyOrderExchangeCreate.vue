<template>
	<layout
		title="주문 교환"
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
										:value="exchangeItems[0]"
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
													src="/image/_sample/prod_x1_1.png"
												></lazyload>
												<figcaption>
													<p class="text_status">
														배송 완료
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
												<p>교환 수량</p>
												<form-select class="T=sm T=shortest">
													<option>1</option>
												</form-select>
											</div>
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
										:value="exchangeItems[1]"
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
														배송 완료
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
								<li>
									<form-check
										v-model="selectedItems"
										:value="exchangeItems[2]"
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
														배송 완료
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
												<p>교환 수량</p>
												<form-select class="T=sm T=shortest">
													<option>1</option>
												</form-select>
											</div>
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

				<!-- 교환신청 -->
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
								<i class="ico_info"></i><b>교환 주의사항</b>
							</template>
							<template #content>
								<ul>
									<li>주문 제작하신 상품 및 해외 배송 상품은 교환이 불가하여 리스트에 노출되지 않습니다.</li>
									<li>교환은 배송 완료 이후 7일 이내 신청 가능합니다.</li>
									<li>교환 사유별 배송비 부담이 상이합니다.</li>
									<li>묶음 교환의 경우 동일한 업체에 한해서 가능합니다.</li>
									<li>교환하실 상품을 발송하기 전에 한해서 교환 철회가 가능합니다.</li>
								</ul>
							</template>
						</dropdown>
					</div>
				</div>
			</div>

			<!-- 교환사유 -->
			<div class="mm_process-item S=process-on">
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>교환 사유를 선택하세요</b>
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
									<b>다음 단계로</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 교환사유 -->

			<!-- 옵션변경 -->
			<div class="mm_process-item">
				<h3 class="mm_heading m_popup-myclaim-title">
					<b>변경할 옵션을 선택하세요</b>
				</h3>
				<div class="mm_order-item">
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
													<p class="text_brand">
														엠몬스타
													</p>
													<p class="text_product">
														[매긴나잇브릿지]플리츠 디테일 드레스
													</p>
													<p class="text_option">
														베이지 FREE / 10개
													</p>
												</figcaption>
											</figure>
										</mm-link>
										<div class="mm_product-item-footer">
											<div class="mm_product...footer-indent">
												<a
													class="mm_btn T=sm T=line T=primary"
													href="#"
													@click.prevent="overlayMyOrderExchangeCreateOption"
												>
													<b>옵션 변경</b>
												</a>
											</div>
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
													<p class="text_brand">
														엠몬스타
													</p>
													<p class="text_product">
														[매긴나잇브릿지]플리츠 디테일 드레스
													</p>
													<p class="text_option">
														베이지 FREE / 10개
													</p>
												</figcaption>
											</figure>
										</mm-link>
										<div class="mm_product-item-footer">
											<div class="mm_product...footer-indent">
												<a
													class="mm_btn T=sm T=line T=primary"
													href="#"
													@click.prevent="overlayMyOrderExchangeCreateOption"
												>
													<b>옵션 변경</b>
												</a>
											</div>
											<p class="text_changed">
												<strong class="mm_text-variable">변경된 옵션</strong>
												<span>베이지 FREE / 2개</span>
											</p>
										</div>
									</div>
								</li>
								<li>
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
													<p class="text_brand">
														엠몬스타
													</p>
													<p class="text_product">
														[매긴나잇브릿지]플리츠 디테일 드레스
													</p>
													<p class="text_option">
														베이지 FREE / 10개
													</p>
												</figcaption>
											</figure>
										</mm-link>
										<div class="mm_product-item-footer">
											<div class="mm_product...footer-indent">
												<a
													class="mm_btn T=sm T=line T=primary"
													href="#"
													@click.prevent="overlayMyOrderExchangeCreateOption"
												>
													<b>옵션 변경</b>
												</a>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="mm_inner">
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
									<b>다음 단계로</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- 교환방법 -->
			<div class="mm_process-item">
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>수거방법을 선택하세요</b>
					</h3>
					<div class="m_popup-myclaim-way">
						<ul>
							<li>
								<form-radio
									v-model="exchangeSendBack"
									name="dev_radio-send"
									value="already"
								>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">직접 보냈어요</span>
									</b>
								</form-radio>
								<div
									class="mm_syncer-way-already"
									:class="{ 'S=radio-use': exchangeSendBack === 'already' }"
								>
									<h6 class="mm_strapline">
										<b>발송한 택배사</b>
									</h6>
									<form-select :v-model="sortParcel">
										<option>택배사를 선택하세요</option>
									</form-select>
									<h6 class="mm_strapline">
										<b>송장번호</b>
									</h6>
									<form-text
										type="number"
										placeholder="송장번호를 입력하세요"
									></form-text>
									<div class="mm_note">
										<ul>
											<li>택배사에 직접 접수 후 운송장번호를 입력해주세요</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<form-radio
									v-model="exchangeSendBack"
									name="dev_radio-send"
									value="yet"
								>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">상품을 아직 보내지 않았어요</span>
									</b>
								</form-radio>
								<div
									class="mm_syncer-way-yet"
									:class="{ 'S=radio-use': exchangeSendBack === 'yet' }"
								>
									<div class="mm_order-info">
										<table>
											<caption>교환 수거지 정보</caption>
											<tbody>
												<tr>
													<th scope="row">
														<b>보내는 분</b>
													</th>
													<td>홍길동</td>
												</tr>
												<tr>
													<th scope="row">
														<b>휴대폰 번호</b>
													</th>
													<td>010-1234-2839</td>
												</tr>
												<tr>
													<th scope="row">
														<b>주소</b>
													</th>
													<td>39392<br>서울 서초구 명달로 17길 32, 트라움하우스 2차 아파트 301호</td>
												</tr>
											</tbody>
										</table>
										<a
											class="mm_btn T=xs T=line btn_address-change"
											href="#"
											@click.prevent="overlayAddress"
										>
											<b>주소변경</b>
										</a>
									</div>
								</div>
							</li>
						</ul>
						<div
							class="mm_syncer-way-yet"
							:class="{ 'S=radio-use': exchangeSendBack === 'yet' }"
						>
							<div class="mm_note T=bg">
								<!-- (D) 굿스플로 사용하는 브랜드 관리자 상품일 경우 노출합니다. -->
								<!--
									<ul>
									<li>배송비 관련 금액이 발생될 경우 추가 결제가 진행됩니다.</li>
									<li>배송비 관련 금액을 동봉하지 말아주세요.</li>
									<li>상품은 착불로 발송바랍니다.</li>
									<li>본 상품은 택배사에 <strong>자동으로 교환/수거 접수</strong>됩니다.</li>
									</ul>
								-->
								<!-- (D) 굿스플로 사용하지 않는 브랜드 관리자 상품일 경우 노출합니다 -->
								<ul>
									<li>배송비 관련 금액이 발생될 경우 추가 결제가 진행됩니다.</li>
									<li>배송비 관련 금액을 동봉하지 말아주세요.</li>
									<li>상품은 착불로 발송바랍니다.</li>
									<li>본 상품은 <strong>판매처에서 교환/수거 접수</strong>됩니다.</li>
									<li><strong>3일 이내 회수되지 않을 경우</strong> 해당 택배사 또는 쇼핑몰 고객센터로 문의하세요.</li>
									<li>회수 시 발급된 송장번호는 <strong>교환 상세내역에서 등록</strong>하세요.</li>
								</ul>
							</div>
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
									<b>다음 단계로</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 교환방법 -->

			<!-- 교환받을주소 -->
			<div class="mm_process-item">
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>교환 상품 받으실 주소를 설정하세요</b>
					</h3>
					<div class="mm_order-info">
						<table>
							<caption>교환 상품 받을 정보</caption>
							<tbody>
								<tr>
									<th scope="row">
										<b>받는 사람</b>
									</th>
									<td>홍길동</td>
								</tr>
								<tr>
									<th scope="row">
										<b>휴대폰 번호</b>
									</th>
									<td>010-1234-2839</td>
								</tr>
								<tr>
									<th scope="row">
										<b>주소</b>
									</th>
									<td>39392<br>서울 서초구 명달로 17길 32, 트라움하우스 2차 아파트 301호</td>
								</tr>
							</tbody>
						</table>
						<a
							class="mm_btn T=xs T=line btn_address-change"
							href="#"
							@click.prevent="overlayAddress"
						>
							<b>주소변경</b>
						</a>
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
									<b>다음 단계로</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 교환받을주소 -->

			<!-- 추가금액결제 -->
			<div class="mm_process-item">
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>추가 금액을 결제하세요</b>
					</h3>
					<div class="mm_cost">
						<table>
							<tbody>
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
										<b>교환 배송비</b>
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
										<b>추가 결제금액</b>
									</th>
									<td>
										<p class="text_price mm_text-variable">
											<strong>5,000</strong>
										</p>
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
					<h6 class="mm_strapline">
						<b>결제방법 선택</b>
					</h6>
					<div class="m_popup-myclaim-way">
						<ul>
							<li>
								<form-radio
									v-model="exchangePaymentMethod"
									name="dev_radio-payment"
									value="now"
								>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">즉시 결제</span>
									</b>
								</form-radio>
								<div
									class="mm_syncer-payment-now"
									:class="{ 'S=radio-use': exchangePaymentMethod === 'now' }"
								>
									<form-select :v-model="sortCard">
										<option>카드를 선택하세요</option>
									</form-select>
								</div>
							</li>
							<li>
								<form-radio
									v-model="exchangePaymentMethod"
									name="dev_radio-payment"
									value="discuss"
								>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">판매자와 협의 후 결제</span>
									</b>
								</form-radio>
							</li>
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
								<button
									type="button"
									class="mm_btn T=primary"
								>
									<b>결제하기</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 추가금액결제 -->
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
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';

	const $process = ref<HTMLElement>();
	const index = ref(0);

	watch([$process, index], () => {
			if ($process.value == null) return;

			const $items = Object.values($process.value.children);
			for (const [i, $el] of $items.entries()) $el.classList[i === index.value ? 'add' : 'remove']('S=process-on');
		},
		{ immediate: true, flush: 'post' },
	);

	const layerContextStore = useLayerContextStore();

	function overlayAddress() {
		const component = defineAsyncComponent(() => import('@/page/address/Address.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyOrderExchangeCreateOption() {
		const component = defineAsyncComponent(() => import('@/page/mypage/order/exchange/create/option/MyOrderExchangeCreateOption.vue'));

		return layerContextStore.openOverlay(component);
	}

	const sortParcel = ref('');
	const sortCard = ref('');
	const claimReason = ref('');
	const exchangeSendBack = ref('');
	const exchangePaymentMethod = ref('');
	// XXX 임시 인터페이스
	interface test {
		id: string;
	}
	const exchangeItems = ref<test[]>([
		{ id: '1' },
		{ id: '2' },
		{ id: '3' },
	]);
	const selectedItems = ref<test[]>(exchangeItems.value.filter(_item => !_item.id));
</script>