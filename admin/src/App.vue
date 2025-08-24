<template>
	<!-- 스킵 -->
	<nav class="mm_skip">
		<ul>
			<li><a href="#mm_body" data-href="anchor">본문바로가기</a></li>
		</ul>
	</nav>

	<div class="mm_view">
		<router-view></router-view>
	</div>
</template>

<script setup lang="ts">
	window.env_path = import.meta.env.MM_BASE_PATH;// markup 빌드 후 링크 이동 시 href prefix로 최상위 경로 설정
</script>
