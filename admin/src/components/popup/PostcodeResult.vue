<template>
	<layout-popup>
		<template #title>
			<h1><b>우편번호 찾기</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-postcode">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<!-- 검색 -->
					<div class="m_popup-postcode-form">
						<div class="mm_form-text T=wide">
							<button type="button" class="btn_text-clear">
								<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
							</button>
							<label>
								<input type="text" class="textfield" data-text><i class="bg_text"></i>
								<span class="text_placeholder">검색할 주소를 입력해주세요.</span>
							</label>
						</div>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=lg T=tertiary btn_search">
									<b>검색</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 검색 -->

					<!-- 우편번호 검색결과 -->
					<template v-if="_isNone === false">
						<section class="m_popup-postcode-result">
							<h5><b>검색결과</b> <strong>1,234건</strong></h5>
							<div class="m...result-list">
								<ul>
									<li>
										<a href="#" onclick="return false;">
											<div class="m_popup-postcode-item">
												<dl>
													<dt>도로명</dt>
													<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터 2층 서비스센터</dd>
												</dl>
												<dl>
													<dt>지번</dt>
													<dd>서울특별시 강남구 역삼1동 737</dd>
												</dl>
												<strong class="text_postcode">06236</strong>
											</div>
										</a>
									</li>
									<li>
										<a href="#" onclick="return false;">
											<div class="m_popup-postcode-item">
												<dl>
													<dt>도로명</dt>
													<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
												</dl>
												<dl>
													<dt>지번</dt>
													<dd>서울특별시 강남구 역삼1동 737</dd>
												</dl>
												<strong class="text_postcode">06236</strong>
											</div>
										</a>
									</li>
									<li>
										<a href="#" onclick="return false;">
											<div class="m_popup-postcode-item">
												<dl>
													<dt>도로명</dt>
													<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
												</dl>
												<dl>
													<dt>지번</dt>
													<dd>서울특별시 강남구 역삼1동 737</dd>
												</dl>
												<strong class="text_postcode">06236</strong>
											</div>
										</a>
									</li>
									<li>
										<a href="#" onclick="return false;">
											<div class="m_popup-postcode-item">
												<dl>
													<dt>도로명</dt>
													<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
												</dl>
												<dl>
													<dt>지번</dt>
													<dd>서울특별시 강남구 역삼1동 737</dd>
												</dl>
												<strong class="text_postcode">06236</strong>
											</div>
										</a>
									</li>
									<li>
										<a href="#" onclick="return false;">
											<div class="m_popup-postcode-item">
												<dl>
													<dt>도로명</dt>
													<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
												</dl>
												<dl>
													<dt>지번</dt>
													<dd>서울특별시 강남구 역삼1동 737</dd>
												</dl>
												<strong class="text_postcode">06236</strong>
											</div>
										</a>
									</li>
								</ul>
							</div>

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
						</section>
					</template>

					<template v-else>
						<section class="m_popup-postcode-result">
							<h5><b>검색결과</b> <strong>0건</strong></h5>
							<div class="m...result-list">
								<p class="mm_text-none">
									<strong>검색 결과가 없습니다</strong>찾으시려는 도로명 주소의 건물번호 또는 건물명까지<br>상세히 입력해 주세요
								</p>
							</div>
						</section>
					</template>
					<!-- // 우편번호 검색결과 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	// 내용없음
	const _isNone = false;
</script>