import {test, expect} from '@playwright/test';

test ("create user using POST API", async({request})=>{

    const response = await request.post("https://jsonplaceholder.typicode.com/users", {
        data:{
            name: 'Test User',
            email: 'testuserdk@ex.com'
        }
    })

    const responseBody = await response.json();
    console.log(responseBody);

    expect (response.status()).toBe(201);
})
