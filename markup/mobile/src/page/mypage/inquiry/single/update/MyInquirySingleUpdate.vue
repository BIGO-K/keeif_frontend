<template>
	<div class="mm_inner m_overlay-inquiry">
		<form-select
			v-model="inquiryCategory"
			:v-model="sortInquiry"
		>
			<option>1차 문의 유형 선택</option>
			<option value="order">
				배송문의
			</option>
			<option value="order">
				반품/교환
			</option>
			<option value="order">
				취소/환불
			</option>
			<option value="order">
				주문/결제
			</option>
			<option>회원/이벤트</option>
			<option>기타</option>
		</form-select>
		<form-select :v-model="sortInquirySec">
			<option>2차 문의 유형 선택</option>
		</form-select>
		<div
			class="mm_syncer-inquiry-order"
			:class="{ 'S=select-use': inquiryCategory === 'order' }"
		>
			<form-select :v-model="sortOrder">
				<option>주문번호 선택</option>
			</form-select>
			<div class="mm_product-select T=inquiry">
				<dropdown
					:is-active="true"
					icon-class="T=bold"
				>
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
									<li>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
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
														src="/image/_sample/prod_x1_3.png"
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

		<my-inquiry-input></my-inquiry-input>

		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=primary"
				>
					<b>수정하기</b>
				</button>
			</div>
		</div>
		<div class="mm_note">
			<dropdown
				:is-active="true"
				icon-class="T=box"
			>
				<template #button>
					<i class="ico_info"></i><b>1:1 고객상담 문의 시 유의사항</b>
				</template>
				<template #content>
					<ul>
						<li>주민등록번호, 전화번호, 이메일 등 개인정보를 남기면 타인에 의해 도용될 수 있으니 문의하기 작성 시 주의해 주세요.</li>
						<li>이메일/SMS 답변 수신은 주문, 회원가입 시 작성한 정보를 기준으로 발송됩니다.</li>
					</ul>
				</template>
			</dropdown>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import MyInquiryInput from '@/page/mypage/inquiry/component/MyInquiryInput.vue';

	const sortInquiry = ref('');
	const inquiryCategory = ref('');
	const sortInquirySec = ref('');
	const sortOrder = ref('');

	defineExpose<OverlayComponentExpose>({
		title: `1:1 고객상담 수정`,
	});
</script>