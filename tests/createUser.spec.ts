import {test, expect} from '@playwright/test';

//status code validation
//response body validation
//object validation
//ID validation
//Data type validation
//Field existance validation
//Empty validation
//Format validation

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
