<template>
	<layout
		title="쿠폰/적립금"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<router-tab class="m_my-tab"></router-tab>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import RouterTab from '@/component/RouterTab.vue';
</script>