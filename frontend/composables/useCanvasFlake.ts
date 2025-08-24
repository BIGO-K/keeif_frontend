import { ref, watch, isRef, computed, onUnmounted, onBeforeUnmount } from 'vue';
import { MaybeRef, useElementSize } from '@vueuse/core';

interface Flake {
    alpha: number;
    color: string;
    x: number;
    y: number;
    width: number;
    height: number;
    density: number;
    degree: number;
}

export const useCanvasFlake = (canvas: MaybeRef<HTMLCanvasElement|undefined>) => {
	const context = ref<CanvasRenderingContext2D|null>(null);
	const width = ref(0);
	const height = ref(0);

	const size = useElementSize(canvas);
	const stopWatch = watch([size.width, size.height], ([w, h]) => {
		if (isRef(canvas) && canvas.value) {
			context.value = canvas.value.getContext('2d');
			start();
		}
		width.value = w;
		height.value = h;

        // 크기값이 생겼으면 초기데이터 세팅
		for (let index = 0; index < maxNum.value; index++) {
			flakes.value = flakes.value.concat(makeFlake());
		}

	});

	const maxNum = computed(() => Math.max(width.value, height.value) / 15); // 최대갯수
	const colors = ['#61dca7', '#e6e6e6', '#48cc5a', '#ffc400', '#ff9294', '#ff80b3', '#ff7e5d', '#79de4f'];
	const alphas = [1, 0.5]; // 투명도
	const sizes = [12, 6]; // width/height 공통
	const angle = ref(0);
	const flakes = ref<Flake[]>([]);

    /**
     * 꽃가루 생성
     * @param fixTop : y 좌표 고정여부
     * @returns
    */
	function makeFlake(fixTop?: boolean): Flake {
		const flake: Flake = {
			x: Math.random() * width.value,
			y: fixTop ? 0 : Math.random() * height.value - height.value - 20,
			width: sizes[Math.floor(Math.random() * sizes.length)],
			height: sizes[Math.floor(Math.random() * sizes.length)],
			color: colors[Math.floor(Math.random() * colors.length)],
			density: (Math.random() * maxNum.value) * 2 / maxNum.value,
			degree: (Math.random() * 360) * Math.PI / 180,
			alpha: alphas[Math.floor(Math.random() * alphas.length)],
		};
        // x축 잘림 방지 x값 조정
		if (flake.x > width.value - Math.max(flake.width, flake.height)) {
			flake.x = flake.x - Math.max(flake.width, flake.height);
		}
		if (flake.x < Math.max(flake.width, flake.height)) {
			flake.x = flake.x + Math.max(flake.width, flake.height);
		}
		stopWatch();

		return flake;
	}

	function draw() {
		if (!context.value) {
			return;
		}

		context.value.clearRect(0, 0, width.value, height.value);

		flakes.value.forEach(flake => {
			if (!context.value) {
				return;
			}

			context.value.fillStyle = flake.color;
			context.value.globalAlpha = flake.alpha;
			context.value.globalCompositeOperation = 'destination-over'; // 겹침시 새 꽃가루가 뒤로

			if (flake.degree === 0) {
				context.value.fillRect(flake.x, flake.y, flake.width, flake.height);
			}
			else {
				const halfWidth = (flake.width / 2);
				const halfHeight = (flake.height / 2);
				context.value.save(); // 캔버스 위치 저장
				context.value.translate(flake.x + halfWidth, flake.y + halfHeight); // 캔버스 중심좌표 꽃가루 중심으로 이동
				context.value.rotate(flake.degree);
				context.value.fillRect(-halfWidth, -halfHeight, flake.width, flake.height);
				context.value.restore(); // 캔버스 위치 복원
			}
		});

		updateFlake();
		start();
	}

	function updateFlake() {
		angle.value += 0.01;
		flakes.value = flakes.value.map((flake, index) => {
            // 꽃가루 이동 스타일
			if (index % 5 == 0) {
                // 좌우
				flake.x += Math.sin(angle.value + flake.density) * 1;
				flake.y += Math.cos(angle.value + flake.density) + 1 + flake.width / 7;
			}
			else {
                // 직선
				flake.y += flake.density + 1; // 밀도 + 이동속도
			}

            // 꽃가루 순환
			if (flake.y > height.value || flake.x > width.value || flake.x < -Math.max(flake.width, flake.height)) {
				flake = makeFlake(true);
			}

			const spin = (flake.width != flake.height) ? 0.4 : 0.1; // 직사각형이 더 빠른회전 확률
			flake.degree += Number(Math.random().toFixed(2)) * spin;

			return flake;
		});
	}

	const frameId = ref(0);
	function start() {
		frameId.value = requestAnimationFrame(draw);
	}

	function stop() {
		cancelAnimationFrame(frameId.value);
		frameId.value = 0;
	}

	onBeforeUnmount(() => {
		stop();
	});

	return {
		start,
		stop,
	};
};