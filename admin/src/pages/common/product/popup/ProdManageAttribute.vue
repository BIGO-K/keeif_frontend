<template>
	<layout-popup>
		<template #title>
			<h1><b>속성별 입력</b></h1>
		</template>

		<template #content>
			<div class="mm_page-content">
				<!-- 본문 내용 -->
				<div class="mm_container">
					<div class="mm_form">
						<table>
							<tbody>
								<tr>
									<th></th><td></td><th></th><td></td>
								</tr>
								<tr>
									<th scope="row">
										<b>기준사이즈</b>
									</th>
									<td>
										<div class="mm_form-text T=xs">
											<button type="button" class="btn_text-clear">
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">기준사이즈</span>
											</label>
										</div>
									</td>
									<th scope="row">
										<b>가슴둘레</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">가슴둘레</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>허리둘레</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">허리둘레</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
									<th scope="row">
										<b>엉덩이둘레</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">엉덩이둘레</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>총장(허리~밑단)</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">총장(허리~밑단)</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
									<th scope="row">
										<b>총장(뒷목점~밑단)</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">총장(뒷목점~밑단)</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>소매길이</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">소매길이</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
									<th scope="row">
										<b>밑위길이</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">밑위길이</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>어깨넓이</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">어깨넓이</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
									<th scope="row">
										<b>가로</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">가로</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>세로</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">세로</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
									<th scope="row">
										<b>폭</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">폭</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>끈길이</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">끈길이</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
									<th scope="row">
										<b>굽높이</b>
									</th>
									<td>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text T=xs">
												<button type="button" class="btn_text-clear">
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input type="text" class="textfield" data-text maxlength="10"><i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">굽높이</span>
												</label>
											</div>
											<span class="text_linked">cm</span>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<!-- 최하단버튼 -->
					<div class="mm_foot">
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button type="button" class="mm_btn T=xl T=tertiary">
									<b>적용하기</b>
								</button>
							</div>
						</div>
					</div>
					<!-- // 최하단버튼 -->
				</div>
				<!-- // 본문 내용 -->
			</div>
		</template>
	</layout-popup>
</template>

<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>