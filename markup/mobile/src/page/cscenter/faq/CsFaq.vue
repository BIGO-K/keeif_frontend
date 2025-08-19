<template>
	<layout title="자주하는 질문">
		<div class="m_cs-faq">
			<!-- 검색 -->
			<div class="m_cs-faq-search">
				<div class="mm_form-text">
					<button
						type="button"
						class="btn_search"
					>
						<i class="ico_search"></i><b class="mm_ir-blind">검색하기</b>
					</button>
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<input
							type="search"
							class="textfield"
							data-text
						><i class="bg_text"></i>
						<span class="text_placeholder">검색어를 입력하세요</span>
					</label>
				</div>
			</div>

			<!-- 자주하는 질문 키워드 -->
			<div class="mm_inner m_cs-faq-menu">
				<ul>
					<li>
						<mm-link
							class="S=menu-on"
							:to="{ name: '' }"
						>
							<b>배송</b>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: '' }">
							<b>주문/결제</b>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: '' }">
							<b>취소/교환/반품</b>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: '' }">
							<b>쿠폰</b>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: '' }">
							<b>적립금</b>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: '' }">
							<b>회원/멤버십</b>
						</mm-link>
					</li>
					<li>
						<mm-link :to="{ name: '' }">
							<b>기타</b>
						</mm-link>
					</li>
				</ul>
			</div>

			<!-- 자주하는 질문 내용 목록 -->
			<div class="mm_accordion">
				<ul>
					<li>
						<dropdown
							tag="dl"
							group="cs-faq"
						>
							<template #button>
								<p><b>비회원도 주문 결제가 가능한가요?</b></p>
							</template>
							<template #content>
								<p>비회원도 주문결제가 가능합니다.</p>
								<p>상품 상세 페이지에서 구매하기 버튼 클릭 시, 로그인 페이지로 이동하여 비회원 주문하기를 통해 진행할 수 있습니다.</p>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="cs-faq"
						>
							<template #button>
								<p><b>해외 카드로 결제 가능한가요?</b></p>
							</template>
							<template #content>
								<p>주문 결제 시 선택 가능한 은행이 아닌, 타 은행의 카드는 이용하실 수 없습니다.</p>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="cs-faq"
						>
							<template #button>
								<p><b>에스크로 결제가 무엇인가요?</b></p>
							</template>
							<template #content>
								<p>에스크로 결제란 상품 구입 대금을 온라인 쇼핑몰에 곧바로 송금하지 않고,</p>
								<p>공신력 있는 제3자에게 맡겼다가 상품 배송이 완료된 후 대금을 온라인 쇼핑몰에 지급하는 거래 안전장치를 말합니다.</p>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="cs-faq"
						>
							<template #button>
								<p><b>무통장 입금으로 결제 시, 입금할 계좌번호를 알고 싶어요.</b></p>
							</template>
							<template #content>
								<p>무통장 입금으로 주문 시, 주문 완료된 페이지에 입금할 계좌번호, 입금 기한에 대한 정보를 확인할 수 있습니다.</p>
							</template>
						</dropdown>
					</li>
					<li>
						<dropdown
							tag="dl"
							group="cs-faq"
						>
							<template #button>
								<p><b>주문 확인은 어디서 하나요?</b></p>
							</template>
							<template #content>
								<p>[마이페이지 > 주문 관리]에서 주문 내역을 확인할 수 있습니다.</p>
							</template>
						</dropdown>
					</li>
				</ul>
			</div>

			<!-- 자주하는 질문 검색 -->
			<div class="m_cs-faq-result">
				<h3 class="mm_heading">
					<b><strong class="text_search">결제</strong>으로 검색한 결과</b><strong class="mm_text-variable">{{ items.length }}개</strong>
				</h3>

				<p
					v-if="items.length < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>검색결과가 없습니다
				</p>

				<div
					v-else
					class="mm_accordion"
				>
					<ul>
						<li>
							<dropdown
								tag="dl"
								group="cs-faq"
							>
								<template #button>
									<p><b>비회원도 주문 <strong>결제</strong>가 가능한가요?</b></p>
								</template>
								<template #content>
									<p>비회원도 주문결제가 가능합니다.</p>
									<p>상품 상세 페이지에서 구매하기 버튼 클릭 시, 로그인 페이지로 이동하여 비회원 주문하기를 통해 진행할 수 있습니다.</p>
								</template>
							</dropdown>
						</li>
						<li>
							<dropdown
								tag="dl"
								group="cs-faq"
							>
								<template #button>
									<p><b>해외 카드로 <strong>결제</strong> 가능한가요?</b></p>
								</template>
								<template #content>
									<p>주문 결제 시 선택 가능한 은행이 아닌, 타 은행의 카드는 이용하실 수 없습니다. </p>
								</template>
							</dropdown>
						</li>
						<li>
							<dropdown
								tag="dl"
								group="cs-faq"
							>
								<template #button>
									<p><b>에스크로 <strong>결제</strong>가 무엇인가요?</b></p>
								</template>
								<template #content>
									<p>에스크로 결제란 상품 구입 대금을 온라인 쇼핑몰에 곧바로 송금하지 않고,</p>
									<p>공신력 있는 제3자에게 맡겼다가 상품 배송이 완료된 후 대금을 온라인 쇼핑몰에 지급하는 거래 안전장치를 말합니다.</p>
								</template>
							</dropdown>
						</li>
						<li>
							<dropdown
								tag="dl"
								group="cs-faq"
							>
								<template #button>
									<p><b>무통장 입금으로 <strong>결제</strong> 시, 입금할 계좌번호를 알고 싶어요.</b></p>
								</template>
								<template #content>
									<p>무통장 입금으로 주문 시, 주문 완료된 페이지에 입금할 계좌번호, 입금 기한에 대한 정보를 확인할 수 있습니다.</p>
								</template>
							</dropdown>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import Dropdown from '@/component/Dropdown.vue';

	const items: unknown[] = [''];// 내용없음 확인용 임시 변수
</script>