const app = require('../../src/app');
const request = require('supertest');

describe('API Health service', () => {
  
  it('should have a health check endpoint', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: `{ 
          health { 
            message 
            uptime
          } 
        }`
      })
      .expect(200);

      expect(res.body).toHaveProperty('data.health.message')
      expect(res.body).toHaveProperty('data.health.uptime')
  });
  
});