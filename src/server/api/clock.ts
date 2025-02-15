import { Hono } from 'hono';

const api = new Hono();

api.get('/', (c) => c.text('API Root'));
api.get('/current', (c) => c.json({
  time: new Date().toLocaleTimeString(),
  msg: 'current time',
}));

export default api;
