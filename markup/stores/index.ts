import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

const pinia = createPinia();

pinia
	.use((context) => {
		const initialState = { ...context.store.$state };
		context.store.$reset = () => {
			context.store.$patch(initialState);
			if (!context.options.persist) {
				return;
			}
            // persist 옵션 사용하는 경우 스토리지에 키값도 초기화 처리
			if (context.options.persist === true) {
				return localStorage.removeItem(context.store.$id);
			}

			if (!Array.isArray(context.options.persist)) {
				return (context.options.persist.storage as Storage).removeItem(context.store.$id);
			}

			context.options.persist.forEach(persist => (persist.storage as Storage).removeItem(context.store.$id));
		};
	})
	.use(createPersistedState({
        // 커스텀 키 적용
		key: (key) => `mm.${key}`,
	}));

export default pinia;