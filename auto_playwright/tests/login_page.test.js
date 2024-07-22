const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../Pages/login_page')

test('login', async ({page}) => {
    const Login = new LoginPage(page);
    await Login.open_login_page();
    await Login.fill_login();
    await Login.fill_password();
    await Login.submit_login();
    await expect(page).toHaveURL('http://34.141.58.52:8080/#/profile');
})