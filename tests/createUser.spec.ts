import {test, expect} from '@playwright/test';

test ("create user using POST API", async({request})=>{

    const response = await request.post("https://jsonplaceholder.typicode.com/users", {
        data:{
            name: 'Test User',
            email: 'testuserdk@ex.com'
        }
    })

    const responseBody = await response.json();

    expect (response.status()).toBe(201);
})