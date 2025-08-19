<template>
	<layout-popup>
		<template #title>
			<h1><b>이관 사유</b></h1>
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
										<b>문의 제목</b>
									</th>
									<td colspan="3">
										<p>교환반품 문의입니다.</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>셀러</b>
									</th>
									<td colspan="3">
										<!-- (D) 주문정보가 없는 문의일 경우 셀러 검색영역을 노출합니다. -->
										<div class="mm_selected">
											<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
											<a class="mm_btn T=line" href="/search/seller-single" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 검색</b></a>
											<ul>
												<li>
													<b>셀러 A</b>
													<button type="button" class="btn_remove">
														<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
													</button>
												</li>
											</ul>
										</div>
									</td>
									<!-- (D) 주문정보가 있는 문의일 경우 설정되있는 셀러를 노출합니다. -->
									<!-- <td colspan="3"><p>셀러 A</p></td> -->
								</tr>
								<tr>
									<th scope="row">
										<b>이관 사유</b>
									</th>
									<td colspan="3">
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 1000 }"></textarea><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">최대 1,000자 입력</span>
											</label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- // 폼 영역 -->

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<a class="mm_btn T=xl T=line T=tertiary" href="#" data-href="{ '_type': 'link' }"><b>취소하기</b></a>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>이관하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>