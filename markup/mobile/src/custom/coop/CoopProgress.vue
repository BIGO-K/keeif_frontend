<template>
	<p
		v-if="items.length < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>진행중인 공구 일정이 없습니다
	</p>

	<template v-else>
		<div class="mm_coopbuy">
			<form-select
				:v-model="sortCoop"
			>
				<option>신상품순</option>
			</form-select>
			<div
				class="mm_product-list T=card"
				:class="{ 'T=skeleton': isLoading }"
			>
				<ul v-if="isLoading">
					<li>
						<div class="mm_product-item">
							<i class="image_product"></i>
							<div class="mm_product-item-info">
								<p class="text_brand"></p>
								<p class="text_product"></p>
								<p class="text_price"></p>
							</div>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<i class="image_product"></i>
							<div class="mm_product-item-info">
								<p class="text_brand"></p>
								<p class="text_product"></p>
								<p class="text_price"></p>
							</div>
						</div>
					</li>
				</ul>

				<ul>
					<li>
						<div class="mm_product-item">
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<lazyload
									class="mm_bg-cover"
									src="/image/_sample/influencer_profile1.jpg"
									:is-error-image="false"
								></lazyload>
								<b>Kanghana</b>
							</mm-link>
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/coopbuy_banner1.jpg"
									></lazyload>
									<p
										v-if="false"
										class="text_adult"
									>
										<b class="mm_ir-blind">미성년자 구매불가</b>
										<i class="ico_adult"></i>
									</p>
									<div>
										<b><i style="width: 60%;"></i></b>
										<dl><dt>남은시간</dt><dd>D-10<strong>21<span>:</span>35<span>:</span>54</strong></dd></dl>
									</div>
									<figcaption>
										<p class="text_brand">
											마이해빗
										</p>
										<p class="text_product">
											[8월 1주차 마지막 공구] 마이해빗 모로오렌지 클렌즈 100ml x 9병
										</p>
										<p class="text_sale">
											20%
										</p>
										<p class="text_price">
											<strong>112,000</strong><del><span>140,000</span></del>
										</p>
										<div class="mm_tag-list">
											<dawn-tag v-if="true"></dawn-tag>
											<b class="mm_tag T=square">무료배송</b>
											<b class="mm_tag T=square">쿠폰</b>
										</div>
									</figcaption>
								</figure>
							</mm-link>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<lazyload
									class="mm_bg-cover"
									src="/image/_sample/influencer_profile1.jpg"
									:is-error-image="false"
								></lazyload>
								<b>Kanghana</b>
							</mm-link>
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/coopbuy_banner3.jpg"
									></lazyload>
									<p
										v-if="false"
										class="text_adult"
									>
										<b class="mm_ir-blind">미성년자 구매불가</b>
										<i class="ico_adult"></i>
									</p>
									<div>
										<b><i style="width: 60%;"></i></b>
										<dl><dt>남은시간</dt><dd>D-10<strong>21<span>:</span>35<span>:</span>54</strong></dd></dl>
									</div>
									<figcaption>
										<p class="text_brand">
											마이해빗
										</p>
										<p class="text_product">
											[8월 1주차 마지막 공구] 마이해빗 모로오렌지 클렌즈 100ml x 9병
										</p>
										<p class="text_sale">
											20%
										</p>
										<p class="text_price">
											<strong>112,000</strong><del><span>140,000</span></del>
										</p>
										<div class="mm_tag-list">
											<dawn-tag v-if="true"></dawn-tag>
											<b class="mm_tag T=square">무료배송</b>
											<b class="mm_tag T=square">쿠폰</b>
										</div>
									</figcaption>
								</figure>
							</mm-link>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<mm-link
								class="btn_influencer"
								:to="{ name: 'MiniShop', params: { id: 123 } }"
							>
								<lazyload
									class="mm_bg-cover"
									src="/image/_sample/influencer_profile1.jpg"
									:is-error-image="false"
								></lazyload>
								<b>Kanghana</b>
							</mm-link>
							<mm-link :to="{ name: 'ProductDetail', params: { id: 123 } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"
										src="/image/_sample/coopbuy_banner2.jpg"
									></lazyload>
									<p
										v-if="false"
										class="text_adult"
									>
										<b class="mm_ir-blind">미성년자 구매불가</b>
										<i class="ico_adult"></i>
									</p>
									<div>
										<b><i style="width: 60%;"></i></b>
										<dl><dt>남은시간</dt><dd>D-10<strong>21<span>:</span>35<span>:</span>54</strong></dd></dl>
									</div>
									<figcaption>
										<p class="text_brand">
											마이해빗
										</p>
										<p class="text_product">
											[8월 1주차 마지막 공구] 마이해빗 모로오렌지 클렌즈 100ml x 9병
										</p>
										<p class="text_sale">
											20%
										</p>
										<p class="text_price">
											<strong>112,000</strong><del><span>140,000</span></del>
										</p>
										<div class="mm_tag-list">
											<dawn-tag v-if="true"></dawn-tag>
											<b class="mm_tag T=square">무료배송</b>
											<b class="mm_tag T=square">쿠폰</b>
										</div>
									</figcaption>
								</figure>
							</mm-link>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div
			v-if="items.length > 5"
			class="mm_foot"
		>
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=line T=dark btn_more"
				>
					<b>더보기</b><i class="ico_more"></i>
				</button>
			</div>
		</div>
	</template>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	const sortCoop = ref('');
	const isLoading = false;
</script>