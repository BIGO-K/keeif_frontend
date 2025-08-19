<template>
	<div class="m_mybenefit">
		<div class="m_mybenefit-head">
			<h3><b>내가 보유한 적립금</b><strong class="mm_text-variable">100,200<sub>원</sub></strong></h3>
		</div>
		<!-- 기간조회 -->
		<div class="m_mybenefit-period">
			<!-- (D) 현재 조회기간에 해당하는 mm_btn에 'T=lightest'클래스를 지우고, 'T=dark'클래스와 '선택됨' 타이틀을 추가합니다 -->
			<div class="mm_btn_box">
				<div class="mm_inline">
					<button
						type="button"
						class="mm_btn T=sm T=line T=dark"
						title="선택됨"
					>
						<b>1개월</b>
					</button>
					<button
						type="button"
						class="mm_btn T=sm T=line T=lightest"
					>
						<b>3개월</b>
					</button>
					<button
						type="button"
						class="mm_btn T=sm T=line T=lightest"
					>
						<b>6개월</b>
					</button>
				</div>
			</div>
			<p>조회기간: 2022.05.19 ~ 2022.06.19</p>
		</div>

		<!-- 적립금내역 -->
		<p
			v-if="items.length < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>적립/사용 내역이 없습니다
		</p>

		<template v-else>
			<!-- (D) 'text_point' 영역에 지급 적립금에는 'mm_text-variable' 클래스를 추가합니다. -->
			<div class="m_mybenefit-point">
				<ul>
					<li>
						<mm-link :to="{ name: 'MyOrderDetail', params: { id: 123 } }">
							<h6 class="mm_strapline">
								<b>구매평 작성 적립금</b>
							</h6>
							<p class="text_order">
								주문번호: 2005141142151234562
							</p>
							<p>적립금 지급일: 2021.05.26</p>
							<p>유효일자: 2021.12.31</p>
							<p class="text_point mm_text-variable">
								+ 500
							</p>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: 'MyOrderDetail', params: { id: 123 } }">
							<h6 class="mm_strapline">
								<b>스페셜 적립금(하나멤버스)</b>
							</h6>
							<p class="text_order">
								주문번호: 2005141142151234562
							</p>
							<p>적립금 지급일: 2021.05.26</p>
							<p>유효일자: 2021.12.31</p>
							<p class="text_point mm_text-variable">
								+ 2,000
							</p>
						</mm-link>
					</li>
					<li>
						<a>
							<h6 class="mm_strapline"><b>즉시 페이백 적립금 취소 환수</b></h6>
							<p>적립금 차감일: 2021.05.26</p>
							<p class="text_point">- 1,000</p>
						</a>
					</li>
				</ul>
			</div>

			<pagination></pagination>

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
	import Dropdown from '@/component/Dropdown.vue';
	import Pagination from '@/component/Pagination.vue';

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>