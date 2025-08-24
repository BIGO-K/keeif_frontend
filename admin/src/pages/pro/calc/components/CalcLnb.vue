<template>
	<div class="mm_accordion">
		<ul>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/calc/state" data-href="{ '_type': 'link' }"><b>정산현황</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/calc/total" data-href="{ '_type': 'link' }"><b>정산집계</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/pro/calc/tax" data-href="{ '_type': 'link' }"><b>부가세 신고 내역</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>정산 일괄수정</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/calc/data/deadline" data-href="{ '_type': 'link' }"><b>마감 전 데이터</b></a></li>
								<li><a href="/calc/data/all" data-href="{ '_type': 'link' }"><b>전체 데이터</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>