<template>
	<div class="mm_accordion">
		<ul>
			<li>
				<dropdown
					tag="dl"
					group="help-benefit"
				>
					<template #button>
						<p><b>배송지연/품절보상 적립금</b></p>
					</template>
					<template #content>
						<table class="m_popup-cs-point">
							<colgroup>
								<col style="width: 29.46428%;">
								<col>
							</colgroup>
							<tbody>
								<tr>
									<th scope="row">
										<b>배송 지연</b>
									</th>
									<td>결제 완료일 다음날(1일째)부터 3일 이내 배송 출발이 되지 않았을 경우, 상품 금액의 최저 4% ~ 최고 10%를 적립금으로 보상해드리는 제도입니다.</td>
								</tr>
								<tr>
									<th scope="row">
										<b>품절 지연</b>
									</th>
									<td>재고 부족 등의 이유로 품절 사실을 안내 받으신 경우 상품 금액 3%를 적립금으로 보상해드리는 제도입니다.</td>
								</tr>
							</tbody>
						</table>
						<ul>
							<li><p>배송지연/품절취소 보상은 <strong class="text_highlight">[<span>고객센터 &#62; 고객 보상제도</span>]</strong>에서 상세한 내용 확인이 가능합니다.</p></li>
						</ul>
					</template>
				</dropdown>
			</li>
			<li>
				<dropdown
					tag="dl"
					group="help-benefit"
				>
					<template #button>
						<p><b>이벤트를 통한 적립금</b></p>
					</template>
					<template #content>
						<ul>
							<li><p>적립금이 책정되어 있는 이벤트를 통해서 적립금을 적립하실 수 있습니다. (이벤트당 적립금 상이)</p></li>
						</ul>
					</template>
				</dropdown>
			</li>
			<li>
				<dropdown
					tag="dl"
					group="help-benefit"
				>
					<template #button>
						<p><b>적립금 사용 안내</b></p>
					</template>
					<template #content>
						<ul>
							<li><p>적립금 100원 이상 보유시 적립금 1원 = 현금 1원으로 00 몰 내에서 사용 가능합니다.</p></li>
							<li><p>상품 주문시 사용하신 적립금은 해당 상품의 취소/반품/환 불시 재적립이 가능합니다.</p></li>
						</ul>
					</template>
				</dropdown>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import Dropdown from '@/component/Dropdown.vue';
</script>