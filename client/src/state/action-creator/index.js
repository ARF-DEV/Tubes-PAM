// const API_URL = 'http://localhost:8000';

const getProductList = () => {
     return async (dispatch) => {
          try {
               const response = await fetch('http://localhost:8000/products', {
                    method: 'GET',
                    headers: {
                         'Content-Type': 'application/json',
                    }
               });
               const result = await response.json();
               dispatch({
                    type: "GET_PRODUCT_LIST",
                    payload: result
               })
          } catch (error) {
               console.log(error);
          }
     }
}

const getProductListByName = (name) => {
     return async (dispatch) => {
          try {
               const response = await fetch(`http://localhost:8000/products?name=${name}`, {
                    method: 'GET',
                    headers: {
                         'Content-Type': 'application/json',
                    }
               });
               const result = await response.json();
               dispatch({
                    type: "GET_PRODUCT_LIST",
                    payload: result
               })
          } catch (error) {
               console.log(error);
          }
     }
}

export default { getProductList, getProductListByName };