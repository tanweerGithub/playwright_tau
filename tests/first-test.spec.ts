/**
 * 1. Open the page
 * 2. Click at Get started
 * 3. Mouse hover the language dropdown
 * 4. Click at  Java
 * 5. Check the URL 
 * 6. Check the text "Installing Playwright" is not being displayed
 * 7. Check the text below is displayed
 * 
 * Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.
 * 
 */

import { test, expect } from '@playwright/test';

test.only('check Java page', async({page})=>{

    await page.goto('https://playwright.dev');

    await page.getByRole('link', {name: 'Get started'}).click()

    await page.getByRole('button',{name:'Node.js'}).hover();

    await page.getByRole('link', { name: 'Java', exact: true }).click();

    await expect (page).toHaveURL("https://playwright.dev/java/docs/intro")

    await expect(page.getByText("Installing Playwright", {exact:true})).not.toBeVisible();

    const javaSurprise = "Playwright is distributed as a set of Maven modules.";

    await expect(page.getByText(javaSurprise)).toBeVisible();
    
});