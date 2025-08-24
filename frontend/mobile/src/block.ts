
export const baseBlockPath = './src/block';
export const MOBILE_BLOCK_COMPONENTS = import.meta.glob<false, 'raw', AsyncComponentLoader<Component>>('./src/block/**/*.vue');