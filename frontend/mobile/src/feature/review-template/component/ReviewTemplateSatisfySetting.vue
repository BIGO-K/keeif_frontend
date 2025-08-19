<template>
	<section
		v-for="reviewTemplate in reviewTemplates"
		:key="reviewTemplate.id"
	>
		<h6><b>{{ reviewTemplate.title }}는 어떤가요?</b></h6>
		<div class="mm_radio-list">
			<ul class="mm_flex T=equal">
				<li
					v-for="detail in reviewTemplate.details"
					:key="detail.id"
				>
					<form-radio
						v-model="selected[reviewTemplate.id]"
						:name="`dev_radio_${reviewTemplate.id}`"
						:value="detail.id"
					>
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">{{ detail.label }}</span>
						</b>
					</form-radio>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { ref, watch } from 'vue';
	import FormRadio from '@/component/form/FormRadio.vue';

	const props = withDefaults(defineProps<{
		selectedReviewTemplates: MyReviewDetail['selected_templates']
		reviewTemplates: ReviewTemplate[]
	}>(), {
		selectedReviewTemplates: () => [],
		reviewTemplates: () => [],
	});

	const emit = defineEmits<{
		(e: 'update:selectedReviewTemplates', value: MyReviewDetail['selected_templates']): void
	}>();

	const selected = ref(Object.fromEntries(
		props.selectedReviewTemplates
			.map(selected => [selected.template_id, selected.detail_id])
	));

	watch(selected, (newSelected) => {
		const templates = Object.entries(newSelected).map(selected => {
			return {
				template_id: Number(selected[0]),
				detail_id: selected[1],
			};
		});
		emit('update:selectedReviewTemplates', templates);
	}, {
		deep: true
	});
</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';

	/** 리뷰관리 */
	// 리뷰 쓰기
	.m_overlay-myreview {
		> section {
			&:not(:first-of-type) {
				padding: 42px 0 37px;

				h6 {
					padding-bottom: 15px;
				}
			}

			.mm_radio-list {
				padding: 0 40px;

				ul {
					position: relative;
					text-align: center;

					&::before {
						position: absolute;
						top: 20px;
						left: 20%;
						width: 60%;
						border-top: 1px solid #e6e6e6;
						content: '';
					}
				}

				li {
					&:nth-child(n+2) {
						margin-top: 0;
					}
				}

				.mm_form-radio {
					padding: 48px 0 0;
					min-width: 60px;

					.ico_form-radio {
						left: 50%;
						width: 40px;
						height: 40px;
						border-color: #e6e6e6;
						@include mixin.transform(translateX(-50%));

						&::before {
							top: 50%;
							left: 50%;
							width: 24px;
							height: 24px;
							background-color: #e6e6e6;
							@include mixin.transform(translate(-50%, -50%));
						}
					}

					.text_label {
						margin: 0;
						@include mixin.font(#4a4a4a '1.2rem/1.4rem');
					}

					input:checked {
						+ .mm_block {
							.ico_form-radio {
								border-color: var(--color_main);
							}

							.text_label {
								color: var(--color_main);
							}
						}
					}
				}
			}
		}
	}
</style>