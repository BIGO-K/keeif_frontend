<template>
	<layout title="쇼케이스">
		<template v-if="showcase">
			<!-- 쇼케이스 상단 -->
			<div
				:key="showcase.id"
				class="m_showcase-detail-head"
			>
				<i class="image_banner">
					<lazyload
						tag="img"
						class="mm_bg-cover image_banner"
						:src="showcase.mobile_banner_url"
					></lazyload>
				</i>
				<div class="mm_inner">
					<p class="text_title">
						<b>{{ showcase.title }}</b>
					</p>
					<p class="text_date">
						{{ date(showcase.created_at, 'YYYY.MM.dd') }}
					</p>
					<p class="text_detail">
						{{ showcase.details }}
					</p>
				</div>
			</div>

			<!-- 동영상 -->
			<div
				v-if="showcase.is_video"
				class="m_showcase-detail-media"
				v-html="showcase.video_url"
			>
			</div>

			<!-- 상품그룹1 -->
			<div
				v-for="group in showcase.groups"
				:key="group.id"
				class="m_showcase-detail-product"
			>
				<i class="image_banner">
					<lazyload
						tag="img"
						:src="group.mobile_image_url"
					></lazyload>
				</i>
				<div class="mm_scroller T=x">
					<div class="mm_product-list T=card">
						<ul>
							<li
								v-for="goods in group.goods_list"
								:key="goods.id"
							>
								<goods-item
									class="T=pa"
									:goods="goods"
								></goods-item>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- 브랜드샵 -->
			<div class="m_showcase-detail-brand">
				<toggle
					class="btn_like"
					:is-active="isWishBrand"
					is-lazy
					@click="toggleLikeBrand"
				>
					<i class="ico_like-brand"></i><b class="mm_ir-blind">찜한 브랜드에 추가하기</b>
				</toggle>
				<p class="text_brand">
					{{ showcase.brand_name }}
				</p>
				<mm-link
					class="mm_btn T=xs T=primary btn_shop"
					:to="{ name: 'BrandShop', params: { id: showcase.brand_id } }"
				>
					<b>SHOP NOW</b><i class="ico_link T=sm"></i>
				</mm-link>
			</div>

			<!-- View More -->
			<section
				v-if="anotherShowcase.length > 0"
				class="mm_inner m_showcase-detail-more"
			>
				<h5><b>View More</b></h5>
				<carousel
					:items="anotherShowcase"
					:group-size="4"
					use-pagination
				>
					<template #default="{ item : anotherShowcase}">
						<mm-link :to="{ name: 'ShowcaseDetail', params: { id: anotherShowcase.id } }">
							<figure>
								<lazyload
									class="mm_bg-cover image_banner"
									:src="anotherShowcase.thumbnail_url"
								></lazyload>
								<figcaption>
									<p class="text_category">
										{{ anotherShowcase.sort_name }}
									</p>
									<p class="text_title">
										{{ anotherShowcase.title }}
									</p>
								</figcaption>
							</figure>
						</mm-link>
					</template>
				</carousel>
			</section>

			<!-- 하단 버튼 -->
			<div class="mm_foot">
				<div class="mm_btn_box">
					<mm-link
						class="mm_btn T=line T=dark"
						:to="{ name: 'Showcase' }"
					>
						<b>쇼케이스 메인으로 이동</b><i class="ico_link"></i>
					</mm-link>
				</div>
			</div>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useShowcase } from '$/composables/useShowcase';
	import { useWishedBrand } from '$/composables/useWishedBrand';
	import Layout from '@/component/layout/Layout.vue';
	import Carousel from '@/component/Carousel.vue';
	import GoodsItem from '@/component/GoodsItem.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Toggle from '@/component/Toggle.vue';
	const { getDetail, getAnothers } = useShowcase();
	const { date } = useFormatter();
	const { bom, loading, isMember, route, router } = useGlobalPageContext();
	const showcaseId = computed(() => Number(route.params.id));

	async function getShowcaseDetailInit() {
		const [pShowCase, pAnotherShowcase] = await Promise.all([
			getDetail(showcaseId.value),
			getAnothers(showcaseId.value),
		]);

		return {
			pShowCase,
			pAnotherShowcase,
		};
	}

	const { pShowCase, pAnotherShowcase } = await getShowcaseDetailInit();
	const showcase = ref<ShowcaseDetail>(pShowCase);
	const anotherShowcase = ref<OtherShowcase[]>(pAnotherShowcase);

	const { add, check, remove } = useWishedBrand();

	const isWishBrand = ref<boolean>(false);
	wishedCheck();

	function wishedCheck() {
		check([showcase.value.brand_id]).then(rel => isWishBrand.value = rel.some(rel => rel.brand_id == showcase.value.brand_id && rel.liked));
	}

	watch(showcaseId, async (to) => {
		if (to) {

			const { pShowCase, pAnotherShowcase } = await getShowcaseDetailInit();
			document.querySelector('.mm_scroller')?.scrollTo(0, 0);
			showcase.value = pShowCase;
			anotherShowcase.value = pAnotherShowcase;
			wishedCheck();
		}

	}, {
		flush: 'post',
	});

	const toggleLikeBrand = async () => {

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
			if (isWishBrand.value) {
				await remove(showcase.value.brand_id);
				isWishBrand.value = false;

				return;
			}

			await add(showcase.value.brand_id);
			isWishBrand.value = true;
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	};
</script>

<style src="./_showcase.scss" lang="scss"></style>