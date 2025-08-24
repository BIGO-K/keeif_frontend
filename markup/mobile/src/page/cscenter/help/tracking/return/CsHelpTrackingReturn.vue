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
							<figure>
								<figcaption><strong class="text_highlight"><span>‘마이페이지 &#62; 주문관리 &#62; 반품 주문 리스트’</span></strong>에서 반품 상태인 주문의 <strong class="text_highlight">[<span>반송조회</span>]</strong> 버튼을 클릭하시면 상품 위치 확인 팝업창이 노출됩니다.</figcaption>
								<i class="image_guide">
									<lazyload
										tag="img"
										src="/image/content/cs_info_return_mobile.jpg"
									></lazyload>
								</i>
								<strong class="btn_cs-delivery"><b>반송조회</b><i class="ico_click"></i></strong>
							</figure>
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
								<figcaption><strong class="text_highlight"><span>‘마이페이지 &#62; 주문관리 &#62; 반품 주문 리스트’</span></strong>에서 반품 상태인 주문의 <strong class="text_highlight">[<span>반송조회</span>]</strong> 버튼을 클릭하시면 상품 위치 확인 팝업창이 노출됩니다.</figcaption>
								<i class="image_guide">
									<lazyload
										tag="img"
										src="/image/content/cs_info_return_pc.jpg"
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
					:to="{ name: 'MyOrderReturn' }"
				>
					<b>반품 배송조회 보기</b>
				</mm-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
</script>