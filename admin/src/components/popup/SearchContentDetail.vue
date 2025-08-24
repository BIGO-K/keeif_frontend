<template>
	<layout-popup>
		<template #title>
			<h1><b>내용 상세보기</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-content-detail">
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
										<b>내용</b>
									</th>
									<td colspan="3">
										<div class="text_contet">
											<p>
												일이삼사오육칠팔구십<br>
												노출되기 너무 긴 내용은<br>
												내용 상세보기 팝업으로<br>
												노출합니다.
											</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>