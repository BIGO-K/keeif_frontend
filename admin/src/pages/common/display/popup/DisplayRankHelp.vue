<template>
	<layout-popup>
		<template #title>
			<h1><b>랭킹별 자동/수동 설정에 따른 정책 안내</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content m_popup-help">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_note">
						<p class="mm_text-secondary">
							* 100개 유지가 되지 않는 경우: 배치 집계 이후, 품절 상품 발생 시 100개 데이터에서 제외되어 노출됩니다.
						</p>
					</div>
					<article>
						<h5><b>[ 아이템 랭킹 ]</b></h5>
						<section>
							<h6><b>1. 자동</b></h6>
							<p>카테고리 별 판매량 높은 순으로 노출됩니다.</p>
							<p>1번이 100개 미만일 시, 카테고리 별 최근 등록순으로 랭킹 노출됩니다.</p>
						</section>
						<section>
							<h6><b>2. 수동</b></h6>
							<p>각 카테고리별 수동으로 지정한 상품이 노출됩니다.</p>
							<p>1번이 100개 미만일 시, 나머지는 판매량 높은 순으로 상품이 자동 노출됩니다.</p>
							<p>1+2 합계가 100개 미만일 시, 최근 등록순으로 상품이 자동 노출됩니다.</p>
						</section>
					</article>
					<article>
						<h5><b>[ 브랜드 랭킹 ]</b></h5>
						<section>
							<h6><b>1. 자동</b></h6>
							<p>판매량이 높은 브랜드가 노출됩니다.(카테고리 없음)</p>
							<p>1번이 100개 미만일 시, 최근 등록순으로 브랜드가 노출됩니다.</p>
						</section>
						<section>
							<h6><b>2. 수동</b></h6>
							<p>수동으로 지정한 브랜드가 노출됩니다.</p>
							<p>1번이 100개 미만일 시, 나머지는 판매량 높은 순으로 브랜드가 자동 노출됩니다.</p>
							<p>1+2 합계가 100개 미만일 시, 최근 등록순으로 브랜드가 자동 노출됩니다.</p>
						</section>
						<section>
							<h6><b>3. 브랜드 상품</b></h6>
							<p>브랜드 상품은 판매량이 높은 순으로 4개 노출되며, 상품이 모자랄 경우 최근 등록 순으로 노출됩니다.</p>
							<p>브랜드에 등록된 상품이 없을 경우 수동/자동 설정이 되었어도 프론트에서 제외되어 노출됩니다.</p>
						</section>
					</article>
					<article>
						<h5><b>[ VIEW 랭킹 ]</b></h5>
						<section>
							<h6><b>1. 자동</b></h6>
							<p>카테고리 별 클릭 수 높은 순으로 노출됩니다.</p>
							<p>1번이 100개 미만일 시, 카테고리 별 최근 등록순으로 랭킹 노출됩니다.</p>
						</section>
						<section>
							<h6><b>2. 수동</b></h6>
							<p>각 카테고리별 수동으로 지정한 상품이 노출됩니다.</p>
							<p>1번이 100개 미만일 시, 나머지는 클릭 수 높은 순으로 상품이 자동 노출됩니다.</p>
							<p>1+2 합계가 100개 미만일 시, 최근 등록순으로 상품이 자동 노출됩니다.</p>
						</section>
					</article>
					<article>
						<h5><b>[ 찜 랭킹 ]</b></h5>
						<section>
							<h6><b>1. 자동</b></h6>
							<p>카테고리 별 좋아요 높은 순으로 노출됩니다.</p>
							<p>1번이 100개 미만일 시, 카테고리 별 최근 등록순으로 랭킹 노출됩니다.</p>
						</section>
						<section>
							<h6><b>2. 수동</b></h6>
							<p>각 카테고리별 수동으로 지정한 상품이 노출됩니다.</p>
							<p>1번이 100개 미만일 시, 나머지는 좋아요 높은 순으로 상품이 자동 노출됩니다.</p>
							<p>1+2 합계가 100개 미만일 시, 최근 등록순으로 상품이 자동 노출됩니다.</p>
						</section>
					</article>
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>