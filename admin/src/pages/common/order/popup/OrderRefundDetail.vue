<template>
	<layout-popup>
		<template #title>
			<h1><b>수동 환불 완료 내역</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 주문 정보 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>주문번호</b>
									</th>
									<td><a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>202205070001</b></a></td>
									<th scope="row">
										<b>주문일시</b>
									</th>
									<td><p>2022-05-07 09:09:10</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>반품 주문번호</b>
									</th>
									<td><a href="/pro/order/detail/" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>202205070001</b></a></td>
									<th scope="row">
										<b>거래번호</b>
									</th>
									<td><p>3456789</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>환불 요청일시</b>
									</th>
									<td><p>2022-05-07 09:09:10</p></td>
									<th scope="row">
										<b>환불 실패일시</b>
									</th>
									<td><p>2022-05-07 09:09:10</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>환불 완료일시</b>
									</th>
									<td colspan="3">
										<p>2022-05-07 09:09:10</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 주문 정보 -->

					<!-- 환불 계좌 정보 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>환불 계좌 정보</b>
							</h3>
						</div>
						<!-- // 폼 상단 -->
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>예금주</b>
										</th>
										<td colspan="3">
											<p>홍길동</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>환불 계좌 정보</b>
										</th>
										<td colspan="3">
											<p>우리은행 / 1002555666666</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 환불 계좌 정보 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>