<template>
	<base-block :block="block">
		<ul>
			<li
				v-for="showcase in block.showcase_partition?.showcases"
				:key="showcase.id"
			>
				<div>
					<mm-link :to="{ name: 'InfluencerShop', params: { id: showcase.influencer.id } }">
						<figure>
							<lazyload
								class="mui_bg-cover image_influencer"
								:src="showcase.influencer.logo_image_url"
							></lazyload>
							<figcaption>
								<strong>{{ showcase.influencer.name }}</strong>
								<p>{{ showcase.influencer.description }}</p>
							</figcaption>
						</figure>
					</mm-link>
					<toggle
						v-model:is-active="follows[showcase.influencer.id]"
						class="btn_follow"
						title="팔로우"
						active-title="팔로잉"
						active-class="S=switch-on"
						is-lazy
						@click="changeFollow(showcase.influencer.id)"
					>
						<b>팔로우</b>
					</toggle>
				</div>
				<mm-link
					:to="{ name: 'ShowcaseDetail', params: { id: showcase.id } }"
				>
					<figure>
						<lazyload
							class="mui_bg-cover image_banner"
							:src="showcase.image_url"
						></lazyload>
						<figcaption>
							<p class="text_banner1">
								{{ showcase.text_1 }}
							</p>
							<p class="text_banner2">
								{{ showcase.text_2 }}
							</p>
							<!-- (D) 등록된 text_banner가 없을 때 노출합니다. -->
							<p
								v-if="!showcase.text_1 && !showcase.text_2 && showcase.alt"
								class="text_alt"
							>
								{{ showcase.alt }}
							</p>
						</figcaption>
					</figure>
				</mm-link>
				<!-- 쇼케이스에 등록된 첫 번째 상품 그룹 중 첫 번째 상품을 노출합니다 -->
				<div
					v-if="showcase.main_goods"
					class="mui_product-item"
				>
					<mm-link
						:to="{ name: 'ProductDetail', params: { id: showcase.main_goods.id } }"
					>
						<figure>
							<lazyload
								class="mui_bg-cover image_product"
								:src="showcase.main_goods.thumbnail_url"
							></lazyload>
							<p
								v-if="showcase.main_goods.is_only_adult"
								class="text_adult"
							>
								<b class="mui_ir-blind">미성년자 구매불가</b>
								<i class="uico_adult"></i>
							</p>
							<figcaption>
								<p class="text_product">
									{{ showcase.main_goods.name }}
								</p>
								<p class="text_sale">
									{{ showcase.main_goods.sale_rate }}%
								</p>
								<p class="text_price">
									<strong>{{ number(showcase.main_goods.base_discounted_price) }}</strong>
								</p>
							</figcaption>
						</figure>
						<i class="uico_link"></i>
					</mm-link>
				</div>
			</li>
		</ul>
	</base-block>
</template>
<script setup lang="ts">
	import { ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useInfluencer } from '$/composables/useInfluencer';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';
	import BaseBlock from '@/component/block/BaseBlock.vue';

	const props = defineProps<{ block: Block }>();

	const { isMember, bom, router, loading } = useGlobalPageContext();
	const { number } = useFormatter();
	const { follow, unFollow, checkFollow } = useInfluencer();

	const follows = ref<{ [id: number]: boolean }>({});

	if (isMember.value) {
		const influencerIds: number[] = [];
		props.block.showcase_partition?.showcases.forEach(showcase => {
			influencerIds.push(showcase.influencer.id);
		});
		try {
			const followRelation = await checkFollow([...new Set(influencerIds)]);
			follows.value = Object.fromEntries(
				followRelation.map(relation => [relation.influencer_id, relation.is_following]),
			);
		}
		catch (e) {
			//
		}
	}

	/** 팔로우 toggle 처리 */
	async function changeFollow(id: number) {
		if (!isMember.value) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: router.currentRoute.value.fullPath,
						},
					});
				}
			});
		}

		loading.show();
		try {
			if (follows.value[id]) {
				await unFollow(id);

				return follows.value[id] = false;
			}

			await follow(id);
			follows.value[id] = true;
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}
</script>

<style lang="scss">
	@import 'src/asset/scss/block/feature/show_bp_nn=w6Xh57_s5';
</style>