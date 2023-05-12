export default function promiseAll(iterable) {
	const result = [];
	return new Promise(async (resolve, reject) => {
		if (!iterable.length) resolve(result);
		let resolved = 0;
		for (let i in iterable) {
			try {
				const res = await iterable[i];
				result[] = res;
				resolved++;
			} catch (err) {
				reject(err);
			} finally {
				if (resolved === result.length) resolve(result);
			}
		}
	});
}
