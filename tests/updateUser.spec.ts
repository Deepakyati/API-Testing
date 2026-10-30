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

    expect(typeof responseBody).toBe('object');

    expect(responseBody.name).toBe('updated name DK');
    expect(responseBody.email).toBe('updateddk@gmail.com')

    expect(responseBody.id).toBe(1);
    
    expect(responseBody.name).toBeDefined();
    expect(responseBody.email).toBeDefined();
    //format validation
    expect(responseBody.email).toContain('@');


})