import { Selector, t } from 'testcafe';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { users } from '../users'; 

fixture`Login`.page`https://www.saucedemo.com/`;

const loginPage = new LoginPage();
const homePage = new HomePage();

users.forEach((user) => {
  test(`Iniciar sesión con ${user.username}`, async (t) => {
    await loginPage.login(user.username, user.password);
    await t.expect(await homePage.getWelcomeMessage()).eql('Swag Labs');
  });
});
