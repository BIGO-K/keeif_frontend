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
			<template v-if="inProgress">
				<strong class="text_countdown">D-{{ timer.day }}</strong>
				<p class="text_time">
					<strong>{{ timer.hour }}<span>:</span>{{ timer.minute }}<span>:</span>{{ timer.second }}</strong>남음
				</p>
			</template>
			<template v-else>
				<p class="text_schedule">
					{{ schedule.day }}<span>{{ schedule.hour }}{{ schedule.minute }} 진행 예정</span>
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
	import { ref, computed } from 'vue';
	import { gsap } from 'gsap';
	import monsDate from '$/utils/date';
	import { useCountDown } from '$/composables/useCountDown';
	import { useFormatter } from '$/composables/useFormatter';

	const props = defineProps<{
		influencerMarketing: GoodsInfluencerMarketing
	}>();

	const influencerMarketing = computed(() => props.influencerMarketing);
	const inProgress = computed(() => monsDate().diff(influencerMarketing.value.sell_start_at, 'minute') >= 0);

	// 타임딜 토글
	const timeDeal = ref<HTMLElement|null>(null);

	const { timer } = useCountDown(`${influencerMarketing.value.sell_end_at}`);
	const { date } = useFormatter();

	const schedule = computed<{
		day: string
		hour: string
		minute: string
	}>(() => {
		return {
			day: date(`${influencerMarketing.value.sell_start_at}`, 'MM.DD'),
			hour: `${date(`${influencerMarketing.value.sell_start_at}`, 'A h')}시`,
			minute: (Number(date(`${influencerMarketing.value.sell_start_at}`, 'm')) != 0) ? `${date(`${influencerMarketing.value.sell_start_at}`, 'm')}분` : '',
		};
	});

	const timeDealOff = ref(false);
	function timeDealBarToggle() {

		timeDealOff.value = !timeDealOff.value;

		if (timeDeal.value === null) return;

		// const margin = (document.documentElement.classList.contains('T=pc')) ? 28 : 84;

		const $btnTimedeal = timeDeal.value?.querySelector('.btn_timedeal');
		// const width = (timeDealOff.value) ? 46 : (document.documentElement.classList.contains('T=pc')) ? 376 - margin : window.outerWidth - margin;
		const width = (timeDealOff.value) ? 46 : (document.documentElement.classList.contains('T=pc')) ? 376 - 28 : window.outerWidth - 28;

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
		right: 14px;
		bottom: 74px;
		width: calc(100% - 28px);
		border: 1px solid #f33a1b;
		border-radius: 46px;
		background-color: #fff;
		@include mixin.font(#f33a1b '/4.6rem');

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

		~ .btn_prodetail-recent {
			bottom: calc(var(--toolbar_height_base) + 135px);

			~ .btn_topmost {
				#{function.escape('.L=lowbtn')} & {
					bottom: calc(var(--toolbar_height_base) + 79px);
				}
			}
		}
	}
</style>