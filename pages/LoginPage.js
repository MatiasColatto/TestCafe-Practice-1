import { Selector, t } from 'testcafe';

export default class LoginPage {
    constructor() {
        this.usernameInput = Selector('input#user-name');
        this.passwordInput = Selector('input#password');
        this.loginButton = Selector('#login-button');
    }

    async login(username, password) {
        await t.typeText(this.usernameInput, username)
               .typeText(this.passwordInput, password)
               .click(this.loginButton);
    }
}
