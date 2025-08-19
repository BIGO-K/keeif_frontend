const titleElement = document.querySelector<HTMLTitleElement>('title');

export function useHead(
	options?: {
		title?: string
	},
) {
	const baseTitle = options?.title ? `Keeif - ${options.title}` : 'Keeif';

	if (titleElement) {
		titleElement.innerText = baseTitle;
	}

	return {

	};
}