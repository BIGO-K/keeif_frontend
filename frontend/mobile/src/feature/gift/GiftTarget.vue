<template>
	<div class="m_overlay-gift-target">
		<div class="mm_gift-item">
			<figure>
				<lazyload
					class="mm_bg-cover image_gift"
					:src="giveaway.image_url"
				></lazyload>
				<figcaption>
					<p class="text_name">
						{{ giveaway.name }}
					</p>
					<p class="text_condition">
						{{ giveaway.condition_label }}
					</p>
					<p class="text_date">
						{{ date((giveaway.start_at || '').toString(), 'YYYY.MM.DD') }} ~
						{{ date((giveaway.end_at || '').toString(), 'YYYY.MM.DD') }}
					</p>
				</figcaption>
			</figure>
		</div>
		<table v-if="paginator.total > 0">
			<colgroup>
				<col style="width:74px;">
				<col style="width:32%;">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th scope="col">
						<b>상품</b>
					</th>
					<th scope="col">
						<b>브랜드명</b>
					</th>
					<th scope="col">
						<b>상품명</b>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="goods in paginator.data"
					:key="goods.id"
				>
					<td>
						<lazyload
							class="mm_bg-cover image_product"
							:src="goods.thumbnail_url"
						></lazyload>
					</td>
					<td><b>{{ goods.brand_name }}</b></td>
					<td>
						<p class="text_product">
							{{ goods.name }}
						</p>
					</td>
				</tr>
			</tbody>
		</table>

		<pagination
			:current-page="paginator.current_page"
			:items-per-page="paginator.per_page"
			:total-count="paginator.total"
			@move:page="movePage"
		></pagination>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGiveaway } from '$/composables/useGiveaway';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';

	defineExpose<OverlayComponentExpose>({
		title: `사은품 지급 대상`,
	});
	const props = defineProps<{
		giveaway: Giveaway,
		giveawayGoodsPaginator: GiveawayTargetGoodsPaginator
	}>();

	const { date } = useFormatter();
	const { getTargetGoodsPaginator } = useGiveaway();
	const paginator = ref(props.giveawayGoodsPaginator);
	async function movePage(toPage: number) {
		paginator.value = await getTargetGoodsPaginator(props.giveaway.id, toPage, 5);
	}
</script>

<style src="./_gift.scss" lang="scss"></style>
<style lang="scss">
	@use '../../asset/scss/helper/mixin';
	@use '../../asset/scss/helper/var';

	.m_overlay-gift-target {
		padding: 32px 17px 0;
		@include mixin.font('1.3rem/1.9rem');

		.mm_gift-item {
			padding: 0;
			border: 0;

			.image_gift {
				width: 70px;
			}

			figcaption {
				margin-left: 70px;
				padding-left: 10px;

				> p {
					@include mixin.text-ellipsis(0);
				}

				.text_date {
					margin-top: 6px;
				}
			}
		}

		table {
			margin-top: 27px;
			border-top: 1px solid #d5d5d5;

			th {
				padding: 8px 11px;
				border-bottom: 1px solid #d5d5d5;
				background-color: #fafafa;
			}

			td {
				padding: 11px;
				border-bottom: 1px solid #e6e6e6;
				@include mixin.font(#4a4a4a left);

				> .image_product {
					display: block;

					&::after {
						padding-top: var.$prod_height_base;
						content: '';
					}
				}

				> b {
					margin-left: 2px;
					color: var(--color_text_base);
				}

				.text_product {
					@include mixin.text-ellipsis(3);
					margin-left: 4px;

					.text_foreword {
						margin-right: 3px;
					}
				}

				// 브랜드
				// figure {
				// 	@include mixin.flex-container();
				// 	@include mixin.prefix(align-items, center, webkit);

				// 	.image_brand {
				// 		position: relative;
				// 		padding: 17px 56px 17px 0;
				// 		width: 150px;
				// 		height: 72px;
				// 		background-origin: content-box;
				// 		background-position-x: left;
				// 		background-color: transparent;

				// 		$format: (landscape-4x, 10px 40px 10px 0), (landscape-3x, 15px 40px 15px 0), (landscape-2x, 23px 40px 23px 0), (portrait-3x, 15px 10px 15px 0), (portrait-2x, 15px 10px 15px 0), (portrait, 12px 10px 12px 0);
				// 		@each $ratio, $padding in $format {
				// 			&#{function.escape('.S=image-#{$ratio}')} {
				// 				padding: $padding;
				// 			}
				// 		}

				// 		&#{function.escape('.S=error')}::before {
				// 			position: absolute;
				// 			top: 50%;
				// 			left: 0;
				// 			text-align: left;
				// 			content: attr(title);
				// 			@include mixin.transform(translateY(-50%));
				// 		}
				// 	}

				// 	figcaption {
				// 		@include mixin.prefix(flex, 1, webkit);
				// 		padding-left: 41px;
				// 	}
				// }
			}
		}

		.mm_pagination {
			margin-top:22px;
		}
	}
</style>