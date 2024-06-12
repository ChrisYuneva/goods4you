import styles from './navigation.module.scss';
import basket from '../../assets/icons/basket.svg'
import {Link} from 'react-router-dom';

interface NavigationProps {
    type: 'header' | 'footer';
    totalBasket: number;
    openMenuHandler?: () => void;
}

function Navigation({ type, totalBasket, openMenuHandler }: NavigationProps) {
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
                                    totalBasket && <span className={styles.counter}>{totalBasket}</span>
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