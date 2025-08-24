<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>무이자 수정</b>
						</h2>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xs T=round">
									<b>즐겨찾기 추가</b><i class="ico_plus"></i>
								</button>
								<a class="mm_btn T=xs T=round" href="" target="_blank" title="새 창 열림"><b>새창보기</b><i class="ico_newtab"></i></a>
							</div>
						</div>
					</div>

					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>제목<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 30자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>사용 여부<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-using" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">사용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-using" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미사용</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
									<th scope="row">
										<b>노출 기간<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td>
										<div class="mm_form_mix-period">
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">시작일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
											<b class="text_tilde">~</b>
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">종료일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<!-- 카드 세트 목록 -->
					<div class="mm_form_box">
						<!-- 테이블상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>카드 세트 목록</b>
							</h3>
						</div>
						<div class="mm_form_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<!-- (D) '카드 세트 추가' 버튼 클릭 시 카드세트 등록 영역을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>카드 세트 추가</b>
										</button>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블상단 -->

						<!-- 테이블 -->
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>카드 세트 1 (무이자)<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-image">
												<div class="mm_form-image">
													<div class="mm_form-image-preview"></div>
													<label>
														<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 1000 }">
														<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
													</label>
													<button type="button" class="btn_remove-file">
														<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
												</div>
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
													</label>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
														<li>권장 사이즈는 W 171px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 최대 용량은 1MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</div>
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>카드 종류</b>
															</th>
															<td>
																<div class="mm_form-select T=lg">
																	<label>
																		<select data-select>
																			<option>선택하세요.</option>
																		</select>
																		<b class="text_selected"></b>
																		<i class="ico_form-select"></i>
																	</label>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>할부 정보</b>
															</th>
															<td>
																<div class="mm_check-list">
																	<ul>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth1" data-check="{ '_type': 'check_all' }">
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">전체</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">2 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">3 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">4 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">5 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">6 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">7 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">8 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">9 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">10 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">11 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">12 개월</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
																<div class="mm_form-textarea">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 500 }"></textarea><i class="bg_text"></i>
																		<span class="text_placeholder">할부 안내 내용을 입력하세요.</span>
																	</label>
																</div>
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-interest1" data-check="{ 'syncer': '.mm_syncer-partinterest1' }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">부분 무이자</span>
																	</b>
																</label>
															</td>
														</tr>
														<tr class="mm_syncer-partinterest1">
															<th scope="row">
																<b>부분 무이자 할부 정보</b>
															</th>
															<td>
																<div class="mm_check-list">
																	<ul>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check="{ '_type': 'check_all' }">
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">전체</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">2 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">3 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">4 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">5 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">6 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">7 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">8 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">9 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">10 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">11 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth1" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">12 개월</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
																<div class="mm_form-textarea">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 500 }"></textarea><i class="bg_text"></i>
																		<span class="text_placeholder">할부 안내 내용을 입력하세요.</span>
																	</label>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>카드 세트 2 (무이자)<i class="ico_required" title="필수입력"></i></b>
											<!-- (D) '카드 세트 추가'로 추가된 카드 세트에 '삭제' 버튼을 노출하며, 클릭시 해당 카드 세트를 삭제합니다. -->
											<button type="button" class="mm_btn T=xs T=line">
												<b>삭제</b>
											</button>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-image">
												<div class="mm_form-image">
													<div class="mm_form-image-preview"></div>
													<label>
														<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 1000 }">
														<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
													</label>
													<button type="button" class="btn_remove-file">
														<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
												</div>
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
													</label>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
														<li>권장 사이즈는 W 171px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 최대 용량은 1MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</div>
											<div class="mm_form-table">
												<table>
													<tbody>
														<tr>
															<th scope="row">
																<b>카드 종류</b>
															</th>
															<td>
																<div class="mm_form-select T=lg">
																	<label>
																		<select data-select>
																			<option>선택하세요.</option>
																		</select>
																		<b class="text_selected"></b>
																		<i class="ico_form-select"></i>
																	</label>
																</div>
															</td>
														</tr>
														<tr>
															<th scope="row">
																<b>할부 정보</b>
															</th>
															<td>
																<div class="mm_check-list">
																	<ul>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check="{ '_type': 'check_all' }">
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">전체</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">2 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">3 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">4 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">5 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">6 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">7 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">8 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">9 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">10 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">11 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-planmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">12 개월</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
																<div class="mm_form-textarea">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 500 }"></textarea><i class="bg_text"></i>
																		<span class="text_placeholder">할부 안내 내용을 입력하세요.</span>
																	</label>
																</div>
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-interest2" data-check="{ 'syncer': '.mm_syncer-partinterest2' }">
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">부분 무이자</span>
																	</b>
																</label>
															</td>
														</tr>
														<tr class="mm_syncer-partinterest2">
															<th scope="row">
																<b>부분 무이자 할부 정보</b>
															</th>
															<td>
																<div class="mm_check-list">
																	<ul>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check="{ '_type': 'check_all' }">
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">전체</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">2 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">3 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">4 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">5 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">6 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">7 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">8 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">9 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">10 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">11 개월</span>
																				</b>
																			</label>
																		</li>
																		<li>
																			<label class="mm_form-check">
																				<input type="checkbox" name="dev_check-partmonth2" data-check>
																				<b class="mm_block">
																					<i class="ico_form-check"></i>
																					<span class="text_label">12 개월</span>
																				</b>
																			</label>
																		</li>
																	</ul>
																</div>
																<div class="mm_form-textarea">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 500 }"></textarea><i class="bg_text"></i>
																		<span class="text_placeholder">할부 안내 내용을 입력하세요.</span>
																	</label>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- // 테이블 -->

						<!-- 테이블하단 -->
						<div class="mm_form_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<!-- (D) '카드 세트 추가' 버튼 클릭 시 카드세트 등록 영역을 추가합니다. -->
										<button type="button" class="mm_btn">
											<b>카드 세트 추가</b>
										</button>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블하단 -->
					</div>
					<!-- // 카드 세트 목록 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>취소하기</b></a>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>수정하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>