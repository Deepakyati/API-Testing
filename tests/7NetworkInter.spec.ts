import {test, expect} from '@playwright/test';

test

test('continue request demo', async({page})=>{

    await page.route('**/products.json',async(route)=>{

        const request = route.request();
        console.log('URL:', request.url());
        console.log('Methos:', request.method());
        console.log('Headers:', request.headers());

        console.log('Product API intercepted');
        await route.continue();
    });

    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
    await page.waitForTimeout(5000);

})

test('Abort testing', async({page})=>{
    await page.route('**/products.json',async(route)=>{
        console.log('Page API blocked');
    await route.abort();
    })
    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
    await page.waitForTimeout(5000);
})

test.only('Fulfill Product API for 3 products', async({page})=>{
    await page.route('**/products.json',async(route)=>{
    console.log('Mocking Products API response');
    //get real response
    const response = await route.fetch();
    const body = await response.json();

    //modify data keep only 3 products
    body.products = body.products.slice(0,3);

    //send modifieddata back to UI
    await route.fulfill({
        response,
        body: JSON.stringify(body)
    });


    })
    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
    await page.waitForTimeout(5000);
})