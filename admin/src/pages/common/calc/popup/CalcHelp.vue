
<template>
	<layout-popup>
		<template #title>
			<h1><b>도움말</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-help">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<article>
						<h5><b>판매수수료 및 각 용어 안내</b></h5>
						<section>
							<h6><b>1. 판매수수료란?</b></h6>
							<p><span>판매 금액 x 계약된 수수료율 - 본사 부담 할인 금액 - 사용 적립금</span></p>
						</section>
						<section>
							<h6><b>2. 마진 제외 금액이란?</b></h6>
							<p><span>판매 금액 - (판매 금액 x 계약된 수수료율)</span></p>
						</section>
						<section>
							<h6><b>3. 최종 정산 금액이란?</b></h6>
							<p><span>마진 제외 금액 - 셀러 부담 할인 금액 + 배송비 합계 - 패널티 합계 - 고객 보상 내역</span></p>
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