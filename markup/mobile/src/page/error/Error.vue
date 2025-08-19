<template>
	<div
		class="m_error"
		:class="{ 'T=renewal': $route.name === 'ErrorRenewal' }"
	>
		<article class="m_error-inner">
			<router-view></router-view>

			<div
				v-if="$route.name !== 'ErrorRenewal' && $route.name !== 'ErrorMaintenance'"
				class="mm_btn_box"
			>
				<div class="mm_flex T=equal">
					<mm-link
						class="mm_btn T=line T=light"
						href="#"
						:to="{ name: 'Main' }"
					>
						<b>메인으로</b>
					</mm-link>
					<a
						class="mm_btn T=line T=primary"
						href="#"
						@click.prevent="$router.go(-1)"
					>
						<b>이전으로</b>
					</a>
				</div>
			</div>
		</article>
	</div>
</template>

<script setup lang="ts">

</script>