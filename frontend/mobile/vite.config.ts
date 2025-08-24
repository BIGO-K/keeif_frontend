import vue from '@vitejs/plugin-vue';
import axios from 'axios';
import { defineConfig, loadEnv } from 'vite';
// import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), 'MM_') as ImportMetaEnv;// as unknown as ImportMetaEnv;

	return {
		plugins: [
			vue(),
			// tsconfigPaths(),
			{
				name: 'build-end',
				apply: 'build',
				async buildEnd(error) {
					if (error) return;
					const baseUrl = `${mode}` === 'operate' ? `https://backend.keeif.kr` : `https://dev-backend.keeif.kr`;
					axios.post(`${baseUrl}/api/v1/app/version`);
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
			target: 'es2020',
			outDir: env.MM_OUT_DIR,
		},
		server: {
			port: 5001,
		},
	};
});
