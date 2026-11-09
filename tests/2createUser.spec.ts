import {test, expect} from '@playwright/test';

//status code validation
//response body validation
//object validation
//ID validation
//Data type validation
//Field existance validation
//Empty validation
//Format validation

test.only("create user using POST API", async({request})=>{

    const response = await request.post("https://jsonplaceholder.typicode.com/users", {
        data:{
            name: 'Test User',
            email: 'testuserdk@ex.com'
        }
    })

    const responseBody = await response.json();
    console.log(responseBody);

    //status code validation
    expect (response.status()).toBe(201);
    //response body validation
    expect(responseBody.name).toBe('Test User');
    expect(responseBody.email).toBe('testuserdk@ex.com');
    //ID validation
    expect(responseBody.id).toBeDefined();
    //Data type validation
    expect(typeof responseBody.id).toBe('number');
    //Field existance validation
     expect(responseBody.name).toBeDefined();
    expect(responseBody.email).toBeDefined();



})
