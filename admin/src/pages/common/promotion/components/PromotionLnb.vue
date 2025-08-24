<template>
	<div class="mm_accordion">
		<ul>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/promotion/coupon-first" data-href="{ '_type': 'link' }"><b>1차 쿠폰</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>중복 쿠폰</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/promotion/coupon/download" data-href="{ '_type': 'link' }"><b>다운로드 쿠폰</b></a></li>
								<li><a href="/promotion/coupon/naver" data-href="{ '_type': 'link' }"><b>네이버 EP 쿠폰</b></a></li>
								<li><a href="/promotion/coupon/daum" data-href="{ '_type': 'link' }"><b>다음 EP 쿠폰</b></a></li>
								<li><a href="/promotion/coupon/auto" data-href="{ '_type': 'link' }"><b>자동발행쿠폰</b></a></li>
								<li><a href="/promotion/coupon/auto-set" data-href="{ '_type': 'link' }"><b>자동발행쿠폰 설정</b></a></li>
								<li><a href="/promotion/coupon/self" data-href="{ '_type': 'link' }"><b>쿠폰 수동발급</b></a></li>
								<li><a href="/promotion/coupon/paper" data-href="{ '_type': 'link' }"><b>페이퍼 쿠폰</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>셀러 부담 할인</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/promotion/charge/coupon-first" data-href="{ '_type': 'link' }"><b>1차 쿠폰</b></a></li>
								<li><a href="/promotion/charge/coupon-download" data-href="{ '_type': 'link' }"><b>다운로드 쿠폰</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>추가 할인</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/promotion/discount/night" data-href="{ '_type': 'link' }"><b>심야 할인</b></a></li>
								<li><a href="/promotion/discount/now" data-href="{ '_type': 'link' }"><b>즉시 할인</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>EP 할인 적용 제외</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/promotion/except/discount/prod" data-href="{ '_type': 'link' }"><b>상품</b></a></li>
								<li><a href="/promotion/except/discount/seller" data-href="{ '_type': 'link' }"><b>셀러</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>EP 노출 제외</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/promotion/except/exposure/prod" data-href="{ '_type': 'link' }"><b>상품</b></a></li>
								<li><a href="/promotion/except/exposure/seller" data-href="{ '_type': 'link' }"><b>셀러</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>제휴할인 적용 제외</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/promotion/except/affiliate/api/prod" data-href="{ '_type': 'link' }"><b>상품</b></a></li>
								<li><a href="/promotion/except/affiliate/api/seller" data-href="{ '_type': 'link' }"><b>셀러</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/promotion/Affiliate/api" data-href="{ '_type': 'link' }"><b>제휴사별 할인 예외</b></a>
			</li>
		</ul>
	</div>
</template>