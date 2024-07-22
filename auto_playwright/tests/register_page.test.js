const { test, expect } = require('@playwright/test')
const { RegisterPage } = require('../Pages/register_page')

test('registration_positive', async ({page}) => {
    const Register = new RegisterPage(page);
    await Register.open_registration_page();
    await Register.fill_login();
    await Register.fill_password();
    await Register.fill_confirm();
    await Register.submit_registration();
    await expect(page).toHaveURL('http://34.141.58.52:8080/#/profile');
})

test('registration_with_invalid_email', async ({page}) => {
    const Register = new RegisterPage(page);
    await Register.open_registration_page();
    await Register.fill_login_with_invalid_email();
    await Register.fill_password();
    await Register.fill_confirm();
    await Register.submit_registration();
    await expect(page.getByText('This field is email')).toBeVisible();
    //await expect(page.submit_registration).toBeDisabled();
    await expect(page).toHaveURL('http://34.141.58.52:8080/#/register');
})

test('registration_with_invalid_password', async ({page}) => {
    const Register = new RegisterPage(page);
    await Register.open_registration_page();
    await Register.fill_login();
    await Register.fill_password_invalid();
    await Register.fill_confirm_invalid_password();
    await Register.submit_registration();
    await expect(page.locator('//*[@id="pv_id_2_content"]/div/div')).toBeVisible();
    //await expect(page.submit_registration).toBeDisabled();
    await expect(page).toHaveURL('http://34.141.58.52:8080/#/register');
})

test('registration_with_invalid_confirm_password', async ({page}) => {
    const Register = new RegisterPage(page);
    await Register.open_registration_page();
    await Register.fill_login();
    await Register.fill_password_invalid();
    await Register.fill_confirm_invalid();
    await Register.submit_registration();
    await expect(page.locator('//*[@id="pv_id_2_content"]/div/div')).toBeVisible();
    //await expect(page.submit_registration).toBeDisabled();
    await expect(page).toHaveURL('http://34.141.58.52:8080/#/register');
})