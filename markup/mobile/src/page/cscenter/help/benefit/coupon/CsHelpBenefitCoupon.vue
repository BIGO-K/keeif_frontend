<template>
	<div class="mm_accordion">
		<ul>
			<li>
				<dropdown
					tag="dl"
					group="help-benefit"
				>
					<template #button>
						<p><b>쿠폰 유의사항</b></p>
					</template>
					<template #content>
						<ul>
							<li><p>쿠폰은 회원에 한해 적용되며, 한 품목당 한장의 쿠폰만 사용할 수 있습니다.</p></li>
							<li><p>쿠폰 사용 후 잔액은 환불이 불가하며, 자동 소멸됩니다.</p></li>
							<li><p>쿠폰에 따라 유효기간/최소 사용금액과 같은 사용 조건이 상이합니다.</p></li>
							<li><p>쿠폰에 따라 금액, 브랜드, 상품, 디바이스별로 사용이 제한될 수 있습니다.</p></li>
							<li><p>유효기간이 만료된 쿠폰은 사용할 수 없습니다.</p></li>
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
						<p><b>쿠폰 종류별 사용 방법</b></p>
					</template>
					<template #content>
						<ul>
							<li><p>등급 혜택에서 회원 등급별로 매월 할인 쿠폰을 다운로드 받으실 수 있습니다.</p></li>
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