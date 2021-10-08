import { testPassword, testUsername } from '@controllers/LoginController';
import supertest from 'supertest';
import { app } from '../app';
import * as jwt from 'jsonwebtoken';

const agent = supertest(app);

let token = '';

describe('Generic Routes Tests', () => {
  //
  it('Should return 403 when not authenticated', async () => {
    const res = await agent.post('/users');
    expect(res.statusCode).toBe(403);
  });
});

describe('Login Route Tests', () => {
  //
  it('Should return 403 upon malformed login request', async () => {    
    const res = await agent.post('/login');
    expect(res.statusCode).toBe(403);
  });
  //
  it('Should Login and receive a token with expiration', async () => {
    const base64Encoded = Buffer.from(`${testUsername}:${testPassword}`).toString('base64');
    const basicAuth = `Basic ${base64Encoded}`;
    const res = await agent.post('/login')
      .set('Authorization', basicAuth);
    expect(res.statusCode).toBe(202);
    expect(res.body).toHaveProperty('token');
    token = res.body['token'];
    const decoded = jwt.decode(token);
    expect(decoded).toHaveProperty('iat');
    expect(decoded).toHaveProperty('exp');
  });
});

describe('Logoff Route Tests', () => {
  //
  it('Should return 403 upon malformed logoff request', async () => {    
    const res = await agent.post('/logoff');
    expect(res.statusCode).toBe(403);
  });
  //
});