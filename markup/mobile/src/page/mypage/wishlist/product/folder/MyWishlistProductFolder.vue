<template>
	<div class="m_overlay-like-folder">
		<h3><b>상품을 담을 폴더를 선택하세요</b></h3>
		<button
			type="button"
			class="btn_add-folder"
			@click.prevent="bomCreateWishlistFolder"
		>
			<i class="ico_add"></i><b>새 폴더 추가하기</b>
		</button>
		<ul>
			<li>
				<button type="button">
					<lazyload
						class="mm_bg-cover image_product"
						src="/image/_sample/prod_x1_1.png"
					></lazyload>
					<b>기본폴더<small>50</small></b>
				</button>
			</li>
			<li>
				<button type="button">
					<i class="ico_like"></i><b>구매각<small>0</small></b>
				</button>
			</li>
			<li>
				<button type="button">
					<lazyload
						class="mm_bg-cover image_product"
						src="/image/_sample/prod_x1_2.png"
					></lazyload>
					<b>예쁜가방<small>50</small></b>
				</button>
			</li>
			<li>
				<button type="button">
					<lazyload
						class="mm_bg-cover image_product"
						src="/image/_sample/prod_x1_2.png"
					></lazyload>
					<b>완전조아요<small>50</small></b>
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import mons from '$/utils/mons';
	import Lazyload from '@/component/Lazyload.vue';

	defineExpose<OverlayComponentExpose>({
		title: `폴더 선택`,
	});

	const bomCreateWishlistFolder = () => {
		mons().bom.prompt(
			'추가할 폴더 이름을 입력하세요',
			(_is: boolean, _values: Record<string, string>) => {
				console.log(_is, _values);
			},
			{
				title: '새 폴더 추가하기',
				forms: [
					{ type: 'text', name: 'folder', maxLength: 10, placeholder: '최대 10자 입력' }
				]
			}
		);
	};
</script>