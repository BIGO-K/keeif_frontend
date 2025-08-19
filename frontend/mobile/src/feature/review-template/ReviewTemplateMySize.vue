<template>
	<div class="m_overlay-mysize">
		<h6 class="mm_text-label">
			<b>성별</b>
		</h6>
		<div class="mm_radio-list T=chain">
			<ul>
				<li>
					<form-radio
						v-model="form.gender"
						name="dev_radio-gender"
						value="E"
					>
						<b class="mm_block">
							<span class="text_label">선택안함</span>
						</b>
					</form-radio>
				</li>
				<li>
					<form-radio
						v-model="form.gender"
						name="dev_radio-gender"
						value="M"
					>
						<b class="mm_block">
							<span class="text_label">남성</span>
						</b>
					</form-radio>
				</li>
				<li>
					<form-radio
						v-model="form.gender"
						name="dev_radio-gender"
						value="F"
					>
						<b class="mm_block">
							<span class="text_label">여성</span>
						</b>
					</form-radio>
				</li>
			</ul>
		</div>
		<h6 class="mm_text-label">
			<b>MY 핏</b>
		</h6>
		<div class="mm_radio-list T=chain">
			<ul>
				<li>
					<form-radio
						v-model="form.fit_id"
						name="dev_radio-fit"
						:value="null"
					>
						<b class="mm_block">
							<span class="text_label">선택안함</span>
						</b>
					</form-radio>
				</li>
				<li
					v-for="fit in fitList"
					:key="fit.id"
				>
					<form-radio
						v-model="form.fit_id"
						name="dev_radio-fit"
						:value="fit.id"
					>
						<b class="mm_block">
							<span class="text_label">{{ fit.label }}</span>
						</b>
					</form-radio>
				</li>
			</ul>
		</div>
		<h6 class="mm_text-label">
			<b>신발 카테고리 선택</b>
		</h6>
		<div class="mm_radio-list T=chain">
			<ul>
				<li>
					<form-radio
						v-model="form.shoes_category_code"
						name="dev_radio-shoes-category"
						:value="null"
					>
						<b class="mm_block">
							<span class="text_label">선택안함</span>
						</b>
					</form-radio>
				</li>
				<li
					v-for="shoesCategory in shoesCategories"
					:key="shoesCategory.code"
				>
					<form-radio
						v-model="form.shoes_category_code"
						:value="shoesCategory.code"
						name="dev_radio-shoes-category"
					>
						<b class="mm_block">
							<span class="text_label">{{ shoesCategory.label }}</span>
						</b>
					</form-radio>
				</li>
			</ul>
		</div>
		<h6 class="mm_text-label">
			<b>신발 사이즈 선택</b>
		</h6>
		<div class="mm_radio-list T=chain">
			<ul>
				<li>
					<form-radio
						v-model="form.shoes_size_id"
						name="dev_radio-shoes-size"
						:value="null"
					>
						<b class="mm_block">
							<span class="text_label">선택안함</span>
						</b>
					</form-radio>
				</li>
				<li
					v-for="shoesSize in shoesSizes"
					:key="shoesSize.id"
				>
					<form-radio
						v-model="form.shoes_size_id"
						name="dev_radio-shoes-size"
						:value="shoesSize.id"
					>
						<b class="mm_block">
							<span class="text_label">{{ shoesSize.label }}</span>
						</b>
					</form-radio>
				</li>
			</ul>
		</div>
		<h6 class="mm_text-label">
			<b>신체 정보 입력</b>
		</h6>
		<div class="mm_form_mix-linked">
			<form-text
				v-model="form.height"
				input-mode="number"
				placeholder="키"
			></form-text>
			<span class="text_linked">cm</span>

			<form-text
				v-model="form.weight"
				input-mode="number"
				placeholder="몸무게"
			></form-text>
			<span class="text_linked">kg</span>
		</div>
		<div class="mm_note">
			<ul>
				<li>사이즈 정보를 입력해주시면 맞춤 상품을 추천해드립니다.</li>
			</ul>
		</div>
		<div class="m_overlay-mysize-agree">
			<form-check
				v-model="form.information_agree"
				label="사이즈 정보 수집 및 이용 동의"
			></form-check>
			<ul>
				<li><strong>1. 수집 목적:</strong> 상품 추천 서비스</li>
				<li><strong>2. 수집 항목:</strong> 성별, 신체 사이즈(키, 몸무게, 체형), 신발 카테고리, 신발 사이즈</li>
				<li><strong>3. 수집 및 보유기간:</strong> 개인정보처리방침 보유 기간에 따라 관리</li>
			</ul>
		</div>
	</div>
	<div class="mm_btn_box T=fixed">
		<button
			type="button"
			class="btn_size-save"
			@click="update"
		>
			<b>저장하기</b>
		</button>
	</div>
</template>

<script setup lang="ts">
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { usePersonalization } from '$/composables/usePersonalization';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormText from '@/component/form/FormText.vue';

	const props = defineProps<{
		closer: CloseHandler<void>
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `My 사이즈`,
	});
	const { bom } = useGlobalPageContext();
	const { getMySize, getShoesCategories, getShoesSizes, getFits, updateMySize } = usePersonalization();

	const shoesSizes = await getShoesSizes();
	const shoesCategories = await getShoesCategories();
	const fitList = await getFits();

	const mySize = await getMySize();

	const { form, validate } = useForm<MySizeForm>({
		gender: mySize.gender,
		fit_id: mySize.fit_id,
		shoes_category_code: mySize.shoes_category_code,
		shoes_size_id: mySize.shoes_size_id,
		height: mySize.height,
		weight: mySize.weight,
		information_agree: mySize.information_agree || false,
	}, {
		rule: {
			'gender(성별)': ['required'],
			'fit_id(My 핏)': [`in:${(fitList.map(fit => fit.id)).join()}`],
			'shoes_category_code(신발 카테고리)': [`in:${(shoesCategories.map(category => category.code)).join()}`],
			'shoes_size_id(신발 사이즈)': [`in:${(shoesSizes.map(size => size.id)).join()}`],
			'height(키)': ['between:0,300'],
			'weight(몸무게)': ['between:0,255'],
			'information_agree(사이즈 정보 수집 및 이용 동의)': ['required', 'in:true'],
		},
		message: {
			'information_agree.required': ':param를 체크해주세요.',
			'information_agree.in': ':param를 체크해주세요.',
			'fit_id.in': ':param를 올바르게 선택해주세요.',
			'shoes_category_code.in': ':param를 올바르게 선택해주세요.',
			'shoes_size_id.in': ':param를 올바르게 선택해주세요.',
		},
	});

	async function update() {
		try {
			await validate();
			await updateMySize(form.value);
			bom.alert('내 사이즈가 수정되었습니다.', props.closer);
		}
		catch (e) {
			useErrorAlert(e);
		}
	}
</script>

<style lang="scss">
	@use '../../asset/scss/helper/function';
	@use '../../asset/scss/helper/mixin';

	.m_overlay-mysize {
		padding: 19px 14px 0;

		.mm_text-label {
			padding-bottom: 11px;
		}

		#{function.escape('.mm_radio-list.T=chain')} {
			ul {
				margin: -9px 0 0 -9px;

				li {
					margin: 0;
					padding: 9px 0 0 9px;
					width: 25%;
				}
			}

			.mm_form-radio {
				display: block;
				padding: 0;
				height: 42px;

				.mm_block {
					height: 100%;
					border: 1px solid #e6e6e6;
					border-radius: 2px;
					text-align: center;

					.text_label {
						@include mixin.font(#4a4a4a '1.4rem/3.8rem');
					}
				}

				:checked + .mm_block {
					border-color: var(--color_main);

					.text_label {
						color: var(--color_main);
					}
				}
			}

			+ .mm_text-label {
				margin-top: 39px;
			}
		}

		.mm_form_mix-linked {
			.mm_form-text {
				max-width: 122px;
			}

			+ .mm_note {
				margin-top: 8px;
			}
		}

		&-agree {
			margin-top: 35px;
			padding: 17px 13px 13px;
			border: 1px solid #e6e6e6;
			border-radius: 3px;

			ul {
				margin-top: 14px;
				@include mixin.font(#5c5c5c '1.3rem/2.2rem');

				li {
					strong {
						color: var(--color_text_base);
					}
				}
			}
		}
	}
</style>