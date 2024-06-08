import {useEffect, useState} from 'react';
import Navigation from '../navigation/navigation.tsx';
import styles from './burgerMenu.module.scss';

function BurgerMenu() {
    const [openMenu, setOpenMenu] = useState(false);

        function openMenuHandler() {
        setOpenMenu((prev) => !prev);
    }

    useEffect(()  => {
        document.body.style.overflow = openMenu ? 'hidden' : '';
    }, [openMenu]);

    return (
        <>
            <div tabIndex={0} role='button' className={styles.burger_wrapper} onClick={openMenuHandler}>
                <label className={openMenu ? `${styles.burger} ${styles.active}` : styles.burger}>
                    <span></span>
                </label>
            </div>
            {
                openMenu && <div className={styles.back}>
                    <div className={styles.menu} role='listbox'>
                        <Navigation type={'header'} openMenuHandler={openMenuHandler} />
                    </div>
                </div>
            }
        </>
    );
}

export default BurgerMenu;
