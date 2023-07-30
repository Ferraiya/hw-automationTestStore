class ProductPage {

    getAddToCartButton(){
        return cy.get('.productpagecart .cart')
    }
    
   }
   
export default new ProductPage();