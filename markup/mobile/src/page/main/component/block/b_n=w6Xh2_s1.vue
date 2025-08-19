<template>
	<div
		class="m_main-ribbon"
		data-mui="b_n=w6Xh2_s1"
	>
		<mm-link :to="{ name: '' }">
			<figure>
				<lazyload
					class="mui_bg-cover image_banner"
					src="/image/_sample/b_n=w6Xh2_s1_01.jpg"
				></lazyload>
				<figcaption>
					<p class="text_alt">
						이미지 대체텍스트
					</p>
				</figcaption>
			</figure>
		</mm-link>
	</div>
</template>

<script setup lang="ts">
	import Lazyload from '@/component/Lazyload.vue';
</script>

<style lang="scss">
	@use '../../../../asset/scss/helper/function';
	@use '../../../../asset/scss/helper/mixin';
	@use '../../../../asset/scss/helper/const';

	// 커스텀 띠배너
	[data-mui='b_n=w6Xh2_s1'] {
		a {
			display: block;
			position: relative;
		}

		figure {
			.image_banner {
				padding-top: 25%;
				width: 100%;
			}

			figcaption {
				position: absolute;
				z-index: 1;
				top: 50%;
				right: 20px;
				left: 20px;
				@include mixin.transform(translateY(-50%));

				.text_alt {
					@include mixin.text_ellipsis(2);
					@include mixin.font(#a3a3a3 '1.4rem/2rem' center);

					@include mixin.context-after(':not(.mui_image-none)', 'figure') {
						display: none;
					}
				}
			}
		}

		// 이미지 에러
		.mui_image-none {
			.uico_none {
				background-color: #f5f5f5;
			}
		}

		// 커스텀 스타일
		&.m_main-ribbon {
			padding: 0 14px;

			figure {
				.image_banner {
					padding-top: 17.24137%;
				}
			}
		}
	}
</style>