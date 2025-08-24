<template>
	<layout title="공지사항">
		<p
			v-if="items.length < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>공지사항 내역이 없습니다
		</p>

		<template v-else>
			<div class="mm_accordion">
				<ul>
					<li>
						<dropdown
							tag="dl"
							group="cs-notice"
						>
							<template #button>
								<p><b class="text_important">중요</b><b>[공지] M.Mon solution 온라인 쇼핑몰 OPEN</b></p>
							</template>
							<template #content>
								<p>
									<lazyload
										tag="img"
										src="/image/_sample/notice_1.png"
									></lazyload>
								</p><br>
								<p>안녕하세요.<br>코로나 바이러스와 관련하여 택배사별 일부상품 입고 및 배송지연 안내 드립니다.</p>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="cs-notice"
						>
							<template #button>
								<p><b>[공지] 1월 쿠폰 공지사항입니다</b></p>
							</template>
							<template #content>
								<p>M.Mon solution의 다양한 행사소식과 다채로운 혜택을 받으실 수 있으며, 국내외 유명 브랜드 상품을 쇼핑할 수 있는 온오프라인 통합앱입니다.</p>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="cs-notice"
						>
							<template #button>
								<p><b>[공지] 6월 신용카드 무이자할부</b></p>
							</template>
							<template #content>
								<p>M.Mon solution의 다양한 행사소식과 다채로운 혜택을 받으실 수 있으며, 국내외 유명 브랜드 상품을 쇼핑할 수 있는 온오프라인 통합앱입니다.</p>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="cs-notice"
						>
							<template #button>
								<p><b>[공지] 5월 신용카드 무이자할부</b></p>
							</template>
							<template #content>
								<p>M.Mon solution의 다양한 행사소식과 다채로운 혜택을 받으실 수 있으며, 국내외 유명 브랜드 상품을 쇼핑할 수 있는 온오프라인 통합앱입니다.</p>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="cs-notice"
						>
							<template #button>
								<p><b>[공지] 4월 신용카드 무이자할부</b></p>
							</template>
							<template #content>
								<p>M.Mon solution의 다양한 행사소식과 다채로운 혜택을 받으실 수 있으며, 국내외 유명 브랜드 상품을 쇼핑할 수 있는 온오프라인 통합앱입니다.</p>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="cs-notice"
						>
							<template #button>
								<p><b>[결제] 네이버페이 시스템 점검 안내</b></p>
							</template>
							<template #content>
								<p>M.Mon solution의 다양한 행사소식과 다채로운 혜택을 받으실 수 있으며, 국내외 유명 브랜드 상품을 쇼핑할 수 있는 온오프라인 통합앱입니다.</p>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="cs-notice"
						>
							<template #button>
								<p><b>고객센터 휴무 안내(2022.02.17)</b></p>
							</template>
							<template #content>
								<p>M.Mon solution의 다양한 행사소식과 다채로운 혜택을 받으실 수 있으며, 국내외 유명 브랜드 상품을 쇼핑할 수 있는 온오프라인 통합앱입니다.</p>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="cs-notice"
						>
							<template #button>
								<p><b>[공지] 2월 신용카드 무이자할부</b></p>
							</template>
							<template #content>
								<p>M.Mon solution의 다양한 행사소식과 다채로운 혜택을 받으실 수 있으며, 국내외 유명 브랜드 상품을 쇼핑할 수 있는 온오프라인 통합앱입니다.</p>
							</template>
						</dropdown>
					</li>
				</ul>
			</div>

			<pagination></pagination>
		</template>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import Pagination from '@/component/Pagination.vue';

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>