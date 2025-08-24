<template>
	<div class="m_overlay-experience">
		<!-- 상품정보 : 선택형 -->
		<div class="m_overlay-experience-product">
			<div class="mm_product-select">
				<dropdown
					v-model:is-active="dropdownActive"
					icon-class="T=bold"
				>
					<template #button>
						<b>상품을 선택해주세요</b>
					</template>
					<template #content>
						<div class="mm_scroller">
							<div class="mm_product-list T=xs">
								<ul>
									<template
										v-for="goods in reviewableGoods"
										:key="goods.id"
									>
										<li
											v-for="option in goods.option_list"
											:key="option.id"
										>
											<div
												class="mm_product-item"
												@click="selectGoods(goods, option)"
											>
												<a>
													<figure>
														<lazyload
															class="mm_bg-cover image_product"
															:src="goods.thumbnail_url"
														></lazyload>
														<figcaption>
															<p class="text_product">{{ goods.name }}</p>
															<p class="text_option">{{ optionText(option.name) }}</p>
														</figcaption>
													</figure>
												</a>
											</div>
										</li>
									</template>
								</ul>
							</div>
						</div>
					</template>
				</dropdown>
				<!-- (D) 선택된 상품이 노출됩니다. -->
				<div
					v-if="selected && selectedOption"
					class="mm_product-select-complete"
				>
					<div class="mm_product-item T=single-xs">
						<a>
							<figure>
								<lazyload
									:key="selectedOption.id"
									class="mm_bg-cover image_product"
									:src="selected.thumbnail_url"
								></lazyload>
								<figcaption>
									<p class="text_product">{{ selected.name }}</p>
									<p class="text_option">{{ optionText(selectedOption.name) }}</p>
								</figcaption>
							</figure>
						</a>
					</div>
					<button
						type="button"
						class="btn_remove"
						@click="selected = null; selectedOption = null;"
					>
						<i class="ico_remove"></i><b class="mm_ir-blind">삭제하기</b>
					</button>
				</div>
			</div>
		</div>
		<hr class="mm_line">

		<!-- 별점 -->
		<section>
			<h6><b>상품은 만족하셨나요?</b></h6>
			<!-- (D) 선택된 별점의 li에 'S=starscore-on' 클래스와 button에 '선택됨' 타이틀이 추가되며, input hidden의 value값에 점수가 입력됩니다. (0 선택안됨) -->
			<div class="m_overlay-myreview-starscore">
				<ul>
					<li
						v-for="score in 5"
						:key="score"
						:class="{ 'S=starscore-on': (form.rate || 0) >= score }"
					>
						<button
							type="button"
							:title="form.rate === score ? '선택됨' : ''"
							@click="form.rate = score"
						>
							<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 {{ score }}점</b>
						</button>
					</li>
				</ul>
				<input
					type="hidden"
					:value="form.rate"
				>
			</div>
		</section>


		<review-template-satisfy-setting
			v-if="useReviewTemplate && reviewTemplates.length && form.selected_review_templates"
			v-model:selected-review-templates="form.selected_review_templates"
			:review-templates="reviewTemplates"
		></review-template-satisfy-setting>

		<!-- 사이즈 -->
		<section v-if="false">
			<h6><b>사이즈는 어떤가요?</b></h6>
			<div class="mm_radio-list">
				<ul class="mm_flex T=equal">
					<li>
						<form-radio name="dev_radio-size">
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">작아요</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio name="dev_radio-size">
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">정사이즈예요</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio name="dev_radio-size">
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">생각보다 커요</span>
							</b>
						</form-radio>
					</li>
				</ul>
			</div>
		</section>

		<!-- 색상 -->
		<section v-if="false">
			<h6><b>색상은 어떤가요?</b></h6>
			<div class="mm_radio-list">
				<ul class="mm_flex T=equal">
					<li>
						<form-radio name="dev_radio-color">
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">화면보다 밝아요</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio name="dev_radio-color">
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">화면과 같아요</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio name="dev_radio-color">
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">화면보다 어두워요</span>
							</b>
						</form-radio>
					</li>
				</ul>
			</div>
		</section>

		<!-- 핏 -->
		<section v-if="false">
			<h6><b>핏은 어떤가요?</b></h6>
			<div class="mm_radio-list">
				<ul class="mm_flex T=equal">
					<li>
						<form-radio name="dev_radio-fit">
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">슬림해요</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio name="dev_radio-fit">
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">적당해요</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio name="dev_radio-fit">
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">오버핏이에요</span>
							</b>
						</form-radio>
					</li>
				</ul>
			</div>
		</section>

		<div class="mm_inner">
			<review-template-body
				v-if="isUsePersonalization"
				v-model:height="form.height"
				v-model:weight="form.weight"
				v-model:shoes-size="form.shoes_size"
			></review-template-body>
			<h6 class="mm_text-label">
				<b>체험단 후기 제목</b>
			</h6>
			<form-text
				v-model="form.title"
				maxlength="40"
				placeholder="최대 40자 입력"
			></form-text>
			<h6 class="mm_text-label">
				<b>리뷰 내용</b>
			</h6>
			<form-textarea
				v-model="form.contents"
				:byte="2000"
				placeholder="최소 10자 이상 입력하세요"
			></form-textarea>

			<form-image
				v-model="form.images"
				:max="10"
			></form-image>
			<div class="mm_note">
				<ul>
					<li>사진은 jpg, png 파일로 10개까지 업로드 가능합니다.</li>
					<li>첫번째 등록한 사진이 리뷰 대표 이미지로 설정됩니다.</li>
					<li>입력하신 리뷰 위에 등록한 이미지가 노출됩니다.</li>
					<li>동일한 문자 또는 자음/모음은 4회 이상 연속 입력할 수 없습니다.</li>
					<li>소중한 고객님의 개인 정보 보호를 위해 주민번호, 전화번호 등 개 인 정보는 절대 입력하지 않도록 주의해주세요.</li>
					<li>저작권 침해/음란/욕설/비방 글, 개인 정보 유출(전화번호, 주민 번호, 이름, 아이디 등), 판매/광고/홍보성 글을 등록한 경우 임의 로 삭제될 수 있습니다.</li>
				</ul>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
						@click="store"
					>
						<b>등록하기</b>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, watch } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useExperienceReview } from '$/composables/useExperienceReview';
	import { useForm } from '$/composables/useForm';
	import { useFormatter } from '$/composables/useFormatter';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { usePersonalization } from '$/composables/usePersonalization';
	import { useReview } from '$/composables/useReview';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormImage from '@/component/form/FormImage.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormText from '@/component/form/FormText.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';
	import ReviewTemplateBody from '@/feature/review-template/component/ReviewTemplateBody.vue';
	import ReviewTemplateSatisfySetting from '@/feature/review-template/component/ReviewTemplateSatisfySetting.vue';

	const props = defineProps<{
		closer: CloseHandler<void>
	}>();

	defineExpose<OverlayComponentExpose>({
		title: `체험단 후기 작성`,
	});

	const { bom, loading } = useGlobalPageContext();
	const { optionText } = useFormatter();
	const {
		getReviewableGoods,
		add,
	} = useExperienceReview();

	const {
		useReviewTemplate,
		usePersonalization: isUsePersonalization,
		getReviewTemplates,
	} = useReview();

	const { getMySize } = usePersonalization();



	/** 리뷰 가능 상품 */
	const reviewableGoods = await getReviewableGoods();
	const selected = ref<ExperienceReviewableGoods|null>();
	const selectedOption = ref<ExperienceReviewableGoods['option_list'][number]|null>();

	/** 리뷰 템플릿 */
	const reviewTemplates = ref<ReviewTemplate[]>([]);

	/** 주문상품 선택 dropdown 활성화 여부 */
	const dropdownActive = ref(false);

	/** 마이사이즈 */
	const mySize = ref<MySize|null>(isUsePersonalization ? await getMySize() : null);

	/** 리뷰 작성 FORM */
	const { form, validate } = useForm<ExperienceReviewForm>(
		{
			goods_id: null,
			option_id: null,
			rate: null,
			title: '',
			contents: '',
			height: mySize.value?.height,
			weight: mySize.value?.weight,
			shoes_size: mySize.value?.shoes_size_id,
			selected_review_templates: [],
			images: [],
		},
		{
			rule: {
				'goods_id(상품)': ['required'],
				'option_id(상품)': ['required'],
				'rate(평점)': ['required'],
				'title(제목)': ['required', 'maxLength:40'],
				'height(키)': ['number'],
				'weight(몸무게)': ['number'],
				'contents(체험단 내용)': ['required', 'minLength:10', 'maxLength:2000', 'blank', 'noRepeat'],
			},
			message: {
				'goods_id.required': ':param(을/를) 선택해주세요.',
				'option_id.required': ':param(을/를) 선택해주세요.',
				'rate.required': ':param(을/를) 선택해주세요.',
			},
		},
	);
	async function selectGoods(
		goods: ExperienceReviewableGoods,
		option: ExperienceReviewableGoods['option_list'][number],
	) {
		selected.value = goods;
		selectedOption.value = option;
		dropdownActive.value = false;

		if (useReviewTemplate) {
			reviewTemplates.value = await getReviewTemplates(goods.id);
		}

	}

	async function store() {
		try {
			await validate();
		}
		catch (e) {
			useErrorAlert(e);

			return;
		}

		bom.confirm('작성하신 체험단 후기는\n관리자 확인을 통해 최종\n반영됩니다.', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await add(form.value);
				bom.alert('체험단 후기가 등록되었습니다.', props.closer);
			}
			catch (e) {
				useErrorAlert(e);
			}
			finally {
				loading.hide();
			}
		});

	}


	watch([selected, selectedOption], async ([newGoods, newOption]) => {
		if (!newGoods || !newOption) {
			form.value.goods_id = null;
			form.value.option_id = null;

			return;
		}

		if (useReviewTemplate) {
			reviewTemplates.value = await getReviewTemplates(newGoods.id);
		}
		form.value.goods_id = newGoods.id;
		form.value.option_id = newOption.id;
	}, {
		immediate: true,
	});
</script>

<style src="./_experience.scss" lang="scss"></style>