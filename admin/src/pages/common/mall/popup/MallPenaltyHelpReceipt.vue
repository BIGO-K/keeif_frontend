<template>
	<layout-popup>
		<template #title>
			<h1><b>도움말</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-help">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 유의사항 -->
					<div class="mm_note">
						<ul>
							<li>패널티 미사용시 <strong>패널티 비율을 0으로 입력</strong>합니다.</li>
							<li>패널티 일수는 영업일 기준으로 적용됩니다.(주말, 공휴일 제외)</li>
						</ul>
					</div>
					<!-- // 유의사항 -->

					<article>
						<h5><b>주문 미접수 패널티 도움말</b></h5>
						<section>
							<h6><b>1. 주문 미접수 패널티 (18시 이전 주문건)</b></h6>
							<p>18시 이전 주문 건이 결제완료일부터 3일 내로 <strong>배송 준비중</strong> 상태로 변경되지 않을 시 셀러에게 적용되는 패널티입니다.<br><span>예) 2000년 1월 2일 10시 주문 결제완료 &#62; 2000년 1월 5일 00시에 패널티 적용</span></p>
						</section>
						<section>
							<h6><b>2. 주문 미접수 패널티 (18시 이후 주문건)</b></h6>
							<p>18시 이후 주문 건이 결제완료일부터 4일 내로 <strong>배송 준비중</strong> 상태로 변경되지 않을 시 셀러에게 적용되는 패널티입니다.<br><span>예) 2000년 1월 2일 20시 주문 결제완료 &#62; 2000년 1월 6일 00시에 패널티 적용</span></p>
						</section>
						<section>
							<h6><b>3. 패널티 적용 시</b></h6>
							<p>상품은 품절 상태로 자동 변경되고 주문은 자동 취소 처리됩니다.(취소 요청 &#62; 취소완료 &#62; 환불 진행)</p>
							<p>추가로 상품이 품절 상태로 변경됨에 따라 <strong>품절 취소 패널티</strong>가 적용됩니다.</p>
							<p>패널티는 정산 페이지에 반영되며 정산 예정금액에서 차감됩니다.</p>
						</section>
					</article>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>