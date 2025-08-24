<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>공지사항</b>
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

					<!-- 공지사항 상세 영역 -->
					<div class="mm_form_box">
						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>제목</b>
										</th>
										<td colspan="3">
											<p>정산 처리 오류에 대한 공지입니다.</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>중요 공지</b>
										</th>
										<td colspan="3">
											<p>중요</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>공지내용</b>
										</th>
										<td colspan="3">
											<div class="mm_editor-content">
												<p>정산 처리 오류에 대한 공지입니다.</p>
												<br>
												<p>공지사항 내용</p>
												<p>감사합니다.</p>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 폼 하단 -->
						<div class="mm_form_box-unit">
							<div class="mm_rside">
								<a class="mm_btn" href="notice" data-href="{ '_type': 'link' }"><b>목록</b></a>
							</div>
						</div>
						<!-- // 폼 하단 -->
					</div>
					<!-- // 공지사항 상세 영역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=line T=tertiary">
									<b>삭제하기</b>
								</button>
								<a class="mm_btn T=xl T=tertiary" href="modify" data-href="{ '_type': 'link' }"><b>수정하기</b></a>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->

					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>다음공지</b>
									</th>
									<td colspan="3">
										<a href="detail" data-href="{ '_type': 'link' }"><b>[긴급] 정산 변경에 따른 공자사항입니다.</b></a>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>이전공지</b>
									</th>
									<td colspan="3">
										<a href="detail" data-href="{ '_type': 'link' }"><b>일반 문의 관련 공지사항입니다.</b></a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>