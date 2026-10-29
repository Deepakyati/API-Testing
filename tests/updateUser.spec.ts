import {test, expect, request} from '@playwright/test';

test.only("update user using PUT API", async({request})=>{
    const response = await request.put('https://jsonplaceholder.typicode.com/users/1', {
        data:{
            name: 'updated name DK',
            email: 'updateddk@gmail.com'
        }
    })

    const responseBody = await response.json();
    console.log(responseBody);
    console.log('status code: ', response.status());

    expect(response.status()).toBe(200);


})