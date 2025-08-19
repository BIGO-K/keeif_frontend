<template>
	<layout-popup>
		<template #title>
			<h1><b>SMS 발송</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
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
										<b>주문번호</b>
									</th>
									<td><p>2022050511554812</p></td>
									<th scope="row">
										<b>주문자(아이디)</b>
									</th>
									<td><p>홍길동(abc_abc)</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>주문자 휴대폰 번호</b>
									</th>
									<td><p>01011112222</p></td>
									<th scope="row">
										<b>수취인 휴대폰 번호</b>
									</th>
									<td><p>01033334444</p></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>발송 표시 번호</b>
									</th>
									<td><p>1566-2671</p></td>
									<th scope="row">
										<b>수신 번호</b>
									</th>
									<td><p>01033335555</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>내용</b>
									</th>
									<td colspan="3">
										<div class="text_content">
											<p>
												고객님 안녕하세요.<br>
												먼제 제품을 구매해주셔서 감사합니다.<br>
												요청하신 내용에 대하여 확인 후 전달드리겠습니다.
											</p>
										</div>
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