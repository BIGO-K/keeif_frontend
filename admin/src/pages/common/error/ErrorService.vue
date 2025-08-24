<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- (D) 에러페이지는 html 요소에 'L=error' 클래스를 추가합니다. -->
				<div class="m_error">
					<article>
						<i class="image_error T=xl"><img src="/public/images/common/error_service.svg" alt="서비스 점검 안내"></i>
						<h1><b>서비스 점검 안내</b></h1>
						<p>보다 나은 서비스를 위해 서버 점검 중입니다<br>점검 완료 후 다시 방문해주세요</p>
						<p class="text_period">
							2020년 6월 15일 월요일 <strong>14:00~21:00 (7시간)</strong>
						</p>
					</article>
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>