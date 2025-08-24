<template>
	<div class="m_overlay-card">
		<!-- 무이자할부안내 -->
		<section>
			<h3 class="mm_strapline">
				<b>무이자 할부 안내</b>
			</h3>
			<ul>
				<li>
					<lazyload
						class="mm_bg-contain image_card"
						src="/image/_sample/card_logo_1.png"
						:is-error-image="false"
					></lazyload>
					<p>하나카드 5만원이상 결제 시 2~6개월 무이자 할부</p>
					<span>2020.05.01~2020.05.05</span>
				</li>
				<li>
					<lazyload
						class="mm_bg-contain image_card"
						src="/image/_sample/card_logo_2.png"
						:is-error-image="false"
					></lazyload>
					<p>국민카드 5만원이상 결제 시 2~6개월 무이자 할부</p>
					<span>2020.05.01~2020.05.05</span>
				</li>
				<li>
					<lazyload
						class="mm_bg-contain image_card"
						src="/image/_sample/card_logo_3.png"
						:is-error-image="false"
					></lazyload>
					<p>농협카드 5만원이상 결제 시 2~6개월 무이자 할부</p>
					<span>2020.05.01~2020.05.05</span>
				</li>
			</ul>
		</section>

		<!-- 부분무이자할부안내 -->
		<section>
			<h3 class="mm_strapline">
				<b>부분 무이자 할부 안내</b>
			</h3>
			<ul>
				<li>
					<lazyload
						class="mm_bg-contain image_card"
						src="/image/_sample/card_logo_4.png"
						:is-error-image="false"
					></lazyload>
					<p>삼성카드 10개월 부분 무이자</p>
					<span>2020.05.01~2020.05.05</span>
				</li>
				<li>
					<lazyload
						class="mm_bg-contain image_card"
						src="/image/_sample/card_logo_5.png"
						:is-error-image="false"
					></lazyload>
					<p>신한카드 10개월 부분 무이자</p>
					<span>2020.05.01~2020.05.05</span>
				</li>
				<li>
					<lazyload
						class="mm_bg-contain image_card"
						src="/image/_sample/card_logo_6.png"
						:is-error-image="false"
					></lazyload>
					<p>하나카드 10개월 부분 무이자</p>
					<span>2020.05.01~2020.05.05</span>
				</li>
			</ul>
		</section>
	</div>
</template>

<script setup lang="ts">
	import Lazyload from '@/component/Lazyload.vue';

	defineExpose<OverlayComponentExpose>({
		title: `카드사별 혜택`,
	});
</script>