<template>
	<layout
		v-if="information"
		:title="information.brand_name"
	>
		<!-- 브랜드샵 상단 영역 -->
		<template v-if="information">
			<div
				class="m_brand-head"
			>
				<h3
					class="text_brand"
				>
					<lazyload
						class="mm_bg-cover image_banner"
						:src="information.top_mobile_image_url === '' ? null : information.top_mobile_image_url "
						:is-error-image="false"
					></lazyload>
					<b>{{ information.brand_name }}</b>
				</h3>
				<p class="text_main">
					{{ information.main_text }}
				</p>
				<p class="text_sub">
					{{ information.sub_text }}
				</p>
				<div class="m_brand-head-private">
					<ul>
						<li>
							<toggle
								:is-active="isWishedBrand"
								is-lazy
								class="btn_like"
								@click="toggleWish"
							>
								<i class="ico_like"></i><b>좋아요</b>
							</toggle>
						</li>
						<li>
							<button
								type="button"
								class="btn_sns-share"
								@click="shareStore.open($event, information.brand_name, `#${information.brand_name}`, information.top_mobile_image_url)"
							>
								<i class="ico_share"></i><b>공유하기</b>
							</button>
						</li>
					</ul>
				</div>
			</div>

			<showcase-brand
				v-if="information.brand_contents.length > 0"
				:brand-contents="information.brand_contents"
			></showcase-brand>

			<!-- 큐레이션 -->
			<section
				v-if="curationGoodsGroup.length > 0 && nowDisplayCurationGoods.mainCuration"
				class="m_brand-curation"
			>
				<h4><b>CURATION</b></h4>
				<goods-item
					:key="nowDisplayCurationGoods.mainCuration.id"
					class="T=single"
					:goods="nowDisplayCurationGoods.mainCuration"
					hide-tag
					hide-upper-price
				>
				</goods-item>

				<div class="mm_product-list T=card">
					<ul>
						<li
							v-for="remain in nowDisplayCurationGoods.remain"
							:key="remain.id"
						>
							<goods-item
								class="T=pa"
								:goods="remain"
								hide-brand
								hide-tag
								hide-upper-price
							>
							</goods-item>
						</li>
					</ul>
				</div>
				<div
					v-if="curationGoodsGroup.length > 1"
					class="mm_btn_box"
				>
					<div class="mm_inline">
						<button
							type="button"
							class="mm_btn T=sm T=line T=dark"
							@click="curationMore"
						>
							<b>새로운 상품 더보기</b><i class="ico_more-load"></i>
						</button>
					</div>
				</div>
			</section>
		</template>

		<!-- 상품리스트 -->
		<filtered-goods-list
			:total-count="totalCount"
			:filterable="filterable"
			:goods-list-by-page="goodsListByPage"
			:init-params-for-command="paramsForCommand"
			:fetch-count="fetchCount"
			:fetch-list="fetchList"
		>
		</filtered-goods-list>

	<!-- //상품리스트 -->
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useShareStore } from '$/stores/useShareStore';
	import { useBrandShop } from '$/composables/useBrandShop';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFilterable } from '$/composables/useFilterable';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useWishedBrand } from '$/composables/useWishedBrand';
	import NotFoundError from '$/errors/NotFoundError';
	import Layout from '@/component/layout/Layout.vue';
	import FilteredGoodsList from '@/component/FilterGoodsList.vue';
	import GoodsItem from '@/component/GoodsItem.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';
	import ShowcaseBrand from '@/feature/showcase/component/ShowcaseBrand.vue';

	const { bom, loading, isMember, route, router } = useGlobalPageContext();
	const shareStore = useShareStore();
	const brandId = Number(route.params.id);

	const {
		information,
		fetchFilterable,
		fetchList,
		fetchCount,
	} = await useBrandShop(brandId);

	if (!information.value) {
		new NotFoundError('존재하지 않는 브랜드입니다.');
	}

	const {
		filterable,
		goodsListByPage,
		paramsForCommand,
		totalCount,
		startContext,
	} = useFilterable(
		fetchFilterable,
		fetchCount,
		fetchList,
	);

	const { check, add, remove } = useWishedBrand();

	const isWishedBrand = ref<boolean>(false);
	check([brandId]).then(rel => isWishedBrand.value = rel.some(rel => rel.brand_id == brandId && rel.liked));

	await startContext();

	const curationGoodsGroup = computed(() => {
		if (!information.value || information.value.curations.length < 1) {
			return [];
		}

		const curationGroup = [];
		for (let i = 0; i < (information.value.curations).length; i += 4) {
			curationGroup.push(information.value.curations.slice(i, i + 4));
		}

		return curationGroup;
	});

	/**
	 * 큐레이션 상품 처리용
	 */
	const selectedCurationIndex = ref(0);
	const nowDisplayCurationGoods = computed(() => {
		if (curationGoodsGroup.value.length < 1) {
			return {
				mainCuration: null,
				remain: [],
			};
		}

		return {
			mainCuration: curationGoodsGroup.value[selectedCurationIndex.value][0],
			remain: curationGoodsGroup.value[selectedCurationIndex.value].length > 1
				? curationGoodsGroup.value[selectedCurationIndex.value].slice(1, (curationGoodsGroup.value[selectedCurationIndex.value].length))
				: [],
		};
	});

	function curationMore() {
		loading.show();
		if (selectedCurationIndex.value === curationGoodsGroup.value.length - 1) {
			selectedCurationIndex.value = 0;
		}
		else {
			selectedCurationIndex.value = selectedCurationIndex.value + 1;
		}
		loading.hide();
	}

	const toggleWish = async () => {
		if (!isMember.value) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: route.fullPath,
						},
					});
				}
			});
		}

		loading.show();
		try {
			if (isWishedBrand.value) {
				await remove(brandId);
				isWishedBrand.value = false;

				return;
			}

			await add(brandId);
			isWishedBrand.value = true;
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	};
</script>