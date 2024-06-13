import styles from './navigation.module.scss';
import basket from '../../assets/icons/basket.svg'
import {Link} from 'react-router-dom';
import {useGetCartByUserIdQuery} from '../../app/store/services/cartByUserId/cartByUserId.ts';

interface NavigationProps {
    type: 'header' | 'footer';
    openMenuHandler?: () => void;
}

function Navigation({ type, openMenuHandler }: NavigationProps) {
    const {data} = useGetCartByUserIdQuery('');

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
                                    data?.carts.length && <span className={styles.counter}>{data?.carts[0].totalQuantity ?? 0}</span>
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