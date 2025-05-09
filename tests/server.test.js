const request = require('supertest');
const app = require('../server');  // Exportiere in server.js: module.exports = app

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World');
    expect(res.statusCode).toBe(200);
  });
});