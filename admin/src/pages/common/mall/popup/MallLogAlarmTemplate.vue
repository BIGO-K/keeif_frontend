<template>
	<layout-popup>
		<template #title>
			<h1><b>발송된 알림톡 템플릿</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>템플릿명</b>
									</th>
									<td colspan="3">
										<p>주문완료_결제완료_복수상품</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>내용</b>
									</th>
									<td colspan="3">
										<div class="text_content">
											<p>
												[엔스테이션] 고객님 안녕하세요.<br>
												먼저 엔스테이션 제품을 구매해주셔서 감사합니다.<br>
												요청하신 내용에 대하여 확인 후 전달드리겠습니다.
											</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>