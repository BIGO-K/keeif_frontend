<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>1:1 문의 수정</b>
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

					<!-- 폼 영역 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>문의 번호</b>
										</th>
										<td><p>1238</p></td>
										<th scope="row">
											<b>문의 유형</b>
										</th>
										<td><p>배송 &#62; 배송 확인</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>판매처</b>
										</th>
										<td colspan="3">
											<p>제휴사1</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>등록자</b>
										</th>
										<td><p>홍길동(abc123)</p></td>
										<th scope="row">
											<b>등록일자</b>
										</th>
										<td><p>2022-03-25</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>답변자</b>
										</th>
										<td><p>관리자 A</p></td>
										<th scope="row">
											<b>답변일시</b>
										</th>
										<td><p>2022-03-25 12:12:12</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>답변 수정자</b>
										</th>
										<td><p>관리자 A</p></td>
										<th scope="row">
											<b>답변 수정일시</b>
										</th>
										<td><p>2022-03-25 12:12:12</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>주문번호</b>
										</th>
										<td><p>123456789</p></td>
										<th scope="row">
											<b>문의 상품 코드</b>
										</th>
										<td><p>2354652</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>문의 상품명</b>
										</th>
										<td colspan="3">
											<p>블루마운틴 캔버스 스니커즈 ML201 화이트 002-JSS002ML</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>이관 여부</b>
										</th>
										<td><p>-</p></td>
										<th scope="row">
											<b>이관일자</b>
										</th>
										<td><p>-</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>문의 제목</b>
										</th>
										<td colspan="3">
											<p>문의 제목입니다</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>문의 내용</b>
										</th>
										<td colspan="3">
											<div class="text_content">
												<p>
													배송을 한달째 못받고 있습니다.<br>
													<br>
													배송 확인드립니다.<br>
												</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>답변 양식</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<a class="mm_btn T=line T=secondary" href="inquiry-template/register" target="_blank" title="새 창 열림"><b>양식 신규 등록하기</b></a>
												<div class="mm_form-select T=lg">
													<label>
														<select data-select>
															<option>양식을 선택하세요.</option>
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
											<b>답변 내용</b>
										</th>
										<td colspan="3">
											<div class="mm_form-textarea">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 5000 }"></textarea><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 5,000자 입력</span>
												</label>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 폼 영역 -->

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