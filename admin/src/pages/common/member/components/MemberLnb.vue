<template>
	<div class="mm_accordion">
		<ul>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/member" data-href="{ '_type': 'link' }"><b>회원</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/member/staff" data-href="{ '_type': 'link' }"><b>임직원</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/member/push" data-href="{ '_type': 'link' }"><b>PUSH</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>대량 이메일/SMS</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/member/inform/template" data-href="{ '_type': 'link' }"><b>템플릿 관리</b></a></li>
								<li><a href="/member/inform/send" data-href="{ '_type': 'link' }"><b>이메일/SMS 발송</b></a></li>
								<li><a href="/member/inform/history" data-href="{ '_type': 'link' }"><b>이메일/SMS 발송내역</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/member/dormant" data-href="{ '_type': 'link' }"><b>휴면회원</b></a>
			</li>
			<li>
				<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
				<a href="/member/grade" data-href="{ '_type': 'link' }"><b>회원등급</b></a>
			</li>
			<li>
				<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_lnb', '_time': 'auto' }">
					<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
						<b>적립금 설정</b><i class="ico_dropdown"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 현재 페이지에 해당하는 a태그에 T=lnb-on 클래스를 추가합니다. -->
							<ul>
								<li><a href="/member/point/all" data-href="{ '_type': 'link' }"><b>전체 적립금</b></a></li>
								<li><a href="/member/point/personal" data-href="{ '_type': 'link' }"><b>개별 적립금</b></a></li>
								<li><a href="/member/point/set" data-href="{ '_type': 'link' }"><b>적립금 설정</b></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>