<template>
	<div class="mm_address-list-notice">
		<dawn-tag></dawn-tag>

		<ul>
			<li>배송지 등록 시 새벽 배송 가능지역 여부를 알 수 있습니다.</li>
			<li>새벽 배송이 가능한 지역일 경우 해당 뱃지가 노출됩니다.</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';
</script>