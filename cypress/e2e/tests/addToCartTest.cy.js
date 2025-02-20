import { homepage } from "../../Pages/HomePage";
const homePageObj = new homepage()
import testData from  '../../fixtures/testData.json'

describe('test automation', ()=>{

    before(()=>{
          cy.login(testData.login.username, testData.login.password)
    })

    it('Add To Cart flow', ()=>{

        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);
    })

})