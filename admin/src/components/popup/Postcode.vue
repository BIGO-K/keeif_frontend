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

					<!-- 우편번호 검색안내 -->
					<div class="m_popup-postcode-notice">
						<p>새로운 주소인 도로명+건물번호, 건물명 또는 구주소인 지번을<br>검색하시면 아래와 같은 통합검색이 가능합니다</p>
						<section class="m...notice-tip">
							<h4><i class="ico_tip"></i><b>우편번호 통합검색 TIP</b></h4>
							<ul>
								<li><strong>도로명 + 건물번호</strong><span>예) 테헤란로 152</span></li>
								<li><strong>동/읍/면/리 + 번지</strong><span>예) 역삼동 737</span></li>
								<li><strong>동/읍/면/리 + 건물명</strong><span>예) 방배동 우성아파트</span></li>
							</ul>
							<p>예) 통합검색 <strong>‘역삼동 강남파이낸스센터’</strong> 검색결과</p>
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
						</section>
					</div>
					<!-- // 우편번호 검색안내 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>