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
						<span class="textfield text_readonly">**수</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>은행명</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">국민은행</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>계좌번호</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">123456*******</span>
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
	import { defineAsyncComponent } from 'vue';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import Layout from '@/component/layout/Layout.vue';

	const layerContextStore = useLayerContextStore();

	function overlayMyRefundCreate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/refund/create/MyRefundCreate.vue'));

		return layerContextStore.openOverlay(component);
	}

	function overlayMyRefundUpdate() {
		const component = defineAsyncComponent(() => import('@/page/mypage/refund/update/MyRefundUpdate.vue'));

		return layerContextStore.openOverlay(component);
	}

	const refundAccount: object | null = { value: true }; // 임시 변수
</script>