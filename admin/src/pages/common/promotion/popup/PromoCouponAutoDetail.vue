<template>
	<layout-popup>
		<template #title>
			<h1><b>자동발행쿠폰A</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 자동발행쿠폰 상세 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>사용 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<p>사용</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>고객 사용 가능 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<!-- <p>사용 가능</p> -->
										<p>사용 불가</p>
										<br>
										<p>사유: 오발급</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>할인율/할인금액<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<p>15%</p>
									</td>
									<!-- <td><p><span class="text_price">60,000</span></p></td> -->
								</tr>
								<tr>
									<th scope="row">
										<b>최대 할인 금액</b>
									</th>
									<td colspan="3">
										<p><span class="text_price">0</span></p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>최저 금액 조건</b>
									</th>
									<td><p><span class="text_price">1,500</span></p></td>
									<th scope="row">
										<b>최저 마진 조건</b>
									</th>
									<td><p>10%</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>디바이스 설정<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>PC, M WEB, M APP</p></td>
									<th scope="row">
										<b>유효 기간<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>발행일로부터 30일</p></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 자동발행쿠폰 상세 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>