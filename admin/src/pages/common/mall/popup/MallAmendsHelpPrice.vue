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
						<h5><b>최대 보상 가능 금액 도움말</b></h5>
						<section>
							<h6><b>1. 최대 보상 가능 금액</b></h6>
							<p>고객이 신청할 수 있는 배송지연/품절취소 보상에 대하여 건당 최대로 지급이 가능한 보상 금액을 설정합니다.<br><span>예) 100만원 상품의 배송지연으로 10%의 보상을 받을 수 있을 때 고객에게 10만원이 보상이 아닌 설정된 최대 보상 가능 금액으로 보상 지급</span></p>
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