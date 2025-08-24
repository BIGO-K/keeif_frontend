<template>
	<div
		class="mm_tab_menu"
		:class="prop.class"
	>
		<ul class="mm_flex T=equal">
			<li
				v-for="(_item, _i) in tabItems"
				:key="_item.name"
			>
				<mm-link
					class="btn_tab"
					active-class="S=tab-on"
					:to="{ name: _item.name }"
					replace
				>
					<b>{{ _item.meta?.tab ?? '' }}<span v-if="prop.aggregates">{{ prop.aggregates[_i] }}</span></b>
				</mm-link>
			</li>
		</ul>
	</div>

	<router-view v-if="!prop.isKeep"></router-view>
	<router-view
		v-else
		v-slot="{ Component }"
	>
		<keep-alive :max="4">
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
		aggregates?: number[];
	}

	const prop = withDefaults(defineProps<TabProp>(),
		{
			isKeep: true,
			class: '',
			aggregates: undefined,
		},
	);

	const route = useRoute();
	const tabItems = route.matched.at(-2)?.children;
</script>