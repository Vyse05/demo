import { test } from '../helper_classes/base.ts' // switch back to normal

//let loginPage;

//test.beforeEach(async ({ page }) => {
//  loginPage = new LoginPage(page);
  //await loginPage.gotoLoginPage(process.env.URL as string);
//});

test.afterEach(async () => {
  console.log("This is where we'd do some kind of a teardown");
});

test("User is able to login @only", async ({loginPage}) => {
  await loginPage.gotoLoginPage(process.env.URL as string);
  await loginPage.login(
    process.env.STANDARD_USER_NAME as string,
    process.env.STANDARD_USER_PASSWORD as string,
    process.env.INVENTORY_URL as string
  );
});
