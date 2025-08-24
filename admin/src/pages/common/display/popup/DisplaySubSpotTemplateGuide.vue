<template>
	<layout-popup>
		<template #title>
			<h1><b>스팟성 테마관 템플릿</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-template-guide">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<section>
						<h4><strong>템플릿 A</strong><b>이미지 및 텍스트 노출</b></h4>
						<div class="m...guide-image">
							<p>이미지영역(필수)</p>
							<div class="m...guide-text">
								<p>메인문구(선택)</p>
								<p>서브 문구(선택)</p>
							</div>
						</div>
					</section>
					<section>
						<h4><strong>템플릿 B</strong><b>이미지 및 텍스트, 상품 세로 리스팅 노출</b></h4>
						<div class="m...guide-image">
							<p>이미지영역(필수)</p>
							<div class="m...guide-text">
								<p>메인문구(선택)</p>
								<p>서브 문구(선택)</p>
							</div>
						</div>
						<div class="m...guide-prodlist">
							<ul>
								<li>상품(필수)</li>
								<li>상품(필수)</li>
							</ul>
						</div>
					</section>
					<section>
						<h4><strong>템플릿 C</strong><b>이미지 및 텍스트, 상품 좌우 스크롤 노출</b></h4>
						<div class="m...guide-image">
							<p>이미지영역(필수)</p>
							<div class="m...guide-text">
								<p>메인문구(선택)</p>
								<p>서브 문구(선택)</p>
							</div>
						</div>
						<div class="m...guide-prodlist T=scroll">
							<ul>
								<li>상품(필수)</li>
								<li>상품(필수)</li>
								<li>상품(필수)</li>
								<li>상품(필수)</li>
							</ul>
						</div>
					</section>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>