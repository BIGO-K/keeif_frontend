<template>
	<div
		class="m_mylike-folder"
		data-sortable
	>
		<!-- 상단영역 -->
		<div class="m_mylike-folder-head">
			<div class="mm_lside">
				<button
					type="button"
					class="btn_add-folder"
					@click="bomCreateWishlistFolder"
				>
					<i class="ico_add"></i><b>새 폴더 추가하기</b>
				</button>
				<p class="text_sortable-note">
					<i class="ico_sortable-handle"><span class="mm_ir-blind">순서이동 버튼</span></i>을 눌러 순서를 편집하세요
				</p>
			</div>
			<div class="mm_rside">
				<button
					type="button"
					class="mm_btn T=sm T=line T=light btn_sort-edit"
				>
					<i class="ico_sortable"></i><b>순서편집</b>
				</button>
				<button
					type="button"
					class="mm_btn T=sm T=line T=light btn_sort-cancel"
				>
					<b>취소</b>
				</button>
				<button
					type="button"
					class="mm_btn T=sm T=primary btn_sort-complete"
				>
					<b>저장</b>
				</button>
			</div>
		</div>

		<!-- 폴더목록 -->
		<ul>
			<!-- (D) 기본폴더는 수정, 삭제, 순서이동이 불가능합니다 -->
			<li>
				<mm-link :to="{ name: 'MyWishlistProductDetail', params: { id: 123 }}">
					<lazyload
						class="mm_bg-contain image_product"
						src="/image/_sample/prod_x1_2.png"
					></lazyload>
					<b>기본폴더<small>50</small></b>
				</mm-link>
				<div class="mm_btn_box">
					<div class="mm_inline">
						<button
							type="button"
							class="btn_sort-handler"
						>
							<i class="ico_sortable-handle"></i><b class="mm_ir-blind">순서이동</b>
						</button>
					</div>
				</div>
			</li>
			<li>
				<mm-link :to="{ name: 'MyWishlistProductDetail', params: { id: 123 }}">
					<i class="ico_like"></i><b>구매각<small>0</small></b>
				</mm-link>
				<div class="mm_btn_box">
					<div class="mm_inline">
						<button
							type="button"
							class="mm_btn T=2xs T=line T=lighter btn_modify"
						>
							<b>수정</b>
						</button>
						<button
							type="button"
							class="btn_remove"
						>
							<i class="ico_remove"></i><b class="mm_ir-blind">폴더 삭제</b>
						</button>
						<button
							type="button"
							class="btn_sort-handler"
						>
							<i class="ico_sortable-handle"></i><b class="mm_ir-blind">순서이동</b>
						</button>
					</div>
				</div>
			</li>
			<li>
				<mm-link :to="{ name: 'MyWishlistProductDetail', params: { id: 123 }}">
					<lazyload
						class="mm_bg-contain image_product"
						src="/image/_sample/prod_x1_1.png"
					></lazyload>
					<b>예쁜가방<small>50</small></b>
				</mm-link>
				<div class="mm_btn_box">
					<div class="mm_inline">
						<button
							type="button"
							class="mm_btn T=2xs T=line T=lighter btn_modify"
						>
							<b>수정</b>
						</button>
						<button
							type="button"
							class="btn_remove"
						>
							<i class="ico_remove"></i><b class="mm_ir-blind">폴더 삭제</b>
						</button>
						<button
							type="button"
							class="btn_sort-handler"
						>
							<i class="ico_sortable-handle"></i><b class="mm_ir-blind">순서이동</b>
						</button>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import mons from '$/utils/mons';
	import Lazyload from '@/component/Lazyload.vue';

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