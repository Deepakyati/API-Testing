//Authentication in API testing
// 401 unauthorized

//No Authentication (public API) - do not need any authentication or authorization
//Basic authentication - client must send valid username and password with request - 401
//Bearer token authentication
//API key authentication
//OAuth 2.0

import {test, expect} from '@playwright/test';

test ('Basic authentication', async({request})=>{
    const response = await request.get(
        'https://httpbin.org/basic-auth/user/passwd',{
            headers:{
                Authorization:
                'Basic' +
                Buffer.from('user:passwd').toString('base64')
            }
        }
    );

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.authenticated).toBe(true);
    expect(responseBody.user).toBe('user');
})