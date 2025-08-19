import { ref } from 'vue';
import { useBackend } from '$/composables/useBackend';

export function useCaptcha() {
	const imageUrl = ref('');
	const validateToken = ref('');

    /**
     * 캡차코드 생성
    */
	async function generate() {
		const { captcha_image_url, token } = await useBackend().command<{
            captcha_image_url: string
            token: string
        }>('v1/auth/make-captcha', {
        	method: 'post'
        });

		imageUrl.value = captcha_image_url;
		validateToken.value = token;
	}

    /**
     * 캡차코드 매칭 검증
     * @param code
    */
	async function match(code: string) {
		try {
			await useBackend().command('v1/auth/check-captcha', {
				method: 'post',
				data: {
					token: validateToken.value,
					captcha_code: code,
				}
			});
		}
		catch (error) {
            /** 실패한 캡챠 재사용 불가 */
			generate();
			throw error;
		}
	}

	return {
		imageUrl,
		generate,
		match,
	};
}