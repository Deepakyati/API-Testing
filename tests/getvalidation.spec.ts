import {test, expect, request} from '@playwright/test';

test.only("Get user API", async({request})=>{

    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    console.log(response.status());

    //convert response to JSON
    const data = await response.json();
    console.log(data);

    expect(response.status()).toBe(200);

    //validate array lenght
    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBe(10);

    //validate firstuser
    const firstuser = data[0];
    expect(firstuser.id).toBe(1);
    expect(firstuser.name).toBeDefined();
    expect(firstuser.name).toBe('Leanne Graham');
    expect(firstuser.email).toContain('@');
    //nested validation
    expect(firstuser.address).toBeDefined();
    expect(firstuser.address.city).toBe('Gwenborough');
    expect(firstuser.address.zipcode).toBeDefined();

    //Array validation 
    for (const user of data){
        expect(user.id).toBeDefined();
        expect(user.email).toContain('@');
        expect(user.phone).toBeDefined();
    }

    //data type validation
    expect(typeof firstuser.id).toBe('number');
    expect (typeof firstuser.name).toBe('string');

    //empty validation
    expect(firstuser.id).not.toBe('');
    




})