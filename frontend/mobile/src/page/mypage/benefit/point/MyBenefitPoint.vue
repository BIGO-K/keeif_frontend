<template>
	<div class="m_mybenefit">
		<div class="m_mybenefit-head">
			<h3><b>내가 보유한 적립금</b><strong class="mm_text-variable">{{ number(totalPoints) }}<sub>원</sub></strong></h3>
		</div>
		<!-- 기간조회 -->
		<div class="m_mybenefit-period">
			<!-- (D) 현재 조회기간에 해당하는 mm_btn에 'T=lightest'클래스를 지우고, 'T=dark'클래스와 '선택됨' 타이틀을 추가합니다 -->
			<div class="mm_btn_box">
				<div class="mm_inline">
					<button
						v-for="monthTab in monthTabs"
						:key="monthTab.value"
						type="button"
						:class="['mm_btn T=sm T=line', monthTab.value == targetMonth.value ? 'T=dark' : 'T=lightest']"
						title="선택됨"
						@click="targetMonth = monthTab"
					>
						<b>{{ monthTab.label }}</b>
					</button>
				</div>
			</div>
			<p>조회기간: {{ `${targetMonth.from} ~ ${targetMonth.to}` }}</p>
		</div>

		<!-- 적립금내역 -->
		<p
			v-if="!paginator || paginator.total < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>적립/사용 내역이 없습니다
		</p>

		<template v-else>
			<!-- (D) 'text_point' 영역에 지급 적립금에는 'mm_text-variable' 클래스를 추가합니다. -->
			<div class="m_mybenefit-point">
				<ul>
					<li
						v-for="pointHistory, index in paginator.data"
						:key="index"
					>
						<component
							:is="pointHistory.order_id ? 'mm-link' : 'a'"
							:href="pointHistory.order_id ? 'javascript:void(0)' : null"
							:to="pointHistory.order_id ? { name: 'MyOrderDetail', params: { id: pointHistory.order_id } } : ''"
						>
							<h6 class="mm_strapline">
								<b>{{ pointHistory.description }}</b>
							</h6>
							<p
								v-if="pointHistory.order_id"
								class="text_order"
							>
								주문번호: {{ pointHistory.order_id }}
							</p>
							<template v-if="pointHistory.is_earned">
								<p>적립금 지급일: {{ date(pointHistory.created_at, 'YYYY.MM.DD') }}</p>
								<p>유효일자: {{ date(pointHistory.expire_at || '', 'YYYY.MM.DD') }}</p>
								<p class="text_point mm_text-variable">
									+ {{ number(pointHistory.point_amount) }}
								</p>
							</template>
							<template v-else>
								<p>적립금 차감일: {{ date(pointHistory.created_at, 'YYYY.MM.DD') }}</p>
								<p class="text_point">
									- {{ number(pointHistory.point_amount) }}
								</p>
							</template>
						</component>
					</li>
				</ul>
			</div>

			<pagination
				v-if="paginator"
				v-bind="{
					currentPage: paginator.current_page,
					itemsPerPage: paginator.per_page,
					totalCount: paginator.total
				}"
				@move:page="fetch"
			></pagination>

			<!-- 유의사항 -->
			<div class="mm_note">
				<dropdown
					:is-active="true"
					icon-class="T=box"
				>
					<template #button>
						<i class="ico_info"></i><b>적립금 유의사항</b>
					</template>
					<template #content>
						<ul>
							<li>적립금은 주문하실 때 현금처럼 이용 가능하며 다른 결제 수단과 함께 사용하실 수 있습니다.</li>
							<li>적립금은 현금으로 환불되지 않습니다.</li>
							<li>적립금은 <strong>1000원 이상 보유 시 가능</strong>합니다. 단, <strong>최종결제금액 대비 최대 5% 사용 가능</strong>합니다. (할인 적용 후 최종 구매가 기준)</li>
							<li>적립금은 구매한 상품의 주문 상태가 <strong>구매 확정 단계로 변경 시 지급</strong>되며, 취소 / 반품 시 재적립이 가능합니다.</li>
							<li>적립금은 지급일 기준으로 <strong>00개월 후 소멸</strong>됩니다.</li>
							<li>배송 완료 후 구매확정 상태로 자동 변경된 상품의 적립금은 익일 4시에 지급됩니다.</li>
						</ul>
					</template>
				</dropdown>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { ref, watch } from 'vue';
	import monsDate from '$/utils/date';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useMyShopping } from '$/composables/useMyShopping';
	import Dropdown from '@/component/Dropdown.vue';
	import Pagination from '@/component/Pagination.vue';

	const { number, date } = useFormatter();

	const { getPointHistories } = useMyShopping();

	const paginator = ref<Paginator<PointHistory>>();
	const totalPoints = ref<number>(0);

	const currentDate = monsDate();
	const monthTabs = [
		{ value: 1, label: '1개월', from: currentDate.subtract(1, 'month').format('YYYY.MM.DD'), to: currentDate.format('YYYY.MM.DD') },
		{ value: 3, label: '3개월', from: currentDate.subtract(3, 'month').format('YYYY.MM.DD'), to: currentDate.format('YYYY.MM.DD') },
		{ value: 6, label: '6개월', from: currentDate.subtract(6, 'month').format('YYYY.MM.DD'), to: currentDate.format('YYYY.MM.DD') },
	];
	const targetMonth = ref(monthTabs[0]);

	async function fetch(page: number = 1) {
		try {
			const histories = await getPointHistories(targetMonth.value.from, targetMonth.value.to, page);
			paginator.value = histories.paginator;
			totalPoints.value = histories.total_point_balance;
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	watch(targetMonth, async (newMonth) => {
		if (!newMonth) {
			return;
		}
		await fetch();
	}, {
		immediate: true
	});
</script>