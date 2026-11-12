import {test, expect, request} from '@playwright/test';

test ('Get Demo', async({request})=>{

    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    console.log(response.status());

    const data = await response.json();
    console.log(data);

    await expect(response.status()).toBe(200);
})