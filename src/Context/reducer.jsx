export const initialState = {
    Amazon : localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART" :
            return{
                ...state,
                Amazon : [...state.Amazon, {...action.payload, qty : 1}]
            };
        case "REMOVE_FROM_CART" :
            return {
                ...state,
                Amazon : state.Amazon.filter(item => item.id !== action.payload)
            };
        case 'CHANGE_QTY' :
            return{
                ...state,
                Amazon : state.Amazon.filter(item => item.id === action.payload.id ? item.qty = action.payload.qty: item.qty)
            };
        default:
            return state
    }
}

export default reducer
