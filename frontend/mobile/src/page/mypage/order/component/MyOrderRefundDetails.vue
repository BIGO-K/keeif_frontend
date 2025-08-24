<template>
	<div class="mm_cost">
		<table>
			<tbody>
				<tr>
					<th scope="row">
						<b>{{ label }}</b>
					</th>
					<td>
						<p class="text_price">
							<strong>{{ number(totalRefundAmount) }}</strong>
						</p>
					</td>
				</tr>
				<tr
					v-for="detail in refundInfo.calculate_details"
					:key="detail.label"
				>
					<th scope="row">
						<strong>{{ detail.label }}</strong>
					</th>
					<td>
						<p class="text_price">
							{{ detail.is_subtracted ? '-' : '+' }}
							<strong>{{ number(detail.amount) }}</strong>
						</p>
					</td>
				</tr>
				<tr>
					<th scope="row">
						<b>적립금 환불</b>
					</th>
					<td>
						<p class="text_point">
							<strong>{{ number(refundInfo.refund_point) }}</strong><sub>원</sub>
						</p>
					</td>
				</tr>
				<tr>
					<th scope="row">
						<b>환불 예상금액</b>
					</th>
					<td>
						<p class="text_price mm_text-variable">
							<strong>{{ number(refundInfo.refund_price + refundInfo.refund_point) }}</strong>
						</p>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script setup lang="ts">
	import { computed, } from 'vue';
	import { useFormatter } from '$/composables/useFormatter';
	import { useMyOrder } from '$/composables/useMyOrder';
	const props = defineProps<{
		refundInfo: RefundInfo
		label: string
	}>();

	const { getRefundCalculations } = useMyOrder();
	const { number } = useFormatter();

	/** 총 환불금액 */
	const totalRefundAmount = computed(() => getRefundCalculations(props.refundInfo).totalRefund);
</script>