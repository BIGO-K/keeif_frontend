<template>
	<div class="m_product-option-select">
		<h5 class="mm_strapline">
			<b>필수 옵션</b>
		</h5>
		<dropdown
			icon-class="T=bold"
			group="option0"
		>
			<h6 class="mm_ir-blind">
				<b>옵션1</b>
			</h6>
			<template #button>
				<b>선택하세요</b>
			</template>
			<template #content>
				<div class="mm_scroller">
					<ul>
						<li>
							<span
								class="btn_option"
								title="품절"
							>
								<b>네이비</b><b>(품절)</b>
							</span>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>레드</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>블랙</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>화이트</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>그레이</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>그린</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>블루</b>
							</button>
						</li>
					</ul>
				</div>
			</template>
		</dropdown>
		<dropdown
			icon-class="T=bold"
			group="option0"
		>
			<h6 class="mm_ir-blind">
				<b>옵션2</b>
			</h6>
			<template #button>
				<b>선택하세요</b>
			</template>
			<template #content>
				<div class="mm_scroller">
					<ul>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>85</b>
							</button>
						</li>
						<li>
							<span
								class="btn_option"
								title="품절"
							>
								<b>90</b><b>(품절)</b>
							</span>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>95</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>100</b><b>(1개)</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>105</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>110</b>
							</button>
						</li>
					</ul>
				</div>
			</template>
		</dropdown>
		<dropdown
			icon-class="T=bold"
			group="option0"
		>
			<h6 class="mm_ir-blind">
				<b>옵션3</b>
			</h6>
			<template #button>
				<b>선택하세요</b>
			</template>
			<template #content>
				<div class="mm_scroller">
					<ul>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>85</b>
							</button>
						</li>
						<li>
							<span
								class="btn_option"
								title="품절"
							>
								<b>90</b><b>(품절)</b>
							</span>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>95</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>100</b><b>(1개)</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>105</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_option"
							>
								<b>110</b>
							</button>
						</li>
					</ul>
				</div>
			</template>
		</dropdown>
	</div>
	<div class="mm_foot">
		<div class="mm_btn_box">
			<button
				type="button"
				class="mm_btn T=line T=primary"
			>
				<b>재입고 알림 신청하기</b>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Dropdown from '@/component/Dropdown.vue';

	defineExpose<OverlayComponentExpose>({
		title: `재입고 알림 신청`,
		class: 'm_modal-restock',
	});
</script>

<style src="./_restock.scss" lang="scss"></style>