<template>
	<layout-popup>
		<template #title>
			<h1><b>쿠폰 + 추가할인 내역</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-discount">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>주문번호-순번</b>
									</th>
									<td colspan="3">
										<p>123456789-1</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>쿠폰 할인</b>
									</th>
									<td colspan="3">
										<p class="text_price">
											5000
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>심야 할인</b>
									</th>
									<td colspan="3">
										<p class="text_price">
											100
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>즉시 할인</b>
									</th>
									<td colspan="3">
										<p class="text_price">
											400
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- // 본문 내용 -->

				<!-- 현재 페이지 스크립트 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>