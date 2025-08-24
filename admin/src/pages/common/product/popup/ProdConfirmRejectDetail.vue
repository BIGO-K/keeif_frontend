<template>
	<layout-popup>
		<template #title>
			<h1><b>반려 사유</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-reject">
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
										<b>반려 사유</b>
									</th>
									<td colspan="3">
										<div class="text_content">
											<p>
												중복된 상품입니다.
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