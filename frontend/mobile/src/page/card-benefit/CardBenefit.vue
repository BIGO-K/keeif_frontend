<template>
	<div class="m_overlay-card">
		<template v-if="!cardInstallmentInfo">
			<p class="mm_text-none T=sm">
				<i class="ico_text-none"></i>등록된 할부 정보가 없습니다
			</p>
		</template>
		<template v-else>
			<!-- 무이자할부안내 -->
			<section v-if="cardInstallmentInfo.interest_free_list.length > 0">
				<h3 class="mm_strapline">
					<b>무이자 할부 안내</b>
				</h3>
				<ul>
					<li
						v-for="installment in cardInstallmentInfo.interest_free_list"
						:key="installment.card_code"
					>
						<lazyload
							class="mm_bg-contain image_card"
							is-force
							:src="installment.image_url"
							:is-error-image="false"
						></lazyload>
						<p v-html="newLineToBr(installment.info)"></p>
						<span>{{ cardInstallmentDueDate }}</span>
					</li>
				</ul>
			</section>

			<!-- 부분무이자할부안내 -->
			<section v-if="cardInstallmentInfo.partial_interest_list.length > 0">
				<h3 class="mm_strapline">
					<b>부분 무이자 할부 안내</b>
				</h3>
				<ul>
					<li
						v-for="partial in cardInstallmentInfo.partial_interest_list"
						:key="`partial_${partial.card_code}`"
					>
						<lazyload
							class="mm_bg-contain image_card"
							is-force
							:src="partial.image_url"
							:is-error-image="false"
						></lazyload>
						<p v-html="newLineToBr(partial.info)"></p>
						<span>{{ cardInstallmentDueDate }}</span>
					</li>
				</ul>
			</section>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useFormatter } from '$/composables/useFormatter';
	import Lazyload from '@/component/Lazyload.vue';

	defineExpose<OverlayComponentExpose>({
		title: `카드사별 혜택`,
	});

	const props = defineProps<{
		cardInstallmentInfo: Nullable<CardInstallment>
	}>();

	const { newLineToBr, date } = useFormatter();
	const cardInstallmentDueDate = computed(() => props.cardInstallmentInfo ?
		`${date(props.cardInstallmentInfo.display_start_at, 'YYYY.MM.DD')} ~ ${date(props.cardInstallmentInfo.display_end_at, 'YYYY.MM.DD')}`
		: '',
	);
</script>