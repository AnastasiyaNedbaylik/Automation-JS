exports.RegisterPage = class RegisterPage{
    constructor(page) {
        this.page = page;
        this.login_field = page.locator('//*[@id="login"]');
        this.password_field = page.locator('//*[@id="password"]/input');
        this.confirm_field = page.locator('//*[@id="confirm_password"]/input');
        this.submit_btn = page.locator('//*[@id="pv_id_2_content"]/div/form/div[4]/button');

    }

    async open_registration_page() {
        this.page.goto('http://34.141.58.52:8080/#/register');
    }

    async fill_login() {
        this.login_field.focus();
        this.login_field.fill('anastasiya.niadbailik+autffotest33@gmail.com');
    }

    async fill_login_with_invalid_email() {
        this.login_field.focus();
        this.login_field.fill('anastasiya.niadbailik+autffotest33gmail.com');
    }

    async fill_password() {
        this.password_field.focus();
        this.password_field.fill('fhfurbd4547474@!@!');
    }
    
    async fill_password_invalid() {
        this.password_field.focus();
        this.password_field.fill('qwerty');
    }

    async fill_confirm() {
        this.confirm_field.focus();
        this.confirm_field.fill('fhfurbd4547474@!@!');
    }

    async fill_confirm_invalid() {
        this.confirm_field.focus();
        this.confirm_field.fill('qwerty');
    }

    async submit_registration() {
        this.login_field.click();
        this.submit_btn.click();
    }

}