import vue from '@vitejs/plugin-vue';
import axios from 'axios';
import { defineConfig, loadEnv } from 'vite';
// import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd(), 'MM_') as ImportMetaEnv;

	return defineConfig({
		plugins: [
			vue(),
			// tsconfigPaths(),
			{
				name: 'close-bundle',
				async closeBundle(error) {
					if (error) return;
					const baseUrl = `${mode}` === 'operate' ? `https://backend.keeif.kr` : `https://dev-backend.keeif.kr`;
					try {
						await axios.post(`${baseUrl}/api/v1/app/version`);
					}
					catch (e) {
						console.log('버전 전송 실패');
					}
				},
			},
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'$': path.resolve(__dirname, '..')
			}
		},
		css: {
			devSourcemap: true,
		},
		envPrefix: 'MM_',
		base: env.MM_BASE_PATH || '/',
		build: {
			outDir: env.MM_OUT_DIR,
		},
		server: {
			port: 5001,
		},
	});
};
