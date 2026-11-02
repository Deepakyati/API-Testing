import {test, expect} from '@playwright/test';

test.only('Patch User data', async({request})=>{

    const response = await request.patch('https://jsonplaceholder.typicode.com/users/1',
    {
        data:{
            email:'abcd@gmail.com',
        }
    });


    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
    expect(typeof responseBody).toBe('object');
    expect(responseBody.id).toBe(1);




});
