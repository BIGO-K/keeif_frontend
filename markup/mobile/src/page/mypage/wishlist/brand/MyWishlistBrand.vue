<template>
	<p
		v-if="brands.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>찜한 브랜드가 없습니다
	</p>

	<div
		v-else
		class="m_mylike-brand"
	>
		<ul>
			<li>
				<mm-link :to="{ name: 'BrandShop', params: { id: 123 } }">
					<figure>
						<lazyload
							class="mm_bg-contain image_brand"
							src="/image/_sample/brand_logo_1.jpg"
							:is-ratio="true"
							:is-error-image="false"
						></lazyload>
						<figcaption>내셔널지오그래픽</figcaption>
					</figure>
				</mm-link>
				<button
					type="button"
					class="btn_remove"
				>
					<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
				</button>
			</li>
			<li>
				<mm-link :to="{ name: 'BrandShop', params: { id: 123 } }">
					<figure>
						<lazyload
							class="mm_bg-contain image_brand"
							src="/image/_sample/brand_logo_2.jpg"
							:is-ratio="true"
							:is-error-image="false"
						></lazyload>
						<figcaption>내셔널지오그래픽</figcaption>
					</figure>
				</mm-link>
				<button
					type="button"
					class="btn_remove"
				>
					<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
				</button>
			</li>
			<li>
				<mm-link :to="{ name: 'BrandShop', params: { id: 123 } }">
					<figure>
						<lazyload
							class="mm_bg-contain image_brand"
							src="/image/_sample/brand_logo_3.jpg"
							:is-ratio="true"
							:is-error-image="false"
						></lazyload>
						<figcaption>나이키</figcaption>
					</figure>
				</mm-link>
				<button
					type="button"
					class="btn_remove"
				>
					<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
				</button>
			</li>
			<li>
				<mm-link :to="{ name: 'BrandShop', params: { id: 123 } }">
					<figure>
						<lazyload
							class="mm_bg-contain image_brand"
							src="/image/_sample/brand_logo_4.jpg"
							:is-ratio="true"
							:is-error-image="false"
						></lazyload>
						<figcaption>아디다스오리지날</figcaption>
					</figure>
				</mm-link>
				<button
					type="button"
					class="btn_remove"
				>
					<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
				</button>
			</li>
			<li>
				<mm-link :to="{ name: 'BrandShop', params: { id: 123 } }">
					<figure>
						<lazyload
							class="mm_bg-contain image_brand"
							src="/image/_sample/brand_logo_5.jpg"
							:is-ratio="true"
							:is-error-image="false"
						></lazyload>
						<figcaption>올리비아로렌</figcaption>
					</figure>
				</mm-link>
				<button
					type="button"
					class="btn_remove"
				>
					<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import Lazyload from '@/component/Lazyload.vue';

	const brands: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>