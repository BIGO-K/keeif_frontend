<template>
	<layout-popup>
		<template #title>
			<h1><b>적용 제휴사 보기</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 적용 제휴사 목록 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>적용 제휴사</b>
									</th>
									<td colspan="3">
										<p>패션플러스, G마켓, 11번가, 쿠팡</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 적용 제휴사 목록 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>
