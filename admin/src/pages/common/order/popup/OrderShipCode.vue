<template>
	<layout-popup>
		<template #title>
			<h1><b>택배사 코드표</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>CJ 대한통운</b>
										</th>
										<td><p>033005</p></td>
										<th scope="row">
											<b>한진 택배</b>
										</th>
										<td><p>033001</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>롯데 택배</b>
										</th>
										<td><p>033006</p></td>
										<th scope="row">
											<b>로젠 택배</b>
										</th>
										<td><p>033004</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>KGB 택배</b>
										</th>
										<td><p>033025</p></td>
										<th scope="row">
											<b>우체국 EMS</b>
										</th>
										<td><p>033039</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>우체국 등기</b>
										</th>
										<td><p>033008</p></td>
										<th scope="row">
											<b>우체국 택배</b>
										</th>
										<td><p>033009</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>경동 택배</b>
										</th>
										<td><p>033040</p></td>
										<th scope="row">
											<b>대신 택배</b>
										</th>
										<td><p>033042</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>일양 택배</b>
										</th>
										<td><p>033021</p></td>
										<th scope="row">
											<b>GTX 로지스</b>
										</th>
										<td><p>033049</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>천일 택배</b>
										</th>
										<td><p>033022</p></td>
										<th scope="row">
											<b>합동 택배</b>
										</th>
										<td><p>033051</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>건영 택배</b>
										</th>
										<td><p>033052</p></td>
										<th scope="row">
											<b>직접 배달(화물)</b>
										</th>
										<td><p>033053</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>편의점 택배</b>
										</th>
										<td><p>033028</p></td>
										<th scope="row">
											<b>퀵서비스</b>
										</th>
										<td><p>033054</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>DHL</b>
										</th>
										<td><p>033002</p></td>
										<th scope="row">
											<b>기타</b>
										</th>
										<td><p>033041</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>대한통운 택배</b>
										</th>
										<td><p>033003</p></td>
										<th scope="row">
											<b>FedEx</b>
										</th>
										<td><p>033033</p></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="mm_note">
							<ul>
								<li>택배사 코드표를 참조하여 배송 일괄 처리 시 엑셀에 택배사 코드를 입력하면 택배사를 지정할 수 있습니다.</li>
								<li>택배사 코드표는 맨 앞의 ‘0’을 포함하여 6자리이며 ‘0’을 제거한 5자리도 동일한 코드로 인식됩니다.</li>
							</ul>
						</div>
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