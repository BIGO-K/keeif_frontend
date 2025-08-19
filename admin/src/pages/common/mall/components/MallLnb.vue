<template>
	<div class="mm_accordion">
		<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
		<ul>
			<li>
				<a href="/mall/policy/use" data-href="{ '_type': 'link' }"><b>약관</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>권한</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/mall/permission/admin" data-href="{ '_type': 'link' }"><b>관리자</b></a></li>
								<li><a href="/mall/permission/my" data-href="{ '_type': 'link' }"><b>내 정보</b></a></li>
								<li><a href="/mall/permission/part" data-href="{ '_type': 'link' }"><b>부서</b></a></li>
								<li><a href="/mall/permission/access" data-href="{ '_type': 'link' }"><b>접근권한</b></a></li>
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
								<li><a href="/mall/log/admin" data-href="{ '_type': 'link' }"><b>관리자 로그인</b></a></li>
								<li><a href="/mall/log/price" data-href="{ '_type': 'link' }"><b>상품 가격 변경</b></a></li>
								<li><a href="/mall/log/option" data-href="{ '_type': 'link' }"><b>상품 옵션 변경</b></a></li>
								<li><a href="/mall/log/info" data-href="{ '_type': 'link' }"><b>상품 정보 변경</b></a></li>
								<li><a href="/mall/log/order" data-href="{ '_type': 'link' }"><b>주문상태 수동 변경</b></a></li>
								<li><a href="/mall/log/member" data-href="{ '_type': 'link' }"><b>회원정보 수동 변경</b></a></li>
								<li><a href="/mall/log/alarm" data-href="{ '_type': 'link' }"><b>알림톡 발송</b></a></li>
								<li><a href="/mall/log/reserve" data-href="{ '_type': 'link' }"><b>예약판매 변경</b></a></li>
								<li><a href="/mall/log/wms" data-href="{ '_type': 'link' }"><b>WMS 연동 로그</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/mall/autotemplate" data-href="{ '_type': 'link' }"><b>자동메일/SMS 템플릿</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/mall/area" data-href="{ '_type': 'link' }"><b>도서산간 지역 설정</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/mall/seo" data-href="{ '_type': 'link' }"><b>검색엔진 최적화(SEO)</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>패널티/보상</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/mall/penalty" data-href="{ '_type': 'link' }"><b>패널티</b></a></li>
								<li><a href="/mall/amends" data-href="{ '_type': 'link' }"><b>고객 보상</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>