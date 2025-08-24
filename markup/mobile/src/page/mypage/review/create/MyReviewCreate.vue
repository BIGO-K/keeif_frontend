<template>
	<div class="m_overlay-myreview">
		<!-- 상품정보 : 선택형 -->
		<div class="m_overlay-myreview-product">
			<div class="m...product-point">
				<p><i class="ico_review-photo"></i>포토 리뷰 등록 시 최대<b><strong>5,000</strong><sub>원</sub></b>적립!</p>
				<div class="m...product-point-inner">
					<dl><dt>텍스트 리뷰</dt><dd><strong>1,000</strong><sub>원</sub></dd></dl>
					<dl><dt>포토 리뷰</dt><dd><strong>5,000</strong><sub>원</sub></dd></dl>
				</div>
			</div>
			<div class="mm_product-select">
				<dropdown icon-class="T=bold">
					<template #button>
						<b>상품을 선택해주세요</b>
					</template>
					<template #content>
						<div class="mm_scroller">
							<div class="mm_product-list T=xs">
								<ul>
									<li>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_2.png"
													></lazyload>
													<figcaption>
														<p class="text_product">시스루스트라이프셔츠</p>
														<p class="text_option">화이트 FREE</p>
													</figcaption>
												</figure>
											</a>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_1.png"
													></lazyload>
													<figcaption>
														<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140드레스_MJM1OP3140</p>
														<p class="text_option">화이트 FREE</p>
													</figcaption>
												</figure>
											</a>
										</div>
									</li>
									<li>
										<div class="mm_product-item">
											<a>
												<figure>
													<lazyload
														class="mm_bg-cover image_product"
														src="/image/_sample/prod_x1_3.png"
													></lazyload>
													<figcaption>
														<p class="text_product">시스루스트라이프셔츠</p>
														<p class="text_option">화이트 FREE</p>
													</figcaption>
												</figure>
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</template>
				</dropdown>
				<!-- (D) 선택된 상품이 노출됩니다. -->
				<div class="mm_product-select-complete"></div>
			</div>
		</div>
		<hr class="mm_line">

		<my-review-input></my-review-input>

		<div class="mm_inner">
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>등록하기</b>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Dropdown from '@/component/Dropdown.vue';
	import Lazyload from '@/component/Lazyload.vue';
	import MyReviewInput from '@/page/mypage/review/component/MyReviewInput.vue';

	defineExpose<OverlayComponentExpose>({
		title: `리뷰 쓰기`,
	});
</script>

<!--
	<script>
	(function() {

	//< 별점 선택
	var $starscore = mm.find('.m_overlay-myreview-starscore');
	var $star = mm.find('li', $starscore);

	mm.event.on($star, 'click', function(__e) {

	$starscore[0].classList.add('S=starscore-choice');

	var _currentIndex = mm.element.index(mm.find('li', $starscore), __e.currentTarget);

	_.each($star, function(__element, __index) {
	if (__index > _currentIndex) {
	__element.classList.remove('S=starscore-on');
	__element.children[0].removeAttribute('title');
	}
	else {
	__element.classList.add('S=starscore-on');
	__element.children[0].setAttribute('title', '선택됨');
	}
	});

	mm.find('input[type=hidden]', $starscore)[0].value = _currentIndex + 1;

	});
	//> 별점 선택

	// 리뷰 상품 선택시 포인트 안내 노출
	var $prodSelect = mm.find('.mm_product-select')[0];
	var $selectComplete = mm.find('.mm_product-select-complete', $prodSelect)[0];
	mm.event.on(mm.find('.mm_product-item', $prodSelect), 'click', function(__e) {

	var $reviewPoint = mm.find('.m\\.\\.\\.product-point')[0];
	var _classOn = 'S=point-on';

	if ($reviewPoint.classList.contains(_classOn)) return;

	$reviewPoint.classList.add(_classOn);

	mm.delegate.on($selectComplete, '.btn_remove', 'click', function(__e) {

	$reviewPoint.classList.remove(_classOn);

	});

	});

	})();
	</script>
-->