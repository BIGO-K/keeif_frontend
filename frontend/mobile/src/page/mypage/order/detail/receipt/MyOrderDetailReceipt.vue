<template>
	<div class="m_overlay-receipt">
		<div class="m_overlay-receipt-head">
			<form-select
				v-model="receiptType"
				class="T=sm T=short"
			>
				<option value="all">
					전체
				</option>
				<option value="approve">
					승인
				</option>
				<template v-if="receipt.cancels.length > 1">
					<option
						v-for="(cancelDetail, index) in receipt?.cancels"
						:key="index"
						:value="`cancel_${index}`"
					>
						부분취소({{ index + 1 }})
					</option>
				</template>
				<option
					v-else-if="receipt?.cancels?.length"
					value="cancel_0"
				>
					취소
				</option>
			</form-select>
			<button
				type="button"
				class="mm_btn T=sm T=line T=primary btn_send"
				@click.prevent="bomReceiptEmail"
			>
				<i class="ico_email"></i><b>발송</b>
			</button>
		</div>
		<div
			v-if="currentReceipt"
			class="m_overlay-receipt-inner"
		>
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
							<td>{{ orderId }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>주문자명</b>
							</th>
							<td>{{ maskedOrdererName }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>상품명</b>
							</th>
							<td>{{ goodsName }}</td>
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
							<td>{{ currentReceipt.pay_method_name }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>거래상태</b>
							</th>
							<td>{{ currentReceipt.status }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>거래일시</b>
							</th>
							<td>{{ date(currentReceipt.paid_at, 'YYYY/MM/DD HH:mm:ss') }}</td>
						</tr>
						<tr v-if="currentReceipt.type == 'cancel'">
							<th scope="row">
								<b>취소일시</b>
							</th>
							<td>{{ date(currentReceipt.canceled_at || '', 'YYYY/MM/DD HH:mm:ss') }}</td>
						</tr>
						<template v-if="currentReceipt.card">
							<tr>
								<th scope="row">
									<b>결제카드</b>
								</th>
								<td>{{ currentReceipt.card.name }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>카드번호</b>
								</th>
								<td>{{ currentReceipt.card.masked_number }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>할부개월</b>
								</th>
								<td>{{ currentReceipt.card.installment }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>승인번호</b>
								</th>
								<td>{{ currentReceipt.card.tid }}</td>
							</tr>
						</template>
						<template v-if="currentReceipt.virtual_bank">
							<tr>
								<th scope="row">
									<b>결제은행</b>
								</th>
								<td>{{ currentReceipt.virtual_bank.bank_name }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>가상계좌번호</b>
								</th>
								<td>{{ currentReceipt.virtual_bank.virtual_account_number }}</td>
							</tr>
						</template>
						<template v-if="currentReceipt.type == 'all'">
							<tr>
								<th scope="row">
									<b>승인금액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.payment_price) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>취소금액</b>
								</th>
								<td>
									<p class="text_price mm_text-variable">
										<strong>{{ number(currentReceipt.canceled_price) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>잔액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.balance_price) }}</strong>
									</p>
								</td>
							</tr>
						</template>
						<template v-else-if="currentReceipt.type == 'approve'">
							<tr>
								<th scope="row">
									<b>승인금액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.payment_price) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>과세금액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.tax_price) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>부가세</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.surtax_price) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>면세금액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.tax_free_price) }}</strong>
									</p>
								</td>
							</tr>
						</template>
						<template v-else-if="currentReceipt.type == 'cancel'">
							<tr>
								<th scope="row">
									<b>승인금액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.payment_price) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>과세금액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.tax_price) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>기취소금액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.canceled_price) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>부가세</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.surtax_price) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>취소금액</b>
								</th>
								<td>
									<p class="text_price mm_text-variable">
										<strong>{{ number(currentReceipt.cancel_price) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>면세금액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.tax_free_price) }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>잔액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ number(currentReceipt.balance_price) }}</strong>
									</p>
								</td>
							</tr>
						</template>
					</tbody>
				</table>
			</section>
			<section v-if="(currentReceipt.type == 'approve' || currentReceipt.type == 'cancel') && currentReceipt.cash_receipt">
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
							<td>{{ currentReceipt.cash_receipt.status }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>공급자사업자번호</b>
							</th>
							<td>{{ shopInfo.business_number }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>현금영수증용도</b>
							</th>
							<td>{{ currentReceipt.cash_receipt.use_type }}</td>
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
							<td>{{ currentReceipt.cash_receipt.masked_request_number }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>현금영수증승인번호</b>
							</th>
							<td>{{ currentReceipt.cash_receipt.auth_code }}</td>
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
							<td>{{ shopInfo.name_in_business || shopInfo.name }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>사업자번호</b>
							</th>
							<td>{{ shopInfo.business_number }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>대표자명</b>
							</th>
							<td>{{ shopInfo.ceo_name }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>연락처</b>
							</th>
							<td>{{ shopInfo.tel }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>주소</b>
							</th>
							<td>{{ `${shopInfo.base_address} ${shopInfo.detail_address}` }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>홈페이지</b>
							</th>
							<td>{{ shopInfo.homepage_url }}</td>
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
							<td>{{ receipt.payment_company_info.name }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>사업자번호</b>
							</th>
							<td>{{ receipt.payment_company_info.business_number }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>대표자명</b>
							</th>
							<td>{{ receipt.payment_company_info.ceo }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>연락처</b>
							</th>
							<td>{{ receipt.payment_company_info.phone }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>주소</b>
							</th>
							<td>{{ receipt.payment_company_info.address }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>홈페이지</b>
							</th>
							<td>{{ receipt.payment_company_info.homepage_url }}</td>
						</tr>
					</tbody>
				</table>
				<template v-if="currentReceipt.card">
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
	import { ref, computed } from 'vue';
	import config from '$/utils/config';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyOrder } from '$/composables/useMyOrder';
	import FormSelect from '@/component/form/FormSelect.vue';

	const props = defineProps<{
		orderId: string
		ordererName: string
		goodsName: string
		payMethodLabel: string
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `${props.payMethodLabel || ''} 영수증`,
	});

	const { bom } = useGlobalPageContext();
	const { number, date } = useFormatter();
	const { getPaymentReceipt, sendPaymentReceiptToEmail } = useMyOrder();

	const maskedOrdererName = computed<string>(() => {
		return props.ordererName.replace(/.(?=.$)/u, '*');
	});

	/** 쇼핑몰 정보 */
	const shopInfo = ref<ShopConfig>(config('shop'));

	/** 영수증 */
	const receipt = await getPaymentReceipt(props.orderId);

	const receiptType = ref<'all'|'approve'|`cancel_${number}`>('all');

	const currentReceipt = computed<BaseReceipt|null>(() => {
		let receiptDetail: BaseReceipt|null = null;

		if (receiptType.value == 'all' || receiptType.value == 'approve') {
			receiptDetail = receipt?.[receiptType.value] || null;
		}

		if (receiptType.value.includes('cancel_')) {
			const cancelIndex = Number(receiptType.value.replace('cancel_', ''));
			receiptDetail = receipt?.['cancels'][cancelIndex] || null;
		}

		return receiptDetail;
	});

	const bomReceiptEmail = () => {
		bom.prompt(
			'이메일 주소를 입력해주세요',
			async (_is: boolean, _values: Record<string, string>) => {
				if (!_is) {
					return;
				}

				if (!_values.email) {
					return bom.alert('이메일을 입력해주세요.');
				}

				const isValidEmail = /^.+@.+(.com|.net|.co.kr)$/.test(_values.email);
				if (!isValidEmail) {
					return bom.alert('정상적인 이메일 주소를 입력해주세요.');
				}

				const type: 'all'|'approve'|'cancel' = receiptType.value == 'approve' || receiptType.value == 'all' ? receiptType.value : 'cancel';
				const refundId: string|undefined = currentReceipt.value?.type == 'cancel' ? currentReceipt.value.refund_id : undefined;

				try {
					await sendPaymentReceiptToEmail(props.orderId, _values.email, type, refundId);
					bom.alert('이메일이 정상적으로 발송되었습니다.');
				}
				catch (e) {
					useErrorAlert(e);
				}
			},
			{
				title: '메일 발송',
				forms: [
					{ type: 'text', name: 'email', maxLength: 50, placeholder: `‘@’을 포함하여 50자 이하 입력` },
				],
			},
		);
	};
</script>