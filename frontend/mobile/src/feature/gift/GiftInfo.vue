<template>
	<div class="mm_inner m_overlay-gift">
		<div class="mm_note">
			<ul>
				<li>사은품은 회원 대상으로 지급됩니다.</li>
			</ul>
		</div>
		<ul class="mm_gift-list">
			<li
				v-for="gift in gifts"
				:key="gift.id"
			>
				<div class="mm_gift-item">
					<figure>
						<lazyload
							class="mm_bg-cover image_gift"
							is-force
							:src="gift.image_url"
						></lazyload>
						<figcaption>
							<p class="text_name">
								{{ gift.name }}
							</p>
							<p class="text_condition">
								지급조건: {{ gift.condition_label }}
							</p>
							<p class="text_date">
								지급기간: {{ date(gift.start_at, 'YYYY.MM.DD') }} ~ {{ date(gift.end_at, 'YYYY.MM.DD') }}
							</p>
						</figcaption>
					</figure>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { useFormatter } from '$/composables/useFormatter';
	import Lazyload from '@/component/Lazyload.vue';

	defineProps<{
		gifts: Giveaway[]
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `사은품 정보`,
	});

	const { date } = useFormatter();
</script>

<style src="./_gift.scss" lang="scss"></style>
<style lang="scss">
	@use '../../asset/scss/helper/mixin';

	.m_overlay-gift {
		padding-top: 10px;

		.mm_note {
			padding-left: 3px;
		}

		.mm_gift-list {
			margin-top: 4px;
		}

		.mm_gift-item {
			figcaption {
				> p {
					@include mixin.text-ellipsis(0);
				}
			}
		}
	}
</style>
