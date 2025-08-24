<template>
	<layout-popup>
		<template #title>
			<h1><b>이메일 템플릿 상세보기</b></h1>
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
										<b>템플릿명</b>
									</th>
									<td colspan="3">
										<p>할인 행사용 SMS 템플릿 A</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>내용</b>
									</th>
									<td colspan="3">
										<p>안녕하세요.</p>
										<p>2023년 2월 한달 간 새해 이벤트를 진행합니다.</p>
										<p>많은 관심 부탁드립니다.</p>
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