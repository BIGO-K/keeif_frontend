<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>검색엔진 최적화(SEO)</b>
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
							<li>웹사이트 검색 결과 정보를 관리하는 메뉴입니다.</li>
							<li>설정 완료 후 <strong>저장 버튼을 클릭하셔야 저장 및 적용</strong>됩니다.(저장 버튼 미 클릭 시 설정된 내용은 저장 및 적용되지 않습니다.)</li>
						</ul>
					</div>
					<!-- // 유의사항 -->

					<!-- 기본 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>기본 설정</b>
							</h3>
							<div class="mm_lside">
								<div class="mm_note">
									<p>웹사이트에 노출되는 쇼핑몰 검색 결과 정보 설정</p>
								</div>
							</div>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>타이틀 (title)</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>메타태그 설명 (Description)</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 100 }"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 100자 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>메타태그 키워드 (keywords)</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder">콤마(,)로 구분하여 최대 10개 작성 예) 원피스, 쉬폰 원피스</span>
												</label>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 기본 설정 -->

					<!-- 소셜태그 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>소셜태그</b>
							</h3>
							<div class="mm_lside">
								<div class="mm_note">
									<p>쇼핑몰 URL을 SNS로 전송할때 노출되는 대표 이미지와 소개 내용 설정</p>
								</div>
							</div>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>대표 이미지</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-image">
												<div class="mm_form-image T=banner">
													<div class="mm_form-image-preview"></div>
													<label>
														<!-- (D) 고정 이미지 사이즈를 data-file의 _imageRatio 값을 width/height 형식으로 넣어주세요(단위px) -->
														<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000, '_imageRatio': '1200/627' }">
														<b class="mm_form-image-box mm_btn"><span>이미지 선택</span></b>
													</label>
													<button type="button" class="btn_remove-file">
														<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>페이스북에서 권장하는 미리보기 이미지 사이즈는 W 1200px * H 627px 이고, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 사이즈가 다르면, 비율에 맞게 크롭되어 저장됩니다.</li>
														<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>대표 제목<br>(og: title, twitter: title)</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 50자 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>대표 설명<br>(og: description, <br>twitter: description)</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 100 }"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 100자 입력</span>
												</label>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 소셜태그 설정 -->

					<!-- 네이버 검색 노출 설정 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>네이버 검색 노출</b>
							</h3>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>네이버 전용<br>사이트 소유 확인</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder">네이버 노출 시 필수 입력</span>
												</label>
											</div>
											<div class="mm_note">
												<p>네이버 웹마스터 도구 &#62; 사이트 관리 &#62; 사이트 소유확인 페이지에서 쇼핑몰 고유 key값만 복사해 붙여 넣어주세요.<br>단, 입력 후 바로 반영되지 않으며, 실제 검색에 반영되기까지는 시간이 소요될 수 있습니다.<br>예) &#60;meta name=“naver-site-verification” content=“쇼핑몰 고유 key값” /&#62;</p>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- // 네이버 검색 노출 설정 -->

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
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>