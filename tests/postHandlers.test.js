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

test('Request status code Should be 200', async () => {
	let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
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
	
	expect(actualResponseCode).toBe(200);
});


test('Product id 1 should be added to the kit id 6', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
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

	expect (actualResponseBody["name"]).toBe("Strudel");
	expect (actualResponseBody["productsList"][10]["name"]).toBe("Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free");
});
