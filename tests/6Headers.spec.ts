// how to send headers and validate in Playwright
// metadata, additional info

// COMMON HEADERS
// content type - application/json
// Accept: application/json
// Authorization: Bearer token

// DEFAULT HEADERS
// host, user-agent, connection:keep-alive, Accept-encoding:gzip

import {test, expect} from '@playwright/test';

test('Validate API headers in Playwright', async({request})=>{
    const requestHeaders={
        'content-type': 'application.json',
        'Accept': 'application/json'
    };
    const response = await request.post("https://jsonplaceholder.typicode.com/users",{
        headers: requestHeaders,
        data:{
            name:'test user',
            email:'testuser@example.com'
        }

    });

    const responseBody = await response.json();

    console.log('Response Hearers');
    console.log(response.headers());

    console.log('Response Body');
    console.log(response.body);

    expect(response.status()).toBe(201);

    expect(response.headers()['content-type']).toBeDefined();
    expect(response.headers()['content-type']).toContain('application/json');
    expect(response.headers()['server']).toBeDefined();

    //expect(responseBody.name).toBe('Test user');
})
