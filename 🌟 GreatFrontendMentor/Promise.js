export default function promiseAll(iterable) {
	const result = [];
	return new Promise(async (resolve, reject) => {
		if (!iterable.length) resolve(result);

		for (let i in iterable) {
			try {
				const res = await iterable[i];
				result.push(res);
			} catch (err) {
				reject(err);
			} finally {
				if (iterable.length === result.length) resolve(result);
			}
		}
	});
}