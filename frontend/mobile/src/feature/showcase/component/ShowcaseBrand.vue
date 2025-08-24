<template>
	<!-- 쇼케이스 -->
	<section class="m_brand-showcase">
		<h4><b>SHOWCASE</b></h4>
		<carousel
			:auto-delay="4"
			:is-more-side="true"
			effect="cover"
			:items="brandContents"
		>
			<template #default="{ item: showcase }">
				<li class="mm_carousel-item">
					<mm-link :to="{ name: 'ShowcaseDetail', params: { id: showcase.id } }">
						<figure>
							<lazyload
								is-force
								class="mm_bg-cover image_banner"
								:src="showcase.image_url"
							></lazyload>
							<figcaption>
								<p class="text_title">
									{{ showcase.title }}
								</p>
								<!-- TODO text1, 2 합쳐서 for로 변경 필요(마크업에서 구조가 바뀜) -->
								<p class="text_main">
									{{ showcase.main_text_1 }}
								</p>
								<p class="text_main">
									{{ showcase.main_text_2 }}
								</p>
							</figcaption>
						</figure>
					</mm-link>
				</li>
			</template>
		</carousel>
	</section>
</template>

<script setup lang="ts">
	import Carousel from '@/component/Carousel.vue';
	import Lazyload from '@/component/Lazyload.vue';
	defineProps<{
		brandContents: BrandContents[]
	}>();
</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';
	@use '../../../asset/scss/helper/function';
	@use '../../../asset/scss/helper/const';

	.m_brand-showcase {
		padding: 0 14px;

		h4 {
			padding: 11px 0 12px 2px;
			@include mixin.font('1.7rem/1.4');
		}

		.mm_carousel {
			margin-right: -14px;

			&-inner {
				padding-right: 3.7234vw;
			}

			&-list {
				box-sizing: content-box;
				padding-top: 100%;
				height: 85px;
			}

			&-item {
				top: 0;
				background-color: transparent;

				&#{function.escape('.S=on')} {
					figcaption {
						@include mixin.opacity(1);
					}
				}

				&#{function.escape('.S=prev')} {
					figcaption {
						@include mixin.opacity(0);
					}
				}

				&#{function.escape('.S=next')} {
					figcaption {
						@include mixin.opacity(1);
						transition-delay: const.$time_fast;
					}
				}

				.image_banner {
					position: relative;
					padding-top: 100%;
					width: 100%;
				}

				figcaption {
					padding: 16px 8px 0;
					@include mixin.font(#4a4a4a '1.3rem/1.9rem');
					@include mixin.opacity(0);
					@include mixin.transition(opacity, const.$time_base);

					> * {
						@include mixin.text-ellipsis(1);
					}

					.text_title {
						@include mixin.font(var(--color_text_base) '2rem/2.4rem');

						+ .text_main {
							margin-top: 7px;
						}
					}

					.text_main {
						padding-right: 50px;

						+ .text_main {
							margin-top: 1px;
						}
					}
				}
			}

			&-control {
				right: 0;
				left: 0;
				margin-top: -42px;
				@include mixin.transform(translateX(0));

				button {
					padding: 11px;
					@include mixin.opacity(0.7);

					&.btn_carousel-next {
						right: 4.25532vw;
					}
				}
			}

			&-count {
				right: 24px;
				bottom: 0;
				padding: 0 12px 0 11px;
				width: auto;
				height: 22px;
				border: 1px solid #eee;
				border-radius: 11px;
				background-color: #f5f5f5;
				font-size: 0;

				> * {
					@include mixin.font(#888 400 '1.2rem/2.1rem');
				}

				.text_carousel-index {
					@include mixin.font(var(--color_text_base) 600);
				}

				> i {
					margin: 0 3px 0 2px;
				}
			}
		}

		+ .m_brand-curation {
			margin-top: 48px;
		}
	}
</style>