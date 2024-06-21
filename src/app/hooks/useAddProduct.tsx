import {getErrorMsg, productToProductCart} from '../utils';
import {Product} from '../store/services/products/types';
import {useUpdateCartByUserIdMutation} from '../store/services/cartByUserId/cartByUserIdApi.ts';
import {useAppDispatch, useAppSelector} from './useRedux.ts';
import {useEffect} from 'react';
import {cartByUserIdSlice} from '../store/slices/cartByUserId/cartByUserIdSlice.ts';
import {notificationErrorSlice} from '../store/slices/notificationError/notificationError.ts';

const {getCart} = cartByUserIdSlice.actions;
const {addErrorToast} = notificationErrorSlice.actions;

export function useAddProduct(product: Product) {
    const dispatch = useAppDispatch();
    const [updateCartByUserId, {isError, error, data, isLoading}] = useUpdateCartByUserIdMutation();
    const {cart} = useAppSelector(state => state.cartByUserId);

    function addProductHandle() {
        // dispatch(addProduct(productToProductCart(product)));
        if(product) {
            updateCartByUserId(
                {
                    id: cart?.id ?? 0,
                    // products: cart?.products ?? [],
                    products: [...(cart?.products ?? []), productToProductCart(product, 1)],
                    merge: false,
                });
        }
    }

    useEffect(() => {
        if(isError) {
            dispatch(addErrorToast({message: getErrorMsg(error) ?? ''}));
        }
    }, [dispatch, isError, error]);

    useEffect(() => {
        if(data) {
            dispatch(getCart(data));
        }
    }, [dispatch, data]);

    return {addProductHandle, isLoading};
}