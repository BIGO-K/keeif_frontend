<template>
	<layout title="환불 계좌 관리">
		<div class="mm_inner m_myaccount">
			<p
				v-if="!refundAccount"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>등록된 환불계좌가 없습니다
			</p>

			<template v-else>
				<h6 class="mm_text-label">
					<b>예금주명</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">{{ refundAccount.owner_name }}</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>은행명</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">{{ refundAccount.bank_name }}</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>계좌번호</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">{{ refundAccount.account_number }}</span>
						<i class="bg_text"></i>
					</label>
				</div>
			</template>

			<div class="mm_foot">
				<div class="mm_btn_box">
					<a
						v-if="!refundAccount"
						class="mm_btn T=primary"
						href="#"
						@click.prevent="overlayMyRefundCreate"
					>
						<b>등록하기</b>
					</a>
					<div
						v-else
						class="mm_flex T=equal"
					>
						<button
							type="button"
							class="mm_btn T=line T=light"
							@click="removeRefundAccount"
						>
							<b>삭제하기</b>
						</button>
						<a
							class="mm_btn T=primary"
							href="#"
							@click.prevent="overlayMyRefundUpdate"
						>
							<b>변경하기</b>
						</a>
					</div>
				</div>
			</div>
			<div class="mm_note">
				<ul>
					<li>환불 계좌를 등록하시면 추후 이용 시에도 별도의 입력없이 이용 하실 수 있습니다.</li>
				</ul>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useGlobalPageContext } from '$/composables/useGlobalPageContext';
	import { useMyRefundAccount } from '$/composables/useMyRefundAccount';
	import Layout from '@/component/layout/Layout.vue';

	/** 전역 composable */
	const { bom, loading, openOverlay } = useGlobalPageContext();
	/** 환불계좌 composable */
	const { get, remove, getBankCodes } = useMyRefundAccount();

	/** 환불계좌 */
	const refundAccount = ref(await get());
	/** 은행코드 리스트 */
	const bankCodes = ref<BankCode[]>([]);

	/** 환불계좌 작성 overlay open */
	async function overlayMyRefundCreate() {
		if (!bankCodes.value.length) {
			bankCodes.value = await getBankCodes();
		}
		const component = defineAsyncComponent(() => import('@/page/mypage/refund/create/MyRefundCreate.vue'));

		return openOverlay(component, {
			props: { bankCodes },
			onClose: async (_value: { refundAccount: RefundAccount }) => {
				if (!_value?.refundAccount) {
					return;
				}
				refundAccount.value = _value.refundAccount;
			}
		});
	}

	/** 환불계좌 수정 overlay open */
	async function overlayMyRefundUpdate() {
		if (!bankCodes.value.length) {
			bankCodes.value = await getBankCodes();
		}
		const component = defineAsyncComponent(() => import('@/page/mypage/refund/update/MyRefundUpdate.vue'));

		return openOverlay(component, {
			props: {
				refundAccount,
				bankCodes,
			},
			onClose: async () => { refundAccount.value = await get(); }
		});
	}

	/** 환불계좌 삭제 */
	async function removeRefundAccount() {
		bom.confirm('환불계좌를 삭제하시겠습니까?', async (flag) => {
			if (!flag) {
				return;
			}

			loading.show();
			try {
				await remove();
				bom.alert('환불계좌가 삭제되었습니다.', () => {
					refundAccount.value = null;
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
</script>