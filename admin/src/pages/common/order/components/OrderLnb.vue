<template>
	<div class="mm_accordion">
		<ul>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/order/manage" data-href="{ '_type': 'link' }"><b>주문 내역</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/order/privacy" data-href="{ '_type': 'link' }"><b>개인정보 보호대상</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/order/ship" data-href="{ '_type': 'link' }"><b>배송</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/order/cancel" data-href="{ '_type': 'link' }"><b>취소</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/order/return" data-href="{ '_type': 'link' }"><b>반품</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/order/exchange" data-href="{ '_type': 'link' }"><b>교환</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/order/refund" data-href="{ '_type': 'link' }"><b>환불</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>패널티</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/pro/order/penalty/receipt" data-href="{ '_type': 'link' }"><b>주문 미접수</b></a></li>
								<li><a href="/pro/order/penalty/delay" data-href="{ '_type': 'link' }"><b>배송 지연</b></a></li>
								<li><a href="/pro/order/penalty/soldout" data-href="{ '_type': 'link' }"><b>품절</b></a></li>
								<li><a href="/pro/order/penalty/invoice" data-href="{ '_type': 'link' }"><b>가송장</b></a></li>
								<li><a href="/pro/order/penalty/return" data-href="{ '_type': 'link' }"><b>반품완료 미처리</b></a></li>
								<li><a href="/pro/order/penalty/exchange" data-href="{ '_type': 'link' }"><b>교환완료 미처리</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>