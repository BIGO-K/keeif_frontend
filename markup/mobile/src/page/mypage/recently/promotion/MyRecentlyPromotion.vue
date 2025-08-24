<template>
	<p
		v-if="items.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>최근 본 기획전이 없습니다
	</p>

	<template v-else>
		<p class="m_myrecent-note">
			* 2주 후 자동 삭제
		</p>
		<div class="mm_list m_myrecent-promo">
			<ul>
				<li>
					<mm-link :to="{ name: 'PromotionDetail', params: { id: 123 } }">
						<b class="text_status">진행중</b><p>특가! 봄 신상 핫 세일</p>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'PromotionDetail', params: { id: 123 } }">
						<b class="text_status">진행중</b><p>깜짝 브랜드day ♡ MAX 추가 20%인하</p>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'PromotionDetail', params: { id: 123 } }">
						<b class="text_status">진행중</b><p>LESHOP 아울렛 독점오픈! 매장상품 저렴하게</p>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'PromotionDetail', params: { id: 123 } }">
						<b class="text_status T=status-off">종료</b><p>브랜드 위크 최대 24% 쿠폰혜택</p>
					</mm-link>
				</li>
				<li>
					<mm-link :to="{ name: 'PromotionDetail', params: { id: 123 } }">
						<b class="text_status T=status-off">종료</b><p>온라인 쿠폰위크대전 SUMMER 소장각 ITEM 가득</p>
					</mm-link>
				</li>
			</ul>
		</div>
	</template>
</template>

<script setup lang="ts">
	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>