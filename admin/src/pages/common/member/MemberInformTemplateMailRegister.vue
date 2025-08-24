<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>이메일 템플릿 등록</b>
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

					<!-- 공지사항 등록 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>템플릿명<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text maxlength="255"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 255자 입력</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>내용<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="3">
										<div class="mm_editor"></div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 공지사항 등록 영역 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>치환코드</b>
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
											<b>고객명</b>
										</th>
										<td><p>#{고객명}</p></td>
										<th scope="row">
											<b>등급</b>
										</th>
										<td><p>#{등급명}</p></td>
									</tr>
									<tr>
										<th scope="row">
											<b>쇼핑몰명</b>
										</th>
										<td colspan="3">
											<p>#{쇼핑몰 한글명}</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>고객명, 등급, 쇼핑몰명을 이메일 템플릿에 적용하고 싶으시면 #으로 시작하는 치환코드를 내용에 입력해주시기 바랍니다.</li>
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
									<b>등록하기</b>
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