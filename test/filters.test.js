import { Selector, t } from 'testcafe';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { users } from '../usersnotlocked'; 

fixture`Filters`.page`https://www.saucedemo.com/`;

const loginPage = new LoginPage();
const homePage = new HomePage();

users.forEach((user) => {
  test(`Filtrando productos con ${user.username}`, async (t) => {
    const selectSortContainer = Selector('.product_sort_container');

  await loginPage.login(user.username, user.password);
  await t.expect(await homePage.getWelcomeMessage()).eql('Swag Labs');

  await t.click(selectSortContainer).click(Selector('option[value="za"]'));
  await t.expect(selectSortContainer.value).eql('za');
  
  await t.click(selectSortContainer).click(Selector('option[value="az"]'));
  await t.expect(selectSortContainer.value).eql('az');

  await t.click(selectSortContainer).click(Selector('option[value="lohi"]'));
  await t.expect(selectSortContainer.value).eql('lohi');

  await t.click(selectSortContainer).click(Selector('option[value="hilo"]'));
  await t.expect(selectSortContainer.value).eql('hilo');
  
  });
});
