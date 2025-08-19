<template>
	<layout-popup>
		<template #title>
			<h1><b>래플 기간</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-raffle-period">
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
										<b>응모 기간</b>
									</th>
									<td colspan="3">
										<p>2022-02-22 12:33:31 ~ 2022-11-12 22:33:32</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>발표 일시</b>
									</th>
									<td colspan="3">
										<p>2022-11-12 22:33:32</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>구매 기간</b>
									</th>
									<td colspan="3">
										<p>2022-02-22 12:33:31 ~ 2022-11-12 22:33:32</p>
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
