import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import styles from './counter.module.scss';
import Button from '../button/button.tsx';
import cn from 'classnames';
import {ProductCart} from '../../app/store/services/cartByUserId/types';
import {useAppDispatch, useAppSelector} from '../../app/hooks/useRedux.ts';
import {cartByUserIdSlice} from '../../app/store/slices/cartByUserId/cartByUserIdSlice.ts';
import {useUpdateCartByUserIdMutation} from '../../app/store/services/cartByUserId/cartByUserIdApi.ts';
import {useEffect} from 'react';

interface CounterProps {
    product: ProductCart,
    quantity: number;
    size?: 'default' | 'big';
    className?: string;
}

const {getCart} = cartByUserIdSlice.actions;

function Counter({ product, quantity, size, className }: CounterProps) {
    const dispatch = useAppDispatch();
    const [updateCartByUserId, {data}] = useUpdateCartByUserIdMutation();
    const {cart} = useAppSelector(state => state.cartByUserId);

    function incrementCounter() {
        updateCartByUserId(
            {
                id: cart?.id ?? 0,
                products: cart?.products.map((item) => {
                    if(item.id === product.id) {
                        return {id: item.id, quantity: item.quantity+1};
                    }
                    return {id: item.id, quantity: item.quantity};
                }) ?? [],
        });
    }

    function decrementCounter() {
        if(quantity > 1) {
            updateCartByUserId(
                {
                    id: cart?.id ?? 0,
                    products: cart?.products.map((item) => {
                        if(item.id === product.id) {
                            return {id: item.id, quantity: item.quantity-1};
                        }
                        return {id: item.id, quantity: item.quantity};
                    }) ?? [],
                });
        }
        else {
            updateCartByUserId(
                {
                    id: cart?.id ?? 0,
                    products: cart?.products.filter((item) => {
                        if(item.id !== product.id) {
                            return {id: item.id, quantity: item.quantity};
                        }
                        // return {id: item.id, quantity: item.quantity};
                    }) ?? [],
                });
        }
    }

    useEffect(() => {
        if(data) {
            dispatch(getCart(data));
        }
    }, [dispatch, data]);

    return (
        <div className={cn(styles.counter, {[styles.counterBig]: size === 'big'}, className)}>
            <Button ariaLabel='Reduce the number of items in the cart by 1' onClick={decrementCounter} className={cn(styles.btn, {[styles.btnBig]: size === 'big'})}>
                <img src={minus} alt='' className={cn(styles.icon, {[styles.iconBig]: size === 'big'})} />
            </Button>
            <div className={cn(styles.count, {[styles.countBig]: size === 'big'})}>
                {quantity}
            </div>
            <Button ariaLabel='Increase the number of items in the basket by 1' onClick={incrementCounter} className={cn(styles.btn, {[styles.btnBig]: size === 'big'})}>
                <img src={plus} alt='' className={cn(styles.icon, {[styles.iconBig]: size === 'big'})} />
            </Button>
        </div>
    )
}

export default Counter;