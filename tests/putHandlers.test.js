// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
        {
            "id": 4,
            "quantity":1
        }
    ]
};

test('Request status code Should be 200', async () => {
    let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseCode).toBe(200);
});


test('Response body should contain true if the change is acceptable', async () => {
    let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody["ok"]).toBe(true);
});

test('Response body should contain false if the product id in the request body is not in the product_model', async () => {
    const requestBodyWithWrongId = {
		"productsList": [
			{
				"id": 100,
				"quantity":1
			}
		]
	};

	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyWithWrongId)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody["ok"]).toBe(false);
});