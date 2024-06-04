// eslint-disable-next-line no-undef
const config = require('../config');

test('Request status code Should be 200', async () => {
	let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect (actualResponseCode).toBe(200);
});


test('Response body should contain the list of products from kit id 1', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect (actualResponseBody["name"]).toBe("For picnic");
});