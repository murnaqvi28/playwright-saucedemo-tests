import { test, expect } from '@playwright/test';
import { title } from 'node:process';

test('GET a single post', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.title).toBeTruthy();
});

test('POST creates a new post and returns it with an id', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts',
        {
            data: { title: 'My QA Post', body: 'Testing APIs', userId: 1 },
        });
    
        expect(response.status()).toBe(201);
        
        const body = await response.json();
        expect(body.title).toBe('My QA Post');
        expect(body.id).toBeTruthy();
})
