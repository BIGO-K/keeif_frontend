<template>
	<div class="m_prodetail-tab-seller">
		<div class="mm_accordion m_prodetail-info">
			<ul>
				<li>
					<dropdown
						tag="dl"
						:is-active="true"
					>
						<template #button>
							<p><b>배송정보</b></p>
						</template>
						<template #content>
							<table>
								<tbody>
									<tr>
										<th scope="row">
											<b>배송처</b>
										</th>
										<td>CJ 대한통운</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송료</b>
										</th>
										<td>3,000원 (3만원 이상 구매 시, 무료 배송)</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송출발일</b>
										</th>
										<td>결제일로부터 영업일 기준 3일 이내에 출고되며, 물류 사정에 따라 다소 차이가 날 수 있습니다.(주말, 공휴일 제외) 도서 산간 지역은 7일 이내에 배송됩니다.</td>
									</tr>
								</tbody>
							</table>
						</template>
					</dropdown>
				</li>
				<li>
					<dropdown
						tag="dl"
						:is-active="true"
					>
						<template #button>
							<p><b>반품 업체 정보</b></p>
						</template>
						<template #content>
							<table>
								<tbody>
									<tr>
										<th scope="row">
											<b>업체명</b>
										</th>
										<td>(주)엠몬스타</td>
									</tr>
									<tr>
										<th scope="row">
											<b>연락처</b>
										</th>
										<td>02-1234-5678</td>
									</tr>
									<tr>
										<th scope="row">
											<b>택배사</b>
										</th>
										<td>CJ 대한통운</td>
									</tr>
									<tr>
										<th scope="row">
											<b>반품 배송비</b>
										</th>
										<td>구매자 귀책: 2,500원 또는 5,000원</td>
									</tr>
									<tr>
										<th scope="row">
											<b>반품지 주소</b>
										</th>
										<td>경기도 성남시 분당구 판교로 242판교디지털센터(PDC) C동 401호 물류센터</td>
									</tr>
								</tbody>
							</table>
						</template>
					</dropdown>
				</li>
				<li>
					<dropdown tag="dl">
						<template #button>
							<p><b>교환/반품/환불/취소 안내</b></p>
						</template>
						<template #content>
							<table>
								<tbody>
									<tr>
										<th scope="row">
											<b>교환/반품/<br>환불</b>
										</th>
										<td>
											<p><strong>교환/반품/환불 기간</strong> : 상품 수령 후 7일 이내 청약철회(반품), 교환요청이 가능 합니다. (단, 재화 등의 내용이 표시ㆍ광고 내용과 다르거나 계약 내용과 다르게 이행된 때에는 당해 재화 등을 공급받은 날로부터 3월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회가 가능 합니다.)</p>
											<ul>
												<li><strong>교환/반품 방법</strong> : 마이페이지를 통해 접수 부탁 드립니다.</li>
												<li><strong>반품 처리 과정</strong> : [반품신청내역]에서 확인 가능 합니다.</li>
												<li><strong>교환 처리 과정</strong> : [교환신청내역]에서 확인 가능 합니다.</li>
												<li><strong>반품비</strong> : 고객님의 단순 변심으로 인한 반품의 경우 반품 비용은 고객님 부담 입니다.</li>
												<li><strong>교환비</strong> : 고객님의 단순 변심으로 인한 교환의 경우 교환 비용은 고객님 부담 입니다.</li>
											</ul>
											<dl>
												<dt><strong>* 다음의 경우에 해당하는 교환/반품은 청약 철회가 제한됩니다.</strong></dt>
												<dd>
													<ul>
														<li>교환/반품 불가가 사전 고지된 일부 상품의 경우</li>
														<li>시간의 경과에 따라 재판매가 곤란할 정도로 재화 등의 가치가 현저히 감소한 경우</li>
														<li>복제가 가능한 재화 등의 포장이 훼손된 경우</li>
														<li>소비자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우(단, 상품 확인을 위한 포장 훼손 제외)</li>
														<li>소비자의 주문에 따라 개별적으로 생산되는 상품이 제작에 들어간 경우</li>
													</ul>
												</dd>
											</dl>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>취소</b>
										</th>
										<td>주문을 완료하신 경우 배송 전에만 취소 접수가 가능합니다. (배송이 이미 이루어진 경우, 해당 상품을 반품하신 후 환불받으시기 바랍니다)</td>
									</tr>
								</tbody>
							</table>
						</template>
					</dropdown>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Dropdown from '@/component/Dropdown.vue';
</script>