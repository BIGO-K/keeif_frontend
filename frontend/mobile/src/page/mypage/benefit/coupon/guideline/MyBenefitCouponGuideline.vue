<template>
	<!-- 상품목록 -->
	<div class="m_overlay-mycoupon">
		<!-- 상품 -->
		<table v-if="coupon.apply_range_type === 'goods' && goodsPaginator">
			<colgroup>
				<col style="width:71px;">
				<col style="width:17.24137%;">
				<col style="width:20.11494%;">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th scope="col">
						<b>상품</b>
					</th>
					<th scope="col">
						<b>브랜드명</b>
					</th>
					<th scope="col">
						<b>상품명</b>
					</th>
					<th scope="col">
						<b>적용 제한사항</b>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="goods in goodsPaginator.data"
					:key="goods.id"
				>
					<td>
						<lazyload
							class="mm_bg-cover image_product"
							:src="goods.thumbnail_url"
						></lazyload>
					</td>
					<td>{{ goods.brand_name }}</td>
					<td>
						<p class="text_product">
							{{ goods.name }}
						</p>
					</td>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">{{ number(coupon.maximum_discount_amount) }}원</strong></p>
						<p>최저 금액조건: {{ number(coupon.min_sell_price) }}원</p>
						<p>사용가능 디바이스: {{ coupon.usable_device_labels.join(', ') }}</p>
					</td>
				</tr>
			</tbody>
		</table>

		<!-- 브랜드 -->
		<table v-else-if="coupon.apply_range_type === 'brand' && brandPaginator">
			<colgroup>
				<col style="width:43.10344%;">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th scope="col">
						<b>브랜드명</b>
					</th>
					<th scope="col">
						<b>적용 제한사항</b>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="brand in brandPaginator.data"
					:key="brand.id"
				>
					<td>{{ brand.name }}</td>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">{{ number(coupon.maximum_discount_amount) }}원</strong></p>
						<p>최저 금액조건: {{ number(coupon.min_sell_price) }}원</p>
						<p>사용가능 디바이스: {{ coupon.usable_device_labels.join(', ') }}</p>
					</td>
				</tr>
			</tbody>
		</table>
		<!-- 모든 상품 -->
		<table v-else>
			<thead>
				<tr>
					<th scope="col">
						<b>적용 제한사항</b>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<p>최대 할인금액: <strong class="mm_text-variable">{{ number(coupon.maximum_discount_amount) }}원</strong></p>
						<p>최저 금액조건: {{ number(coupon.min_sell_price) }}원</p>
						<p>사용가능 디바이스: {{ coupon.usable_device_labels.join(', ') }}</p>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<pagination
		v-if="goodsPaginator"
		v-bind="{
			currentPage: goodsPaginator.current_page,
			itemsPerPage: goodsPaginator.per_page,
			totalCount: goodsPaginator.total
		}"
		@move:page="fetch"
	></pagination>
	<pagination
		v-else-if="brandPaginator"
		v-bind="{
			currentPage: brandPaginator.current_page,
			itemsPerPage: brandPaginator.per_page,
			totalCount: brandPaginator.total
		}"
		@move:page="fetch"
	></pagination>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useMyCoupon } from '$/composables/useMyCoupon';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';

	const props = defineProps<{
		couponId: number
		closer: CloseHandler<boolean>
		layout?: string
	}>();
	defineExpose<OverlayComponentExpose>({
		title: `사용 조건`,
	});

	const { number } = useFormatter();
	const { getMyCoupon, getUsableBrandPaginator, getUsableGoodsPaginator } = useMyCoupon();

	const coupon = await getMyCoupon(props.couponId);
	const goodsPaginator = ref<Paginator<CouponUsableGoods>>();
	const brandPaginator = ref<Paginator<CouponUsableBrand>>();


	async function fetch(page: number = 1) {
		try {
			if (coupon.apply_range_type == 'brand') {
				brandPaginator.value = await getUsableBrandPaginator(props.couponId, page);
			}
			else if (coupon.apply_range_type == 'goods') {
				goodsPaginator.value = await getUsableGoodsPaginator(props.couponId, page);
			}
		}
		catch (e) {
			useErrorAlert(e);
		}
	}

	await fetch();
</script>