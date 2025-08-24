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
			v-if="isQnaEmpty"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>등록된 문의가 없습니다
		</p>

		<template v-else>
			<div class="mm_qna">
				<form-check
					v-model="qnaFilters.onlyAnswered"
					label="답변완료만 보기"
				></form-check>
				<p
					v-if="qnaPaginator.total < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>
					등록된 문의가 아직 없습니다
				</p>

				<ul>
					<li
						v-for="qna in qnaPaginator.data"
						:key="qna.id"
					>
						<template v-if="!qna.is_private || (qna.is_private && qna.is_readable)">
							<dropdown
								tag="dl"
								group="product-qna"
							>
								<template #button>
									<strong
										v-if="qna.is_reply"
										class="mm_text-variable text_state"
									>답변완료</strong>
									<strong
										v-else
										class="text_state"
									>답변대기</strong>
									<p>
										<span class="text_title">{{ qna.title }}</span>
										<span class="text_date">{{ date(qna.created_at, 'YYYY.MM.DD') }}</span>
									</p>
								</template>
								<template #content>
									<div class="mm_qna-qustion">
										<p v-html="newLineToBr(qna.contents)"></p>
										<div
											v-if="qna.is_editable"
											class="mm_btn_box"
										>
											<div class="mm_inline">
												<button
													type="button"
													class="mm_btn T=2xs T=line T=lighter"
													@click="remove(qna.id)"
												>
													<b>삭제</b>
												</button>

												<a
													class="mm_btn T=2xs T=line T=lighter"
													href="#"
													@click.prevent="overlayMyInquiryProductUpdate(qna)"
												><b>수정</b></a>
											</div>
										</div>
									</div>

									<div
										v-if="qna.is_reply && qna.answer"
										class="mm_qna-answer"
									>
										<p v-html="newLineToBr(qna.answer.contents)"></p>
										<span class="text_date">답변일: {{ date(qna.answer.created_at, 'YYYY.MM.DD') }}</span>
									</div>
								</template>
							</dropdown>
						</template>

						<template v-else>
							<div class="mm_qna-secret">
								<strong
									v-if="qna.is_reply"
									class="mm_text-variable text_state"
								>답변완료</strong>
								<strong
									v-else
									class="text_state"
								>답변대기</strong>
								<p>
									<span class="text_title">{{ qna.is_private ? '비밀글입니다' : qna.title }}</span>
									<span class="text_date">{{ date(qna.created_at, 'YYYY.MM.DD') }}</span>
									<i class="ico_secret"></i>
								</p>
							</div>
						</template>
					</li>
				</ul>
			</div>

			<pagination></pagination>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { defineAsyncComponent, ref, watch } from 'vue';
	import { useRouter } from 'vue-router';
	import { useAuthStore } from '$/stores/useAuthStore';
	import { useLayerContextStore } from '$/stores/useLayerContextStore';
	import mons from '$/utils/mons';
	import { useErrorAlert } from '$/composables/useErrorAlert';
	import { useFormatter } from '$/composables/useFormatter';
	import { useInquiry } from '$/composables/useInquiry';
	import Dropdown from '@/component/Dropdown.vue';
	import Pagination from '@/component/Pagination.vue';
	import FormCheck from '@/component/form/FormCheck.vue';

	const layerContextStore = useLayerContextStore();
	const router = useRouter();
	const props = defineProps<{
		goodsId: number
	}>();

	const { member } = useAuthStore();
	const { bom, loading } = mons();
	const { date, newLineToBr } = useFormatter();
	const qnaPaginator = ref<Paginator<GoodsQna>>({
		total: 0,
		current_page: 1,
		per_page: 20,
		data: [],
	});

	const qnaFilters = ref({
		goodsId: props.goodsId,
		page: 1,
		pageSize: 20,
		onlyAnswered: false,
	});

	const {
		getGoodsQnaPaginator,
		getGoodsQnaCreateInfo,
		getSellerQnaTypes,
		destroyGoodsQna,
		getGoodsQnaDetail,
	} = useInquiry();

	const isQnaEmpty = ref<boolean>(false);

	await getQnaPaginator();
	if (qnaPaginator.value.total < 1) {
		isQnaEmpty.value = true;
	}
	/** qna조회 **/
	async function getQnaPaginator() {
		try {
			qnaPaginator.value = await getGoodsQnaPaginator(qnaFilters.value.goodsId, qnaFilters.value.page, qnaFilters.value.pageSize, qnaFilters.value.onlyAnswered);
		}
		catch (e) {
			useErrorAlert(e);
		}

	}

	watch(qnaFilters, () => {
		loading.show();
		try {
			getQnaPaginator();
		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}

	}, {
		deep: true,
	});

	const qnaWriteBaseInfo = ref<GoodsQnaCreateInfo|undefined>(undefined);
	const sellerQnaTypes = ref<SellerQnaType[]>([]);
	const needQnaBasicData = ref<boolean>(true);

	async function initializeQnaBasicData() {
		if (!needQnaBasicData.value) {
			return;
		}

		try {
			await Promise.all([
				getGoodsQnaCreateInfo(qnaFilters.value.goodsId).then(pBaseInfo => qnaWriteBaseInfo.value = pBaseInfo),
				getSellerQnaTypes(true).then(pQnaTypes => sellerQnaTypes.value = pQnaTypes),
			]);

			needQnaBasicData.value = false;
		}
		catch (e) {
			console.error(e);
		}
	}

	async function overlayMyInquiryProductCreate() {
		if (!member) {
			return bom.confirm('로그인이 필요합니다 \n로그인 페이지로 이동하시겠습니까?', (flag: boolean) => {
				if (flag) {
					router.push({
						name: 'Login',
						query: {
							redirect_to_after: router.currentRoute.value.path,
						},
					});
				}
			});
		}
		await initializeQnaBasicData();
		const component = defineAsyncComponent(() => import('@/page/mypage/inquiry/product/create/MyInquiryProductCreate.vue'));

		return layerContextStore.openOverlay(component, {
			props: {
				qnaWriteBaseInfo: qnaWriteBaseInfo.value,
				sellerQnaTypes: sellerQnaTypes.value,
			},
			onClose: async () => {
				qnaFilters.value.page = 1;
				qnaFilters.value.onlyAnswered = false;
				await getQnaPaginator();
				isQnaEmpty.value = qnaPaginator.value.total < 1 ? true : false;
			},
		});
	}

	async function remove(qnaId: number) {
		if (!qnaId) {
			return;
		}

		loading.show();
		try {
			bom.confirm('문의를 삭제하시겠습니까?', async (flag) => {
				if (!flag) {
					return;
				}
				await destroyGoodsQna(props.goodsId, qnaId);
				qnaFilters.value.page = 1;
				qnaFilters.value.onlyAnswered = false;
				await getQnaPaginator();
				isQnaEmpty.value = qnaPaginator.value.total < 1 ? true : false;
			});

		}
		catch (e) {
			useErrorAlert(e);
		}
		finally {
			loading.hide();
		}
	}

	async function overlayMyInquiryProductUpdate(qna: GoodsQna) {
		const component = defineAsyncComponent(() => import('@/page/mypage/inquiry/product/update/MyInquiryProductUpdate.vue'));
		await initializeQnaBasicData();

		const qnaDetail = await getGoodsQnaDetail(props.goodsId, qna.id);

		return layerContextStore.openOverlay(component, {
			props: {
				qna: qnaDetail,
				sellerQnaTypes: sellerQnaTypes.value,
			},
			onClose: async () => {
				await getQnaPaginator();
			},
		});
	}
</script>