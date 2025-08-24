<template>
	<dropdown
		class="T=order m_order-gift"
		:is-active="true"
	>
		<template #button>
			<b>사은품 정보</b>
			<i class="ico_dropdown"></i>
		</template>
		<template #content>
			<div class="mm_inner">
				<!-- 사은품 선택 1 -->
				<section
					v-for="giveawayGroup, index in giveawayGroups"
					:key="index"
				>
					<h4 class="mm_strapline">
						<b>사은품 선택<span v-if="index !== 0">(선택{{ index + 1 }})</span></b>
					</h4>
					<ul class="mm_gift-list">
						<li
							v-for="giveaway in giveawayGroup.giveaways"
							:key="giveaway.id"
						>
							<input
								v-model="selectedGiveaways[index]"
								:value="giveaway.value"
								:disabled="!giveaway.selectable"
								type="radio"
							>
							<div class="mm_gift-item">
								<i class="ico_form-radio T=circle"></i>
								<figure>
									<lazyload
										class="mm_bg-cover image_gift"

										:src="giveaway.image_url"
									></lazyload>
									<figcaption>
										<template v-if="giveaway.selectable">
											<p class="text_name">
												{{ giveaway.name }}
											</p>
											<p class="text_condition">
												{{ giveaway.condition_label }}
											</p>
										</template>
										<template v-else>
											<p class="text_note">
												이미 지급받으신 사은품입니다
											</p>
										</template>
									</figcaption>
								</figure>
								<div class="mm_btn_box">
									<div class="mm_rside">
										<a
											class="btn_gift-info"
											href="#"
											@click.prevent="overlayGiftTarget(giveaway.id)"
										>
											<b>지급대상확인</b><i class="ico_link T=xs"></i>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<input
								v-model="selectedGiveaways[index]"
								:value="{ goods_id: giveawayGroup.goods_id, giveaway_id: 0 }"
								type="radio"
							>
							<div class="mm_gift-item">
								<i class="ico_form-radio T=circle"></i>
								<p><strong>선택안함</strong>구매상품만 받을게요</p>
							</div>
						</li>
					</ul>
				</section>
			</div>
		</template>
	</dropdown>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, defineProps, ref, computed, watch } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import { useGiveaway } from '$/composables/useGiveaway';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';

	const layerContextStore = useLayerContextStore();
	const props = defineProps<{
		giveawayGroups: OrderSheetGiveawayGroup[],
		selectedItem: OrderSheetSelectedGiveaway[]
	}>();

	const emit = defineEmits<{
		'updateSelected': [value: OrderSheetSelectedGiveaway[]];
	}>();

	const { getDetail, getTargetGoodsPaginator } = useGiveaway();
	const selectedGiveaways = ref<OrderSheetSelectedGiveaway[]>(props.selectedItem);
	const giveawayGroups = computed(() => {
		return props.giveawayGroups.map(giveawayGroup => {
			return {
				goods_id: giveawayGroup.goods_id,
				giveaways: giveawayGroup.giveaways.map(giveaway => ({
					...giveaway,
					value: {
						goods_id: giveawayGroup.goods_id,
						giveaway_id: giveaway.id,
					},
					selectable: !selectedGiveaways.value.some(selected => selected.goods_id !== giveawayGroup.goods_id && selected.giveaway_id === giveaway.id),
				})),
			};
		});
	});

	watch(selectedGiveaways, (to) => {
		emit('updateSelected', to);
	}, {
		deep: true,
	});

	function overlayGiftTarget(giveawayId: number) {
		const component = defineAsyncComponent(() => import('@/feature/gift/GiftTarget.vue'));

		return layerContextStore.openOverlay(component, {
			props: async () => {
				const giveaway = await getDetail(giveawayId);
				const giveawayGoodsPaginator = await getTargetGoodsPaginator(giveawayId, 1, 5);

				return {
					giveaway,
					giveawayGoodsPaginator,
				};
			},
		});
	}
</script>

<style src="../_gift.scss" lang="scss"></style>
<style lang="scss">
	@use '../../../asset/scss/helper/mixin';

	.m_order-gift {
		section + section {
			margin-top: 24px;
		}

		.mm_strapline {
			padding-bottom: 12px;

			span {
				margin-left: 5px;
				color: #888;
			}
		}

		.mm_gift-list li {
			position: relative;

			input[type='radio'] {
				position: absolute;
				z-index: 1;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: 0;

				&:checked + .mm_gift-item {
					border-color: var(--color_main);

					.ico_form-radio::before {
						background-color: var(--color_main);
					}
				}

				+ .mm_gift-item {
					.ico_form-radio::before {
						background-color: #cdcdcd;
					}
				}
			}
		}

		.mm_gift-item {
			figure > figcaption {
				padding-right: 30px;
			}

			.ico_form-radio {
				position: absolute;
				top: 13px;
				right: 14px;

				&::before {
					width: 20px;
					height: 20px;
					background-color: #eee;
				}
			}

			.text_note {
				padding-top: 29px;
				@include mixin.font('1.4rem', nowrap);
			}

			> p {
				padding: 38px 0 32px;
				@include mixin.font(#4a4a4a '1.3rem' center);

				strong {
					display: block;
					margin-bottom: 8px;
					@include mixin.font(600 '2rem');
				}
			}
		}
	}
</style>