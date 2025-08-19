<template>
	<div class="m_overlay-inquiry">
		<dl><dt>판매자 정보</dt><dd>엠몬스타/02-1234-5678</dd></dl>
		<div class="mm_product-select T=inquiry-list">
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
					</ul>
				</div>
			</div>
		</div>
		<div class="mm_inner">
			<form-select :v-model="sortInquiry">
				<option>문의 유형을 선택하세요</option>
			</form-select>

			<my-inquiry-input></my-inquiry-input>

			<div class="mm_note">
				<ul>
					<li>결제, 적립금, 환불 관련 문의는 고객센터 &#62; 1:1 고객 상담를 통해 문의하세요.</li>
					<li>상품, 배송, 기타를 선택한 문의는 해당 상품의 상세 페이지 &#62; Q&#38;A 영역에 노출됩니다.</li>
				</ul>
			</div>
			<form-check
				v-model="myInquryHide"
				label="비공개"
			>
			</form-check>
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
						<i class="ico_info"></i><b>판매자 문의 시 유의사항</b>
					</template>
					<template #content>
						<ul>
							<li>알림톡/SMS 답변 수신은 주문, 회원가입 시 작성한 정보를 기준으로 발송됩니다.</li>
							<li>주민등록번호, 전화번호, 이메일 등 개인 정보를 남기면 타인에 의해 도용될 수 있습니다.</li>
						</ul>
					</template>
				</dropdown>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import FormCheck from '@/component/form/FormCheck.vue';
	import FormSelect from '@/component/form/FormSelect.vue';
	import MyInquiryInput from '@/page/mypage/inquiry/component/MyInquiryInput.vue';

	const sortInquiry = ref('');

	defineExpose<OverlayComponentExpose>({
		title: `판매자 문의하기`,
	});

	const myInquryHide = ref(false);
</script>