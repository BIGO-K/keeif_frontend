<template>
	<div class="m_modal-myset">
		<div class="mm_btn_box">
			<mm-link
				class="mm_btn T=primary"
				:to="{ name: 'MySetting' }"
			>
				<b>설정 변경하기</b>
			</mm-link>
			<button
				type="button"
				class="mm_btn T=line btn_logout"
			>
				<b>로그아웃</b>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineExpose<OverlayComponentExpose>({
		title: `설정`,
	});
</script>