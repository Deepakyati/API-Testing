import {test, expect} from '@playwright/test';

test.only('Continue request',async({page})=>{

    await page.route('**/products.json', async(route)=>{

        const request = route.request();
        console.log('url:', request.url());
        console.log('Method:', request.method());
        console.log('Headers:', request.headers());
        console.log('API Intercepted');

        await route.continue();
    })

    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
    await page.waitForTimeout(5000);



})