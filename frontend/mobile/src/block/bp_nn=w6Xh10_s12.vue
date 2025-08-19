<template>
	<base-block :block="block">
		<ul>
			<li
				v-for="banner in block.banner_partition?.banners"
				:key="banner.id"
			>
				<block-banner
					:banner="banner"
				></block-banner>
				<div class="mui_product-list">
					<ul>
						<li
							v-for="goods in banner.goods_group?.goods_list"
							:key="goods.id"
						>
							<div class="mui_product-item">
								<mm-link :to="getLink(goods.is_only_adult, goods.id)">
									<figure>
										<i
											class="mui_bg-cover image_product S=loaded"
											:style="`background-image: url(${goods.thumbnail_url})`"
										></i>
										<!-- 성인전용 -->
										<p
											v-if="goods.is_only_adult && !isVerifyAge"
											class="text_adult"
										>
											<b class="mm_ir-blind">미성년자 구매불가</b>
											<i class="uico_adult"></i>
										</p>
										<p
											v-if="goods.is_soldout"
											class="text_soldout"
										>
											<span>Sold<br> out</span>
										</p>

										<figcaption class="mui_ir-blind">
											<p class="text_product">
												{{ goods.name }}
											</p>
										</figcaption>
									</figure>
								</mm-link>
							</div>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</base-block>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useAuthStore } from '$/stores/useAuthStore';
	import BaseBlock from '@/component/block/BaseBlock.vue';
	import BlockBanner from '@/component/block/BlockBanner.vue';

	defineProps<{ block: Block }>();

	const authStore = useAuthStore();
	const me = authStore.member;

	const isVerifyAge = computed(() => me?.is_verify_age || false);

	const getLink = (isOnlyAdult: boolean, goodsId: number) => {
		if (isOnlyAdult && isVerifyAge.value === false) {
			return {
				name: 'AuthAdult',
				query: {
					redirect_to_after: `/product/${goodsId}`,
				},
			};
		}

		return {
			name: 'ProductDetail',
			params: {
				id: goodsId,
			},
		};
	};
</script>
<style lang="scss">
	@import 'src/asset/scss/block/basic/bp_nn=w6Xh10_s12';
</style>