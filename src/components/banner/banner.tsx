import styles from './banner.module.scss';
import Button from '@components/button/button.tsx';
import {useNavigate} from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();

    return (
        <section className={`${styles.banner} container`}>
            <div className={styles.content}>
                <p className={styles.headline} tabIndex={0}>Any products from famous brands with worldwide delivery</p>
                <p className={styles.description} tabIndex={0}>
                    We sell smartphones, laptops, clothes, shoes <br/> and many other products at low prices
                </p>
                <Button onClick={() => navigate('/#catalog')}>Go to shopping</Button>
                <h1 className={styles.backText}>Goods4you</h1>
            </div>
        </section>
    )
}

export default Banner;