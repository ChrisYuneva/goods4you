import {useAppSelector} from './useRedux.ts';
import {useMemo} from 'react';

function useGetQuantity(id: number) {
    const {cart} = useAppSelector(state => state.cartByUserId);

    return useMemo(() => {
        return cart?.products.find((product) => product.id === id)?.quantity ?? 0;
    }, [cart, id]);
}

export default useGetQuantity;