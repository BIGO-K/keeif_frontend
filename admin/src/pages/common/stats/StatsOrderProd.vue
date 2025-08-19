<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>상품별 주문(지불완료)</b>
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

					<!-- 검색 -->
					<div class="mm_search">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>상품 검색</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>상품 코드</option>
													<option>상품명</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text></textarea><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">검색어를 입력해 주세요.</span>
											</label>
										</div>
										<div class="mm_note">
											<ul>
												<li><strong>줄바꿈</strong>으로 구분하여 다중 검색 가능 (최대 100줄)</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>주문 기간</b>
									</th>
									<td colspan="7">
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
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option selected>오늘</option>
														<option>최근 3일</option>
														<option>최근 1주일</option>
														<option>최근 1개월</option>
														<option>최근 3개월</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>정렬 기준</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=xs">
											<label>
												<select data-select>
													<option>수량</option>
													<option>금액</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>진열 여부</b>
									</th>
									<td colspan="3">
										<div class="mm_form-select T=xs">
											<label>
												<select data-select>
													<option>진열여부</option>
													<option>진열</option>
													<option>미진열</option>
													<option>품절</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=lg T=tertiary btn_search">
									<b>검색</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 검색 -->

					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>셀러 A(20025515)</b>
								</h3>
								<div class="mm_lside">
									<div class="mm_note">
										<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
									</div>
								</div>
								<div class="mm_rside">
									<div class="mm_form-select T=list">
										<label>
											<select data-select>
												<option>20개 보기</option>
												<option>40개 보기</option>
												<option>60개 보기</option>
												<option>80개 보기</option>
												<option>100개 보기</option>
											</select>
											<b class="text_selected"></b>
											<i class="ico_form-select"></i>
										</label>
									</div>
								</div>
							</div>
							<div class="mm_table_box-unit">
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
										</div>
									</div>
								</div>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table" data-table>
								<div class="mm_scroller">
									<!-- (D) 좌측고정 영역에는 colspan, rowspan을 사용할 수 없으며 th, td에 'S=table-fixed' 클래스를 추가합니다. -->
									<table>
										<thead>
											<tr>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														No.
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														<span>상품 이미지</span><button type="button" class="btn_preview-toggle" title="이미지 미리보기 켜기">
															<i class="ico_image-show"></i>
														</button>
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														상품 코드
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														상품명
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														정가
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														1차 쿠폰 할인율
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														담당 MD
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														총 재고 수량
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														진열 여부
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														판매가
													</div>
												</th>
												<th scope="col" colspan="2">
													<div class="mm_table-item">
														집계
													</div>
												</th>
												<th scope="col" colspan="2">
													<div class="mm_table-item">
														결제
													</div>
												</th>
												<th scope="col" colspan="2">
													<div class="mm_table-item">
														취소
													</div>
												</th>
												<th scope="col" colspan="2">
													<div class="mm_table-item">
														반품
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														사용 쿠폰수
													</div>
												</th>
											</tr>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														금액
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														수량
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														금액
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="mm_table-item">
														1
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
															<b>이미지보기</b>
															<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
														</a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1234564974
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>22SS 여성 테잎 장식 프린팅 아노락 점퍼 TWJUL5204-509</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">254900</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														최다희
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														진열
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">18100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1810000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">10</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">181000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-10</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-181000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-1</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-18100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1264</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														2
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
															<b>이미지보기</b>
															<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
														</a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1234564974
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>WSTAR TECH RUNNER WSP211015 T-BLACK</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">12900</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														진열
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">100000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">10000000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">10</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">100000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-10</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-100000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-1</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-10000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1264</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														3
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
															<b>이미지보기</b>
															<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
														</a>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														1234564974
													</div>
												</td>
												<td class="T=table-left">
													<div class="mm_table-item">
														<p class="T=linebreak">
															<b>WSTAR TECH RUNNER WSP211015 T-BLACK</b>
														</p>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">52900</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														10%
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														홍길동
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">100</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														진열
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">49900</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1230</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">61377000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">25</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">1247500</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-10</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-49900</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-10</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-49900</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">1264</span>
													</div>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td>
													<div class="mm_table-item">
														총 계
													</div>
												</td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td><div class="mm_table-item"></div></td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">4305</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">74204840</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">3954</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">5435400</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-144</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-765000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">-1</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_price">-765000</span>
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														<span class="text_num">500</span>
													</div>
												</td>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>

							<!-- 테이블하단 -->
							<div class="mm_table_box-unit">
								<div class="mm_rside">
									<div class="mm_btn_box">
										<div class="mm_inline">
											<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
										</div>
									</div>
								</div>
							</div>
							<!-- // 테이블하단 -->

							<!-- 페이지네이션 -->
							<!-- (D) 현재 페이지의 메뉴에 'S=page-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
							<div class="mm_pagination">
								<div class="mm_inline">
									<ol>
										<li><a class="S=page-on" href="#" title="선택됨"><b>1</b></a></li>
										<li><a href="#"><b>2</b></a></li>
										<li><a href="#"><b>3</b></a></li>
										<li><a href="#"><b>4</b></a></li>
										<li><a href="#"><b>5</b></a></li>
									</ol>
									<button type="button" class="btn_control-first" onclick="mm.link('')" disabled>
										<i class="ico_page-first"></i><b class="mm_ir-blind">처음</b>
									</button>
									<button type="button" class="btn_control-prev" onclick="mm.link('')" disabled>
										<i class="ico_page-prev"></i><b class="mm_ir-blind">이전</b>
									</button>
									<button type="button" class="btn_control-next" onclick="mm.link('')">
										<i class="ico_page-next"></i><b class="mm_ir-blind">다음</b>
									</button>
									<button type="button" class="btn_control-last" onclick="mm.link('')">
										<i class="ico_page-last"></i><b class="mm_ir-blind">마지막</b>
									</button>
								</div>
								<div class="mm_pagination-jump">
									<div class="mm_form_mix-linked">
										<div class="mm_form-text">
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">숫자</span>
											</label>
										</div>
										<button type="button" class="btn_jump">
											<b class="mm_ir-blind">이동</b><i class="ico_page-jump"></i>
										</button>
										<p class="text_linked">
											of 10<strong>(1,125 items)</strong>
										</p>
									</div>
								</div>
							</div>
							<!-- // 페이지네이션 -->
						</div>
					</template>

					<template v-else>
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<h3 class="mm_heading">
									<b>셀러 A(20025515)</b>
								</h3>
								<div class="mm_lside">
									<div class="mm_note">
										<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
									</div>
								</div>
								<div class="mm_rside">
									<div class="mm_form-select T=list">
										<label>
											<select data-select>
												<option>20개 보기</option>
												<option>40개 보기</option>
												<option>60개 보기</option>
												<option>80개 보기</option>
												<option>100개 보기</option>
											</select>
											<b class="text_selected"></b>
											<i class="ico_form-select"></i>
										</label>
									</div>
								</div>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>검색된 결과가 없습니다.</p>
							</div>
						</div>
					</template>
					<!-- // 테이블영역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';

	// 내용없음
	const _isNone = false;
</script>