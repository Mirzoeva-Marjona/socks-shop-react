import {addPurchase, getPurchase, getPurchases, savePurchases} from "../product.serveice";

const initialCartState = {
    purchases: getPurchases()
}
export const ADD_TO_CART = 'addToCart';
export const DELETE_FROM_CART = 'deleteFromCart';
export const DELETE_CART_ROW = 'deleteCartRow';

function cartReducer(state = initialCartState, action) {

    switch (action.type) {

        case ADD_TO_CART:
            addPurchase(action.payload.id, action.payload.size);
            return {purchases: getPurchases()};

        case DELETE_FROM_CART:
            let purchases = getPurchases();
            let purchase = getPurchase(action.payload.idSize);
            if (purchase.count !== 1) {
                purchase.count--;
                purchases.set(action.payload.idSize, purchase);
            } else {
                purchases.delete(action.payload.idSize)
            }
            savePurchases(purchases);
            return {purchases: getPurchases()};

        case DELETE_CART_ROW: {
            let purchases = getPurchases();
            purchases.delete(action.payload.idSize);
            savePurchases(purchases);
            return {purchases: getPurchases()};
        }

        default:
            return state;
    }
}

export default cartReducer
