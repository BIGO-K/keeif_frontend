<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>배송 정책[셀러A]</b>
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

					<!-- 유의사항 -->
					<div class="mm_note">
						<ul>
							<li>선택한 셀러의 배송 정책 목록입니다.</li>
							<li>최초 등록하는 배송 정책이 기본 배송 정책으로 지정되며, 이후 등록되는 배송 정책은 일반 배송 정책으로 등록됩니다.</li>
							<li>기본 배송 정책은 삭제가 불가하며 수정만 가능합니다.</li>
							<li><strong>배송정책 수정, 삭제는 최고 관리자에게 문의해주세요</strong></li>
						</ul>
					</div>
					<!-- // 유의사항 -->

					<!-- 테이블영역 -->
					<template v-if="_isNone === false">
						<div class="mm_table_box">
							<!-- 테이블상단 -->
							<div class="mm_table_box-caption">
								<div class="mm_lside">
									<a class="mm_btn T=line T=secondary btn_register" href="ship/register" data-href="{ '_type': 'link' }"><b>배송 정책 등록하기</b><i class="ico_register"></i></a>
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
							<!-- 테이블 -->
							<div class="mm_table" data-table>
								<div class="mm_scroller">
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
														배송 정책 구분
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														배송 정책 종류
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														배송 정책 코드
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														배송 정책명
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														택배사
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														굿스플로 서비스
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														배송지명
													</div>
												</th>
												<th scope="col">
													<div class="mm_table-item">
														배송지 주소
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														기본 배송정책 설정
													</div>
												</th>
												<th scope="col" rowspan="2">
													<div class="mm_table-item">
														관리
													</div>
												</th>
											</tr>
											<tr>
												<th scope="col">
													<div class="mm_table-item">
														반품/교환지 주소
													</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<!-- 등록시 1개의 배송지만 등록한 경우 -->
											<tr>
												<td rowspan="2">
													<div class="mm_table-item">
														19
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														[셀러A] 배송정책
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														일반
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														30000072002
													</div>
												</td>
												<td class="T=table-left" rowspan="2">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/seller/manage/ship-policy" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>배송 정책명19</b></a>
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														로젠택배
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														<button type="button" class="mm_btn T=sm T=line T=light">
															<b>서비스 관리</b>
														</button>
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														곤지암
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														경기도 성남시 판교로 242, 판교디지털센터 A동
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														<button type="button" class="mm_btn T=sm T=line T=light">
															<b>기본 배송정책 선택</b>
														</button>
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="ship/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td rowspan="2">
													<div class="mm_table-item">
														18
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														[셀러B] 배송정책
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														일반
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														123456789
													</div>
												</td>
												<td class="T=table-left" rowspan="2">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/seller/manage/ship-policy" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>배송 정책명18</b></a>
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														롯데택배
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														<button type="button" class="mm_btn T=sm T=line T=light">
															<b>서비스 관리</b>
														</button>
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														곤지암
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														경기 광주시 초월읍 산수로 1234
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														<button type="button" class="mm_btn T=sm T=line T=light">
															<b>기본 배송정책 선택</b>
														</button>
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=sm T=line">
																	<b>삭제</b>
																</button>
																<a class="mm_btn T=sm" href="ship/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td><div class="mm_table-item"></div></td>
											</tr>
											<tr>
												<td rowspan="2">
													<div class="mm_table-item">
														17
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														[셀러C] 배송정책
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														기본
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														30000071701
													</div>
												</td>
												<td class="T=table-left" rowspan="2">
													<div class="mm_table-item">
														<a class="T=linebreak" href="/seller/manage/ship-policy" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>배송 정책명17</b></a>
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														한진택배
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														<button type="button" class="mm_btn T=sm T=line T=light">
															<b>서비스 관리</b>
														</button>
													</div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														기흥
													</div>
												</td>
												<td>
													<div class="mm_table-item">
														경기 용인시 기흥구 보정동 242
													</div>
												</td>
												<!-- (D) 기본 배송정책으로 설정되었을 시 하이픈을 노출합니다. -->
												<td rowspan="2">
													<div class="mm_table-item"></div>
												</td>
												<td rowspan="2">
													<div class="mm_table-item">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<!-- (D) 기본으로 설정한 배송정책이 셀러가 등록한 정책일 시 삭제 버튼을 노출하지 않습니다. -->
																<a class="mm_btn T=sm" href="ship/modify" data-href="{ '_type': 'link' }"><b>수정</b></a>
															</div>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="mm_table-item">
														경기 용인시 기흥구 보정동 242
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- // 테이블 -->

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
								<div class="mm_lside">
									<a class="mm_btn T=line T=secondary btn_register" href="ship/register" data-href="{ '_type': 'link' }"><b>배송 정책 등록하기</b><i class="ico_register"></i></a>
								</div>
							</div>
							<!-- // 테이블상단 -->

							<div class="mm_table-none">
								<p>등록된 내용이 없습니다.</p>
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