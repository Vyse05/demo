import { test } from "../helper_classes/base";
import testURL from "../helper_classes/testURL";
import userInfo from "../helper_classes/userInfo";

test("User is able to successfully purchase a product @ui", async ({
  loginPage,
  productsPage,
  cartPage,
}) => {
  await loginPage.gotoLoginPage(testURL.URL_LOGIN);
  await loginPage.login(
    process.env.STANDARD_USER_NAME as string,
    process.env.STANDARD_USER_PASSWORD as string,
    testURL.URL_INVENTORY
  );
  await productsPage.addFirstProductToCart(testURL.URL_CART);
  await cartPage.checkoutCart(testURL.URL_CHECKOUT_STEP_ONE);
  await cartPage.fillInformationForm(
    userInfo.username,
    userInfo.password,
    userInfo.password,
    testURL.URL_CHECKOUT_STEP_TWO
  );
  await cartPage.confirmPurchase(testURL.URL_CHECKOUT_COMPLETE);
});
