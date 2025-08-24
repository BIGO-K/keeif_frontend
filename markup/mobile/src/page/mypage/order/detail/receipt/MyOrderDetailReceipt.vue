<template>
	<div class="m_overlay-receipt">
		<div class="m_overlay-receipt-head">
			<form-select
				:v-model="sortPaymentRange"
				class="T=sm T=short"
			>
				<option>부분취소</option>
			</form-select>
			<button
				type="button"
				class="mm_btn T=sm T=line T=primary btn_send"
				@click.prevent="bomReceiptEmail"
			>
				<i class="ico_email"></i><b>발송</b>
			</button>
		</div>
		<div class="m_overlay-receipt-inner">
			<section>
				<h3><b>주문 정보</b></h3>
				<table>
					<colgroup>
						<col style="width:121px;">
						<col>
					</colgroup>
					<tbody>
						<tr>
							<th scope="row">
								<b>주문번호</b>
							</th>
							<td>123456789123</td>
						</tr>
						<tr>
							<th scope="row">
								<b>주문자명</b>
							</th>
							<td>홍*동</td>
						</tr>
						<tr>
							<th scope="row">
								<b>상품명</b>
							</th>
							<td>[카파] 반다 스트랩 샌들 블랙 아동 키즈</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section>
				<h3><b>결제 정보</b></h3>
				<table>
					<colgroup>
						<col style="width:121px;">
						<col>
					</colgroup>
					<tbody>
						<tr>
							<th scope="row">
								<b>결제수단</b>
							</th>
							<td>신용카드</td>
						</tr>
						<tr>
							<th scope="row">
								<b>거래상태</b>
							</th>
							<td>부분취소</td>
						</tr>
						<tr>
							<th scope="row">
								<b>거래일시</b>
							</th>
							<td>2022/06/01 09:38:29</td>
						</tr>
						<tr>
							<th scope="row">
								<b>취소일시</b>
							</th>
							<td>2022/06/02 09:38:29</td>
						</tr>
						<template v-if="receiptType === 'card'">
							<tr>
								<th scope="row">
									<b>결제카드</b>
								</th>
								<td>하나카드</td>
							</tr>
							<tr>
								<th scope="row">
									<b>카드번호</b>
								</th>
								<td>123466******8936</td>
							</tr>
							<tr>
								<th scope="row">
									<b>할부개월</b>
								</th>
								<td>일시불</td>
							</tr>
							<tr>
								<th scope="row">
									<b>승인번호</b>
								</th>
								<td>123456789</td>
							</tr>
						</template>
						<template v-if="receiptType === 'account'">
							<tr>
								<th scope="row">
									<b>결제은행</b>
								</th>
								<td>국민은행</td>
							</tr>
							<tr>
								<th scope="row">
									<b>가상계좌번호</b>
								</th>
								<td>123456789123456</td>
							</tr>
						</template>
						<tr>
							<th scope="row">
								<b>승인금액</b>
							</th>
							<td>
								<p class="text_price">
									<strong>11,140</strong>
								</p>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>과세금액</b>
							</th>
							<td>
								<p class="text_price">
									<strong>-10,128</strong>
								</p>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>기취소금액</b>
							</th>
							<td>
								<p class="text_price">
									<strong>28,000</strong>
								</p>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>부가세</b>
							</th>
							<td>
								<p class="text_price">
									<strong>-1,012</strong>
								</p>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>취소금액</b>
							</th>
							<td>
								<p class="text_price mm_text-variable">
									<strong>11,140</strong>
								</p>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>면세금액</b>
							</th>
							<td>
								<p class="text_price">
									<strong>0</strong>
								</p>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>잔액</b>
							</th>
							<td>
								<p class="text_price">
									<strong>2,500</strong>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section v-if="receiptType === 'account'">
				<h3><b>현금영수증 정보</b></h3>
				<table>
					<colgroup>
						<col style="width:121px;">
						<col>
					</colgroup>
					<tbody>
						<tr>
							<th scope="row">
								<b>결제수단</b>
							</th>
							<td>현금영수증</td>
						</tr>
						<tr>
							<th scope="row">
								<b>거래상태</b>
							</th>
							<td>승인</td>
						</tr>
						<tr>
							<th scope="row">
								<b>공급자사업자번호</b>
							</th>
							<td>116-81-19948</td>
						</tr>
						<tr>
							<th scope="row">
								<b>현금영수증용도</b>
							</th>
							<td>소득공제</td>
						</tr>
						<tr>
							<th scope="row">
								<b>현금영수증발급형태</b>
							</th>
							<td>구매자요청발급</td>
						</tr>
						<tr>
							<th scope="row">
								<b>현금영수증인증값</b>
							</th>
							<td>0101234****</td>
						</tr>
						<tr>
							<th scope="row">
								<b>현금영수증승인번호</b>
							</th>
							<td>123456789</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section>
				<h3><b>공급자 정보</b></h3>
				<table>
					<colgroup>
						<col style="width:121px;">
						<col>
					</colgroup>
					<tbody>
						<tr>
							<th scope="row">
								<b>상호</b>
							</th>
							<td>(주)엠몬스타</td>
						</tr>
						<tr>
							<th scope="row">
								<b>사업자번호</b>
							</th>
							<td>792-81-00850</td>
						</tr>
						<tr>
							<th scope="row">
								<b>대표자명</b>
							</th>
							<td>장한필</td>
						</tr>
						<tr>
							<th scope="row">
								<b>연락처</b>
							</th>
							<td>031-8023-9666</td>
						</tr>
						<tr>
							<th scope="row">
								<b>주소</b>
							</th>
							<td>경기도 성남시 분당구 판교로 242판교디지털센터(PDC) C동 401호</td>
						</tr>
						<tr>
							<th scope="row">
								<b>홈페이지</b>
							</th>
							<td>www.mmonstar.co.kr</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section>
				<h3><b>결제대행사 정보</b></h3>
				<table>
					<colgroup>
						<col style="width:121px;">
						<col>
					</colgroup>
					<tbody>
						<tr>
							<th scope="row">
								<b>상호</b>
							</th>
							<td>한국정보통신(주)</td>
						</tr>
						<tr>
							<th scope="row">
								<b>사업자번호</b>
							</th>
							<td>116-81-19948</td>
						</tr>
						<tr>
							<th scope="row">
								<b>대표자명</b>
							</th>
							<td>권순배, 임명수</td>
						</tr>
						<tr>
							<th scope="row">
								<b>연락처</b>
							</th>
							<td>1600-1234</td>
						</tr>
						<tr>
							<th scope="row">
								<b>주소</b>
							</th>
							<td>서울시 중구 세종대로 39 대한상공회의소 7층</td>
						</tr>
						<tr>
							<th scope="row">
								<b>홈페이지</b>
							</th>
							<td>www.easypay.co.kr</td>
						</tr>
					</tbody>
				</table>
				<template v-if="receiptType === 'card'">
					<div class="mm_note">
						<ul>
							<li>신용카드 청구서에는 ‘한국정보통신(주)’로 표기됩니다.</li>
							<li>부가세세법시행령 제57조 2항에 따라 결제대행업체를 통한 신용 카드 매출전표는 사업자가 별도의 세금계산서를 교부하지 아니한 경우, 매입세금계산서로 사용하실 수 있습니다.</li>
						</ul>
					</div>
				</template>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import mons from '$/utils/mons';
	import FormSelect from '@/component/form/FormSelect.vue';

	const sortPaymentRange = ref('');
	const receiptType: string = 'card';// 임시 변수

	defineExpose<OverlayComponentExpose>({
		title: `신용카드 영수증`,
	});

	const bomReceiptEmail = () => {
		mons().bom.prompt(
			'이메일 주소를 입력해주세요',
			(_is: boolean, _values: Record<string, string>) => {
				console.log(_is, _values);
			},
			{
				title: '메일 발송',
				forms: [
					{ type: 'text', name: 'email', maxLength: 50, placeholder: `‘@’을 포함하여 50자 이하 입력` }
				]
			}
		);
	};
</script>