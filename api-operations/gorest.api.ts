import { request, APIRequestContext, expect } from "@playwright/test";

class GorestAPI {
  public async getListOfUsers(URL: string) {
    const context: APIRequestContext = await request.newContext();
    let response = await context.get(URL);
    return response;
  }

  public async checkIfListNotEmpty(response) {
    await expect(response.status()).not.toBeGreaterThanOrEqual(500); //Test will fail if the response is not returned, which is a server error (500+)
    await expect(response.status()).not.toBe(204); //Test will fail if the response has no content, which is a 204 code
  }

  public async checkIfListContainsLetterC(response) {
    await expect(response.status()).not.toBeGreaterThanOrEqual(500); //Test will fail if the response is not returned, which is a server error (500+)

    const responseJSON = await response.json();
    console.log(responseJSON);
    const hasNameStartingWithC = await responseJSON.some((obj) =>
      obj.name.startsWith("C")
    ); //The test will fail, as there is no user with letter C
    await expect(hasNameStartingWithC).toBeTruthy();

    // To verify that the method works, we can letter "J" (one user) or letter "A" (two users)
  }

  public async listOutUsersInConsole(response) {
    console.log(await response.json());
  }
}
export default new GorestAPI();
