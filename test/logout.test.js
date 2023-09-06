import { Selector, t } from 'testcafe';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { users } from '../usersnotlocked'; 

fixture`Log out`.page`https://www.saucedemo.com/`;

users.forEach((user) => {
  test(`Desloguearse luego de iniciar sesión con ${user.username}`, async (t) => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

      await loginPage.login(user.username, user.password);
      await t.expect(await homePage.getWelcomeMessage()).eql('Swag Labs');

      await t.wait(500);
      
      await t.click(Selector('#react-burger-menu-btn')); 

      await t.wait(500); 
      
      await t.click('#logout_sidebar_link');

      await t.wait(500);

      await t.expect(Selector('#login_credentials').exists).ok();
  });
});
