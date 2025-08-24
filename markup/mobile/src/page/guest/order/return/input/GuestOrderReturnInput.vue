<template>
	<layout
		title="주문 반품"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div
			ref="$process"
			class="mm_process"
		>
			<!-- 반품사유 -->
			<div class="mm_process-item S=process-on">
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
								<mm-link
									class="mm_btn T=line T=light btn_back"
									:to="{}"
								>
									<i class="ico_page-prev"></i><b>이전으로</b>
								</mm-link>
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
			<!-- 반품사유 -->

			<!-- 반품방법 -->
			<div class="mm_process-item">
				<div class="mm_inner">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>수거방법을 선택하세요</b>
					</h3>
					<div class="m_popup-myclaim-way">
						<ul>
							<li>
								<form-radio
									v-model="returnSendBack"
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
									:class="{ 'S=radio-use': returnSendBack === 'already' }"
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
									v-model="returnSendBack"
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
									:class="{ 'S=radio-use': returnSendBack === 'yet' }"
								>
									<div class="mm_order-info">
										<table>
											<caption>반품 수거지 정보</caption>
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
										<mm-link
											class="mm_btn T=xs T=line btn_address-change"
											:to="{ name: 'GuestOrderDetailAddressChange', params:{ id: 123 }}"
										>
											<b>주소변경</b>
										</mm-link>
									</div>
								</div>
							</li>
						</ul>
						<div
							class="mm_syncer-way-yet"
							:class="{ 'S=radio-use': returnSendBack === 'yet' }"
						>
							<div class="mm_note T=bg">
								<!-- (D) 굿스플로 사용하는 브랜드 관리자 상품일 경우 노출합니다. -->
								<!--
									<ul>
									<li>배송비 관련 금액은 반품 완료 시 환불 예정 금액에서 차감됩니다.</li>
									<li>배송비 관련 금액을 동봉하지 마세요.</li>
									<li>상품은 착불로 발송해주세요.</li>
									<li>본 상품은 택배사에 <strong>자동으로 반품/수거 접수</strong>됩니다.</li>
									</ul>
								-->
								<!-- (D) 굿스플로 사용하지 않는 브랜드 관리자 상품일 경우 노출합니다 -->
								<ul>
									<li>반품 택배비는 환불 예정 금액에서 차감됩니다.</li>
									<li>반품 택배비를 동봉하지 말아주세요.</li>
									<li>상품은 착불로 발송바랍니다.</li>
									<li>본 상품은 <strong>판매처에서 반품/수거 접수</strong>됩니다.</li>
									<li><strong>3일 이내 회수되지 않을 경우</strong> 해당 택배사 또는 쇼핑몰 고객센터로 문의바랍니다.</li>
									<li>회수 시 발급된 송장번호는 <strong>반품 상세내역에서 등록</strong>바랍니다.</li>
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
			<!-- 반품방법 -->

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
										<b>총 결제금액</b>
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
					<div class="mm_note">
						<ul>
							<li>초도 배송비를 지불하셨을 경우 귀책 사유 관계 없이 면제 배송비가 부과되지 않습니다.</li>
						</ul>
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
							</tbody>
						</table>
					</div>
					<div class="mm_note">
						<ul>
							<li>최종적으로 환불 받으실 금액은 상이할 수 있습니다.</li>
						</ul>
					</div>
					<h6 class="mm_strapline">
						<b>예금주</b>
					</h6>
					<form-text
						placeholder="예금주명을 입력하세요"
					></form-text>
					<h6 class="mm_strapline">
						<b>환불 은행</b>
					</h6>
					<form-select :v-model="sortBank">
						<option>은행을 선택하세요</option>
					</form-select>
					<h6 class="mm_strapline">
						<b>환불 계좌</b>
					</h6>
					<form-text
						type="number"
						placeholder="계좌번호를 입력하세요(숫자만 입력)"
					></form-text>
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
									<b>반품 신청하기</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 환불관련정보 -->
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, watch } from 'vue';
	import Layout from '@/component/layout/Layout.vue';
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

	const sortParcel = ref('');
	const sortBank = ref('');
	const claimReason = ref('');
	const returnSendBack = ref('');
</script>