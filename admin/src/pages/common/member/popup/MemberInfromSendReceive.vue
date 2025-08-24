<template>
	<layout-popup>
		<template #title>
			<h1><b>수신자 정보</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 테이블 영역 -->
					<div class="mm_table_box">
						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th scope="col">
												<div class="mm_table-item">
													회원가입 유형
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													회원명
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													회원아이디
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													회원등급
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													휴대폰번호
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													이메일
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													이메일 수신동의
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													SMS 수신동의
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													일반회원
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													김길동
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													kim1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													FAMILY
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													01012341234
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													kim1@naver.com
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													동의
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													비동의
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													네이버 로그인
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													양철수
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													yangyang2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													VVIP
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													01012341234
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													yang@naver.com
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													동의
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													동의
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													카카오 로그인
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													손지은
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													dlwlrma
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													VIP
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													01012341234
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													dlwlrma@naver.com
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													비동의
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													동의
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													애플 로그인
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													황엠몬
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													mmon
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													VIP
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													01012341234
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													mmon@naver.com
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													동의
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													동의
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->

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
						</div>
						<!-- // 페이지네이션 -->
					</div>
					<!-- // 테이블 영역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>
