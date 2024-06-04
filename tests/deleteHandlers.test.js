// eslint-disable-next-line no-undef
const config = require('../config');

test('Request status code Should be 200', async () => {
    let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'DELETE',
		});
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseCode).toBe(200);
});


test('Response body should contain true if the kit id 6 is deleted', async () => {
    let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true)
});
