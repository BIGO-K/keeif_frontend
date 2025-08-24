<template>
	<layout
		:title="folderName"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div :class="['m_popup-mylike-folder', { 'S=folder-modify': isEditing }]">
			<!-- 상단영역 -->
			<div class="m...folder-head">
				<div class="mm_lside">
					<p>전체<strong class="mm_text-variable">{{ goodsList.length }}개</strong></p>
				</div>
				<div class="mm_rside">
					<div class="mm_btn_box">
						<div class="mm_inline">
							<button
								type="button"
								class="mm_btn T=sm T=line T=light btn_modify"
								@click="() => { isEditing = true }"
							>
								<i class="ico_modify"></i><b>편집</b>
							</button>
							<button
								type="button"
								class="mm_btn T=sm T=line T=primary btn_move"
								:disabled="selected.length < 1"
								@click="overlayMyWishlistProductFolder"
							>
								<b>이동</b>
							</button>
							<button
								type="button"
								class="mm_btn T=sm T=line T=primary btn_remove"
								:disabled="selected.length < 1"
								@click="unwish"
							>
								<b>삭제</b>
							</button>
							<button
								type="button"
								class="mm_btn T=sm T=line T=light btn_modify-cancel"
								@click="() => { isEditing = false }"
							>
								<i class="ico_modify"></i><b>편집취소</b>
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- 상품목록 -->
			<p
				v-if="goodsList.length < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>찜한 아이템이 없습니다
			</p>

			<div
				v-else
				class="mm_product-list T=sm"
			>
				<ul>
					<li
						v-for="goods in goodsList"
						:key="goods.id"
					>
						<div class="mm_product-item">
							<form-check
								v-model="selected"
								label-on-blind
								label="상품 선택"
								:value="goods.id"
							>
							</form-check>
							<mm-link :to="{ name: 'ProductDetail', params: { id: goods.id } }">
								<figure>
									<lazyload
										class="mm_bg-cover image_product"

										:src="goods.thumbnail_url"
									></lazyload>
									<p
										v-if="goods.is_soldout"
										class="text_soldout"
									>
										품절
									</p>
									<figcaption>
										<p class="text_brand">
											{{ goods.brand_name }}
										</p>
										<p class="text_product">
											{{ goods.name }}
										</p>
										<p class="text_price">
											<strong>{{ number(goods.base_discounted_price) }}</strong>
										</p>
									</figcaption>
								</figure>
							</mm-link>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref, computed, defineAsyncComponent } from 'vue';
	import { useToNumber } from '@vueuse/core';
	import { useWishedStore } from '$/stores/useWishedStore';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useWishedGoods } from '$/composables/useWishedGoods';
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';

	/** 전역 페이지 composable */
	const { bom, loading, openOverlay, route } = useGlobalPageContext();
	const folderId = useToNumber(`${route.params.id}`);
	/** formatter composable */
	const { number } = useFormatter();
	/** 찜 composable */
	const { getAll, getFolders } = useWishedGoods();
	const { remove } = useWishedStore();

	/** 찜한 상품 리스트 */
	const goodsList = ref(await getAll(folderId.value));
	/** 찜 폴더 리스트 */
	const folders = await getFolders();
	const folderName = computed(() => folders.find(folder => folder.id == folderId.value)?.name || '');

	/** 편집중 여부 */
	const isEditing = ref(false);

	/** 선택된 찜상품 */
	const selected = ref<number[]>([]);

	/** 폴더선택 overlay open */
	function overlayMyWishlistProductFolder() {
		const component = defineAsyncComponent(() => import('@/page/mypage/wishlist/product/folder/MyWishlistProductFolderMove.vue'));

		return openOverlay(component, {
			props: {
				goodsList: selected.value,
			},
			onClose: async () => {
				goodsList.value = await getAll(folderId.value);
				selected.value = [];
			},
		});
	}

	/** 찜 해제 */
	async function unwish() {
		bom.confirm('삭제하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await remove(selected.value);
				bom.alert('삭제되었습니다.', () => {
					selected.value = [];
				});
				goodsList.value = await getAll(folderId.value);
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});
	}
</script>