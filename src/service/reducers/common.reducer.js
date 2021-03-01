

const initialCommonState = {
    isOpenBasket: false,
    category: ''
}

export const CATEGORY = 'category';
export const OPEN_BASKET = 'openBasket';
export const CLOSE_BASKET = 'closeBasket';

function commonReducer(state = initialCommonState, action) {

    switch (action.type) {
        case OPEN_BASKET:
            return {...state, isOpenBasket: true};

        case CLOSE_BASKET:
            return {...state, isOpenBasket: false};

        case CATEGORY:
                return {...state, category: action.payload.category};

        default:
            return state;
    }
}

export default commonReducer;
