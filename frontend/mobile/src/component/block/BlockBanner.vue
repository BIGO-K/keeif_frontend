<template>
	<mm-link :to="banner.link || ''">
		<figure>
			<i
				v-if="useCircleOutline"
				class="image_circle"
				:style="banner.icon ? `border-color: ${banner.icon.background_color};` : ''"
			></i>
			<lazyload
				:class="'mui_bg-cover image_banner S=loaded ' + (bannerImageClass || '')"
				:src="banner.image_url"
				:data-src="`${banner.image_url}`"
			>
			</lazyload>
			<b
				v-if="banner.icon"
				:style="`background-color: ${banner.icon.background_color};color: ${banner.icon.font_color}`"
			>{{ banner.icon.name }}</b>
			<figcaption :class="banner.text_color === '#000000' ? 'T=text-black' : ''">
				<p
					v-if="banner.is_use_text && banner.text_1"
					class="text_banner1"
				>
					{{ banner.text_1 }}
				</p>
				<template v-if="dateTextPosition === 2">
					<p
						v-if="showDisplayPeriod && banner.display_start_at && banner.display_end_at"
						class="text_date"
					>
						{{ formatDate(banner.display_start_at, dateFormatString) }} ~
						{{ formatDate(banner.display_end_at, dateFormatString) }}
					</p>
					<p
						v-if="showCreatedAt && banner.created_at"
						class="text_date"
					>
						{{ formatDate(banner.created_at, dateFormatString) }}
					</p>
				</template>
				<p
					v-if="banner.is_use_text && banner.text_2"
					class="text_banner2"
				>
					{{ banner.text_2 }}
				</p>
				<template v-if="!dateTextPosition || dateTextPosition === 3">
					<p
						v-if="showDisplayPeriod && banner.display_start_at && banner.display_end_at"
						class="text_date"
					>
						{{ formatDate(banner.display_start_at, dateFormatString) }} ~
						{{ formatDate(banner.display_end_at, dateFormatString) }}
					</p>
					<p
						v-if="showCreatedAt && banner.created_at"
						class="text_date"
					>
						{{ formatDate(banner.created_at, dateFormatString) }}
					</p>
				</template>
				<p
					v-if="banner.is_use_text && banner.text_3"
					class="text_banner3"
				>
					{{ banner.text_3 }}
				</p>
				<template v-if="dateTextPosition === 4">
					<p
						v-if="showDisplayPeriod && banner.display_start_at && banner.display_end_at"
						class="text_date"
					>
						{{ formatDate(banner.display_start_at, dateFormatString) }} ~
						{{ formatDate(banner.display_end_at, dateFormatString) }}
					</p>
					<p
						v-if="showCreatedAt && banner.created_at"
						class="text_date"
					>
						{{ formatDate(banner.created_at, dateFormatString) }}
					</p>
				</template>
				<p
					v-if="banner.is_use_text && banner.text_4"
					class="text_banner4"
				>
					{{ banner.text_4 }}
				</p>
				<slot name="text-detail"></slot>
				<!-- (D) 등록된 text_banner가 없을 때 노출합니다. -->
				<p
					v-if="!banner.text_1 && !banner.text_2 && !banner.text_3 && !banner.text_4"
					class="text_alt"
				>
					{{ banner.alt }}
				</p>
			</figcaption>
		</figure>
	</mm-link>
</template>
<script setup lang="ts">
	import { computed } from 'vue';
	import { useFormatter } from '$/composables/useFormatter';


	const props = defineProps<{
		banner: BlockBanner
		bannerImageClass?: string
		useLinkIcon?: boolean
		showDisplayPeriod?: boolean
		showCreatedAt?: boolean
		dateFormat?: string
		dateTextPosition?: number
		useCircleOutline?: boolean
	}>();

	const { date: formatDate } = useFormatter();

	const dateFormatString = computed<string>(() => {
		return props.dateFormat || 'YYYY.MM.DD';
	});
</script>