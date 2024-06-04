// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
		{
			"id": 1,
			"quantity": 1
		}
	]
};

const requestBodyWithUnavailableId = {
	"productsList": [
		{
			"id": 2,
			"quantity":1
		}
	]
};

test('Request status code Should be 201', async () => {
	let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseCode = response.status;
		
	} catch (error) {
		console.error(error);
	}
	
	expect(actualResponseCode).toBe(201);
});


test('A shopping cart is created if there is a warehouse that can process the order', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();

	} catch (error) {
		console.error(error);
	}

	expect (actualResponseBody["productsList"][0]["id"]).toBe(1);
});


test('Request status code Should be 409 if there is no warehouse that can process the order', async () => {
		let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyWithUnavailableId)
		});
		actualResponseCode = await response.status;

	} catch (error) {
		console.error(error);
	}

	expect (actualResponseCode).toBe(409);
});