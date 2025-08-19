<template>
	<div class="mm_accordion">
		<ul>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/affiliate/mapping/api" data-href="{ '_type': 'link' }"><b>카테고리 연동</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>제휴연동 제외</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/affiliate/except-link/prod" data-href="{ '_type': 'link' }"><b>상품</b></a></li>
								<li><a href="/affiliate/except-link/seller" data-href="{ '_type': 'link' }"><b>셀러</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>로그 정보</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/affiliate/log/api/prod" data-href="{ '_type': 'link' }"><b>제휴 상품 로그</b></a></li>
								<li><a href="/affiliate/log/api/order" data-href="{ '_type': 'link' }"><b>제휴 주문 로그</b></a></li>
								<li><a href="/affiliate/log/api/fail" data-href="{ '_type': 'link' }"><b>제휴 주문 수집실패로그</b></a></li>
								<li><a href="/affiliate/log/api/inquiry" data-href="{ '_type': 'link' }"><b>제휴문의 로그</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/affiliate/brand" data-href="{ '_type': 'link' }"><b>제휴 브랜드 연동</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/affiliate/link-state" data-href="{ '_type': 'link' }"><b>제휴 연동 현황</b></a>
			</li>
		</ul>
	</div>
</template>