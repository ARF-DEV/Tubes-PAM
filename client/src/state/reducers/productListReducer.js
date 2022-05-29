const productListState = {
     list : [],
}


const productListReducer = (state = productListState, action) => {
     switch (action.type) {
          case 'GET_PRODUCT_LIST':
               return {
                    ...state,
                    list: action.payload
               }
          default:
               return state;
     }
}

export default productListReducer;

