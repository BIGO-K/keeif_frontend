<template>
	<div class="mm_inner m_overlay-postcode">
		<div class="mm_form-text T=lg">
			<button
				type="button"
				class="btn_search"
			>
				<i class="ico_search"></i><b class="mm_ir-blind">검색하기</b>
			</button>
			<button
				type="button"
				class="btn_text-clear"
			>
				<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
			</button>
			<label>
				<input
					type="search"
					class="textfield"
					data-text
				>
				<i class="bg_text"></i>
				<span class="text_placeholder">도로명 또는 지번을 입력하세요</span>
			</label>
		</div>
		<div class="m_overlay-postcode-guide">
			<dl>
				<dt><strong>TIP</strong>도로명, 건물명, 지번 중 선택하여<br>입력하세요</dt>
				<dd>도로명 + 건물번호<strong>예) 테헤란로 152</strong></dd>
				<dd>동/읍/면/리 + 번지<strong>예) 역삼동 737</strong></dd>
				<dd>건물명, 아파트명<strong>예) 삼성동 힐스테이트</strong></dd>
			</dl>
			<section>
				<h5 class="m_overlay-postcode-title">
					<b>예) ‘삼성동 힐스테이트’ 검색결과</b>
				</h5>
				<div class="m_overlay-postcode-item">
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

		<!-- 우편번호 검색결과 -->
		<h5 class="m_overlay-postcode-title">
			<b>주소 검색결과 총 <strong>{{ items.length }}</strong>건</b>
		</h5>

		<p
			v-if="items.length < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>검색 결과가 없습니다
		</p>

		<template v-else>
			<div class="m_overlay-postcode-list">
				<ul>
					<li>
						<mm-link :to="{ name: '' }">
							<div class="m_overlay-postcode-item">
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
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: '' }">
							<div class="m_overlay-postcode-item">
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
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: '' }">
							<div class="m_overlay-postcode-item">
								<dl>
									<dt>도로명</dt>
									<dd>서울특별시 강남구 삼성로 115길 37-4(삼성동, 힐스테이트5차)</dd>
								</dl>
								<dl>
									<dt>지번</dt>
									<dd>서울특별시 강남구 삼성동 16 삼성동 힐스테이트</dd>
								</dl>
								<strong class="text_postcode">06236</strong>
							</div>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: '' }">
							<div class="m_overlay-postcode-item">
								<dl>
									<dt>도로명</dt>
									<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
								</dl>
								<dl>
									<dt>지번</dt>
									<dd>서울특별시 강남구 삼성동 16-2 삼성동힐스테이트1단지아파트</dd>
								</dl>
								<strong class="text_postcode">06236</strong>
							</div>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: '' }">
							<div class="m_overlay-postcode-item">
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
						</mm-link>
					</li>
				</ul>
			</div>

			<pagination></pagination>
		</template>
	</div>
</template>

<script setup lang="ts">
	import Pagination from '@/component/Pagination.vue';

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	defineExpose<OverlayComponentExpose>({
		title: `우편번호 검색`,
	});
</script>