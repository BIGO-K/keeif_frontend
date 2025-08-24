<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>발송 내용 확인</b>
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

					<!-- 발송 내역 상세 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>푸시제목<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>(광고)푸시 광고 입니다푸시 광고 입니다</p></td>
									<th scope="row">
										<b>발송일시<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td><p>2022-03-15 12:00</p></td>
								</tr>
								<tr>
									<th scope="row">
										<b>푸시 내용<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="text_content">
											<p>
												푸시 내용<br>
												푸시 내용 푸시 내용<br>
												푸시 내용
											</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>푸시 링크<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<a href="#" target="_blank" title="새 창 열림"><b>https://m.store.co.kr/event/promotion/125</b></a>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>푸시 이미지</b>
									</th>
									<td colspan="3">
										<div class="mm_form-table">
											<table>
												<tbody>
													<tr>
														<th scope="row">
															<b>푸시 이미지</b>
														</th>
														<td><i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-preload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i></td>
													</tr>
													<tr>
														<th scope="row">
															<b>대체 텍스트</b>
														</th>
														<td><p>푸시 이미지 대체 텍스트</p></td>
													</tr>
												</tbody>
											</table>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 발송 내역 상세 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=tertiary" href="/member/push" data-href="{ '_type': 'link' }"><b>목록으로</b></a>
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