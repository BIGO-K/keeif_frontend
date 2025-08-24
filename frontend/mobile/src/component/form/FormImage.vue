<template>
	<div class="mm_form-multiple">
		<ul :class="['mm_flex', needBlock ? 'T=equal' : '']">
			<li
				v-for="seq in max"
				:key="seq"
			>
				<div
					ref="divElements"
					class="mm_form-image"
				>
					<div
						ref="previewElements"
						class="mm_form-image-preview"
					></div>
					<label>
						<input
							ref="inputElements"
							type="file"
							v-bind="$attrs"
							@change="setImage(seq)"
						>
						<b class="mm_form-image-box"><i class="ico_upload"></i><span class="mm_ir-blind">사진 첨부하기</span></b>
					</label>
					<button
						type="button"
						class="btn_remove-file"
						@click="removeImage(seq)"
					>
						<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
					</button>
				</div>
			</li>
		</ul>
		<label class="mm_btn T=line T=variable btn_select-multiple">
			<input
				type="file"
				v-bind="$attrs"
				multiple
				@input="setImages"
			>
			<i class="ico_image-multiple"></i>
			<b>여러장 선택하기</b>
		</label>
	</div>
</template>

<script setup lang="ts">
	import { ref, watchEffect } from 'vue';
	import loadImage from 'blueimp-load-image';
	import mons from '$/utils/mons';

	defineOptions({
		inheritAttrs: false,
	});

	const props = withDefaults(defineProps<{
		modelValue?: (File | Blob | null)[]
		max?: number
		urls?: string[],
		needBlock?: boolean
	}>(), {
		modelValue: () => [],
		max: 3,
		urls: () => [],
		needBlock: false,
	});

	const emit = defineEmits<{
		(e: 'update:modelValue', value: (File | Blob | null)[]): void
	}>();


	const manageableFiles = ref(props.modelValue);
	const divElements = ref<HTMLDivElement[]>([]);
	const inputElements = ref<HTMLInputElement[]>([]);
	const previewElements = ref<HTMLDivElement[]>([]);

	watchEffect(() => {
		setTimeout(() => {
			props.urls.forEach((url, index) => load(index + 1, url));
		}, 100);
	});

	interface LoadableImageInput extends HTMLInputElement {
		files: FileList
	}

	function load(seq: number, file: File | string) {
		loadImage(file, async image => {
			const imageFileName = typeof file === 'string' ? file : file.name;
			const canvas = image as HTMLCanvasElement;
			const imageType = ((imageName: string) => {
				const extension = imageName.split('?')[0].split('.').pop();
				switch (extension) {
					case 'jpg':
					case 'jpeg':
						return 'image/jpeg';
					case 'png':
						return 'image/png';
					case 'gif':
						return 'image/gif';
					case 'svg':
						return 'image/svg+xmll';
					default:
						return 'image/jpeg';
				}
			})(imageFileName);

			const context = canvas.getContext('2d');
			const viewCanvas = document.createElement('canvas');
			const viewContext = viewCanvas.getContext('2d');
			const previewDiv = previewElements.value[seq - 1];
			divElements.value[seq - 1]?.classList.add('S=image-on');

			if (!context || !viewContext) {
				return;
			}

			viewCanvas.width = canvas.width;
			viewCanvas.height = canvas.height;
			viewContext.drawImage(canvas, 0, 0);

			// 비율
			const canvasRatio = canvas.width / canvas.height;
			const previewRatio = previewDiv.offsetWidth / previewDiv.offsetHeight;

			// 크기 계산
			if (canvasRatio > previewRatio) {
				// 이미지가 프리뷰 영역보다 세로로 길 때
				viewCanvas.width = viewCanvas.height * previewRatio; // 세로 100%
			}
			else {
				// 이미지가 프리뷰 영역보다 세로로 길 때
				viewCanvas.height = viewCanvas.width / previewRatio; // 가로 100%
			}

			// x,y 좌표 계산
			const x = (viewCanvas.width - canvas.width) / 2;
			const y = (viewCanvas.height - canvas.height) / 2;

			viewContext.drawImage(canvas, x, y); // 좌표 적용하여 canvas에 이미지 다시 그리기

			// 실제 노출될 canvas에 프리뷰 영역 크기 적용
			canvas.width = previewDiv.offsetWidth;
			canvas.height = previewDiv.offsetHeight;

			// x,y 좌표 세팅한 canvas > 노출용 canvas에 그리기
			context.drawImage(viewCanvas, 0, 0, canvas.width, canvas.height);

			previewDiv.innerHTML = '';
			previewDiv.append(canvas);

			manageableFiles.value[seq - 1] = typeof file === 'string'
				? baseURItoBlob(canvas.toDataURL(imageType, 0.95))
				: file;

			emit('update:modelValue', manageableFiles.value);
		}, {
			canvas: true,
			orientation: true,
			crossOrigin: 'Anonymous',
			imageSmoothingQuality: 'high',
		});
	}

	function baseURItoBlob(dataURI: string) {
		// convert base64/URLEncoded data component to raw binary data held in a string
		let byteString;
		if (dataURI.split(',')[0].indexOf('base64') >= 0) {
			byteString = atob(dataURI.split(',')[1]);
		}
		else {
			byteString = unescape(dataURI.split(',')[1]);
		}
		// separate out the mime component
		const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

		// write the bytes of the string to a typed array
		const byteArray = new Uint8Array(byteString.length);
		for (var i = 0; i < byteString.length; i++) {
			byteArray[i] = byteString.charCodeAt(i);
		}

		return new Blob([byteArray], { type: mimeString });
	}

	function setImage(seq: number) {
		const element = inputElements.value[seq - 1];

		if (!validate(element)) {
			return;
		}

		const file = element.files[0];
		load(seq, file);
	}

	/** 이미지 제거 */
	function removeImage(seq: number) {
		const element = inputElements.value[seq - 1];
		element.value = element.defaultValue;

		divElements.value[seq - 1]?.classList.remove('S=image-on');

		manageableFiles.value[seq - 1] = null;

		emit('update:modelValue', manageableFiles.value);
	}

	/** 이미지 다중설정 */
	function setImages(e: Event) {
		const inputElement = e.target as HTMLInputElement;
		const files = inputElement.files;
		if (!files) {
			inputElement.value = inputElement.defaultValue;

			return;
		}

		if (!validate(inputElement)) {
			inputElement.value = inputElement.defaultValue;

			return;
		}

		const emptyCount = props.max - manageableFiles.value.reduce((count, file) => count + (file ? 1 : 0), 0);

		if (emptyCount < files.length) {
			/** 빈 곳이 없거나 부족함 */
			mons().bom.alert(`이미지는 최대 ${props.max}개 까지 등록 가능합니다.`);
			inputElement.value = inputElement.defaultValue;

			return;
		}

		/** 빈 곳에 채워넣기 */
		let fileIndex = 0;
		for (let index = 0; index < props.max; index++) {
			if (manageableFiles.value[index]) {
				continue;
			}

			load(index + 1, files[fileIndex]);
			fileIndex++;
		}
	}

	/** 이미지 검증 */
	function validate(element: HTMLInputElement): element is LoadableImageInput {
		try {
			if (!element.files || element.files.length < 1) {
				return false;
			}

			const fileList = element.files;
			const accepts = element.getAttribute('accept') || '';

			// 확장자 제한 없을시 이미지여부만 확인
			if (accepts === 'image/*') {
				for (let i = 0; i < fileList.length; i++) {
					if (!fileList[i] || fileList[i]['type'].split('/')[0] !== 'image') {
						throw new TypeError(`이미지 파일만 등록할 수 있습니다.`);
					}
				}
			}
			else {
				// 확장자 제한 있는경우
				for (let i = 0; i < element.files.length; i++) {
					const match = accepts.split(',').some((__accept) => {
						return fileList[i].name.toLowerCase().endsWith(__accept.trim());
					});

					if (!match) {
						throw new TypeError(`${accepts} 확장자의 파일만 등록할 수 있습니다.`);
					}
				}
			}
		}
		catch (error) {
			return false;
		}

		return true;
	}
</script>