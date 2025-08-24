<template>
	<div
		ref="timeDeal"
		class="m_prodetail-timedeal"
		:class="{ 'S=toggle-on': timeDealOff }"
	>
		<button
			type="button"
			class="btn_timedeal"
			@click="timeDealBarToggle"
		>
			<i class="ico_clock"></i><b class="mm_ir-blind">타임특가</b>
		</button>
		<div class="mm_flex">
			<template v-if="true">
				<strong class="text_countdown">D-10</strong>
				<p class="text_time">
					<strong>20<span>:</span>18<span>:</span>56</strong>남음
				</p>
			</template>
			<template v-else>
				<p class="text_schedule">
					9.16<span>오후 7시 진행 예정</span>
				</p>
			</template>
			<button
				type="button"
				class="btn_close"
				@click="timeDealBarToggle"
			>
				<i class="ico_close"></i><b class="mm_ir-blind">닫기</b>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { gsap } from 'gsap';

	// 타임딜 토글
	const timeDeal = ref<HTMLElement|null>(null);
	const timeDealOff = ref(false);
	function timeDealBarToggle() {

		timeDealOff.value = !timeDealOff.value;

		if (timeDeal.value === null) return;

		const margin = (document.documentElement.classList.contains('T=pc')) ? 28 : 84;

		const $btnTimedeal = timeDeal.value?.querySelector('.btn_timedeal');
		const width = (timeDealOff.value) ? 46 : (document.documentElement.classList.contains('T=pc')) ? 376 - margin : window.outerWidth - margin;

		if (timeDealOff.value) {
			gsap.to(timeDeal.value, { width: width, duration: 0.2 });
			gsap.to($btnTimedeal, { x: -7, duration: 0.2 });
		}
		else {
			gsap.to(timeDeal.value, { width: width, duration: 0.2 });
			gsap.to($btnTimedeal, { x: 0, duration: 0.2 });
		}

	}
</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';
	@use '../../../asset/scss/helper/function';
	@use '../../../asset/scss/helper/const';

	.m_prodetail-timedeal {
		position: fixed;
		z-index: const.$z_index_floating;
		bottom: 74px;
		left: 14px;
		width: calc(100% - 84px);
		border: 1px solid #f33a1b;
		border-radius: 46px;
		background-color: #fff;
		@include mixin.font(#f33a1b '/4.6rem');

		#{function.escape('.T=pc')} & {
			right: 14px;
			left: auto;
			width: calc(100% - 28px);
		}

		.btn_timedeal {
			position: absolute;
			z-index: 1;
			top: 0;
			left: 6px;
			width: 44px;
			height: 44px;
			border-radius: 100%;
			font-size: 18px;
			pointer-events: none;

			.ico_clock {
				margin-top: 13px;

				&::before {
					width: 18px;
					height: 18px;
					background-color: #f33a1b;
				}
			}
		}
		&#{function.escape('.S=toggle-on')} {
			background-color: #fff;

			.btn_timedeal {
				left: 7px;
				pointer-events: auto;

				.ico_clock::before {
					background-color: #f33a1b;
				}
			}
		}

		> .mm_flex {
			overflow: hidden;
			padding-left: 47px;
			height: 44px;

			> p {
				vertical-align: 0;
				@include mixin.font('1.2rem/4.4rem');
			}

			.text_schedule {
				@include mixin.prefix(flex, 1, webkit);
				@include mixin.font(v_700 '1.7rem');

				> span {
					margin-left: 8px;
				}
			}

			.text_countdown {
				@include mixin.font(v_700 '1.7rem/4.4rem');
			}

			.text_time {
				@include mixin.prefix(flex, 1, webkit);
				margin: 0 4px 0 9px;

				strong {
					margin-right: 5px;
					vertical-align: -1px;
					@include mixin.font(#f33a1b 600 '1.7rem');

					span {
						padding: 0 3px;
						vertical-align: 2px;
						@include mixin.font(700 '1.2rem');
					}
				}
			}

			.text_stock {
				margin-right: 6px;
				text-align: right;

				strong {
					margin-left: 7px;
					vertical-align: 0;
				}
			}

			.btn_close {
				width: 40px;
				height: 44px;

				.ico_close {
					margin-top: 17px;
				}
			}
		}
	}
</style>