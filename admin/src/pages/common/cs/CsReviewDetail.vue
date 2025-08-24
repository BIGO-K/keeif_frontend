<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>상품평 상세</b>
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

					<!-- 상품평 상세 영역 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>베스트 리뷰</b>
										</th>
										<td colspan="3">
											-
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>등록자</b>
										</th>
										<td><p>김길동(kim123)</p></td>
										<th scope="row">
											<b>등록일자</b>
										</th>
										<td><p>2022-04-07</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>상품 코드</b>
										</th>
										<td colspan="3">
											<p>123456789</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>상품명</b>
										</th>
										<td colspan="3">
											<p>오트밀 시그니처 톤온톤와펜 Unisex 반팔맨투맨 SPTS2E108I1</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>상품 옵션</b>
										</th>
										<td colspan="3">
											<p>black / 100</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>만족도</b>
										</th>
										<td colspan="3">
											<p>4 / 5</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>상품평</b>
										</th>
										<td colspan="3">
											<div class="text_content">
												<p>
													배송이 빠르고 좋네요!
													<br>
													<br>
													전반적으로 만족해요!!<br>
													색상이 실제와 좀 다르지만 쓸만해요
												</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>첨부파일(이미지)</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<a class="text_linked text_file" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>SENDBILL.jpg</b></a>
												<a class="mm_btn T=xs T=line T=light" href="#" download><b>다운로드</b></a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 폼 하단 -->
						<div class="mm_form_box-unit">
							<div class="mm_rside">
								<a class="mm_btn" href="review" data-href="{ '_type': 'link' }"><b>목록</b></a>
							</div>
						</div>
						<!-- // 폼 하단 -->
					</div>
					<!-- // 상품평 상세 영역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>삭제하기</b></a>
								<!-- <button type="button" class="mm_btn T=xl T=tertiary"><b>베스트 리뷰 해제하기</b></button> -->
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>베스트 리뷰 설정하기</b>
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