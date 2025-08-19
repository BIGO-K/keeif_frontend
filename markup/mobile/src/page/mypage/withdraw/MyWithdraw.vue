<template>
	<layout
		title="회원탈퇴"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="mm_inner m_popup-myinfo-withdraw">
			<!-- 유의사항 -->
			<div class="mm_note T=line">
				<h5 class="text_title">
					<b>회원 탈퇴 유의사항</b>
				</h5>
				<ul>
					<li>고객님의 구매 및 반품 등 고객서비스가 완료되지 않은 경우 탈퇴처리 되지 않습니다. (1:1 상담게시판을 통해 회원탈퇴관련 문의내용을 남겨주시면 확인하여 안내 드리겠습니다.)</li>
					<li>탈퇴 시에는 보유하고 계신 적립금 및 할인쿠폰은 자동으로 소멸 됩니다. (회원탈퇴로 소멸된 쿠폰과 적립금은 재가입시 복원되지 않습니다.)</li>
					<li>탈퇴 시에 주문정보는 교환/반품/환불 및 사후처리(A/S) 등을 위하여 전자상거래 등 에서의 소비자보호에 관한 법류에 의거, 개인정보보호정책에 따라 관리됩니다.</li>
					<li>탈퇴 신청 후 완료까지 일부 기간 소요되며 기간 중 메일이 발송될 수 있으니 양해 부탁드립니다.</li>
				</ul>
			</div>

			<!-- 탈퇴사유 -->
			<h3 class="mm_title">
				<b>어떤 부분이 불편하셨나요?</b>
			</h3>
			<p>탈퇴 사유를 남겨주시면 소중한 의견을 반영해<br> 더 좋은 서비스로 찾아뵙겠습니다</p>
			<div class="mm_radio-list">
				<ul>
					<li>
						<form-radio
							v-model="withdrawReason"
							name="dev_radio-reason"
							value="0"
						>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">상품품질 불만</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio
							v-model="withdrawReason"
							name="dev_radio-reason"
							value="1"
						>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">고객서비스 불만</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio
							v-model="withdrawReason"
							name="dev_radio-reason"
							value="2"
						>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">원하는 상품이 없음</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio
							v-model="withdrawReason"
							name="dev_radio-reason"
							value="3"
						>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">속도가 느림</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio
							v-model="withdrawReason"
							name="dev_radio-reason"
							value="4"
						>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">배송 지연</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio
							v-model="withdrawReason"
							name="dev_radio-reason"
							value="5"
						>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">교환/환불 불만</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio
							v-model="withdrawReason"
							name="dev_radio-reason"
							value="6"
						>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">상품품질 불만</span>
							</b>
						</form-radio>
					</li>
					<li>
						<form-radio
							v-model="withdrawReason"
							name="dev_radio-reason"
							value="other"
						>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">기타</span>
							</b>
						</form-radio>
						<div
							class="mm_syncer-reason"
							:class="{ 'S=radio-use': withdrawReason === 'other' }"
						>
							<form-textarea
								placeholder="기타 사유를 입력해 주세요"
							></form-textarea>
						</div>
					</li>
				</ul>
			</div>

			<!-- 탈퇴신청 -->
			<h3 class="mm_title">
				<b>그동안 <strong>엠몬스타</strong>을<br> 이용해 주셔서 감사합니다</b>
			</h3>
			<p>고객님과 앞으로 함께하지 못해 아쉽습니다</p>
			<p>다시 돌아오셨을 때 지금보다 더 나은 상품과 서비스로<br> 발전된 엠몬스타가 될 수 있도록 노력하겠습니다</p>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>회원탈퇴 신청</b>
					</button>
				</div>
			</div>
			<div class="mm_note">
				<ul>
					<li>탈퇴 신청 후 완료까지 일부 기간이 소요되며 기간 중 메일이 발송 될 수 있으니 양해 부탁드립니다.</li>
				</ul>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Layout from '@/component/layout/Layout.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';

	const withdrawReason = ref('');
</script>