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
						<h5><b>가송장 패널티 도움말</b></h5>
						<section>
							<h6><b>1. 가송장 패널티</b></h6>
							<p>운송장이 등록되어 <strong>배송중</strong> 상태로 변경된 후 3일 동안 배송 흐름이 없을 경우 셀러에게 적용되는 패널티입니다.<br><span>예) 2000년 1월 2일 운송장 등록 후 배송중 상태로 변경 &#62; 2000년 1월 5일 00시 기준으로 상품의 배송 흐름이 없을 경우 패널티 적용</span></p>
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