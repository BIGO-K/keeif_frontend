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
					@click.prevent="$router.go(-1)"
				>
					<b class="mm_ir-blind">닫기</b><i class="ico_close"></i>
				</a>
			</div>
			<div class="mm_rside">
				<mm-link :to="{ name: 'Cart' }">
					<i class="ico_cart"></i><strong class="text_badge">2</strong><b class="mm_ir-blind">장바구니</b>
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
									class="mm_bg-cover image_background"
									src="/image/_sample/influencer_profile1.jpg"
								></lazyload>
								<figure>
									<lazyload
										class="mm_bg-cover"
										src="/image/_sample/influencer_profile1.jpg"
									></lazyload>
									<figcaption>
										<h3><b>김베리</b><small>팔로워<strong>5,296</strong></small></h3>
										<strong>먹방요정 KIM BERRY</strong>
										<p>1분먹방 | 찐맛집 | 신상리뷰<br> 9/17(일) ~ 9/18(월)<br> 품절 마라탕 OPEN 많관부</p>
										<toggle
											v-model="isFollow"
											class="mm_btn T=sm T=line btn_follow"
											title="팔로잉"
											active-title="팔로잉 해제"
											@click="followChange"
										>
											<i class="ico_follow"></i>
											<b>팔로우</b>
										</toggle>
										<div class="m_minishop-follow">
											<i class="ico_follow-alert"></i>
											<p>인플루언서 <strong>김베리</strong>님 팔로우가 시작되었습니다.</p>
										</div>
										<div class="mm_btn_box">
											<mm-link
												class="btn_instagram"
												to="http://"
											>
												<i class="ico_instagram"></i><b class="mm_ir-blind">인스타그램</b>
											</mm-link>
											<!-- SNS 공유 -->
											<button
												type="button"
												class="btn_url"
												@click="shareStore.open"
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
										<h4><b>2023</b><b>9</b></h4>
										<button
											type="button"
											class="btn_prev-month"
										>
											<i class="ico_calendar-prev"></i><b class="mm_ir-blind">이전 달</b>
										</button>
										<button
											type="button"
											class="btn_next-month"
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
											시작하는 날짜에 위치하도록 left값을 %로 조절합니다. (화요일날 시작한다면 left: 300%)
											a태그의 width 또한 그 주에 얼만큼 지속되는지 %로 지정하여 줍니다. (화요일에 시작해서 수요일에 끝난다면 width: 200%)
											table에 표시되는 공동구매 아이템 a태그는 상품 당 순서대로 'btn_coopbuy1' 'btn_coopbuy2' 'btn_coopbuy3' ... 클래스를 추가해 색을 표시합니다.
											표시되는 주에 공동구매 시작 날짜, 종료 날짜 포함에 따라 'T=start' 'T=end' 클래스를 추가합니다.

											현재 보여지는 월에 해당되는 일이 아니라면 td에 'T=calendar-out' 클래스를 추가합니다.

											오늘 날짜 td에 'T=calendar-today' 클래스를 추가합니다.
											오늘이 포함된 주 tr에 'T=calendar-thisweek' 클래스를 추가합니다.

											달력이 접혀있을 때 이번주와 다음주를 보여주기 위해 다음달에 첫번째 주를 마지막 tr로 표시하고 'T=calendar-next' 클래스를 추가합니다.
										-->
										<tbody>
											<tr>
												<td class="T=calendar-out">
													<b>27</b>
													<mm-link
														class="btn_coopbuy1 T=start T=end"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 100%;width: 600%;"
													>
														<b>드시온 귀리렌틸콩 곤약밥</b>
														<b class="mm_ir-blind">2023년 8월 28일부터 2023년 9월 2일까지</b>
													</mm-link>
													<mm-link
														class="btn_coopbuy2 T=start T=end"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 300%;width: 400%;"
													>
														<b>마이해빗 츄어블 철분 크랜베리 맛</b>
														<b class="mm_ir-blind">2023년 8월 30일부터 2023년 9월 2일까지</b>
													</mm-link>
													<mm-link
														class="btn_coopbuy3 T=start"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 600%;width: 100%;"
													>
														<b>아르히 LPT 노워시 트리트먼트</b>
														<b class="mm_ir-blind">2023년 8월 30일부터 2023년 9월 2일까지</b>
													</mm-link>
												</td>
												<td class="T=calendar-out">
													<b>28</b>
												</td>
												<td class="T=calendar-out">
													<b>29</b>
												</td>
												<td class="T=calendar-out">
													<b>30</b>
												</td>
												<td class="T=calendar-out">
													<b>31</b>
												</td>
												<td><b>1</b></td>
												<td><b>2</b></td>
											</tr>
											<tr>
												<td>
													<b>3</b>
													<mm-link
														class="btn_coopbuy4 T=start T=end"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 100%;width: 600%;"
													>
														<b>마이해빗 따움차 이너뷰티차</b>
														<b class="mm_ir-blind">2023년 9월 4일부터 2023년 9월 9일까지</b>
													</mm-link>
													<mm-link
														class="btn_coopbuy5 T=start"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 300%;width: 400%;"
													>
														<b>마이해빗 모로오렌지 클렌즈</b>
														<b class="mm_ir-blind">2023년 9월 6일부터 2023년 9월 9일까지</b>
													</mm-link>
													<mm-link
														class="btn_coopbuy3 T=end"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 0%;width: 100%;"
													>
														<b>아르히 LPT 노워시 트리트먼트</b>
														<b class="mm_ir-blind">2023년 8월 30일부터 2023년 9월 2일까지</b>
													</mm-link>
												</td>
												<td><b>4</b></td>
												<td><b>5</b></td>
												<td><b>6</b></td>
												<td><b>7</b></td>
												<td><b>8</b></td>
												<td><b>9</b></td>
											</tr>
											<tr>
												<td>
													<b>10</b>
													<mm-link
														class="btn_coopbuy5 T=end"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 0%;width: 400%;"
													>
														<b>마이해빗 모로오렌지 클렌즈</b>
														<b class="mm_ir-blind">2023년 9월 6일부터 2023년 9월 9일까지</b>
													</mm-link>
													<mm-link
														class="btn_coopbuy6 T=start"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 100%;width: 600%;"
													>
														<b>아르히 LPT 노워시 트리트먼트</b>
														<b class="mm_ir-blind">2023년 9월 11일부터 2023년 9월 25일까지</b>
													</mm-link>
													<mm-link
														class="btn_coopbuy7 T=start T=end"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 100%;width: 600%;"
													>
														<b>드시온 귀리렌틸콩 곤약밥</b>
														<b class="mm_ir-blind">2023년 9월 11일부터 2023년 9월 16일까지</b>
													</mm-link>
												</td>
												<td><b>11</b></td>
												<td><b>12</b></td>
												<td><b>13</b></td>
												<td><b>14</b></td>
												<td><b>15</b></td>
												<td><b>16</b></td>
											</tr>
											<tr>
												<td>
													<b>17</b>
													<mm-link
														class="btn_coopbuy6"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 0%;width: 100%;"
													>
														<b>아르히 LPT 노워시 트리트먼트</b>
														<b class="mm_ir-blind">2023년 9월 11일부터 2023년 9월 25일까지</b>
													</mm-link>
													<mm-link
														class="btn_coopbuy8 T=start T=end"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 0%;width: 400%;"
													>
														<b>마이해빗 츄어블 철분 크랜베리 맛</b>
														<b class="mm_ir-blind">2023년 9월 17일부터 2023년 9월 20일까지</b>
													</mm-link>
												</td>
												<td><b>18</b></td>
												<td><b>19</b></td>
												<td><b>20</b></td>
												<td><b>21</b></td>
												<td><b>22</b></td>
												<td><b>23</b></td>
											</tr>
											<tr class="T=calendar-thisweek">
												<td>
													<b>24</b>
													<mm-link
														class="btn_coopbuy6 T=end"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 0%;width: 200%;"
													>
														<b>아르히 LPT 노워시 트리트먼트</b>
														<b class="mm_ir-blind">2023년 9월 11일부터 2023년 9월 25일까지</b>
													</mm-link>
												</td>
												<td><b>25</b></td>
												<td class="T=calendar-today">
													<b>26</b>
												</td>
												<td><b>27</b></td>
												<td><b>28</b></td>
												<td><b>29</b></td>
												<td><b>30</b></td>
											</tr>
											<tr class="T=calendar-next">
												<td>
													<b>1</b>
													<mm-link
														class="btn_coopbuy9 T=start T=end"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 200%;width: 400%;"
													>
														<b>마이해빗 츄어블 철분 크랜베리 맛</b>
														<b class="mm_ir-blind">2023년 10월 3일부터 2023년 10월 6일까지</b>
													</mm-link>
												</td>
												<td><b>2</b></td>
												<td><b>3</b></td>
												<td><b>4</b></td>
												<td><b>5</b></td>
												<td><b>6</b></td>
												<td><b>7</b></td>
											</tr>
										</tbody>
									</table>
									<!-- (D) 이전 달, 다음 달 표시 예시 -->
									<table class="T=calendar-ready">
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
										<tbody>
											<tr>
												<td>
													<b>1</b>
													<mm-link
														class="btn_coopbuy1 T=start T=end"
														:to="{ name: 'ProductDetail', params: { id: 123 } }"
														style="left: 200%;width: 400%;"
													>
														<b>마이해빗 츄어블 철분 크랜베리 맛</b>
														<b class="mm_ir-blind">2023년 10월 3일부터 2023년 10월 6일까지</b>
													</mm-link>
												</td>
												<td><b>2</b></td>
												<td><b>3</b></td>
												<td><b>4</b></td>
												<td><b>5</b></td>
												<td><b>6</b></td>
												<td><b>7</b></td>
											</tr>
											<tr>
												<td><b>8</b></td>
												<td><b>9</b></td>
												<td><b>10</b></td>
												<td><b>11</b></td>
												<td><b>12</b></td>
												<td><b>13</b></td>
												<td><b>14</b></td>
											</tr>
											<tr>
												<td><b>15</b></td>
												<td><b>16</b></td>
												<td><b>17</b></td>
												<td><b>18</b></td>
												<td><b>19</b></td>
												<td><b>20</b></td>
												<td><b>21</b></td>
											</tr>
											<tr>
												<td><b>22</b></td>
												<td><b>23</b></td>
												<td><b>24</b></td>
												<td><b>25</b></td>
												<td><b>26</b></td>
												<td><b>27</b></td>
												<td><b>28</b></td>
											</tr>
											<tr>
												<td><b>29</b></td>
												<td><b>30</b></td>
												<td><b>31</b></td>
												<td class="T=calendar-out">
													<b>1</b>
												</td>
												<td class="T=calendar-out">
													<b>2</b>
												</td>
												<td class="T=calendar-out">
													<b>3</b>
												</td>
												<td class="T=calendar-out">
													<b>4</b>
												</td>
											</tr>
										</tbody>
									</table>
									<toggle
										class="btn_toggle"
										active-class="S=open"
										title="펼쳐보기"
										active-title="접어보기"
										parent-selector=".m_minishop-calendar"
									>
										<i class="ico_toggle-bold"></i>
									</toggle>
								</div>

								<!-- 공동구매 -->
								<div class="mm_coopbuy">
									<h4><b>9.12</b></h4>
									<!-- 진행중 -->
									<section>
										<h5><b>진행 중인 공동구매 상품이에요</b></h5>
										<p
											v-if="progressItems.length < 1"
											class="mm_text-none"
										>
											<i class="ico_text-none"></i>진행중인 공구 일정이 없습니다
										</p>
										<div
											v-else
											class="mm_product-list T=card"
										>
											<ul>
												<li>
													<div class="mm_product-item">
														<mm-link
															class="btn_influencer"
															:to="{ name: 'MiniShop', params: { id: 123 } }"
														>
															<lazyload
																class="mm_bg-cover"
																src="/image/_sample/influencer_profile1.jpg"
															></lazyload>
															<b>Kanghana</b>
														</mm-link>
														<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
															<figure>
																<lazyload
																	class="mm_bg-cover image_product"
																	src="/image/_sample/coopbuy_banner1.jpg"
																></lazyload>
																<p
																	v-if="false"
																	class="text_adult"
																>
																	<b class="mm_ir-blind">미성년자 구매불가</b>
																	<i class="ico_adult"></i>
																</p>
																<div>
																	<b><i style="width: 60%;"></i></b>
																	<dl><dt>남은시간</dt><dd>D-10<strong>21<span>:</span>35<span>:</span>54</strong></dd></dl>
																</div>
																<figcaption>
																	<p class="text_brand">
																		마이해빗
																	</p>
																	<p class="text_product">
																		[8월 1주차 마지막 공구] 마이해빗 모로오렌지 클렌즈 100ml x 9병
																	</p>
																	<p class="text_sale">
																		20%
																	</p>
																	<p class="text_price">
																		<strong>112,000</strong><del><span>140,000</span></del>
																	</p>
																	<div class="mm_tag-list">
																		<dawn-tag v-if="true"></dawn-tag>
																		<b class="mm_tag T=square">무료배송</b>
																		<b class="mm_tag T=square">쿠폰</b>
																	</div>
																</figcaption>
															</figure>
														</mm-link>
													</div>
												</li>
												<li>
													<div class="mm_product-item">
														<mm-link
															class="btn_influencer"
															:to="{ name: 'MiniShop', params: { id: 123 } }"
														>
															<lazyload
																class="mm_bg-cover"
																src="/image/_sample/influencer_profile1.jpg"
															></lazyload>
															<b>Kimberry</b>
														</mm-link>
														<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
															<figure>
																<lazyload
																	class="mm_bg-cover image_product"
																	src="/image/_sample/coopbuy_banner2.jpg"
																></lazyload>
																<p
																	v-if="false"
																	class="text_adult"
																>
																	<b class="mm_ir-blind">미성년자 구매불가</b>
																	<i class="ico_adult"></i>
																</p>
																<div>
																	<b><i style="width: 80%;"></i></b>
																	<dl><dt>남은시간</dt><dd>D-8<strong>21<span>:</span>35<span>:</span>54</strong></dd></dl>
																</div>
																<figcaption>
																	<p class="text_brand">
																		마이해빗
																	</p>
																	<p class="text_product">
																		[8월 1주차 마지막 공구] 마이해빗 츄어블 철분 크랜베리 맛 600mg X 30캡슐
																	</p>
																	<p class="text_sale">
																		20%
																	</p>
																	<p class="text_price">
																		<strong>112,000</strong><del><span>140,000</span></del>
																	</p>
																	<div class="mm_tag-list">
																		<dawn-tag v-if="true"></dawn-tag>
																		<b class="mm_tag T=square">무료배송</b>
																		<b class="mm_tag T=square">쿠폰</b>
																	</div>
																</figcaption>
															</figure>
														</mm-link>
													</div>
												</li>
												<li>
													<div class="mm_product-item">
														<mm-link
															class="btn_influencer"
															:to="{ name: 'MiniShop', params: { id: 123 } }"
														>
															<lazyload
																class="mm_bg-cover"
																src="/image/_sample/influencer_profile1.jpg"
															></lazyload>
															<b>Yeonjeong</b>
														</mm-link>
														<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
															<figure>
																<lazyload
																	class="mm_bg-cover image_product"
																	src="/image/_sample/coopbuy_banner3.jpg"
																></lazyload>
																<p
																	v-if="false"
																	class="text_adult"
																>
																	<b class="mm_ir-blind">미성년자 구매불가</b>
																	<i class="ico_adult"></i>
																</p>
																<div>
																	<b><i style="width: 20%;"></i></b>
																	<dl><dt>남은시간</dt><dd>D-10<strong>21<span>:</span>35<span>:</span>54</strong></dd></dl>
																</div>
																<figcaption>
																	<p class="text_brand">
																		마이해빗
																	</p>
																	<p class="text_product">
																		[8월 1주차 마지막 공구] 마이해빗 모로오렌지 클렌즈 100ml x 9병
																	</p>
																	<p class="text_sale">
																		20%
																	</p>
																	<p class="text_price">
																		<strong>112,000</strong><del><span>140,000</span></del>
																	</p>
																	<div class="mm_tag-list">
																		<dawn-tag v-if="true"></dawn-tag>
																		<b class="mm_tag T=square">무료배송</b>
																		<b class="mm_tag T=square">쿠폰</b>
																	</div>
																</figcaption>
															</figure>
														</mm-link>
													</div>
												</li>
											</ul>
										</div>
									</section>

									<!-- 진행 예정 -->
									<section>
										<h5><b>진행 예정인 공동구매 상품이에요</b></h5>
										<p
											v-if="upcomingItems.length < 1"
											class="mm_text-none"
										>
											<i class="ico_text-none"></i>예정된 공구 일정이 없습니다
										</p>
										<div
											v-else
											class="mm_product-list T=card"
										>
											<ul>
												<li>
													<div class="mm_product-item">
														<mm-link
															class="btn_influencer"
															:to="{ name: 'MiniShop', params: { id: 123 } }"
														>
															<lazyload
																class="mm_bg-cover"
																src="/image/_sample/influencer_profile1.jpg"
															></lazyload>
															<b>Kanghana</b>
														</mm-link>
														<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
															<figure>
																<lazyload
																	class="mm_bg-cover image_product"
																	src="/image/_sample/coopbuy_banner4.jpg"
																></lazyload>
																<p><span><strong>9.12</strong>오후 7시 30분 진행 예정</span></p>
																<p
																	v-if="false"
																	class="text_adult"
																>
																	<b class="mm_ir-blind">미성년자 구매불가</b>
																	<i class="ico_adult"></i>
																</p>
																<figcaption>
																	<p class="text_brand">
																		마이해빗
																	</p>
																	<p class="text_product">
																		[8월 1주차 마지막 공구] 마이해빗 발포 다이어트 가벼운 습관 가르시니아 (4,100mgX10정X3통)
																	</p>
																	<p class="text_sale">
																		20%
																	</p>
																	<p class="text_price">
																		<strong>112,000</strong><del><span>140,000</span></del>
																	</p>
																	<div class="mm_tag-list">
																		<dawn-tag v-if="true"></dawn-tag>
																		<b class="mm_tag T=square">무료배송</b>
																		<b class="mm_tag T=square">쿠폰</b>
																	</div>
																</figcaption>
															</figure>
														</mm-link>
													</div>
												</li>
												<li>
													<div class="mm_product-item">
														<mm-link
															class="btn_influencer"
															:to="{ name: 'MiniShop', params: { id: 123 } }"
														>
															<lazyload
																class="mm_bg-cover"
																src="/image/_sample/influencer_profile1.jpg"
															></lazyload>
															<b>Kimberry</b>
														</mm-link>
														<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
															<figure>
																<lazyload
																	class="mm_bg-cover image_product"
																	src="/image/_sample/coopbuy_banner5.jpg"
																></lazyload>
																<p><span><strong>9.12</strong>오후 5시 진행 예정</span></p>
																<p
																	v-if="false"
																	class="text_adult"
																>
																	<b class="mm_ir-blind">미성년자 구매불가</b>
																	<i class="ico_adult"></i>
																</p>
																<figcaption>
																	<p class="text_brand">
																		삐아
																	</p>
																	<p class="text_product">
																		[먼지나방 공동개발] 삐아 레디 투 웨어 워터 립스틱
																	</p>
																	<p class="text_sale">
																		20%
																	</p>
																	<p class="text_price">
																		<strong>112,000</strong><del><span>140,000</span></del>
																	</p>
																	<div class="mm_tag-list">
																		<dawn-tag v-if="true"></dawn-tag>
																		<b class="mm_tag T=square">무료배송</b>
																		<b class="mm_tag T=square">쿠폰</b>
																	</div>
																</figcaption>
															</figure>
														</mm-link>
													</div>
												</li>
												<li>
													<div class="mm_product-item">
														<mm-link
															class="btn_influencer"
															:to="{ name: 'MiniShop', params: { id: 123 } }"
														>
															<lazyload
																class="mm_bg-cover"
																src="/image/_sample/influencer_profile1.jpg"
															></lazyload>
															<b>Yeonjeong</b>
														</mm-link>
														<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
															<figure>
																<lazyload
																	class="mm_bg-cover image_product"
																	src="/image/_sample/coopbuy_banner6.jpg"
																></lazyload>
																<p><span><strong>9.12</strong>오후 5시 진행 예정</span></p>
																<p
																	v-if="false"
																	class="text_adult"
																>
																	<b class="mm_ir-blind">미성년자 구매불가</b>
																	<i class="ico_adult"></i>
																</p>
																<figcaption>
																	<p class="text_brand">
																		마이해빗
																	</p>
																	<p class="text_product">
																		[8월 1주차 마지막 공구] 하루 콜라겐 아이스크립 100ml 4개입
																	</p>
																	<p class="text_sale">
																		20%
																	</p>
																	<p class="text_price">
																		<strong>112,000</strong><del><span>140,000</span></del>
																	</p>
																	<div class="mm_tag-list">
																		<dawn-tag v-if="true"></dawn-tag>
																		<b class="mm_tag T=square">무료배송</b>
																		<b class="mm_tag T=square">쿠폰</b>
																	</div>
																</figcaption>
															</figure>
														</mm-link>
													</div>
												</li>
											</ul>
										</div>
									</section>

									<!-- 재입고 예정 -->
									<section>
										<h5><b>재입고 예정인 공동구매 상품이에요</b></h5>
										<p
											v-if="endItems.length < 1"
											class="mm_text-none"
										>
											<i class="ico_text-none"></i>마감된 공구 일정이 없습니다
										</p>
										<div
											v-else
											class="mm_product-list T=card"
										>
											<ul>
												<li>
													<div class="mm_product-item">
														<mm-link
															class="btn_influencer"
															:to="{ name: 'MiniShop', params: { id: 123 } }"
														>
															<lazyload
																class="mm_bg-cover"
																src="/image/_sample/influencer_profile1.jpg"
															></lazyload>
															<b>Kanghana</b>
														</mm-link>
														<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
															<figure>
																<lazyload
																	class="mm_bg-cover image_product"
																	src="/image/_sample/coopbuy_banner7.jpg"
																></lazyload>
																<p><span><strong>Coming soon</strong>곧 다시 만나요!</span></p>
																<p
																	v-if="false"
																	class="text_adult"
																>
																	<b class="mm_ir-blind">미성년자 구매불가</b>
																	<i class="ico_adult"></i>
																</p>
																<p
																	v-if="false"
																	class="text_adult"
																>
																	<b class="mm_ir-blind">미성년자 구매불가</b>
																	<i class="ico_adult"></i>
																</p>
																<figcaption>
																	<p class="text_brand">
																		한방케어
																	</p>
																	<p class="text_product">
																		[10월 1주차 마지막 공구] 6년근 홍삼고농충액 오늘 홍삼 30포X3세트
																	</p>
																	<p class="text_sale">
																		20%
																	</p>
																	<p class="text_price">
																		<strong>112,000</strong><del><span>140,000</span></del>
																	</p>
																	<div class="mm_tag-list">
																		<dawn-tag v-if="true"></dawn-tag>
																		<b class="mm_tag T=square">무료배송</b>
																		<b class="mm_tag T=square">쿠폰</b>
																	</div>
																</figcaption>
															</figure>
														</mm-link>
													</div>
												</li>
												<li>
													<div class="mm_product-item">
														<mm-link
															class="btn_influencer"
															:to="{ name: 'MiniShop', params: { id: 123 } }"
														>
															<lazyload
																class="mm_bg-cover"
																src="/image/_sample/influencer_profile1.jpg"
															></lazyload>
															<b>Kimberry</b>
														</mm-link>
														<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
															<figure>
																<lazyload
																	class="mm_bg-cover image_product"
																	src="/image/_sample/coopbuy_banner8.jpg"
																></lazyload>
																<p><span><strong>Coming soon</strong>곧 다시 만나요!</span></p>
																<p
																	v-if="false"
																	class="text_adult"
																>
																	<b class="mm_ir-blind">미성년자 구매불가</b>
																	<i class="ico_adult"></i>
																</p>
																<figcaption>
																	<p class="text_brand">
																		트위그뉴욕
																	</p>
																	<p class="text_product">
																		[10월 1주차 마지막 공구] 배첼러버튼 & 데이지체인 디저트 세트
																	</p>
																	<p class="text_sale">
																		20%
																	</p>
																	<p class="text_price">
																		<strong>112,000</strong><del><span>140,000</span></del>
																	</p>
																	<div class="mm_tag-list">
																		<dawn-tag v-if="true"></dawn-tag>
																		<b class="mm_tag T=square">무료배송</b>
																		<b class="mm_tag T=square">쿠폰</b>
																	</div>
																</figcaption>
															</figure>
														</mm-link>
													</div>
												</li>
												<li>
													<div class="mm_product-item">
														<mm-link
															class="btn_influencer"
															:to="{ name: 'MiniShop', params: { id: 123 } }"
														>
															<lazyload
																class="mm_bg-cover"
																src="/image/_sample/influencer_profile1.jpg"
															></lazyload>
															<b>Yeonjeong</b>
														</mm-link>
														<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
															<figure>
																<lazyload
																	class="mm_bg-cover image_product"
																	src="/image/_sample/coopbuy_banner9.jpg"
																></lazyload>
																<p><span><strong>Coming soon</strong>곧 다시 만나요!</span></p>
																<p
																	v-if="false"
																	class="text_adult"
																>
																	<b class="mm_ir-blind">미성년자 구매불가</b>
																	<i class="ico_adult"></i>
																</p>
																<figcaption>
																	<p class="text_brand">
																		피브
																	</p>
																	<p class="text_product">
																		[NEW 컬러] 컬러 세럼 미니 & 컬러 드롭 포마이핑크 컬렉션(7Color)
																	</p>
																	<p class="text_sale">
																		20%
																	</p>
																	<p class="text_price">
																		<strong>112,000</strong><del><span>140,000</span></del>
																	</p>
																	<div class="mm_tag-list">
																		<dawn-tag v-if="true"></dawn-tag>
																		<b class="mm_tag T=square">무료배송</b>
																		<b class="mm_tag T=square">쿠폰</b>
																	</div>
																</figcaption>
															</figure>
														</mm-link>
													</div>
												</li>
											</ul>
										</div>
									</section>
								</div>

								<!-- 매거진 -->
								<div class="m_minishop-magazine">
									<h4><b>Keeif 매거진</b></h4>
									<ul>
										<li>
											<mm-link :to="{ name: 'ShowcaseDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_banner"
														src="/image/_sample/minishop_magazine_banner1.jpg"
													></lazyload>
													<figcaption>
														<p>당신의 소중한 일상을 위한 건강한 포뮬러 마이해빗</p>
														<p>지치고 피곤한 하루 어떻게 마무리 하고 있나요? 온종일 쌓여버린 피곤함과 스트레스, 씻어내고 싶지 않나요? 당신의 하루에 기분 좋은 순간을 전하는 비건 라이프 스타일 브랜드 마이해빗</p>
													</figcaption>
												</figure>
											</mm-link>
											<!-- 쇼케이스에 등록된 첫 번째 상품 그룹 중 첫 번째 상품을 노출합니다 -->
											<div class="mm_product-item">
												<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															src="/image/_sample/prod_x1_1.png"
														></lazyload>
														<p
															v-if="false"
															class="text_adult"
														>
															<b class="mm_ir-blind">미성년자 구매불가</b>
															<i class="ico_adult"></i>
														</p>
														<figcaption>
															<p class="text_product">
																마이해빗 츄어블 철분 크랜베리 맛
															</p>
															<p class="text_sale">
																20%
															</p>
															<p class="text_price">
																<strong>112,000</strong>
															</p>
														</figcaption>
													</figure>
													<i class="ico_link"></i>
												</mm-link>
											</div>
										</li>
										<li>
											<mm-link :to="{ name: 'ShowcaseDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_banner"
														src="/image/_sample/minishop_magazine_banner2.jpg"
													></lazyload>
													<figcaption>
														<p>바라만 봐도 매일이 행복해지는 라이프 스타일 드시온</p>
														<p>지치고 피곤한 하루 어떻게 마무리 하고 있나요? 온종일 쌓여버린 피곤함과 스트레스, 씻어내고 싶지 않나요? 당신의 하루에 기분 좋은 순간을 전하는 비건 라이프 스타일 브랜드 마이해빗</p>
													</figcaption>
												</figure>
											</mm-link>
											<!-- 쇼케이스에 등록된 첫 번째 상품 그룹 중 첫 번째 상품을 노출합니다 -->
											<div class="mm_product-item">
												<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															src="/image/_sample/prod_x1_2.png"
														></lazyload>
														<p
															v-if="false"
															class="text_adult"
														>
															<b class="mm_ir-blind">미성년자 구매불가</b>
															<i class="ico_adult"></i>
														</p>
														<figcaption>
															<p class="text_product">
																마이해빗 츄어블 철분 크랜베리 맛
															</p>
															<p class="text_sale">
																20%
															</p>
															<p class="text_price">
																<strong>112,000</strong>
															</p>
														</figcaption>
													</figure>
													<i class="ico_link"></i>
												</mm-link>
											</div>
										</li>
										<li>
											<mm-link :to="{ name: 'ShowcaseDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_banner"
														src="/image/_sample/minishop_magazine_banner3.jpg"
													></lazyload>
													<figcaption>
														<p>매일 챙기는 가벼운 습관 따뜻하게 비우는 따움차</p>
														<p>지치고 피곤한 하루 어떻게 마무리 하고 있나요? 온종일 쌓여버린 피곤함과 스트레스, 씻어내고 싶지 않나요? 당신의 하루에 기분 좋은 순간을 전하는 비건 라이프 스타일 브랜드 마이해빗</p>
													</figcaption>
												</figure>
											</mm-link>
											<!-- 쇼케이스에 등록된 첫 번째 상품 그룹 중 첫 번째 상품을 노출합니다 -->
											<div class="mm_product-item">
												<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															src="/image/_sample/prod_x1_3.png"
														></lazyload>
														<p
															v-if="false"
															class="text_adult"
														>
															<b class="mm_ir-blind">미성년자 구매불가</b>
															<i class="ico_adult"></i>
														</p>
														<figcaption>
															<p class="text_product">
																마이해빗 츄어블 철분 크랜베리 맛
															</p>
															<p class="text_sale">
																20%
															</p>
															<p class="text_price">
																<strong>112,000</strong>
															</p>
														</figcaption>
													</figure>
													<i class="ico_link"></i>
												</mm-link>
											</div>
										</li>
										<li>
											<mm-link :to="{ name: 'ShowcaseDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_banner"
														src="/image/_sample/minishop_magazine_banner4.jpg"
													></lazyload>
													<figcaption>
														<p>뷰티 말고 이너 뷰티, 내 몸을 위한 하루 한잔</p>
														<p>지치고 피곤한 하루 어떻게 마무리 하고 있나요? 온종일 쌓여버린 피곤함과 스트레스, 씻어내고 싶지 않나요? 당신의 하루에 기분 좋은 순간을 전하는 비건 라이프 스타일 브랜드 마이해빗</p>
													</figcaption>
												</figure>
											</mm-link>
											<!-- 쇼케이스에 등록된 첫 번째 상품 그룹 중 첫 번째 상품을 노출합니다 -->
											<div class="mm_product-item">
												<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															src="/image/_sample/prod_x1_4.png"
														></lazyload>
														<p
															v-if="false"
															class="text_adult"
														>
															<b class="mm_ir-blind">미성년자 구매불가</b>
															<i class="ico_adult"></i>
														</p>
														<figcaption>
															<p class="text_product">
																마이해빗 츄어블 철분 크랜베리 맛
															</p>
															<p class="text_sale">
																20%
															</p>
															<p class="text_price">
																<strong>112,000</strong>
															</p>
														</figcaption>
													</figure>
													<i class="ico_link"></i>
												</mm-link>
											</div>
										</li>
										<li>
											<mm-link :to="{ name: 'ShowcaseDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_banner"
														src="/image/_sample/minishop_magazine_banner5.jpg"
													></lazyload>
													<figcaption>
														<p>건강하게 채우는 손상모를 위한 근본적인 해결책</p>
														<p>지치고 피곤한 하루 어떻게 마무리 하고 있나요? 온종일 쌓여버린 피곤함과 스트레스, 씻어내고 싶지 않나요? 당신의 하루에 기분 좋은 순간을 전하는 비건 라이프 스타일 브랜드 마이해빗</p>
													</figcaption>
												</figure>
											</mm-link>
											<!-- 쇼케이스에 등록된 첫 번째 상품 그룹 중 첫 번째 상품을 노출합니다 -->
											<div class="mm_product-item">
												<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															src="/image/_sample/prod_x1_5.png"
														></lazyload>
														<p
															v-if="false"
															class="text_adult"
														>
															<b class="mm_ir-blind">미성년자 구매불가</b>
															<i class="ico_adult"></i>
														</p>
														<figcaption>
															<p class="text_product">
																마이해빗 츄어블 철분 크랜베리 맛
															</p>
															<p class="text_sale">
																20%
															</p>
															<p class="text_price">
																<strong>112,000</strong>
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

			<scroll-top></scroll-top>
		</div>

		<app-toolbar></app-toolbar>

		<share v-if="shareStore.isShareOpen"></share>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useScroll } from '@vueuse/core';
	import { gsap } from 'gsap';
	import { useShareStore } from '$/stores/useShareStore';
	import Lazyload from '@/component/Lazyload.vue';
	import ScrollTop from '@/component/ScrollTop.vue';
	import Share from '@/component/Share.vue';
	import Toggle from '@/component/Toggle.vue';
	import AppFooter from '@/component/app/a/AppFooter.vue';
	import AppToolbar from '@/component/app/g/AppToolbar.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const shareStore = useShareStore();

	const progressItems: unknown[] = [''];// 공동구매 진행 내용없음 확인용 임시 변수
	const upcomingItems: unknown[] = [''];// 공동구매 진행예정 내용없음 확인용 임시 변수
	const endItems: unknown[] = [''];// 공동구매 마감 내용없음 확인용 임시 변수

	// 팔로우 버튼 제어
	const isFollow = ref(true);
	const followChange = (_e: Event) => {

		isFollow.value = !isFollow.value;

		var $this = _e.currentTarget as HTMLAnchorElement;
		var $text = $this.querySelector('b') as HTMLElement;
		var $alert = $this.nextElementSibling as HTMLElement;

		if (isFollow.value) $text.innerText = '팔로우';
		else {
			$text.innerText = '팔로잉';

			$alert.classList.add('S=on');
			setTimeout(() => {

				gsap.to($alert, { alpha: 0, y: '100%', duration: 0.2, onComplete: function() {

					$alert.classList.remove('S=on');
					$alert.style.transform = '';
					$alert.style.opacity = '';

				} });

			}, 4000);
		}

	};

	// 스크롤 시 헤더 투명도 조절
	const $header = ref<HTMLElement|null>(null);
	const $scroller = ref<HTMLElement|null>(null);
	const classHeaderOn = 'S=header-on';

	const smooth = ref(false);
	const behavior = computed(() => smooth.value ? 'smooth' : 'auto');
	const { y } = useScroll($scroller, { behavior });

	watch(y, (_currentScrollY, _beforeScrollY) => {

		if (_beforeScrollY < 1 || !$header.value || !$scroller.value) return;

		const opacity = (_currentScrollY / 115) < 1 ? (_currentScrollY / 115) : 1;
		$header.value.style.backgroundColor = `rgba(255, 255, 255, ${ opacity } )`;

		if (opacity >= 1) $header.value.classList.add(classHeaderOn);
		else $header.value.classList.remove(classHeaderOn);

	});

	// var $calendar = mm.find('.m_minishop-calendar')[0];
	// var _classReady = 'T=calendar-ready';

	// // 이전 달, 다음 달 버튼 제어
	// mm.event.on(mm.find('.m_minishop-calendar-head button', $calendar), 'touchend', function() {

	// 	var $readyCalendar = mm.find(mm.selector(_classReady, '.'), $calendar)[0];

	// 	gsap.set(mm.find('table tbody', $calendar)[0], { alpha: 0 });

	// 	// 이전 달
	// 	if (this.classList.contains('btn_prev-month')) {
	// 		gsap.set($readyCalendar, { x: '-60%' });
	// 	}
	// 	// 다음 달
	// 	else {
	// 		gsap.set($readyCalendar, { x: '60%' });
	// 	}

	// 	gsap.to($readyCalendar, { x: 0, alpha: 1, duration: 0.15, ease: 'cubic.out', onComplete: function() {

	// 		mm.find('table', $calendar)[0].remove();
	// 		$readyCalendar.classList.remove(_classReady);

	// 	}
	// 	});

	// });
</script>