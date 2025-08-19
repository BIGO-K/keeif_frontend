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
					<li
						v-for="reason in withdrawReasons"
						:key="reason.code"
					>
						<template v-if="!reason.detail_reason_required">
							<form-radio
								v-model.number="form.code"
								name="radio-reason"
								:value="reason.code"
							>
								<b class="mm_block">
									<i class="ico_form-radio"></i>
									<span class="text_label">{{ reason.label }}</span>
								</b>
							</form-radio>
						</template>
						<template v-else>
							<form-radio
								v-model.number="form.code"
								name="radio-reason"
								:value="reason.code"
							>
								<b class="mm_block">
									<i class="ico_form-radio"></i>
									<span class="text_label">기타</span>
								</b>
							</form-radio>
							<div
								class="mm_syncer-reason"
								:class="{ 'S=radio-use': form.code === reason.code }"
							>
								<form-textarea
									v-model="form.detailReason"
									placeholder="기타 사유를 입력해 주세요"
								></form-textarea>
							</div>
						</template>
					</li>
				</ul>
			</div>

			<!-- 탈퇴신청 -->
			<h3 class="mm_title">
				<b>그동안 <strong>{{ shop.name }}</strong>을<br> 이용해 주셔서 감사합니다</b>
			</h3>
			<p>고객님과 앞으로 함께하지 못해 아쉽습니다</p>
			<p>다시 돌아오셨을 때 지금보다 더 나은 상품과 서비스로<br> 발전된 {{ shop.name }}이 될 수 있도록 노력하겠습니다</p>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
						@click="memberWithDraw"
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
	import { ref, computed } from 'vue';
	import { useRouter } from 'vue-router';
	import { useAuthStore } from '$/stores/useAuthStore';
	import config from '$/utils/config';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useForm } from '$/composables/useForm';
	import { useMemberInformation } from '$/composables/useMemberInformation';
	import Layout from '@/component/layout/Layout.vue';
	import FormRadio from '@/component/form/FormRadio.vue';
	import FormTextarea from '@/component/form/FormTextarea.vue';

	const withdrawReasons = ref<WithdrawReason[]>([]);
	const shop = config('shop');
	const { bom, loading } = mons();
	const authStore = useAuthStore();
	const router = useRouter();
	const { getWithdrawReasons, withdraw } = useMemberInformation();
	withdrawReasons.value = await getWithdrawReasons();
	const reasonCodes = computed(() => withdrawReasons.value.map((reason) => reason.code).join(','));
	const detailRequiredReasons = computed(() => withdrawReasons.value
		.filter((reason) => reason.detail_reason_required)
		.map(reason => reason.code)
		.join(','));

	const { form, validate } = useForm<{
		code: number,
		detailReason: string
	}>({
		code: 0,
		detailReason: '',
	}, {
		rule: () => {
			return {
				'code(탈퇴 사유)': ['required', 'notIn:0', `in:${reasonCodes.value}`],
				'detailReason(탈퇴 사유)': [`requiredIf:code,${detailRequiredReasons.value}`],
			};
		},
		message: {
			'code.required': ':param(을/를) 선택해주세요.',
			'code.notIn': ':param(을/를) 선택해주세요.',
			'detailReason.requiredIf': ':param(을/를) 입력해주세요.',
		},
	});

	async function memberWithDraw() {

		try {
			await validate();
			bom.confirm('탈퇴 시 적립금/쿠폰 정보가 모두 삭제됩니다. 탈퇴 하시겠습니까?', async (isConfirm: boolean) => {
				if (!isConfirm) {
					return;
				}
				try {
					loading.show();
					await withdraw(form.value.code, form.value.detailReason);
					// // 회원정보 초기화
					bom.alert('회원 탈퇴가 완료되었습니다.', async () => {
						await authStore.logout();
						router.replace({
							name: 'Main',
						});
					});
				}
				catch (e) {
					useErrorAlert(e);
				}
				finally {
					loading.hide();
				}
			});
		}
		catch (e) {
			useErrorAlert(e);
		}
	}
</script>