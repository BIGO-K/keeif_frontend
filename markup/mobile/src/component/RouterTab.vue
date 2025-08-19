<template>
	<div
		class="mm_tab_menu"
		:class="prop.class"
	>
		<ul class="mm_flex T=equal">
			<li
				v-for="item in tabItems"
				:key="item.name"
			>
				<mm-link
					class="btn_tab"
					:class="{ 'S=tab-on': item.name === route.name }"
					:to="{ name: item.name }"
					replace
				>
					<b>{{ item.meta?.tab ?? '' }}</b>
				</mm-link>
			</li>
		</ul>
	</div>

	<router-view v-if="!prop.isKeep"></router-view>
	<router-view
		v-else
		v-slot="{ Component }"
	>
		<keep-alive>
			<component :is="Component"></component>
		</keep-alive>
	</router-view>
</template>

<script setup lang="ts">
	import { useRoute } from 'vue-router';

	interface TabProp {
		/** @prop { boolean } `default: true` */
		isKeep?: boolean;
		/** @prop { string | Record<string, boolean> | (string | Record<string, boolean>)[] } `default: ''` */
		class?: string | Record<string, boolean> | (string | Record<string, boolean>)[];
	}

	const prop = withDefaults(defineProps<TabProp>(),
		{
			isKeep: true,
			class: '',
		}
	);

	const route = useRoute();
	const tabItems = route.matched.at(-2)?.children;
</script>