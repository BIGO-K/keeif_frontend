<template>
	<layout>
		<template #content>
			<div class="mm_page-content">
				<!-- (D) 실제 내용을 추가하는 부분입니다. -->

				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>1DEPTH 페이지 관리</b>
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

					<!-- 탭메뉴 -->
					<div class="mm_tab_menu">
						<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
						<ul>
							<li><a class="S=tab-on" href="#" data-href="{ '_type': 'link' }" title="선택됨"><b>여성캐주얼</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>여성커리어</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>남성패션</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>골프</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>스포츠</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>아웃도어</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>유아동</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>캐주얼</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>언더웨어</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>패션슈즈/ACC</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>라이프</b></a></li>
						</ul>
					</div>
					<!-- // 탭메뉴 -->

					<!-- 테이블 영역 -->
					<div class="mm_table_box">
						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<colgroup>
										<col>
										<col style="width:300px;">
									</colgroup>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													구분
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													관리
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													1DEPTH 메인 배너
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm" href="/display/sub/1depth/banner" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>관리</b></a>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													베스트 브랜드
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm" href="/display/sub/1depth/best" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>관리</b></a>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													MD 추천상품
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm" href="/display/sub/1depth/recommend" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>관리</b></a>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													인기 브랜드
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm" href="/display/sub/1depth/popular" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>관리</b></a>
														</div>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->
					</div>
					<!-- // 테이블 영역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/components/layout/Layout.vue';
</script>