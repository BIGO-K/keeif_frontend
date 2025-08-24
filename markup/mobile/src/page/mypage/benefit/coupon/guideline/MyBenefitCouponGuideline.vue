<template>
	<!-- 상품목록 -->
	<div class="m_overlay-mycoupon">
		<!-- 모든 상품 -->
		<table v-if="guidelineType === 'all'">
			<thead>
				<tr>
					<th scope="col">
						<b>적용 제한사항</b>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 30,000원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
				<tr>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 0원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
				<tr>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 10,000원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
				<tr>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 30,000원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
			</tbody>
		</table>

		<!-- 상품 -->
		<table v-if="guidelineType === 'prod'">
			<colgroup>
				<col style="width:71px;">
				<col style="width:17.24137%;">
				<col style="width:20.11494%;">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th scope="col">
						<b>상품</b>
					</th>
					<th scope="col">
						<b>브랜드명</b>
					</th>
					<th scope="col">
						<b>상품명</b>
					</th>
					<th scope="col">
						<b>적용 제한사항</b>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<lazyload
							class="mm_bg-cover image_product"
							src="/image/_sample/prod_x1_1.png"
						></lazyload>
					</td>
					<td>엠몬스타</td>
					<td>
						<p class="text_product">
							COLLEGE 스웻셔츠 Univ MTM 4COLOR
						</p>
					</td>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 30,000원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
				<tr>
					<td>
						<lazyload
							class="mm_bg-cover image_product"
							src="/image/_sample/prod_x1_2.png"
						></lazyload>
					</td>
					<td>엠몬스타</td>
					<td>
						<p class="text_product">
							위클리특가 Woodland
						</p>
					</td>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 0원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
				<tr>
					<td>
						<lazyload
							class="mm_bg-cover image_product"
							src="/image/_sample/prod_x1_3.png"
						></lazyload>
					</td>
					<td>엠몬스타</td>
					<td>
						<p class="text_product">
							컬러그라데이션 오버핏 맨투맨 BLUE 컬러그라데이션 오버핏 맨투맨 BLUE
						</p>
					</td>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 10,000원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
				<tr>
					<td>
						<lazyload
							class="mm_bg-cover image_product"
							src="/image/_sample/prod_x1_4.png"
						></lazyload>
					</td>
					<td>엠몬스타</td>
					<td>
						<p class="text_product">
							JE Asymmetry Wrap Skirt T-shirts
						</p>
					</td>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 30,000원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
			</tbody>
		</table>

		<!-- 브랜드 -->
		<table v-if="guidelineType === 'brand'">
			<colgroup>
				<col style="width:43.10344%;">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th scope="col">
						<b>브랜드명</b>
					</th>
					<th scope="col">
						<b>적용 제한사항</b>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>엠몬스타</td>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 30,000원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
				<tr>
					<td>엠몬스타</td>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 0원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
				<tr>
					<td>엠몬스타</td>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 10,000원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
				<tr>
					<td>엠몬스타</td>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">3,000원</strong></p>
						<p>최저 금액조건: 30,000원</p>
						<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<pagination></pagination>
</template>

<script setup lang="ts">
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';

	const guidelineType: string = 'all';// 임시 변수

	defineExpose<OverlayComponentExpose>({
		title: `사용 조건`,
	});
</script>