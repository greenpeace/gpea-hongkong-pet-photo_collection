/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
// import * as productActions from '@store/actions/action-types/shopify-products-actions'
// import * as singleProductActions from '@store/actions/action-types/shopify-product-actions'
// import * as signupActions from '@store/actions/action-types/signup-actions'
// import * as loginActions from '@store/actions/action-types/login-actions'
// import * as cartActions from '@store/actions/action-types/shopify-cart-actions'

// import * as cartActions from '@actionTypes/shopify-cart-actions'
// import * as product from '@store/sagas/shopifyProductSaga'
// import * as customer from '@store/sagas/shopifyCustomerSaga'
// import * as cart from '@store/sagas/shopifyCartSaga'

function* rootSaga() {
  yield all([
    // takeLatest(productActions.SHOPIFY_GET_PRODUCTS, product.getProducts),
    // takeLatest(singleProductActions.SHOPIFY_GET_PRODUCT, product.getProduct),
    
    // takeLatest(signupActions.CREATE_CUSTOMER, customer.signup),
    // takeLatest(loginActions.LOGIN_CUSTOMER, customer.login),

    // takeLatest(cartActions.SHOPIFY_CREATE_CHECKOUT, cart.createCheckout),
    // takeLatest(cartActions.SHOPIFY_CHECKOUT_LINE_ITEMS_ADD, cart.checkoutLineItemsAdd),
    // takeLatest(cartActions.SHOPIFY_CUSTOMER_ASSOCIATE, cart.customerAssociate)
  ])
}

export default rootSaga