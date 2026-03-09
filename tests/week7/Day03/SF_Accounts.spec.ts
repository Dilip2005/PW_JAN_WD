import { customFixture } from "./CustomFixture";

//test("",async{page})
customFixture("Click Accounts",async({salesForceLogin})=>{

    //change custom fixture to storage state

    const title= await salesForceLogin.title()
    console.log(title)

await salesForceLogin.locator("//span[text()='Accounts']").first().click()



})
