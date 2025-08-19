<template>
	<div class="mm_view L=minishop">
		<!-- 헤더 -->
		<header
			ref="$header"
			class="mm_header"
		>
			<h1><b><slot name="title"></slot></b></h1>
			<div class="mm_lside">
				<a
					class="btn_back"
					href="#"
					@click.prevent="historyBack()"
				>
					<b class="mm_ir-blind">닫기</b><i class="ico_close"></i>
				</a>
			</div>
			<div class="mm_rside">
				<mm-link :to="{ name: 'Cart' }">
					<i class="ico_cart"></i><strong class="text_badge">{{ cartCount || 0 }}</strong><b class="mm_ir-blind">장바구니</b>
				</mm-link>
			</div>
		</header>

		<!-- 내용 -->
		<div
			id="mm_body"
			class="mm_page"
		>
			<!-- (D) 실제 내용을 추가하는 부분입니다. -->

			<div
				ref="$scroller"
				class="mm_scroller"
			>
				<div class="mm_page-inner">
					<!-- 본문 -->
					<div class="mm_page-content">
						<div class="m_minishop">
							<div class="m_minishop-head">
								<lazyload
									is-force
									class="mm_bg-cover image_background"
									:src="influencer.cover_image_url ?? influencer.logo_image_url"
									:class="{ 'S=blur': !influencer.cover_image_url }"
								></lazyload>
								<figure>
									<lazyload
										is-force
										class="mm_bg-cover"
										:src="influencer.logo_image_url"
									></lazyload>
									<figcaption>
										<!-- <h3><b>{{ influencer.name }}</b><small>팔로워<strong>{{ number(influencer.follower_count) }}</strong></small></h3> -->
										<minishop-follower :influencer="influencer"></minishop-follower>
										<strong>{{ influencer.description }}</strong>
										<p v-html="newLineToBr(influencer.description_detail)"></p>
										<toggle
											v-model:is-active="isFollow"
											class="mm_btn T=sm T=line btn_follow"
											title="팔로잉"
											active-title="팔로잉 해제"
											is-lazy
											@click="changeFollow"
										>
											<i class="ico_follow"></i>
											<b>{{ isFollow ? '팔로잉' : '팔로우' }}</b>
										</toggle>
										<div :class="['m_minishop-follow', {'S=on': isFollowAlertOn}]">
											<i class="ico_follow-alert"></i>
											<p>인플루언서 <strong>{{ influencer.name }}</strong>님 팔로우가 시작되었습니다.</p>
										</div>
										<div class="mm_btn_box">
											<a
												v-if="influencer.instagram_url"
												:href="externalLink(influencer.instagram_url)"
												class="btn_instagram"
												target="_blank"
												title="새 창 열림"
											>
												<i class="ico_instagram"></i><b class="mm_ir-blind">인스타그램</b>
											</a>
											<a
												v-if="influencer.kakaotalk_url"
												:href="externalLink(influencer.kakaotalk_url)"
												class="btn_kakao-channel"
												target="_blank"
												title="새 창 열림"
											>
												<i class="ico_kakao-channel"></i><b class="mm_ir-blind">카카오톡 채널</b>
											</a>
											<!-- SNS 공유 -->
											<button
												v-if="minishopUrl"
												type="button"
												class="btn_url"
												@click="shareStore.open(
													$event,
													influencer.name,
													`#${influencer.description}#미니샵`,
													influencer.logo_image_url,
													minishopUrl,
												)"
											>
												<i class="ico_url"></i><b class="mm_ir-blind">공유한 URL</b>
											</button>
										</div>
									</figcaption>
								</figure>
							</div>
							<div class="mm_inner">
								<!-- 달력 -->
								<div class="m_minishop-calendar">
									<div class="m_minishop-calendar-head">
										<h4><b>{{ currentCalendar.format('YYYY') }}</b><b>{{ currentCalendar.format('M') }}</b></h4>
										<button
											type="button"
											class="btn_prev-month"
											@click="moveMonth('prev')"
										>
											<i class="ico_calendar-prev"></i><b class="mm_ir-blind">이전 달</b>
										</button>
										<button
											type="button"
											class="btn_next-month"
											@click="moveMonth('next')"
										>
											<i class="ico_calendar-next"></i><b class="mm_ir-blind">다음 달</b>
										</button>
									</div>
									<table>
										<thead>
											<tr>
												<th scope="col">
													<b>일</b>
												</th>
												<th scope="col">
													<b>월</b>
												</th>
												<th scope="col">
													<b>화</b>
												</th>
												<th scope="col">
													<b>수</b>
												</th>
												<th scope="col">
													<b>목</b>
												</th>
												<th scope="col">
													<b>금</b>
												</th>
												<th scope="col">
													<b>토</b>
												</th>
											</tr>
										</thead>
										<!--
											(D) 공동구매 아이템 a태그는 시작하는 날이 해당된 주 첫번째 td 하위에 위치하고
											시작하는 날짜에 위치하도록 left값을 %로 조절합니다. (화요일날 시작한다면 left: 42.85714%)
											a태그의 width 또한 그 주에 얼만큼 지속되는지 %로 지정하여 줍니다. (화요일에 시작해서 수요일에 끝난다면 width: 28.57142%)
											table에 표시되는 공동구매 아이템 a태그는 상품 당 순서대로 'btn_coopbuy1' 'btn_coopbuy2' 'btn_coopbuy3' ... 클래스를 추가해 색을 표시합니다.
											표시되는 주에 공동구매 시작 날짜, 종료 날짜 포함에 따라 'T=start' 'T=end' 클래스를 추가합니다.

											현재 보여지는 월에 해당되는 일이 아니라면 td에 'T=calendar-out' 클래스를 추가합니다.

											오늘 날짜 td에 'T=calendar-today' 클래스를 추가합니다.
											오늘이 포함된 주 tr에 'T=calendar-thisweek' 클래스를 추가합니다.

											달력이 접혀있을 때 이번주와 다음주를 보여주기 위해 다음달에 첫번째 주를 마지막 tr로 표시하고 'T=calendar-next' 클래스를 추가합니다.
										-->
										<tbody>
											<tr
												v-for="(week, weekIndex) in calendarWithSchedules"
												:key="weekIndex"
											>
												<td
													v-for="(day, dayIndex) in week.days"
													:key="day.date"
													:class="[
														{ 'T=calendar-out': day.outOfMonth },
														{ 'T=calendar-today': day.isToday }
													]"
												>
													<b>{{ day.date }}</b>
													<template v-if="dayIndex == 0 && week.schedules.length > 0">
														<mm-link
															v-for="schedule in week.schedules"
															:key="schedule.coopDeal.id"
															:class="[
																`btn_coopbuy${schedule.numbering}`,
																{'T=start': !schedule.fromPrevWeek },
																{'T=end': !schedule.toNextWeek }
															]"
															:to="{ name: 'ProductDetail', params: { id: schedule.coopDeal.id } }"
															:style="`left: ${100 * schedule.startOnWeekday }%;width: ${100 * schedule.durationInDay}%;`"
														>
															<b>{{ schedule.coopDeal.name }}</b>
															<b class="mm_ir-blind">
																{{ date(schedule.coopDeal.sell_start_at, 'YYYY년 M월 D일부터 ') }}
																{{ date(schedule.coopDeal.sell_end_at, 'YYYY년 M월 D일까지') }}
															</b>
														</mm-link>
													</template>
												</td>
											</tr>
											<tr
												v-if="thisWeek && thisWeek.days.length > 0"
												class="T=calendar-thisweek"
											>
												<td
													v-for="(day, dayIndex) in thisWeek.days"
													:key="day.date"
													:class="[
														{ 'T=calendar-today': day.isToday }
													]"
												>
													<b>{{ day.date }}</b>
													<template v-if="dayIndex == 0 && thisWeek.schedules.length > 0">
														<mm-link
															v-for="schedule in thisWeek.schedules"
															:key="schedule.coopDeal.id"
															:class="[
																`btn_coopbuy${schedule.numbering}`,
																{'T=start': !schedule.fromPrevWeek },
																{'T=end': !schedule.toNextWeek }
															]"
															:to="{ name: 'ProductDetail', params: { id: schedule.coopDeal.id } }"
															:style="`left: ${100 * schedule.startOnWeekday }%;width: ${100 * schedule.durationInDay}%;`"
														>
															<b>{{ schedule.coopDeal.name }}</b>
															<b class="mm_ir-blind">
																{{ date(schedule.coopDeal.sell_start_at, 'YYYY년 M월 D일부터 ') }}
																{{ date(schedule.coopDeal.sell_end_at, 'YYYY년 M월 D일까지') }}
															</b>
														</mm-link>
													</template>
												</td>
											</tr>
											<tr
												v-if="nextWeek && nextWeek?.days.length > 0"
												class="T=calendar-next"
											>
												<td
													v-for="(day, dayIndex) in nextWeek.days"
													:key="day.date"
												>
													<b>{{ day.date }}</b>
													<template v-if="dayIndex == 0 && nextWeek.schedules.length > 0">
														<mm-link
															v-for="schedule in nextWeek.schedules"
															:key="schedule.coopDeal.id"
															:class="[
																`btn_coopbuy${schedule.numbering}`,
																{'T=start': !schedule.fromPrevWeek },
																{'T=end': !schedule.toNextWeek }
															]"
															:to="{ name: 'ProductDetail', params: { id: schedule.coopDeal.id } }"
															:style="`left: ${100 * schedule.startOnWeekday }%;width: ${100 * schedule.durationInDay}%;`"
														>
															<b>{{ schedule.coopDeal.name }}</b>
															<b class="mm_ir-blind">
																{{ date(schedule.coopDeal.sell_start_at, 'YYYY년 M월 D일부터 ') }}
																{{ date(schedule.coopDeal.sell_end_at, 'YYYY년 M월 D일까지') }}
															</b>
														</mm-link>
													</template>
												</td>
											</tr>
										</tbody>
									</table>
									<toggle
										v-model:is-active="calendarOn"
										class="btn_toggle"
										active-class="S=open"
										title="펼쳐보기"
										active-title="접어보기"
										parent-selector=".m_minishop-calendar"
										@update:is-active="toggleCalendar"
									>
										<i class="ico_toggle-bold"></i>
									</toggle>
								</div>

								<!-- 공동구매 -->
								<div class="mm_coopbuy">
									<h4><b>{{ today.format('M.D') }}</b></h4>
									<!-- 진행중 -->
									<section>
										<h5><b>진행 중인 공동구매 상품이에요</b></h5>
										<p
											v-if="ongoing_coop_deals.length < 1"
											class="mm_text-none"
										>
											<i class="ico_text-none"></i>진행중인 공구 일정이 없습니다
										</p>
										<div
											v-else
											class="mm_product-list T=card"
										>
											<ul>
												<li
													v-for="coopDeal in ongoing_coop_deals"
													:key="coopDeal.id"
												>
													<coop-item
														:coop-deal-goods="{
															...coopDeal,
															influencer: {
																id: influencer.id,
																name: influencer.name,
																logo_image_url: influencer.logo_image_url
															},
														}"
													></coop-item>
												</li>
											</ul>
										</div>
									</section>

									<!-- 진행 예정 -->
									<section>
										<h5><b>진행 예정인 공동구매 상품이에요</b></h5>
										<p
											v-if="upcoming_coop_deals.length < 1"
											class="mm_text-none"
										>
											<i class="ico_text-none"></i>예정된 공구 일정이 없습니다
										</p>
										<div
											v-else
											class="mm_product-list T=card"
										>
											<ul>
												<li
													v-for="coopDeal in upcoming_coop_deals"
													:key="coopDeal.id"
												>
													<coop-item
														:coop-deal-goods="{
															...coopDeal,
															influencer: {
																id: influencer.id,
																name: influencer.name,
																logo_image_url: influencer.logo_image_url
															},
														}"
														upcoming-date-type="date"
													></coop-item>
												</li>
											</ul>
										</div>
									</section>

									<!-- 재입고 예정 -->
									<section>
										<h5><b>재입고 예정인 공동구매 상품이에요</b></h5>
										<p
											v-if="ended_coop_deals.length < 1"
											class="mm_text-none"
										>
											<i class="ico_text-none"></i>마감된 공구 일정이 없습니다
										</p>
										<div
											v-else
											class="mm_product-list T=card"
										>
											<ul>
												<li
													v-for="coopDeal in ended_coop_deals"
													:key="coopDeal.id"
												>
													<coop-item
														:coop-deal-goods="{
															...coopDeal,
															influencer: {
																id: influencer.id,
																name: influencer.name,
																logo_image_url: influencer.logo_image_url
															},
														}"
													></coop-item>
												</li>
											</ul>
										</div>
									</section>
								</div>

								<!-- 매거진 -->
								<div class="m_minishop-magazine">
									<h4><b>Keeif 매거진</b></h4>
									<p
										v-if="showcases.length < 1"
										class="mm_text-none"
									>
										<i class="ico_text-none"></i>등록된 쇼케이스가 없습니다.
									</p>
									<ul v-else>
										<li
											v-for="showcase in showcases"
											:key="showcase.id"
										>
											<mm-link :to="{ name: 'ShowcaseDetail', params: { id: showcase.id } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_banner"
														:src="showcase.image_url"
													></lazyload>
													<figcaption>
														<p>{{ showcase.text_1 }}</p>
														<p>{{ showcase.text_2 }}</p>
													</figcaption>
												</figure>
											</mm-link>
											<!-- 쇼케이스에 등록된 첫 번째 상품 그룹 중 첫 번째 상품을 노출합니다 -->
											<div
												v-if="showcase.main_goods"
												class="mm_product-item"
											>
												<mm-link :to="{ name: 'ProductDetail', params: { id: showcase.main_goods.id } }">
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															:src="showcase.main_goods.thumbnail_url"
														></lazyload>
														<p
															v-if="showcase.main_goods.is_only_adult"
															class="text_adult"
														>
															<b class="mm_ir-blind">미성년자 구매불가</b>
															<i class="ico_adult"></i>
														</p>
														<figcaption>
															<p class="text_product">
																{{ showcase.main_goods.name }}
															</p>
															<p class="text_sale">
																{{ showcase.main_goods.sale_rate }}%
															</p>
															<p class="text_price">
																<strong>{{ number(showcase.main_goods.base_discounted_price) }}</strong>
															</p>
														</figcaption>
													</figure>
													<i class="ico_link"></i>
												</mm-link>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<app-footer></app-footer>
				</div>
			</div>

			<scroll-top v-if="isMounted"></scroll-top>
		</div>

		<app-toolbar></app-toolbar>

		<share v-if="shareStore.isShareOpen"></share>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed, watch, onMounted } from 'vue';
	import { useScroll } from '@vueuse/core';
	import { useScrollPositionStore } from '$/stores/useScrollPositionStore';
	import { useShareStore } from '$/stores/useShareStore';
	import { chunk } from '$/utils/chunk';
	import monsDate from '$/utils/date';
	import { useCart } from '$/composables/useCart';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useHead } from '$/composables/useHead';
	import { useInfluencer } from '$/composables/useInfluencer';
	import { useMiniShop } from '$/composables/useMiniShop';
	import NotFoundError from '$/errors/NotFoundError';
	import Lazyload from '@/component/Lazyload.vue';
	import ScrollTop from '@/component/ScrollTop.vue';
	import Share from '@/component/Share.vue';
	import Toggle from '@/component/Toggle.vue';
	import AppFooter from '@/component/app/AppFooter.vue';
	import AppToolbar from '@/component/app/AppToolbar.vue';
	import CoopItem from '@/custom/coop/component/CoopItem.vue';
	import MinishopFollower from '@/custom/minishop/component/MinishopFollower.vue';

	type CalendarDay = {
		value: DateHelper
		date: number
		outOfMonth: boolean
		isToday: boolean
	}

	type Schedule = {
		numbering: number,
		coopDeal: CoopDeal
		startOnWeekday: number
		durationInDay: number
		fromPrevWeek: boolean
		toNextWeek: boolean
	}

	type CalendarWeek = {
		schedules: Schedule[],
		days: CalendarDay[]
	}

	const props = defineProps<{
		id?: number
	}>();

	const shareStore = useShareStore();
	const { route, router, loading, isMember, bom, clearErrorWithHistoryBack } = useGlobalPageContext();
	const { number, newLineToBr, date, externalLink } = useFormatter();

	const { count: cartCount } = useCart();
	const { get, getId } = useMiniShop();
	const { follow, unFollow, checkFollow } = useInfluencer();

	const { applyPageContext, getCurrentPageContext } = useScrollPositionStore();

	const influencerId = ref(props.id);

	if (!influencerId.value && route.name == 'MiniShop') {
		influencerId.value = await getId(route.path.replace('/minishop/', ''));
	}

	if (!influencerId.value) {
		useErrorAlert('존재하지 않는 미니샵입니다.', {
			alertCallback: () => {
				clearErrorWithHistoryBack();
			},
		});
		throw new NotFoundError('존재하지 않는 미니샵입니다.');
	}

	const {
		influencer,
		upcoming_coop_deals,
		ongoing_coop_deals,
		ended_coop_deals,
		showcases,
	} = await get(influencerId.value);

	const minishopUrl = computed(() => influencer.minishop_url ? `${location.origin}/minishop/${influencer.minishop_url}` : '');

	const allCoopDeals = computed(() => {
		return upcoming_coop_deals
			.concat(ongoing_coop_deals, ended_coop_deals)
			.sort((first, second) => monsDate().diff(first.sell_start_at) > monsDate().diff(second.sell_start_at) ? -1 : 1);
	});

	useHead({ title: influencer.name });

	/** [달력] */
	const today = monsDate();
	const calendarMonth = ref(today.get('month'));
	const calendarYear = ref(today.get('year'));
	const currentCalendar = computed(() => monsDate(`${calendarYear.value}-${calendarMonth.value + 1}-01`));
	const isCalendarOnCurrent = computed(() => calendarMonth.value == today.get('month') && calendarYear.value == today.get('year'));
	const calendarOn = ref<boolean>(!!(getCurrentPageContext(route.path)?.optional?.calendarOn));

	/** [달력] 월 이동 */
	function moveMonth(direction: 'prev'|'next'|'default') {
		if (direction == 'default') {
			calendarMonth.value = today.get('month');
			calendarYear.value = today.get('year');
		}
		else if (direction == 'prev') {
			calendarYear.value = calendarMonth.value == 0 ? calendarYear.value - 1 : calendarYear.value;
			calendarMonth.value = calendarMonth.value == 0 ? 11 : calendarMonth.value - 1;
		}
		else {
			calendarYear.value = calendarMonth.value == 11 ? calendarYear.value + 1 : calendarYear.value;
			calendarMonth.value = calendarMonth.value == 11 ? 0 : calendarMonth.value + 1;
		}
	}

	function toggleCalendar(isActive: boolean) {
		applyPageContext({
			key: route.path,
			scrollTop: 0,
			optional: {
				calendarOn: isActive,
			},
		});
		moveMonth('default');
	}

	/** [달력] 날짜 리스트 */
	const calendarDays = computed<CalendarDay[][]>(() => {
		const startOfMonth = currentCalendar.value.startOf('M');
		const endOfMonth = currentCalendar.value.endOf('M');
		const startOfMonthWeekDay = startOfMonth.get('day');
		const endOfMonthWeekDay = endOfMonth.get('day');

		const daysOfThisMonth: CalendarDay[] = [...Array(endOfMonth.get('D')).keys()].map((day) => {
			const date = day + 1;
			const dateValue = monsDate(`${calendarYear.value}-${calendarMonth.value + 1}-${date}`);

			return {
				date,
				value: dateValue,
				outOfMonth: false,
				isToday: (day + 1) == today.get('date') && isCalendarOnCurrent.value,
			};
		});

		const startOfCalendarDay = startOfMonth.subtract(startOfMonthWeekDay, 'days').get('D');
		const endOfCalendarDay = endOfMonth.add(6 - endOfMonthWeekDay, 'days').get('D');

		const daysOfPreviousMonth: CalendarDay[] = [...Array(startOfMonthWeekDay).keys()].map((day) => {
			const date = day + startOfCalendarDay;

			return {
				date,
				value: monsDate(`${calendarYear.value}-${calendarMonth.value}-${date}`),
				outOfMonth: true,
				isToday: false,
			};
		});

		const daysOfNextMonth: CalendarDay[] = endOfMonthWeekDay < 6
			? [...Array(endOfCalendarDay).keys()].map((day) => {
				const date = day + 1;

				return {
					date,
					value: monsDate(`${calendarYear.value}-${calendarMonth.value + 2}-${date}`),
					outOfMonth: true,
					isToday: false,
				};
			})
			: [];

		const thisMonthCalendarDays = daysOfPreviousMonth.concat(daysOfThisMonth, daysOfNextMonth);

		return chunk(thisMonthCalendarDays, 7);
	});

	/** [달력] 이번주 리스트 */
	const thisWeek = computed<CalendarWeek|null>(() => {
		if (!isCalendarOnCurrent.value) {
			return null;
		}

		const week = calendarDays.value.find((week) => week.find(day => day.isToday)) || [];

		return toScheduledCalendarWeek(week);
	});

	/** [달력] 다음주 리스트 */
	const nextWeek = computed<CalendarWeek|null>(() => {
		if (!isCalendarOnCurrent.value || !thisWeek.value) {
			return null;
		}

		// (이번달)달력날짜 리스트에서 오늘날짜 기준 다음주 리스트 탐색. 탐색성공시 반환
		const thisWeekDayIndex = calendarDays.value.findIndex((week) => week.find(day => day.isToday));
		const nextWeek = calendarDays.value[thisWeekDayIndex + 1];
		if (nextWeek) {
			return toScheduledCalendarWeek(nextWeek);
		}
		// 달력날짜 리스트에서 다음주리스트 없는경우 (다음달에 있는경우) 날짜 리스트 생성하여 반환
		const lastCalendarDay = thisWeek.value.days[thisWeek.value.days.length - 1];
		const startOfWeek = lastCalendarDay.outOfMonth ? lastCalendarDay.date + 1 : 1;

		const week = [...Array(7).keys()].map(day => ({
			value: monsDate(`${calendarYear.value}-${calendarMonth.value + 2}-${startOfWeek + day}`),
			date: startOfWeek + day,
			outOfMonth: true,
			isToday: false,
		}));

		return toScheduledCalendarWeek(week);
	});

	/** [달력] (스케쥴 적용된)날짜리스트 */
	const calendarWithSchedules = computed<CalendarWeek[]>(() => {
		return calendarDays.value.map((week) => {
			return toScheduledCalendarWeek(week);
		});
	});

	/** [달력] 날짜 리스트에 스케쥴 적용 */
	function toScheduledCalendarWeek(weekdays: CalendarDay[]): CalendarWeek {
		const schedules: Schedule[] = [];
		allCoopDeals.value.forEach((coopDeal, index) => {
			weekdays.forEach(weekday => {
				if (
					!weekday.value.isSameOrAfter(coopDeal.sell_start_at, 'day')
					|| !weekday.value.isSameOrBefore(coopDeal.sell_end_at, 'day')
				) {
					return;
				}
				const targetSchedule = schedules.find(schedule => schedule.coopDeal.id == coopDeal.id);
				if (!targetSchedule) {
					const sellStartAt = monsDate(coopDeal.sell_start_at).format('YYYY-MM-DD');
					const sellEndAt = monsDate(coopDeal.sell_end_at).format('YYYY-MM-DD');

					const durationThisWeekDay = monsDate(sellEndAt).diff(weekday.value.toDate(), 'day') + 1;

					const weekDayLeft = 7 - weekday.value.get('day');

					const fromPrevWeek = weekday.value.isAfter(sellStartAt);
					const toNextWeek = weekday.value.add(weekDayLeft - 1, 'day').isBefore(sellEndAt);

					/** 3개 이상 미노출처리 */
					if (schedules.length > 2) {
						schedules.shift();
					}

					schedules.push({
						numbering: index + 1,
						coopDeal,
						startOnWeekday: fromPrevWeek ? weekday.value.get('day') : monsDate(sellStartAt).get('day'),
						durationInDay: toNextWeek ? weekDayLeft : durationThisWeekDay,
						fromPrevWeek,
						toNextWeek,
					});

				}
			});
		});

		return {
			schedules,
			days: weekdays,
		};
	}

	/** [팔로우] 제어*/
	const isFollow = ref(false);
	const isFollowAlertOn = ref(false);
	if (isMember.value && influencerId.value) {
		isFollow.value = (await checkFollow([influencerId.value]))[0].is_following;
	}

	/** 팔로우 toggle */
	async function changeFollow() {
		if (!influencerId.value) {
			return;
		}
		if (!isMember.value) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: router.currentRoute.value.fullPath,
						},
					});
				}
			});
		}
		loading.show();
		try {
			if (!isFollow.value) {
				await follow(influencerId.value);
				isFollow.value = true;
				++influencer.follower_count;
			}
			else {
				await unFollow(influencerId.value);
				isFollow.value = false;
				--influencer.follower_count;
			}

			isFollowAlertOn.value = isFollow.value;
			if (isFollowAlertOn.value) {
				setTimeout(() => {
					isFollowAlertOn.value = false;
				}, 4000);
			}
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	// 스크롤 시 헤더 투명도 조절
	const $header = ref<HTMLElement|null>(null);
	const $scroller = ref<HTMLElement|null>(null);
	const classHeaderOn = 'S=header-on';

	const smooth = ref(false);
	const behavior = computed(() => smooth.value ? 'smooth' : 'auto');
	const { y } = useScroll($scroller, { behavior });

	watch(y, (_currentScrollY) => {
		if (!$header.value || !$scroller.value) return;

		const opacity = (_currentScrollY / 115) < 1 ? (_currentScrollY / 115) : 1;
		$header.value.style.backgroundColor = `rgba(255, 255, 255, ${ opacity } )`;

		if (opacity >= 1) $header.value.classList.add(classHeaderOn);
		else $header.value.classList.remove(classHeaderOn);

	});

	/** 브라우저 뒤로가기와, 자체 버튼 뒤로가기 처리를 위해 필요 **/
	function historyBack() {
		if (window.history.state.position === 0
			&& window.history.state.back == null
		) {
			router.push('/');

			return;
		}

		route.meta.pushedBack = true;
		router.go(-1);
	}

	const isMounted = ref<boolean>(false);

	onMounted(() => {
		isMounted.value = true;
	});
</script>