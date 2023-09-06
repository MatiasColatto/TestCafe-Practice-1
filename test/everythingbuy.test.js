import { Selector, t } from 'testcafe';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { users } from '../usersnotlocked'; 

fixture`Log out`.page`https://www.saucedemo.com/`;

users.forEach((user) => {
  test(`test ${user.username}`, async (t) => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const firstNameInput = Selector('#first-name');
    const lastNameInput = Selector('#last-name');
    const postalCodeInput = Selector('#postal-code');
    const buttons = Selector('button').withText('Add to cart');

    

      await loginPage.login(user.username, user.password);
      await t.expect(await homePage.getWelcomeMessage()).eql('Swag Labs');
      
      await t.wait(500);

      await t
        .click(buttons.nth(0))
        .click(buttons.nth(0))
        .click(buttons.nth(0))
        .click(buttons.nth(0))
        .click(buttons.nth(0))
        .click(buttons.nth(0))

      await t.wait(500);

      await t.click(Selector('.shopping_cart_link')); 

      await t.click(Selector('#checkout')); 

      await t.typeText(firstNameInput, 'Alejandro');

      await t.typeText(lastNameInput, 'Pozuelo');

      await t.typeText(postalCodeInput, 'B1228');

      await t.click(Selector('#continue')); 

      await t.click(Selector('#finish')); 

      await t.wait(500);
      
  });
});
