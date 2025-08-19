<template>
	<div class="mm_inner m_overlay-postcode">
		<form-text
			v-model="keyword"
			class="mm_form-text T=lg"
			type="search"
			@keyup.enter="doSearch($event)"
		>
			<template #button>
				<button
					type="button"
					class="btn_search"
					placeholder="도로명 또는 지번을 입력하세요"
					@click="search"
				>
					<i class="ico_search"></i><b class="mm_ir-blind">검색하기</b>
				</button>
			</template>
		</form-text>
		<div
			v-if="!paginator"
			class="m_overlay-postcode-guide"
		>
			<dl>
				<dt><strong>TIP</strong>도로명, 건물명, 지번 중 선택하여<br>입력하세요</dt>
				<dd>도로명 + 건물번호<strong>예) 테헤란로 152</strong></dd>
				<dd>동/읍/면/리 + 번지<strong>예) 역삼동 737</strong></dd>
				<dd>건물명, 아파트명<strong>예) 삼성동 힐스테이트</strong></dd>
			</dl>
			<section>
				<h5 class="m_overlay-postcode-title">
					<b>예) ‘삼성동 힐스테이트’ 검색결과</b>
				</h5>
				<div class="m_overlay-postcode-item">
					<dl>
						<dt>도로명</dt>
						<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
					</dl>
					<dl>
						<dt>지번</dt>
						<dd>서울특별시 강남구 역삼1동 737</dd>
					</dl>
					<strong class="text_postcode">06236</strong>
				</div>
			</section>
		</div>

		<!-- 우편번호 검색결과 -->
		<template v-else>
			<h5 class="m_overlay-postcode-title">
				<b>주소 검색결과 총 <strong>{{ paginator.total }}</strong>건</b>
			</h5>

			<p
				v-if="paginator.total < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>검색 결과가 없습니다
			</p>

			<template v-else>
				<div class="m_overlay-postcode-list">
					<ul>
						<li
							v-for="item in paginator.data"
							:key="item.road_address"
						>
							<a @click.prevent="applyAddress(item)">
								<div class="m_overlay-postcode-item">
									<dl>
										<dt>도로명</dt>
										<dd>{{ item.road_address }}</dd>
									</dl>
									<dl>
										<dt>지번</dt>
										<dd>{{ item.jibun_address }}</dd>
									</dl>
									<strong class="text_postcode">{{ item.zip_code }}</strong>
								</div>
							</a>
						</li>
					</ul>
				</div>

				<pagination
					:current-page="paginator.current_page"
					:items-per-page="paginator.per_page"
					:total-count="paginator.total"
					@move:page="movePage"
				></pagination>
			</template>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import mons from '$/utils/mons';
	import { useAddress } from '$/composables/useAddress';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import Pagination from '@/component/Pagination.vue';

	defineExpose<OverlayComponentExpose>({
		title: `우편번호 검색`,
	});

	const props = withDefaults(defineProps<{
		needDawnDeliveryCheck?: boolean
		closer: CloseHandler<SearchAddress>
	}>(), {
		needDawnDeliveryCheck: false,
	});

	const { getAddressPaginator, isDawnDeliveryCheck } = useAddress();
	const keyword = ref<string>('');
	const { loading, bom } = mons();
	const paginator = ref<Paginator<SearchAddress>>();

	async function movePage(toPage: number) {
		paginator.value = await getAddressPaginator(keyword.value, toPage);
	}
	async function doSearch(event: KeyboardEvent) {
		event.preventDefault();
		if (event.key === 'Enter') {
			await search();
		}

	}
	async function search() {
		if (keyword.value === '') {
			return bom.alert('검색어를 입력해주세요.');
		}

		if (keyword.value.length < 2) {
			return bom.alert('검색어는 2자 이상 입력해주세요.');
		}
		loading.show();
		try {
			paginator.value = await getAddressPaginator(keyword.value);
		}
		catch (error) {
			useErrorAlert(error);
		}
		finally {
			loading.hide();
		}
	}

	async function applyAddress(searchedAddress: SearchAddress) {
		if (props.needDawnDeliveryCheck) {
			searchedAddress.is_dawn_delivery = await isDawnDeliveryCheck(searchedAddress.road_address);
		}
		props.closer(searchedAddress);
	}
</script>