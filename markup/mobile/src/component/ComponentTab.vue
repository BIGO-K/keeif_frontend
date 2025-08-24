<template>
	<div
		class="mm_tab_menu"
		:class="prop.class"
	>
		<ul class="mm_flex T=equal">
			<li
				v-for="(item, index) in prop.tabItems"
				:key="item.tab"
			>
				<a
					class="btn_tab"
					:class="{ 'S=tab-on': index === tabIndex }"
					:href="`#${item.id}`"
					@click.prevent="tabIndex = index"
					v-html="item.isTabHTML ? item.tab : `<b>${item.tab}</b>`"
				></a>
			</li>
		</ul>
	</div>

	<component
		:is="tabComponent"
		v-if="!prop.isKeep"
	></component>
	<keep-alive v-else>
		<component :is="tabComponent"></component>
	</keep-alive>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref, computed } from 'vue';

	interface TabProp {
		/** @prop { boolean } `default: true` */
		isKeep?: boolean;
		/** @prop { string | Record<string, boolean> | (string | Record<string, boolean>)[] } `default: ''` */
		class?: string | Record<string, boolean> | (string | Record<string, boolean>)[];
		tabItems?: {
			id: string;
			tab: string;
			isTabHTML?: boolean;
			component: ReturnType<typeof defineAsyncComponent>;
		}[];
	}

	const prop = withDefaults(defineProps<TabProp>(),
		{
			isKeep: true,
			class: '',
			tabItems: () => [],
		}
	);
	const tabIndex = ref<number>(0);
	const tabComponent = computed(() => prop.tabItems[tabIndex.value].component);
</script>