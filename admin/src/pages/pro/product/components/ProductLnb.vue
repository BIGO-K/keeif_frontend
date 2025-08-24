<template>
	<div class="mm_accordion">
		<ul>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/product/category" data-href="{ '_type': 'link' }"><b>상품 카테고리</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/product/manage" data-href="{ '_type': 'link' }"><b>상품 등록/수정</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>공구 상품 등록/수정</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/pro/product/manage/coop" data-href="{ '_type': 'link' }"><b>키잎 공구</b></a></li>
								<li><a href="/pro/product/manage/coop/seller" data-href="{ '_type': 'link' }"><b>셀러 공구</b></a></li>
								<li><a href="/pro/product/manage/coop/storage" data-href="{ '_type': 'link' }"><b>공구 상품 임시저장</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/product/confirm" data-href="{ '_type': 'link' }"><b>상품 승인</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/product/confirm/coop" data-href="{ '_type': 'link' }"><b>공구 상품 승인</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/product/set" data-href="{ '_type': 'link' }"><b>세트 상품</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/product/property" data-href="{ '_type': 'link' }"><b>상품 속성</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/product/soldout" data-href="{ '_type': 'link' }"><b>품절 상품</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/product/icon" data-href="{ '_type': 'link' }"><b>상품 아이콘</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/product/restock" data-href="{ '_type': 'link' }"><b>재입고</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/product/gift" data-href="{ '_type': 'link' }"><b>사은품</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>금지어</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/product/ban/clear" data-href="{ '_type': 'link' }"><b>금지어 해제</b></a></li>
								<li><a href="/product/ban/manage" data-href="{ '_type': 'link' }"><b>금지어 관리</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>상품 일괄</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/product/bundle/move" data-href="{ '_type': 'link' }"><b>상품 이동</b></a></li>
								<li><a href="/product/bundle/price" data-href="{ '_type': 'link' }"><b>상품 가격</b></a></li>
								<li><a href="/product/bundle/display" data-href="{ '_type': 'link' }"><b>상품 진열</b></a></li>
								<li><a href="/product/bundle/stock" data-href="{ '_type': 'link' }"><b>상품 재고</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/product/headline" data-href="{ '_type': 'link' }"><b>말머리 설정</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/product/color" data-href="{ '_type': 'link' }"><b>상품색상 설정</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/product/reserve" data-href="{ '_type': 'link' }"><b>예약판매 상품</b></a>
			</li>
		</ul>
	</div>
</template>