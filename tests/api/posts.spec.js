import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
test('GET a single post', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.title).toBeTruthy();
});

test('POST creates a new post and returns it with an id', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/posts`,
        {
            data: { title: 'My QA Post', body: 'Testing APIs', userId: 1 },
        });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe('My QA Post');
    expect(body.id).toBeTruthy();
});

test('GET a post that does not exist returns 404', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/posts/99999`);

  expect(response.status()).toBe(404);
});

test('PUT updates an entire post', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/posts/1`,
        {
            data: { title: 'Updated title', id: 1, body: 'Updated body', userId: 1 }
        });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.title).toBe('Updated title');
});

test('DELETE removes a post', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);

})
