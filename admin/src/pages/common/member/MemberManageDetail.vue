<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>회원 정보</b>
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

					<div class="mm_form_box">
						<!-- 폼 영역 -->
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>이름</b>
										</th>
										<td><p>홍길동</p></td>
										<th scope="row">
											<b>아이디</b>
										</th>
										<td><p>choi123</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>가입일시</b>
										</th>
										<td><p>2022-03-19 07:23:39</p></td>
										<th scope="row">
											<b>최근 방문일</b>
										</th>
										<td><p>2022-03-29 13:23:39</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>회원등급</b>
										</th>
										<td>
											<div class="mm_form_mix-linked">
												<div class="mm_form-select T=xs">
													<label>
														<select data-select>
															<option>FAMILY</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
												<button type="button" class="mm_btn T=line">
													<b>변경</b>
												</button>
											</div>
										</td>
										<th scope="row">
											<b>마케팅 수신 여부</b>
										</th>
										<td>
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-marketing" data-check checked>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">SMS</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-marketing" data-check checked>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">이메일</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>이메일</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<a class="mm_btn T=line" href="/member/manage/mail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>메일 발송</b></a>
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
														<span class="text_placeholder mm_ir-blind">@포함 최대 50자 입력</span>
													</label>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴대폰 번호</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<a class="mm_btn T=line" href="/member/manage/sms" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>SMS 발송</b></a>
												<p class="text_linked">
													0100000000
												</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>성별</b>
										</th>
										<td><p>남성</p></td>
										<th scope="row">
											<b>생년월일</b>
										</th>
										<td><p>1988-01-01</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>보유 적립금</b>
										</th>
										<td><a href="/member/manage/point" data-href="{ '_type': 'popup' }" title="새 창 열림"><b><span class="text_num">1234</span>원</b></a></td>
										<th scope="row">
											<b>발송 SMS 내역</b>
										</th>
										<td><a href="/member/manage/detail/sms" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>5건</b></a></td>
									</tr>
									<tr>
										<th scope="row">
											<b>발송 메일 내역</b>
										</th>
										<td><a href="/member/manage/detail/mail" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>5건</b></a></td>
										<th scope="row">
											<b>환불 계좌 정보</b>
										</th>
										<td>
											<!-- (D) 환불계좌가 등록되어 있을 경우 노출합니다. -->
											<!--
												<div class="mm_form_mix-linked">
												<a href="/member/manage/detail/refund/modify" class="mm_btn T=line" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>변경</b></a>
												<span class="text_linked">우리은행 / 1002555666666 / 홍길동</span>
												</div>
											-->
											<!-- (D) 환불계좌가 등록되어 있지 않을 경우 노출합니다. -->
											<a class="mm_btn T=line T=secondary" href="/member/manage/detail/refund/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>환불계좌 등록</b></a>
										</td>
									</tr>
									<tr>
										<th scope="row" rowspan="2">
											<b>수정이력</b>
										</th>
										<td colspan="3">
											<a class="mm_btn T=line" href="/member/manage/detail/history" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>수정이력 더보기</b></a>
											<!-- (D) 수정 이력이 없을 경우 노출합니다. -->
											<!-- <p>-</p> -->
										</td>
									</tr>
									<tr>
										<td colspan="3">
											<!-- 최근 5개 수정 이력 -->
											<div class="mm_table_box">
												<!-- 테이블 -->
												<div class="mm_table" data-table>
													<div class="mm_scroller">
														<table>
															<thead>
																<tr>
																	<th scope="col">
																		<div class="mm_table-item">
																			변경일시
																		</div>
																	</th>
																	<th scope="col">
																		<div class="mm_table-item">
																			변경자
																		</div>
																	</th>
																	<th scope="col">
																		<div class="mm_table-item">
																			변경 항목
																		</div>
																	</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<div class="mm_table-item">
																			2022-02-21 12:07:12
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			본인
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			휴대폰 번호 변경
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="mm_table-item">
																			2022-01-21 12:07:12
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			abc123(정유미)
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			이메일 주소 변경
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="mm_table-item">
																			2022-01-20 12:07:12
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			본인
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			마케팅 수신여부 변경
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="mm_table-item">
																			2022-01-15 12:07:12
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			kiki222(홍길동)
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			마케팅 수신여부 변경
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="mm_table-item">
																			2022-01-15 12:07:12
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			kiki222(홍길동)
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			마케팅 수신여부 변경
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<!-- // 테이블 -->

												<!-- (D) 수정 이력이 없을 경우 노출합니다. -->
												<!-- 내용없음 -->
												<!--
													<div class="mm_table-none">
													<p>등록된 내용이 없습니다.</p>
													</div>
												-->
												<!-- // 내용없음 -->
											</div>
											<!-- // 최근 5개 수정 이력 -->
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- // 폼 영역 -->

						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>비밀번호는 관리자가 임의 수정 불가능하며, <strong>로그인 > 비밀번호 찾기</strong> 페이지를 통해 비밀번호 찾기 진행이 가능합니다.</li>
								<li>휴대폰 번호 변경은 <strong>마이페이지 > 회원정보 수정</strong>에서 본인인증 후 수정이 가능합니다.</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>취소하기</b></a>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>수정하기</b>
								</button>
								<button type="button" class="mm_btn T=xl T=line T=secondary" onclick="mm.bom.prompt('회원정보의 이름을 입력해주세요.', null, { _title: '회원을 탈퇴처리합니다', forms: [{ _type: 'text', _placeholder: '회원 이름' }] })">
									<b>탈퇴처리</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>