const axios = require('axios');
const { expect } = require('@jest/globals');

const base_url = `http://localhost:3000/dev/`;

describe('End two end testing', () => {

	const resourse = `findtwobeers`

	it(`${base_url}${resourse}`, async (done) => {
		const url = `${base_url}${resourse}`;
		const res = await axios({
			method: 'post',
			url,
			data: {
				beers: [10, 15, 20],
				target: 30
			}
		});
		expect(res.status).toBe(200)
		done()
	})

})