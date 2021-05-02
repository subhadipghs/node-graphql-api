const app = require('../../src/app');
const request = require('supertest');

describe('API Health service', () => {
  describe('GET /health', () => {
    it('should have a health check endpoint', async () => {
      await request(app)
        .get('/health')
        .expect(200);
    });
  });
});