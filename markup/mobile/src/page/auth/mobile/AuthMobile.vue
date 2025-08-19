<template>
	<div class="m_overlay-certify">
		<h2 class="mm_title">
			<b>서비스 이용을 위해<br> <strong class="mm_text-variable">본인인증</strong>이 필요합니다</b>
		</h2>
		<div class="mm_foot">
			<div class="mm_btn_box">
				<mm-link
					class="mm_btn T=lg T=primary"
					to="http://"
				>
					<b>휴대폰 인증</b>
				</mm-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineExpose<OverlayComponentExpose>({
		title: `본인인증`,
	});
</script>