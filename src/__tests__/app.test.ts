import request from 'supertest';
import { app } from '../app';

describe('Server Tests', () => {
  //
  it('Should return 404 Error on / route', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(404);
  });
});