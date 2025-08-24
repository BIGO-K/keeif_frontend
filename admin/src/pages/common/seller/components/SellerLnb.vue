<template>
	<div class="mm_accordion">
		<ul>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/seller/notice" data-href="{ '_type': 'link' }"><b>셀러 공지</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/seller/popup" data-href="{ '_type': 'link' }"><b>셀러 팝업</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>셀러</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/pro/seller/manage/middle" data-href="{ '_type': 'link' }"><b>중간 관리자</b></a></li>
								<li><a href="/pro/seller/manage/middle-contract" data-href="{ '_type': 'link' }"><b>중간 관리자 계약</b></a></li>
								<li><a href="/pro/seller/manage/sellers" data-href="{ '_type': 'link' }"><b>셀러 관리자</b></a></li>
								<li><a href="/seller/manage/profile" data-href="{ '_type': 'link' }"><b>내 프로필</b></a></li>
								<li><a href="/seller/manage/influencer" data-href="{ '_type': 'link' }"><b>인플루언서 관리</b></a></li>
								<li><a href="/seller/manage/offday" data-href="{ '_type': 'link' }"><b>셀러별 휴무일</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/seller/brand" data-href="{ '_type': 'link' }"><b>브랜드</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/seller/brand-category" data-href="{ '_type': 'link' }"><b>브랜드 구분</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/seller/overseas" data-href="{ '_type': 'link' }"><b>해외배송 셀러</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/seller/custommade" data-href="{ '_type': 'link' }"><b>주문제작 셀러</b></a>
			</li>
		</ul>
	</div>
</template>