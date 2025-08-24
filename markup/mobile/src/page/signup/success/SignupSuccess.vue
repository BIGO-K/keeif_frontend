<template>
	<layout
		title="회원가입"
		layout="popup"
		class="L=sign"
		:is-footer="false"
		:is-toolbar="false"
	>
		<div class="m_popup-join">
			<h3 class="m_popup-join-title">
				<b>STEP 4</b><strong>가입완료</strong><i class="image_line T=step4"></i>
			</h3>
			<p class="text_complete">
				<strong>회원가입 완료!</strong><span>로그인 후</span>다양한 상품과<br> 혜택을 만나보세요
			</p>
			<div class="mm_btn_box">
				<mm-link
					class="mm_btn T=lg T=primary"
					:to="{ name: 'Login' }"
				>
					<b>로그인</b>
				</mm-link>
				<mm-link
					class="mm_btn T=lg T=line T=primary"
					:to="{ name: 'Main' }"
				>
					<b>메인으로 가기</b>
				</mm-link>
			</div>
		</div>
	</layout>
</template>

<script setup lang="ts">
	import Layout from '@/component/layout/Layout.vue';
</script>

<!-- 현재 페이지 스크립트 -->
<!--
	<script>
	(function () {

	// 꽃가루 효과
	var $container = mm.find('.mm_page-content');
	var $canvas = document.createElement('canvas');
	var context = $canvas.getContext('2d');

	$canvas.width = $container[0].offsetWidth;
	$canvas.height = $container[0].offsetHeight;
	mm.element.style($canvas, { 'position': 'absolute', 'top': 0, 'left': 0 });

	mm.element.prepend($container, $canvas);

	// 꽃가루 셋팅
	var loop = 2; // 꽃가루 반복 횟수
	var flakeNum;
	var flakeData = (function () {

	var maxNum = flakeNum = Math.round(Math.max($canvas.width, $canvas.height) / 15); // 최대갯수
	var colors = ['#61dca7', '#e6e6e6', '#48cc5a', '#ffc400', '#ff9294', '#ff80b3', '#ff7e5d', '#79de4f'];
	var alphas = [1, 0.5]; // 투명도
	var sizes = [12, 6]; // width/height 공통

	var base = {
	flakes: [], // 꽃가루 목록
	// 값 설정
	set: function (_flake) {

	_flake.x = Math.random() * $canvas.width; // x 좌표
	_flake.y = 0; // y 좌표
	_flake.width = sizes[Math.floor(Math.random() * sizes.length)]; // 너비
	_flake.height = sizes[Math.floor(Math.random() * sizes.length)]; // 높이
	_flake.color = colors[Math.floor(Math.random() * colors.length)]; // 색상
	_flake.density = (Math.random() * maxNum) * 2 / maxNum; // 밀도
	_flake.degree = (Math.random() * 360) * Math.PI / 180; // 각도
	_flake.alpha = alphas[Math.floor(Math.random() * alphas.length)]; // 투명도

	// x축 잘림 방지 조정
	if (_flake.x > $canvas.width - Math.max(_flake.width, _flake.height)) _flake.x = _flake.x - Math.max(_flake.width, _flake.height);
	if (_flake.x < Math.max(_flake.width, _flake.height)) _flake.x = _flake.x + Math.max(_flake.width, _flake.height);

	}
	};

	for (var _i = 0; _i < maxNum; _i++) {
	base.flakes[_i] = {};
	base.set(base.flakes[_i]);
	base.flakes[_i].y = Math.random() * $canvas.height - $canvas.height - 20; // y 좌표 - 처음 셋팅시에만 랜덤값
	}

	return base;

	})();

	// 꽃가루 생성
	var flakeAnimation;
	function drowFlake () {

	if (flakeData.flakes.length == 0) {
	cancelAnimationFrame(flakeAnimation);

	return;
	}

	context.clearRect(0, 0, $canvas.width, $canvas.height);

	for (var _i = 0; _i < flakeData.flakes.length; _i++) {
	var flake = flakeData.flakes[_i];

	context.fillStyle = flake.color;
	context.globalAlpha = flake.alpha;
	context.globalCompositeOperation = 'destination-over'; // 겹침시 새 꽃가루가 뒤로

	if (flake.degree === 0) {
	context.fillRect(flake.x, flake.y, flake.width, flake.height);
	}
	else {
	var halfWidth = (flake.width / 2);
	var halfHeight = (flake.height / 2);

	context.save(); // 캔버스 위치 저장
	context.translate(flake.x + halfWidth, flake.y + halfHeight); // 캔버스 중심좌표 꽃가루 중심으로 이동
	context.rotate(flake.degree);
	context.fillRect(-halfWidth, -halfHeight, flake.width, flake.height);
	context.restore(); // 캔버스 위치 복원
	}
	}

	updateFlake();
	flakeAnimation = requestAnimationFrame(drowFlake);
	};

	// 업데이트
	var angle = 0;
	var flakeCount = flakeNum;

	function updateFlake () {

	angle += 0.01;

	for (var _i = 0; _i < flakeData.flakes.length; _i++) {
	var flake = flakeData.flakes[_i];

	// 꽃가루 이동 스타일
	if (_i % 5 == 0) {
	// 좌우
	flake.x += Math.sin(angle + flake.density) * 1;
	flake.y += Math.cos(angle + flake.density) + 1 + flake.width / 7;
	}
	else {
	// 직선
	flake.y += flake.density + 1; // 밀도 + 이동속도
	}

	// 꽃가루 순환
	if (flake.y > $canvas.height || flake.x > $canvas.width || flake.x < -Math.max(flake.width, flake.height)) {
	if (flakeCount >= 0) {
	flakeCount--;

	if (flakeCount === 0) {
	loop--;

	if (loop >= 1) flakeCount = flakeNum;
	}

	if (loop === 1) flakeData.flakes.find(function (_$flake, _index) { if (_$flake === flake) flakeData.flakes.splice(_index, 1); });
	}
	flakeData.set(flake);
	}

	var spin = (flake.width != flake.height) ? 0.4 : 0.1; // 직사각형이 더 빠른회전 확률
	flake.degree += Math.random().toFixed(2) * spin;
	}

	};

	drowFlake();

	})();
	</script>
-->