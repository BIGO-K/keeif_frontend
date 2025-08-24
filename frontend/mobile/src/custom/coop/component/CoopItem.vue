<template>
	<div :class="`${prefix.class}product-item`">
		<mm-link
			v-if="coopDealGoods.influencer"
			class="btn_influencer"
			:to="{ name: 'InfluencerShop', params: { id: coopDealGoods.influencer.id } }"
		>
			<lazyload
				:class="`${prefix.class}bg-cover`"
				:src="coopDealGoods.influencer.logo_image_url"
				:is-error-image="false"
			></lazyload>
			<b>{{ coopDealGoods.influencer.name }}</b>
		</mm-link>
		<mm-link :to="link">
			<figure>
				<lazyload
					:class="`${prefix.class}bg-cover image_product`"
					:src="coopDealGoods.thumbnail_url"
				></lazyload>
				<p
					v-if="coopDealGoods.is_only_adult && (isStart && !isEnd)"
					class="text_adult"
				>
					<b :class="`${prefix.class}ir-blind`">미성년자 구매불가</b>
					<i :class="`${prefix.icon}adult`"></i>
				</p>
				<p v-if="isEnd">
					<span><strong>Coming soon</strong>곧 다시 만나요!</span>
				</p>
				<div v-else-if="isStart && useTimer">
					<b><i :style="`width:${timeProgressPercentage}%;`"></i></b>
					<dl><dt>남은시간</dt><dd>D-{{ timer.day }} {{ timer.hour }} : {{ timer.minute }} : {{ timer.second }}</dd></dl>
				</div>
				<p v-else-if="!isStart">
					<span>
						<strong>{{ date(coopDealGoods.sell_start_at, 'MM.DD') }}</strong>
						{{ (upcomingDateType == 'date' ? date(coopDealGoods.sell_start_at, 'A h시 mm분') : '') + ' 진행예정' }}
					</span>
				</p>
				<p
					v-if="coopDealGoods.is_only_adult && (!isStart || isEnd)"
					class="text_adult"
				>
					<b :class="`${prefix.class}ir-blind`">미성년자 구매불가</b>
					<i :class="`${prefix.icon}adult`"></i>
				</p>
				<figcaption>
					<p class="text_brand">
						{{ coopDealGoods.brand_name }}
					</p>
					<p
						v-if="coopDealGoods.headline"
						class="text_product"
					>
						{{ `[${coopDealGoods.headline}]${coopDealGoods.name}` }}
					</p>
					<p
						v-else
						class="text_product"
					>
						{{ coopDealGoods.name }}
					</p>
					<p
						v-if="coopDealGoods.sale_rate > 0"
						class="text_sale"
					>
						{{ coopDealGoods.sale_rate }}%
					</p>
					<p class="text_price">
						<strong>{{ number(coopDealGoods.base_discounted_price) }}</strong>
						<del><span>{{ number(coopDealGoods.price) }}</span></del>
					</p>
					<div
						v-if="needBadgeDisplay"
						:class="`${prefix.class}tag-list`"
					>
						<dawn-tag
							v-if="coopDealGoods.is_dawn_delivery"
							:is-block="isBlock"
						></dawn-tag>
						<b
							v-for="badge in coopDealGoods.badges"
							:key="badge"
							:class="`${prefix.class}tag T=square`"
						>{{ badge }}</b>
						<b
							v-if="!coopDealGoods.is_dawn_delivery && coopDealGoods.badges.length < 1"
							class="mm_tag T=square T=dark"
							style="opacity: 0;"
						>-</b>
					</div>
				</figcaption>
			</figure>
		</mm-link>
	</div>
</template>
<script setup lang="ts">
	import { computed, ref, watch, onBeforeUnmount } from 'vue';
	import { useAuthStore } from '$/stores/useAuthStore';
	import monsDate from '$/utils/date';
	import { useFormatter } from '$/composables/useFormatter';
	import Lazyload from '@/component/Lazyload.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const props = withDefaults(defineProps<{
		coopDealGoods: CoopDeal
		isBlock?: boolean
		upcomingDateType?: 'date'|'datetime'
		useTimer?: boolean
		forceBadge?: boolean
	}>(), {
		isBlock: false,
		upcomingDateType: 'datetime',
		useTimer: true,
		forceBadge: false,
	});

	const { member } = useAuthStore();
	const { number, pad, date } = useFormatter();

	const prefix = computed(() => {
		return props.isBlock ?
			{
				class: 'mui_',
				icon: 'uico_',
			} : {
				class: 'mm_',
				icon: 'ico_',
			};
	});

	const needBadgeDisplay = computed(() => props.forceBadge || props.coopDealGoods.badges.length > 0 || props.coopDealGoods.is_dawn_delivery);
	// 타이머 interval
	const countDownTimer = ref<null|NodeJS.Timeout>(null);
	// 남은시간 단위별 숫자값
	const timerDuration = ref<{
		day: number
		hour: number
		minute: number
		second: number
	}>({
		day: 0,
		hour: 0,
		minute: 0,
		second: 0,
	});
	const timer = computed<{
		day: string
		hour: string
		minute: string
		second: string
	}>(() => {
		return {
			day: `${Math.abs(timerDuration.value.day)}`,
			hour: pad(`${Math.abs(timerDuration.value.hour)}`, 2, '0', 'left'),
			minute: pad(`${Math.abs(timerDuration.value.minute)}`, 2, '0', 'left'),
			second: pad(`${Math.abs(timerDuration.value.second)}`, 2, '0', 'left'),
		};
	});

	const timeProgress = ref<{
		progressed: number
		total: number
	}>({
		progressed: 0,
		total: 0,
	});

	const timeProgressPercentage = computed(() => Math.ceil(Math.abs(timeProgress.value.progressed / timeProgress.value.total) * 100));

	const endAt = computed(() => props.coopDealGoods.sell_end_at);
	const startAt = computed(() => props.coopDealGoods.sell_start_at);
	const isEnd = computed(() => monsDate().isAfter(endAt.value));
	const isStart = computed(() => monsDate().isAfter(startAt.value));

	/** 공구상품 링크 */
	const link = computed(() => {
		if (props.coopDealGoods.is_only_adult && member?.is_verify_age !== true) {
			return {
				name: 'AuthAdult',
				query: {
					redirect_to_after: `/product/${props.coopDealGoods.id}`,
				},
			};
		}

		return {
			name: 'ProductDetail',
			params: {
				id: props.coopDealGoods.id,
			},
		};
	});

	/** 카운트다운 */
	function countdown() {
		/** 인터벌 클리어 */
		if (countDownTimer.value != null) {
			clearInterval(countDownTimer.value);
		}

		/** 진행중 공구상품 아닌경우 카운트다운 초기화 및 종료 */
		if (isEnd.value || !isStart.value) {
			timerDuration.value = {
				day: 0,
				hour: 0,
				minute: 0,
				second: 0,
			};

			return;
		}

		/** 카운트다운 시작 */
		countDownTimer.value = setInterval(() => {
			const duration = monsDate().duration(endAt.value);
			timerDuration.value = {
				day: duration.days,
				hour: duration.hours,
				minute: duration.minutes,
				second: duration.seconds,
			};
			timeProgress.value = {
				progressed: monsDate().diff(startAt.value, 'second'),
				total: monsDate(startAt.value).diff(endAt.value, 'second'),
			};

			/** 카운트다운 초기화 및 종료 */
			if (monsDate().isAfter(endAt.value) && countDownTimer.value != null) {
				timerDuration.value = {
					day: 0,
					hour: 0,
					minute: 0,
					second: 0,
				};

				clearInterval(countDownTimer.value);

				return;
			}
		}, 1000);
	}

	if (props.useTimer) {
		watch(isEnd, (to) => {
			if (to) {
				timerDuration.value = {
					day: 0,
					hour: 0,
					minute: 0,
					second: 0,
				};

				return;
			}

			// 카운트다운 초기값 설정
			const duration = monsDate().duration(endAt.value);
			timerDuration.value = {
				day: duration.days,
				hour: duration.hours,
				minute: duration.minutes,
				second: duration.seconds,
			};
			timeProgress.value = {
				progressed: monsDate().diff(startAt.value, 'second'),
				total: monsDate(startAt.value).diff(endAt.value, 'second'),
			};

			// 카운트다운 시작
			countdown();
		}, {
			immediate: true,
		});
	}

	onBeforeUnmount(() => {
		if (countDownTimer.value != null) {
			clearInterval(countDownTimer.value);
		}
	});
</script>