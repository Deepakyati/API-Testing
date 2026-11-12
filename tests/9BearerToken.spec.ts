import {test, expect} from '@playwright/test';

test('Bearer token', async({request})=>{

    const loginResponse = await request.post(
        'https://dummyjson.com/auth/login',{
            data:{
                username:'emilys',
                password: 'emilyspass'
            }
        }
    );

    expect(loginResponse.status()).toBe(200);
    const loginBody = await loginResponse.json();
    console.log(loginBody);

    const bearerToken = loginBody.accessToken;
    console.log('Access token', bearerToken);

    //How to use bearer token for login
    const profileResponse = await request.get(
        'https://dummyjson.com/auth/me',{
            headers:{
                Authorization: `Bearer ${bearerToken}`
            }
        }
    );

    expect(profileResponse.status()).toBe(200);
    const profileBody = await profileResponse.json();
    console.log(profileBody);

    expect(profileBody.username).toBe('emilys');



})