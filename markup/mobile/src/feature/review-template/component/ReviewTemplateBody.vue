<template>
	<h6 class="mm_text-label">
		<b>신체 정보 입력</b><strong class="mm_text-variable">(선택)</strong>
	</h6>
	<div class="mm_flex T=equal">
		<div class="mm_form_mix-linked">
			<div class="mm_form-text">
				<button
					type="button"
					class="btn_text-clear"
				>
					<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
				</button>
				<label>
					<input
						type="number"
						class="textfield"
						data-text
					>
					<i class="bg_text"></i>
					<span class="text_placeholder">키</span>
				</label>
			</div>
			<span class="text_linked">cm</span>
		</div>
		<div class="mm_form_mix-linked">
			<div class="mm_form-text">
				<button
					type="button"
					class="btn_text-clear"
				>
					<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
				</button>
				<label>
					<input
						type="number"
						class="textfield"
						data-text
					>
					<i class="bg_text"></i>
					<span class="text_placeholder">몸무게</span>
				</label>
			</div>
			<span class="text_linked">kg</span>
		</div>
		<div class="mm_form_mix-linked">
			<form-select :v-model="sortShoesSize">
				<option>발 사이즈</option>
			</form-select>
			<span class="text_linked">mm</span>
		</div>
	</div>
	<div class="mm_note">
		<ul>
			<li>해당 정보는 다른 분들의 사이즈 참고용으로만 사용되고 개인식별정보는 공개되지 않습니다</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import FormSelect from '@/component/form/FormSelect.vue';

	const sortShoesSize = ref('');
</script>

<style lang="scss">
	@use '../../../asset/scss/helper/mixin';

	/** 리뷰관리 */
	// 리뷰 쓰기
	.m_overlay-myreview {
		> .mm_inner {
			.mm_note {
				+ .mm_text-label {
					margin-top: 0;
					padding-top: 20px;
				}
			}

			// 신체정보입력
			> .mm_flex {
				@include mixin.prefix(flex-wrap, wrap, webkit);
				margin-top: -8px;
				padding-top: 2px;

				> .mm_form_mix-linked {
					margin-top: 8px;
					min-width: 130px;
					max-width: 50%;

					.text_linked {
						margin-right: 0;
						width: 46px;
						line-height: 4.6rem;
					}
				}

				+ .mm_note {
					margin-top: 8px;
					padding: 0;
				}
			}
		}
	}
</style>