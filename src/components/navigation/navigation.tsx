import styles from './navigation.module.scss';
import basket from '../../assets/icons/basket.svg'
import {Link} from 'react-router-dom';
import {useGetCartByUserIdQuery} from '../../app/store/services/cartByUserId/cartByUserIdApi.ts';
import {cartByUserIdSlice} from '../../app/store/slices/cartByUserId/cartByUserIdSlice.ts';
import {useAppDispatch, useAppSelector} from '../../app/hooks/useRedux.ts';
import {useEffect} from 'react';

interface NavigationProps {
    type: 'header' | 'footer';
    openMenuHandler?: () => void;
}

const {getCart} = cartByUserIdSlice.actions;

function Navigation({ type, openMenuHandler }: NavigationProps) {
    const {data} = useGetCartByUserIdQuery('');
    const {cart} = useAppSelector(state => state.cartByUserId);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!cart && data) {
            dispatch(getCart(data.carts[0]));
        }
    }, [dispatch, data]);

    return (
        <nav className={styles.wrapper}>
            <ul className={styles.list}>
                <li>
                    <Link to='/#catalog' className={styles.listItem} onClick={openMenuHandler}>Catalog</Link>
                </li>
                <li>
                    <Link to='/#FAQ' className={styles.listItem} onClick={openMenuHandler}>FAQ</Link>
                </li>
                {
                    type !== 'footer' && (
                        <li>
                            <Link to="/cart" className={styles.listItem} id={styles.basket} onClick={openMenuHandler}>
                                Cart
                                <img src={basket} alt='' className={styles.icon}/>
                                {
                                    cart && <span className={styles.counter}>{cart.totalQuantity}</span>
                                }
                            </Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navigation;