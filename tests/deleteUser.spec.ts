import {test, expect, request} from '@playwright/test';

test.only("delete user data", async({request})=>{

    const response = await request.delete('https://jsonplaceholder.typicode.com/users/1');

    console.log(response.status());

})