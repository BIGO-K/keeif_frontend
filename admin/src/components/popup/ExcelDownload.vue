<template>
	<layout-popup>
		<template #title>
			<h1><b>엑셀 다운로드</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-excel">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 엑셀 파일 목록 -->
					<div class="m_popup-excel-list">
						<ul>
							<li><a class="mm_btn T=line T=xload btn_excel" href="#" download=""><b>1번 엑셀 파일 다운로드</b><i class="ico_download"></i></a></li>
							<li><a class="mm_btn T=line T=xload btn_excel" href="#" download=""><b>2번 엑셀 파일 다운로드</b><i class="ico_download"></i></a></li>
							<li><a class="mm_btn T=line T=xload btn_excel" href="#" download=""><b>3번 엑셀 파일 다운로드</b><i class="ico_download"></i></a></li>
						</ul>
					</div>
					<!-- // 엑셀 파일 목록 -->

					<!-- 유의사항 -->
					<div class="mm_note">
						<ul>
							<li>목록 노출 항목 3,000건 당 1개의 엑셀 파일이 생성됩니다.<br>(예시: 목록 노출 항목이 3,020건일 경우 2개의 엑셀 파일 생성)</li>
							<li>생성된 엑셀 파일별로 다운로드 버튼이 노출됩니다.</li>
							<li><strong>고객 개인정보가 포함된 문서</strong>로 부정한 목적으로 이용 또는 불법 유출시 법적 처벌을 받게 되며, <strong>다운로드 클릭 시 이에 대한 동의로 간주합니다.</strong></li>
						</ul>
					</div>
					<!-- // 유의사항 -->
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