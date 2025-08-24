<template>
	<!-- 팝업 헤더 -->
	<template v-if="$route.meta.isPopup">
		<div class="mm_header">
			<slot name="title"></slot>
			<button type="button" class="btn_popup-close" onclick="window.close();return false;">
				<i class="ico_close-popup"></i><b class="mm_ir-blind">팝업닫기</b>
			</button>
		</div>
	</template>

	<!-- 페이지 헤더 -->
	<template v-else>
		<header class="mm_header">
			<h1><a href="#" data-href="{ '_type': 'link' }"><b class="mm_ir-blind">M.Mon solution</b></a></h1>

			<!-- 헤더 바로가기 -->
			<div class="mm_header-quick">
				<p>안녕하세요<i class="ico_smile"></i><b class="mm_text-secondary">admin(최고관리자)</b>님</p>
				<div class="mm_header-quick-menu">
					<button type="button" class="mm_switch" data-switch="{ '_title': '접어보기', '_defaultTitle': '펼쳐보기' }">
						<i class="ico_down"></i>
					</button>
					<ul>
						<!-- (D) "이메일" 버튼 영역은 셀러로 로그인 했을 때만 노출합니다. -->
						<li><a href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>매장 바로가기</b></a></li>
						<li><a href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>이메일</b></a></li>
						<li><a href="/manual" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>매뉴얼</b></a></li>
						<!-- (D) "비밀번호변경"영역은 셀러로 로그인 했을 때만 노출합니다. -->
						<li><a href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>비밀번호 변경</b><i class="ico_link-pw"></i></a></li>
						<li>
							<button type="button">
								<b>로그아웃</b>
							</button>
						</li>
					</ul>
					<i class="ico_close" title="퀵메뉴 닫기"></i>
				</div>
			</div>
			<!-- // 헤더 바로가기 -->

			<!-- gnb -->
			<div class="mm_gnb">
				<button type="button" class="mm_switch" data-switch="{ '_isParent': true, '_title': '닫기', '_defaultTitle': '메뉴 전체보기', 'onChange': 'mm.scroll.toggle' }">
					<i class="ico_menu"></i>
				</button>
				<ul class="mm_flex">
					<!-- (D) 현재 페이지에 해당하는 a태그에 'S=gnb-on' 클래스를 추가합니다. -->
					<li><a href="/mall" data-href="{ '_type': 'link' }"><b>쇼핑몰관리</b></a></li>
					<li><a href="/member" data-href="{ '_type': 'link' }"><b>회원관리</b></a></li>
					<li><a href="/seller" data-href="{ '_type': 'link' }"><b>셀러관리</b></a></li>
					<li><a href="/product" data-href="{ '_type': 'link' }"><b>상품관리</b></a></li>
					<li><a href="/promotion" data-href="{ '_type': 'link' }"><b>프로모션</b></a></li>
					<li><a href="/order" data-href="{ '_type': 'link' }"><b>주문관리</b></a></li>
					<li><a href="/calc" data-href="{ '_type': 'link' }"><b>정산관리</b></a></li>
					<li><a href="/display" data-href="{ '_type': 'link' }"><b>전시관리</b></a></li>
					<li><a href="/stats" data-href="{ '_type': 'link' }"><b>매출/통계</b></a></li>
					<li><a href="/cs" data-href="{ '_type': 'link' }"><b>고객/게시판관리</b></a></li>
					<li><a href="/affiliate" data-href="{ '_type': 'link' }"><b>제휴사관리</b></a></li>
				</ul>
				<div class="mm_gnb-view">
					<div class="mm_gnb-view-dim"></div>
					<div class="mm_scroller T=y">
						<ul class="mm_gnb-view-item">
							<li>
								<section>
									<h2><a href="#" data-href="{ '_type': 'link' }"><b>쇼핑몰관리</b></a></h2>
									<div class="mm_gnb...depth2">
										<ul>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>약관</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>권한</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>관리자</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>내 정보</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>부서</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>접근권한</b></a></li>
													</ul>
												</div>
											</li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>로그 정보</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>관리자 로그인</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 가격 변경</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 옵션 변경</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 정보 변경</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>주문상태 수동 변경</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>회원정보 수동 변경</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>알림톡 발송</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>예약판매 변경</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>자동메일/SMS 템플릿</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>도서산간 지역 설정</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>검색엔진 최적화(SEO)</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>패널티/보상</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>패널티</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>고객 보상</b></a></li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</section>
							</li>
							<li>
								<section>
									<h2><a href="#" data-href="{ '_type': 'link' }"><b>회원관리</b></a></h2>
									<div class="mm_gnb...depth2">
										<ul>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>회원</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>임직원</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>PUSH</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>대량 이메일/SMS</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>템플릿 관리</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>이메일/SMS 발송</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>이메일/SMS 발송내역</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>휴면회원</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>회원등급</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>적립금 설정</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>전체 적립금</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>개별 적립금</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>적립금 설정</b></a></li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</section>
								<section>
									<h2><a href="#" data-href="{ '_type': 'link' }"><b>셀러관리</b></a></h2>
									<div class="mm_gnb...depth2">
										<ul>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>셀러 공지</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>셀러 팝업</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>셀러</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>중간 관리자</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>중간 관리자 계약</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>셀러 관리자</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>내 프로필</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>인플루언서 관리</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>셀러 휴무일 설정</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>브랜드</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>브랜드 구분</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>해외배송 셀러</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>주문제작 셀러</b></a></li>
										</ul>
									</div>
								</section>
							</li>
							<li>
								<section>
									<h2><a href="#" data-href="{ '_type': 'link' }"><b>상품관리</b></a></h2>
									<div class="mm_gnb...depth2">
										<ul>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 카테고리</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 등록/수정</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>공구 상품 등록/수정</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>키잎 공구</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>셀러 공구</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>공구 상품 임시저장</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 승인</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>공구 상품 승인</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>세트 상품</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 속성</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>품절 상품</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 아이콘</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>재입고</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>사은품</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>금지어</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>금지어 해제</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>금지어 관리</b></a></li>
													</ul>
												</div>
											</li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>상품 일괄</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 이동</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 가격</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 진열</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 재고</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>말머리 설정</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>상품색상 설정</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>예약판매 상품</b></a></li>
										</ul>
									</div>
								</section>
							</li>
							<li>
								<section>
									<h2><a href="#" data-href="{ '_type': 'link' }"><b>프로모션</b></a></h2>
									<div class="mm_gnb...depth2">
										<ul>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>1차 쿠폰</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>중복 쿠폰</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>다운로드 쿠폰</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>네이버 EP 쿠폰</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>다음 EP 쿠폰</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>자동발행쿠폰</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>자동발행쿠폰 설정</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>쿠폰 수동발급</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>페이퍼 쿠폰</b></a></li>
													</ul>
												</div>
											</li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>추가 할인</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>심야 할인</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>즉시 할인</b></a></li>
													</ul>
												</div>
											</li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>EP 할인적용 제외</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>상품</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>셀러</b></a></li>
													</ul>
												</div>
											</li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>EP 노출 제외</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>상품</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>셀러</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>제휴사별 할인 예외</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>제휴할인 적용 제외</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>상품</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>셀러</b></a></li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</section>
							</li>
							<li>
								<section>
									<h2><a href="#" data-href="{ '_type': 'link' }"><b>주문관리</b></a></h2>
									<div class="mm_gnb...depth2">
										<ul>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>주문 내역</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>개인정보 보호대상</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>배송</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>취소</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>반품</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>교환</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>환불</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>패널티</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>주문 미접수</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>배송 지연</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>품절</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>가송장</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>반품완료 미처리</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>교환완료 미처리</b></a></li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</section>
								<section>
									<h2><a href="#" data-href="{ '_type': 'link' }"><b>정산관리</b></a></h2>
									<div class="mm_gnb...depth2">
										<ul>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>정산현황</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>정산집계</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>부가세 신고 내역</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>정산 일괄수정</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>마감 전 데이터</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>전체 데이터</b></a></li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</section>
							</li>
							<li>
								<section>
									<h2><a href="#" data-href="{ '_type': 'link' }"><b>전시관리</b></a></h2>
									<div class="mm_gnb...depth2">
										<ul>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>기본 검색어</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>서브 페이지</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>1DEPTH 페이지 관리</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>기획전</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>이벤트</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>쇼케이스</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>쇼케이스 구분 관리</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>래플</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>공동구매</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>타임딜</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>스팟성 테마관</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>랭킹</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>코디샷</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>코디샷</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>코디샷 구분 관리</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>상품 공통배너</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>팝업</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>앱인트로 이미지</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>무이자</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>탑배너</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>우측배너</b></a></li>
										</ul>
									</div>
								</section>
							</li>
							<li>
								<section>
									<h2><a href="#" data-href="{ '_type': 'link' }"><b>매출/통계</b></a></h2>
									<div class="mm_gnb...depth2">
										<ul>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>셀러별 주문 통계</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>시간대별 매출코드 주문</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>일별 주문 추이</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>매출코드 주문금액</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>주문품목(지불완료)</b></a></li>
													</ul>
												</div>
											</li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>월별 주문 추이</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>월별 매출코드 주문 금액</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>다음 쇼핑하우 정산</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>매출코드별 실적 현황</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>결제수단별 매출내역</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>포털사이트 광고대행</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>목표 등록</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>목표 대비 실적(MD)</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>자사 DB 현황 메뉴</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>회원 통계</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>월별 가입회원</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>일별 가입회원</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>등급별 월 회원수</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>연도별 회원수</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>월별 회원수</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>일별 회원수</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>회원탈퇴 사유</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>회원탈퇴 사유 통계</b></a></li>
													</ul>
												</div>
											</li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>적립금 적립현황</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>월별 적립현황</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>일별 적립현황</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>EP 연동 상품 수 통계</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>네이버 CPS 매출 통계</b></a></li>
										</ul>
									</div>
								</section>
							</li>
							<li>
								<section>
									<h2><a href="#" data-href="{ '_type': 'link' }"><b>고객/게시판관리</b></a></h2>
									<div class="mm_gnb...depth2">
										<ul>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>공지사항</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>FAQ</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>FAQ 분류 관리</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>FAQ 관리</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>상품평</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>체험단 후기</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>판매자 문의</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>1:1 문의</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>문의 답변 양식</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>CS 알리미</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>배송지연 신고</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>품절취소 신고</b></a></li>
										</ul>
									</div>
								</section>
								<section>
									<h2><a href="#" data-href="{ '_type': 'link' }"><b>제휴사관리</b></a></h2>
									<div class="mm_gnb...depth2">
										<ul>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>카테고리 연동</b></a></li>
											<li>
												<a href="#" data-href="{ '_type': 'link' }"><b>로그 정보</b></a>
												<div class="mm_gnb...depth3">
													<ul>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>제휴 상품 로그</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>제휴 주문 로그</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>제휴 주문 수집실패로그</b></a></li>
														<li><a href="#" data-href="{ '_type': 'link' }"><b>제휴문의 로그</b></a></li>
													</ul>
												</div>
											</li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>제휴 브랜드 연동</b></a></li>
											<li><a href="#" data-href="{ '_type': 'link' }"><b>제휴 연동 현황</b></a></li>
										</ul>
									</div>
								</section>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- // gnb -->
		</header>
	</template>
</template>

<script setup lang="ts">
</script>