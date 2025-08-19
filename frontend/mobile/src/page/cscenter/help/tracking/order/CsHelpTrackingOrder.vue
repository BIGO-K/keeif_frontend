<template>
	<div class="mm_accordion">
		<ul>
			<li>
				<dropdown
					tag="dl"
					group="help-tracking"
				>
					<template #button>
						<p><b>모바일</b></p>
					</template>
					<template #content>
						<div class="m_popup-cs-step">
							<ol>
								<li>
									<figure>
										<figcaption>
											해당 주문의 <strong class="text_highlight">[<span>주문상세</span>]</strong> 버튼을 클릭하세요<br>
											<strong class="text_highlight">[<span>배송조회</span>]</strong> 버튼을 클릭하시면 상품 위치 확인이 가능합니다.
										</figcaption>
										<i class="image_guide">
											<lazyload
												tag="img"
												src="/image/content/cs_info_order_mobile_1.jpg"
											></lazyload>
										</i>
									</figure>
								</li>
							</ol>
						</div>
					</template>
				</dropdown>
			</li>
			<li>
				<dropdown
					tag="dl"
					group="help-tracking"
				>
					<template #button>
						<p><b>PC</b></p>
					</template>
					<template #content>
						<div class="m_popup-cs-step">
							<figure>
								<figcaption>
									해당 주문의 <strong class="text_highlight">[<span>주문상세</span>]</strong> 버튼을 클릭하세요<br>
									<strong class="text_highlight">[<span>배송조회</span>]</strong> 버튼을 클릭하시면 상품 위치 확인이 가능합니다.
								</figcaption>
								<i class="image_guide">
									<lazyload
										tag="img"
										src="/image/content/cs_info_order_pc_1.jpg"
									></lazyload>
								</i>
							</figure>
						</div>
					</template>
				</dropdown>
			</li>
		</ul>
	</div>
	<div class="mm_inner">
		<div class="mm_foot">
			<div class="mm_btn_box">
				<mm-link
					class="mm_btn T=primary"
					:to="{ name: 'MyOrder' }"
				>
					<b>주문 배송조회 보기</b>
				</mm-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
</script>