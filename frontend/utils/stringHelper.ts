const stringHelper = {
	wrap: (
		origin: string,
		search: string,
		before: string,
		after: string,
	) => {
		if (before === void 0) { before = ''; }
		if (after === void 0) { after = ''; }
		origin = '' + origin;

		return origin.split(search).join(before + search + after);
	},
};

export default stringHelper;