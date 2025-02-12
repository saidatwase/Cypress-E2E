import { registerpage } from "../../Pages/registerpage"
const registerObj = new registerpage()
import registerData from '../../fixtures/registerData.json'

describe('test automation',()=>{

   it('register flow', ()=>{

    registerObj.openURL()
    registerObj.enterFirstName(registerData.firstName)
    registerObj.enterLastName(registerData.lastName)
    registerObj.enterEmail(registerData.email)
    registerObj.enterTelephone(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.selectCheckbox()
    registerObj.clickOnContinue()

   })

})