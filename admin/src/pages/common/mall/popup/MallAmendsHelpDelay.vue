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
							<li>고객 보상 미사용시 <strong>보상 비율을 0으로 입력</strong>합니다.</li>
							<li>고객 보상에 적용되는 일수는 영업일 기준으로 적용됩니다.(주말, 공휴일 제외)</li>
						</ul>
					</div>
					<!-- // 유의사항 -->
					<article>
						<h5><b>배송지연 고객 보상 설정 도움말</b></h5>
						<section>
							<h6><b>1. 배송지연 고객 보상</b></h6>
							<p>고객 결제 이후 2일 내로 <strong>배송중</strong> 상태로 변경되지 않으면 배송지연 3일째 부터 고객에게 지급되는 보상입니다. (적립금으로 지급)<br><span>예) 2000년 1월 2일 주문결제 완료 &#62; 2000년 1월 5일 00시 이후부터 보상 신청 가능</span></p>
						</section>
						<section>
							<h6><b>2. 고객 보상 신청 시</b></h6>
							<p>보상 신청을 한 고객에게만 보상이 진행되며, 보상 신청은 상품의 주문 상태가 배송중으로 변경된 후 가능합니다. (결제완료 상태에서 배송중 상태로 변경되는 기간을 계산하여 보상률 책정)</p>
							<p>고객 보상 신청 후 관리자 &#62; 고객센터/게시판관리 &#62; 배송지연 신고 관리 메뉴에서 보상승인을 진행하여야 고객에게 보상이 지급됩니다.</p>
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