<template>
	<div class="m_template-header">
		<h1><b>M.Template</b></h1>
	</div>

	<!-- 템플릿 사이드바 -->
	<div class="m_template-sidebar">
		<div class="mm_scroller">
			<ul>
				<li>
					<a class="btn_anchor" href="#color"><b>컬러</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#icon"><b>아이콘</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#text"><b>텍스트</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#button"><b>버튼</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#image"><b>이미지</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#form"><b>폼 유형</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#formmix"><b>폼 믹스</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#formTable"><b>폼 테이블</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#formFunction"><b>폼 오류/업데이트</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#tab"><b>탭메뉴</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#dropdown"><b>드롭다운</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#list"><b>리스트</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#part"><b>파츠</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#pagination"><b>페이지네이션</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#bom"><b>BOM</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#layer"><b>레이어</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#loading"><b>로딩</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
				<li>
					<a class="btn_anchor" href="#table"><b>테이블</b></a>
					<ul class="m_template-sidebar-sub">
						<!-- <li><a href="#"><b>자동생성</b></a></li> -->
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<!-- // 템플릿 사이드바 -->

	<!-- 템플릿 요소 -->
	<div class="m_template-component">
		<!-- 컬러 -->
		<article id="color">
			<h2><b>컬러</b></h2>
			<section class="m_template-component-item">
				<h3><b>컬러</b></h3>
				<template type="text/codehtml">
					<div style="display:inline-block;margin:0;padding:10px;background:#00979c;color:#fff;font-size:12px">
						color_main #00979c
					</div>
					<div style="display:inline-block;margin:0;padding:10px;background:#f34427;color:#fff;font-size:12px">
						color_2rd #f34427
					</div>
					<div style="display:inline-block;margin:0;padding:10px;background:#2c4344;color:#fff;font-size:12px">
						color_3rd #2c4344
					</div>
					<br><br>
					<div style="display:inline-block;margin:0;padding:10px;background:#00985b;color:#fff;font-size:12px">
						color_xload #00985b
					</div>
					<div style="display:inline-block;margin:0;padding:10px;background:#ec1b3c;color:#fff;font-size:12px">
						color_warning #ec1b3c
					</div>
					<br><br>
					<p class="mm_text-primary" style="font-size:15px;">
						mm_text-primary : #00979c
					</p>
					<p class="mm_text-secondary" style="font-size:15px;">
						mm_text-secondary : #f34427
					</p>
					<p class="mm_text-tertiary" style="font-size:15px;">
						mm_text-tertiary : #2c4344
					</p>
					<p class="mm_text-warning" style="font-size:15px;">
						mm_text-warning : #ec1b3c
					</p>
				</template>
			</section>
		</article>
		<!-- // 컬러 -->

		<!-- 아이콘 -->
		<article id="icon">
			<h2><b>아이콘</b></h2>
			<section class="m_template-component-item">
				<h3><b>아이콘</b></h3>
				<div class="m_template...note m_template...icon">
					<b>화살표</b>
					<table>
						<thead>
							<tr>
								<th scope="col">
									아이콘
								</th>
								<th scope="col">
									XD명칭
								</th>
								<th scope="col">
									svg 파일명
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_arrow.svg')"></i></td>
								<td>0xf104</td>
								<td>ico_arrow</td>
								<td>0xf105(반대방향 화살표)는 rotate하여 사용합니다.</td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_arrow_thin.svg')"></i></td>
								<td>0xe93f</td>
								<td>ico_arrow_thin</td>
								<td>0xe93e(하단방향 화살표)는 rotate하여 사용합니다.</td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_arrow_bold.svg')"></i></td>
								<td>0xe93c</td>
								<td>ico_arrow_bold</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_arrow_down.svg')"></i></td>
								<td>0xe93a</td>
								<td>ico_arrow_down</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_arrow_round.svg')"></i></td>
								<td>chevron-small-down</td>
								<td>ico_arrow_round</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_arrow_double.svg')"></i></td>
								<td>0xf100</td>
								<td>ico_arrow_double</td>
								<td>0xf101(반대방향 화살표)는 rotate하여 사용합니다.</td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_triangle.svg')"></i></td>
								<td>0xe949</td>
								<td>ico_triangle</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_refresh.svg')"></i></td>
								<td>refresh</td>
								<td>ico_refresh</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_reset.svg')"></i></td>
								<td>reset</td>
								<td>ico_reset</td>
								<td></td>
							</tr>
						</tbody>
					</table>

					<b>X</b>
					<table>
						<thead>
							<tr>
								<th scope="col">
									아이콘
								</th>
								<th scope="col">
									XD명칭
								</th>
								<th scope="col">
									svg 파일명
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_x.svg')"></i></td>
								<td>close</td>
								<td>ico_x</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_x_circle.svg')"></i></td>
								<td>0xe9d6</td>
								<td>ico_x_circle</td>
								<td></td>
							</tr>
						</tbody>
					</table>

					<b>etc</b>
					<table>
						<thead>
							<tr>
								<th scope="col">
									아이콘
								</th>
								<th scope="col">
									XD명칭
								</th>
								<th scope="col">
									svg 파일명
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_note.svg')"></i></td>
								<td>패스 48</td>
								<td>ico_note</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_help.svg')"></i></td>
								<td>help-web-button</td>
								<td>ico_help</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_check.svg')"></i></td>
								<td>form_check</td>
								<td>ico_check</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_xload.svg')"></i></td>
								<td>download</td>
								<td>ico_xload</td>
								<td>업로드(반대방향 아이콘)는 rotate하여 사용합니다.</td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_calendar.svg')"></i></td>
								<td>calendar</td>
								<td>ico_calendar</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_image.svg')"></i></td>
								<td></td>
								<td>ico_image</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_image_double.svg')"></i></td>
								<td>0xe8d1</td>
								<td>ico_image_double</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_newtab.svg')"></i></td>
								<td>0xf24d</td>
								<td>ico_newtab</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_plus.svg')"></i></td>
								<td>add</td>
								<td>ico_plus</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_pencil.svg')"></i></td>
								<td>edit</td>
								<td>ico_pencil</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_ship.svg')"></i></td>
								<td>패스 36</td>
								<td>ico_ship</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_show.svg')"></i></td>
								<td>0xed25</td>
								<td>ico_show</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_hide.svg')"></i></td>
								<td>0xed26</td>
								<td>ico_hide</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_smile.svg')"></i></td>
								<td>smile</td>
								<td>ico_smile</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_edit.svg')"></i></td>
								<td>edit</td>
								<td>ico_edit</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_trash.svg')"></i></td>
								<td></td>
								<td>ico_trash</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_bookmark.svg')"></i></td>
								<td></td>
								<td>ico_bookmark</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_folder.svg')"></i></td>
								<td>0xff36</td>
								<td>ico_folder</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_category_add.svg')"></i></td>
								<td></td>
								<td>ico_category_add</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_complete.svg')"></i></td>
								<td>0xf06d</td>
								<td>ico_complete</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_bom_alert.svg')"></i></td>
								<td>0xee4e</td>
								<td>ico_bom_alert</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_loading.svg')"></i></td>
								<td>0xf529</td>
								<td>ico_loading</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_image.svg')"></i></td>
								<td>0xf529</td>
								<td>ico_image</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_image_sortable.svg')"></i></td>
								<td>0xed6f</td>
								<td>ico_image_sortable</td>
								<td></td>
							</tr>
							<tr>
								<td><i style="background-image:url('/public/images/common/ico_image_sortable_apply.svg')"></i></td>
								<td>0xee3b</td>
								<td>ico_image_sortable_apply</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</article>
		<!-- // 아이콘 -->

		<!-- 텍스트 -->
		<article id="text">
			<h2><b>텍스트</b></h2>

			<!-- 페이지 제목 -->
			<section class="m_template-component-item">
				<h3><b>페이지 제목</b><small>mm_title</small></h3>
				<template type="text/codehtml">
					<div class="mm_head">
						<h2 class="mm_title">
							<b>페이지 제목</b>
						</h2>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xs T=round">
									<b>즐겨찾기 추가</b><i class="ico_plus"></i>
								</button>
								<a class="mm_btn T=xs T=round" href="" target="_blank" title="새 창 열림"><b>새창보기</b><i class="ico_newtab"></i></a>
							</div>
						</div>
					</div>
				</template>
				<div class="m_template...note">
					<p>h1~6까지 적용되는 위치에 맞게 태그를 변경하여 적용합니다.</p>
				</div>
			</section>
			<!-- // 페이지 제목 -->

			<!-- 테이블 제목 -->
			<section class="m_template-component-item">
				<h3><b>테이블 제목</b><small>mm_heading</small></h3>
				<template type="text/codehtml">
					<h3 class="mm_heading">
						<b>테이블 제목<strong>strong 태그</strong></b>
					</h3>
					<h3 class="mm_heading">
						<a href="#" data-href="{ '_type': 'link' }"><b>링크이동 제목</b><i class="ico_link"></i></a>
					</h3>
				</template>
				<div class="m_template...note">
					<p>h1~6까지 적용되는 위치에 맞게 태그를 변경하여 적용합니다.</p>
				</div>
			</section>
			<!-- // 테이블 제목 -->

			<!-- 소제목 -->
			<section class="m_template-component-item">
				<h3><b>소제목</b><small>mm_strapline</small></h3>
				<template type="text/codehtml">
					<h3 class="mm_strapline">
						<strong>주문번호<b class="mm_text-secondary">62760043-1</b></strong>
					</h3>
					<h3 class="mm_strapline">
						<b>소제목</b><b class="mm_text-secondary">123456</b>
					</h3>
				</template>
				<div class="m_template...note">
					<p>h1~6까지 적용되는 위치에 맞게 태그를 변경하여 적용합니다.</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Class
								</th>
								<th scope="col">
									Fontsize
								</th>
								<th scope="col">
									Fontweight
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td>12px</td>
								<td>400</td>
								<td>색상은 "mm_text-" 클래스로 변경합니다.</td>
							</tr>
							<tr>
								<td>strong</td>
								<td>12px</td>
								<td>700</td>
								<td>색상은 "mm_text-" 클래스로 변경합니다.</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 소제목 -->

			<!-- 내용없음 -->
			<section class="m_template-component-item">
				<h3><b>내용없음</b><small>mm_text-none</small></h3>
				<template type="text/codehtml">
					<p class="mm_text-none">
						사이트상에 진열된 순서대로 조회됩니다.
					</p>
				</template>
			</section>
			<!-- // 내용없음 -->

			<!-- 유의사항 -->
			<section class="m_template-component-item">
				<h3><b>유의사항</b><small>mm_note</small></h3>
				<template type="text/codehtml">
					<div class="mm_note">
						<ul>
							<li>배송접수 : 주문상태가 배송접수전 상태인 주문건만 다중 선택 후 접수 가능합니다./배송접수 후 모든 처리가 가능합니다./배송접수 전 상태는 고객임의 취소가 가능합니다.</li>
							<li>발송처리 : 주문상태가 배송준비중 상태인 주문건에 대해 송장번호 입력 후 다중선택으로 발송처리가 가능합니다.</li>
							<li>SMS발송 : 배송지연 주문에 대해 출고 예상일을 선택 후 SMS발송을 누르시면, 고객님께 문자가 전송됩니다.</li>
							<li>
								<dl>
									<dt>엑셀로 배송처리 :</dt>
									<dd>
										<p>배송준비중 상태의 주문건 조회 후 엑셀파일로 다운 받아 일괄업로드가 가능합니다.</p>
										<p>다운받기 한 파일로 발송처리시 파일을 엑셀에서 연 다음 송장번호 입력 후 '다른이름저장'으로 저장합니다.</p>
										<p>파일형식은 '.xls'(엑셀통합문서)로 해야하며, sheet명은 'Sheet'로 저장합니다.</p>
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>굿스플로 송장출력 :</dt>
									<dd>
										<p>기존의 엑셀 변환작업, 송장번호 입력 등의 일체의 수작업 없이 SCM에서 바로 배송접수(송장출력) 및 발송처리(송장입력) 등의 작업이 자동화 되는 굿스플로 제휴서비스입니다.</p>
										<p>서비스 이용전 <strong>사용자정보 &#62; 4. 배송지 및 반품처 현황 &#62; 배송정보수정</strong> 에서 굿스플로 서비스 신청 후 이용 가능합니다.</p>
										<p><a class="btn_detail" href="#" data-href="{ '_type': 'link' }"><b>굿스플로 서비스 자세히보기</b><i class="ico_link"></i></a></p>
									</dd>
								</dl>
							</li>
						</ul>
					</div>

					<div class="mm_form_mix-linked"></div>
					<div class="mm_note">
						<p>영문/특수문자/숫자 4~16자 이하, 특수문자는 _ 만 가능합니다.</p>
					</div>

					<div class="mm_note">
						<p><i class="ico_note"></i><strong class="mm_text-warning">mm_form-table의 caption 사용 안내문구</strong>일반 p 태그 문구</p>
					</div>

					<div class="mm_note T=bottom">
						<ul>
							<li>아이템-대 &#62; 아이템-중 &#62; 아이템-소 순으로 선택해 주십시오.</li>
							<li>아이템은 최대 3개까지 선택 가능합니다.</li>
							<li>잘못된 아이템에 등록할 경우, 강제 진열 내림 될 수 있습니다.</li>
						</ul>
					</div>
				</template>
				<div class="m_template...note">
					<p>유의사항 사용 위치에 따라 스타일이 변경됩니다.</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Using
								</th>
								<th scope="col">
									Class
								</th>
								<th scope="col">
									Deco
								</th>
								<th scope="col">
									Fontsize
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>기본형</td>
								<td>-</td>
								<td>ㆍ</td>
								<td>12px</td>
								<td>strong태그 --> font-weight: 700;</td>
							</tr>
							<tr>
								<td>caption</td>
								<td>-</td>
								<td>ico_note 아이콘</td>
								<td>12px</td>
								<td>strong태그 --> font-weight: 700;</td>
							</tr>
							<tr>
								<td>[class*="mm_form-"]의 하단</td>
								<td>-</td>
								<td>&#160;</td>
								<td>11px</td>
								<td>
									p태그로 사용 (br로 줄바꿈)<br>
									기본 색상은 <span style="color:#ec1b3c;">$color_warning</span><br>
									검색영역 내부 안내문구 색상은 #000
								</td>
							</tr>
							<tr>
								<td>폼영역 하단</td>
								<td>T=bottom</td>
								<td>ㆍ</td>
								<td>11px</td>
								<td>-</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 유의사항 -->
		</article>
		<!-- // 텍스트 -->

		<!-- 버튼 -->
		<article id="button">
			<h2><b>버튼</b></h2>

			<!-- 버튼 크기 -->
			<section class="m_template-component-item">
				<h3><b>버튼 크기</b><small>mm_btn</small></h3>
				<template type="text/codehtml">
					<button type="button" class="mm_btn T=xs">
						<b>xs</b>
					</button><br>
					<button type="button" class="mm_btn T=sm">
						<b>sm</b>
					</button><br>
					<button type="button" class="mm_btn">
						<b>기본</b>
					</button><br>
					<button type="button" class="mm_btn T=lg">
						<b>lg</b>
					</button><br>
					<button type="button" class="mm_btn T=xl">
						<b>xl</b>
					</button>
				</template>
				<div class="m_template...note">
					<p>
						* mm_btn의 width값은 auto입니다.<br>
						* 버튼의 크기/라운딩/테두리/색상을 T=로 시작하여 조합할 수 있습니다. ex) T=lg T=round T=line T=primary
					</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Option
								</th>
								<th scope="col">
									Attribute
								</th>
								<th scope="col">
									Height
								</th>
								<th scope="col">
									Font-size
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>T=xs</td>
								<td>class</td>
								<td>23px</td>
								<td>11px</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=sm</td>
								<td>class</td>
								<td>26px</td>
								<td>12px</td>
								<td>테이블 내부에서 사용</td>
							</tr>
							<tr>
								<td>&#160;</td>
								<td>class</td>
								<td>30px</td>
								<td>12px</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=lg</td>
								<td>class</td>
								<td>34px</td>
								<td>12px</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=xl</td>
								<td>class</td>
								<td>45px</td>
								<td>14px</td>
								<td>-</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- 버튼 크기 -->

			<!-- 버튼 색상 -->
			<section class="m_template-component-item">
				<h3><b>버튼 색상 (배경컬러 #fff 외)</b></h3>
				<template type="text/codehtml">
					<button type="button" class="mm_btn" disabled>
						<b>비활성</b>
					</button><br>
					<button type="button" class="mm_btn">
						<b>기본</b>
					</button><br>
					<button type="button" class="mm_btn T=dark">
						<b>dark</b>
					</button><br>
					<button type="button" class="mm_btn T=primary">
						<b>primary</b>
					</button><br>
					<button type="button" class="mm_btn T=secondary">
						<b>secondary</b>
					</button><br>
					<button type="button" class="mm_btn T=tertiary">
						<b>tertiary</b>
					</button><br>
					<button type="button" class="mm_btn T=xload">
						<b>xload</b>
					</button>
				</template>
				<div class="m_template...note">
					<p>버튼의 크기/라운딩/테두리/색상을 T=로 시작하여 조합할 수 있습니다. ex) T=lg T=round T=line T=primary</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Option
								</th>
								<th scope="col">
									Attribute
								</th>
								<th scope="col">
									BorderColor
								</th>
								<th scope="col">
									BackgroundColor
								</th>
								<th scope="col">
									FontColor
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>-</td>
								<td>class</td>
								<td>#c7c7c7</td>
								<td>#eee</td>
								<td>#555</td>
								<td>버튼 비활성</td>
							</tr>
							<tr>
								<td>&#160;</td>
								<td>class</td>
								<td>-</td>
								<td>#555</td>
								<td>#fff</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=dark</td>
								<td>class</td>
								<td>#333</td>
								<td>#333</td>
								<td>#fff</td>
								<td></td>
							</tr>
							<tr>
								<td>T=primary</td>
								<td>class</td>
								<td>#00979c</td>
								<td>#00979c</td>
								<td>#fff</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=secondary</td>
								<td>class</td>
								<td>#f34427</td>
								<td>#f34427</td>
								<td>#fff</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=tertiary</td>
								<td>class</td>
								<td>#2c4344</td>
								<td>#2c4344</td>
								<td>#fff</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=xload</td>
								<td>class</td>
								<td>#00985b</td>
								<td>#00985b</td>
								<td>#fff</td>
								<td>-</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 버튼 색상 -->

			<!-- 버튼 테두리 -->
			<section class="m_template-component-item">
				<h3><b>버튼 테두리 (배경컬러 #fff)</b></h3>
				<template type="text/codehtml">
					<button type="button" class="mm_btn T=line T=lighter">
						<b>테두리 + lighter</b>
					</button><br>
					<button type="button" class="mm_btn T=line T=light">
						<b>테두리 + light</b>
					</button><br>
					<button type="button" class="mm_btn T=line">
						<b>테두리</b>
					</button><br>
					<button type="button" class="mm_btn T=line T=dark">
						<b>테두리 + dark</b>
					</button><br>
					<button type="button" class="mm_btn T=line T=primary">
						<b>테두리 + primary</b>
					</button><br>
					<button type="button" class="mm_btn T=line T=secondary">
						<b>테두리 + secondary</b>
					</button><br>
					<button type="button" class="mm_btn T=line T=tertiary">
						<b>테두리 + tertiary</b>
					</button><br>
					<button type="button" class="mm_btn T=line T=xload">
						<b>테두리 + xload</b>
					</button>
				</template>
				<div class="m_template...note">
					<p>버튼의 크기/라운딩/테두리/색상을 T=로 시작하여 조합할 수 있습니다. ex) T=lg T=round T=line T=primary</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Option
								</th>
								<th scope="col">
									Attribute
								</th>
								<th scope="col">
									BorderColor
								</th>
								<th scope="col">
									FontColor
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>T=line T=lighter</td>
								<td>class</td>
								<td>#d5d5d5</td>
								<td>#555</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=line T=light</td>
								<td>class</td>
								<td>#999</td>
								<td>#555</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=line</td>
								<td>class</td>
								<td>#555</td>
								<td>#555</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=line T=dark</td>
								<td>class</td>
								<td>#333</td>
								<td>#333</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=line T=primary</td>
								<td>class</td>
								<td>#00979c</td>
								<td>#00979c</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=line T=secondary</td>
								<td>class</td>
								<td>#f34427</td>
								<td>#f34427</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=line T=tertiary</td>
								<td>class</td>
								<td>#2c4344</td>
								<td>#2c4344</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=line T=xload</td>
								<td>class</td>
								<td>#00985b</td>
								<td>#00985b</td>
								<td>-</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 버튼 테두리 -->

			<!-- 버튼 박스 -->
			<section class="m_template-component-item">
				<h3><b>버튼 박스</b><small>mm_btn_box + mm_inline/mm_lside/mm_rside</small></h3>
				<template type="text/codehtml">
					<div class="mm_btn_box">
						<button type="button" class="mm_btn">
							<b>기본버튼 (width:100%)</b>
						</button>
						<button type="button" class="mm_btn">
							<b>기본버튼 (width:100%)</b>
						</button>
					</div>
					<br>
					<div class="mm_btn_box">
						<div class="mm_inline">
							<button type="button" class="mm_btn T=line T=light">
								<b>가운데정렬</b>
							</button>
							<button type="button" class="mm_btn">
								<b>width:auto</b>
							</button>
						</div>
					</div>
					<br>
					<div class="mm_btn_box">
						<div class="mm_lside">
							<button type="button" class="mm_btn T=line T=light">
								<b>왼쪽정렬</b>
							</button>
							<button type="button" class="mm_btn">
								<b>width:auto</b>
							</button>
						</div>
						<div class="mm_rside">
							<button type="button" class="mm_btn T=line T=light">
								<b>오른쪽정렬</b>
							</button>
							<button type="button" class="mm_btn">
								<b>width:auto</b>
							</button>
						</div>
					</div>
					<br>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=line T=tertiary">
									<b>min-width 150px</b>
								</button>
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>최하단버튼</b>
								</button>
							</div>
						</div>
					</div>
				</template>
			</section>
			<!-- // 버튼 박스 -->

			<!-- 버튼 종류 -->
			<section class="m_template-component-item">
				<h3><b>버튼 종류</b></h3>
				<template type="text/codehtml">
					<b style="padding:10px;background-color:#f5f5f5;color:#626262;font-size:14px;">mm_table 내부 버튼 (T=sm)</b>
					<div class="mm_btn_box">
						<div class="mm_lside">
							<button type="button" class="mm_btn T=sm T=line">
								<b>삭제</b>
							</button>
							<a class="mm_btn T=sm" href="#" data-href="{ '_type': 'link' }"><b>수정</b></a>
							<button type="button" class="mm_btn T=sm T=line T=secondary">
								<b>URL 복사</b>
							</button>
						</div>
					</div>
					<div class="mm_btn_box">
						<div class="mm_lside">
							<a class="mm_btn T=sm T=line" href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>옵션 확인 / <strong class="mm_text-secondary text_num">10000</strong>개</b></a>
							<a class="mm_btn T=sm T=line" href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상세 (상세/이력)</b></a>
							<a class="mm_btn T=sm T=line btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
								<b>이미지보기</b>
								<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-lazyload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
							</a>
						</div>
					</div>
					<br>

					<b style="padding:10px;background-color:#f5f5f5;color:#626262;font-size:14px;">mm_table</b>
					<div class="mm_btn_box">
						<div class="mm_lside">
							<button type="button" class="mm_btn T=line">
								<b>삭제, 해제 (부정)</b>
							</button>
							<a class="mm_btn" href="#" data-href="{ '_type': 'link' }"><b>수정, 추가 (긍정)</b></a>
						</div>
					</div>
					<div class="mm_btn_box">
						<div class="mm_lside">
							<a class="mm_btn T=line T=secondary btn_register" href="#" data-href="{ '_type': 'link' }"><b>이용약관 등록하기</b><i class="ico_register"></i></a>
						</div>
					</div>
					<div class="mm_btn_box">
						<div class="mm_lside">
							<button type="button" class="mm_btn T=line T=secondary">
								<b>레이아웃 변경되는 경우(등록/추가)</b>
							</button>
							<button type="button" class="mm_btn T=line T=secondary">
								<b>기능(복사/적용)</b>
							</button>
							<button type="button" class="mm_btn T=line T=secondary">
								<b>상품 추가</b>
							</button>
						</div>
					</div>
					<div class="mm_btn_box">
						<div class="mm_lside">
							<button type="button" class="mm_btn T=line T=xload btn_excel">
								<b>엑셀 업로드</b><i class="ico_upload"></i>
							</button>
							<a class="mm_btn T=line T=xload btn_excel" href="/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
							<button type="button" class="mm_btn T=line T=xload btn_excel">
								<b>엑셀 배송 일괄 처리</b><i class="ico_check"></i>
							</button>
						</div>
					</div>

					<br><b style="padding:10px;background:#eee;color:#626262;font-size:12px;">mm_table 안에 상태를 변경하는 경우 mm_btn 스타일로 통일</b>
					<br><b style="margin-right:10px;padding:9px 5px;width:100px;background:#eee;color:#626262;font-size:12px;">승인/완료/확정</b>
					<div class="mm_btn_box" style="display:inline-block;">
						<div class="mm_lside">
							<a class="mm_btn" href="/pro/seller/manage/middle-contract/approval" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>계약 승인</b></a>
							<button type="button" class="mm_btn">
								<b>교환 승인</b>
							</button>
							<button type="button" class="mm_btn">
								<b>결제 완료</b>
							</button>
							<button type="button" class="mm_btn">
								<b>배송 완료</b>
							</button>
							<button type="button" class="mm_btn">
								<b>취소 완료</b>
							</button>
							<button type="button" class="mm_btn">
								<b>반품 회수 완료</b>
							</button>
							<button type="button" class="mm_btn">
								<b>교환 회수 완료</b>
							</button>
							<button type="button" class="mm_btn">
								<b>반품 확정</b>
							</button>
							<button type="button" class="mm_btn">
								<b>교환 확정</b>
							</button>
						</div>
					</div>
					<br><b style="margin-right:10px;padding:9px 5px;width:100px;background:#eee;color:#626262;font-size:12px;">취소/거부/철회</b>
					<div class="mm_btn_box" style="display:inline-block;">
						<div class="mm_lside">
							<a class="mm_btn" href="/order/ship/cancel" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>주문 취소</b></a>
							<a class="mm_btn" href="/order/cancel/reject" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>취소 거부</b></a>
							<button type="button" class="mm_btn">
								<b>반품 철회</b>
							</button>
							<button type="button" class="mm_btn">
								<b>교환 철회</b>
							</button>
							<a class="mm_btn" href="/order/exchange/switch" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>반품 전환</b></a>
							<button type="button" class="mm_btn">
								<b>계약 종료</b>
							</button>
						</div>
					</div>
					<br><b style="margin-right:10px;padding:9px 5px;width:100px;background:#eee;color:#626262;font-size:12px;">처리</b>
					<div class="mm_btn_box" style="display:inline-block;">
						<div class="mm_lside">
							<button type="button" class="mm_btn">
								<b>진열 처리</b>
							</button>
							<button type="button" class="mm_btn">
								<b>미진열 처리</b>
							</button>
							<button type="button" class="mm_btn">
								<b>품절 처리</b>
							</button>
							<button type="button" class="mm_btn">
								<b>발송 처리</b>
							</button>
							<button type="button" class="mm_btn">
								<b>품절 처리</b>
							</button>
						</div>
					</div>
					<br><b style="margin-right:10px;padding:9px 5px;width:100px;background:#eee;color:#626262;font-size:12px;">진행</b>
					<div class="mm_btn_box" style="display:inline-block;">
						<div class="mm_lside">
							<button type="button" class="mm_btn">
								<b>배송 준비 중</b>
							</button>
							<a class="mm_btn" href="/order/ship/return" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>반품 요청</b></a>
							<a class="mm_btn" href="/order/ship/exchange" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>교환 요청</b></a>
							<a class="mm_btn" href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>배송 지연</b></a>
						</div>
					</div>
					<br><b style="margin-right:10px;padding:9px 5px;width:100px;background:#eee;color:#626262;font-size:12px;">보류</b>
					<div class="mm_btn_box" style="display:inline-block;">
						<div class="mm_lside">
							<button type="button" class="mm_btn">
								<b>계약 보류</b>
							</button>
							<a class="mm_btn" href="/order/return/hold" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>반품 보류</b></a>
							<a class="mm_btn" href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>교환 회수 전 보류</b></a>
							<a class="mm_btn" href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>교환 회수 후 보류</b></a>
						</div>
					</div>
					<br><b style="margin-right:10px;padding:9px 5px;width:100px;background:#eee;color:#626262;font-size:12px;">etc</b>
					<div class="mm_btn_box" style="display:inline-block;">
						<div class="mm_lside">
							<a class="mm_btn" href="/pro/seller/manage/middle-contract/date" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>결제 예정일 수정</b></a>
							<a class="mm_btn" href="/order/detail/address" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>배송지 정보 수정</b></a>
							<a class="mm_btn" href="/order/detail/sms" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>SMS 발송</b></a>
						</div>
					</div>

					<br><b style="margin-top:30px;padding:10px;background-color:#f5f5f5;color:#626262;font-size:14px;">etc</b>
					<!--
						<div class="mm_btn_box">
						<div class="mm_lside">
						<button type="button" class="mm_btn T=sm T=line T=lighter btn_refresh"><i class="ico_refresh"></i><b>재조회</b></button>
						<a class="mm_btn T=sm T=line T=lighter btn_more" href="#" data-href="{ '_type': 'link' }"><b>더보기</b><i class="ico_link T=sm"></i></a>
						</div>
						</div>
					-->
					<div class="mm_btn_box">
						<div class="mm_lside">
							<a class="mm_btn T=line T=light btn_code" href="/order/ship/code" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>택배사 코드표</b><i class="ico_ship"></i></a>
							<a class="mm_btn T=line btn_help" href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
							<button type="button" class="mm_btn T=line T=light btn_refresh">
								<b>새로고침</b><i class="ico_refresh"></i>
							</button>
						</div>
					</div>
					<!--
						<div class="mm_btn_box">
						<div class="mm_lside">
						<button type="button" class="mm_btn T=line btn_refresh" onclick="location.reload();"><i class="ico_refresh"></i><b>새로고침</b></button>
						</div>
						</div>
					-->
				</template>
			</section>
			<!-- // 버튼 종류 -->
		</article>
		<!-- // 버튼 -->

		<!-- 이미지 -->
		<article id="image">
			<h2><b>이미지</b></h2>

			<!-- 기본 이미지 -->
			<section class="m_template-component-item">
				<h3><b>기본 이미지</b><small>data-lazyload</small></h3>
				<template type="text/codehtml">
					<!-- img 태그 사용 -->
					<div style="position:relative; width:100px; height:100px; border:1px solid #ddd;">
						<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-lazyload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt="">
					</div>
					<!-- background 이미지 사용 -->
					<div style="position:relative; width:100px; height:100px; border:1px solid #ddd;">
						<i class="mm_bg-contain" data-lazyload="{ '_src': '/public/images/_sample/product_3.jpg' }"></i>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						i태그를 이용한 background 이미지 사용시에 클래스명을 이용하여 background-size의 값을 cover 또는 contain으로 사용할 수 있습니다
					</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Option
								</th>
								<th scope="col">
									Attribute
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>mm_bg-contain</td>
								<td>class</td>
								<td>-</td>
							</tr>
							<tr>
								<td>mm_bg-cover</td>
								<td>class</td>
								<td>-</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 기본 이미지 -->

			<!-- 이미지오류 -->
			<section class="m_template-component-item">
				<h3><b>이미지오류</b></h3>
				<template type="text/codehtml">
					<!-- 노이미지/직접적용 -->
					<div style="position:relative; width:100px; height:100px; border:1px solid #ddd;">
						<img src="" alt="" onerror="mm.image.none(this);">
					</div>

					<!-- 노이미지/프리로드 이미지 -->
					<div style="position:relative; width:100px; height:100px; border:1px solid #ddd;">
						<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="" data-lazyload="{ '_src': '' }">
					</div>

					<!-- 노이미지/프리로드 백그라운드 -->
					<div style="position:relative; width:100px; height:100px; border:1px solid #ddd;">
						<i data-lazyload="{ '_src': '' }"></i>
					</div>

					<!-- 노이미지 아이콘 변경/프리로드 -->
					<div style="position:relative; width:100px; height:100px; border:1px solid #ddd;">
						<i data-lazyload="{ '_src': '' }" data-image="{ '_classNone': 'ico_camera' }"></i>
					</div>

					<!-- 노이미지 없음/프리로드 -->
					<div style="position:relative; width:100px; height:100px; border:1px solid #ddd;">
						<i data-lazyload="{ '_src': '', '_isErrorImage': false }"></i>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						* 이미지(백그라운드 이미지)에 lazyload를 적용하면 이미지 경로가 잘못되었을 때 기본 아이콘을 보여줍니다.<br>
						* lazyload가 없는 일반 이미지는 onerror="mm.image.none(this);" 속성을 직접 추가하여 적용합니다.
					</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Option
								</th>
								<th scope="col">
									Attribute
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{ '_src': '이미지 경로' }</td>
								<td>data-lazyload</td>
								<td>-</td>
							</tr>
							<tr>
								<td>{ '_src2': '_src가 없을 때 불러올 이미지 경로' }</td>
								<td>data-lazyload</td>
								<td>-</td>
							</tr>
							<tr>
								<td>{ '_isErrorImage': '에러 아이콘 노출여부' }</td>
								<td>data-lazyload</td>
								<td>true(기본값) / false</td>
							</tr>
							<tr>
								<td>{ '_isRatio': '비율에 따라 클래스 추가' }</td>
								<td>data-lazyload</td>
								<td>false(기본값) / true</td>
							</tr>
							<tr>
								<td>{ '_isForce': '강제 로드(프리로드)' }</td>
								<td>data-lazyload</td>
								<td>false(기본값) / true</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 이미지오류 -->
		</article>
		<!-- // 이미지 -->

		<!-- 폼 유형 -->
		<article id="form">
			<h2><b>폼 유형</b></h2>

			<!-- 텍스트 인풋 -->
			<section class="m_template-component-item">
				<h3><b>텍스트 인풋</b><small>mm_form-text</small></h3>
				<template type="text/codehtml">
					<div class="mm_form-text T=xs">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text><i class="bg_text"></i>
							<span class="text_placeholder">xs</span>
						</label>
					</div>
					<div class="mm_form-text T=sm">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text><i class="bg_text"></i>
							<span class="text_placeholder">sm</span>
						</label>
					</div>
					<div class="mm_form-text T=lg">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text><i class="bg_text"></i>
							<span class="text_placeholder">lg</span>
						</label>
					</div>
					<div class="mm_form-text">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text><i class="bg_text"></i>
							<span class="text_placeholder">플레이스홀더</span>
						</label>
					</div>
					<div class="mm_form-text">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text value="읽기전용" readonly><i class="bg_text"></i>
							<span class="text_placeholder">읽기전용</span>
						</label>
					</div>
					<div class="mm_form-text">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text disabled><i class="bg_text"></i>
							<span class="text_placeholder">비활성</span>
						</label>
					</div>
					<div class="mm_form-text">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text="{ '_default': '텍스트 삭제 시 기본 값' }"><i class="bg_text"></i>
							<span class="text_placeholder">텍스트 삭제 시 기본 값</span>
						</label>
					</div>
					<div class="mm_form-text T=wide">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text><i class="bg_text"></i>
							<span class="text_placeholder">텍스트 인풋 wide</span>
						</label>
					</div>
					<div class="mm_form-text T=wide">
						<button type="button" class="btn_text-pw">
							<i class="ico_hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
						</button>
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="password" class="textfield" data-text><i class="bg_text"></i>
							<span class="text_placeholder">비밀번호 영문/특수문자/숫자 8~16자</span>
						</label>
					</div>
					<div class="mm_form-text">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text="{ '_isAutoComplete': true }"><i class="bg_text"></i>
							<span class="text_placeholder">텍스트 자동완성</span>
						</label>
					</div>

					<br>
					<div class="mm_form-text">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
							<span class="text_placeholder">플레이스홀더</span>
						</label>
					</div>
				</template>
				<div class="m_template...note">
					<p>width와 height에 따라 클래스를 추가합니다.</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Class
								</th>
								<th scope="col">
									Attribute
								</th>
								<th scope="col">
									width
								</th>
								<th scope="col">
									height
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>T=2xs</td>
								<td>class</td>
								<td>108px</td>
								<td>-</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=xs</td>
								<td>class</td>
								<td>460px</td>
								<td>-</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=sm</td>
								<td>class</td>
								<td>732px</td>
								<td>-</td>
								<td>-</td>
							</tr>
							<tr>
								<td>&#160;</td>
								<td>&#160;</td>
								<td>100%</td>
								<td>23px</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=wide</td>
								<td>class</td>
								<td>100%</td>
								<td>34px</td>
								<td>-</td>
							</tr>
							<tr>
								<td>data-text 옵션 '_byte': 30</td>
								<td>class</td>
								<td>input value size</td>
								<td>34px</td>
								<td>스크립트로 mm_form-text에 S=byte 클래스가 추가됩니다</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 텍스트 인풋 -->

			<!-- 텍스트 멀티라인 -->
			<section class="m_template-component-item">
				<h3><b>텍스트 멀티라인</b><small>mm_form-textarea</small></h3>
				<template type="text/codehtml">
					<div class="mm_form-textarea">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<textarea class="textfield" data-text></textarea><i class="bg_text"></i>
							<span class="text_placeholder">플레이스홀더 2줄<br>플레이스홀더 2번째 줄</span>
						</label>
					</div>
					<div class="mm_form-textarea">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<textarea class="textfield" data-text="{ '_isResize': true }"></textarea><i class="bg_text"></i>
							<span class="text_placeholder">자동높이조절 기본형 4줄</span>
						</label>
					</div>
					<div class="mm_form-textarea">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<textarea class="textfield" data-text="{ '_isResize': true, '_resizeMin': 1, '_resizeMax': 5 }"></textarea><i class="bg_text"></i>
							<span class="text_placeholder">자동높이조절 제한설정 최소 1줄, 최대 5줄 샘플</span>
						</label>
					</div>
					<div class="mm_form-textarea">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<textarea class="textfield" data-text="{ '_resizeMin': 6, '_byte': 1000 }"></textarea><i class="bg_text"></i>
							<span class="text_placeholder">텍스트 입력 제한</span>
						</label>
					</div>
				</template>
			</section>
			<!-- // 텍스트 멀티라인 -->

			<!-- 셀렉트 -->
			<section class="m_template-component-item">
				<h3><b>셀렉트</b><small>mm_form-select</small></h3>
				<template type="text/codehtml">
					<div class="mm_form-select T=xs">
						<label>
							<select data-select>
								<option>셀렉트 2xs</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select T=sm">
						<label>
							<select data-select>
								<option>셀렉트 xs</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select T=lg">
						<label>
							<select data-select>
								<option>셀렉트 sm</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select">
						<label>
							<select data-select>
								<option>셀렉트 기본</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select">
						<label>
							<select data-select disabled>
								<option>비활성</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select T=wide">
						<label>
							<select data-select>
								<option>셀렉트 wide</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
				</template>
				<div class="m_template...note">
					<p>width와 height에 따라 클래스를 추가합니다.</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Class
								</th>
								<th scope="col">
									Attribute
								</th>
								<th scope="col">
									width
								</th>
								<th scope="col">
									height
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>T=2xs</td>
								<td>class</td>
								<td>108px</td>
								<td>-</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=xs</td>
								<td>class</td>
								<td>250px</td>
								<td>-</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=sm</td>
								<td>class</td>
								<td>460px</td>
								<td>-</td>
								<td>-</td>
							</tr>
							<tr>
								<td>&#160;</td>
								<td>&#160;</td>
								<td>100%</td>
								<td>23px</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=wide</td>
								<td>class</td>
								<td>100%</td>
								<td>34px</td>
								<td>-</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 셀렉트 -->

			<!-- 셀렉트 리스트 -->
			<section class="m_template-component-item">
				<h3><b>셀렉트 리스트</b><small>mm_select-list</small></h3>
				<template type="text/codehtml">
					<div class="mm_select-list">
						<ul>
							<li>
								<div class="mm_form-select T=xs">
									<label>
										<select data-select>
											<option>셀렉트 xs</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</li>
							<li>
								<div class="mm_form-select T=xs">
									<label>
										<select data-select>
											<option>셀렉트 xs</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</li>
							<li>
								<div class="mm_form-select T=xs">
									<label>
										<select data-select>
											<option>셀렉트 xs</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</li>
						</ul>
					</div>
					<div class="mm_select-list">
						<ul>
							<li>
								<div class="mm_form-select T=xs">
									<label>
										<select data-select>
											<option>셀렉트 xs</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</li>
							<li>
								<div class="mm_form-select T=sm">
									<label>
										<select data-select>
											<option>셀렉트 sm</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</li>
							<li>
								<div class="mm_form-select T=lg">
									<label>
										<select data-select>
											<option>셀렉트 lg</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</li>
						</ul>
					</div>
					<div class="mm_select-list T=fit">
						<ul>
							<li>
								<div class="mm_form-select">
									<label>
										<select data-select>
											<option>셀렉트 full</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</li>
							<li>
								<div class="mm_form-select">
									<label>
										<select data-select>
											<option>셀렉트 full</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</li>
							<li>
								<div class="mm_form-select">
									<label>
										<select data-select>
											<option>셀렉트 full</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</li>
						</ul>
					</div>
				</template>
				<div class="m_template...note">
					<p>셀렉트박스의 width가 equal 100% 일 경우 mm_select-list에 T=fit 클래스를 추가합니다. </p>
				</div>
			</section>
			<!-- // 셀렉트 리스트 -->

			<!-- 라디오 -->
			<section class="m_template-component-item">
				<h3><b>라디오</b><small>mm_form-radio</small></h3>
				<template type="text/codehtml">
					<label class="mm_form-radio">
						<input type="radio" name="dev_radio-basic" data-radio>
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">기본 라디오</span>
						</b>
					</label>
					<br>
					<label class="mm_form-radio">
						<input type="radio" name="dev_radio-disabled" data-radio checked disabled>
						<b class="mm_block">
							<i class="ico_form-radio"></i>
							<span class="text_label">비활성 라디오</span>
						</b>
					</label>
				</template>
			</section>
			<!-- // 라디오 -->

			<!-- 라디오 리스트 -->
			<section class="m_template-component-item">
				<h3><b>라디오 리스트</b><small>mm_radio-list</small></h3>
				<template type="text/codehtml">
					<div class="mm_radio-list">
						<ul>
							<li>
								<label class="mm_form-radio">
									<input type="radio" name="dev_radio-list" data-radio checked>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">일반</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-radio">
									<input type="radio" name="dev_radio-list" data-radio>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">정산</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-radio">
									<input type="radio" name="dev_radio-list" data-radio>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">시스템</span>
									</b>
								</label>
							</li>
						</ul>
					</div>
				</template>
			</section>
			<!-- // 라디오 리스트 -->

			<!-- 체크박스 -->
			<section class="m_template-component-item">
				<h3><b>체크박스</b><small>mm_form-check</small></h3>
				<template type="text/codehtml">
					<label class="mm_form-check">
						<input type="checkbox" data-check>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label">기본 체크박스</span>
						</b>
					</label>
					<!--
						<br>
						<label class="mm_form-check">
						<input type="checkbox" data-check disabled>
						<b class="mm_block">
						<i class="ico_form-check"></i>
						<span class="text_label">비활성 체크박스</span>
						</b>
						</label>
					-->
				</template>
			</section>
			<!-- // 체크박스 -->

			<!-- 체크박스 리스트 -->
			<section class="m_template-component-item">
				<h3><b>체크박스 리스트</b><small>mm_check-list</small></h3>
				<template type="text/codehtml">
					<div class="mm_check-list">
						<label class="mm_form-check">
							<input type="checkbox" name="dev_check-list" data-check="{ '_type': 'check_all' }">
							<b class="mm_block">
								<i class="ico_form-check"></i>
								<span class="text_label">체크박스 전체</span>
							</b>
						</label>
						<ul>
							<li>
								<label class="mm_form-check">
									<input type="checkbox" name="dev_check-list" data-check>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">체크박스1</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-check">
									<input type="checkbox" name="dev_check-list" data-check>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">체크박스2</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-check">
									<input type="checkbox" name="dev_check-list" data-check>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">체크박스3</span>
									</b>
								</label>
							</li>
						</ul>
						<p>선택된 개수: <span data-check="{ '_type': 'check_count', '_group': 'dev_check-list' }">0</span>개</p>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						<strong># 그룹화</strong><br>
						* name 속성을 사용<br>
						* name 대신 data-check 속성으로 { '_group': '이름' }을 사용할 수 있습니다.<br>
						* name 과 _group 을 함께 사용할 수 있고, 함께 사용할 때 _group 이 name 보다 우선순위로 적용됩니다.
						<br><br>
						<strong># 전체 체크박스</strong><br>
						* data-check 속성으로 { '_type': 'check_all' }을 설정합니다.<br>
						* data-check 속성으로 { '_min': 1 }처럼 최소 값을 적용하면 최소 값이 충족되었을 때 전체가 체크표시됩니다.
						<br><br>
						<strong># 개수 요소</strong><br>
						* data-check 속성으로 { '_type': 'check_count', '_group': 'name 값' }을 설정합니다.
					</p>
				</div>
			</section>
			<!-- // 체크박스 리스트 -->

			<!-- 데이트픽커 -->
			<section class="m_template-component-item">
				<h3><b>데이트픽커</b><small>data-datepicker</small></h3>
				<template type="text/codehtml">
					<div class="mm_form-text T=calendar">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
							<span class="text_placeholder">날짜선택</span>
							<i class="ico_datepicker-calendar"></i>
						</label>
					</div>

					<div data-datepicker="{ 'config': { '_isInline': true, '_multiple': 3, '_firstDay': 3, '_format': 'YY년 MM월 DD일' }, 'onSelect': 'datepickerCallback' }"></div>

					<div class="mm_form-text T=calendar">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input type="text" class="textfield" data-text data-datepicker="{ 'config': { '_isMonth': true } }"><i class="bg_text"></i>
							<span class="text_placeholder">월선택</span>
							<i class="ico_datepicker-calendar"></i>
						</label>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						<strong># 날짜 변경</strong><br>
						* data-datepicker="{ '옵션': 값 }"<br>
						* mm.datepicker.change(element, date) 실행으로 지정날짜로 변경할 수 있습니다.<br>
						* 필수 전달 값은 (element, date) 이며, date의 형식은 config의 _format 형식과 일치해야 합니다.
					</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Option
								</th>
								<th scope="col">
									Type
								</th>
								<th scope="col">
									Default
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>_isMonth</td>
								<td>boolean</td>
								<td>false</td>
								<td>월선택 (기간/범위설정, 달력 2개이상 노출 안됨)</td>
							</tr>
							<tr>
								<td>_format</td>
								<td>String</td>
								<td>YYYY-MM-DD</td>
								<td>날짜형식</td>
							</tr>
							<tr>
								<td>weekdays</td>
								<td>Array</td>
								<td>['일', '월', '화', '수', '목', '금', '토']</td>
								<td>요일 배열</td>
							</tr>
							<tr>
								<td>_firstDay</td>
								<td>Number</td>
								<td>0</td>
								<td>시작 요일 설정 (0~6, weekdays 옵션의 배열 기준)</td>
							</tr>
							<tr>
								<td>_multiple</td>
								<td>Number</td>
								<td>1</td>
								<td>여러 달 표시</td>
							</tr>
							<tr>
								<td>_isInline</td>
								<td>boolean</td>
								<td>false</td>
								<td>인라인 지정</td>
							</tr>
							<tr>
								<td>_disableBeforeDate</td>
								<td>String</td>
								<td>null</td>
								<td>지정일 이전 날짜 Disable 처리<br>지정 날짜의 형식은 항상 _format과 같아야 합니다.</td>
							</tr>
							<tr>
								<td>_disableAfterDate</td>
								<td>String</td>
								<td>null</td>
								<td>지정일 이후 날짜 Disable 처리<br>지정 날짜의 형식은 항상 _format과 같아야 합니다.</td>
							</tr>
							<tr>
								<td>onSelect</td>
								<td>string/function</td>
								<td></td>
								<td>캘린더 화면에서 날짜 선택 후 실행되는 콜백입니다.</td>
							</tr>
							<tr>
								<td>onSelectParams</td>
								<td>[]</td>
								<td></td>
								<td>캘린더 화면에서 날짜 선택 후 실행되는 콜백입니다.</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 데이트픽커 -->


			<!-- 컬러픽커 -->
			<section class="m_template-component-item">
				<h3><b>컬러픽커</b><small>mm_form-color</small></h3>
				<template type="text/codehtml">
					<div class="mm_form-color" data-colorpicker>
						<input type="text" class="colorfield" value="#FFFFFF" readonly>
						<button type="button" class="btn_picker">
							<i class="bg_color" style="background:#FFF"></i><b class="mm_ir-blind">배경 색상</b>
						</button>
					</div>
				</template>
			</section>
			<!-- // 컬러픽커 -->

			<!-- 파일 업로드 -->
			<section class="m_template-component-item">
				<h3><b>파일 업로드</b><small>mm_form-file</small></h3>
				<template type="text/codehtml">
					<div class="mm_form-file">
						<button type="button" class="btn_remove-file">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
						</button>
						<label>
							<input type="file" data-file="{ '_default': 'testfile.txt' }">
							<span class="text_path"></span>
							<span class="mm_btn T=line T=light text_label">파일첨부</span>
						</label>
					</div>
					<div class="mm_form-file">
						<button type="button" class="btn_remove-file">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
						</button>
						<label>
							<input type="file" accept=".xls, .txt" data-file>
							<span class="text_path">.xls, .txt 확장자만 등록 가능 샘플</span>
							<span class="mm_btn T=line T=light text_label">파일첨부</span>
						</label>
					</div>
					<div class="mm_form-file">
						<button type="button" class="btn_remove-file">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
						</button>
						<label>
							<input type="file" accept=".zip" data-file="{ '_fileName': 'product_image_uploads', '_fileSize': 1000 }">
							<span class="text_path"></span>
							<span class="mm_btn T=line T=light text_label">파일첨부</span>
						</label>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						* data-file의 옵션으로 '_default': '기본값' 설정할 수 있습니다.<br>
						* input에 accept로 확장자를 지정할 수 있습니다.<br>
						* data-file의 옵션으로 '_fileName'(파일명)과 '_fileSize'(파일 용량)를 지정할 수 있습니다.
					</p>
				</div>
			</section>
			<!-- // 파일 업로드 -->

			<!-- 이미지 업로드 -->
			<section class="m_template-component-item">
				<h3><b>이미지 업로드</b><small>mm_form-image</small></h3>
				<template type="text/codehtml">
					<div class="mm_form-image">
						<div class="mm_form-image-preview"></div>
						<label>
							<input type="file" accept="image/*" data-file="{ '_default': '/public/images/_sample/product_1.jpg' }">
							<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
						</label>
						<button type="button" class="btn_remove-file">
							<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
						</button>
					</div>
					기본 값 fit
					<div class="mm_form-image">
						<div class="mm_form-image-preview"></div>
						<label>
							<input type="file" accept="image/*" data-file="{ '_imageSize': 'full' }">
							<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
						</label>
						<button type="button" class="btn_remove-file">
							<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
						</button>
					</div>
					미리보기 사이즈 full
					<div class="mm_form-image">
						<div class="mm_form-image-preview"></div>
						<label>
							<input type="file" accept="image/*" data-file="{ '_imageSize': 'contain' }">
							<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
						</label>
						<button type="button" class="btn_remove-file">
							<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
						</button>
					</div>
					미리보기 사이즈 contain
					<div class="mm_form-image">
						<div class="mm_form-image-preview"></div>
						<label>
							<input type="file" accept="image/*" data-file="{ '_imageSize': 'cover', '_imagePosition': 'center top' }">
							<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
						</label>
						<button type="button" class="btn_remove-file">
							<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
						</button>
					</div>
					미리보기 사이즈 cover, center top
				</template>
				<div class="m_template...note">
					<p>
						<strong># 초기화 트리거</strong><br>
						* mm.event.dispatch([file], 'update');<br>
						* 페이지에 처음 접속했을 때 실행됩니다.<br>
						* 그 외 초기화가 필요하거나 별도로 [data-file] 요소를 생성할 경우 실행합니다.<br>
						* mm.form.update(대상 또는 부모)으로 사용할 수 있습니다.<br><br>

						<strong># 값 전달</strong><br>
						* mm.data.get([file], 'data-file').file: [file]의 전달 값(type object / File)입니다.<br>
						* [file].file는 선택 취소했을 때 값이 사라지는 이슈가 있어 mm.data.get([file], 'data-file').file을 form data로 변환하여 사용합니다.<br>
						* mm.data.get([file], 'data-file').file을 가지고 있는 요소에는 S=image-on 클래스가 추가됩니다.<br>
						* mm.data.get([file], 'data-file').file에는 [file].file와 FileReader로 로드한 result: data...base64, width, height, orientation 값을 추가로 포함하고 있습니다.<br>
						* mm.data.get([file], 'data-file').file.result는 원본, mm.data.get([file], 'data-file').file.view.result는 미리보기 이미지와 같은 비율로 변환된 이미지 데이터가 저장됩니다.<br>
						* 파일 선택 전 미리보기(data-file: { _default })가 있을 때에는 name 값으로 파일명이 아닌 경로가 들어가 있고, type 값이 없습니다.<br>
						* 미리보기를 삭제할 경우 값은 {}입니다.<br><br>

						<strong># 파일(이미지) 속성 값</strong><br>
						data-file: {}
					</p>
					<table>
						<colgroup>
							<col style="width:150px;">
							<col style="width:150px;">
							<col style="width:150px;">
							<col>
						</colgroup>
						<thead>
							<tr>
								<th scope="col">
									Options
								</th>
								<th scope="col">
									Type
								</th>
								<th scope="col">
									Default
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>_fileName</td>
								<td>string</td>
								<td>&#160;</td>
								<td><p>이름을 제한합니다.</p></td>
							</tr>
							<tr>
								<td>_fileSize</td>
								<td>number</td>
								<td>&#160;</td>
								<td><p>용량을 제한합니다 (단위는 kb)</p></td>
							</tr>
							<tr>
								<td>_orientation</td>
								<td>string</td>
								<td>&#160;</td>
								<td><p>이미지를 선택할 때 가로/세로 비율을 제한합니다.<br>_width, _height 값이 있으면 해당 비율로 자동으로 적용됩니다.<br>portrait (세로가 긴 이미지만 노출), landscape (가로가 긴 이미지만 노출), square (정방형 이미지만 노출)</p></td>
							</tr>
							<tr>
								<td>_imageSize</td>
								<td>string</td>
								<td>contain</td>
								<td><p>contain(영역 안에 전체가 보여지는 비율로 노출), cover(영역 안에 꽉차게 노출), full(실제 사이즈로 노출), fit(영역 사이즈를 max로 하여 실제 비율로 노출)</p></td>
							</tr>
							<tr>
								<td>_imagePosition</td>
								<td>string</td>
								<td>center center</td>
								<td><p>background-position과 동일한 방식으로 _imageSize가 cover, contain 일 때 이미지 노출위치를 설정합니다.</p></td>
							</tr>
							<tr>
								<td>_imageBgColor</td>
								<td>string</td>
								<td>#fff</td>
								<td><p>#fff(기본 값), _imageSize가 cover, contain 일 때 이미지 여백 색상을 설정합니다.</p></td>
							</tr>
							<tr>
								<td>_default</td>
								<td>string</td>
								<td>&#160;</td>
								<td><p>초기 값으로 미리보기에 노출할 파일 경로를 설정합니다.</p></td>
							</tr>
							<tr>
								<td>_classOn</td>
								<td>string</td>
								<td>S=image-on</td>
								<td><p>'S=image-on'</p></td>
							</tr>
							<tr>
								<td>onChange</td>
								<td>string/function</td>
								<td>&#160;</td>
								<td>
									<p>
										change 이벤트 이후 호출되는 함수입니다.<br>
										파라미터로 [file]을 전달합니다.<br>
										change 이벤트 + [file].file 조합과 다른 점으로 파일 선택을 취소했을 때 내용이 삭제되지 않고 기존 내용 유지합니다.<br>
									</p>
								</td>
							</tr>
							<tr>
								<td>onChangeParams</td>
								<td>array</td>
								<td>&#160;</td>
								<td><p>[]</p></td>
							</tr>
							<tr>
								<td>onCancel</td>
								<td>string/function</td>
								<td>&#160;</td>
								<td>
									<p>
										파일 찾기 취소를 하면 호출되는 함수입니다.<br>
										파라미터로 [file]을 전달합니다.<br>
									</p>
								</td>
							</tr>
							<tr>
								<td>onCancelParams</td>
								<td>array</td>
								<td>&#160;</td>
								<td><p>[]</p></td>
							</tr>
							<tr>
								<td>onError</td>
								<td>string/function</td>
								<td>&#160;</td>
								<td>
									<p>
										파일 선택 후 오류가 발생했을 때 호출되는 함수입니다.<br>
										파라미터로 [file]을 전달합니다.<br>
									</p>
								</td>
							</tr>
							<tr>
								<td>onErrorParams</td>
								<td>array</td>
								<td>&#160;</td>
								<td><p>[]</p></td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 이미지 업로드 -->

			<!-- 멀티 업로드 -->
			<section class="m_template-component-item">
				<h3><b>멀티 업로드</b><small>mm_form-multiple</small></h3>
				<template type="text/codehtml">
					<div class="mm_form-multiple">
						<ul>
							<li>
								<div class="mm_form-image">
									<div class="mm_form-image-preview"></div>
									<label>
										<input type="file" accept="image/*" data-file>
										<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
									</label>
									<button type="button" class="btn_remove-file">
										<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
									</button>
								</div>
							</li>
						</ul>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<label class="mm_btn T=xl T=secondary btn_select-multiple">
									<input type="file" accept="image/*" data-multiple="{ '_max': 5, '_isDrop': true, 'defaults': ['/public/images/_sample/product_.jpg','/public/images/_sample/product_2.jpg', '/public/images/_sample/product_3.jpg'] }" multiple>
									<i class="ico_image-multiple"></i><b>한번에 여러장 선택</b>
								</label>
								<button type="button" class="mm_btn T=xl T=line btn_remove-all">
									<b><i class="ico_image-remove-all"></i>전체삭제</b>
								</button>
								<div class="mm_form-multiple-sortable">
									<button type="button" class="mm_btn T=xl btn_sort">
										<b><i class="ico_image-sortable T=sm"></i>순서 편집</b>
									</button>
									<button type="button" class="mm_btn T=xl T=line btn_sort-cancel">
										<b><i class="ico_image-sortable-cancel"></i>순서 편집 취소</b>
									</button>
									<button type="button" class="mm_btn T=xl T=line T=secondary btn_sort-apply">
										<b><i class="ico_image-sortable-apply"></i>순서 적용</b>
									</button>
								</div>
							</div>
						</div>
					</div>
					<br><br>
					드래그앤드롭 가능
					<div class="mm_form-multiple">
						<ul>
							<li>
								<div class="mm_form-image">
									<div class="mm_form-image-preview"></div>
									<label>
										<input type="file" accept="image/*" data-file="{ '_imageSize': 'cover' }">
										<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
									</label>
									<button type="button" class="btn_remove-file">
										<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
									</button>
								</div>
							</li>
						</ul>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<label class="mm_btn T=xl T=secondary btn_select-multiple">
									<input type="file" accept="image/*" data-multiple="{ '_max': 3, '_isMax': true, '_isAuto': false, '_isDrop': true }" multiple>
									<i class="ico_image-multiple"></i><b>한번에 여러장 선택</b>
								</label>
								<button type="button" class="mm_btn T=xl T=line btn_remove-all">
									<b><i class="ico_image-remove-all"></i>전체삭제</b>
								</button>
								<div class="mm_form-multiple-sortable">
									<button type="button" class="mm_btn T=xl btn_sort">
										<b><i class="ico_image-sortable T=sm"></i>순서 편집</b>
									</button>
									<button type="button" class="mm_btn T=xl T=line btn_sort-cancel">
										<b><i class="ico_image-sortable-cancel"></i>순서 편집 취소</b>
									</button>
									<button type="button" class="mm_btn T=xl T=line T=secondary btn_sort-apply">
										<b><i class="ico_image-sortable-apply"></i>순서 적용</b>
									</button>
								</div>
							</div>
						</div>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						<strong># 여러 파일을 관리할 경우</strong><br>
						* .mm_form-multiple 구조로 사용합니다.<br>
						* li > .mm_form-image 1세트는 기본 값으로 세팅됩니다(복제용)<br>
						* [file][data-multiple] 요소는 다중 선택용으로 실제 값과 다를 수 있습니다.<br>
						* 실제 값은 각각의 li > mm.data.get([file], 'data-file').file를 사용합니다
						<br><br>

						<strong># 초기화 트리거</strong><br>
						* mm.event.dispatch([multiple], 'update');<br>
						* 페이지에 처음 접속했을 때 실행됩니다.<br>
						* 그 외 초기화가 필요하거나 별도로 .mm_form-multiple 요소를 dom에 생성할 경우 실행합니다.<br>
						* mm.form.update(대상 또는 부모)으로 사용할 수 있습니다.
						<br><br>

						<strong># 속성 값</strong><br>
						* data-multiple: { 'option': 값 }
					</p>
					<table>
						<colgroup>
							<col style="width:150px">
							<col style="width:150px">
							<col style="width:150px">
							<col>
						</colgroup>
						<thead>
							<tr>
								<th scope="col">
									Options
								</th>
								<th scope="col">
									type
								</th>
								<th scope="col">
									Default
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>_isMax</td>
								<td>boolean</td>
								<td>false</td>
								<td><p>리스트 항목 최대 개수를 유지합니다.</p></td>
							</tr>
							<tr>
								<td>_isAuto</td>
								<td>boolean</td>
								<td>true</td>
								<td><p>빈 파일을 자동으로 추가/삭제 합니다.</p></td>
							</tr>
							<tr>
								<td>_max</td>
								<td>Number</td>
								<td>9</td>
								<td><p>설정된 값까지만 리스트 항목을 생성합니다.</p></td>
							</tr>
							<tr>
								<td>_isDrop</td>
								<td>boolean</td>
								<td>false</td>
								<td><p>드래그앤드롭으로 추가를 허용합니다.</p></td>
							</tr>
							<tr>
								<td>defaults</td>
								<td>array</td>
								<td>&#160;</td>
								<td><p>초기 값으로 미리보기에 노출할 파일 경로를 설정합니다.</p></td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 멀티 업로드 -->

			<!-- 에디터 -->
			<section class="m_template-component-item">
				<h3><b>에디터</b><small>mm_editor</small></h3>
				<template type="text/codehtml">
					<div class="mm_editor"></div>
				</template>
				<div class="m_template...note">
					<p>에디터 사용 페이지 하단에 스크립트 추가해주세요.</p>
				</div>
			</section>
			<!-- // 에디터 -->
		</article>
		<!-- // 폼 유형 -->

		<!-- 폼 믹스 -->
		<article id="formmix">
			<h2><b>폼 믹스</b></h2>

			<!-- 기본 -->
			<section class="m_template-component-item">
				<h3><b>기본</b><small>mm_form_mix-linked</small></h3>
				<template type="text/codehtml">
					<div class="mm_form_mix-linked">
						<span class="text_linked">진열브랜드</span>
						<div class="mm_form-text T=xs">
							<button type="button" class="btn_text-clear">
								<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
							</button>
							<label>
								<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
								<span class="text_placeholder">구스파탈</span>
							</label>
						</div>
					</div>
					<div class="mm_form_mix-linked  T=fit">
						<span class="text_linked">진열브랜드</span>
						<div class="mm_form-text">
							<button type="button" class="btn_text-clear">
								<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
							</button>
							<label>
								<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
								<span class="text_placeholder">구스파탈</span>
							</label>
						</div>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						* display: inline-grid;로 줄바꿈의 경우 br태그를 사용합니다.<br>
						* 내부 폼요소의 width를 T=00으로 잡아주고 full사이즈의 경우 mm_form_mix-linked에 T=fit 클래스를 추가합니다.
					</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Option
								</th>
								<th scope="col">
									Attribute
								</th>
								<th scope="col">
									max-width
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>&#160;</td>
								<td>class</td>
								<td>-</td>
								<td>-</td>
							</tr>
							<tr>
								<td>T=fit</td>
								<td>class</td>
								<td>none</td>
								<td>내부 요소 중 1개 이상 width가 full 일 경우</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<!-- // 기본 -->

			<!-- 이미지 -->
			<section class="m_template-component-item">
				<h3><b>이미지</b><small>mm_form_mix-image</small></h3>
				<template type="text/codehtml">
					<div class="mm_form_mix-image">
						<div class="mm_form-image">
							<div class="mm_form-image-preview"></div>
							<label>
								<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
								<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
							</label>
							<button type="button" class="btn_remove-file">
								<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
							</button>
						</div>
						<div class="mm_form-text">
							<button type="button" class="btn_text-clear">
								<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
							</button>
							<label>
								<input type="text" class="textfield" data-text><i class="bg_text"></i>
								<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
							</label>
						</div>
						<div class="mm_note T=bottom">
							<ul>
								<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
								<li>권장 사이즈는 W 1360px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
								<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
							</ul>
						</div>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						* mm_form-image는 단독사용이 가능합니다.<br>
						* 이미지 업로드 관련하여 대체 텍스트 입력란 및 하단 안내문구가 들어갈 경우 mm_form_mix-image로 감싸줍니다.
					</p>
				</div>
			</section>
			<!-- // 이미지 -->

			<!-- 금액 -->
			<!--
				<section class="m_template-component-item">
				<h3><b>금액</b><small>mm_form_mix-price</small></h3>
				<script type="text/codehtml">
				<div class="mm_form_mix-price">
				<div class="mm_form-text">
				<button type="button" class="btn_text-clear"><i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b></button>
				<label>
				<input type="text" class="textfield" data-text><i class="bg_text"></i>
				<span class="text_placeholder mm_ir-blind">소비자단가</span>
				</label>
				</div>
				<span class="text_linked">원<span>(최초 Tag 가격)</span></span>
				</div>
				</script>
				</section>
			-->
			<!-- // 금액 -->

			<!-- 기간검색 -->
			<section class="m_template-component-item">
				<h3><b>기간검색</b><small>mm_form_mix-period</small></h3>
				<template type="text/codehtml">
					<div class="mm_form_mix-period">
						<div class="mm_form-select T=xs">
							<label>
								<select data-select>
									<option>등록일시</option>
								</select>
								<b class="text_selected"></b>
								<i class="ico_form-select"></i>
							</label>
						</div>
						<div class="mm_form-text T=calendar">
							<button type="button" class="btn_text-clear">
								<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
							</button>
							<label>
								<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
								<span class="text_placeholder">시작일</span>
								<i class="ico_datepicker-calendar"></i>
							</label>
						</div>
						<b class="text_tilde">~</b>
						<div class="mm_form-text T=calendar">
							<button type="button" class="btn_text-clear">
								<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
							</button>
							<label>
								<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
								<span class="text_placeholder">종료일</span>
								<i class="ico_datepicker-calendar"></i>
							</label>
						</div>
						<div class="mm_form-select T=xs">
							<label>
								<select data-select>
									<option>오늘</option>
									<option>최근 3일</option>
									<option>최근 1주일</option>
									<option>최근 1개월</option>
									<option>최근 3개월</option>
								</select>
								<b class="text_selected"></b>
								<i class="ico_form-select"></i>
							</label>
						</div>
					</div>

					<div class="mm_form_mix-period">
						<div class="mm_form-select T=xs">
							<label>
								<select data-select>
									<option>2021</option>
								</select>
								<b class="text_selected"></b>
								<i class="ico_form-select"></i>
							</label>
						</div>
						<b class="text_tilde">~</b>
						<div class="mm_form-select T=xs">
							<label>
								<select data-select>
									<option>2021</option>
								</select>
								<b class="text_selected"></b>
								<i class="ico_form-select"></i>
							</label>
						</div>
					</div>

					<div class="mm_form_mix-period">
						<div class="mm_form-select T=time">
							<label>
								<select data-select>
									<option>0</option>
								</select>
								<b class="text_selected"></b>
								<i class="ico_form-select"></i>
							</label>
						</div>
						<span class="text_linked">시</span>
						<div class="mm_form-select T=time">
							<label>
								<select data-select>
									<option>0</option>
								</select>
								<b class="text_selected"></b>
								<i class="ico_form-select"></i>
							</label>
						</div>
						<span class="text_linked">분</span>
						<b class="text_tilde">~</b>
						<div class="mm_form-select T=xs">
							<label>
								<select data-select>
									<option>1시간</option>
								</select>
								<b class="text_selected"></b>
								<i class="ico_form-select"></i>
							</label>
						</div>
					</div>

					<div class="mm_form_mix-period">
						<ul>
							<li>
								<label class="mm_form-check">
									<input type="checkbox" name="dev_period-week" data-check>
									<b class="mm_block">
										<span class="text_label">월</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-check">
									<input type="checkbox" name="dev_period-week" data-check>
									<b class="mm_block">
										<span class="text_label">화</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-check">
									<input type="checkbox" name="dev_period-week" data-check>
									<b class="mm_block">
										<span class="text_label">수</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-check">
									<input type="checkbox" name="dev_period-week" data-check>
									<b class="mm_block">
										<span class="text_label">목</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-check">
									<input type="checkbox" name="dev_period-week" data-check>
									<b class="mm_block">
										<span class="text_label">금</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-check">
									<input type="checkbox" name="dev_period-week" data-check>
									<b class="mm_block">
										<span class="text_label">토</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-check">
									<input type="checkbox" name="dev_period-week" data-check>
									<b class="mm_block">
										<span class="text_label">일</span>
									</b>
								</label>
							</li>
						</ul>
					</div>
				</template>
			</section>
			<!-- // 기간검색 -->

			<!-- 배송주소 -->
			<section class="m_template-component-item">
				<h3><b>배송주소</b><small>mm_form_mix-address</small></h3>
				<template type="text/codehtml">
					<div class="mm_form_mix-address">
						<div class="mm_form_mix-linked">
							<div class="mm_form-text T=xs">
								<button type="button" class="btn_text-clear">
									<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
								</button>
								<label>
									<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
									<span class="text_placeholder mm_ir-blind">우편번호</span>
								</label>
							</div>
							<a href="/postcode" class="mm_btn T=line btn_postcode" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>우편번호 찾기</b></a>
						</div>
						<div class="mm_form-text T=lg">
							<button type="button" class="btn_text-clear">
								<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
							</button>
							<label>
								<input type="text" class="textfield" data-text readonly><i class="bg_text"></i>
								<span class="text_placeholder mm_ir-blind">검색주소</span>
							</label>
						</div>
						<div class="mm_form-text T=lg">
							<button type="button" class="btn_text-clear">
								<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
							</button>
							<label>
								<input type="text" class="textfield" data-text><i class="bg_text"></i>
								<span class="text_placeholder">상세 주소를 입력하세요.</span>
							</label>
						</div>
					</div>
				</template>
			</section>
			<!-- // 배송주소 -->
		</article>
		<!-- 폼 믹스 -->

		<!-- 폼 테이블 -->
		<article id="formTable">
			<h2><b>폼 테이블</b></h2>

			<!-- 폼 테이블 -->
			<section class="m_template-component-item">
				<h3><b>폼 테이블</b><small>mm_form_box, mm_form_box-caption, .mm_form_box-unit / mm_form</small></h3>
				<template type="text/codehtml">
					<!-- 폼영역 -->
					<div class="mm_form_box">
						<!-- 폼 상단 -->
						<div class="mm_form_box-caption">
							<h3 class="mm_heading">
								<b>테이블 제목<strong>strong 태그</strong></b>
							</h3>
							<div class="mm_lside">
								<ul class="mm_table-status">
									<li>상품 수<b class="mm_text-secondary"><strong class="text_num">1234</strong>개</b></li>
									<li>전체<b class="mm_text-secondary"><strong class="text_num">1</strong>개</b></li>
								</ul>
								<div class="mm_note">
									<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
								</div>
							</div>
						</div>
						<div class="mm_form_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn">
											<b>기능버튼</b>
										</button>
										<button type="button" class="mm_btn">
											<b>기능버튼</b>
										</button>
									</div>
								</div>
								<div class="mm_note">
									<p>mm_btn_box + mm_note</p>
								</div>
							</div>
							<div class="mm_rside">
								<p class="text_required">
									<i class="ico_required" title="필수입력"></i>로 표시된 항목은 필수입력입니다.
								</p>
							</div>
						</div>
						<!-- // 폼 상단 -->

						<div class="mm_form">
							<table>
								<tbody>
									<tr>
										<th></th><td></td><th></th><td></td>
									</tr>
									<tr>
										<th scope="row">
											<b>타이틀</b>
										</th>
										<td><p>기본 문구</p></td>
										<th scope="row">
											<b>텍스트 링크</b>
										</th>
										<td><a href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>텍스트 링크</b></a></td>
									</tr>
									<tr>
										<th scope="row">
											<b>가격</b>
										</th>
										<td>
											<p class="text_price">
												10,000
											</p>
										</td>
										<th scope="row">
											<b>내용없음</b>
										</th>
										<td>-</td>
									</tr>
									<tr>
										<th scope="row">
											<b>라디오 리스트</b>
										</th>
										<td>
											<div class="mm_radio-list">
												<ul>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-list" data-radio checked>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">라디오</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-list" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">라디오</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-radio">
															<input type="radio" name="dev_radio-list" data-radio>
															<b class="mm_block">
																<i class="ico_form-radio"></i>
																<span class="text_label">라디오</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
										<th scope="row">
											<b>체크 리스트</b>
										</th>
										<td>
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-sort" data-check checked>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">체크</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-sort" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">체크</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input type="checkbox" name="dev_check-sort" data-check>
															<b class="mm_block">
																<i class="ico_form-check"></i>
																<span class="text_label">체크</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>데이트픽커</b>
										</th>
										<td>
											<div class="mm_form_mix-period">
												<div class="mm_form-text T=calendar">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
														<span class="text_placeholder">시작일</span>
														<i class="ico_datepicker-calendar"></i>
													</label>
												</div>
												<b class="text_tilde">~</b>
												<div class="mm_form-text T=calendar">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
														<span class="text_placeholder">종료일</span>
														<i class="ico_datepicker-calendar"></i>
													</label>
												</div>
											</div>
										</td>
										<th scope="row">
											<b>컬러픽커</b>
										</th>
										<td>
											<div class="mm_form-color" data-colorpicker>
												<input type="text" class="colorfield" value="#FFFFFF" readonly>
												<button type="button" class="btn_picker">
													<i class="bg_color" style="background:#FFF"></i><b class="mm_ir-blind">배경 색상</b>
												</button>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>mm_form-text data-text="{ '_byte': 00 }"</b>
										</th>
										<td colspan="3">
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 30 }"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">최대 30자 입력</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>마진율(%)</b>
										</th>
										<td colspan="3">
											<!-- (D) 셀러 선택 시 해당 셀러에 설정된 마진율을 노출합니다. -->
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder">최대 100.0</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>폼믹스 + 안내문구<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-text T=lg">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text minlength="4" maxlength="16"><i class="bg_text"></i>
														<span class="text_placeholder mm_ir-blind">사용자 아이디 입력</span>
													</label>
												</div>
												<button type="button" class="mm_btn">
													<b>중복체크</b>
												</button>
												<p class="text_valid">
													사용가능
												</p>
											</div>
											<div class="mm_note">
												<p>영문/특수문자/숫자 4~16자 이하, 특수문자는 _ 만 가능합니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>폼 + 폼<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-text T=lg">
												<button type="button" class="btn_text-pw">
													<i class="ico_hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
												</button>
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="password" class="textfield" data-text minlength="8" maxlength="16"><i class="bg_text"></i>
													<span class="text_placeholder">변경할 비밀번호 입력</span>
												</label>
											</div>
											<div class="mm_form-text T=lg">
												<button type="button" class="btn_text-pw">
													<i class="ico_hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
												</button>
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="password" class="textfield" data-text minlength="8" maxlength="16"><i class="bg_text"></i>
													<span class="text_placeholder">비밀번호 한번 더 입력</span>
												</label>
											</div>
											<div class="mm_note">
												<p>영문/특수문자/숫자 2가지 혼합 사용 시 10~16자 이하, 3가지 이상 혼합 사용 시 8~16자 이하, 대·소문자를 구분합니다.</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>계좌 정보<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_form-select T=sm">
												<label>
													<select data-select>
														<option>은행을 선택하세요.</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_form-text">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text="{ '_byte': 50 }"><i class="bg_text"></i>
													<span class="text_placeholder">예금주를 입력하세요.</span>
												</label>
											</div>
											<div class="mm_form-text T=lg">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="20"><i class="bg_text"></i>
													<span class="text_placeholder">계좌번호를 입력하세요.(숫자만 입력)</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>첨부파일(이미지)</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<p class="text_linked text_file">
													SENDBILL.jpg
												</p>
												<a class="mm_btn T=xs T=line T=light" href="#" download><b>다운로드</b></a>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>중간 관리자/셀러 선택<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_selected">
												<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
												<a class="mm_btn T=line" href="/search/middle-single" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>중간 관리자 검색</b></a>
												<ul>
													<li>
														<b>중간 관리자 A</b>
														<button type="button" class="btn_remove">
															<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
														</button>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>중간 관리자/셀러 선택<i class="ico_required" title="필수입력"></i></b>
										</th>
										<td colspan="3">
											<div class="mm_selected">
												<!-- (D) 검색 팝업에서 선택 적용 시 'ul' 영역을 노출합니다. -->
												<a class="mm_btn T=line" href="/search/seller-single" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>셀러 검색</b></a>
												<ul>
													<li>
														<b>셀러 A</b>
														<button type="button" class="btn_remove">
															<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
														</button>
													</li>
													<li>
														<b>셀러 A</b>
														<button type="button" class="btn_remove">
															<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
														</button>
													</li>
													<li>
														<b>셀러 A</b>
														<button type="button" class="btn_remove">
															<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
														</button>
													</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>mm_form-image 단독 사용</b>
										</th>
										<td colspan="3">
											<div class="mm_form-image">
												<div class="mm_form-image-preview"></div>
												<label>
													<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
													<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
												</label>
												<button type="button" class="btn_remove-file">
													<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
												</button>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>mm_form_mix-image로 묶임</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-image">
												<div class="mm_form-image">
													<div class="mm_form-image-preview"></div>
													<label>
														<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
														<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
													</label>
													<button type="button" class="btn_remove-file">
														<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
												</div>
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
													</label>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
														<li>권장 사이즈는 W 228px * H 228px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>mm_form-multiple</b>
										</th>
										<td colspan="3">
											<div class="mm_form-multiple">
												<ul>
													<li>
														<div class="mm_form-image">
															<div class="mm_form-image-preview"></div>
															<label>
																<input type="file" accept="image/*" data-file="{ '_imageSize': 'cover' }">
																<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
															</label>
															<button type="button" class="btn_remove-file">
																<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
															</button>
														</div>
													</li>
												</ul>
												<div class="mm_btn_box">
													<div class="mm_inline">
														<label class="mm_btn T=xl T=secondary btn_select-multiple">
															<input type="file" accept="image/*" data-multiple="{ '_max': 3, '_isMax': true, '_isAuto': false, '_isDrop': true }" multiple>
															<i class="ico_image-multiple"></i><b>한번에 여러장 선택</b>
														</label>
														<button type="button" class="mm_btn T=xl T=line btn_remove-all">
															<b><i class="ico_image-remove-all"></i>전체삭제</b>
														</button>
														<div class="mm_form-multiple-sortable">
															<button type="button" class="mm_btn T=xl btn_sort">
																<b><i class="ico_image-sortable T=sm"></i>순서 편집</b>
															</button>
															<button type="button" class="mm_btn T=xl T=line btn_sort-cancel">
																<b><i class="ico_image-sortable-cancel"></i>순서 편집 취소</b>
															</button>
															<button type="button" class="mm_btn T=xl T=line T=secondary btn_sort-apply">
																<b><i class="ico_image-sortable-apply"></i>순서 적용</b>
															</button>
														</div>
													</div>
												</div>
											</div>
											<div class="mm_note T=bottom">
												<ul>
													<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
													<li>권장 사이즈는 W 228px * H 228px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
													<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배너 이미지 등록 전용<br>(비율에 맞게 미리보기 크롭)</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-image">
												<div class="mm_form-image T=banner">
													<div class="mm_form-image-preview"></div>
													<label>
														<!-- (D) 고정 이미지 사이즈를 data-file의 _imageRatio 값을 width/height 형식으로 넣어주세요(단위px) -->
														<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000, '_imageRatio': '1000/500' }">
														<b class="mm_form-image-box mm_btn"><span>이미지 선택</span></b>
													</label>
													<button type="button" class="btn_remove-file">
														<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
												</div>
												<div class="mm_form-text">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text><i class="bg_text"></i>
														<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
													</label>
												</div>
												<div class="mm_note T=bottom">
													<ul>
														<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
														<li>이미지 사이즈는 W 000px * H 000px 이고, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
														<li>이미지 사이즈가 다르면, 비율에 맞게 크롭되어 저장됩니다.</li>
														<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
													</ul>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>mm_form_mix-image<br>+ (de)syncer<br>+ mm_form-table</b>
										</th>
										<td colspan="3">
											<label class="mm_form-check">
												<input type="checkbox" data-check="{ 'desyncer': '.mm_desyncer-pc-banner' }" checked>
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">Mobile 이미지와 동일한 이미지 사용</span>
												</b>
											</label>
											<!-- (D) "Mobile 이미지와 동일한 이미지 사용" 체크 해제 시 .mm_desyncer-pc-banner 영역이 노출됩니다. -->
											<div class="mm_desyncer-pc-banner">
												<div class="mm_form_mix-image">
													<div class="mm_form-image">
														<div class="mm_form-image-preview"></div>
														<label>
															<input type="file" accept=".jpg, .png" data-file="{ '_fileSize': 2000 }">
															<b class="mm_form-image-box"><i class="ico_image-add"></i><span class="mm_ir-blind">이미지 등록하기</span></b>
														</label>
														<button type="button" class="btn_remove-file">
															<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
														</button>
													</div>
													<div class="mm_form-text">
														<button type="button" class="btn_text-clear">
															<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
														</button>
														<label>
															<input type="text" class="textfield" data-text><i class="bg_text"></i>
															<span class="text_placeholder">대체 텍스트를 입력하세요.</span>
														</label>
													</div>
													<div class="mm_note T=bottom">
														<ul>
															<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
															<li>권장 사이즈는 W 182px * H 182px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
															<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
														</ul>
													</div>
												</div>
											</div>
											<!-- (D) "Mobile 이미지와 동일한 이미지 사용" 체크 해제 시 .mm_desyncer-pc-banner 영역이 노출됩니다. -->
											<div class="mm_desyncer-pc-banner">
												<div class="mm_form-table">
													<table>
														<caption>
															<label class="mm_form-check">
																<input type="checkbox" data-check="{ 'syncer': '.mm_syncer-pc-phrases' }" checked>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label">텍스트 사용</span>
																</b>
															</label>
														</caption>
														<!-- (D) "텍스트 사용" 체크 시 .mm_syncer-pc-phrases 영역이 노출됩니다. -->
														<tbody class="mm_syncer-pc-phrases">
															<tr>
																<th scope="row">
																	<b>텍스트 1</b>
																</th>
																<td>
																	<div class="mm_form-text">
																		<button type="button" class="btn_text-clear">
																			<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																		</button>
																		<label>
																			<input type="text" class="textfield" data-text maxlength="8"><i class="bg_text"></i>
																			<span class="text_placeholder mm_ir-blind">텍스트 1</span>
																		</label>
																	</div>
																	<div class="mm_note">
																		<p>띄어쓰기 포함 8자까지 입력 가능합니다.</p>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>text_content</b>
										</th>
										<td colspan="3">
											<div class="text_content">
												<p>2020-02-24</p>
												<p><strong class="mm_text-warning">회신 기한까지 미 답변 시 고객님께서 최소 원하시면 배송 전으로 간주하고 취소처리 될 수 있습니다.</strong></p>
												<p>
													안녕하세요. 엔스테이션의 입점사 (주)모다노이칩 대구점입니다.<br>
													답변시점 확인해보니, 2/24 금일 출고되어 배송일은 1~2일 정도 소요될 예정입니다.<br>
													제품 구매 감사드리며,<br>
													앞으로도 저희 엔스테이션 상품에 많은 관심 부탁드리겠습니다.<br>
													감사합니다.
												</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row" rowspan="2">
											<b>rowspan 및<br>mm_form-table 사용</b>
											<button type="button" class="mm_btn T=xs T=line T=secondary">
												<b>기능버튼</b>
											</button>
										</th>
										<td colspan="3">
											<div class="mm_form-textarea">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<textarea class="textfield" data-text>안녕하세요. 엔스테이션의 입점사 (주)모다노이칩 대구점입니다.</textarea><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">답변</span>
												</label>
											</div>
										</td>
									</tr>
									<tr>
										<td colspan="3">
											<div class="mm_form-table">
												<table>
													<caption>
														<div class="mm_note">
															<p><i class="ico_note"></i><strong class="mm_text-warning">mm_form-table의 caption 사용 안내문구</strong>일반 p 태그 문구</p>
														</div>
													</caption>
													<tbody>
														<tr>
															<th scope="row">
																<b>width 140px 고정</b>
															</th>
															<td><p>-</p></td>
														</tr>
														<tr>
															<th scope="row">
																<b>필수 타이틀<i class="ico_required" title="필수입력"></i></b>
															</th>
															<td>
																<div class="mm_form-text">
																	<button type="button" class="btn_text-clear">
																		<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
																	</button>
																	<label>
																		<input type="text" class="textfield" data-text><i class="bg_text"></i>
																		<span class="text_placeholder mm_ir-blind">필수 타이틀</span>
																	</label>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>첨부파일</b>
											<!-- (D) 추가 버튼 클릭 시 파일첨부 영역을 추가합니다. -->
											<button type="button" class="mm_btn T=xs T=line T=tertiary">
												<b>추가</b>
											</button>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-file">
													<button type="button" class="btn_remove-file">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
													<label>
														<input type="file" data-file="{ 'onChange': 'fileSize', '_fileSize': 5000 }">
														<span class="text_path"></span>
														<span class="mm_btn T=line T=light text_label">파일첨부</span>
													</label>
												</div>
											</div>
											<br>
											<div class="mm_form_mix-linked">
												<div class="mm_form-file">
													<button type="button" class="btn_remove-file">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
													<label>
														<input type="file" accept=".zip" data-file="{ '_fileName': 'product_image_uploads', '_fileSize': 1000 }">
														<span class="text_path"></span>
														<span class="mm_btn T=line T=light text_label">파일첨부</span>
													</label>
												</div>
												<a class="btn_sample" href="#" download="employee_list.xls"><b>샘플다운받기</b></a>
											</div>
											<br>
											<div class="mm_form_mix-linked">
												<div class="mm_form-file">
													<button type="button" class="btn_remove-file">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
													<label>
														<input type="file" data-file="{ 'onChange': 'fileSize' }">
														<span class="text_path"></span>
														<span class="mm_btn T=line T=light text_label">파일첨부</span>
													</label>
												</div>
												<button type="button" class="mm_btn T=line">
													<b>삭제</b>
												</button>
											</div>
											<div class="mm_note T=bottom">
												<ul>
													<li>파일첨부는 최대 5개까지 가능합니다.</li>
													<li>파일 당 용량은 5MB를 초과할 수 없습니다.</li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>내부 mm_table_box, mm_table</b>
										</th>
										<td colspan="3">
											<div class="mm_table_box">
												<!-- 테이블상단 -->
												<div class="mm_table_box-unit">
													<div class="mm_lside">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=line T=secondary">
																	<b>기능버튼</b>
																</button>
															</div>
														</div>
													</div>
												</div>
												<!-- // 테이블상단 -->
												<!-- 테이블 -->
												<div class="mm_table" data-table>
													<div class="mm_scroller">
														<table>
															<thead>
																<tr>
																	<th scope="col">
																		<div class="mm_table-item">
																			문의번호
																		</div>
																	</th>
																	<th scope="col">
																		<div class="mm_table-item">
																			처리상태
																		</div>
																	</th>
																	<th scope="col">
																		<div class="mm_table-item">
																			주문번호
																		</div>
																	</th>
																	<th scope="col">
																		<div class="mm_table-item">
																			고객명
																		</div>
																	</th>
																	<th scope="col">
																		<div class="mm_table-item">
																			문의유형
																		</div>
																	</th>
																	<th scope="col">
																		<div class="mm_table-item">
																			문의일자/문의시간
																		</div>
																	</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<div class="mm_table-item">
																			<span class="mm_text-primary">[긴급]</span>1234567889
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			<a href="#" data-href="{ '_type': 'link' }"><b>답변대기</b></a>
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			814244212
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			김가나
																		</div>
																	</td>
																	<td class="T=table-left">
																		<div class="mm_table-item">
																			반품입고 여부 문의
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			2020-02-21 오전 12:07:12
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="mm_table-item">
																			<span class="mm_text-primary">[긴급]</span>1234567889
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			<a href="#" data-href="{ '_type': 'link' }"><b>답변대기</b></a>
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			814244212
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			김가나
																		</div>
																	</td>
																	<td class="T=table-left">
																		<div class="mm_table-item">
																			반품입고 여부 문의
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			2020-02-21 오전 12:07:12
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="mm_table-item">
																			<span class="mm_text-primary">[긴급]</span>1234567889
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			<a href="#" data-href="{ '_type': 'link' }"><b>답변대기</b></a>
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			814244212
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			김가나
																		</div>
																	</td>
																	<td class="T=table-left">
																		<div class="mm_table-item">
																			반품입고 여부 문의
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			2020-02-21 오전 12:07:12
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="mm_table-item">
																			<span class="mm_text-primary">[긴급]</span>1234567889
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			<a href="#" data-href="{ '_type': 'link' }"><b>답변대기</b></a>
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			814244212
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			김가나
																		</div>
																	</td>
																	<td class="T=table-left">
																		<div class="mm_table-item">
																			반품입고 여부 문의
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			2020-02-21 오전 12:07:12
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="mm_table-item">
																			<span class="mm_text-primary">[긴급]</span>1234567889
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			<a href="#" data-href="{ '_type': 'link' }"><b>답변대기</b></a>
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			814244212
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			김가나
																		</div>
																	</td>
																	<td class="T=table-left">
																		<div class="mm_table-item">
																			반품입고 여부 문의
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			2020-02-21 오전 12:07:12
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="mm_table-item">
																			<span class="mm_text-primary">[긴급]</span>1234567889
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			<a href="#" data-href="{ '_type': 'link' }"><b>답변대기</b></a>
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			814244212
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			김가나
																		</div>
																	</td>
																	<td class="T=table-left">
																		<div class="mm_table-item">
																			반품입고 여부 문의
																		</div>
																	</td>
																	<td>
																		<div class="mm_table-item">
																			2020-02-21 오전 12:07:12
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<!-- // 테이블 -->
												<!-- 테이블하단 -->
												<div class="mm_table_box-unit">
													<div class="mm_lside">
														<div class="mm_btn_box">
															<div class="mm_inline">
																<button type="button" class="mm_btn T=line T=secondary">
																	<b>기능버튼</b>
																</button>
															</div>
														</div>
													</div>
												</div>
												<!-- // 테이블하단 -->
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>엑셀 업로드</b>
										</th>
										<td colspan="3">
											<div class="mm_form_mix-linked">
												<div class="mm_form-file">
													<button type="button" class="btn_remove-file">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
													</button>
													<label>
														<input type="file" accept=".xlsx, .xls" data-file="{ '_fileName': 'upload_list_product' }">
														<span class="text_path"></span>
														<span class="mm_btn T=line T=light text_label">파일첨부</span>
													</label>
												</div>
												<a class="btn_sample" href="#" download="upload_list_product.xls"><b>샘플다운받기</b></a>
												<button type="button" class="mm_btn T=line T=xload btn_excel">
													<b>엑셀 업로드</b><i class="ico_upload"></i>
												</button>
											</div>
											<div class="mm_btn_box">
												<div class="mm_inline">
													<a class="mm_btn T=line T=xload btn_excel" href="#" download><b>원산지 목록 다운</b><i class="ico_download"></i></a>
													<a class="mm_btn T=line" href="/product/category-code" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>카테고리 코드 확인</b></a>
													<a class="mm_btn T=line" href="/product/manage/info-check" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품정보고시 항목 확인</b></a>
												</div>
											</div>
											<div class="mm_note T=bottom">
												<ul>
													<li><strong>upload_list_product 파일명만 업로드가 가능</strong>합니다. (xls/xlsx 확장자를 제외한 파일 및 이미지는 업로드 불가)</li>
													<li><strong>엑셀 파일 내 입력한 이미지명</strong>이 하단에 업로드하는 <strong>이미지 zip파일에 포함</strong>되어 있어야 합니다.</li>
													<li>필수 항목이 입력되지 않은 항목은 정상 업로드되지 않습니다.</li>
													<li>샘플 엑셀 파일 내 5행부터 입력된 정보가 업로드됩니다. (4행의 예시문구 제거금지)</li>
													<li>기존 상품 목록에 노출되는 상품을 중복해서 업로드할 경우 신규 추가되어 노출됩니다. (다른 상품 코드 부여)</li>
													<li class="mm_text-primary">
														래플 상품과 펀딩 상품은 엑셀 업로드 등록이 불가합니다.
													</li>
												</ul>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- 폼 하단 -->
						<div class="mm_form_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn">
											<b>기능버튼</b>
										</button>
										<button type="button" class="mm_btn">
											<b>기능버튼</b>
										</button>
									</div>
								</div>
							</div>
							<div class="mm_rside">
								<p class="text_required">
									<i class="ico_required" title="필수입력"></i>로 표시된 항목은 필수입력입니다.
								</p>
							</div>
						</div>
						<!-- // 폼 하단 -->

						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>대체 텍스트는 화면에 노출되지 않으며 이미지를 설명하는 내용을 작성해 주세요.</li>
								<li>권장 사이즈는 W 1360px 이며, JPG/PNG 형식의 파일만 등록이 가능합니다.</li>
								<li>이미지 최대 용량은 2MB를 초과할 수 없습니다.</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<!-- // 폼영역 -->
				</template>
				<div class="m_template...note">
					<p>
						<strong># mm_form</strong><br>
						* mm_form은 단독사용이 가능합니다.<br>
						* 첫번 째 tr은 th, td width의 기준을 잡기 위한 tr이므로 항상 넣어줍니다. (visibility: hidden)<br>
						* th의 width는 기본 200px이며, 팝업 안의 폼테이블 th의 width값은 166px입니다.<br>
						* td의 width는 colspan으로 조절합니다.
						<br><br>
						<strong># mm_form_box</strong><br>
						* mm_form의 상/하단에 관련 영역을 추가할 경우 mm_form_box로 감싸줍니다.
					</p>
				</div>
			</section>
			<!-- // 폼 테이블 -->

			<!-- 검색 -->
			<section class="m_template-component-item">
				<h3><b>검색</b><small>mm_search</small></h3>
				<template type="text/codehtml">
					<div class="mm_search">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td><th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>제목<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="7">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">플레이스홀더</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>기간<i class="ico_required" title="필수입력"></i></b>
									</th>
									<td colspan="7">
										<div class="mm_form_mix-period">
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option>등록일시</option>
														<option>오늘</option>
														<option>최근 3일</option>
														<option>최근 1주일</option>
														<option>최근 1개월</option>
														<option>최근 3개월</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">시작일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
											<b class="text_tilde">~</b>
											<div class="mm_form-text T=calendar">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
													<span class="text_placeholder">종료일</span>
													<i class="ico_datepicker-calendar"></i>
												</label>
											</div>
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option selected>오늘</option>
														<option>최근 3일</option>
														<option>최근 1주일</option>
														<option>최근 1개월</option>
														<option>최근 3개월</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>노출 상태</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">예약</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-state" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">노출</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
									<th scope="row">
										<b>사용 여부</b>
									</th>
									<td colspan="3">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-using" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">전체</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-using" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">사용</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-using" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">미사용</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>회원명</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">플레이스홀더</span>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>회원 아이디</b>
									</th>
									<td colspan="3">
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder">플레이스홀더</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>카테고리</b>
									</th>
									<td colspan="7">
										<div class="mm_form_mix-linked T=fit">
											<button type="button" class="mm_btn">
												<b>기본</b>
											</button>
											<div class="mm_select-list T=fit">
												<ul>
													<li>
														<div class="mm_form-select">
															<label>
																<select data-select>
																	<option>셀렉트 full</option>
																</select>
																<b class="text_selected"></b>
																<i class="ico_form-select"></i>
															</label>
														</div>
													</li>
													<li>
														<div class="mm_form-select">
															<label>
																<select data-select>
																	<option>셀렉트 full</option>
																</select>
																<b class="text_selected"></b>
																<i class="ico_form-select"></i>
															</label>
														</div>
													</li>
													<li>
														<div class="mm_form-select">
															<label>
																<select data-select>
																	<option>셀렉트 full</option>
																</select>
																<b class="text_selected"></b>
																<i class="ico_form-select"></i>
															</label>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>분류</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select">
											<label>
												<select data-select>
													<option>전체</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_note">
											<ul>
												<li>셀러 등록/수정 시 설정한 매출/통계용 카테고리입니다.</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>일반 검색</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>주문번호-순번</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-text">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">검색어를 입력해 주세요.</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>다중 검색</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option>품목ID</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text></textarea><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">검색어를 입력해 주세요.</span>
											</label>
										</div>
										<div class="mm_note">
											<ul>
												<li><strong>줄바꿈</strong>으로 구분하여 다중 검색 가능 (최대 100줄)</li>
											</ul>
										</div>
									</td>
								</tr>
								<!-- (D) 서브관리자에서 노출되는 형태입니다. -->
								<tr>
									<th scope="row">
										<span class="mm_text-secondary">서브관리자 전용<br></span><b>셀러</b>
									</th>
									<td colspan="7">
										<div class="mm_form-select T=lg">
											<label>
												<select data-select>
													<option>셀러 A</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row" rowspan="2">
										<b>기간</b>
									</th>
									<td colspan="7">
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-period" data-radio="{ 'syncer': '.mm_syncer-period-year' }" checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">연도별</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-period" data-radio="{ 'syncer': '.mm_syncer-period-month' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">월별</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-period" data-radio="{ 'syncer': '.mm_syncer-period-day' }">
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">일별</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<td colspan="7">
										<!-- (D) 연도별 선택 시 노출됩니다. -->
										<div class="mm_syncer-period-year">
											<div class="mm_form_mix-linked">
												<div class="mm_form-select T=xs">
													<label>
														<select data-select>
															<option>2021</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
												<span class="text_linked">~</span>
												<div class="mm_form-select T=xs">
													<label>
														<select data-select>
															<option>2021</option>
														</select>
														<b class="text_selected"></b>
														<i class="ico_form-select"></i>
													</label>
												</div>
											</div>
										</div>
										<!-- (D) 월별 선택 시 노출됩니다. -->
										<div class="mm_syncer-period-month">
											<div class="mm_form_mix-period">
												<div class="mm_form-text T=calendar">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text data-datepicker="{ 'config': { '_isMonth': true } }"><i class="bg_text"></i>
														<span class="text_placeholder">월선택</span>
														<i class="ico_datepicker-calendar"></i>
													</label>
												</div>
												<b class="text_tilde">~</b>
												<div class="mm_form-text T=calendar">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text data-datepicker="{ 'config': { '_isMonth': true } }"><i class="bg_text"></i>
														<span class="text_placeholder">월선택</span>
														<i class="ico_datepicker-calendar"></i>
													</label>
												</div>
											</div>
										</div>
										<!-- (D) 일별 선택 시 노출됩니다. -->
										<div class="mm_syncer-period-day">
											<div class="mm_form_mix-period">
												<div class="mm_form-text T=calendar">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
														<span class="text_placeholder">시작일</span>
														<i class="ico_datepicker-calendar"></i>
													</label>
												</div>
												<b class="text_tilde">~</b>
												<div class="mm_form-text T=calendar">
													<button type="button" class="btn_text-clear">
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
														<span class="text_placeholder">종료일</span>
														<i class="ico_datepicker-calendar"></i>
													</label>
												</div>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>텍스트</b>
									</th>
									<td><p>품절</p></td>
									<th scope="row">
										<b>셀렉트</b>
									</th>
									<td>
										<div class="mm_form-select">
											<label>
												<select data-select>
													<option>승인요청전</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</td>
									<th scope="row" rowspan="3">
										<b>th, td rowspan</b>
									</th>
									<td colspan="3" rowspan="3">
										<div class="mm_form-textarea">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<textarea class="textfield" data-text></textarea><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">상위ID(최대50건)</span>
											</label>
										</div>
										<div class="mm_note">
											<p>mm_note p태그 사용</p>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>라디오 리스트</b>
									</th>
									<td>
										<div class="mm_radio-list">
											<ul>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-list" data-radio checked>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">일반</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-radio">
														<input type="radio" name="dev_radio-list" data-radio>
														<b class="mm_block">
															<i class="ico_form-radio"></i>
															<span class="text_label">정산</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
									<th scope="row">
										<b>체크 리스트</b>
									</th>
									<td>
										<div class="mm_check-list">
											<ul>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sort" data-check checked>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">일반</span>
														</b>
													</label>
												</li>
												<li>
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sort" data-check checked>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label">정산</span>
														</b>
													</label>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>반품사유</b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-linked">
											<div class="mm_form-select T=xs">
												<label>
													<select data-select>
														<option>고객단순변심</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
											<label class="mm_form-check">
												<input type="checkbox" data-check>
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">업체회수 조회</span>
												</b>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>mm_form_mix-linked</b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-linked">
											<button type="button" class="mm_btn T=line T=light">
												<b>버튼</b>
											</button>
											<p class="text_linked">
												+ 텍스트
											</p>
										</div>
									</td>
									<th scope="row">
										<b>소비자단가</b>
									</th>
									<td colspan="3">
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">소비자단가</span>
												</label>
											</div>
											<span class="text_linked">원(최초 Tag 가격)</span>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>셀렉트 리스트</b>
									</th>
									<td colspan="7">
										<div class="mm_select-list T=fit">
											<ul>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>셀렉트 full</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>셀렉트 full</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
												<li>
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>셀렉트 full</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="mm_note">
							<ul>
								<li>기간 검색은 등록일자에 대한 검색이며, 최대 1년 단위로 검색하시기 바랍니다.</li>
								<li><strong>회원 아이디</strong>의 경우 고유한 정보이므로 아이디만 입력 시에도 검색이 가능합니다.</li>
							</ul>
						</div>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=lg T=line T=tertiary btn_reset">
									<i class="ico_reset"></i><b>초기화</b>
								</button>
								<button type="button" class="mm_btn T=lg T=tertiary btn_search">
									<b>검색</b>
								</button>
							</div>
						</div>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						* 첫번 째 tr은 th, td width의 기준을 잡기 위한 tr이므로 항상 넣어줍니다. (visibility: hidden)<br>
						* th의 width는 105px 고정입니다.<br>
						* td의 width는 colspan으로 조절합니다.
					</p>
				</div>
			</section>
			<!-- // 검색 -->
		</article>
		<!-- // 폼 테이블 -->

		<!-- 폼 경고/업데이트 -->
		<article id="formFunction">
			<h2><b>폼 경고/업데이트</b></h2>
			<section class="m_template-component-item">
				<h3><b>경고메시지</b></h3>
				<template type="text/codehtml">
					<div class="mm_form-text">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input id="errortest" type="text" class="textfield" data-text><i class="bg_text"></i>
							<span class="text_placeholder">경고메시지 테스트</span>
						</label>
					</div>
					<div class="mm_flex T=equal">
						<button type="button" class="mm_btn" onclick="mm.form.alert('#errortest', '경고메시지가 노출됩니다.<br>br로 줄바꿈을 할 수 있지만 위치에 따라 제대로 표시가 되지 않을 수 있습니다.');">
							<b>경고메시지 노출</b>
						</button>
						<!-- (D) 경고메시지를 해제할 때 mm.form.lift(); 함수에 파라미터를 전달하지 않으면 페이지 내 전체 메시지를 해제합니다. -->
						<button type="button" class="mm_btn T=line" onclick="mm.form.lift('#errortest');">
							<b>경고메시지 숨김</b>
						</button>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						* 폼요소의 경고메시지는 스크립트 mm.form.alert(대상 input, '알림 메시지')를 호출하여 사용할 수 있습니다.<br>
						* 경고메시지를 해제할 때 mm.form.lift(); 함수에 파라미터를 전달하지 않으면 페이지 내 전체 메시지를 해제합니다.
					</p>
				</div>
			</section>
			<section class="m_template-component-item">
				<h3><b>업데이트</b></h3>
				<template type="text/codehtml">
					<div class="mm_form-text">
						<button type="button" class="btn_text-clear">
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input id="updatetest" type="text" class="textfield" data-text><i class="bg_text"></i>
							<span class="text_placeholder">플레이스홀더</span>
						</label>
					</div>
					<div class="mm_flex T=equal">
						<button type="button" class="mm_btn" onclick="document.getElementById('updatetest').value='일반적인 value 변경으로 placeholder와 겹침';">
							<b>일반적인 value 변경(오류)</b>
						</button>
						<button type="button" class="mm_btn T=line" onclick="document.getElementById('updatetest').value='업데이트 value 변경';mm.form.update('#updatetest');">
							<b>업데이트로 변경 적용</b>
						</button>
						<button type="button" class="mm_btn T=line" onclick="mm.form.value('#updatetest', 'value 함수로 변경');">
							<b>value 함수로 변경 적용</b>
						</button>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						* 폼 요소의 생성, 초기화, 변경 등 변화가 발생하면 업데이트가 필요합니다.<br>
						* mm.form.update();로 업데이트 합니다.<br><br>
						* 파라미터가 빈 값이면 html 전체 폼 요소를 검색하여 업데이트 합니다.<br>
						* 파라미터가 폼 요소일 경우 선택한 폼 요소만 업데이트 합니다.(이 때 아래 샘플처럼 변경과 업데이트를 동시에 적용할 수 있습니다.)<br>
						* 파라미터가 폼 요소의 컨테이너 요소일 경우 컨테이너 내 모든 폼 요소를 업데이트 합니다.<br>
					</p>
				</div>
			</section>
		</article>
		<!-- // 폼 경고/업데이트 -->

		<!-- 탭메뉴 -->
		<article id="tab">
			<h2><b>탭 메뉴</b></h2>
			<section class="m_template-component-item">
				<h3><b>기본</b><small>mm_tab_menu</small></h3>
				<template type="text/codehtml">
					<div class="mm_tab_menu">
						<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
						<ul>
							<li><a class="S=tab-on" href="#" data-href="{ '_type': 'link' }" title="선택됨"><b>탭메뉴1</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>탭메뉴2</b></a></li>
						</ul>
					</div>
				</template>
			</section>
			<section class="m_template-component-item">
				<h3><b>equal fit</b><small>T=fit</small></h3>
				<template type="text/codehtml">
					<div class="mm_tab_menu T=fit">
						<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
						<ul>
							<li><a class="S=tab-on" href="#" data-href="{ '_type': 'link' }" title="선택됨"><b>탭메뉴1</b></a></li>
							<li><a href="#" data-href="{ '_type': 'link' }"><b>탭메뉴2</b></a></li>
						</ul>
					</div>
				</template>
			</section>
			<section class="m_template-component-item">
				<h3><b>탭컨텐츠 (탭메뉴 포함, 메뉴 토글 가능)</b><small>mm_tab</small></h3>
				<template type="text/codehtml">
					<div class="mm_tab" data-tab="{ '_isToggle': true }">
						<div class="mm_tab_menu">
							<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
							<ul>
								<li><a class="btn_tab S=tab-on" href="#" title="선택됨"><b>탭메뉴 1</b></a></li>
								<li><a class="btn_tab" href="#"><b>탭메뉴 2</b></a></li>
							</ul>
						</div>
						<div class="mm_tab-item S=tab-on">
							탭메뉴1 내용
						</div>
						<div class="mm_tab-item">
							탭메뉴2 내용
						</div>
					</div>
				</template>
			</section>
		</article>
		<!-- // 탭메뉴 -->

		<!-- 드롭다운/아코디언 -->
		<article id="dropdown">
			<h2><b>드롭다운/아코디언</b></h2>
			<section class="m_template-component-item">
				<h3><b>드롭다운</b><small>mm_dropdown</small></h3>
				<template type="text/codehtml">
					<div class="mm_dropdown" data-dropdown>
						<button type="button" class="btn_dropdown" title="펼쳐보기">
							<b>드롭다운</b><i class="ico_dropdown"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								드롭다운 내용<br>
								드롭다운 내용 2번째 줄
							</div>
						</div>
					</div>
				</template>
			</section>
			<section class="m_template-component-item">
				<h3><b>아코디언</b><small>mm_accordion</small></h3>
				<template type="text/codehtml">
					<div class="mm_accordion">
						<ul>
							<li>
								<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_accrodion' }">
									<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
										<span>배송 구분은 어떻게 되나요?</span><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<p class="mm_dropdown-item-inner">
											국내배송만 가능합니다(해외배송은 불가)<br>
											- 업체배송: 엔스테이션 물류센터가 아닌 해당 상품 공급업체에서 직접 고객에게 발송되는 제품입니다.<br>
											- 본사배송: 엔스테이션 물류센터에서 발송되는 상품입니다.
										</p>
									</dd>
								</dl>
							</li>
							<li>
								<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_accrodion' }">
									<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
										<span>배송 기간은 얼마나 걸리나요?</span><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<p class="mm_dropdown-item-inner">
											아이디/비밀번호 분실 시 휴대폰 인증 또는 아이핀 인증을 통해 조회가 가능합니다. 아이디/비밀번호 분실 시 휴대폰 인증 또는 아이핀 인증을 통해 조회가 가능합니다
										</p>
									</dd>
								</dl>
							</li>
							<li>
								<dl class="mm_dropdown" data-dropdown="{ '_group': 'dev_accrodion' }">
									<dt class="btn_dropdown" tabindex="0" title="펼쳐보기">
										<span>묶음 배송이 가능한가요?</span><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<p class="mm_dropdown-item-inner">
											주문하신 상품의 취소 방법은 진해 상태에 따라서 다릅니다.<br>
											1. 결제완료 상태: 마이페이지 &#62; 취소/반품 &#62; 주문취소 신청을 통해서 신청해주시기 바랍니다.<br>
											2. 배송준비 중 상태: 고객센터 &#62; 1:1 문의하기 &#62; 환불문의로 문의를 남겨주시면 취소 가능 여부를 안내해 드립니다
										</p>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
				</template>
			</section>
		</article>
		<!-- // 드롭다운/아코디언 -->

		<!-- 리스트 -->
		<article id="list">
			<h2><b>리스트</b></h2>
			<!--
				<section class="m_template-component-item">
				<h3><b>리스트</b><small>mm_list</small></h3>
				<script type="text/codehtml">
				<div class="mm_list">
				<table>
				<tbody>
				<tr>
				<td>일반</td>
				<td><p><a href="#" data-href="{ '_type': 'link' }"><b>일반 문의 관련 공지사항 입니다.</b><i class="mm_badge T=new">N</i></a></p></td>
				<td><b class="text_date">2020-06-17</b></td>
				</tr>
				<tr>
				<td>정산</td>
				<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 B</b><i class="mm_badge T=new">N</i></a></p></td>
				<td><b class="text_date">2020-05-20</b></td>
				</tr>
				<tr>
				<td>시스템</td>
				<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 C</b></a></p></td>
				<td><b class="text_date">2020-05-12</b></td>
				</tr>
				<tr>
				<td>일반</td>
				<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 D</b></a></p></td>
				<td><b class="text_date">2020-04-27</b></td>
				</tr>
				<tr>
				<td>정산</td>
				<td><p><a href="#" data-href="{ '_type': 'link' }"><b>공지사항 제목 D</b></a></p></td>
				<td><b class="text_date">2020-04-17</b></td>
				</tr>
				</tbody>
				</table>
				</div>
				</script>
				</section>
			-->
		</article>
		<!-- // 리스트 -->

		<!-- 파츠 -->
		<article id="part">
			<h2><b>파츠</b></h2>

			<!-- 수량 -->
			<!--
				<section class="m_template-component-item">
				<h3><b>수량</b><small>mm_stepper</small></h3>
				<script type="text/codehtml">
				<div class="mm_stepper" data-stepper="{ '_min': 0, '_max': 200 }">
				<div class="mm_form-text">
				<label>
				<input type="text" class="textfield text_stepper" data-text><i class="bg_text"></i>
				<span class="text_placeholder mm_ir-blind">수량</span>
				</label>
				</div>
				<button type="button" class="btn_stepper-subtract"><i class="ico_stepper-subtract"></i><b class="mm_ir-blind">수량 빼기</b></button>
				<button type="button" class="btn_stepper-add"><i class="ico_stepper-add"></i><b class="mm_ir-blind">수량 더하기</b></button>
				</div>
				</script>
				</section>
			-->
			<!-- // 수량 -->

			<!-- 뱃지 -->
			<!--
				<section class="m_template-component-item">
				<h3><b>뱃지</b><small>mm_badge</small></h3>
				<script type="text/codehtml">
				<span class="mm_badge T=new">N</span>
				</script>
				<div class="m_template...note">
				<p>뱃지에 option을 추가할 수 있습니다. ex) T=new</p>
				<table>
				<thead>
				<tr>
				<th scope="col">Option</th>
				<th scope="col">Attribute</th>
				<th scope="col">BackgroundColor</th>
				<th scope="col">FontSize</th>
				<th scope="col">Description</th>
				</tr>
				</thead>
				<tbody>
				<tr>
				<td>_new_</td>
				<td>class</td>
				<td>#ec1b3c</td>
				<td>10px</td>
				<td>-</td>
				</tr>
				</tbody>
				</table>
				</div>
				</section>
			-->
			<!-- // 뱃지 -->
		</article>
		<!-- // 파츠 -->

		<!-- 페이지네이션 -->
		<article id="pagination">
			<h2><b>페이지네이션</b></h2>
			<section class="m_template-component-item">
				<h3><b>페이지네이션</b><small>mm_pagination</small></h3>
				<template type="text/codehtml">
					<!-- 페이지네이션 -->
					<!-- (D) 현재 페이지의 메뉴에 'S=page-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
					<div class="mm_pagination">
						<div class="mm_inline">
							<ol>
								<li><a class="S=page-on" href="#" title="선택됨"><b>1</b></a></li>
								<li><a href="#"><b>2</b></a></li>
								<li><a href="#"><b>3</b></a></li>
								<li><a href="#"><b>4</b></a></li>
								<li><a href="#"><b>5</b></a></li>
							</ol>
							<button type="button" class="btn_control-first" onclick="mm.link('')" disabled>
								<i class="ico_page-first"></i><b class="mm_ir-blind">처음</b>
							</button>
							<button type="button" class="btn_control-prev" onclick="mm.link('')" disabled>
								<i class="ico_page-prev"></i><b class="mm_ir-blind">이전</b>
							</button>
							<button type="button" class="btn_control-next" onclick="mm.link('')">
								<i class="ico_page-next"></i><b class="mm_ir-blind">다음</b>
							</button>
							<button type="button" class="btn_control-last" onclick="mm.link('')">
								<i class="ico_page-last"></i><b class="mm_ir-blind">마지막</b>
							</button>
						</div>
						<div class="mm_pagination-jump">
							<div class="mm_form_mix-linked">
								<div class="mm_form-text">
									<label>
										<input type="text" class="textfield" data-text><i class="bg_text"></i>
										<span class="text_placeholder">000</span>
									</label>
								</div>
								<button type="button" class="btn_jump">
									<b class="mm_ir-blind">이동</b><i class="ico_page-jump"></i>
								</button>
								<p class="text_linked">
									of 10<strong>(1,125 items)</strong>
								</p>
							</div>
						</div>
					</div>
					<!-- // 페이지네이션 -->
				</template>
			</section>
		</article>
		<!-- // 페이지네이션 -->

		<!-- BOM -->
		<article id="bom">
			<h2><b>BOM</b></h2>
			<section class="m_template-component-item">
				<h3><b>얼럿</b><small>mm.bom.alert</small></h3>
				<template type="text/codehtml">
					<button type="button" class="mm_btn" onclick="mm.bom.alert('안내안내<br>br 줄바꿈');">
						<b>얼럿 - 기본</b>
					</button><br>
					<button type="button" class="mm_btn" onclick="mm.bom.alert('타이틀을 변경할 수 있습니다.', null, { _title: '타이틀' });">
						<b>얼럿 - 타이틀 변경</b>
					</button>
				</template>
				<div class="m_template...note">
					<p>
						* mm.bom.alert('내용');<br><br>
						* 내용의 줄바꿈은 &#60;br&#62; 입니다.<br>
						* 옵션을 추가하여 타이틀과 콜백함수를 호출할 수 있습니다. ex) mm.bom.alert('내용', 콜백함수, { _title: '제목', args: [콜백 파라미터] });
					</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Option
								</th>
								<th scope="col">
									Type
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>_title</td>
								<td>string</td>
								<td>타이틀 변경</td>
							</tr>
							<tr>
								<td>args</td>
								<td>array</td>
								<td>콜백함수를 호출할 때 함께 전달</td>
							</tr>
							<tr>
								<td>콜백함수</td>
								<td>string</td>
								<td>확인버튼 클릭할 때 해당 함수를 실행</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<section class="m_template-component-item">
				<h3><b>컨펌</b><small>mm.bom.confirm</small></h3>
				<template type="text/codehtml">
					<button type="button" class="mm_btn T=primary" onclick="mm.bom.confirm('안내안내<br>줄바꿈', sampleCallback);">
						<b>컨펌 - 기본</b>
					</button><br>
					<button type="button" class="mm_btn T=primary" onclick="mm.bom.confirm('타이틀을 변경할 수 있습니까?', sampleCallback, { _title: '타이틀 변경', args: [1, 'test'] });">
						<b>컨펌 - 옵션적용</b>
					</button>
				</template>
				<div class="m_template...note">
					<p>
						* mm.bom.confirm('내용', 콜백함수);<br><br>
						* 사용은 얼럿과 동일합니다.<br>
						* 옵션을 추가하여 타이틀과 콜백함수를 호출할 수 있습니다. ex) mm.bom.confirm('내용', 콜백함수, { _title: '제목', args: [콜백 파라미터] });
					</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Option
								</th>
								<th scope="col">
									Type
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>_title</td>
								<td>string</td>
								<td>타이틀 변경</td>
							</tr>
							<tr>
								<td>args</td>
								<td>array</td>
								<td>콜백함수를 호출할 때 함께 전달</td>
							</tr>
							<tr>
								<td>콜백함수</td>
								<td>string</td>
								<td>
									확인버튼 클릭할 때 해당 함수를 실행<br>
									콜백함수를 호출할 때 첫번 째 파라미터로 확인(true)/취소(false) 값을 전달
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<section class="m_template-component-item">
				<h3><b>프롬프트</b><small>mm.bom.prompt</small></h3>
				<template type="text/codehtml">
					<button type="button" class="mm_btn T=secondary" onclick="mm.bom.prompt('서브타이틀', sampleCallback);">
						<b>프롬프트 - 기본</b>
					</button><br>
					<button type="button" class="mm_btn T=secondary" onclick="samplePrompt();">
						<b>프롬프트 - 옵션적용</b>
					</button>
				</template>
				<div class="m_template...note">
					<p>
						* mm.bom.prompt('서브타이틀', sampleCallback);<br><br>
						* 입력폼은 옵션이 없어도 기본 값은 input:text 1종 노출입니다.<br>
						* type 값은 input 입력요소(text, tel, number, email, search, url, password, date, month, time)와 textarea, select 입니다.<br>
						* 옵션을 추가하여 타이틀과 콜백함수를 호출할 수 있습니다. ex) mm.bom.prompt('내용', 콜백함수, { _title: '제목', args: [콜백 파라미터], forms: [생성할 입력폼] });
					</p>
					<table>
						<thead>
							<tr>
								<th scope="col">
									Option
								</th>
								<th scope="col">
									Ex
								</th>
								<th scope="col">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>_title</td>
								<td>_title: '제목'</td>
								<td>타이틀 변경</td>
							</tr>
							<tr>
								<td>args</td>
								<td>args: [콜백 파라미터]</td>
								<td>콜백함수를 호출할 때 함께 전달</td>
							</tr>
							<tr>
								<td>forms</td>
								<td>{ forms: [{ type: '속성', placeholder: '내용이 없으면 삭제', value: '내용이 없으면 삭제' }] }</td>
								<td>추가/변경할 때는 예제 형식의 오브젝트를 forms 배열에 추가</td>
							</tr>
							<tr>
								<td>options</td>
								<td>options: [{ text: '텍스트', value: '값', selected: true }]</td>
								<td>select의 옵션은 예제 형식으로 배열에 추가</td>
							</tr>
							<tr>
								<td>format</td>
								<td>format: '값'</td>
								<td>date, time의 노출 방식 변경</td>
							</tr>
							<tr>
								<td>data-text</td>
								<td>{ 'data-text': JSON.stringify({ _isResize: true }).replace(/"/g, '\''), 'style': 'background:red' }</td>
								<td>attrs 값이 빈 값이 아니면 폼요소에 attr을 적용</td>
							</tr>
							<tr>
								<td>콜백함수</td>
								<td>-</td>
								<td>
									확인버튼 클릭할 때 해당 함수를 실행<br>
									콜백함수를 호출할 때 첫번 째 파라미터로 form value(배열)과 확인(true)/취소(false) 값을 전달
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</article>
		<!-- // BOM -->

		<!-- 레이어 -->
		<article id="layer">
			<h2><b>레이어</b></h2>
			<section class="m_template-component-item">
				<h3><b>레이어</b><small>mm_layer</small></h3>
				<template type="text/codehtml">
					<div class="mm_layer">
						<button type="button" class="btn_help">
							<b class="mm_ir-blind">도움말</b><i class="ico_help"></i>
						</button>
						<div class="mm_layer-content">
							<p><strong>판매자님과 택배사 간 계약된 택배사 코드를 입력</strong>해주셔야 하며, 택배사 코드는 이용하시는 택배사에 문의해주시기 바랍니다.</p>
							<ul>
								<li>계약정보 확인중: 판매자님의 택배 계약정보를 확인하는 중입니다.</li>
								<li>계약정보 확인: 판매자님의 택배 계약정보가 정상적으로 확인되어 송장출력 서비스 이용이 가능한 상태입니다.</li>
								<li>계약확인 오류: 판매자님이 입력하신 택배 계약정보가 정확하지 않습니다. 택배사에 문의하여 정확한 계약정보를 확인 후 다시 입력해주세요.</li>
							</ul>
						</div>
					</div>
				</template>
				<div class="m_template...note">
					<p>mm_switch의 href와 data-switch 'syncer'에 해당 레이어의 id값을 넣어줍니다.</p>
				</div>
			</section>
		</article>
		<!-- // 레이어 -->

		<!-- 로딩 -->
		<article id="loading">
			<h2><b>로딩</b></h2>
			<section class="m_template-component-item">
				<h3><b>프리로딩</b><small>mm.loading</small></h3>
				<template type="text/codehtml">
					<div class="loading-preview" style="position:relative; height:100px; border:1px solid #ddd;">
						로딩 노출 영역
					</div>
					<div class="mm_flex T=equal">
						<button type="button" class="mm_btn T=primary" onclick="mm.loading.show('.loading-preview');">
							<b>로딩 노출 (영역지정)</b>
						</button>
						<button type="button" class="mm_btn T=secondary" onclick="mm.loading.show(null, { _size: 50, _text: '로딩텍스트 변경내용<br> br로 줄바꿈 가능' });">
							<b>로딩 노출 (사이즈변경, 텍스트노출)</b>
						</button>
						<button type="button" class="mm_btn T=line" onclick="mm.loading.hide();">
							<b>로딩 숨김</b>
						</button>
					</div>
					<button type="button" class="mm_btn" onclick="mm.loading.show();">
						<b>로딩 노출 (전체)</b>
					</button>
				</template>
			</section>
		</article>
		<!-- // 로딩 -->

		<!-- 테이블 -->
		<article id="table">
			<h2><b>테이블 (테이블 형태는 mm_table로 통일)</b></h2>
			<section class="m_template-component-item">
				<h3><b>기본 테이블</b><small>mm_table_box + mm_table</small></h3>
				<template type="text/codehtml">
					<div class="mm_table_box">
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th class="col_check" scope="col">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-option" data-check="{ '_type': 'check_all' }">
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">전체선택</span>
														</b>
													</label>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트<i class="ico_required" title="필수입력"></i>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트 / 텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-option" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													기본 텍스트
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													T=table-left 사용 :: 좌측 정렬 <strong class="mm_text-primary">[색상변경]</strong>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="#" data-href="{ '_type': 'link' }"><b>a태그 링크 이동</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_radio-list">
														<ul>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-list" data-radio checked>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">텍스트</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-radio">
																	<input type="radio" name="dev_radio-list" data-radio>
																	<b class="mm_block">
																		<i class="ico_form-radio"></i>
																		<span class="text_label">텍스트</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_form-select">
														<label>
															<select data-select>
																<option>기본형_ATYPE</option>
															</select>
															<b class="text_selected"></b>
															<i class="ico_form-select"></i>
														</label>
													</div>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line T=light" href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>옵션 확인 / <strong class="mm_text-secondary text_num">10000</strong>개</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<button type="button" class="mm_btn T=sm T=line">
																<b>삭제</b>
															</button>
															<a class="mm_btn T=sm" href="#" data-href="{ '_type': 'link' }"><b>수정</b></a>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-option" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													0000-00-00 11:22:33
												</div>
											</td>
											<td data-editable="{ '_byte': 30 }">
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">최대 30자 입력</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<button type="button">
														<b>button 태그:not(.mm_btn)</b>
													</button>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_check-list">
														<ul>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">텍스트</span>
																	</b>
																</label>
															</li>
															<li>
																<label class="mm_form-check">
																	<input type="checkbox" name="dev_check-list" data-check>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label">텍스트</span>
																	</b>
																</label>
															</li>
														</ul>
													</div>
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td>
												<div class="mm_table-item">
													<div class="mm_form_mix-period">
														<div class="mm_form-text T=calendar">
															<button type="button" class="btn_text-clear">
																<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
															</button>
															<label>
																<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
																<span class="text_placeholder">날짜선택</span>
																<i class="ico_datepicker-calendar"></i>
															</label>
														</div>
														<b class="text_tilde">~</b>
														<div class="mm_form-text T=calendar">
															<button type="button" class="btn_text-clear">
																<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
															</button>
															<label>
																<input type="text" class="textfield" data-text data-datepicker><i class="bg_text"></i>
																<span class="text_placeholder">날짜선택</span>
																<i class="ico_datepicker-calendar"></i>
															</label>
														</div>
													</div>
												</div>
											</td>
											<td rowspan="2">
												<div class="mm_table-item">
													td rowspan="2"
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<span class="text_check-none">-</span>
												</div>
											</td>
											<th scope="row">
												<div class="mm_table-item">
													th scope="row"
												</div>
											</th>
											<td data-editable>
												<div class="mm_table-item">
													<p class="text_editable" contenteditable></p>
													<span class="text_placeholder">숫자만 입력</span>
													<!-- <button type="button" class="btn_text-clear"><i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b></button> -->
												</div>
											</td>
											<td class="T=highlight">
												<div class="mm_table-item">
													강조영역 T=highlight
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b class="mm_text-ellipsis T=2line">일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십</b>
													</p>
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td><div class="mm_table-item"></div></td>
											<td>
												<div class="mm_table-item">
													tfoot
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_num">20</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a href="#" data-href="{ '_type': 'link' }"><b class="text_price">1004343</b></a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">200000</span>
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
											<td><div class="mm_table-item"></div></td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						<strong># 기본 테이블</strong><br>
						* mm_table 사용할 때는 항상 mm_table_box로 감싸줍니다.<br>
						* mm_table에 data-table 속성을 기본으로 적용하고 그 외 필요한 속성을 추가합니다.<br>
						* 테이블의 너비값은 자동으로 적용되고, col로 각 영역의 너비값을 지정할 수도 있습니다.<br>
						* ajax로 변경 시 mm_table 요소 내 mm_scroll 요소까지 포함하여 변경 후 update를 실행합니다.

						<br><br>
						<strong># mm_table</strong><br>
						* mm.table.update(selector) :: 테이블 분할 변경 (페이지 로드 시 update)<br>
						* mm.table.remove(selector) :: 테이블 삭제<br>
						* mm.table.destroy(selector) :: 테이블 해제<br>
						* mm.table.resize(selector) :: 테이블 리사이즈
					</p>
				</div>
			</section>
			<section class="m_template-component-item">
				<h3><b>좌측고정 테이블</b><small>S=table-fixed</small></h3>
				<template type="text/codehtml">
					<div class="mm_table_box">
						<div class="mm_table" data-table>
							<div class="mm_scroller" style="max-height:200px;">
								<!-- (D) 좌측고정 영역에는 colspan, rowspan을 사용할 수 없으며 th, td에 'S=table-fixed' 클래스를 추가합니다. -->
								<table>
									<thead>
										<tr>
											<th class="col_check S=table-fixed" scope="col">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-fixed" data-check="{ '_type': 'check_all' }">
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">전체선택</span>
														</b>
													</label>
												</div>
											</th>
											<th class="S=table-fixed" scope="col">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</th>
											<th class="S=table-fixed" scope="col">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</th>
											<th class="S=table-fixed" scope="col">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</th>
											<th class="S=table-fixed" scope="col">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-fixed" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td colspan="5" rowspan="5">
												<div class="mm_table-item" style="width:1500px;">
													우측 스크롤 영역
												</div>
											</td>
										</tr>
										<tr>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-fixed" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
										</tr>
										<tr>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-fixed" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
										</tr>
										<tr>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-fixed" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
										</tr>
										<tr>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-fixed" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
											<td class="S=table-fixed">
												<div class="mm_table-item">
													좌측 고정
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						<strong># 높이 제한 (max-height)</strong><br>
						* mm_scroller에 inine-style로 넣어줍니다. (ex. style="max-height:200px;")
						* 설정한 높이까지만 내용이 표시되고 세로 스크롤바가 노출됩니다.
						<br><br>
						<strong># 좌측 고정</strong><br>
						* th, td에 S=table-fixed 클래스를 추가합니다.<br>
						* 좌측고정 영역에는 colspan, rowspan 사용하지 않습니다.<br>
						* 건너뛰기 없이 0번 째 열부터 차례로 적용해야 합니다.
					</p>
				</div>
			</section>
			<section class="m_template-component-item">
				<h3><b>테이블 + 상하단</b><small>mm_table_box-caption, mm_table_box-unit</small></h3>
				<template type="text/codehtml">
					<!-- 테이블영역 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<h3 class="mm_heading">
								<b>1. mm_table_box-caption 타이틀</b>
							</h3>
							<h3 class="mm_heading">
								<a href="#" data-href="{ '_type': 'link' }"><b>mm_table_box-caption 링크 타이틀</b><i class="ico_link"></i></a>
							</h3>
							<div class="mm_lside">
								<a class="mm_btn T=line T=secondary btn_register" href="/pro/product/manage/register" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 등록하기</b><i class="ico_register"></i></a>
								<ul class="mm_table-status">
									<li>상품 수<b class="mm_text-secondary"><strong class="text_num">1234</strong>개</b></li>
									<li>반품 미처리<b class="mm_text-secondary"><strong class="text_num">1234</strong>건</b></li>
									<li>배송 출발 준수일 초과 주문 수<a href="#" data-href="{ '_type': 'link' }"><b class="mm_text-secondary"><strong class="text_num">0</strong>건</b></a></li>
								</ul>
								<div class="mm_note">
									<p><i class="ico_image-show"></i> 아이콘 클릭 시 이미지가 노출됩니다.</p>
								</div>
							</div>
							<div class="mm_rside">
								<a class="mm_btn T=line btn_help" href="#" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>도움말</b><i class="ico_help"></i></a>
								<div class="mm_form-select T=list">
									<label>
										<select data-select>
											<option>20개 보기</option>
											<option>40개 보기</option>
											<option>60개 보기</option>
											<option>80개 보기</option>
											<option>100개 보기</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
								<span class="text_unit">(단위: 원/개)</span>
							</div>
						</div>
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
										<button type="button" class="mm_btn T=line">
											<b>선택 삭제</b>
										</button>
										<button type="button" class="mm_btn">
											<b>기능 버튼</b>
										</button>
										<button type="button" class="mm_btn">
											<b>기능 버튼</b>
										</button>
									</div>
								</div>
							</div>
							<div class="mm_rside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<a class="mm_btn T=line T=light btn_code" href="/order/ship/code" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>택배사 코드표</b><i class="ico_ship"></i></a>
										<a class="mm_btn T=line T=xload btn_excel" href="/excel-downloadn/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블상단 -->

						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th class="col_check" scope="col">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-table" data-check="{ '_type': 'check_all' }">
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">전체선택</span>
														</b>
													</label>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													<span>상품 이미지</span><button type="button" class="btn_preview-toggle" title="이미지 미리보기 켜기">
														<i class="ico_image-show"></i>
													</button>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품 코드
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													상품 유형
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													진열 상품명
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													진열 상태
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													주문 제작 상품
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													정가
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													등록일시
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													관리
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-table" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
														<b>이미지보기</b>
														<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-lazyload="{ '_src': '/public/images/_sample/product_3.jpg' }" alt=""></i>
													</a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													12345
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													일반상품
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													진열
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													N
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
											<td><div class="mm_table-item"></div></td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm T=line T=secondary" href="#" data-href="{ '_type': 'link' }"><b>URL 복사</b></a>
														</div>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-table" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<a class="mm_btn T=sm T=line T=light btn_preview-image" href="/image-preview" data-href="{ '_type': 'popup' }" title="새 창 열림">
														<b>이미지보기</b>
														<i class="image_preview"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-lazyload="{ '_src': 'error' }" alt=""></i>
													</a>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													12555
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													타임딜 상품
												</div>
											</td>
											<td class="T=table-left">
												<div class="mm_table-item">
													<p class="T=linebreak">
														<b>[밸리걸] 레터링 티셔츠 120670</b>
													</p>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													미진열
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													Y
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<span class="text_price">125000</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													2020-04-20 12:12:12
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													<div class="mm_btn_box">
														<div class="mm_inline">
															<a class="mm_btn T=sm T=line T=secondary" href="#" data-href="{ '_type': 'link' }"><b>URL 복사</b></a>
														</div>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->

						<!-- 테이블하단 -->
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<a class="mm_btn T=line T=secondary" href="/search/product" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>상품 추가</b></a>
										<button type="button" class="mm_btn T=line">
											<b>선택 삭제</b>
										</button>
										<button type="button" class="mm_btn">
											<b>기능 버튼</b>
										</button>
										<button type="button" class="mm_btn">
											<b>기능 버튼</b>
										</button>
									</div>
								</div>
							</div>
							<div class="mm_rside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<a class="mm_btn T=line T=light btn_code" href="/order/ship/code" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>택배사 코드표</b><i class="ico_ship"></i></a>
										<a class="mm_btn T=line T=xload btn_excel" href="/excel-downloadn/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
									</div>
								</div>
							</div>
						</div>
						<!-- // 테이블하단 -->
					</div>
					<!-- // 테이블영역 -->

					<!-- 테이블영역 -->
					<div class="mm_table_box">
						<!-- 테이블상단 -->
						<div class="mm_table_box-caption">
							<div class="mm_rside">
								<ul class="mm_table-sort">
									<!-- (D) 현재 페이지에 해당하는 탭에 'S=sort-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
									<li class="S=sort-on" title="선택됨">
										<button type="button">
											<b>이번 달</b>
										</button>
									</li>
									<li>
										<button type="button">
											<b>전체</b>
										</button>
									</li>
								</ul>
							</div>
						</div>
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
											<i class="ico_sortable-edit"></i><b>순서편집</b>
										</button>
									</div>
								</div>
							</div>
							<div class="mm_rside">
								<div class="mm_form_mix-linked">
									<span class="text_linked">세트상품 일괄처리</span>
									<div class="mm_form-file">
										<button type="button" class="btn_remove-file">
											<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
										</button>
										<label>
											<input type="file" data-file>
											<span class="text_path"></span>
											<span class="mm_btn T=line T=light text_label">파일첨부</span>
										</label>
									</div>
									<a class="btn_sample" href="#" download><b>샘플다운받기</b></a>
									<button type="button" class="mm_btn T=line T=xload btn_excel">
										<b>엑셀 업로드</b><i class="ico_upload"></i>
									</button>
									<span class="text_division">|</span>
									<a class="mm_btn T=line T=xload btn_excel" href="/excel-downloadn/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
								</div>
							</div>
						</div>
						<!-- // 테이블상단 -->

						<!-- 테이블 -->
						<div class="mm_table" data-table>
							<div class="mm_scroller">
								<table>
									<thead>
										<tr>
											<th class="col_check" scope="col">
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sortable" data-check="{ '_type': 'check_all' }">
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">전체선택</span>
														</b>
													</label>
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
											<th scope="col">
												<div class="mm_table-item">
													텍스트
												</div>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sortable" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 1
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 1
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sortable" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 2
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 2
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div class="mm_table-item">
													<label class="mm_form-check">
														<input type="checkbox" name="dev_check-sortable" data-check>
														<b class="mm_block">
															<i class="ico_form-check"></i>
															<span class="text_label mm_ir-blind">항목선택</span>
														</b>
													</label>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 3
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 3
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 3
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 3
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													텍스트 3
												</div>
											</td>
										</tr>
										<tr class="S=sortable-excepted">
											<td>
												<div class="mm_table-item">
													<span class="text_check-none">-</span>
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													순서편집 제외
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													순서편집 제외
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													순서편집 제외
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													순서편집 제외
												</div>
											</td>
											<td>
												<div class="mm_table-item">
													순서편집 제외
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- // 테이블 -->

						<!-- 테이블하단 -->
						<div class="mm_table_box-unit">
							<div class="mm_lside">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<button type="button" class="mm_btn T=line T=secondary btn_sort-edit" data-sort>
											<i class="ico_sortable-edit"></i><b>순서편집</b>
										</button>
									</div>
								</div>
							</div>
							<div class="mm_rside">
								<div class="mm_form_mix-linked">
									<span class="text_linked">세트상품 일괄처리</span>
									<div class="mm_form-file">
										<button type="button" class="btn_remove-file">
											<i class="ico_form-clear"></i><b class="mm_ir-blind">파일삭제</b>
										</button>
										<label>
											<input type="file" data-file>
											<span class="text_path"></span>
											<span class="mm_btn T=line T=light text_label">파일첨부</span>
										</label>
									</div>
									<a class="btn_sample" href="#" download><b>샘플다운받기</b></a>
									<button type="button" class="mm_btn T=line T=xload btn_excel">
										<b>엑셀 업로드</b><i class="ico_upload"></i>
									</button>
									<span class="text_division">|</span>
									<a class="mm_btn T=line T=xload btn_excel" href="/excel-downloadn/excel-download" data-href="{ '_type': 'popup' }" title="새 창 열림"><b>엑셀 다운로드</b><i class="ico_download"></i></a>
								</div>
							</div>
						</div>
						<!-- // 테이블하단 -->

						<!-- 페이지네이션 -->
						<!-- (D) 현재 페이지의 메뉴에 'S=page-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
						<div class="mm_pagination">
							<div class="mm_inline">
								<ol>
									<li><a class="S=page-on" href="#" title="선택됨"><b>1</b></a></li>
									<li><a href="#"><b>2</b></a></li>
									<li><a href="#"><b>3</b></a></li>
									<li><a href="#"><b>4</b></a></li>
									<li><a href="#"><b>5</b></a></li>
								</ol>
								<button type="button" class="btn_control-first" onclick="mm.link('')" disabled>
									<i class="ico_page-first"></i><b class="mm_ir-blind">처음</b>
								</button>
								<button type="button" class="btn_control-prev" onclick="mm.link('')" disabled>
									<i class="ico_page-prev"></i><b class="mm_ir-blind">이전</b>
								</button>
								<button type="button" class="btn_control-next" onclick="mm.link('')">
									<i class="ico_page-next"></i><b class="mm_ir-blind">다음</b>
								</button>
								<button type="button" class="btn_control-last" onclick="mm.link('')">
									<i class="ico_page-last"></i><b class="mm_ir-blind">마지막</b>
								</button>
							</div>
							<div class="mm_pagination-jump">
								<div class="mm_form_mix-linked">
									<div class="mm_form-text">
										<label>
											<input type="text" class="textfield" data-text><i class="bg_text"></i>
											<span class="text_placeholder">숫자</span>
										</label>
									</div>
									<button type="button" class="btn_jump">
										<b class="mm_ir-blind">이동</b><i class="ico_page-jump"></i>
									</button>
									<p class="text_linked">
										of 10<strong>(1,125 items)</strong>
									</p>
								</div>
							</div>
						</div>
						<!-- // 페이지네이션 -->

						<!-- 안내문구 -->
						<div class="mm_note">
							<ul>
								<li>테이블 관련 안내문구</li>
								<li>테이블 관련 안내문구</li>
								<li>테이블 관련 안내문구</li>
							</ul>
						</div>
						<!-- // 안내문구 -->
					</div>
					<!-- // 테이블영역 -->
				</template>
				<div class="m_template...note">
					<p>
						<strong># 기본</strong><br>
						* mm_table 상하단에 추가되는 요소가 있을 경우 스타일에 따라 mm_table_box-caption/unit으로 감싸줍니다.<br>
						* mm_table_box-unit은 상하단 동일하게 맞춰줍니다.<br>
						* 페이지네이션이 있는 테이블의 경우 mm_table_box 안쪽으로 mm_pagination 영역을 넣어줍니다.<br>
						* 이미지가 들어간 테이블에는 상단에 안내문구를 넣어줍니다.
						<br><br>
						<strong># 순서편집 기능</strong><br>
						* 순서편집 버튼 클릭 시 mm_table_box에 S=sortable 클래스가 추가됩니다.<br>
						* 리스트 내에 순서편집 기능을 제외할 tr에 S=sortable-excepted 클래스를 추가하고,<br>
						&nbsp;&nbsp;해당 tr 체크박스 영역에는 &#60;span class="text_check-none"&#62;-&#60;/span&#62; 를 추가합니다.
					</p>
				</div>
			</section>
			<section class="m_template-component-item">
				<h3><b>내용없음</b><small>mm_table-none</small></h3>
				<template type="text/codehtml">
					<!-- 기본형 -->
					<div class="mm_table_box">
						<div class="mm_table-none">
							<p>등록된 내용이 없습니다.</p>
						</div>
					</div>

					<!-- 상단에 검색영역 있을 시 -->
					<div class="mm_table_box">
						<div class="mm_table-none">
							<p>검색된 결과가 없습니다.</p>
						</div>
					</div>
				</template>
				<div class="m_template...note">
					<p>
						* mm_table_box 안 mm_table 영역을 삭제하고 mm_table-none을 넣어줍니다.<br>
						* 상단에 검색영역 유무에 따라 문구를 변경합니다.<br>
						&nbsp;&nbsp;기본 : 등록된 내용이 없습니다.<br>
						&nbsp;&nbsp;검색영역 : 검색된 결과가 없습니다.
					</p>
				</div>
			</section>
		</article>
		<!-- // 테이블 -->
	</div>
	<!-- // 템플릿 요소 -->
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';
	import { loadScript } from 'vue-plugin-load-script';

	document.documentElement.classList.add('L=template');

	(async () => {

		await loadScript('https://cdn.jsdelivr.net/npm/highlight.js@9.18.1/lib/highlight.js');

		// highlight js 로드
		hljs.initHighlighting();

	})();

	onMounted(() => {

		// app_page-common.js의 load와 ready를 재실행
		mm.event.dispatch(document, 'DOMContentLoaded'); // ready
		mm.event.dispatch(window, 'load'); // load

		// 테이블 콜백 샘플
		var sampleFunc = {
			// 정렬 변경
			tableOrderBy: function(__o) {

				// this: mm_table요소
				// __o.el: 선택한 th요소
				// __o._index: lside, rside를 포함한 전체 th요소 중 선택한 th요소의 index
				// __o._isDescending: 내림차순 true, 오름차순 false

				console.log(this);
				console.log(__o);

			},
			// 순서 변경
			tableColumnChange: function(__o) {

				// this: mm_table요소
				// __o.el: 선택한 th요소
				// __o.ths: mm_table요소 내 전체 th요소

				console.log(this);
				console.log(__o);

			},
		};

		// datepicker 콜백 샘플
		function datepickerCallback() {

			console.log(arguments);

		}

		// bom 콜백 샘플
		function sampleCallback() {

			alert(_.values(arguments));

		}

		// bom prompt 샘플
		function samplePrompt() {

			var options = {
				_title: '고객센터 이관처리',
				forms: [
					{
						_type: 'select',
						options: [
							{ _text: '가나다', _value: 'select 가' },
							{ _text: 'abcd', _value: 'select a' },
							{ _text: '123', _value: 'select 1', _selected: true },
						],
					},
					{
						_type: 'textarea',
						_placeholder: '고객센터로 이관하는 사유를 작성하세요.',
						_value: 'value 내용\n줄바꿈', // textarea의 줄바꿈은 \n 입니다.
					},
					{
						_type: 'text',
						// _placeholder: '입력',
						_value: '결과 값',
					},
					{
						_type: 'password',
						_placeholder: '비밀번호를 입력해 주세요',
					},
					{
						_type: 'date',
						// _placeholder: '날짜를 선택하세요.',
						_format: 'YYYY년 MM월 DD일',
					},
					{
						// pc에서 지원 안함 (select, text 등으로 적용)
						_type: 'time',
						_placeholder: '시간 (pc에서 지원 안함, select로 사용)',
						_format: 'a hh:mm',
					},
				],
			};
			mm.bom.prompt('', sampleCallback, options);

		}

		(function() {

			var $header = mm.find('.m_template-header');
			var $component = mm.find('.m_template-component article');
			var $componentItem = mm.find('.m_template-component-item', $component);
			var $btnAnchors = mm.find('.m_template-sidebar .btn_anchor');
			var $subBtnAnchors;
			var _classOn = 'S=anchor-on';
			var _anchorHeight = parseFloat(mm.element.style($header[0], 'height'));

			// 서브 메뉴 생성
			_.forEach(mm.find('.m_template-sidebar-sub'), function(__$sub, __index) {

				__$sub.innerHTML = '';

				_.forEach(mm.find('.m_template-component-item h3 b', $component[__index]), function(__$span) {

					mm.element.append(__$sub, mm.string.template('<li><a href="#"><b>${NAME}</b></a></li>', { NAME: __$span.innerText }));

				});

			});
			$subBtnAnchors = mm.find('.m_template-sidebar-sub a');

			// 영역 이벤트
			mm.intersection.on($componentItem, function(__entry, __is) {

				if (__is) {
					mm.class.remove($btnAnchors, _classOn);
					mm.element.attribute($btnAnchors, { 'title': '' });

					var $btn = $btnAnchors[mm.element.index($component, __entry.target.closest('article'))];
					$btn.classList.add(_classOn);
					$btn.setAttribute('title', '선택됨');

					// (function callee(__isEnd) {

					// 	var $anchors = (__isEnd !== true) ? $subBtnAnchors : $btnAnchors;// 2뎁스 : 1뎁스
					// 	mm.class.remove($anchors, _classOn);
					// 	mm.element.attribute($anchors, { 'title': '' });

					// 	var $btn = (__isEnd !== true) ? $anchors[mm.element.index($componentItem, __entry.target)] : $anchors[mm.element.index($component, __entry.target.closest('article'))];
					// 	$btn.classList.add(_classOn);
					// 	$btn.setAttribute('title', '선택됨');

					// 	if (__isEnd !== true) callee(true);

					// })();
				}

			}, {
				config: {
					rootMargin: '-50% 0px -50% 0px', // 요소의 상단이 스크롤 높이의 35%
					threshold: [0, 1], // 요소의 시작과 끝 모두 감지
				},
			});

			// 컴포넌트 앵커 이동
			mm.event.on($btnAnchors, 'click', function(__e) {

				__e.preventDefault();

				mm.scroll.to(this.getAttribute('href'), { _margin: _anchorHeight });

			});

			mm.event.on($subBtnAnchors, 'click', function(__e) {

				__e.preventDefault();

				mm.scroll.to($componentItem[mm.element.index($subBtnAnchors, this)], { _margin: _anchorHeight });

			});

		})();

		// 소스 들여쓰기 공백제거
		function codeIndent(__$code) {

			if (!__$code) return;

			var $code = document.createElement('div');
			$code.appendChild(document.importNode(__$code.content, true));

			var textLines = __$code.innerHTML.split('\n');
			var _blankCount = 0;
			var textResults = [];

			_.forEach(textLines, function(__value, __index) {

				if (__value.trim().length > 0) {
					var _value = __value.trimEnd();
					if (_blankCount == 0) _blankCount = _value.split(/\t/).findIndex(function(__value) {

						return _blankCount == 0 && __value.length > 0;

					});
					textResults.push(_value.slice(_blankCount));
				}

			});

			return textResults.join('\n');

		}

		// preview에 내용 삽입
		_.forEach(mm.find('[type="text/codehtml"]'), function(__$code, __index) {

			var textResults = [];
			_.forEach(__$code.childNodes, function(__$el, __index) {

				textResults.push(__$el.outerHTML);

			});

			var _code = textResults.join('\n');

			var $code = mm.element.create(mm.string.template([
				'<div class="mm_tab" data-tab>',
				'	<div class="mm_tab_menu">',
				'		<ul>',
				'			<li><a class="btn_tab S=tab-on" href="#" title="선택됨"><b>PREVIEW</b></a></li>',
				'			<li><a class="btn_tab" href="#"><b>MARKUP</b></a></li>',
				'		</ul>',
				'	</div>',
				'	<div class="mm_tab-item m_template...preview S=tab-on">',
				'		<div class="m_template...preview-inner">${CODE}</div>',
				'	</div>',
				'	<div class="mm_tab-item">',
				'		<pre><code class="html"></code></pre>',
				'	</div>',
				'</div>',
			], { CODE: _code }))[0];

			mm.element.before(__$code, $code);
			mm.find('code', $code)[0].textContent = _code;
			__$code.remove();

		});

	});
</script>

<style lang="scss">
	@import 'https://cdn.jsdelivr.net/npm/highlight.js@9.18.1/styles/github.css';

	.mm_app {padding-top: 60px;}
	.mm_app .mm_view {padding-top: 0;}

	.m_template-header {position: fixed; z-index: 1000; top: 0; right: 0; left: 0; background: #00989c; white-space: nowrap;}
	.m_template-header * {display: inline-block; color: #fff; line-height: 60px;}
	.m_template-header h1 {padding: 0 20px; font-size: 25px;}

	.m_template-sidebar {position: fixed; z-index: 1000; top: 60px; bottom: 0; left: 0; width: 250px; border-right: 1px solid #efefef; background: #fff;}
	.m_template-sidebar .mm_scroller {padding: 30px;}
	.m_template-sidebar ul li .btn_anchor {display: block; position: relative; padding: 10px 0; color: #5a5a5a; font-size: 14px; line-height: 16px;}
	.m_template-sidebar ul li .btn_anchor.S\=anchor-on {color: #00989c; font-weight: 700;}
	.m_template-sidebar ul li .btn_anchor.S\=anchor-on + .m_template-sidebar-sub {display:  block;}

	.m_template-sidebar .m_template-sidebar-sub {display: none; position: fixed; z-index: 1100; top: 0; left: 250px; padding: 15px 10px 15px 40px; height: 60px; box-shadow: 0 3px 13px 0 rgb(82 63 105 / 0.05); font-size: 0; line-height: 29px; white-space: nowrap;}
	.m_template-sidebar .m_template-sidebar-sub > li {display: inline-block; margin-left: 5px;}
	.m_template-sidebar .m_template-sidebar-sub > li a {padding: 0 10px; width: auto; border: 0; background: transparent; color: #fff; font-size: 14px; line-height: 34px;}
	.m_template-sidebar .m_template-sidebar-sub > li a.S\=anchor-on {color: #fff;}
	.m_template-sidebar .m_template-sidebar-sub > li a.S\=anchor-on::after {content: none;}

	.m_template-component {margin-left: 250px; padding: 40px; background-color: #f9f9fc;}
	.m_template-component article {padding-bottom: 100px;}
	.m_template-component article > h2 {padding: 17px 20px; background: rgb(18 167 170 / 0.1); color: #00989c; font-weight: 500; font-size: 16px;}
	.m_template-component .m_template-component-item { margin-top: 30px; padding: 0 30px 25px; background-color:  #fff;box-shadow: 0 0 13px 0 rgb(0 0 0 / 0.06);}
	.m_template-component .m_template-component-item > h3 {margin: 0 -30px; padding: 10px 20px; border-bottom: 1px solid #e4e4e4; font-size: 16px; line-height: 30px;}
	.m_template-component .m_template-component-item > h3 small {margin-left: 10px; color: #888; font-weight: 300; font-size: 14px;}
	.m_template-component .m_template-component-item > .mm_tab {margin-top: 20px;}
	.m_template-component .m_template-component-item > .mm_tab > .mm_tab_menu {border-bottom: 1px solid #eee;}
	.m_template-component .m_template-component-item > .mm_tab > .mm_tab_menu .btn_tab {width: 150px; height: 40px; border: 0; background: none; font-size: 17px; line-height: 40px;}
	.m_template-component .m_template-component-item > .mm_tab > .mm_tab_menu .btn_tab.S\=tab-on {color: #00989c;}
	.m_template-component .m_template-component-item > .mm_tab > .mm_tab_menu .btn_tab.S\=tab-on::after {position: absolute; right: 0; bottom: -1px; left: 0; border: 0; border-bottom: 2px solid #00989c; content: '';}
	.m_template-component .m_template-component-item > .mm_tab > .mm_tab-item {padding: 25px 0;}

	.m_template-component .m_template-component-item .m_template\.\.\.preview {max-width: 1360px;}
	.m_template-component .m_template-component-item .m_template\.\.\.preview-inner {background: #fff;}
	.m_template-component .m_template-component-item pre {overflow: auto; max-height: 400px; font-size: 13px; line-height: 17px; letter-spacing: 0.5px; white-space: pre;}
	.m_template-component .m_template-component-item pre code {padding: 20px;}
	.m_template-component .m_template\.\.\.preview-inner > *:nth-child(n+2) {margin-top: 5px;}
	.m_template-component .m_template\.\.\.note > p {padding: 15px 20px; border: 1px solid #e4e4e4; border-left: 3px solid #703cf1; border-radius: 3px; font-size: 14px; line-height: 20px;}
	.m_template-component .m_template\.\.\.note > p strong {color: #331a72; font-weight: 700;}
	.m_template-component .m_template\.\.\.note table {margin-top: 10px; border: 1px solid #e4e4e4; font-size: 14px;}
	.m_template-component .m_template\.\.\.note table tr > * {padding: 10px; border-top: 1px solid #e4e4e4; line-height: 22px;}
	.m_template-component .m_template\.\.\.note table thead th {font-weight: 600;}
	.m_template-component .m_template\.\.\.note table thead th:last-child {width: 50%;}
	.m_template-component .m_template\.\.\.note table tbody tr p {text-align: left;}
	.m_template-component .m_template\.\.\.note table tbody tr:nth-child(odd) {background: #f9f9f9;}

	.m_template-component .m_template\.\.\.icon b {margin: 15px 0 -5px; padding: 7px 13px; background: #eee; font-size: 13px;}
	.m_template-component .m_template\.\.\.icon i {margin-top: 5px; width: 16px; height: 15px; background-repeat: no-repeat;}
	.m_template-component .m_template\.\.\.icon table tr > * {padding: 6px;}

	.m_template-component [data-lazyload].S\=loaded {width: 100%; height: 100%}
</style>