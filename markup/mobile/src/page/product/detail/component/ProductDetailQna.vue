<template>
	<div class="m_prodetail-tab-qna">
		<div class="m...qna-head">
			<p>판매자에게 상품, 배송, 취소, 교환, 반품 등<br> 궁금한 내용을 문의하세요</p>
			<a
				class="mm_btn T=sm T=line T=dark"
				href="#"
				@click.prevent="overlayMyInquiryProductCreate"
			>
				<b>상품 문의하기</b>
			</a>
		</div>

		<!-- 문의 목록 -->
		<p
			v-if="items.length < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>등록된 문의가 없습니다
		</p>

		<template v-else>
			<div class="mm_qna">
				<form-check
					v-model="isQnaAnswer"
					label="답변완료만 보기"
				></form-check>
				<ul>
					<li>
						<Dropdown
							tag="dl"
							group="product-qna"
						>
							<template #button>
								<strong class="mm_text-variable text_state">답변완료</strong>
								<p>
									<span class="text_title">배송 문의입니다. 배송 내역 조회는 어디서 확인하면 되나요?</span>
									<span class="text_date">2020.07.10</span>
								</p>
							</template>
							<template #content>
								<div class="mm_qna-qustion">
									<p>배송 문의입니다. 배송 내역 조회는 어디서 확인하면 되나요?배송 문의입니다. 배송 내역 조회는 어디서 확인하면 되나요?</p>
								</div>
								<div class="mm_qna-answer">
									<p>배송 내역 조회 방법: 마이페이지 &#62; 진행중인 주문에서 확인이 가능합니다</p>
									<span class="text_date">답변일: 2020.07.10</span>
								</div>
							</template>
						</Dropdown>
					</li>
					<li>
						<Dropdown
							tag="dl"
							group="product-qna"
						>
							<template #button>
								<strong class="mm_text-variable text_state">답변완료</strong>
								<p>
									<span class="text_title">비밀글입니다</span>
									<span class="text_date">2020.07.10</span>
									<i class="ico_secret"></i>
								</p>
							</template>
							<template #content>
								<div class="mm_qna-qustion">
									<p>배송 문의입니다. 배송 내역 조회는 어디서 확인하면 되나요?배송 문의입니다. 배송 내역 조회는 어디서 확인하면 되나요?</p>
								</div>
								<div class="mm_qna-answer">
									<p>배송 내역 조회 방법: 마이페이지 &#62; 진행중인 주문에서 확인이 가능합니다</p>
									<span class="text_date">답변일: 2020.07.10</span>
								</div>
							</template>
						</Dropdown>
					</li>
					<li>
						<div class="mm_qna-secret">
							<strong class="mm_text-variable text_state">답변완료</strong>
							<p>
								<span class="text_title">비밀글입니다</span>
								<span class="text_date">2020.07.10</span>
								<i class="ico_secret"></i>
							</p>
						</div>
					</li>
					<li>
						<Dropdown
							tag="dl"
							group="product-qna"
						>
							<template #button>
								<strong class="text_state">답변대기</strong>
								<p>
									<span class="text_title">배송 문의입니다.</span>
									<span class="text_date">2020.07.10</span>
								</p>
							</template>
							<template #content>
								<div class="mm_qna-qustion">
									<p>적립금 관련 문의입니다. 적립금 내역 조회는 어디서 확인하면 되나요?</p>
									<div class="mm_btn_box">
										<div class="mm_inline">
											<button
												type="button"
												class="mm_btn T=2xs T=line T=lighter"
											>
												<b>삭제</b>
											</button>
											<a
												class="mm_btn T=2xs T=line T=ligher"
												href="#"
												@click.prevent="overlayMyInquiryProductUpdate"
											>
												<b>수정</b>
											</a>
										</div>
									</div>
								</div>
							</template>
						</Dropdown>
					</li>
					<li>
						<Dropdown
							tag="dl"
							group="product-qna"
						>
							<template #button>
								<strong class="text_state">답변대기</strong>
								<p>
									<span class="text_title">배송 문의입니다.</span>
									<span class="text_date">2020.07.10</span>
								</p>
							</template>
							<template #content>
								<div class="mm_qna-qustion">
									<p>적립금 관련 문의입니다. 적립금 내역 조회는 어디서 확인하면 되나요?</p>
								</div>
							</template>
						</Dropdown>
					</li>
				</ul>
			</div>

			<pagination></pagination>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Pagination from '@/component/Pagination.vue';
	import FormCheck from '@/component/form/FormCheck.vue';

	const layerContextStore = useLayerContextStore();

	function overlayMyInquiryProductCreate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/inquiry/product/create/MyInquiryProductCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyInquiryProductUpdate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/inquiry/product/update/MyInquiryProductUpdate.vue'));

		return layerContextStore.openOverlay(component);
	}

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
	const isQnaAnswer = ref(false);
</script>