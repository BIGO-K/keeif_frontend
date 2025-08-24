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
						<h5><b>품절 패널티 도움말</b></h5>
						<section>
							<h6><b>1. 품절 패널티</b></h6>
							<p>결제 완료일부터 48시간이 경과한 후 셀러가 주문 상품을 품절취소 처리 하였을 때 셀러에게 적용되는 패널티입니다.<br><span>예) 2000년 1월 2일 10시 주문 결제완료 &#62; 2000년 1월 4일 10시 이후 주문 상품 품절취소 처리시 패널티 적용</span></p>
						</section>
						<section>
							<h6><b>2. 패널티 적용 시</b></h6>
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