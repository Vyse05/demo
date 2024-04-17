import test from "@playwright/test";
import gorestApi from "../api-operations/gorest.api";
import endpoints from "../helper_classes/endpoints";

let response; //Needed if we use beforeEach

test.beforeEach("Retrieve the list of users @api", async () => {
  response = await gorestApi.getListOfUsers((endpoints.BaseURL + endpoints.Users) as string);
});

test("Retrieve a non-empty list of users @api", async () => {
  await gorestApi.checkIfListNotEmpty(response);
});

test("Retreive a list of users containing at least one name with letter C @api", async () => {
  await gorestApi.checkIfListContainsLetterC(response);
});

test("Write out all users from the list in the console @api", async () => {
  await gorestApi.checkIfListNotEmpty(response);
  await gorestApi.listOutUsersInConsole(response);
});

/* Tests that do not use beforeEach - there is code repetition 
test("Retrieve a non-empty list of users @api", async () =>{
   const response = await gorestApi.getListOfUsers((endpoints.BaseURL + endpoints.Users) as string);
   await gorestApi.checkIfListNotEmpty(response);
   });

test("Retreive a list of users containing at least one name with letter C @api", async () => {
    const response = await gorestApi.getListOfUsers((endpoints.BaseURL + endpoints.Users) as string);
    await gorestApi.checkIfListContainsLetterC(response);
});

test("Write out all users from the list in the console @api", async() => {
    const response = response = await gorestApi.getListOfUsers((endpoints.BaseURL + endpoints.Users) as string);
    await gorestApi.checkIfListNotEmpty(response);
    await gorestApi.listOutUsersInConsole(response);
});

*/
