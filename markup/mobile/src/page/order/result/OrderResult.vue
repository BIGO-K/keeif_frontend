<template>
	<layout
		title="주문완료"
		layout="popup"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-order-fin">
			<div class="mm_inner">
				<template v-if="orderResult === 'success'">
					<h3 class="mm_title">
						<b>주문이 완료되었습니다</b>
					</h3>
					<p>주문번호: 2005141142151234562</p>
					<!-- (D) 결제방법이 무통장입금인 경우 'm...fin-deposit' 영역을 노출합니다 -->
					<div class="m...fin-deposit">
						<p class="text_deadline">
							입금기한: 2022.06.05<span>23:59:59</span>까지
						</p>
						<p>입금계좌: 국민은행 12234567984123</p>
					</div>
					<div class="mm_btn_box">
						<div class="mm_flex T=equal">
							<mm-link
								class="mm_btn T=line T=dark"
								:to="{ name: 'MyOrder' }"
							>
								<b>구매내역 보기</b>
							</mm-link>
							<mm-link
								class="mm_btn T=primary"
								:to="{ name: 'Main' }"
							>
								<b>쇼핑 홈 가기</b>
							</mm-link>
						</div>
					</div>


					<!-- 주문 상품 -->
					<div class="mm_order-item">
						<div class="mm_order-item-seller">
							<div class="mm_order...seller-head">
								<p class="text_ship">
									<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
								</p>
							</div>
							<div class="mm_product-list T=sm">
								<ul>
									<li>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<dawn-tag></dawn-tag>

														<p class="text_brand">엠몬스타</p>
														<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140</p>
														<p class="text_price"><strong>54,800</strong></p>
														<p class="text_option">모로오렌지 클렌즈 / 60일분 2Box / 마이해빗 보틀 1 (-37,000원) / 1개</p>
													</figcaption>
												</figure>
											</a>
											<div class="mm_product-item-footer">
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
									<li>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_2.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140</p>
														<p class="text_price"><strong>54,800</strong></p>
														<p class="text_option">모로오렌지 클렌즈 / 60일분 2Box / 마이해빗 보틀 1 (-37,000원) / 1개</p>
													</figcaption>
												</figure>
											</a>
											<div class="mm_product-item-footer">
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="mm_order-item-seller">
							<div class="mm_order...seller-head">
								<p class="text_ship">
									<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
								</p>
							</div>
							<div class="mm_product-list T=sm">
								<ul>
									<li>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_3.png"
													></lazyload>
													<figcaption>
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140</p>
														<p class="text_price"><strong>54,800</strong></p>
														<p class="text_option">베이지 FREE / 1개</p>
													</figcaption>
												</figure>
											</a>
											<div class="mm_product-item-footer">
												<p class="text_point">
													사용 적립금<b><strong>3,000</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<hr class="mm_line">
					<div class="mm_inner">
						<gift-order-info v-if="true"></gift-order-info>

						<!-- 배송지 정보 -->
						<section>
							<h4 class="mm_strapline">
								<b>배송지 정보</b>
							</h4>
							<div class="mm_order-info">
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>배송지명</b>
											</th>
											<td>나의자취방</td>
										</tr>
										<tr>
											<th scope="row">
												<b>받는 사람</b>
											</th>
											<td>홍길동</td>
										</tr>
										<tr>
											<th scope="row">
												<b>휴대폰 번호</b>
											</th>
											<td>010-1234-2839</td>
										</tr>
										<tr>
											<th scope="row">
												<b>주소</b>
											</th>
											<td>39392<br>서울 서초구 명달로 17길 32, 트라움하우스 2차 아파트 301호</td>
										</tr>

										<dawn-order-address-info></dawn-order-address-info>

										<tr>
											<th scope="row">
												<b>배송메모</b>
											</th>
											<td>문옆 소화전이요</td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>

						<!-- 최종 결제금액 -->
						<section class="mm_costbox">
							<h4 class="mm_strapline">
								<b>최종 결제금액</b>
							</h4>
							<div class="mm_cost">
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>총 상품금액</b>
											</th>
											<td>
												<p class="text_price">
													<strong>210,000</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>배송비</b>
											</th>
											<td>
												<p class="text_price">
													+ <strong>2,500</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>추가할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>6,200</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>쿠폰할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>8,540</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>적립금 사용</b>
											</th>
											<td>
												<p class="text_point">
													- <strong>2,450</strong><sub>원</sub>
												</p>
											</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<th scope="row">
												<b>최종 결제금액</b>
											</th>
											<td>
												<p class="text_price mm_text-variable">
													<strong>201,510</strong>
												</p>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
							<div class="mm_costbox-unit">
								<p>결제수단: 신용/체크카드</p>
								<p>카드사: 하나카드</p>
								<p>카드번호: 123*-****-****-****</p>
								<p>결제승인일: 2020.06.04<span class="text_time">12:30:12</span></p>
							</div>
						</section>
					</div>
				</template>

				<template v-else>
					<p class="mm_text-none">
						<i class="ico_text-none"></i>결제 승인에 실패했습니다<br>카드 잔액이 부족합니다
					</p>
					<div class="mm_btn_box">
						<div class="mm_flex T=equal">
							<mm-link
								class="mm_btn T=line T=dark"
								:to="{ name: 'Order' }"
							>
								<b>주문서로 가기</b>
							</mm-link>
							<mm-link
								class="mm_btn T=primary"
								:to="{ name: 'Main' }"
							>
								<b>쇼핑 홈 가기</b>
							</mm-link>
						</div>
					</div>
				</template>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import GiftOrderInfo from '@/feature/gift/component/GiftInfo.vue';
	import DawnOrderAddressInfo from '@/custom/dawn/component/DawnOrderAddressInfo.vue';
	import DawnTag from '@/custom/dawn/component/DawnTag.vue';

	const orderResult = 'success';
</script>