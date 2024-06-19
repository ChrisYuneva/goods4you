import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {Cart, ProductCart} from '../../services/cartByUserId/types';

interface initialCart {
    cart: Cart | null
}

const initialState: initialCart = {
    cart: null
}

export const cartByUserIdSlice = createSlice({
    name: 'cartByUserId',
    initialState,
    reducers: {
        getCart(state, action: PayloadAction<Cart>) {
            state.cart = action.payload;
        },
        addProduct(state, action: PayloadAction<ProductCart>) {
            if(state.cart){
                state.cart.total += action.payload.price;
                state.cart.totalQuantity += 1;
                state.cart.discountedTotal += action.payload.discountedTotal;
                state.cart?.products.push(action.payload);
                state.cart.products.map((product) => {
                    if(product.id === action.payload.id) {
                        product.quantity += 1;
                    }
                    return product;
                })
            }


        }
    },
})

export default cartByUserIdSlice.reducer;