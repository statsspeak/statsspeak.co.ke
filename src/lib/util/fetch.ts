const xhr = {
	async postJSON(url: string, data: Dict, headers: Dict = {}): Promise<Response> {
		const request = new Request(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: new Headers(headers)
		});
		return fetch(request);
	}
};

export { xhr };
