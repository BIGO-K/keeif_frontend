<template>
	<!-- 배송 도착 확률 -->
	<div class="m...info-ship">
		<toggle
			v-model:is-active="isTooltipActive"
			class="btn_help"
			parent-selector=".m...info-ship"
		>
			<i class="ico_help-fill"></i>
		</toggle>
		<div class="m...info-ship-tooltip">
			<p>최근 배송된 주문건 대상으로 평균 배송일을 예측했습니다. 실제 배송완료일은 예측치와 다를 수 있습니다.</p>
			<button
				type="button"
				class="btn_close"
				@click="isTooltipActive = false"
			>
				<i class="ico_close"></i><b class="mm_ir-blind">닫기</b>
			</button>
		</div>
		<dropdown>
			<template #button>
				<i class="ico_ship"></i><strong>5월 19일(화)</strong> 도착 확률<strong>90.1<sub>%</sub></strong>
			</template>
			<template #content>
				<p><span>5월 18일(월) 도착확률</span><strong>27.2</strong></p>
				<p><span>5월 19일(월) 도착확률</span><strong>90.2</strong></p>
				<p><span>5월 20일(월) 도착확률</span><strong>65.2</strong></p>
			</template>
		</dropdown>
		<p class="text_note">
			오후 3시 이전 주문시 당일 출고 가능
		</p>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Toggle from '@/component/Toggle.vue';

	const isTooltipActive = ref(false);
</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';
	@use '../../../asset/scss/helper/function';

	.m_prodetail-head-info {
		#{function.escape('.m...info-ship')} {
			position: relative;
			margin-top: 7px;

			&#{function.escape('.S=toggle-on')} {
				#{function.escape('.m...info-ship-tooltip')} {
					display: block;
				}
			}

			.btn_help {
				position: absolute;
				z-index: 1;
				top: 10px;
				right: 6px;
				padding: 8px;

				.ico_help-fill {
					&::before {
						width: 15px;
						height: 15px;
					}
				}
			}

			#{function.escape('.m...info-ship-tooltip')} {
				display: none;
				position: absolute;
				z-index: 1;
				top: 36px;
				right: 0;
				left: 0;
				padding: 8px 46px 8px 11px;
				border: 1px solid #101010;
				background-color: #fff;
				@include mixin.font(#2b2b2b 400 '1.4rem/1.8rem');

				.btn_close {
					position: absolute;
					top: 0;
					right: 0;
					padding: 11px;

					.ico_close {
						&::after {
							width: 11px;
							height: 11px;
							background-color: #2b2b2b;
						}
					}
				}
			}

			.mm_dropdown {
				.btn_dropdown {
					padding: 11px;
					height: 50px;
					border: 1px solid #eee;
					border-radius: 1px;
					background-color: #fafafa;
					font-size: 1.4rem;
					@include mixin.font('1.4rem/2.6rem' left);

					strong {
						font-weight: 700;

						~ strong {
							margin-left: 11px;
							vertical-align: -1px;
							@include mixin.font(#4457a7 '1.6rem');
						}

						sub {
							font-size: 1.4rem;
						}
					}

					.ico_ship {
						margin-right: 10px;
						padding: 7px 6px;
						width: 26px;
						height: 26px;
						border-radius: 100%;
						background-color: #888;

						&::before {
							width: 13px;
							height: 11px;
							background-color: #f0f7f7;
						}
					}

					.ico_dropdown {
						right: 45px;

						&::before {
							width: 13px;
							height: 15px;
							background-color: #101010;
						}
					}
				}

				&-item-inner {
					margin-top: -1px;
					padding: 18px 44px 14px 17px;
					border: 1px solid #eee;

					p {
						position: relative;
						@include mixin.font('1.4rem');
						@include mixin.clearfix;

						&::before {
							position: absolute;
							top: 50%;
							right: 0;
							left: 0;
							margin-top: -2px;
							border-top: 1px dashed #dcdcdc;
							content: '';
						}

						> * {
							position: relative;
						}

						> span {
							display: inline-block;
							padding-right: 13px;
							background-color: #fff;
						}

						strong {
							float: right;
							padding-left: 11px;
							background-color: #fff;
							font-size: 1.7rem;

							&::after {
								font-size: 1.4rem;
								content: '%';
							}
						}

						&:only-child,
						&:nth-child(2) {
							@include mixin.font(var(--color_support) 700);
						}

						+ p {
							margin-top: 8px;
						}
					}
				}
			}

			.text_note {
				margin-top: 3px;
				padding: 0 6px;
				@include mixin.font(#888 '1.1rem/2rem');
			}

			+ dl {
				margin-top: 12px;
			}
		}
	}
</style>