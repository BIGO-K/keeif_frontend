<template>
	<div class="mm_filter">
		<!-- 필터상단 -->
		<div class="mm_filter-unit">
			<div class="mm_scroller T=x">
				<div class="mm_btn_box">
					<div class="mm_inline">
						<!-- (D) 선택한 버튼에 'S=btn-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
						<button
							type="button"
							class="mm_btn T=sm T=line S=btn-on"
							title="선택됨"
						>
							<b>무료배송</b>
						</button>
						<button
							type="button"
							class="mm_btn T=sm T=line"
						>
							<b>할인상품</b>
						</button>
						<button
							type="button"
							class="mm_btn T=sm T=line"
						>
							<b>품절제외</b>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- 필터영역 -->
		<div
			ref="$filterTab"
			class="mm_filter-tab"
		>
			<div
				class="mm_tab"
				data-tab
			>
				<!-- 탭메뉴 -->
				<div class="mm_tab_menu">
					<div class="mm_scroller">
						<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
						<ul>
							<li
								v-for="tab in tabMenuList"
								:key="tab.name"
							>
								<button
									type="button"
									class="btn_tab"
									:class="{ 'S=tab-on': selectTabMenu === tab.name }"
									:title="selectTabMenu === tab.name? '선택됨' : undefined"
									@click="selectTabMenu = tab.name"
								>
									<b>{{ tab.label }}</b>
								</button>
							</li>
						</ul>
					</div>
				</div>

				<!-- 카테고리 -->
				<div
					class="mm_tab-item"
					:class="{ 'S=tab-on': selectTabMenu === 'category' }"
				>
					<div class="mm_filter-tab-category">
						<div class="mm_scroller">
							<div class="mm_accordion">
								<!--
									(D) 전체체크를 위해서 각 카테고리 영역에 맞게 체크박스의 '_group' 명을 맞춰줍니다.
									체크박스 옵션에 '_group' 명이 두개 들어가는 경우엔 1depth '_group' 명을 먼저 작성하시고, 2depth '_group' 명은 그 다음에 작성해주세요.
								-->
								<ul>
									<li>
										<dropdown
											tag="dl"
											group="category"
											@toggle="anchorCategory"
										>
											<template #button>
												<p>일이삼사오육칠팔구십일이삼사오육칠팔구십</p>
												<b class="text_count"><span data-check="{ '_group': 'dev_check-women' }">0</span>개</b>
											</template>
											<template #content>
												<!-- 카테고리 2depth -->
												<div class="mm_filter...sub">
													<label class="mm_form-check">
														<input
															type="checkbox"
															data-check="{ '_type': 'check_all', '_group': 'dev_check-women' }"
														>
														<b class="mm_inline">
															<b class="mm_flex">
																<span class="text_label">전체</span>
																<small>115,884</small>
															</b>
														</b>
													</label>
													<ul>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'dev_check-women' }"
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">가방</span>
																		<small>5,884</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<dropdown
																tag="dl"
																group="category-women"
																@trigger="setCategoryHeight"
															>
																<template #button>
																	<p><b class="mm_flex"><span>티셔츠</span><small>115,884</small></b></p>
																</template>
																<template #content>
																	<!-- 카테고리 3depth -->
																	<div class="mm_check-list">
																		<label class="mm_form-check">
																			<input
																				type="checkbox"
																				data-check="{ '_type': 'check_all', '_group': 'dev_check-women dev_check-women01' }"
																			>
																			<b class="mm_inline">
																				<b class="mm_flex">
																					<span class="text_label">전체</span>
																					<small>115,884</small>
																				</b>
																			</b>
																		</label>
																		<ul>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">가죽자켓</span>
																							<small>1,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">캐쥬얼 점퍼</span>
																							<small>104</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">트렌치 코트</span>
																							<small>800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">미니 가디건</span>
																							<small>104</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">루즈핏 가디건</span>
																							<small>800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">집업/후드가디건</span>
																							<small>11,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">울/캐시미어 자켓</span>
																							<small>20</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">더블코트</span>
																							<small>20</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">바람막이 점퍼</span>
																							<small>12,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																		</ul>
																	</div>
																</template>
															</dropdown>
														</li>
														<li>
															<dropdown
																tag="dl"
																group="category-women"
																@trigger="setCategoryHeight"
															>
																<template #button>
																	<p><b class="mm_flex"><span>아우터</span><small>115,884</small></b></p>
																</template>
																<template #content>
																	<!-- 카테고리 3depth -->
																	<div class="mm_check-list">
																		<label class="mm_form-check">
																			<input
																				type="checkbox"
																				data-check="{ '_type': 'check_all', '_group': 'dev_check-women dev_check-women02' }"
																			>
																			<b class="mm_inline">
																				<b class="mm_flex">
																					<span class="text_label">전체</span>
																					<small>115,884</small>
																				</b>
																			</b>
																		</label>
																		<ul>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women dev_check-women02' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">가죽자켓</span>
																							<small>1,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women dev_check-women02' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">캐쥬얼 점퍼</span>
																							<small>104</small>
																						</b>
																					</b>
																				</label>
																			</li>
																		</ul>
																	</div>
																</template>
															</dropdown>
														</li>
													</ul>
												</div>
											</template>
										</dropdown>
									</li>
									<li>
										<dropdown
											tag="dl"
											group="category"
											@toggle="anchorCategory"
										>
											<template #button>
												<p>남성</p>
												<b class="text_count"><span data-check="{ '_group': 'dev_check-men' }">0</span>개</b>
											</template>
											<template #content>
												<!-- 카테고리 2depth -->
												<div class="mm_filter...sub">
													<label class="mm_form-check">
														<input
															type="checkbox"
															data-check="{ '_type': 'check_all', '_group': 'dev_check-men' }"
														>
														<b class="mm_inline">
															<b class="mm_flex">
																<span class="text_label">전체</span>
																<small>115,884</small>
															</b>
														</b>
													</label>
													<ul>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'dev_check-men' }"
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">가방</span>
																		<small>5,884</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<dropdown
																tag="dl"
																group="category-men"
																@trigger="setCategoryHeight"
															>
																<template #button>
																	<p><b class="mm_flex"><span>티셔츠</span><small>115,884</small></b></p>
																</template>
																<template #content>
																	<!-- 카테고리 3depth -->
																	<div class="mm_check-list">
																		<label class="mm_form-check">
																			<input
																				type="checkbox"
																				data-check="{ '_type': 'check_all', '_group': 'dev_check-men dev_check-men01' }"
																			>
																			<b class="mm_inline">
																				<b class="mm_flex">
																					<span class="text_label">전체</span>
																					<small>115,884</small>
																				</b>
																			</b>
																		</label>
																		<ul>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">가죽자켓</span>
																							<small>1,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">캐쥬얼 점퍼</span>
																							<small>104</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">트렌치 코트</span>
																							<small>800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">미니 가디건</span>
																							<small>104</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">루즈핏 가디건</span>
																							<small>800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">집업/후드가디건</span>
																							<small>11,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">울/캐시미어 자켓</span>
																							<small>20</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">더블코트</span>
																							<small>20</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">바람막이 점퍼</span>
																							<small>12,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																		</ul>
																	</div>
																</template>
															</dropdown>
														</li>
														<li>
															<dropdown
																tag="dl"
																group="category-men"
																@trigger="setCategoryHeight"
															>
																<template #button>
																	<p><b class="mm_flex"><span>아우터</span><small>115,884</small></b></p>
																</template>
																<template #content>
																	<!-- 카테고리 3depth -->
																	<div class="mm_check-list">
																		<label class="mm_form-check">
																			<input
																				type="checkbox"
																				data-check="{ '_type': 'check_all', '_group': 'dev_check-men dev_check-men02' }"
																			>
																			<b class="mm_inline">
																				<b class="mm_flex">
																					<span class="text_label">전체</span>
																					<small>115,884</small>
																				</b>
																			</b>
																		</label>
																		<ul>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men02' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">가죽자켓</span>
																							<small>1,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men02' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">캐쥬얼 점퍼</span>
																							<small>104</small>
																						</b>
																					</b>
																				</label>
																			</li>
																		</ul>
																	</div>
																</template>
															</dropdown>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'dev_check-men' }"
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">팬츠</span>
																		<small>115,884</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<dropdown
																tag="dl"
																group="category-men"
																@trigger="setCategoryHeight"
															>
																<template #button>
																	<p><b class="mm_flex"><span>모자</span><small>115,884</small></b></p>
																</template>
																<template #content>
																	<!-- 카테고리 3depth -->
																	<div class="mm_check-list">
																		<label class="mm_form-check">
																			<input
																				type="checkbox"
																				data-check="{ '_type': 'check_all', '_group': 'dev_check-men dev_check-men03' }"
																			>
																			<b class="mm_inline">
																				<b class="mm_flex">
																					<span class="text_label">전체</span>
																					<small>115,884</small>
																				</b>
																			</b>
																		</label>
																		<ul>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">가죽자켓</span>
																							<small>1,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">캐쥬얼 점퍼</span>
																							<small>104</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">트렌치 코트</span>
																							<small>800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">미니 가디건</span>
																							<small>104</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">루즈핏 가디건</span>
																							<small>800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">집업/후드가디건</span>
																							<small>11,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">울/캐시미어 자켓</span>
																							<small>20</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">더블코트</span>
																							<small>20</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">바람막이 점퍼</span>
																							<small>12,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																		</ul>
																	</div>
																</template>
															</dropdown>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'dev_check-men' }"
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">팬츠</span>
																		<small>115,884</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'dev_check-men' }"
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">팬츠</span>
																		<small>115,884</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'dev_check-men' }"
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">팬츠</span>
																		<small>115,884</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'dev_check-men' }"
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">팬츠</span>
																		<small>115,884</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'dev_check-men' }"
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">팬츠</span>
																		<small>115,884</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'dev_check-men' }"
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">팬츠</span>
																		<small>115,884</small>
																	</b>
																</b>
															</label>
														</li>
													</ul>
												</div>
											</template>
										</dropdown>
									</li>
									<li>
										<dropdown
											tag="dl"
											group="category"
											@toggle="anchorCategory"
										>
											<template #button>
												<p>화장품</p>
												<b class="text_count"><span data-check="{ '_group': 'dev_check-accessories' }">0</span>개</b>
											</template>
											<template #content>
												<!-- 카테고리 2depth -->
												<div class="mm_filter...sub">
													<label class="mm_form-check">
														<input
															type="checkbox"
															data-check="{ '_type': 'check_all', '_group': 'dev_check-accessories' }"
														>
														<b class="mm_inline">
															<b class="mm_flex">
																<span class="text_label">전체</span>
																<small>115,884</small>
															</b>
														</b>
													</label>
													<ul>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'dev_check-accessories' }"
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">선크림</span>
																		<small>5,884</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<dropdown
																tag="dl"
																group="category-acc"
																@trigger="setCategoryHeight"
															>
																<template #button>
																	<p><b class="mm_flex"><span>기초</span><small>115,884</small></b></p>
																</template>
																<template #content>
																	<!-- 카테고리 3depth -->
																	<div class="mm_check-list">
																		<label class="mm_form-check">
																			<input
																				type="checkbox"
																				data-check="{ '_type': 'check_all', '_group': 'dev_check-accessories dev_check-accessories01' }"
																			>
																			<b class="mm_inline">
																				<b class="mm_flex">
																					<span class="text_label">전체</span>
																					<small>115,884</small>
																				</b>
																			</b>
																		</label>
																		<ul>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">가죽자켓</span>
																							<small>1,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">캐쥬얼 점퍼</span>
																							<small>104</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">트렌치 코트</span>
																							<small>800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">미니 가디건</span>
																							<small>104</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">루즈핏 가디건</span>
																							<small>800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">집업/후드가디건</span>
																							<small>11,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">울/캐시미어 자켓</span>
																							<small>20</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">더블코트</span>
																							<small>20</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">바람막이 점퍼</span>
																							<small>12,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																		</ul>
																	</div>
																</template>
															</dropdown>
														</li>
														<li>
															<dropdown
																tag="dl"
																group="category-acc"
																@trigger="setCategoryHeight"
															>
																<template #button>
																	<p><b class="mm_flex"><span>에센스</span><small>115,884</small></b></p>
																</template>
																<template #content>
																	<!-- 카테고리 3depth -->
																	<div class="mm_check-list">
																		<label class="mm_form-check">
																			<input
																				type="checkbox"
																				data-check="{ '_type': 'check_all', '_group': 'dev_check-accessories dev_check-accessories02' }"
																			>
																			<b class="mm_inline">
																				<b class="mm_flex">
																					<span class="text_label">전체</span>
																					<small>115,884</small>
																				</b>
																			</b>
																		</label>
																		<ul>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories dev_check-accessories02' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">가죽자켓</span>
																							<small>1,800</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories dev_check-accessories02' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">캐쥬얼 점퍼</span>
																							<small>104</small>
																						</b>
																					</b>
																				</label>
																			</li>
																		</ul>
																	</div>
																</template>
															</dropdown>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'dev_check-accessories' }"
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">색조</span>
																		<small>115,884</small>
																	</b>
																</b>
															</label>
														</li>
													</ul>
												</div>
											</template>
										</dropdown>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!-- 브랜드 -->
				<div
					class="mm_tab-item"
					:class="{ 'S=tab-on': selectTabMenu === 'brand' }"
				>
					<div class="mm_filter-tab-brand">
						<!-- 브랜드검색 -->
						<div class="mm_filter...search">
							<div class="mm_form-text">
								<button
									type="button"
									class="btn_search"
								>
									<i class="ico_search"></i><b class="mm_ir-blind">검색하기</b>
								</button>
								<button
									type="button"
									class="btn_text-clear"
								>
									<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
								</button>
								<label>
									<input
										type="search"
										class="textfield"
										data-text
									><i class="bg_text"></i>
									<span class="text_placeholder">브랜드를 검색하세요</span>
								</label>
							</div>
						</div>

						<!-- 브랜드목록 -->
						<div class="mm_filter...list">
							<!-- 검색된브랜드목록 -->
							<div class="mm_scroller T=brand-search">
								<div class="mm_check-list">
									<ul>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[0]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나나아웃도어</span>
													<small>1,284</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[1]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나나키즈</span>
													<small>365</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[2]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나로</span>
													<small>104</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[3]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나이스크랍</span>
													<small>800</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[4]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나이키</span>
													<small>11,800</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[5]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나이키골프</span>
													<small>20</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[6]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나인</span>
													<small>16</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[7]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나인스텝</span>
													<small>2,800</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[8]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나인식스뉴욕</span>
													<small>20</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[9]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나즈나</span>
													<small>2,800</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[10]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">내셔널 지오그래픽</span>
													<small>20</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[11]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">널디</span>
													<small>365</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[12]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나인</span>
													<small>16</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[13]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나인스텝</span>
													<small>2,800</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[14]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나인식스뉴욕</span>
													<small>20</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[15]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">나즈나</span>
													<small>2,800</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[16]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">내셔널 지오그래픽</span>
													<small>20</small>
												</b>
											</form-check>
										</li>
										<li>
											<form-check
												v-model="selectedBrands"
												:value="brandItems[17]"
												:label-on-blind="true"
												:hide-icon="false"
												block-style="inline"
											>
												<b class="mm_flex">
													<span class="text_label">널디</span>
													<small>365</small>
												</b>
											</form-check>
										</li>
									</ul>
								</div>
								<!-- (D) 정렬 키워드에 속한 브랜드가 없는 경우 '.mm_text-none' 요소를 노출합니다. -->
								<!-- <p class="mm_text-none"><i class="ico_text-none"></i>브랜드가 없습니다</p> -->
							</div>

							<!-- 자음목록 -->
							<div class="mm_scroller T=brand-sort">
								<!-- (D) 현재페이지에 적용되어 있는 버튼에 'S=btn-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
								<ul>
									<li>
										<button type="button">
											<b>전체</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㄱ</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="S=btn-on"
											title="선택됨"
										>
											<b>ㄴ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㄷ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㄹ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㅁ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㅂ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㅅ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㅇ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㅈ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㅊ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㅋ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㅌ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㅍ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ㅎ</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>ABC</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>123</b>
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!-- 가격 -->
				<div
					class="mm_tab-item"
					:class="{ 'S=tab-on': selectTabMenu === 'price' }"
				>
					<div class="mm_filter-tab-price">
						<div class="mm_scroller">
							<div class="mm_check-list">
								<ul>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<span class="text_label">~ 5만원</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<span class="text_label">5만원 ~ 10만원</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<span class="text_label">10만원 ~ 50만원</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<span class="text_label">50만원 ~ 100만원</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<span class="text_label">100만원 ~</span>
											</b>
										</label>
									</li>
								</ul>
							</div>
							<div class="mm_form_mix-linked">
								<form-text
									type="number"
									placeholder="최저금액"
								></form-text>
								<span class="text_tilde">~</span>
								<form-text
									type="number"
									placeholder="최고금액"
								></form-text>
							</div>
						</div>
					</div>
				</div>

				<!-- 별점 -->
				<div
					class="mm_tab-item"
					:class="{ 'S=tab-on': selectTabMenu === 'star' }"
				>
					<div class="mm_filter-tab-star">
						<div class="mm_scroller">
							<div class="mm_check-list">
								<ul>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<span class="text_label"><i class="ico_star-fill"></i>5.0</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<span class="text_label"><i class="ico_star-fill"></i>4.0</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<span class="text_label"><i class="ico_star-fill"></i>3.0</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<span class="text_label"><i class="ico_star-fill"></i>2.0</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<span class="text_label"><i class="ico_star-fill"></i>1.0</span>
											</b>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!-- 색상 -->
				<div
					class="mm_tab-item"
					:class="{ 'S=tab-on': selectTabMenu === 'color' }"
				>
					<div class="mm_filter-tab-color">
						<div class="mm_scroller">
							<div class="mm_check-list">
								<ul>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #fff;"></span></i>
												<span class="text_label">화이트</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #888;"></span></i>
												<span class="text_label">그레이</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #101010;"></span></i>
												<span class="text_label">블랙</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #d90708;"></span></i>
												<span class="text_label">레드</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #f4cf0d;"></span></i>
												<span class="text_label">옐로우</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #29326d;"></span></i>
												<span class="text_label">블루</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #d9bd8e;"></span></i>
												<span class="text_label">베이지</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #6a7334;"></span></i>
												<span class="text_label">올리브</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #3d4a36;"></span></i>
												<span class="text_label">카키</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #f0b6a0;"></span></i>
												<span class="text_label">코랄</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #c16048;"></span></i>
												<span class="text_label">브라운</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #903822;"></span></i>
												<span class="text_label">다크브라운</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_check-color"><span style="background-color: #471306;"></span></i>
												<span class="text_label">일이삼사오육칠팔구십</span>
											</b>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 하단고정버튼 -->
		<div class="mm_btn_box T=fixed">
			<div class="mm_flex">
				<button
					type="button"
					class="btn_filter-reset"
				>
					<i class="ico_reload"></i><b class="mm_ir-blind">초기화</b>
				</button>
				<button type="button">
					<b>적용하기</b>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Dropdown from '@/component/Dropdown.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormText from '@/component/form/FormText.vue';

	const tabMenuList = [
		{
			name: 'category',
			label: '카테고리',
		},
		{
			name: 'brand',
			label: '브랜드',
		},
		{
			name: 'price',
			label: '가격',
		},
		{
			name: 'star',
			label: '별점',
		},
		{
			name: 'color',
			label: '색상',
		},
		// {
		// 	name: 'fit',
		// 	label: 'FIT'
		// },
		// {
		// 	name: 'shoes',
		// 	label: '슈즈'
		// },
	];

	const anchorCategory = () => {
		console.log('category anchor');
	};

	const setCategoryHeight = () => {
		console.log('category height');
	};

	const selectTabMenu = ref('category');

	defineExpose<OverlayComponentExpose>({
		title: `필터`,
		isFull: true,
	});

	// XXX 임시 인터페이스
	interface test {
		brand_id: string;
	}
	const brandItems = ref<test[]>([
		{ brand_id: '1' },
		{ brand_id: '2' },
		{ brand_id: '3' },
		{ brand_id: '4' },
		{ brand_id: '5' },
		{ brand_id: '6' },
		{ brand_id: '7' },
		{ brand_id: '8' },
		{ brand_id: '9' },
		{ brand_id: '10' },
		{ brand_id: '11' },
		{ brand_id: '12' },
		{ brand_id: '13' },
		{ brand_id: '14' },
		{ brand_id: '15' },
		{ brand_id: '16' },
		{ brand_id: '17' },
	]);
	const selectedBrands = ref<test[]>(brandItems.value.filter(_item => !_item.brand_id));
</script>