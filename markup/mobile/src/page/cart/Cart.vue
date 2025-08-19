<template>
	<layout
		title="장바구니"
		class="L=lowbtn"
		:is-footer="false"
		:is-toolbar="false"
	>
		<template #default>
			<div class="m_cart">
				<template
					v-if="cartItems.length < 1"
				>
					<p class="mm_text-none">
						<i class="ico_text-none"></i>장바구니에 담긴 상품이 없습니다.<br> 원하는 상품을 장바구니에 담아보세요!
					</p>
					<div class="mm_btn_box">
						<div class="mm_inline">
							<button
								type="button"
								class="mm_btn T=primary"
							>
								<b>쇼핑하러 가기</b>
							</button>
						</div>
					</div>
				</template>

				<template v-else>
					<!-- 안내문구 -->
					<div class="mm_note">
						<p><i class="ico_info"></i>(냉장/냉동/상온)온도가 구분되어 배송되는 일부상품은 합배송이 불가합니다.</p>
					</div>
					<!-- 장바구니 품목 -->
					<div class="mm_order-item">
						<form-check
							v-model="checkedAll"
							label="전체선택"
						></form-check>
						<button
							type="button"
							class="btn_remove"
						>
							<i class="ico_remove-trash"></i><b>선택삭제</b>
						</button>
						<div class="mm_order-item-seller">
							<div class="mm_order...seller-head">
								<p class="text_ship">
									<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
								</p>
							</div>

							<dawn-order></dawn-order>

							<div class="mm_product-list T=sm">
								<ul>
									<li>
										<form-check
											v-model="selectedItems"
											:value="cartItems[0]"
											label="상품 선택"
											:label-on-blind="true"
										></form-check>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															<span class="text_foreword">[단독]</span>시스루스트라이프셔츠
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															모로오렌지 클렌즈 / 60일분 2Box / 마이해빗 보틀 1 (-37,000원)
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<toggle class="btn_like">
															<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
														</toggle>
														<toggle
															class="mm_btn T=sm T=line btn_option-change"
															parent-selector=".mm_product-item-footer"
														>
															<b>옵션/수량 변경</b><i class="ico_toggle"></i>
														</toggle>
														<button
															type="button"
															class="mm_btn T=sm T=line T=primary"
														>
															<b>바로구매</b>
														</button>
													</div>
												</div>
												<div class="m_cart-option">
													<!--
														모든 옵션은 옵션의 순서와 무관하게 우선 선택이 가능합니다(예: 옵션2부터 선택가능)
														옵션1, 2모두 1개의 옵션만 있을 경우 옵션 선택없이 수량만 선택 가능합니다. 이 때, .m_product-option-select 요소는 삭제하지 않고 하위에 있는 section만 비노출합니다.
													-->
													<!-- 셀렉트형 옵션 + 옵션1, 2 선택 상태 -->
													<div class="m_product-option-select">
														<h5 class="mm_strapline">
															<b>필수 옵션</b>
														</h5>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션1</b>
															</h6>
															<template #button>
																<b>블랙</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>블랙</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>화이트</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>아이보리</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>카키</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>머스타드</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>핑크</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>블루</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>바이올렛</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션2</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션3</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
													</div>
													<div class="m_cart-option-quantity">
														<div
															class="mm_stepper"
															data-stepper="{ '_max': 99 }"
														>
															<div class="mm_form-text">
																<label>
																	<input
																		type="text"
																		class="textfield text_stepper"
																		data-text
																	><i class="bg_text"></i>
																	<span class="mm_ir-blind text_placeholder">수량</span>
																</label>
															</div>
															<button
																type="button"
																class="btn_stepper-subtract"
															>
																<i class="ico_stepper-subtract"></i><b class="mm_ir-blind">수량 빼기</b>
															</button>
															<button
																type="button"
																class="btn_stepper-add"
															>
																<i class="ico_stepper-add"></i><b class="mm_ir-blind">수량 더하기</b>
															</button>
														</div>
														<!-- (D) 선택 옵션의 구매가능 수량이 5개 이하인 경우에만 text_stock 요소를 노출합니다 -->
														<span class="text_stock">구매가능 수량 2개</span>
													</div>
													<div class="mm_btn_box">
														<div class="mm_flex T=equal">
															<button
																type="button"
																class="mm_btn T=sm T=line T=light"
															>
																<b>취소</b>
															</button>
															<button
																type="button"
																class="mm_btn T=sm T=dark"
															>
																<b>변경</b>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<button
											type="button"
											class="btn_remove"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">상품 삭제</b>
										</button>
									</li>
									<li>
										<form-check
											v-model="selectedItems"
											:value="cartItems[1]"
											label="상품 선택"
											:label-on-blind="true"
										></form-check>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_2.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															<span class="text_foreword">[단독]</span>플리츠 디테일 드레스_MJM1OP3140
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<!-- (D) 선택 옵션이 품절인 경우 .text_option요소에 S=option-soldout 클래스를 추가합니다 -->
														<p class="text_option S=option-soldout">
															베이지 FREE / 1개<span>선택한 옵션이 품절되었습니다</span>
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<!-- (D) 선택옵션이 품절된 경우 mm_product-item-footer 요소에 S=toggle-on 클래스가 추가하며, 처음부터 옵션변경 영역을 노출합니다. -->
											<div class="mm_product-item-footer S=toggle-on">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<toggle class="btn_like">
															<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
														</toggle>
														<toggle
															class="mm_btn T=sm T=line btn_option-change"
															parent-selector=".mm_product-item-footer"
														>
															<b>옵션/수량 변경</b><i class="ico_toggle"></i>
														</toggle>
														<button
															type="button"
															class="mm_btn T=sm T=line T=primary"
														>
															<b>바로구매</b>
														</button>
													</div>
												</div>
												<!-- (D) 선택 옵션이 품절인 경우 .m_cart-option요소에 S=option-soldout 클래스를 추가합니다 -->
												<div class="m_cart-option S=option-soldout">
													<!-- (D) 셀렉트형 옵션 + 선택된 옵션이 품절인 경우 -->
													<div class="m_product-option-select">
														<h5 class="mm_strapline">
															<b>필수 옵션</b>
														</h5>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션1</b>
															</h6>
															<template #button>
																<b>블랙</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>블랙</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>화이트</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>아이보리</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>카키</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>머스타드</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>핑크</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>블루</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>바이올렛</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션2</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션3</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
													</div>
													<div class="m_cart-option-quantity">
														<div
															class="mm_stepper"
															data-stepper="{ '_max': 99 }"
														>
															<div class="mm_form-text">
																<label>
																	<input
																		type="text"
																		class="textfield text_stepper"
																		data-text
																	><i class="bg_text"></i>
																	<span class="mm_ir-blind text_placeholder">수량</span>
																</label>
															</div>
															<button
																type="button"
																class="btn_stepper-subtract"
															>
																<i class="ico_stepper-subtract"></i><b class="mm_ir-blind">수량 빼기</b>
															</button>
															<button
																type="button"
																class="btn_stepper-add"
															>
																<i class="ico_stepper-add"></i><b class="mm_ir-blind">수량 더하기</b>
															</button>
														</div>
													</div>
													<div class="mm_btn_box">
														<div class="mm_flex T=equal">
															<button
																type="button"
																class="mm_btn T=sm T=line T=light"
															>
																<b>취소</b>
															</button>
															<button
																type="button"
																class="mm_btn T=sm T=dark"
															>
																<b>변경</b>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<button
											type="button"
											class="btn_remove"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">상품 삭제</b>
										</button>
									</li>
									<li>
										<form-check
											v-model="selectedItems"
											:value="cartItems[2]"
											label="상품 선택"
											:label-on-blind="true"
										></form-check>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_5.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															<span class="text_foreword">[단독]</span>플리츠 디테일 드레스_MJM1OP3140
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<toggle class="btn_like">
															<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
														</toggle>
														<toggle
															class="mm_btn T=sm T=line btn_option-change"
															parent-selector=".mm_product-item-footer"
														>
															<b>옵션/수량 변경</b><i class="ico_toggle"></i>
														</toggle>
														<button
															type="button"
															class="mm_btn T=sm T=line T=primary"
														>
															<b>바로구매</b>
														</button>
													</div>
												</div>
												<div class="m_cart-option">
													<!-- (D) 셀렉트형 옵션 + 단일 옵션인 경우 -->
													<div class="m_product-option-select">
														<h5 class="mm_strapline">
															<b>필수 옵션</b>
														</h5>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션1</b>
															</h6>
															<template #button>
																<b>블랙</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>블랙</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>화이트</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>아이보리</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>카키</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>머스타드</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>핑크</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>블루</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>바이올렛</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션2</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션3</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
													</div>
													<div class="m_cart-option-quantity">
														<div
															class="mm_stepper"
															data-stepper="{ '_max': 99 }"
														>
															<div class="mm_form-text">
																<label>
																	<input
																		type="text"
																		class="textfield text_stepper"
																		data-text
																	><i class="bg_text"></i>
																	<span class="mm_ir-blind text_placeholder">수량</span>
																</label>
															</div>
															<button
																type="button"
																class="btn_stepper-subtract"
															>
																<i class="ico_stepper-subtract"></i><b class="mm_ir-blind">수량 빼기</b>
															</button>
															<button
																type="button"
																class="btn_stepper-add"
															>
																<i class="ico_stepper-add"></i><b class="mm_ir-blind">수량 더하기</b>
															</button>
														</div>
														<span class="text_stock">구매가능 수량 5개</span>
													</div>
													<div class="mm_btn_box">
														<div class="mm_flex T=equal">
															<button
																type="button"
																class="mm_btn T=sm T=line T=light"
															>
																<b>취소</b>
															</button>
															<button
																type="button"
																class="mm_btn T=sm T=dark"
															>
																<b>변경</b>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<button
											type="button"
											class="btn_remove"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">상품 삭제</b>
										</button>
									</li>
									<li>
										<form-check
											v-model="selectedItems"
											:value="cartItems[3]"
											label="상품 선택"
											:label-on-blind="true"
										></form-check>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_3.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															<span class="text_foreword">[단독]</span>플리츠 디테일 드레스_MJM1OP3140
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<toggle class="btn_like">
															<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
														</toggle>
														<toggle
															class="mm_btn T=sm T=line btn_option-change"
															parent-selector=".mm_product-item-footer"
														>
															<b>옵션/수량 변경</b><i class="ico_toggle"></i>
														</toggle>
														<button
															type="button"
															class="mm_btn T=sm T=line T=primary"
														>
															<b>바로구매</b>
														</button>
													</div>
												</div>
												<div class="m_cart-option">
													<!-- (D) 셀렉트형 옵션 + 옵션이 1개만 있을 경우 -->
													<div class="m_product-option-select"></div>
													<div class="m_cart-option-quantity">
														<!-- (D) 옵션이 1개만 있어 옵션 선택 영역이 비노출 상태인 경우 수량에 대한 h6.mm_strapline 영역을 노출합니다. -->
														<h6 class="mm_strapline">
															<b>수량</b>
														</h6>
														<div
															class="mm_stepper"
															data-stepper="{ '_max': 99 }"
														>
															<div class="mm_form-text">
																<label>
																	<input
																		type="text"
																		class="textfield text_stepper"
																		data-text
																	><i class="bg_text"></i>
																	<span class="mm_ir-blind text_placeholder">수량</span>
																</label>
															</div>
															<button
																type="button"
																class="btn_stepper-subtract"
															>
																<i class="ico_stepper-subtract"></i><b class="mm_ir-blind">수량 빼기</b>
															</button>
															<button
																type="button"
																class="btn_stepper-add"
															>
																<i class="ico_stepper-add"></i><b class="mm_ir-blind">수량 더하기</b>
															</button>
														</div>
													</div>
													<div class="mm_btn_box">
														<div class="mm_flex T=equal">
															<button
																type="button"
																class="mm_btn T=sm T=line T=light"
															>
																<b>취소</b>
															</button>
															<button
																type="button"
																class="mm_btn T=sm T=dark"
															>
																<b>변경</b>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<button
											type="button"
											class="btn_remove"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">상품 삭제</b>
										</button>
									</li>
								</ul>
							</div>
							<p class="text_purchase-price">
								54,800원 + 배송비 0원 = <strong>54,800</strong>원<br> 300,000원 이상 무료배송
							</p>
						</div>
						<div class="mm_order-item-seller">
							<div class="mm_order...seller-head">
								<p class="text_ship">
									<i class="ico_ship"></i><span>무료배송</span>
								</p>
							</div>
							<div class="mm_product-list T=sm">
								<ul>
									<li>
										<form-check
											v-model="selectedItems"
											:value="cartItems[4]"
											label="상품 선택"
											:label-on-blind="true"
										></form-check>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_2.png"
													></lazyload>
													<p class="text_product-status">
														품절임박
													</p>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															시스루스트라이프셔츠
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<toggle class="btn_like">
															<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
														</toggle>
														<toggle
															class="mm_btn T=sm T=line btn_option-change"
															parent-selector=".mm_product-item-footer"
														>
															<b>옵션/수량 변경</b><i class="ico_toggle"></i>
														</toggle>
														<button
															type="button"
															class="mm_btn T=sm T=line T=primary"
														>
															<b>바로구매</b>
														</button>
													</div>
												</div>
												<div class="m_cart-option">
													<!--
														모든 옵션은 옵션의 순서와 무관하게 우선 선택이 가능합니다(예: 옵션2부터 선택가능)
														옵션1, 2모두 1개의 옵션만 있을 경우 옵션 선택없이 수량만 선택 가능합니다. 이 때, .m_product-option-select 요소는 삭제하지 않고 하위에 있는 section만 비노출합니다.
													-->
													<!-- 셀렉트형 옵션 + 옵션1, 2 선택 상태 -->
													<div class="m_product-option-select">
														<h5 class="mm_strapline">
															<b>필수 옵션</b>
														</h5>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션1</b>
															</h6>
															<template #button>
																<b>블랙</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>블랙</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>화이트</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>아이보리</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>카키</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>머스타드</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>핑크</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>블루</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>바이올렛</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션2</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션3</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
													</div>
													<div class="m_cart-option-quantity">
														<div
															class="mm_stepper"
															data-stepper="{ '_max': 99 }"
														>
															<div class="mm_form-text">
																<label>
																	<input
																		type="text"
																		class="textfield text_stepper"
																		data-text
																	><i class="bg_text"></i>
																	<span class="mm_ir-blind text_placeholder">수량</span>
																</label>
															</div>
															<button
																type="button"
																class="btn_stepper-subtract"
															>
																<i class="ico_stepper-subtract"></i><b class="mm_ir-blind">수량 빼기</b>
															</button>
															<button
																type="button"
																class="btn_stepper-add"
															>
																<i class="ico_stepper-add"></i><b class="mm_ir-blind">수량 더하기</b>
															</button>
														</div>
														<span class="text_stock">구매가능 수량 1개</span>
													</div>
													<div class="mm_btn_box">
														<div class="mm_flex T=equal">
															<button
																type="button"
																class="mm_btn T=sm T=line T=light"
															>
																<b>취소</b>
															</button>
															<button
																type="button"
																class="mm_btn T=sm T=dark"
															>
																<b>변경</b>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<button
											type="button"
											class="btn_remove"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">상품 삭제</b>
										</button>
									</li>
									<li>
										<form-check
											v-model="selectedItems"
											:value="cartItems[5]"
											label="상품 선택"
											:label-on-blind="true"
										></form-check>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_4.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															플리츠 디테일 드레스_MJM1OP3140
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<!-- (D) 선택 옵션이 품절인 경우 .text_option요소에 S=option-soldout 클래스를 추가합니다 -->
														<p class="text_option S=option-soldout">
															베이지 FREE / 1개<span>선택한 옵션이 품절되었습니다</span>
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer S=toggle-on">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<toggle class="btn_like">
															<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
														</toggle>
														<toggle
															class="mm_btn T=sm T=line btn_option-change"
															parent-selector=".mm_product-item-footer"
														>
															<b>옵션/수량 변경</b><i class="ico_toggle"></i>
														</toggle>
														<button
															type="button"
															class="mm_btn T=sm T=line T=primary"
														>
															<b>바로구매</b>
														</button>
													</div>
												</div>
												<div class="m_cart-option S=option-soldout">
													<!-- (D) 셀렉트형 옵션 + 선택된 옵션이 품절인 경우 -->
													<div class="m_product-option-select">
														<h5 class="mm_strapline">
															<b>필수 옵션</b>
														</h5>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션1</b>
															</h6>
															<template #button>
																<b>블랙</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>블랙</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>화이트</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>아이보리</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>카키</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>머스타드</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>핑크</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>블루</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>바이올렛</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션2</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션3</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
													</div>
													<div class="m_cart-option-quantity">
														<div
															class="mm_stepper"
															data-stepper="{ '_max': 99 }"
														>
															<div class="mm_form-text">
																<label>
																	<input
																		type="text"
																		class="textfield text_stepper"
																		data-text
																	><i class="bg_text"></i>
																	<span class="mm_ir-blind text_placeholder">수량</span>
																</label>
															</div>
															<button
																type="button"
																class="btn_stepper-subtract"
															>
																<i class="ico_stepper-subtract"></i><b class="mm_ir-blind">수량 빼기</b>
															</button>
															<button
																type="button"
																class="btn_stepper-add"
															>
																<i class="ico_stepper-add"></i><b class="mm_ir-blind">수량 더하기</b>
															</button>
														</div>
														<span class="text_stock">구매가능 수량 5개</span>
													</div>
													<div class="mm_btn_box">
														<div class="mm_flex T=equal">
															<button
																type="button"
																class="mm_btn T=sm T=line T=light"
															>
																<b>취소</b>
															</button>
															<button
																type="button"
																class="mm_btn T=sm T=dark"
															>
																<b>변경</b>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<button
											type="button"
											class="btn_remove"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">상품 삭제</b>
										</button>
									</li>
									<li>
										<form-check
											v-model="selectedItems"
											:value="cartItems[6]"
											label="상품 선택"
											:label-on-blind="true"
										></form-check>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_4.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">
															엠몬스타
														</p>
														<p class="text_product">
															플리츠 디테일 드레스_MJM1OP3140
														</p>
														<p class="text_price">
															<strong>54,800</strong>
														</p>
														<p class="text_option">
															베이지 FREE / 1개
														</p>
													</figcaption>
												</figure>
											</mm-link>
											<div class="mm_product-item-footer">
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<toggle class="btn_like">
															<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
														</toggle>
														<toggle
															class="mm_btn T=sm T=line btn_option-change"
															parent-selector=".mm_product-item-footer"
														>
															<b>옵션/수량 변경</b><i class="ico_toggle"></i>
														</toggle>
														<button
															type="button"
															class="mm_btn T=sm T=line T=primary"
														>
															<b>바로구매</b>
														</button>
													</div>
												</div>
												<div class="m_cart-option">
													<!-- (D) 셀렉트형 옵션 + 단일 옵션인 경우 -->
													<div class="m_product-option-select">
														<h5 class="mm_strapline">
															<b>필수 옵션</b>
														</h5>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션1</b>
															</h6>
															<template #button>
																<b>블랙</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>블랙</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>화이트</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>아이보리</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>카키</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>머스타드</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>핑크</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>블루</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>바이올렛</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션2</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
														<dropdown icon-class="T=bold">
															<h6 class="mm_ir-blind">
																<b>옵션3</b>
															</h6>
															<template #button>
																<b>90</b>
															</template>
															<template #content>
																<div class="mm_scroller">
																	<ul>
																		<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다. -->
																		<li>
																			<button
																				type="button"
																				class="btn_option S=option-select"
																				title="선택됨"
																			>
																				<b>90</b><b>(2개)</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>95</b>
																			</button>
																		</li>
																		<li><span class="mm_flex btn_option"><b>100</b><b>(품절)</b></span></li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>105</b>
																			</button>
																		</li>
																		<li>
																			<button
																				type="button"
																				class="btn_option"
																			>
																				<b>110</b>
																			</button>
																		</li>
																	</ul>
																</div>
															</template>
														</dropdown>
													</div>
													<div class="m_cart-option-quantity">
														<div
															class="mm_stepper"
															data-stepper="{ '_max': 99 }"
														>
															<div class="mm_form-text">
																<label>
																	<input
																		type="text"
																		class="textfield text_stepper"
																		data-text
																	><i class="bg_text"></i>
																	<span class="mm_ir-blind text_placeholder">수량</span>
																</label>
															</div>
															<button
																type="button"
																class="btn_stepper-subtract"
															>
																<i class="ico_stepper-subtract"></i><b class="mm_ir-blind">수량 빼기</b>
															</button>
															<button
																type="button"
																class="btn_stepper-add"
															>
																<i class="ico_stepper-add"></i><b class="mm_ir-blind">수량 더하기</b>
															</button>
														</div>
													</div>
													<div class="mm_btn_box">
														<div class="mm_flex T=equal">
															<button
																type="button"
																class="mm_btn T=sm T=line T=light"
															>
																<b>취소</b>
															</button>
															<button
																type="button"
																class="mm_btn T=sm T=dark"
															>
																<b>변경</b>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<button
											type="button"
											class="btn_remove"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">상품 삭제</b>
										</button>
									</li>
									<li>
										<form-check
											v-model="selectedItems"
											:value="cartItems[7]"
											label="상품 선택"
											:label-on-blind="true"
										></form-check>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_6.png"
													></lazyload>
													<p class="text_soldout">품절</p>
													<figcaption>
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">플리츠 디테일 드레스_MJM1OP3140</p>
														<p class="text_price"><strong>54,800</strong></p>
														<p class="text_option">베이지 FREE / 1개</p>
													</figcaption>
												</figure>
											</a>
											<div class="mm_product-item-footer">
												<div class="mm_flex T=equal">
													<toggle class="btn_like">
														<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
													</toggle>
													<p class="text_cart-soldout">
														상품이 품절되었어요
													</p>
												</div>
											</div>
										</div>
										<button
											type="button"
											class="btn_remove"
										>
											<i class="ico_remove"></i><b class="mm_ir-blind">상품 삭제</b>
										</button>
									</li>
								</ul>
							</div>
							<p class="text_purchase-price">
								54,800원 + 배송비 0원 = <strong>54,800</strong>원<br> 300,000원 이상 무료배송
							</p>
						</div>
					</div>
					<hr class="mm_line">

					<!-- 결제금액 -->
					<div class="mm_cost">
						<table>
							<tbody>
								<tr>
									<th scope="row">
										<b>총 상품금액</b>
									</th>
									<td>
										<p class="text_price">
											<strong>210,000</strong>
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>배송비</b>
									</th>
									<td>
										<p class="text_price">
											+ <strong>2,500</strong>
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>회원할인</b>
									</th>
									<td>
										<p class="text_price">
											- <strong>6,200</strong>
										</p>
									</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<th scope="row">
										<b>최종 결제금액</b>
									</th>
									<td>
										<p class="text_price mm_text-variable">
											<strong>201,510</strong>
										</p>
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</template>
			</div>
		</template>

		<template #button>
			<!-- 안내문구 툴팁 -->
			<transition name="cart-popover">
				<div
					v-if="selectedItems.length > 0 && isShowsSubmitTip"
					class="m_cart-popover"
				>
					<p v-html="submitTipHtml"></p>
					<button
						type="button"
						class="btn_close"
						@click="isShowsSubmitTip = false"
					>
						<i class="ico_popover-close"></i><b class="mm_ir-blind">닫기</b>
					</button>
				</div>
			</transition>

			<transition name="cart-button">
				<div
					v-if="selectedItems.length > 0"
					class="mm_btn_box T=fixed"
				>
					<button
						type="button"
						class="mm_flex T=auto btn_order"
						@click="onOrderPayment"
					>
						<b class="text_total">총 <strong>{{ selectedItems.length }}</strong>개</b>
						<b class="text_order"><strong>314,800</strong>원 주문하기</b>
					</button>
				</div>
			</transition>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useRouter } from 'vue-router';
	import mons from '$/utils/mons';
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import DawnOrder from '@/custom/dawn/component/DawnOrder.vue';

	const router = useRouter();

	const isBlockedItem = (_item: test) => _item.option_stock < 1 || _item.ea > _item.option_stock;
	const hasCheckedBlocked = computed(() => selectedItems.value.some(_item => isBlockedItem(_item)));

	// XXX 임시 인터페이스
	interface test {
		cart_id: string;
		option_stock: number;
		ea: number;
	}
	const cartItems = ref<test[]>([
		{ cart_id: '1', option_stock: 2, ea: 1 },
		{ cart_id: '2', option_stock: 2, ea: 1 },
		{ cart_id: '3', option_stock: 2, ea: 1 },
		{ cart_id: '4', option_stock: 2, ea: 1 },
		{ cart_id: '5', option_stock: 2, ea: 1 },
		{ cart_id: '6', option_stock: 2, ea: 1 },
		{ cart_id: '7', option_stock: 1, ea: 2 },
		{ cart_id: '8', option_stock: 0, ea: 1 },
	]);
	const selectedItems = ref<test[]>(cartItems.value.filter(_item => !isBlockedItem(_item)));
	const checkedAll = computed({
		get: () => selectedItems.value.length === cartItems.value.length,
		set: _value => {
			selectedItems.value = _value ? [...cartItems.value] : [];
		},
	});

	const onOrderPayment = () => {
		if (hasCheckedBlocked.value) {
			mons().bom.confirm('선택한 상품이 품절이거나\n재고가 부족한 상품이 있습니다.\n해당 상품을 제외하시겠습니까?',
				(_is: boolean) => {
					if (_is) selectedItems.value = selectedItems.value.filter(_item => !isBlockedItem(_item));
				},
				{
					title: '품절/재고부족',
				},
			);

			return;
		}

		router.push({ name: 'Order' });
	};

	// 안내문구
	const isShowsSubmitTip = ref(true);
	const submitTipHtml = computed(() => hasCheckedBlocked.value
		? '<strong>품절/재고부족</strong> 상품이 포함되어 있습니다'
		: '<strong>추가할인</strong>은 주문 시 적용됩니다',
	);

	watch(submitTipHtml, () => isShowsSubmitTip.value = true);
</script>

<style lang="scss">
	// 하단버튼 모션
	.cart-button-enter-active,
	.cart-button-leave-active {
		transition: transform 0.3s;
	}

	.cart-button-enter-from,
	.cart-button-leave-to {
		transform: translateY(100%);
		pointer-events: none;
	}

	// 툴팁
	.cart-popover-enter-active,
	.cart-popover-leave-active {
		transition: 0.3s;
		transition-property: transform, opacity;
	}

	.cart-popover-enter-from,
	.cart-popover-leave-to {
		opacity: 0;
		transform: translate(-50%, 100%);
		transition-duration: 0.15s;
	}
</style>