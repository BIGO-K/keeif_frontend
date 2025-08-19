<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>자동발행쿠폰 설정</b>
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

					<!-- 자동 발행 쿠폰 목록 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>생일 쿠폰</b>
										</th>
										<td colspan="3">
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>자동발행쿠폰을 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_note">
												<p>매월 1일 자동 발행됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>첫 구매 쿠폰</b>
										</th>
										<td colspan="3">
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>자동발행쿠폰을 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_note">
												<p>첫 구매 건 구매 배송 완료 15일째 자동 발급됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴면 회원 쿠폰</b>
										</th>
										<td colspan="3">
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>자동발행쿠폰을 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_note">
												<p>1년간 로그인 이력이 없는 회원이 로그인 시 자동 발급됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>오랜만 쿠폰</b>
										</th>
										<td colspan="3">
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>자동발행쿠폰을 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_note">
												<p>6개월간 구매 이력이 없는 회원이 로그인 시 자동 발급됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>링크 쿠폰</b>
										</th>
										<td colspan="3">
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>자동발행쿠폰을 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_note">
												<p>지정된 링크에서 유입된 회원에게 쿠폰 다운로드 팝업이 노출됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>임직원 쿠폰</b>
										</th>
										<td colspan="3">
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>자동발행쿠폰을 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_note">
												<p>매월 1일 임직원이 쇼핑몰 로그인 시 자동 발급됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>승급 쿠폰</b>
										</th>
										<td colspan="3">
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>자동발행쿠폰을 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_note">
												<p>회원 등급이 승급되었을 경우 최초 1회 자동 발급됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>회원 가입 완료 쿠폰</b>
										</th>
										<td colspan="3">
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>자동발행쿠폰을 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_note">
												<p>회원 가입 완료 시 자동 발급됩니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>APP 최초 설치 자동 발행 쿠폰</b>
										</th>
										<td colspan="3">
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>자동발행쿠폰을 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 유의사항 -->
						<div class="mm_note">
							<ul>
								<li>생일 쿠폰, 첫 구매 쿠폰, 휴면 회원 쿠폰, 오랜만 쿠폰, 임직원 쿠폰의 경우 <strong>자동 발급되어 마이페이지 &#62; 혜택 관리</strong>에서 확인 가능합니다.</li>
								<li>임직원 쿠폰의 경우 <strong>매월 1일</strong> 임직원 대상으로 설정된 쿠폰이 100장 지급됩니다. (매월 1일 이후 임직원으로 등록되었을 경우 자동 발급이 되지 않으니 쿠폰 수동 발급을 통해 발급해주세요)</li>
								<li>쿠폰에 설정된 발행 기간과 별개로 임직원 쿠폰은 <strong>발급된 당월까지만 사용 가능</strong>합니다.</li>
								<li>임직원 탈퇴 또는 임직원 대상에서 제외된 경우 발급된 쿠폰은 즉시 제거됩니다.</li>
								<li>승급 쿠폰은 <strong>최초 1회</strong>만 발급됩니다. 등급 하락 후 다시 승급 할 경우 발급되지 않습니다.</li>
							</ul>
						</div>
						<!-- // 유의사항 -->
					</div>
					<!-- // 자동 발행 쿠폰 목록 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>저장하기</b>
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