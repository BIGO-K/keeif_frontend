<template>
	<layout-popup>
		<template #title>
			<h1><b>SMS 발송 상세</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 폼 영역 -->
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>발신자 SMS</b>
									</th>
									<td colspan="3">
										<p>1588-0000</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>수신자</b>
									</th>
									<td colspan="3">
										<!-- (D) 선택 이메일 발송, 검색 이메일 발송 클릭 시 노출 형태 -->
										<div class="mm_selected">
											<a class="mm_btn T=line" href="/member/inform/send/receive" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>수신 회원 <strong class="mm_text-secondary text_num">100</strong>명</b></a>
										</div>

										<!-- (D) 전체 회원 이메일 발송 클릭 시 노출 형태  -->
										<!-- <p>전체 회원</p> -->
										<div class="mm_note T=bottom">
											<ul>
												<li>동일한 번호로 가입된 계정이 여러 개 있을 경우 가입일시가 오래된 회원에게 발송됩니다.</li>
												<li>실제 수신된 회원만 노출됩니다.</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>발송 예정일</b>
									</th>
									<td colspan="3">
										<p>2023-06-01 10:00:00</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>발송일</b>
									</th>
									<td colspan="3">
										<p>2023-06-01 10:00:00</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>SMS 제목</b>
									</th>
									<td colspan="3">
										<p>SMS 발송3</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>내용</b>
									</th>
									<td colspan="3">
										<p>안녕하세요.</p>
										<p>2023년 2월 한달 간 새해 이벤트를 진행합니다.</p>
										<p>많은 관심 부탁드립니다.</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 폼 영역 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>