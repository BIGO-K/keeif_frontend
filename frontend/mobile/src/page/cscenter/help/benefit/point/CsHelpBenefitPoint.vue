<template>
	<div class="mm_accordion">
		<ul>
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
							<li><p>적립금 100원 이상 보유시 적립금 1원 = 현금 1원으로 {{ shop.name }} 내에서 사용 가능합니다.</p></li>
							<li><p>상품 주문시 사용하신 적립금은 해당 상품의 취소/반품/환불 시 재적립이 가능합니다.</p></li>
						</ul>
					</template>
				</dropdown>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import config from '$/utils/config';
	import Dropdown from '@/component/Dropdown.vue';
	const shop = config('shop');
</script>