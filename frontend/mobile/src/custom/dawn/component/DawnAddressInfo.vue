<template>
	<p class="text_dawn">
		<strong>새벽배송정보</strong>
		<span>{{ entranceDescription }}</span>
	</p>
</template>

<script setup lang="ts">
	defineProps<{
		entranceDescription?: string
	}>();
</script>