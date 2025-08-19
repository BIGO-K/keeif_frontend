<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- (D) 에러페이지는 html 요소에 'L=error' 클래스를 추가합니다. -->
				<div class="m_error">
					<article>
						<i class="image_error T=2xl"><img src="/public/images/common/error.svg" alt="오류"></i>
						<h1><b>불편을 드려 죄송합니다</b></h1>
						<p>찾고 계시는 페이지가 삭제 또는 변경되어<br>일시적인 오류로 표현할 수 없습니다</p>

						<!-- 최하단버튼 -->
						<div class="mm_foot">
							<div class="mm_btn_box">
								<div class="mm_inline">
									<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>메인으로</b></a>
									<button type="button" class="mm_btn T=xl T=tertiary">
										<b>이전으로</b>
									</button>
								</div>
							</div>
						</div>
						<!-- // 최하단버튼 -->
					</article>
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>