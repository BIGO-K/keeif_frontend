/// <reference types="vite/client" />

declare interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare interface ImportMetaEnv {
	readonly MM_BASE_URL: string;
	readonly MM_BASE_PATH: string;
	readonly MM_OUT_DIR: string;
}