import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv, searchForWorkspaceRoot  } from 'vite';
// import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), 'MM_') as ImportMetaEnv;

	return {
		plugins: [
			vue(),
			// tsconfigPaths(),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'$': path.resolve(__dirname, '..')
			}
		},
		css: {
			devSourcemap: true
		},
		envPrefix: 'MM_',
		base: env.MM_BASE_PATH ?? '/',
		build: {
			target: 'es2020',
			outDir: env.MM_OUT_DIR ?? 'dist',
		}
	}
});