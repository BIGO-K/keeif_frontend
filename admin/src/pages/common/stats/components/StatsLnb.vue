<template>
	<div class="mm_accordion">
		<ul>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/stats/order" data-href="{ '_type': 'link' }"><b>셀러별 주문 통계</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/stats/time" data-href="{ '_type': 'link' }"><b>시간대별 매출코드 주문</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>일별 주문 추이</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/stats/date/price" data-href="{ '_type': 'link' }"><b>매출코드 주문금액</b></a></li>
								<li><a href="/stats/date/prod" data-href="{ '_type': 'link' }"><b>주문품목(지불완료)</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>주간 주문 추이</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/stats/week-price" data-href="{ '_type': 'link' }"><b>주간 매출 추이</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>월별 주문 추이</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/stats/month-price" data-href="{ '_type': 'link' }"><b>월별 매출코드 주문 금액</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>베스트 100</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/stats/best/time" data-href="{ '_type': 'link' }"><b>실시간 베스트 100</b></a></li>
								<li><a href="/stats/best/week" data-href="{ '_type': 'link' }"><b>주간 베스트 100</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/stats/daum" data-href="{ '_type': 'link' }"><b>다음 쇼핑하우 정산</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/stats/inflow" data-href="{ '_type': 'link' }"><b>매출코드별 실적 현황</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/stats/payment" data-href="{ '_type': 'link' }"><b>결제수단별 매출내역</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/stats/ad" data-href="{ '_type': 'link' }"><b>포털사이트 광고대행</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/stats/goal" data-href="{ '_type': 'link' }"><b>목표 등록</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/stats/performance" data-href="{ '_type': 'link' }"><b>목표 대비 실적(MD)</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/stats/db" data-href="{ '_type': 'link' }"><b>자사 DB 현황 메뉴</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>회원통계</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/stats/member/month-join" data-href="{ '_type': 'link' }"><b>월별 가입회원</b></a></li>
								<li><a href="/stats/member/date-join" data-href="{ '_type': 'link' }"><b>일별 가입회원</b></a></li>
								<li><a href="/stats/member/grade" data-href="{ '_type': 'link' }"><b>등급별 월 회원수</b></a></li>
								<li><a href="/stats/member/year" data-href="{ '_type': 'link' }"><b>연도별 회원수</b></a></li>
								<li><a href="/stats/member/month" data-href="{ '_type': 'link' }"><b>월별 회원수</b></a></li>
								<li><a href="/stats/member/date" data-href="{ '_type': 'link' }"><b>일별 회원수</b></a></li>
								<li><a href="/stats/member/withdrawal" data-href="{ '_type': 'link' }"><b>회원탈퇴 사유</b></a></li>
								<li><a href="/stats/member/withdrawal-state" data-href="{ '_type': 'link' }"><b>회원탈퇴 사유 통계</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>적립금 적립현황</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/stats/save/month" data-href="{ '_type': 'link' }"><b>월별 적립현황</b></a></li>
								<li><a href="/stats/save/date" data-href="{ '_type': 'link' }"><b>일별 적립현황</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/stats/ep-prod" data-href="{ '_type': 'link' }"><b>EP 연동 상품 수 통계</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/stats/naver-cps" data-href="{ '_type': 'link' }"><b>네이버 CPS 매출 통계</b></a>
			</li>
		</ul>
	</div>
</template>