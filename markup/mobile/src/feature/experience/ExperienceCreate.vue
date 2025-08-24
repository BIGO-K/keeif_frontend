<template>
	<div class="m_overlay-experience">
		<!-- 상품정보 : 선택형 -->
		<div class="m_overlay-experience-product">
			<div class="mm_product-select">
				<dropdown icon-class="T=bold">
					<template #button>
						<b>상품을 선택해주세요</b>
					</template>
					<template #content>
						<div class="mm_scroller">
							<div class="mm_product-list T=xs">
								<ul>
									<li>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_product">시스루스트라이프셔츠</p>
														<p class="text_option">화이트 FREE</p>
													</figcaption>
												</figure>
											</a>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_2.png"
													></lazyload>
													<figcaption>
														<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140드레스_MJM1OP3140</p>
														<p class="text_option">화이트 FREE</p>
													</figcaption>
												</figure>
											</a>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_2.png"
													></lazyload>
													<figcaption>
														<p class="text_product">시스루스트라이프셔츠</p>
														<p class="text_option">화이트 FREE</p>
													</figcaption>
												</figure>
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</template>
				</dropdown>
				<!-- (D) 선택된 상품이 노출됩니다. -->
				<div class="mm_product-select-complete"></div>
			</div>
		</div>
		<hr class="mm_line">

		<!-- 별점 -->
		<section>
			<h6><b>상품은 만족하셨나요?</b></h6>
			<!--
				(D) 별점이 선택된 상태일 때는 m_popup-experience-starscore 태그에 'S=starscore-choice' 클래스가 추가됩니다.
				선택된 별점의 li에 'S=starscore-on' 클래스와 button에 '선택됨' 타이틀이 추가되며, input hidden의 value값에 점수가 입력됩니다. (0 선택안됨)
			-->
			<div class="m_popup-experience-starscore S=starscore-choice">
				<ul>
					<li class="S=starscore-on">
						<button
							type="button"
							title="선택됨"
						>
							<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 1점</b>
						</button>
					</li>
					<li class="S=starscore-on">
						<button
							type="button"
							title="선택됨"
						>
							<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 2점</b>
						</button>
					</li>
					<li class="S=starscore-on">
						<button
							type="button"
							title="선택됨"
						>
							<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 3점</b>
						</button>
					</li>
					<li>
						<button type="button">
							<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 4점</b>
						</button>
					</li>
					<li>
						<button type="button">
							<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 5점</b>
						</button>
					</li>
				</ul>
				<input
					type="hidden"
					value="3"
				>
			</div>
		</section>

		<!-- 사이즈 -->
		<section>
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
		<section>
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
		<section>
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
			<h6 class="mm_text-label">
				<b>신체 정보 입력</b><strong class="mm_text-variable">(선택)</strong>
			</h6>
			<div class="mm_flex T=equal">
				<div class="mm_form_mix-linked">
					<form-text
						placeholder="키"
					></form-text>
					<span class="text_linked">cm</span>
				</div>
				<div class="mm_form_mix-linked">
					<form-text
						placeholder="몸무게"
					></form-text>
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
			<h6 class="mm_text-label">
				<b>체험단 후기 제목</b>
			</h6>
			<form-text
				maxlength="40"
				placeholder="최대 40자 입력"
			></form-text>
			<h6 class="mm_text-label">
				<b>리뷰 내용</b>
			</h6>
			<form-textarea
				model-value="우선 이번 세일을 통해 싸게사서 넘기뻐요! 티를 작년 여름에 잘입어서 요번에도 구입했는데 흰색이라 그런지 옷에 힘이 없어요 그것 말고는 심플하니괜찮습니다"
				:byte="2000"
				placeholder="최소 10자 이상 입력하세요"
			></form-textarea>
			<div class="mm_form-multiple">
				<ul class="mm_flex">
					<li>
						<div class="mm_form-image">
							<button
								type="button"
								class="btn_remove-file"
							>
								<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
							</button>
							<div class="mm_form-image-preview"></div>
							<label>
								<input
									type="file"
									accept="image/*"
									data-file="{ '_imageSize': 'cover' }"
								>
								<b class="mm_form-image-box"><i class="ico_upload"></i><span class="mm_ir-blind">사진 첨부하기</span></b>
							</label>
						</div>
					</li>
				</ul>
				<label class="mm_btn T=line T=variable btn_select-multiple">
					<input
						type="file"
						accept="image/*"
						data-multiple="{ '_max': 10, '_isMax': true, '_isAuto': false }"
						multiple
					>
					<b>한번에 여러장 선택하기</b>
				</label>
			</div>
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
					>
						<b>등록하기</b>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import FormText from '@/component/form/FormText.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';

	const sortShoesSize = ref('');

	defineExpose<OverlayComponentExpose>({
		title: `체험단 후기 작성`,
	});
</script>

<style src="./_experience.scss" lang="scss"></style>