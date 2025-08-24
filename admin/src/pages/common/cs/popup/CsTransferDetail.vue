<template>
	<layout-popup>
		<template #title>
			<h1><b>이관 사유</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 폼 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>문의 제목</b>
									</th>
									<td colspan="3">
										<p>교환반품 문의입니다.</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>이관 여부</b>
									</th>
									<td><p>관리자A(이관)</p></td>
									<th scope="row">
										<b>이관일자</b>
									</th>
									<td><p>2022-03-24</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>이관 사유</b>
									</th>
									<td colspan="3">
										<div class="text_content">
											<p>
												교환 문의인데<br>
												고객이 환불을 요청하여<br>
												이관을 하였습니다.
											</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 폼 영역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>