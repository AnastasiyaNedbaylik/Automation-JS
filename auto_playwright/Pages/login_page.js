exports.LoginPage = class LoginPage{
    constructor(page) {
        this.page = page;
        this.login_field = page.locator('//*[@id="login"]');
        this.password_field = page.locator('//*[@id="password"]/input');
        this.submit_btn = page.locator('//*[@id="pv_id_2_content"]/div/form/div[3]/button');

    }

    async open_login_page() {
        this.page.goto('http://34.141.58.52:8080/#/login');
    }

    async fill_login() {
        this.login_field.focus();
        this.login_field.fill('anastasiya.niadbailik+autotest2@gmail.com');
    }

    async fill_password() {
        this.password_field.focus();
        this.password_field.fill('fhfurbd4547474@!@!');
    }

    async submit_login() {
        this.login_field.click();
        this.submit_btn.click();
    }

}
