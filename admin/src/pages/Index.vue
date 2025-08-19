<template>
	<h1><b>[PRO] keeif Admin</b></h1>
	<div class="mm_tab" data-tab>
		<nav class="mm_tab-menu">
			<ul>
				<li><a class="btn_tab S=tab-on" href="javascript:;">템플릿/레이아웃/에러</a></li>
				<li><a class="btn_tab" href="javascript:;">팝업</a></li>
				<li><a class="btn_tab" href="javascript:;">로그인/메인</a></li>
				<li><a class="btn_tab" href="javascript:;">쇼핑몰관리</a></li>
				<li><a class="btn_tab" href="javascript:;">회원관리</a></li>
				<li><a class="btn_tab" href="javascript:;">셀러관리</a></li>
				<li><a class="btn_tab" href="javascript:;">상품관리</a></li>
				<li><a class="btn_tab" href="javascript:;">프로모션</a></li>
				<li><a class="btn_tab" href="javascript:;">주문관리</a></li>
				<li><a class="btn_tab" href="javascript:;">전시관리</a></li>
				<li><a class="btn_tab" href="javascript:;">고객/게시판관리</a></li>
				<li><a class="btn_tab" href="javascript:;">정산관리</a></li>
				<li><a class="btn_tab" href="javascript:;">매출/통계</a></li>
				<li><a class="btn_tab" href="javascript:;">제휴사관리</a></li>
			</ul>
		</nav>

		<!-- 템플릿/레이아웃/에러 -->
		<div class="mm_tab-item S=tab-on">
			<!-- 템플릿/레이아웃 -->
			<section>
				<h2><b>템플릿/레이아웃</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">템플릿</div>
							<div class="text_link" data-path="template">_template.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div class="text_color1">작업이 진행되면서 내용이 업데이트 됩니다.</div>
						</a>
					</li>
					<li>
						<a class="mm_flex"><div class="text_name">레이아웃</div></a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">레이아웃 페이지</div>
									<div class="text_link" data-path="">_layoutPage.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">레이아웃 팝업</div>
									<div class="text_link" data-path="">_layoutPopup.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 템플릿/레이아웃 -->

			<!-- 에러 -->
			<section>
				<h2><b>에러</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">403</div>
							<div class="text_link" data-path="error/403">error403.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">404</div>
							<div class="text_link" data-path="error/404">error404.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">500</div>
							<div class="text_link" data-path="error/500">error500.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">서비스점검</div>
							<div class="text_link" data-path="error/service">errorService.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">트래픽</div>
							<div class="text_link" data-path="error/traffic">errorTraffic.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">그외</div>
							<div class="text_link" data-path="error">error.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">익스접속안내</div>
							<div class="text_link" data-path="error/ie">errorIE.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 에러 -->
		</div>
		<!-- // 템플릿/레이아웃/에러 -->

		<!-- 팝업 -->
		<div class="mm_tab-item">
			<!-- 팝업 -->
			<section>
				<h2><b>팝업</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 엑셀 다운로드</div>
							<div class="text_link" data-path="excel-download">ExcelDownload.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] SCM 매뉴얼 다운로드</div>
							<div class="text_link" data-path="manual">Manual.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 셀러 정보</div>
							<div class="text_link" data-path="seller-info">SellerInfo.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 이미지 미리보기</div>
							<div class="text_link" data-path="image-preview">ImagePreview.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">전시관리에서 노출될 때는 pc/mobile에 따라 title을 변경합니다.</p></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 우편번호찾기</div>
							<div class="text_link" data-path="postcode">Postcode.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">검색결과</div>
									<div class="text_link" data-path="postcode-result">PostcodeResult.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 셀러 검색</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">단일선택</div>
									<div class="text_link" data-path="search/seller-single">SearchSellerSingle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">복수선택</div>
									<div class="text_link" data-path="search/seller-multi">SearchSellerMulti.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 브랜드 검색</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">단일선택</div>
									<div class="text_link" data-path="search/brand-single">SearchBrandSingle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">복수선택</div>
									<div class="text_link" data-path="search/brand-multi">SearchBrandMulti.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 인플루언서 검색</div>
							<div class="text_link" data-path="search/influencer">SearchInfluencer.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 담당 MD 검색</div>
							<div class="text_link" data-path="search/md">SearchMd.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 상품 검색</div>
							<div class="text_link" data-path="search/product">SearchProduct.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 중간 관리자 검색, 셀러 검색(복수선택), 브랜드 검색(복수선택), 이미지 미리보기</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 등록 상품 목록</div>
							<div class="text_link" data-path="product-list">SearchProductList.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p>[팝업] 이미지 미리보기</p></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 등록 상품 목록_공구상품</div>
							<div class="text_link" data-path="product-list">SearchProductListCoop.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p>[팝업] 이미지 미리보기</p></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 카테고리 검색</div>
							<div class="text_link" data-path="search/category">SearchCategory.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 내용 상세보기</div>
							<div class="text_link" data-path="content-detail">SearchContentDetail.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 팝업 -->
		</div>
		<!-- // 팝업 -->

		<!-- 로그인/메인 -->
		<div class="mm_tab-item">
			<!-- 로그인 -->
			<section>
				<h2><b>로그인</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">로그인</div>
							<div class="text_link" data-path="login">Login.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">로그인_최고관리자</div>
							<div class="text_link" data-path="Login-master">LoginMaster.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">(상태) 최고관리자 로그인</p></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 로그인 -->

			<!-- 메인 -->
			<section>
				<h2><b>메인</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">메인</div>
							<div class="text_link" data-path="main">Main.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 메인 -->
		</div>
		<!-- // 로그인/메인 -->

		<!-- 쇼핑몰관리 -->
		<div class="mm_tab-item">
			<!-- 약관 -->
			<section>
				<h2><b>약관</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">이용약관</div>
							<div class="text_link" data-path="mall/policy/use">MallPolicyUse.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">이용약관 상세보기</div>
									<div class="text_link" data-path="mall/policy/use/detail">MallPolicyUseDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">개인정보취급방침</div>
							<div class="text_link" data-path="mall/policy/privacy">MallPolicyPrivacy.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">개인정보취급방침 상세보기</div>
									<div class="text_link" data-path="mall/policy/privacy/detail">MallPolicyPrivacyDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">제 3자 정보제공동의</div>
							<div class="text_link" data-path="mall/policy/consent">MallPolicyConsent.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">제 3자 정보제공동의 상세보기</div>
									<div class="text_link" data-path="mall/policy/consent/detail">MallPolicyConsentDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">청소년보호방침</div>
							<div class="text_link" data-path="mall/policy/youth">MallPolicyYouth.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">청소년보호방침 상세보기</div>
									<div class="text_link" data-path="mall/policy/youth/detail">MallPolicyYouthDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">등록하기</div>
							<div class="text_link" data-path="mall/policy/register">MallPolicyRegister.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">모든 약관페이지에서 공통으로 사용합니다.</p></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">수정하기</div>
							<div class="text_link" data-path="mall/policy/modify">MallPolicyModify.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">모든 약관페이지에서 공통으로 사용합니다.</p></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 약관 -->

			<!-- 권한 -->
			<section>
				<h2><b>권한</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">내 정보</div>
							<div class="text_link" data-path="mall/permission/my">MallPermissionMy.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="mall/permission/my/modify">MallPermissionMyModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">관리자</div>
							<div class="text_link" data-path="mall/permission/admin">MallPermissionAdmin.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="mall/permission/admin/register">MallPermissionAdminRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="mall/permission/admin/modify">MallPermissionAdminModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">부서</div>
							<div class="text_link" data-path="mall/permission/part/">MallPermissionPart.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="mall/permission/part/register">MallPermissionPartRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="mall/permission/part/modify">MallPermissionPartModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">접근 권한</div>
							<div class="text_link" data-path="mall/permission/access/">MallPermissionAccess.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="mall/permission/access/register">MallPermissionAccessRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="mall/permission/access/modify">MallPermissionAccessModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 권한 -->

			<!-- 로그 정보 -->
			<section>
				<h2><b>로그 정보</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">관리자 로그인</div>
							<div class="text_link" data-path="mall/log/admin">MallLogAdmin.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 가격 변경</div>
							<div class="text_link" data-path="mall/log/price">MallLogPrice.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 옵션 변경</div>
							<div class="text_link" data-path="mall/log/option">MallLogOption.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 정보 변경</div>
							<div class="text_link" data-path="mall/log/info">MallLogInfo.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">주문상태 수동 변경</div>
							<div class="text_link" data-path="mall/log/order">MallLogOrder.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">회원정보 수동 변경</div>
							<div class="text_link" data-path="mall/log/member">MallLogMember.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">알림톡 발송</div>
							<div class="text_link" data-path="mall/log/alarm">MallLogAlarm.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 알림톡 템플릿</div>
									<div class="text_link" data-path="mall/log/alarm/template">MallLogAlarmTemplate.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">예약판매 변경</div>
							<div class="text_link" data-path="mall/log/reserve">MallLogReserve.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">WMS 연동 로그</div>
							<div class="text_link" data-path="mall/log/wms">MallLogWms.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 로그 정보 -->

			<!-- 자동메일/SMS 템플릿 -->
			<section>
				<h2><b>자동메일/SMS 템플릿</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">템플릿명</div>
							<div class="text_link" data-path="mall/autotemplate">MallAutoTemplate.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>이메일 샘플 추가 필요</div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 자동메일/SMS 템플릿 -->

			<!-- 도서산간 지역 설정 -->
			<section>
				<h2><b>도서산간 지역 설정</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">도서산간 지역 설정</div>
							<div class="text_link" data-path="mall/area">MallArea.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 도서산간설정 -->

			<!-- 검색엔진 최적화(SEO) -->
			<section>
				<h2><b>검색엔진 최적화(SEO)</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">검색엔진 최적화(SEO)</div>
							<div class="text_link" data-path="mall/seo">MallSeo.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 검색엔진 최적화(SEO) -->

			<!-- 패널티/보상 -->
			<section>
				<h2><b>패널티/보상</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">패널티</div>
							<div class="text_link" data-path="mall/penalty">MallPenalty.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 패널티 도움말</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 주문 미접수 패널티 도움말</div>
									<div class="text_link" data-path="mall/penalty/help/receipt">MallPenaltyHelpReceipt.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 주문 배송지연 패널티 도움말</div>
									<div class="text_link" data-path="mall/penalty/help/delay">MallPenaltyHelpDelay.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 품절 패널티 도움말</div>
									<div class="text_link" data-path="mall/penalty/help/soldout">MallPenaltyHelpSoldout.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 가송장 패널티 도움말</div>
									<div class="text_link" data-path="mall/penalty/help/invoice">MallPenaltyHelpInvoice.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 반품 미처리 패널티 도움말</div>
									<div class="text_link" data-path="mall/penalty/help/return">MallPenaltyHelpReturn.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 교환 미처리 패널티 도움말</div>
									<div class="text_link" data-path="mall/penalty/help/exchange">MallPenaltyHelpExchange.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">고객 보상</div>
							<div class="text_link" data-path="mall/amends">MallAmends.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] 고객 보상 도움말
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 최대 보상 가능 금액 고객 보상 도움말</div>
									<div class="text_link" data-path="mall/amends/help/price">MallAmendsHelpPrice.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 배송지연 고객 보상 도움말</div>
									<div class="text_link" data-path="mall/amends/help/delay">MallAmendsHelpDelay.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 품절취소 고객 보상 도움말</div>
									<div class="text_link" data-path="mall/amends/help/soldout">MallAmendsHelpSoldout.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 패널티/보상 -->
		</div>
		<!-- // 쇼핑몰관리 -->

		<!-- 회원관리 -->
		<div class="mm_tab-item">
			<!-- 회원 -->
			<section>
				<h2><b>회원</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">회원</div>
							<div class="text_link" data-path="member/manage">MemberManage.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] SMS 발송, 메일 발송, 적립금 내역 확인
								<p class="text_color2">(유료기능) 간편로그인 : 회원가입 유형에 간편 로그인 항목 추가</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] SMS 발송</div>
									<div class="text_link" data-path="member/manage/sms">MemberManageSms.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 메일 발송</div>
									<div class="text_link" data-path="member/manage/mail">MemberManageMail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 적립금 내역 확인</div>
									<div class="text_link" data-path="member/manage/point">MemberManagePoint.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">상세보기</div>
									<div class="text_link" data-path="member/manage/detail">MemberManageDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] SMS 발송 내역, 메일 발송 내역, 적립금 내역 확인, 환불계좌 정보 등록, 환불계좌 정보 수정</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] SMS 발송 내역</div>
											<div class="text_link" data-path="member/manage/detail/sms">MemberManageDetailSms.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 메일 발송 내역</div>
											<div class="text_link" data-path="member/manage/detail/mail">MemberManageDetailMail.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 수정이력</div>
											<div class="text_link" data-path="member/manage/detail/history">MemberManageDetailHistory.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 환불계좌 정보 등록</div>
											<div class="text_link" data-path="member/manage/detail/refund/register">MemberManageDetailRefundRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 환불계좌 정보 수정</div>
											<div class="text_link" data-path="member/manage/detail/refund/modify">MemberManageDetailRefundModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 회원 -->

			<!-- 임직원 -->
			<section>
				<h2><b>임직원</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">임직원</div>
							<div class="text_link" data-path="member/staff">membertaff.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 임직원 추가</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 임직원 추가</div>
									<div class="text_link" data-path="member/staff/register">membertaffRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 임직원 -->

			<!-- PUSH -->
			<section>
				<h2><b>PUSH</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">PUSH</div>
							<div class="text_link" data-path="member/push">MemberPush.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 이미지 미리보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">발송 내용 확인</div>
									<div class="text_link" data-path="member/push/detail">MemberPushDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="member/push/register">MemberPushRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="member/push/modify">MemberPushModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">푸시 테스터 등록하기</div>
									<div class="text_link" data-path="member/push/tester">MemberPushTester.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // PUSH -->

			<!-- 대량 문자/이메일 발송 -->
			<section>
				<h2><b>대량 문자/이메일 발송</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">템플릿관리</div>
							<div class="text_link" data-path="member/inform/template/">MemberInformTemplate.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] SMS 템플릿 상세내용, 이메일 템플릿 상세내용</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] SMS 템플릿 상세내용</div>
									<div class="text_link" data-path="member/inform/template/detail/sms">InformTemplateDetailSms.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 이메일 템플릿 상세내용</div>
									<div class="text_link" data-path="member/inform/template/detail/mail">MemberInformTemplateDetailMail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">이메일 템플릿 등록</div>
									<div class="text_link" data-path="member/inform/template/mail/register">MemberInformTemplateMailRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">이메일 템플릿 수정</div>
									<div class="text_link" data-path="member/inform/template/mail/modify">MemberInformTemplateMailModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">SMS 템플릿 등록</div>
									<div class="text_link" data-path="member/inform/template/sms/register">MemberInformTemplateSmsRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">SMS 템플릿 수정</div>
									<div class="text_link" data-path="member/inform/template/sms/modify">MemberInformTemplateSmsModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">이메일/SMS 발송</div>
							<div class="text_link" data-path="member/inform/send/">MemberInformSend.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">이메일 발송</div>
									<div class="text_link" data-path="member/inform/send/mail">MemberInformSendMail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 수신자 정보</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">SMS 발송</div>
									<div class="text_link" data-path="member/inform/send/sms">MemberInformSendSms.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 수신자 정보</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 수신자 정보</div>
									<div class="text_link" data-path="member/inform/send/receive">InfromSendReceive.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">이메일/SMS 발송 내역</div>
							<div class="text_link" data-path="member/inform/history">MemberInformHistory.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] SMS 템플릿 상세내용, 이메일 템플릿 상세내용</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">이메일 발송 수정</div>
									<div class="text_link" data-path="member/inform/history/mail/modify">MemberInformHistoryMailModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">SMS 발송 수정</div>
									<div class="text_link" data-path="member/inform/history/sms/modify">MemberInformHistorySmsModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 이메일 발송 상세</div>
									<div class="text_link" data-path="member/inform/history/detail/sms">InformHistoryDetailSms.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] SMS 발송 상세</div>
									<div class="text_link" data-path="member/inform/history/detail/sms">InformHistoryDetailMail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 대량 문자/이메일 발송 -->

			<!-- 휴면회원 -->
			<section>
				<h2><b>휴면회원</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">휴면회원</div>
							<div class="text_link" data-path="member/dormant">MemberDormant.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 휴면회원 -->

			<!-- 회원등급 -->
			<section>
				<h2><b>회원등급</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">회원등급</div>
							<div class="text_link" data-path="member/grade/">MemberGrade.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 이미지 미리보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="member/grade/modify">MemberModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 쿠폰 선택</div>
											<div class="text_link" data-path="member/grade/modify/coupon">MemberModifyCoupon.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 회원등급 -->

			<!-- 적립금 설정 -->
			<section>
				<h2><b>적립금 설정</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">전체 적립금</div>
							<div class="text_link" data-path="member/point/all">MemberPointAll.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">개별 적립금</div>
							<div class="text_link" data-path="member/point/personal">MemberPointPersonal.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 개별 적립금 확인</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 적립금 관리</div>
									<div class="text_link" data-path="member/point/personal/state">MemberPointPersonalState.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">적립금 설정</div>
							<div class="text_link" data-path="member/point/set">MemberPointSet.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 적립금 설정 -->
		</div>
		<!-- // 회원관리 -->

		<!-- 셀러관리 -->
		<div class="mm_tab-item">
			<!-- 셀러 공지 -->
			<section>
				<h2><b>셀러 공지</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">셀러 공지</div>
							<div class="text_link" data-path="seller/notice">SellerNotice.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">상세보기</div>
									<div class="text_link" data-path="seller/notice/detail">SellerNoticeDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="seller/notice/register">SellerNoticeRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="seller/notice/modify">SellerNoticeModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 셀러 공지 -->

			<!-- 셀러 팝업 -->
			<section>
				<h2><b>셀러 팝업</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">셀러 팝업</div>
							<div class="text_link" data-path="seller/popup/">SellerPopup.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 셀러 팝업 미리보기</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 셀러 팝업 미리보기</div>
									<div class="text_link" data-path="seller/popup/preview">SellerPopupPreview.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="seller/popup/register">SellerPopupRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="seller/popup/modify">SellerPopupModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 셀러 팝업 -->

			<!-- 셀러 -->
			<section>
				<h2><b>셀러</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 배송정책 상세</div>
							<div class="text_link" data-path="seller/manage/ship-policy">SellerManageShipPolicy.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>배송정책 공통 팝업</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">셀러 관리자</div>
							<div class="text_link" data-path="pro/seller/manage/sellers">SellerManageSellers.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="pro/seller/manage/sellers/register">SellerManageSellersRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 브랜드 검색, 담당 MD 검색</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 등록하기_개인화 추천 기능</div>
											<div class="text_link" data-path="pro/seller/manage/sellers/recommend/register">SellerManageSellersRecommendRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 개인화 추천 기능 : 상품 속성</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 등록하기_API 연동</div>
											<div class="text_link" data-path="pro/seller/manage/sellers/api/register">SellerManageSellersApiRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 연동 제휴사 설정</p></div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="pro/seller/manage/sellers/modify">SellerManageSellersModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 브랜드 검색, 담당 MD 검색</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 수정하기_개인화 추천 기능</div>
											<div class="text_link" data-path="pro/seller/manage/sellers/recommend/modify">SellerManageSellersRecommendModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 개인화 추천 기능 : 상품 속성</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 수정하기_API 연동</div>
											<div class="text_link" data-path="pro/seller/manage/sellers/api/modify">SellerManageSellersApiModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 연동 제휴사 설정</p></div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">배송정책</div>
									<div class="text_link" data-path="pro/seller/manage/sellers/ship/">SellerManageSellersShip.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p>[팝업] 배송정책 상세</p></div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">등록하기</div>
											<div class="text_link" data-path="pro/seller/manage/sellers/ship/register">SellerManageSellersShipRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>[팝업] 우편번호찾기</div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">수정하기</div>
											<div class="text_link" data-path="pro/seller/manage/sellers/ship/modify">SellerManageSellersShipModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>[팝업] 우편번호찾기</div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">인플루언서 관리</div>
							<div class="text_link" data-path="seller/manage/influencer">SellerManageInfluencer.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="seller/manage/influencer/register">SellerManageInfluencerRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 셀러 검색</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="seller/manage/influencer/modify">SellerManageInfluencerModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 셀러 검색</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">배송정책</div>
									<div class="text_link" data-path="seller/manage/influencer/ship/">SellerManageInfluencerShip.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p>[팝업] 배송정책 상세</p></div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">등록하기</div>
											<div class="text_link" data-path="seller/manage/influencer/ship/register">SellerManageInfluencerShipRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>[팝업] 우편번호찾기</div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">수정하기</div>
											<div class="text_link" data-path="seller/manage/influencer/ship/modify">SellerManageInfluencerShipModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>[팝업] 우편번호찾기</div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">셀러별 휴무일</div>
							<div class="text_link" data-path="seller/manage/offday">SellerManageOffday.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="seller/manage/offday/register">SellerManageOffdayRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 셀러 검색</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">내 프로필</div>
							<div class="text_link" data-path="seller/manage/profile">SellerManageProfile.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 셀러 -->

			<!-- 브랜드 -->
			<section>
				<h2><b>브랜드</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">브랜드</div>
							<div class="text_link" data-path="seller/brand/">sellerBrand.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="seller/brand/register">sellerBrandRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 등록하기_웹진</div>
											<div class="text_link" data-path="seller/brand/webzine/register">sellerBrandRegister_webzine.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>
												<p>[유료][팝업] 쇼케이스 설정_웹진</p>
												<p class="text_color2">(유료기능) 웹진 : 쇼케이스 설정</p>
											</div>
										</a>
										<ul>
											<li>
												<a class="mm_flex">
													<div class="text_name">[유료][팝업] 쇼케이스 설정_웹진</div>
													<div class="text_link" data-path="seller/brand/webzine/search">SellerBrandWebzineSearch.vue</div>
													<div><span class="text_tag T=complete"></span></div>
													<div></div>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="seller/brand/modify">sellerBrandModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 수정하기_웹진</div>
											<div class="text_link" data-path="seller/brand/webzine/modify">sellerBrandModify_webzine.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>
												<p>[유료][팝업] 쇼케이스 설정_웹진</p>
												<p class="text_color2">(유료기능) 웹진 : 쇼케이스 설정</p>
											</div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 브랜드 -->

			<!-- 브랜드 구분 -->
			<section>
				<h2><b>브랜드 구분</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">브랜드 구분</div>
							<div class="text_link" data-path="seller/brand-category">SellerBrandcategory.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 등록하기, 수정하기</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 등록하기</div>
									<div class="text_link" data-path="seller/brand-category/register">SellerBrandcategoryRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 수정하기</div>
									<div class="text_link" data-path="seller/brand-category/modify">SellerBrandcategoryModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 브랜드 구분 -->

			<!-- 해외배송 셀러 -->
			<section>
				<h2><b>해외배송 셀러</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">해외배송 셀러</div>
							<div class="text_link" data-path="seller/overseas">SellerOverseas.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 해외배송 셀러 -->

			<!-- 주문제작 셀러 -->
			<section>
				<h2><b>주문제작 셀러</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">주문제작 셀러</div>
							<div class="text_link" data-path="seller/custommade">SellerCustommade.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 주문제작 셀러 -->
		</div>
		<!-- // 셀러관리 -->

		<!-- 상품관리 -->
		<div class="mm_tab-item">
			<!-- 상품관리 공통팝업 -->
			<section>
				<h2><b>상품관리 공통팝업</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 상품 옵션/총 재고</div>
							<div class="text_link" data-path="product/option">ProdOption.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 카테고리 코드 확인</div>
							<div class="text_link" data-path="product/category-code">ProdCategoryCode.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 카테고리 코드 확인_사이즈 필터</div>
									<div class="text_link" data-path="product/category-code/size">ProdCategoryCodeSize.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 사이즈 필터 : FIT 필터 사용 여부, 슈즈 필터 사용 여부</p></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 상품관리 공통팝업 -->

			<!-- 상품 카테고리 -->
			<section>
				<h2><b>상품 카테고리</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 카테고리</div>
							<div class="text_link" data-path="product/category">ProdCategory.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 상품 카테고리_사이즈 필터</div>
									<div class="text_link" data-path="product/category/size">ProdCategorySize.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 사이즈 필터 : 필터 사용 설정</p></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 상품 카테고리 -->

			<!-- 상품 등록/수정 -->
			<section>
				<h2><b>상품 등록/수정</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 등록/수정</div>
							<div class="text_link" data-path="pro/product/manage">ProdManage.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 셀러 검색(복수선택), 브랜드 검색(복수선택), 상품 옵션/총 재고, 카테고리 코드 확인, 상품정보고시 항목 확인, 이미지 미리보기</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 상품 등록/수정_래플</div>
									<div class="text_link" data-path="pro/product/manage/raffle">ProdManageRaffle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 상품 등록/수정_펀딩</div>
									<div class="text_link" data-path="pro/product/manage/funding">ProdManageFunding.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 펀딩 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 상품 등록/수정_API 연동</div>
									<div class="text_link" data-path="pro/product/manage/api">ProdManageApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										[팝업] 제휴 상품 코드
										<p class="text_color2">(유료기능) API 연동 : 제휴사 상품 코드</p>
									</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 제휴 상품 코드</div>
											<div class="text_link" data-path="product/manage/api/code">ProdManageApiCode.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 상품 등록/수정_상품이미지 비율</div>
									<div class="text_link" data-path="pro/product/manage/image">ProdManageImage.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 상품이미지 비율 : 일괄 업로드 &#62; 리스트 이미지 일괄 업로드</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">상품 등록/수정_인플루언서</div>
									<div class="text_link" data-path="pro/product/manage/influencer">ProdManageInfluencer.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p>인플루언서 셀러</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 상품정보고시 항목 확인</div>
									<div class="text_link" data-path="product/manage/info-check">ProdManageInfoCheck.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 속성별 입력</div>
									<div class="text_link" data-path="product/manage/attribute">ProdManageAttribute.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 등록하기</div>
									<div class="text_link" data-path="pro/product/manage/register">ProdManageRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 속성별 입력, 셀러 검색, 브랜드 검색</p>
									</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 등록하기_래플</div>
											<div class="text_link" data-path="pro/product/manage/raffle/register">ProdManageRaffleRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 래플 : 상품 유형, 구매 수량 제한</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 등록하기_펀딩</div>
											<div class="text_link" data-path="pro/product/manage/funding/register">ProdManageFundingRegister.vue</div>
											<div><span class="text_tag T=remove"></span></div>
											<div>
												<p class="text_color2">
													(유료기능) 펀딩 : 상품 유형, 구매 수량 제한,<br>
													펀딩 메인 문구, 펀딩 진행 기간, 펀딩 진행율,<br>
													펀딩 상품 배송 시작일, 생산 원가, 관련 상품 설정,<br>
													펀딩 리스트 이미지 미리보기, 펀딩 리스트 이미지(마우스 오버),<br>
													옵션 설정(펀딩상품선택)
												</p>
											</div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 등록하기_사이즈 필터</div>
											<div class="text_link" data-path="pro/product/manage/size/register">ProdManageSizeRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 사이즈 필터 : FIT 속성, 슈즈 속성</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 등록하기_상품이미지 비율</div>
											<div class="text_link" data-path="pro/product/manage/image/register">ProdManageImageRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 상품이미지 비율 : 자사몰 리스트 이미지 미리보기, 리스트 이미지(마우스 오버)</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 등록하기_360도 뷰</div>
											<div class="text_link" data-path="pro/product/manage/360view/register">ProdManage360ViewRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 360도 뷰 : 360도 뷰</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 세트 상품 설정</div>
											<div class="text_link" data-path="pro/product/manage/set-option/register">ProProdManageSetOptionRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 세트 상품 확인</div>
											<div class="text_link" data-path="pro/product/manage/set-option">ProProdManageSetOption.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 수정하기</div>
									<div class="text_link" data-path="pro/product/manage/modify">ProdManageModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 속성별 입력, 셀러 검색, 브랜드 검색</p>
									</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 수정하기_래플</div>
											<div class="text_link" data-path="pro/product/manage/raffle/modify">ProdManageRaffleModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 래플 : 상품 유형, 구매 수량 제한</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 수정하기_펀딩</div>
											<div class="text_link" data-path="pro/product/manage/funding/modify">ProdManageFundingModify.vue</div>
											<div><span class="text_tag T=remove"></span></div>
											<div>
												<p class="text_color2">
													(유료기능) 펀딩 : 상품 유형, 구매 수량 제한,<br>
													펀딩 메인 문구, 펀딩 진행 기간, 펀딩 진행율,<br>
													펀딩 상품 배송 시작일, 생산 원가, 관련 상품 설정,<br>
													펀딩 리스트 이미지 미리보기, 펀딩 리스트 이미지(마우스 오버),<br>
													옵션 설정(펀딩상품선택)
												</p>
											</div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 수정하기_사이즈 필터</div>
											<div class="text_link" data-path="pro/product/manage/size/modify">ProdManageSizeModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 사이즈 필터 : FIT 속성, 슈즈 속성</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 수정하기_상품이미지 비율</div>
											<div class="text_link" data-path="pro/product/manage/image/modify">ProdManageImageModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 상품이미지 비율 : 자사몰 리스트 이미지 미리보기, 리스트 이미지(마우스 오버)</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 수정하기_360도 뷰</div>
											<div class="text_link" data-path="pro/product/manage/360view/modify">ProdManage360ViewModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 360도 뷰 : 360도 뷰</p></div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 상품 등록/수정 -->

			<!-- 공구 상품 등록/수정 -->
			<section>
				<h2><b>공구 상품 등록/수정</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">키잎 공구</div>
							<div class="text_link" data-path="pro/product/manage/coop">ProdManageCoop</div>
							<div><span class="text_tag T=develop"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="pro/product/manage/coop/register">ProdManageCoopRegister</div>
									<div><span class="text_tag T=develop"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록수정</div>
									<div class="text_link" data-path="pro/product/manage/coop/modify">ProdManageCoopModify</div>
									<div><span class="text_tag T=develop"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">셀러 공구</div>
							<div class="text_link" data-path="pro/product/manage/coop/seller">ProdManageCoopSeller</div>
							<div><span class="text_tag T=develop"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="pro/product/manage/coop/seller/register">ProdManageCoopSellerRegister</div>
									<div><span class="text_tag T=develop"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록수정</div>
									<div class="text_link" data-path="pro/product/manage/coop/seller/modify">ProdManageCoopSellerModify</div>
									<div><span class="text_tag T=develop"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">공구 상품 임시저장</div>
							<div class="text_link" data-path="pro/product/manage/coop/storage">ProdManageCoopStorage</div>
							<div><span class="text_tag T=develop"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>

			<!-- 상품 승인 -->
			<section>
				<h2><b>상품 승인</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 승인</div>
							<div class="text_link" data-path="pro/product/confirm">ProdConfirm.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] 반려사유입력, 반려사유보기, 변경 이력, 셀러 검색(복수선택), 브랜드 검색(복수선택), 이미지 미리보기, 상품 옵션/총 재고
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 반려사유입력</div>
									<div class="text_link" data-path="product/confirm/reject-form">ProdConfirmRejectForm.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 반려사유보기</div>
									<div class="text_link" data-path="product/confirm/reject-detail">ProdConfirmRejectDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 변경 이력</div>
									<div class="text_link" data-path="product/confirm/history">ProdConfirmHistory.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 상품 승인 -->

			<!-- 공구 상품 승인 -->
			<section>
				<h2><b>공구 상품 승인</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">공구 상품 승인</div>
							<div class="text_link" data-path="pro/product/confirm/coop">ProdConfirmCoop.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] 반려사유입력, 반려사유보기, 변경 이력, 셀러 검색(복수선택), 브랜드 검색(복수선택), 이미지 미리보기, 상품 옵션/총 재고
							</div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 공구 상품 승인 -->

			<!-- 세트 상품 -->
			<section>
				<h2><b>세트 상품</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">세트 상품</div>
							<div class="text_link" data-path="pro/product/set">ProdSet.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 셀러 검색(복수선택), 브랜드 검색(복수선택), 세트 상품 목록</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 세트 상품 목록</div>
									<div class="text_link" data-path="product/set/list">ProdSetList.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="pro/product/set/register">ProdSetRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 상품 검색(관리자설정)</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="pro/product/set/modify">ProdSetModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 상품 검색(관리자설정)</div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 세트 상품 -->

			<!-- 상품 속성 -->
			<section>
				<h2><b>상품 속성</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 속성</div>
							<div class="text_link" data-path="product/property">ProdProperty.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 상품정보고시 상세보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 상품정보고시 상세보기</div>
									<div class="text_link" data-path="product/property/detail">ProdPropertyDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 상품 속성 -->

			<!-- 품절 상품 -->
			<section>
				<h2><b>품절 상품</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">품절 상품</div>
							<div class="text_link" data-path="pro/product/soldout">ProdSoldout.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 브랜드 검색(복수선택), 이미지 미리보기</div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 품절 상품 -->

			<!-- [유료] 상품 아이콘 -->
			<section>
				<h2><b>[유료] 상품 아이콘</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 상품 아이콘</div>
							<div class="text_link" data-path="product/icon">ProdIcon.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[유료][팝업] 적용 범위(카테고리), 적용 범위(상품), 적용 범위(브랜드)</p>
								<p class="text_color2">(유료기능) 상품 아이콘</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 등록하기</div>
									<div class="text_link" data-path="product/icon/register">ProdIconRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										[팝업] 상품 검색, 카테고리 검색, 브랜드 검색
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 수정하기</div>
									<div class="text_link" data-path="product/icon/modify">ProdIconModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										[팝업] 상품 검색, 카테고리 검색, 브랜드 검색
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 적용 범위(카테고리)</div>
									<div class="text_link" data-path="product/icon/coverage/category">ProdIconCoverageCate.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 적용 범위(상품)</div>
									<div class="text_link" data-path="product/icon/coverage/product">ProdIconCoverageProd.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 적용 범위(브랜드)</div>
									<div class="text_link" data-path="product/icon/coverage/brand">ProdIconCoverageBrand.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // [유료] 상품 아이콘 -->

			<!-- [유료] 재입고 -->
			<section>
				<h2><b>[유료] 재입고</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 재입고</div>
							<div class="text_link" data-path="pro/product/restock">ProdRestock.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 셀러 검색, 브랜드 검색, 이미지 미리보기</p>
								<p class="text_color2">(유료기능) 재입고</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 재입고 신청자</div>
									<div class="text_link" data-path="product/restock/applicant">ProdRestockApplicant.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 이미지 미리보기</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // [유료] 재입고 -->

			<!-- [유료] 사은품 -->
			<section>
				<h2><b>[유료] 사은품</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 사은품</div>
							<div class="text_link" data-path="product/gift">ProdGift.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 셀러 검색(복수선택), 브랜드 검색(복수선택), 이미지 미리보기</p>
								<p>[유료][팝업] 사은품 적용 범위</p>
								<p class="text_color2">(유료기능) 사은품</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 등록하기</div>
									<div class="text_link" data-path="product/gift/register">ProdGiftRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										[팝업] 셀러 검색, 상품 검색(관리자설정), 이미지 미리보기
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 수정하기</div>
									<div class="text_link" data-path="product/gift/modify">ProdGiftModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										[팝업] 상품 검색(관리자설정), 이미지 미리보기
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 사은품 적용 범위</div>
									<div class="text_link" data-path="product/gift/coverage">ProdGiftCoverage.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // [유료] 사은품 -->

			<!-- 금지어 -->
			<section>
				<h2><b>금지어</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">금지어 해제</div>
							<div class="text_link" data-path="product/ban/clear">ProdBanClear.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p>[팝업] 금지어 해제</p></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 금지어 해제</div>
									<div class="text_link" data-path="product/ban/clear/except">ProdBanClearExcept.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 셀러 검색(복수선택)</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">금지어 관리</div>
							<div class="text_link" data-path="product/ban/manage">ProdBanManage.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p>[팝업] 금지어 등록</p></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 금지어 등록</div>
									<div class="text_link" data-path="product/ban/manage/register">ProdBanManageRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 금지어 -->

			<!-- 상품 일괄 -->
			<section>
				<h2><b>상품 일괄</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 이동</div>
							<div class="text_link" data-path="product/bundle/move">ProdBundleMove.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 브랜드 검색(복수선택), 카테고리 코드 확인, 이미지 미리보기</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 가격</div>
							<div class="text_link" data-path="product/bundle/price">ProdBundlePrice.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 브랜드 검색(복수선택), 이미지 미리보기</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 진열</div>
							<div class="text_link" data-path="product/bundle/display">ProdBundleDisplay.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 브랜드 검색(복수선택), 이미지 미리보기</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 재고</div>
							<div class="text_link" data-path="product/bundle/stock">ProdBundleStock.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 브랜드 검색(복수선택), 이미지 미리보기</div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 상품 일괄 -->

			<!-- 말머리 설정 -->
			<section>
				<h2><b>말머리 설정</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">말머리 설정</div>
							<div class="text_link" data-path="product/headline/">ProdHeadline.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="product/headline/register">ProdHeadlineRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										[팝업] 상품 검색, 등록 상품 목록
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="product/headline/modify">ProdHeadlineModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										[팝업] 상품 검색, 등록 상품 목록
									</div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 말머리 설정 -->

			<!-- 상품색상 설정 -->
			<section>
				<h2><b>상품색상 설정</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품색상 설정</div>
							<div class="text_link" data-path="product/color">prodCProdColorolor.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 상품색상 설정 -->

			<!-- 예약판매 상품 -->
			<section>
				<h2><b>예약판매 상품</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">예약판매 상품</div>
							<div class="text_link" data-path="pro/product/reserve">ProdReserve.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] 셀러 검색, 브랜드 검색, 예약판매 상품 검색, 예약 상품 수정
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 예약판매 상품 검색</div>
									<div class="text_link" data-path="product/reserve/search">ProdReserveSearch.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 예약 상품 수정</div>
									<div class="text_link" data-path="product/reserve/modify">ProdReserveModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 예약판매 상품 -->
		</div>
		<!-- // 상품관리 -->

		<!-- 프로모션 -->
		<div class="mm_tab-item">
			<!-- 1차 쿠폰 -->
			<section>
				<h2><b>1차 쿠폰</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">1차 쿠폰</div>
							<div class="text_link" data-path="promotion/coupon-first">PromoCouponFirst.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 1차 쿠폰 상세보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 1차 쿠폰 상세보기</div>
									<div class="text_link" data-path="promotion/coupon-first/detail">PromoCouponFirstDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="promotion/coupon-first/register">PromoCouponFirstRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 카테고리 검색, 상품 검색, 셀러 검색(복수선택), 브랜드 검색(복수선택)</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="promotion/coupon-first/modify">PromoCouponFirstModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 카테고리 검색, 상품 검색, 셀러 검색(복수선택), 브랜드 검색(복수선택)</div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 1차 쿠폰 -->

			<!-- 중복 쿠폰 -->
			<section>
				<h2><b>중복 쿠폰</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 쿠폰 발급 이력</div>
							<div class="text_link" data-path="promotion/coupon/history">PromoCouponHistory.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">다운로드 쿠폰</div>
							<div class="text_link" data-path="promotion/coupon/download">PromoCouponDown.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 쿠폰 상세보기, 쿠폰 발급 이력</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 다운로드 쿠폰_타임딜</div>
									<div class="text_link" data-path="promotion/coupon/download/timedeal">PromoCouponDownTimedeal.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜 : 쿠폰 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 다운로드 쿠폰_공동구매</div>
									<div class="text_link" data-path="promotion/coupon/download/coopbuy">PromoCouponDownCoopbuy.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 공동구매 : 쿠폰 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 다운로드 쿠폰 상세보기</div>
									<div class="text_link" data-path="promotion/coupon/download/detail">PromoCouponDownDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜/공동구매 : 쿠폰 유형에 유료 유형 추가</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="promotion/coupon/download/register">PromoCouponDownRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 카테고리 검색, 상품 검색, 셀러 검색(복수선택), 브랜드 검색(복수선택)</p>
									</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 등록하기_타임딜</div>
											<div class="text_link" data-path="promotion/coupon/download/timedeal">PromoCouponDownRegisterTimedeal.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 타임딜 : 쿠폰 유형, 쿠폰 적용 범위</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 등록하기_공동구매</div>
											<div class="text_link" data-path="promotion/coupon/download/coopbuy">PromoCouponDownRegisterCoopbuy.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 공동구매 : 쿠폰 유형, 쿠폰 적용 범위</p></div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="promotion/coupon/download/modify">PromoCouponDownModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 수정하기_타임딜</div>
											<div class="text_link" data-path="promotion/coupon/download/timedeal/modify">PromoCouponDownModifyTimedeal.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 타임딜 : 쿠폰 유형, 쿠폰 적용 범위</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 수정하기_공동구매</div>
											<div class="text_link" data-path="promotion/coupon/download/coopbuy/modify">PromoCouponDownModifyNoneCoopbuy.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 공동구매 : 쿠폰 유형, 쿠폰 적용 범위</p></div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기 (발급이력 없음)</div>
									<div class="text_link" data-path="promotion/coupon/download/modify-none">PromoCouponDownModifyNone.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 카테고리 검색, 상품 검색, 셀러 검색(복수선택), 브랜드 검색(복수선택)</p>
										<p class="text_color2">(상태) 발급이력 없음</p>
									</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 수정하기 (발급이력 없음)_타임딜</div>
											<div class="text_link" data-path="promotion/coupon/download/timedeal/modify-none">PromoCouponDownModifyNoneTimedeal.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 타임딜 : 쿠폰 유형, 쿠폰 적용 범위</p></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 수정하기 (발급이력 없음)_공동구매</div>
											<div class="text_link" data-path="promotion/coupon/download/coopbuy/modify-none">PromoCouponDownModifyNoneCoopbuy.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 공동구매 : 쿠폰 유형, 쿠폰 적용 범위</p></div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">네이버 EP 쿠폰</div>
							<div class="text_link" data-path="promotion/coupon/naver">PromoCouponNaver.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 쿠폰 상세보기, 쿠폰 발급 이력</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 네이버 EP 쿠폰 상세보기</div>
									<div class="text_link" data-path="promotion/coupon/naver/detail">PromoCouponNaverDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="promotion/coupon/naver/register">PromoCouponNaverRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 셀러 검색(복수선택), 상품 검색, 브랜드 검색(복수선택)</p>
										<p class="text_color2">(상태) 내용없음</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="promotion/coupon/naver/modify">PromoCouponNaverModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기 (발급이력 없음)</div>
									<div class="text_link" data-path="promotion/coupon/naver/modify-none">PromoCouponNaverModifyNone.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 셀러 검색(복수선택), 상품 검색, 브랜드 검색(복수선택)</p>
										<p class="text_color2">(상태) 내용없음</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">다음 EP 쿠폰</div>
							<div class="text_link" data-path="promotion/coupon/daum/">PromoCouponDaum.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 쿠폰 상세보기, 쿠폰 발급 이력</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 다음 EP 쿠폰 상세보기</div>
									<div class="text_link" data-path="promotion/coupon/daum/detail">PromoCouponDaumDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="promotion/coupon/daum/register">PromoCouponDaumRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 셀러 검색(복수선택), 상품 검색, 브랜드 검색(복수선택)</p>
										<p class="text_color2">(상태) 내용없음</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="promotion/coupon/daum/modify">PromoCouponDaumModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기 (발급이력 없음)</div>
									<div class="text_link" data-path="promotion/coupon/daum/modify-none">PromoCouponDaumModifyNone.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 셀러 검색(복수선택), 상품 검색, 브랜드 검색(복수선택)</p>
										<p class="text_color2">(상태) 내용없음</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">페이퍼 쿠폰</div>
							<div class="text_link" data-path="promotion/coupon/paper/">PromoCouponPaper.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 쿠폰 상세보기, 페이퍼 쿠폰 발급 이력, 인증번호 등록/관리</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 인증번호 등록/관리</div>
									<div class="text_link" data-path="promotion/coupon/paper/certify">PromoCouponPaperCertify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 페이퍼 쿠폰 상세보기</div>
									<div class="text_link" data-path="promotion/coupon/paper/detail">PromoCouponPaperDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 페이퍼 쿠폰 발급 이력</div>
									<div class="text_link" data-path="promotion/coupon/paper/history">PromoCouponPaperHistory.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="promotion/coupon/paper/register">PromoCouponPaperRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 카테고리 검색, 상품 검색, 셀러 검색(복수선택), 브랜드 검색(복수선택)</p>
										<p class="text_color2">(상태) 내용없음</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="promotion/coupon/paper/modify">PromoCouponPaperModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기 (발급이력 없음)</div>
									<div class="text_link" data-path="promotion/coupon/paper/modify-none">PromoCouponPaperModifyNone.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 카테고리 검색, 상품 검색, 셀러 검색(복수선택), 브랜드 검색(복수선택)</p>
										<p class="text_color2">(상태) 발급이력 없음</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">자동발행쿠폰</div>
							<div class="text_link" data-path="promotion/coupon/auto/">PromoCouponAuto.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 쿠폰 상세보기, 자동발행쿠폰 발급 이력</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 자동발행쿠폰 상세보기</div>
									<div class="text_link" data-path="promotion/coupon/auto/detail">PromoCouponAutoDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 자동발행쿠폰 발급 이력</div>
									<div class="text_link" data-path="promotion/coupon/auto/history">PromoCouponAutoHistory.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="promotion/coupon/auto/register">PromoCouponAutoRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="promotion/coupon/auto/modify">PromoCouponAutoModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기 (발급이력 없음)</div>
									<div class="text_link" data-path="promotion/coupon/auto/modify-none">PromoCouponAutoModifyNone.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(상태) 발급이력 없음</p></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">자동발행쿠폰 설정</div>
							<div class="text_link" data-path="promotion/coupon/auto-set">PromoCouponAutoset.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">쿠폰 수동발급</div>
							<div class="text_link" data-path="promotion/coupon/self">PromoCouponSelf.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 쿠폰 상세보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 쿠폰 조회</div>
									<div class="text_link" data-path="promotion/coupon/self/search">PromoCouponSelfSearch.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 중복 쿠폰 -->

			<!-- 추가 할인 -->
			<section>
				<h2><b>추가 할인</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">심야 할인</div>
							<div class="text_link" data-path="promotion/discount/night/">PromoDiscountNight.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 심야 할인 상세보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 심야 할인 상세보기</div>
									<div class="text_link" data-path="promotion/discount/night/detail">PromoDiscountNightDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="promotion/discount/night/register">PromoDiscountNightRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 셀러 검색(단일선택), 상품 검색(관리자설정), 브랜드 검색(복수선택)</p>
										<p class="text_color2">(상태) 목록 내용있음/없음</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="promotion/discount/night/modify">PromoDiscountNightModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 상품 검색(관리자설정), 브랜드 검색(복수선택)</p>
										<p class="text_color2">(상태) 목록 내용있음/없음</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">즉시 할인</div>
							<div class="text_link" data-path="promotion/discount/now">PromoDiscountNow.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 즉시 할인 상세보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 즉시 할인 상세보기</div>
									<div class="text_link" data-path="promotion/discount/now/detail">PromoDiscountNowDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="promotion/discount/now/register">PromoDiscountNowRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 셀러 검색(단일선택), 상품 검색(관리자설정), 브랜드 검색(복수선택)</p>
										<p class="text_color2">(상태) 상품목록 내용있음/없음</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="promotion/discount/now/modify">PromoDiscountNowModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 상품 검색(관리자설정), 브랜드 검색(복수선택)</p>
										<p class="text_color2">(상태) 상품목록 내용있음/없음</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 추가 할인 -->

			<!-- 적용 제외 -->
			<section>
				<h2><b>적용 제외</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 적용 제외 상품 검색</div>
							<div class="text_link" data-path="promotion/except/prod/search">PromoExceptProdSearch.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color1">EP 할인 적용 제외, EP 노출 제외, 제휴사별 할인 제외, 제휴할인 적용 제외 페이지에서만 사용</p></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 적용 제외 셀러 검색</div>
							<div class="text_link" data-path="promotion/except/seller/search">PromoExceptSellerSearch.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color1">EP 할인 적용 제외, EP 노출 제외, 제휴사별 할인 제외, 제휴할인 적용 제외 페이지에서만 사용</p></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 제외 항목 수정(상품)</div>
							<div class="text_link" data-path="promotion/except/prod/modify">PromoExceptProdModify.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 제외 항목 수정(셀러)</div>
							<div class="text_link" data-path="promotion/except/seller/modify">PromoExceptSellerModify.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">EP 할인적용 제외</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">상품</div>
									<div class="text_link" data-path="promotion/except/discount/prod">PromoExceptDiscountProd.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 적용 제외 상품 검색, 제외 항목 수정(상품)</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">셀러</div>
									<div class="text_link" data-path="promotion/except/discount/seller">PromoExceptDiscountSeller.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 적용 제외 셀러 검색, 제외 항목 수정(셀러)</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">EP 노출 제외</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">상품</div>
									<div class="text_link" data-path="promotion/except/exposure/prod">PromoExceptExposureProd.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 적용 제외 상품 검색, 제외 항목 수정(상품)</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">셀러</div>
									<div class="text_link" data-path="promotion/except/exposure/seller">PromoExceptExposureSeller.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 적용 제외 셀러 검색, 제외 항목 수정(셀러)</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 제휴할인 적용 제외</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 상품_API 연동</div>
									<div class="text_link" data-path="promotion/except/affiliate/api/prod">PromoExceptAffiliateApiProd.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										[팝업] 적용 제외 상품 검색, 제외 항목 수정(상품)
										<p class="text_color2">(유료기능) API 연동</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 셀러_API 연동</div>
									<div class="text_link" data-path="promotion/except/affiliate/api/seller">PromoExceptAffiliateApiSeller.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										[팝업] 적용 제외 셀러 검색, 제외 항목 수정(셀러)
										<p class="text_color2">(유료기능) API 연동</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 적용 제외 관리 -->

			<!-- 제휴사별 할인 예외 -->
			<section>
				<h2><b>[유료] 제휴사별 할인 예외</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 제휴사별 할인 예외</div>
							<div class="text_link" data-path="promotion/Affiliate/api">PromoAffiliateApi.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] 적용 제휴사 보기, 예외 항목 수정, 제휴사 상품 검색
								<p class="text_color2">(유료기능) API 연동</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 적용 제휴사 보기</div>
									<div class="text_link" data-path="promotion/Affiliate/api/list">PromoAffiliateApiList.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 예외 항목 수정</div>
									<div class="text_link" data-path="promotion/Affiliate/api/modify">PromoAffiliateApiModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 제휴사 상품 검색</div>
									<div class="text_link" data-path="promotion/Affiliate/api/search">PromoAffiliateApiSearch.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 제휴사별 할인 예외 -->
		</div>
		<!-- // 프로모션 -->

		<!-- 주문관리 -->
		<div class="mm_tab-item">
			<!-- 주문관리 공통팝업 -->
			<section>
				<h2><b>주문관리 공통팝업</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 주문 상세</div>
							<div class="text_link" data-path="pro/order/detail/">OrderDetail.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] 쿠폰 + 추가할인 내역, 배송지 정보 수정, 상담 정보 등록, 상담 정보 수정, SMS 발송, SMS 발송 상세,
								주문 취소, 예약 배송, 반품 신청, 교환 신청, 취소 거부, 셀러 정보, 송장 수정, 반품 보류, 교환 보류
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 주문 상세_API 연동</div>
									<div class="text_link" data-path="pro/order/detail/api">OrderDetailApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동 : 제휴사 주문번호, 판매처</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 쿠폰 + 추가할인 내역</div>
									<div class="text_link" data-path="order/detail/discount">OrderDetailDiscount.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 배송지 정보 수정</div>
									<div class="text_link" data-path="order/detail/address">OrderDetailAddress.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 상담 정보 등록</div>
									<div class="text_link" data-path="order/detail/counsel-register">OrderDetailCounselRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 상담 정보 수정</div>
									<div class="text_link" data-path="order/detail/counsel-modify">OrderDetailCounselModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] SMS 발송</div>
									<div class="text_link" data-path="order/detail/sms">OrderDetailSms.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] SMS 발송 상세</div>
									<div class="text_link" data-path="order/detail/sms-detail">OrderDetailSmsDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 송장 수정</div>
							<div class="text_link" data-path="order/invoice-modify">OrderInvoiceModify.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 주문관리 공통팝업 -->

			<!-- 주문관리 -->
			<section>
				<h2><b>주문관리</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">주문 내역</div>
							<div class="text_link" data-path="pro/order/manage">OrderManage.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 브랜드 검색(복수선택), CS 알리미 등록, 주문 상세, 셀러 정보</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 주문 내역_API 연동</div>
									<div class="text_link" data-path="pro/order/manage/api">OrderManageApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">개인정보 보호대상</div>
							<div class="text_link" data-path="order/privacy">OrderPrivacy.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 주문 상세</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">배송</div>
							<div class="text_link" data-path="pro/order/ship">OrderShip.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 브랜드 검색(복수선택), 주문 상세, 셀러 정보, 굿스플로 송장출력, 송장수정, 택배사 코드표, 예약 배송, 주문 취소, 반품 신청, 교환 신청</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 배송_API 연동</div>
									<div class="text_link" data-path="pro/order/ship/api">OrderShipApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 배송_타임딜</div>
									<div class="text_link" data-path="pro/order/ship/timedeal">OrderShipTimedeal.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 배송_래플</div>
									<div class="text_link" data-path="pro/order/ship/raffle">OrderShipRaffle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 배송_펀딩</div>
									<div class="text_link" data-path="pro/order/ship/funding">OrderShipFunding.vue</div>
									<div><span class="text_tag T=remove"></span></div>
									<div><p class="text_color2">(유료기능) 펀딩 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 예약배송(배송지연)</div>
									<div class="text_link" data-path="order/ship/delay">OrderShipDelay.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 주문 취소</div>
									<div class="text_link" data-path="order/ship/cancel">OrderShipCancel.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 반품 신청</div>
									<div class="text_link" data-path="order/ship/return">OrderShipReturn.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 교환 신청</div>
									<div class="text_link" data-path="order/ship/exchange">OrderShipExchange.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 굿스플로 송장출력</div>
									<div class="text_link" data-path="order/ship/invoice">OrderShipInvoice.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 택배사 코드표</div>
									<div class="text_link" data-path="order/ship/code">OrderShipCode.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">취소</div>
							<div class="text_link" data-path="pro/order/cancel/">OrderCancel.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 브랜드 검색(복수선택), 주문 상세, 셀러 정보, 취소 거부</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 취소_API 연동</div>
									<div class="text_link" data-path="pro/order/cancel/api">OrderCancelApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 취소_타임딜</div>
									<div class="text_link" data-path="pro/order/cancel/timedeal">OrderCancelTimedeal.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 취소_래플</div>
									<div class="text_link" data-path="pro/order/cancel/raffle">OrderCancelRaffle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 취소_펀딩</div>
									<div class="text_link" data-path="pro/order/cancel/funding">OrderCancelFunding.vue</div>
									<div><span class="text_tag T=remove"></span></div>
									<div><p class="text_color2">(유료기능) 펀딩 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 취소 거부</div>
									<div class="text_link" data-path="order/cancel/reject">OrderCancelReject.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">반품</div>
							<div class="text_link" data-path="pro/order/return/">OrderReturn.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 브랜드 검색(복수선택), 주문 상세, 셀러 정보, 반품 보류</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 반품_API 연동</div>
									<div class="text_link" data-path="pro/order/return/api">OrderReturnApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 반품_타임딜</div>
									<div class="text_link" data-path="pro/order/return/timedeal">OrderReturnTimedeal.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 반품_래플</div>
									<div class="text_link" data-path="pro/order/return/raffle">OrderReturnRaffle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 반품_펀딩</div>
									<div class="text_link" data-path="pro/order/return/funding">OrderReturnFunding.vue</div>
									<div><span class="text_tag T=remove"></span></div>
									<div><p class="text_color2">(유료기능) 펀딩 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 반품 보류</div>
									<div class="text_link" data-path="order/return/hold">OrderReturnHold.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">교환</div>
							<div class="text_link" data-path="pro/order/exchange/">OrderExchange.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 브랜드 검색(복수선택), 주문 상세, 셀러 정보, 교환 보류, 반품 전환</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 교환_API 연동</div>
									<div class="text_link" data-path="pro/order/exchange/api">OrderExchangeApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 교환_타임딜</div>
									<div class="text_link" data-path="pro/order/exchange/timedeal">OrderExchangeTimedeal.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 교환_래플</div>
									<div class="text_link" data-path="pro/order/exchange/raffle">OrderExchangeRaffle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 교환_펀딩</div>
									<div class="text_link" data-path="pro/order/exchange/funding">OrderExchangeFunding.vue</div>
									<div><span class="text_tag T=remove"></span></div>
									<div><p class="text_color2">(유료기능) 펀딩 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 교환 보류</div>
									<div class="text_link" data-path="order/exchange/hold">OrderExchangeHold.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 반품 전환</div>
									<div class="text_link" data-path="order/exchange/switch">OrderExchangeSwitch.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">환불</div>
							<div class="text_link" data-path="pro/order/refund">OrderRefund.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 주문 상세, 수동 환불 완료 처리, 수동 환불 완료 내역</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 환불_API 연동</div>
									<div class="text_link" data-path="pro/order/refund/api">OrderRefundApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 수동 환불 완료 처리</div>
									<div class="text_link" data-path="order/refund/complete">OrderRefundComplete.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 수동 환불 완료 내역</div>
									<div class="text_link" data-path="order/refund/detail">OrderRefundDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 주문관리 -->

			<!-- 패널티 -->
			<section>
				<h2><b>패널티</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">주문 미접수</div>
							<div class="text_link" data-path="pro/order/penalty/receipt/">OrderPenaltyReceipt.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 브랜드 검색(복수선택), 주문 상세, 셀러 정보, 엑셀 다운로드</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 주문 미접수_API 연동</div>
									<div class="text_link" data-path="pro/order/penalty/receipt/api">OrderPenaltyReceiptApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 주문 미접수_타임딜</div>
									<div class="text_link" data-path="pro/order/penalty/receipt/timedeal">OrderPenaltyReceiptTimedeal.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 주문 미접수_래플</div>
									<div class="text_link" data-path="pro/order/penalty/receipt/raffle">OrderPenaltyReceiptRaffle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 주문 미접수_펀딩</div>
									<div class="text_link" data-path="pro/order/penalty/receipt/funding">OrderPenaltyReceiptFunding.vue</div>
									<div><span class="text_tag T=remove"></span></div>
									<div><p class="text_color2">(유료기능) 펀딩 : 상품 유형</p></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">배송 지연</div>
							<div class="text_link" data-path="pro/order/penalty/delay/">OrderPenaltyDelay.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 브랜드 검색(복수선택), 주문 상세, 셀러 정보, 엑셀 다운로드, 2일 출고율</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 배송 지연_API 연동</div>
									<div class="text_link" data-path="pro/order/penalty/delay/api">OrderPenaltyDelayApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 배송 지연_타임딜</div>
									<div class="text_link" data-path="pro/order/penalty/delay/timedeal">OrderPenaltyDelayTimedeal.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 배송 지연_래플</div>
									<div class="text_link" data-path="pro/order/penalty/delay/raffle">OrderPenaltyDelayRaffle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 배송 지연_펀딩</div>
									<div class="text_link" data-path="pro/order/penalty/delay/funding">OrderPenaltyDelayFunding.vue</div>
									<div><span class="text_tag T=remove"></span></div>
									<div><p class="text_color2">(유료기능) 펀딩 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 2일 출고율</div>
									<div class="text_link" data-path="order/penalty/delay/rate">OrderPenaltyDelayRate.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 셀러 검색</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">품절</div>
							<div class="text_link" data-path="pro/order/penalty/soldout/">OrderPenaltySoldout.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 브랜드 검색(복수선택), 주문 상세, 셀러 정보, 엑셀 다운로드</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 품절_API 연동</div>
									<div class="text_link" data-path="pro/order/penalty/soldout/api">OrderPenaltySoldoutApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 품절_타임딜</div>
									<div class="text_link" data-path="pro/order/penalty/soldout/timedeal">OrderPenaltySoldoutTimedeal.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 품절_래플</div>
									<div class="text_link" data-path="pro/order/penalty/soldout/raffle">OrderPenaltySoldoutRaffle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 품절_펀딩</div>
									<div class="text_link" data-path="pro/order/penalty/soldout/funding">OrderPenaltySoldoutFunding.vue</div>
									<div><span class="text_tag T=remove"></span></div>
									<div><p class="text_color2">(유료기능) 펀딩 : 상품 유형</p></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">가송장</div>
							<div class="text_link" data-path="pro/order/penalty/invoice/">OrderPenaltyInvoice.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 브랜드 검색(복수선택), 주문 상세, 셀러 정보, 엑셀 다운로드, 반려사유 입력, 이의 제기, 내용 상세보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 가송장_API 연동</div>
									<div class="text_link" data-path="pro/order/penalty/invoice/api">OrderPenaltyInvoiceApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 가송장_타임딜</div>
									<div class="text_link" data-path="pro/order/penalty/invoice/timedeal">OrderPenaltyInvoiceTimedeal.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 가송장_래플</div>
									<div class="text_link" data-path="pro/order/penalty/invoice/raffle">OrderPenaltyInvoiceRaffle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 가송장_펀딩</div>
									<div class="text_link" data-path="pro/order/penalty/invoice/funding">OrderPenaltyInvoiceFunding.vue</div>
									<div><span class="text_tag T=remove"></span></div>
									<div><p class="text_color2">(유료기능) 펀딩 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 반려사유 입력</div>
									<div class="text_link" data-path="order/penalty/invoice/reject">OrderPenaltyInvoiceReject.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 이의 제기</div>
									<div class="text_link" data-path="order/penalty/invoice/complain">OrderPenaltyInvoiceComplain.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">반품완료 미처리</div>
							<div class="text_link" data-path="pro/order/penalty/return/">OrderPenaltyReturn.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 브랜드 검색(복수선택), 주문 상세, 셀러 정보, 엑셀 다운로드</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 반품완료 미처리_API 연동</div>
									<div class="text_link" data-path="pro/order/penalty/return/api">OrderPenaltyReturnApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 반품완료 미처리_타임딜</div>
									<div class="text_link" data-path="pro/order/penalty/return/timedeal">OrderPenaltyReturnTimedeal.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 반품완료 미처리_래플</div>
									<div class="text_link" data-path="pro/order/penalty/return/raffle">OrderPenaltyReturnRaffle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 반품완료 미처리_펀딩</div>
									<div class="text_link" data-path="pro/order/penalty/return/funding">OrderPenaltyReturnFunding.vue</div>
									<div><span class="text_tag T=remove"></span></div>
									<div><p class="text_color2">(유료기능) 펀딩 : 상품 유형</p></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">교환완료 미처리</div>
							<div class="text_link" data-path="pro/order/penalty/exchange/">OrderPenaltyExchange.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색(복수선택), 담당 MD 검색, 브랜드 검색(복수선택), 주문 상세, 셀러 정보, 엑셀 다운로드</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 교환완료 미처리_API 연동</div>
									<div class="text_link" data-path="pro/order/penalty/exchange/api">OrderPenaltyExchangeApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처, 제휴사 주문번호, 상세 제휴사 주문번호</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 교환완료 미처리_타임딜</div>
									<div class="text_link" data-path="pro/order/penalty/exchange/timedeal">OrderPenaltyExchangeTimedeal.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 타임딜 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 교환완료 미처리_래플</div>
									<div class="text_link" data-path="pro/order/penalty/exchange/raffle">OrderPenaltyExchangeRaffle.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플 : 상품 유형</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 교환완료 미처리_펀딩</div>
									<div class="text_link" data-path="pro/order/penalty/exchange/funding">OrderPenaltyExchangeFunding.vue</div>
									<div><span class="text_tag T=remove"></span></div>
									<div><p class="text_color2">(유료기능) 펀딩 : 상품 유형</p></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- 패널티 -->
		</div>
		<!-- // 주문관리 -->

		<!-- 전시관리 -->
		<div class="mm_tab-item">
			<!-- 공통 블록 -->
			<section>
				<h2><b>공통 블록</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 블록관리</div>
							<div class="text_link" data-path="display/block/banner">DisplayBlockBanner.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p>(커스텀) 아이콘 사용, 쇼케이스 설정</p></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 블록관리_쇼케이스</div>
									<div class="text_link" data-path="display/block/banner/webzine">DisplayBlockBannerWebzine.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[프레임] 배너(B)</div>
									<div class="text_link" data-path="frames/_iframe_displayBlockB.html">_iframe_displayBlockB.html</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p class="text_color3">퍼블 ftp경로에선 화면 확인 불가(style, script 경로 이슈)<br> local에서 화면 확인 가능</p>
										<p class="text_color2">[프론트] data-mui="b_"</p>
									</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[프레임] 배너(B)_커스텀</div>
											<div class="text_link" data-path="frames/_iframe_displayBlockB_custom.html">_iframe_displayBlockB_custom.html</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>
												<p class="text_color3">퍼블 ftp경로에선 화면 확인 불가(style, script 경로 이슈)<br> local에서 화면 확인 가능</p>
												<p class="text_color2">[프론트] data-mui="b_"</p>
												<p>(커스텀) 아이콘 사용</p>
											</div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[프레임] 배너+상품(BP)</div>
									<div class="text_link" data-path="frames/_iframe_displayBlockBP.html">_iframe_displayBlockBP.html</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p class="text_color3">퍼블 ftp경로에선 화면 확인 불가(style, script 경로 이슈)<br> local에서 화면 확인 가능</p>
										<p class="text_color2">[프론트] data-mui="bp_", "pb_"</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 블록관리_탭+배너/상품</div>
							<div class="text_link" data-path="display/block/tab">DisplayBlockTab.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 블록관리_상품(P)</div>
							<div class="text_link" data-path="display/block/product">DisplayBlockProd.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">[프론트] data-mui="p_"</p></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 타이틀</div>
							<div class="text_link" data-path="display/block/title">DisplayBlockTitle.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">자동화 블록 전용</p></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 공통 블록 -->

			<!-- 기본 검색어 -->
			<section>
				<h2><b>기본 검색어</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">기본 검색어</div>
							<div class="text_link" data-path="display/keyword/">DisplayKeyword.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="display/keyword/register">DisplayKeywordRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="display/keyword/modify/">DisplayKeywordModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 기본 검색어 -->

			<!-- 메인 페이지 관리 -->
			<!--
				<section>
				<h2><b>메인 페이지 관리</b></h2>
				<ul>
				<li>
				<a class="mm_flex">
				<div class="text_name">메인 페이지 관리(M.Mon solution)</div>
				<div class="text_link" data-path="pro/">displayMainIntegrated.vue</div>
				<div><span class="text_tag"></span></div>
				<div>[팝업] 메인 배너 관리, 띠 배너 관리, 핫 키워드 관리</div>
				</a>
				<ul>
				<li>
				<a class="mm_flex">
				<div class="text_name">[팝업] 메인 배너 관리</div>
				<div class="text_link" data-path="pro/">_popup_integratedHero.vue</div>
				<div><span class="text_tag"></span></div>
				<div><p class="text_color2">[프레임] 메인 배너</p></div>
				</a>
				<ul>
				<li>
				<a class="mm_flex">
				<div class="text_name">[프레임] 메인 배너</div>
				<div class="text_link" data-path="pro/">_iframe_integratedHero.vue</div>
				<div><span class="text_tag"></span></div>
				<div><p class="text_color2">(D) [프레임] 블록모듈_배너(B) 에서 '컨텐츠 유형' 영역 추가</p></div>
				</a>
				</li>
				</ul>
				</li>
				<li>
				<a class="mm_flex">
				<div class="text_name">[팝업] 띠 배너 관리</div>
				<div class="text_link" data-path="pro/">_popup_integratedBand.vue</div>
				<div><span class="text_tag"></span></div>
				<div><p class="text_color2">[프레임] 블록모듈_배너(B)</p></div>
				</a>
				</li>
				<li>
				<a class="mm_flex">
				<div class="text_name">[팝업] 핫 키워드 관리</div>
				<div class="text_link" data-path="pro/">_popup_integratedKeyword.vue</div>
				<div><span class="text_tag"></span></div>
				<div><p class="text_color2">[프레임] 블록모듈_탭+상품(TP)</p></div>
				</a>
				</li>
				</ul>
				</li>
				</ul>
				</section>
			-->
			<!-- // 메인 페이지 관리 -->

			<!-- 서브 페이지 -->
			<section>
				<h2><b>서브 페이지</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">1DEPTH 페이지 관리</div>
							<div class="text_link" data-path="display/sub/1depth">DisplaySub1depth.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 1DEPTH 메인 배너, 베스트 브랜드, MD 추천상품, 인기브랜드</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 1DEPTH 메인 배너</div>
									<div class="text_link" data-path="display/sub/1depth/banner">DisplaySub1depthBanner.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 베스트 브랜드</div>
									<div class="text_link" data-path="display/sub/1depth/best">DisplaySub1depthBest.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] MD 추천상품</div>
									<div class="text_link" data-path="display/sub/1depth/recommend">DisplaySub1depthRecommend.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 인기 브랜드</div>
									<div class="text_link" data-path="display/sub/1depth/popular">DisplaySub1depthPopular.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 등록 브랜드 확인</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 등록 브랜드 확인</div>
											<div class="text_link" data-path="display/sub/1depth/popular/brand">DisplaySub1depthPopularBrand.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">기획전</div>
							<div class="text_link" data-path="pro/display/sub/promotion">DisplaySubPromo.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 댓글 보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 댓글 보기</div>
									<div class="text_link" data-path="display/sub/promotion/reply">DisplaySubPromoReply.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="display/sub/promotion/register">DisplaySubPromoRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 상품 검색, 등록 상품 목록, 그룹 이미지 등록, 그룹 이미지 수정</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 그룹 이미지 등록</div>
											<div class="text_link" data-path="display/sub/promotion/image/register">DisplaySubPromoImageRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 그룹 이미지 수정</div>
											<div class="text_link" data-path="display/sub/promotion/image/modify">DisplaySubPromoImageModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="display/sub/promotion/modify">DisplaySubPromoModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 상품 검색, 등록 상품 목록, 그룹 이미지 등록, 그룹 이미지 수정</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 이벤트_갤러리</div>
							<div class="text_link" data-path="display/sub/event/gallary">DisplaySubEventGallary.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 댓글 보기</p>
								<p class="text_color2">(유료기능) 게시판 &#62; 갤러리형</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 등록하기_갤러리</div>
									<div class="text_link" data-path="display/sub/event/gallary/register/">DisplaySubEventGallaryRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 등록 상품 목록, 상품 검색</p>
										<p class="text_color2">(유료기능) 게시판 &#62; 갤러리형</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 등록하기_체험단</div>
									<div class="text_link" data-path="display/sub/event/reviewer/register">DisplaySubEventReviewerRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 등록 상품 목록, 상품 검색</p>
										<p class="text_color2">(유료기능) 게시판 &#62; 체험단 : 체험단 상품 설정</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 수정하기_갤러리</div>
									<div class="text_link" data-path="display/sub/event/gallary/modify">DisplaySubEventGallaryModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 등록 상품 목록, 상품 검색</p>
										<p class="text_color2">(유료기능) 게시판 &#62; 갤러리형</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 수정하기_체험단</div>
									<div class="text_link" data-path="display/sub/event/reviewer/modify">DisplaySubEventReviewerModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 등록 상품 목록, 상품 검색</p>
										<p class="text_color2">(유료기능) 게시판 &#62; 체험단 : 체험단 상품 설정</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 쇼케이스_웹진</div>
							<div class="text_link" data-path="display/sub/showcase/webzine/">DisplaySubShowcaseWebzine.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">(유료기능) 웹진</p></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 등록하기</div>
									<div class="text_link" data-path="display/sub/showcase/webzine/register">DisplaySubShowcaseWebzineRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 브랜드 검색, 등록 상품 목록, 상품 검색</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 수정하기</div>
									<div class="text_link" data-path="display/sub/showcase/webzine/modify">DisplaySubShowcaseWebzineModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 브랜드 검색, 등록 상품 목록, 상품 검색</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 쇼케이스 구분 관리_웹진</div>
							<div class="text_link" data-path="display/sub/showcase-category/">DisplaySubShowcaseCategoryWebzine.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">(유료기능) 웹진</p></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 등록하기</div>
									<div class="text_link" data-path="display/sub/showcase-category/webzine/register">DisplaySubShowcaseCategoryWebzineRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p class="text_color2">(유료기능) 웹진</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 수정하기</div>
									<div class="text_link" data-path="display/sub/showcase-category/webzine/modify">DisplaySubShowcaseCategoryWebzineModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p class="text_color2">(유료기능) 웹진</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 래플_래플</div>
							<div class="text_link" data-path="display/sub/raffle/">DisplaySubRaffle.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 엑셀 다운로드, [유료][팝업] 기간 보기, 응모회원 관리</p>
								<p class="text_color2">(유료기능) 래플</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 기간 보기</div>
									<div class="text_link" data-path="display/sub/raffle/period">DisplaySubRafflePeriod.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 래플</p></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 응모회원 관리</div>
									<div class="text_link" data-path="display/sub/raffle/apply">DisplaySubRaffleApply.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[유료][팝업] 응모회원 목록</p>
										<p class="text_color2">(유료기능) 래플</p>
									</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 응모회원 목록</div>
											<div class="text_link" data-path="display/sub/raffle/apply/member">DisplaySubRaffleApplyMember.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) 래플</p></div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 등록하기</div>
									<div class="text_link" data-path="display/sub/raffle/register">DisplaySubRaffleRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 상품 검색</p>
										<p class="text_color2">(유료기능) 래플</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 수정하기</div>
									<div class="text_link" data-path="display/sub/raffle/modify">DisplaySubRaffleModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 상품 검색</p>
										<p class="text_color2">(유료기능) 래플</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 공동구매_공동구매</div>
							<div class="text_link" data-path="display/sub/coopbuy">DisplaySubCoopbuy.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 다운로드 쿠폰 상세보기, [유료][팝업] 공동구매 신청 회원</p>
								<p class="text_color2">(유료기능) 공동구매</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 등록하기</div>
									<div class="text_link" data-path="display/sub/coopbuy/register">DisplaySubCoopbuyRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 상품 검색</p>
										<p class="text_color2">(유료기능) 공동구매</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 수정하기</div>
									<div class="text_link" data-path="display/sub/coopbuy/modify">DisplaySubCoopbuyModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 상품 검색</p>
										<p class="text_color2">(유료기능) 공동구매</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료][팝업] 공동구매 신청 회원</div>
									<div class="text_link" data-path="display/sub/coopbuy/apply">DisplaySubCoopbuyApply.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 공동구매</p></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 타임딜_타임딜</div>
							<div class="text_link" data-path="display/sub/timedeal/">DisplaySubTimedeal.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">(유료기능) 타임딜</p></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 등록하기</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">A 타입</div>
											<div class="text_link" data-path="display/sub/timedeal/register/type-a">DisplaySubTimedealRegistarTypeA.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>
												<p>[팝업] 상품 검색, 이미지 미리보기</p>
												<p class="text_color2">(유료기능) 타임딜</p>
											</div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">B 타입</div>
											<div class="text_link" data-path="display/sub/timedeal/register/type-b">DisplaySubTimedealRegistarTypeB.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>
												<p>[팝업] 상품 검색, 이미지 미리보기</p>
												<p class="text_color2">(유료기능) 타임딜</p>
											</div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">C 타입</div>
											<div class="text_link" data-path="display/sub/timedeal/register/type-c">DisplaySubTimedealRegistarTypeC.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>
												<p>[팝업] 상품 검색, 이미지 미리보기</p>
												<p class="text_color2">(유료기능) 타임딜</p>
											</div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 수정하기</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">A 타입</div>
											<div class="text_link" data-path="display/sub/timedeal/modify/type-a">DisplaySubTimedealModifyTypeA.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>
												<p>[팝업] 상품 검색, 이미지 미리보기</p>
												<p class="text_color2">(유료기능) 타임딜</p>
											</div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">B 타입</div>
											<div class="text_link" data-path="display/sub/timedeal/modify/type-b">DisplaySubTimedealModifyTypeB.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>
												<p>[팝업] 상품 검색, 이미지 미리보기</p>
												<p class="text_color2">(유료기능) 타임딜</p>
											</div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">C 타입</div>
											<div class="text_link" data-path="display/sub/timedeal/modify/type-c">DisplaySubTimedealModifyTypeC.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>
												<p>[팝업] 상품 검색, 이미지 미리보기</p>
												<p class="text_color2">(유료기능) 타임딜</p>
											</div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">스팟성 테마관</div>
							<div class="text_link" data-path="display/sub/spot/">DisplaySubSpot.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="display/sub/spot/register">DisplaySubSpotRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 템플릿 안내, 템플릿 A 관리, 템플릿 B 관리, 템플릿 C 관리</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 템플릿 안내</div>
											<div class="text_link" data-path="display/sub/spot/template/guide">DisplaySubSpotTemplateGuide.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 템플릿A 관리</div>
											<div class="text_link" data-path="display/sub/spot/template/type-a">DisplaySubSpotTemplateTypeA.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 템플릿B/C 관리</div>
											<div class="text_link" data-path="display/sub/spot/template/type-bc">DisplaySubSpotTemplateTypeBC.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="display/sub/spot/modify/">DisplaySubSpotModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 템플릿 안내, 템플릿 A 관리, 템플릿 B 관리, 템플릿 C 관리</div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 서브 페이지 -->

			<!-- 랭킹 -->
			<section>
				<h2><b>[유료] 랭킹</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 도움말</div>
							<div class="text_link" data-path="display/ranking/help">DisplayRankHelp.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 아이템 랭킹</div>
							<div class="text_link" data-path="display/ranking/item">DisplayRankItem.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 상품 검색, 도움말</p>
								<p class="text_color2">(유료기능) 랭킹</p>
							</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 브랜드 랭킹</div>
							<div class="text_link" data-path="display/ranking/brand">DisplayRankBrand.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 브랜드 검색, 도움말</p>
								<p class="text_color2">(유료기능) 랭킹</p>
							</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] VIEW 랭킹</div>
							<div class="text_link" data-path="display/ranking/view">DisplayRankView.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 상품 검색, 도움말</p>
								<p class="text_color2">(유료기능) 랭킹</p>
							</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 찜 랭킹</div>
							<div class="text_link" data-path="display/ranking/like">DisplayRankLike.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 상품 검색, 도움말</p>
								<p class="text_color2">(유료기능) 랭킹</p>
							</div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 랭킹 -->

			<!-- 코디샷 -->
			<section>
				<h2><b>[유료] 코디샷</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 코디샷</div>
							<div class="text_link" data-path="display/cody/">DisplayCody.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">(유료기능) 코디샷</p></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 등록하기</div>
									<div class="text_link" data-path="display/cody/register">DisplayCodyRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p class="text_color1">브랜드명, 제목, 서브 문구 글자 수 미정</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 수정하기</div>
									<div class="text_link" data-path="display/cody/modify">DisplayCodyModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p class="text_color1">브랜드명, 제목, 서브 문구 글자 수 미정</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 코디샷 구분 관리</div>
							<div class="text_link" data-path="display/cody-category/">DisplayCodyCategory.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">(유료기능) 코디샷</p></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 등록하기</div>
									<div class="text_link" data-path="display/cody-category/register/">DisplayCodyCategoryRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 수정하기</div>
									<div class="text_link" data-path="display/cody-category/modify">DisplayCodyCategoryModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 코디샷 -->

			<!-- 상품 공통배너 -->
			<section>
				<h2><b>상품 공통배너</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품 공통배너</div>
							<div class="text_link" data-path="display/product-banner/">DisplayProdBanner.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 적용 범위(상품), 적용 범위(카테고리), 적용 범위(브랜드)</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="display/product-banner/register">DisplayProdBannerRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="display/product-banner/modify">DisplayProdBannerModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 적용 범위(카테고리)</div>
									<div class="text_link" data-path="display/product-banner/coverage/category">DisplayProdBannerCoverageCate.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 적용 범위(상품)</div>
									<div class="text_link" data-path="display/product-banner/coverage/product">DisplayProdBannerCoverageProd.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 적용 범위(브랜드)</div>
									<div class="text_link" data-path="display/product-banner/coverage/brand">DisplayProdBannerCoverageBrand.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 상품 공통배너 -->

			<!-- 팝업 -->
			<section>
				<h2><b>팝업</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">팝업</div>
							<div class="text_link" data-path="display/popup">DisplayPopup.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 팝업 미리보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="display/popup/register/">DisplayPopupRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="display/popup/modify">DisplayPopupModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 팝업 미리보기</div>
									<div class="text_link" data-path="display/popup/preview">DisplayPopupPreview.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 팝업 -->

			<!-- 앱 인트로 이미지 -->
			<section>
				<h2><b>앱 인트로 이미지</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">앱 인트로 이미지 관리</div>
							<div class="text_link" data-path="display/intro/">DisplayIntro.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 이미지 미리보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="display/intro/register">DisplayIntroRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="display/intro/modify">DisplayIntroModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 앱 인트로 이미지 -->

			<!-- 무이자 -->
			<section>
				<h2><b>무이자</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">무이자</div>
							<div class="text_link" data-path="display/interest/">DisplayIterest.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="display/interest/register/">DisplayIterestRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="display/interest/modify">DisplayIterestModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 무이자 -->

			<!-- 탑배너 -->
			<section>
				<h2><b>탑배너</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">탑배너</div>
							<div class="text_link" data-path="display/top-banner/">DisplayTopBanner.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="display/top-banner/register">DisplayTopBannerRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="display/top-banner/modify">DisplayTopBannerModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 탑배너 -->

			<!-- 우측배너 -->
			<section>
				<h2><b>우측배너</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">우측배너</div>
							<div class="text_link" data-path="display/wing-banner/">DisplayWingBanner.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="display/wing-banner/register">DisplayWingBannerRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="display/wing-banner/modify">DisplayWingBannerModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 우측배너 -->
		</div>
		<!-- // 전시관리 -->

		<!-- 고객/게시판관리 -->
		<div class="mm_tab-item">
			<!-- 공통팝업 -->
			<section>
				<h2><b>공통팝업</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 이관사유</div>
							<div class="text_link" data-path="cs/transfer-reason">CsTransferReason.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] 셀러 검색
								<p class="text_color2">(상태) 주문정보 유무에 따른 셀러 설정</p>
							</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 이관사유 상세보기</div>
							<div class="text_link" data-path="cs/transfer-detail">CsTransferDetail.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 문의 상세보기</div>
							<div class="text_link" data-path="cs/inquiry-detail">CsInquiryDetail.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 공통팝업 -->

			<!-- 공지사항 -->
			<section>
				<h2><b>공지사항</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">공지사항</div>
							<div class="text_link" data-path="cs/notice/">CsNotice.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">상세보기</div>
									<div class="text_link" data-path="cs/notice/detail">CsNoticeDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="cs/notice/register">CsNoticeRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="cs/notice/modify">CsNoticeModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 공지사항 -->

			<!-- FAQ -->
			<section>
				<h2><b>FAQ</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">FAQ 분류 관리</div>
							<div class="text_link" data-path="cs/faq-category/">CsFaqCate.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="cs/faq-category/register">CsFaqCateRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="cs/faq-category/modify">CsFaqCateModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">FAQ 관리</div>
							<div class="text_link" data-path="cs/faq/">CsFaq.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="cs/faq/register">CsFaqRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="cs/faq/modify">CsFaqModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // FAQ -->

			<!-- 상품평 -->
			<section>
				<h2><b>상품평</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">상품평</div>
							<div class="text_link" data-path="cs/review/">CsReview.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">상세보기</div>
									<div class="text_link" data-path="cs/review/detail">CsReviewDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(상태) 베스트 리뷰</p></div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료] 상세보기_개인화 상품 리뷰</div>
											<div class="text_link" data-path="cs/review/personal/detail">CsReviewDetailPersonal.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>
												<p class="text_color2">(유료기능) 개인화 상품 리뷰: 사이즈, 평가</p>
											</div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 상품평 -->

			<!-- 체험단 후기 -->
			<section>
				<h2><b>[유료] 체험단 후기</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 체험단 후기</div>
							<div class="text_link" data-path="cs/reviewer/">CsReviewer.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">(유료기능) 게시판 &#62; 체험단</p></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 상세보기</div>
									<div class="text_link" data-path="cs/reviewer/detail">CsReviewerDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 게시판 &#62; 체험단</p></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 체험단 후기 -->

			<!-- 판매자 문의 -->
			<section>
				<h2><b>판매자 문의</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">판매자 문의</div>
							<div class="text_link" data-path="cs/inquiry-seller/">CsInquirySeller.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 문의 상세보기, 이관사유 상세보기, 셀러 검색</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 판매자 문의_API 연동</div>
									<div class="text_link" data-path="cs/inquiry-seller/api">CsInquirySellerApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처 </p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">판매자 문의 답변</div>
									<div class="text_link" data-path="cs/inquiry-seller/answer">CsInquirySellerAnswer.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 이관사유</div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 판매자 문의 -->

			<!-- 1:1 문의 -->
			<section>
				<h2><b>1:1 문의</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">1:1 문의</div>
							<div class="text_link" data-path="cs/inquiry-personal/">CsInquiryPersonal.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 문의 상세보기, 이관사유 상세보기</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 1:1 문의_API 연동</div>
									<div class="text_link" data-path="cs/inquiry-personal/api">CsInquiryPersonalApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p class="text_color2">(유료기능) API 연동(제휴몰) : 판매처 </p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">1:1 문의 답변</div>
									<div class="text_link" data-path="cs/inquiry-personal/answer">CsInquiryPersonalAnswer.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										[팝업] 이관사유
										<p class="text_color2">(상태) 이관여부</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="cs/inquiry-personal/modify">CsInquiryPersonalModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 1:1 문의 -->

			<!-- 문의 답변 양식 -->
			<section>
				<h2><b>문의 답변 양식</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">문의 답변 양식</div>
							<div class="text_link" data-path="cs/inquiry-template/">CsInquiryTemplate.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">등록하기</div>
									<div class="text_link" data-path="cs/inquiry-template/register">CsInquiryTemplateRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">수정하기</div>
									<div class="text_link" data-path="cs/inquiry-template/modify">CsInquiryTemplateModify.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 문의 답변 양식 -->

			<!-- CS 알리미 -->
			<section>
				<h2><b>CS 알리미</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">CS 알리미</div>
							<div class="text_link" data-path="cs/notify">CsNotify.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] CS 알리미 상세보기, CS 알리미 등록</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 상세보기</div>
									<div class="text_link" data-path="cs/notify/detail">CsNotifyDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 등록하기</div>
									<div class="text_link" data-path="cs/notify/register">CsNotifyRegister.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // CS 알리미 -->

			<!-- 배송지연 신고 -->
			<section>
				<h2><b>배송지연 신고 관리</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">배송지연 신고 관리</div>
							<div class="text_link" data-path="cs/delay">CsDelay.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 배송지연 신고 -->

			<!-- 품절취소 신고 -->
			<section>
				<h2><b>품절취소 신고 관리</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">품절취소 신고 관리</div>
							<div class="text_link" data-path="cs/cancel">CsCancel.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 품절취소 신고 -->
		</div>
		<!-- // 고객/게시판관리 -->

		<!-- 정산관리 -->
		<div class="mm_tab-item">
			<!-- 공통팝업 -->
			<section>
				<h2><b>공통팝업</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 도움말</div>
							<div class="text_link" data-path="calc/help">CalcHelp.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 공통팝업 -->

			<!-- 정산현황 -->
			<section>
				<h2><b>정산현황</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">정산현황</div>
							<div class="text_link" data-path="pro/calc/state">CalcState.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] 도움말
								<p class="text_color1">고객 보상 내역 관련 항목 미포함(관련정책 미정으로 기획내용 부족)</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">정산 상세 내역</div>
									<div class="text_link" data-path="pro/calc/state/detail">CalcStateDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										[팝업] 도움말
										<p class="text_color1">고객 보상 내역 관련 항목 미포함(관련정책 미정으로 기획내용 부족)</p>
									</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">판매분 정산집계 상세</div>
											<div class="text_link" data-path="pro/calc/state/detail/sell">CalcStateDetailSell.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>[팝업] 보정이력, 도움말</div>
										</a>
										<ul>
											<li>
												<a class="mm_flex">
													<div class="text_name">[팝업] 보정이력</div>
													<div class="text_link" data-path="calc/state/detail/sell/history">CalcStateDetailSellHistory.vue</div>
													<div><span class="text_tag T=complete"></span></div>
													<div></div>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">패널티 집계 상세</div>
											<div class="text_link" data-path="pro/calc/state/detail/penalty">CalcStateDetailPenalty.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div>[팝업] 보정이력</div>
										</a>
										<ul>
											<li>
												<a class="mm_flex">
													<div class="text_name">[팝업] 보정이력</div>
													<div class="text_link" data-path="calc/state/detail/penalty/history">CalcStateDetailPenaltyHistory.vue</div>
													<div><span class="text_tag T=complete"></span></div>
													<div><p class="text_color2"></p></div>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">배송비 정산집계 상세</div>
											<div class="text_link" data-path="pro/calc/state/detail/ship">CalcStateDetailShip.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 정산현황 -->

			<!-- 정산집계 -->
			<section>
				<h2><b>정산집계</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">정산집계</div>
							<div class="text_link" data-path="pro/calc/total/">CalcTotal.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] 도움말, 셀러 검색
								<p class="text_color1">고객 보상 내역 관련 항목 미포함(관련정책 미정으로 기획내용 부족)</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">판매분 정산집계 내역</div>
									<div class="text_link" data-path="pro/calc/total/sell">CalcTotalSell.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 도움말</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">패널티 집계 내역</div>
									<div class="text_link" data-path="pro/calc/total/penalty">CalcTotalPenalty.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">배송비 정산집계 내역</div>
									<div class="text_link" data-path="pro/calc/total/ship">CalcTotalShip.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 정산집계 -->

			<!-- 부가세 신고 내역 -->
			<section>
				<h2><b>부가세 신고 내역</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">부가세 신고 내역</div>
							<div class="text_link" data-path="pro/calc/tax">CalcTax.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색, 월별 상세 내역</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 월별 상세 내역</div>
									<div class="text_link" data-path="calc/tax/detail">CalcTaxDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 부가세 신고 내역 -->

			<!-- 정산 일괄수정 -->
			<section>
				<h2><b>정산 일괄수정</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[팝업] 정산 데이터 일괄 수정</div>
							<div class="text_link" data-path="calc/data/modify">CalcModifyDataDeadlineModify.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 상품 검색, 셀러 검색(복수선택)</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">마감 전 데이터</div>
							<div class="text_link" data-path="calc/data/deadline">CalcModifyDataDeadline.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 정산 데이터 일괄 수정</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">전체 데이터</div>
							<div class="text_link" data-path="calc/data/all">CalcModifyDataAll.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 정산 데이터 일괄 수정</div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 정산 일괄수정 -->
		</div>
		<!-- // 정산관리 -->

		<!-- 매출/통계 -->
		<div class="mm_tab-item">
			<!-- 셀러별 주문 통계 -->
			<section>
				<h2><b>셀러별 주문 통계</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">셀러별 주문 통계</div>
							<div class="text_link" data-path="pro/stats/order">StatsOrder.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								<p>[팝업] 담당 MD 검색, 셀러 검색(복수선택), 할인 내역</p>
								<p class="text_color2">(상태) MD로 접속시 담당 MD 고정노출</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 셀러별 주문 통계_API 연동</div>
									<div class="text_link" data-path="pro/stats/order/api">StatsOrderApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 제휴사이트 주문금액_API</p>
										<p class="text_color2">(유료기능) API 연동(제휴몰): 총 판매가</p>
									</div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[유료][팝업] 제휴사이트 주문금액_API 연동</div>
											<div class="text_link" data-path="stats/order/api/affiliate">StatsOrderApiAffiliate.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div><p class="text_color2">(유료기능) API 연동(제휴몰)</p></div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 할인 내역</div>
									<div class="text_link" data-path="stats/order/discount">StatsOrderDiscount.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 주문 상세</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">브랜드 일자별 주문</div>
									<div class="text_link" data-path="stats/order/date">StatsOrderDate.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">상품별 주문(지불완료)</div>
									<div class="text_link" data-path="stats/order/prod">StatsOrderProd.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 이미지 미리보기</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">상품 카테고리 - 가격대별 주문수량</div>
									<div class="text_link" data-path="stats/order/cate">StatsOrderCate.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 셀러별 주문 통계 -->

			<!-- 시간대별 매출코드 주문 -->
			<section>
				<h2><b>시간대별 매출코드 주문</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">시간대별 매출코드 주문</div>
							<div class="text_link" data-path="stats/time">StatsTime.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 시간대별 매출코드 주문_API 연동</div>
									<div class="text_link" data-path="stats/time/api">StatsTimeApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 셀러 검색</p>
										<p class="text_color2">(유료기능) API 연동(제휴몰): 제휴사 구분 추가</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 시간대별 매출코드 주문 -->

			<!-- 매출코드별 실적 현황 -->
			<section>
				<h2><b>매출코드별 실적 현황</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">매출코드별 실적 현황</div>
							<div class="text_link" data-path="pro/stats/inflow">StatsInFlow.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p>[팝업] 셀러 검색, 매출코드 포함 주문서</p></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 매출코드별 실적 현황_API 연동</div>
									<div class="text_link" data-path="pro/stats/inflow/api">StatsInFlowApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p class="text_color2">(유료기능) API 연동(제휴몰): 제휴</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 매출코드 포함 주문서</div>
									<div class="text_link" data-path="stats/inflow/sheet">StatsInFlowSheet.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 주문 상세</div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 매출코드별 실적 현황 -->

			<!-- 포털사이트 광고대행 -->
			<section>
				<h2><b>포털사이트 광고대행</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">포털사이트 광고대행</div>
							<div class="text_link" data-path="stats/ad">StatsAd.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 포털사이트 광고대행 -->

			<!-- 다음 쇼핑하우 정산 -->
			<section>
				<h2><span>다음 쇼핑하우 정산</span></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">다음 쇼핑하우 정산</div>
							<div class="text_link" data-path="stats/daum">StatsDaum.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 다음 쇼핑하우 정산 -->

			<!-- 결제수단별 매출내역 -->
			<section>
				<h2><span>결제수단별 매출내역</span></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">결제수단별 매출내역</div>
							<div class="text_link" data-path="pro/stats/payment/">StatsPayment.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색, 결제수단별 매출내역</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 결제수단별 매출내역_간편결제</div>
									<div class="text_link" data-path="pro/stats/payment/easypay">StatsPaymentEasypay.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p class="text_color2">(유료기능) 간편결제: 간편결제 구분 추가</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 결제수단별 매출내역_API 연동</div>
									<div class="text_link" data-path="pro/stats/payment/api">StatsPaymentApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p class="text_color2">(유료기능) API 연동(제휴몰): 제휴사 주문 구분 추가</p>
									</div>
								</a>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 결제수단별 매출내역 상세</div>
									<div class="text_link" data-path="stats/payment/sales-detail">StatsPaymentSalesDetail.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 결제수단별 매출내역 -->

			<!-- 일별 주문 추이 -->
			<section>
				<h2><b>일별 주문 추이</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">매출코드 주문금액</div>
							<div class="text_link" data-path="stats/date/price">StatsDatePrice.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 매출코드 주문금액_API 연동</div>
									<div class="text_link" data-path="stats/date/price/api">StatsDatePriceApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>
										<p>[팝업] 셀러 검색</p>
										<p class="text_color2">(유료기능) API 연동(제휴몰): 제휴사 구분 추가</p>
									</div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">주문품목(지불완료)</div>
							<div class="text_link" data-path="stats/date/prod">StatsDateProd.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">셀러별 결제/취소/반품 주문</div>
									<div class="text_link" data-path="stats/date/prod/seller">StatsDateProdSeller.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div>[팝업] 담당 MD 검색, 셀러 검색</div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 일별 주문 추이 -->

			<!-- 주간 주문 추이 -->
			<section>
				<h2><b>주간 주문 추이</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">주간 매출 추이</div>
							<div class="text_link" data-path="stats/week-price">StatsWeekPrice.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색</div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 주간 주문 추이 -->

			<!-- 월별 주문 추이 -->
			<section>
				<h2><b>월별 주문 추이</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">월별 주문 추이</div>
							<div class="text_link" data-path="stats/month-price">StatsMonthPrice.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 월별 주문 추이_API 연동</div>
									<div class="text_link" data-path="stats/month-price/api">StatsMonthPriceApi.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) API 연동(제휴몰): 제휴사 구분 추가</p></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 월별 주문 추이 -->

			<!-- 베스트 100 -->
			<section>
				<h2><b>베스트 100</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">실시간 베스트 100</div>
							<div class="text_link" data-path="stats/best/time">StatsBestTime.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색, 판매처 리스트</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 판매처 리스트</div>
									<div class="text_link" data-path="stats/best/store">StatsBestTimeStore.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">주간 베스트 100</div>
							<div class="text_link" data-path="stats/best/week">StatsBestWeek.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러 검색, 판매처 리스트</div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 베스트 100 -->

			<!-- 회원 통계 -->
			<section>
				<h2><b>회원 통계</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">월별 가입회원</div>
							<div class="text_link" data-path="stats/member/month-join">StatsMemberMonthJoin.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 월별 가입회원_간편로그인</div>
									<div class="text_link" data-path="stats/member/month-join/easylogin">StatsMemberMonthJoinEasylogin.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 간편로그인: 간편로그인 항목 추가</p></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">일별 가입회원</div>
							<div class="text_link" data-path="stats/member/date-join">StatsMemberDateJoin.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[유료] 일별 가입회원_간편로그인</div>
									<div class="text_link" data-path="stats/member/date-join/easylogin">StatsMemberDateJoinEasylogin.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div><p class="text_color2">(유료기능) 간편로그인: 간편로그인 항목 추가</p></div>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">등급별 월 회원수</div>
							<div class="text_link" data-path="stats/member/grade">StatsMemberGrade.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">연도별 회원수</div>
							<div class="text_link" data-path="stats/member/year">StatsMemberYear.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">월별 회원수</div>
							<div class="text_link" data-path="stats/member/month">StatsMemberMonth.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">일별 회원수</div>
							<div class="text_link" data-path="stats/member/date">StatsMemberDate.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">회원탈퇴 사유</div>
							<div class="text_link" data-path="stats/member/withdrawal">StatsMemberWithDrawal.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">회원탈퇴 사유 통계</div>
							<div class="text_link" data-path="stats/member/withdrawal-state">StatsMemberWithDrawalState.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 회원 통계 -->

			<!-- 적립금 적립현황 -->
			<section>
				<h2><b>적립금 적립현황</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">월별 적립현황</div>
							<div class="text_link" data-path="stats/save/month">StatsSaveMonth.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">일별 적립현황</div>
							<div class="text_link" data-path="stats/save/date">StatsSaveDate.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 적립금 적립현황 -->

			<!-- 목표 등록 -->
			<section>
				<h2><b>목표 등록</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">목표 등록</div>
							<div class="text_link" data-path="stats/goal">StatsGoal.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 목표 금액 입력</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 목표금액입력</div>
									<div class="text_link" data-path="stats/goal/amount">StatsGoalAmount.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 목표 등록 -->

			<!-- 목표 대비 실적(MD) -->
			<section>
				<h2><b>목표 대비 실적(MD)</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">목표 대비 실적(MD)</div>
							<div class="text_link" data-path="stats/performance">StatsPerformance.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 목표 대비 실적(MD) -->

			<!-- 자사 DB 현황 메뉴 -->
			<section>
				<h2><b>자사 DB 현황 메뉴</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">자사 DB 현황 메뉴</div>
							<div class="text_link" data-path="pro/stats/db">StatsDb.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 매출/통계 카테고리 상세</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 매출/통계 카테고리 상세</div>
									<div class="text_link" data-path="stats/db/category">StatsDbCate.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 자사 DB 현황 메뉴 -->

			<!-- EP 연동 상품 수 통계 -->
			<section>
				<h2><b>EP 연동 상품 수 통계</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">EP 연동 상품 수 통계</div>
							<div class="text_link" data-path="stats/ep-prod">StatsEpProd.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // EP 연동 상품 수 통계 -->

			<!-- 네이버 CPS 매출 통계 -->
			<section>
				<h2><b>네이버 CPS 매출 통계</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">네이버 CPS 매출 통계</div>
							<div class="text_link" data-path="stats/naver-cps">StatsNaverCps.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 네이버 CPS 매출 통계 -->
		</div>
		<!-- // 매출/통계 -->

		<!-- 제휴사 관리 -->
		<div class="mm_tab-item">
			<!-- [유료] 카테고리 연동 -->
			<section>
				<h2><b>[유료] 카테고리 연동</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 카테고리 연동</div>
							<div class="text_link" data-path="affiliate/mapping/api">AffiliateMappingApi.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] 연동 카테고리 설정
								<p class="text_color2">(유료기능) API 연동(제휴몰)</p>
							</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 연동 카테고리 설정</div>
									<div class="text_link" data-path="affiliate/mapping/api/category">AffiliateMappingApiCate.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // [유료] 카테고리 연동 -->

			<!-- 제휴연동 제외 -->
			<section>
				<h2><b>제휴연동 제외</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">제휴연동 제외</div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">상품</div>
									<div class="text_link" data-path="affiliate/except-link/prod">AffiliateExceptLinkProd.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 제외 항목 등록</div>
											<div class="text_link" data-path="affiliate/except-link/prod/register">AffiliateExceptLinkProdRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 제외 항목 수정</div>
											<div class="text_link" data-path="affiliate/except-link/prod/modify">AffiliateExceptLinkProdModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="mm_flex">
									<div class="text_name">셀러</div>
									<div class="text_link" data-path="affiliate/except-link/seller">AffiliateExceptLinkSeller.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
								<ul>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 제외 항목 등록</div>
											<div class="text_link" data-path="affiliate/except-link/seller/register">AffiliateExceptLinkSellerRegister.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
									<li>
										<a class="mm_flex">
											<div class="text_name">[팝업] 제외 항목 수정</div>
											<div class="text_link" data-path="affiliate/except-link/seller/modify">AffiliateExceptLinkSellerModify.vue</div>
											<div><span class="text_tag T=complete"></span></div>
											<div></div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 제휴연동 제외 -->

			<!-- [유료] 로그 정보 -->
			<section>
				<h2><b>[유료] 로그 정보</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 제휴 상품 로그</div>
							<div class="text_link" data-path="affiliate/log/api/prod">AffiliateLogApiProd.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>
								[팝업] 이미지 미리보기
								<p class="text_color2">(유료기능) API 연동(제휴몰)</p>
							</div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 제휴 주문 로그</div>
							<div class="text_link" data-path="affiliate/log/api/order">AffiliateLogApiOrder.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">(유료기능) API 연동(제휴몰)</p></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 제휴 주문 수집실패로그</div>
							<div class="text_link" data-path="affiliate/log/api/fail">AffiliateLogApiFail.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">(유료기능) API 연동(제휴몰)</p></div>
						</a>
					</li>
					<li>
						<a class="mm_flex">
							<div class="text_name">[유료] 제휴문의 로그</div>
							<div class="text_link" data-path="affiliate/log/api/inquiry">AffiliateLogApiInquiry.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div><p class="text_color2">(유료기능) API 연동(제휴몰)</p></div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // [유료] 로그 정보 -->

			<!-- 제휴 브랜드 연동 -->
			<section>
				<h2><b>제휴 브랜드 연동</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">제휴 브랜드 연동</div>
							<div class="text_link" data-path="affiliate/brand">affiliateBrand.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div></div>
						</a>
						<ul>
							<li>
								<a class="mm_flex">
									<div class="text_name">[팝업] 연동 브랜드 설정</div>
									<div class="text_link" data-path="affiliate/brand/set">AffiliateBrandSet.vue</div>
									<div><span class="text_tag T=complete"></span></div>
									<div></div>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- // 제휴 브랜드 연동 -->

			<!-- 제휴 연동 현황 -->
			<section>
				<h2><b>제휴 연동 현황</b></h2>
				<ul>
					<li>
						<a class="mm_flex">
							<div class="text_name">제휴 연동 현황</div>
							<div class="text_link" data-path="pro/affiliate/link-state">affiliateLinkState.vue</div>
							<div><span class="text_tag T=complete"></span></div>
							<div>[팝업] 셀러(복수) 검색, 브랜드(복수) 검색</div>
						</a>
					</li>
				</ul>
			</section>
			<!-- // 제휴 연동 현황 -->
		</div>
		<!-- // 제휴사관리 -->
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';

	onMounted(() => {

		var $tag = mm.find('.text_tag');
		var count = { _complete: 0, _develop: 0, _working: 0, _checking: 0, _recheck: 0, _ready: 0, _remove: 0 };

		_.forEach($tag, function(__$tag) {

			var $a = __$tag.closest('a');
			var _class = __$tag.getAttribute('class');

			if (_class.includes('complete')) {
				count._complete++;
				__$tag.textContent = '완료';
			}
			else if (_class.includes('develop')) {
				count._develop++;
				__$tag.textContent = '개발가능';
			}
			else if (_class.includes('working')) {
				count._working++;
				__$tag.textContent = '작업중';
			}
			else if (_class.includes('checking')) {
				count._checking++;
				__$tag.textContent = '검수중';
			}
			else if (_class.includes('recheck')) {
				count._recheck++;
				__$tag.textContent = '재검수';
			}
			else if (_class.includes('remove')) {
				count._remove++;
				__$tag.textContent = '삭제';

				_.forEach(mm.siblings(__$tag.parentElement), function(__$el) {

					mm.element.wrap(__$el, 'del', true);

				});
			}
			else {
				count._ready++;
				__$tag.textContent = '미작업';

				return;
			}

			// mm.element.attribute($a, { 'href': mm.string.template('/${LINK}', { LINK: mm.find('.text_link', $a)[0].getAttribute('data-path') }), 'target': '_blank' });
			mm.element.attribute($a, { 'href': `${window.env_path ?? ''}/${mm.find('.text_link', $a)[0].getAttribute('data-path')}`, 'target': '_blank' });

		});

		console.log('총 페이지 수: ' + $tag.length);
		console.log('완료: ' + count._complete);
		console.log('개발가능: ' + count._develop);
		console.log('삭제: ' + count._remove);
		console.log('검수중: ' + count._checking);
		console.log('재검수: ' + count._recheck);
		console.log('작업중: ' + count._working);
		console.log('미작업: ' + count._ready);

	});
</script>

<style lang="scss">
	.mm_view {display: block !important;margin:0 auto;padding-bottom:100px;width:1600px;}
	h1 {margin-bottom:30px;padding:25px 0;background:#00989c;color:#fff;font-size:40px;text-align:center;}

	.mm_tab-menu ul {display:flex;border-right:1px solid #bcbcbc;}
	.mm_tab-menu ul > li {flex:auto;border:1px solid #bcbcbc;border-right:0;background:#fafafa;color:#bcbcbc;font-size:14px;}
	.mm_tab-menu ul > li > .btn_tab {padding:15px;width:100%;text-align:center;}
	.mm_tab-menu ul > li > .btn_tab.S\=tab-on {background:#fff;color: #202020;font-weight:500;}

	.mm_tab-item {margin-top:-1px;border:1px solid #bcbcbc;}
	.mm_tab-item section {border-bottom:1px solid #ddd;}
	.mm_tab-item section h2 {padding:12px 10px;font-weight:500;font-size:15px;}
	.mm_tab-item section > ul > li:nth-child(even) {background:#fafafa;}
	.mm_tab-item section li {position:relative;padding-left:30px;}
	.mm_tab-item section li > ul .mm_flex {border-top:1px solid #f4f4f4;}
	.mm_tab-item section li ul::before {position:absolute;top:35px;bottom:10px;left:48px;border-left:1px solid #ddd;content:'';}
	.mm_tab-item section .mm_flex {-webkit-align-items:center;align-items:center;padding:8px 0;line-height:18px;}
	.mm_tab-item section .mm_flex:hover {background:#dfdfdf;}
	.mm_tab-item section .mm_flex div {padding:0 10px;font-size:13px;text-align:center;}
	.mm_tab-item section .mm_flex div.text_name {-webkit-flex:1;flex:1;text-align:left;}
	.mm_tab-item section .mm_flex div.text_link {width:350px;font-weight:500;text-align:left;}
	.mm_tab-item section .mm_flex div:nth-child(3) {width:100px;}
	.mm_tab-item section .mm_flex div:nth-child(4) {width:450px;text-align:left;}
	.mm_tab-item section .mm_flex del {color:#aaa;}
	.mm_tab-item section .text_tag {display:inline-block;padding:1px 5px;border:1px solid #e11;border-radius:3px;background:#fff;color:#e11;font-size:12px;}

	.mm_tab-item section .text_tag.T\=develop,
	.mm_tab-item section .text_tag.T\=complete {border-color:#04aa37;color:#04aa37;}
	.mm_tab-item section .text_tag.T\=working {border-color:#558eda;color:#558eda;}
	.mm_tab-item section .text_tag.T\=checking {border-color:#973af3;color:#973af3;}
	.mm_tab-item section .text_tag.T\=recheck {border-color:#e83af3;color:#e83af3;}
	.mm_tab-item section .text_tag.T\=remove {border-color:#aaa;color:#aaa;}
	.mm_tab-item section .text_color1 {color:#558eda;}/* 진행 중 */
	.mm_tab-item section .text_color2 {color:#973af3;}/* 개발전달 */
	.mm_tab-item section .text_color3 {color:#e11;}/* 긴급,변경사항 */
</style>