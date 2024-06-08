import styles from './catalog.module.scss';
import ProductCard from '../productCard/productCard.tsx';
import productImg from '../../assets/images/product.avif';
import Button from '../button/button.tsx';

function Catalog() {
    const products: number[] = new Array(9).fill(1);

    return (
        <section className={styles.catalog}>
            <section className={styles.products}>
                {
                    products.map((_, i) => (
                        <ProductCard
                            name='Essence Mascara Lash Princess'
                            price='110 $'
                            imgSrc={productImg}
                            id='1'
                            key={`Essence Mascara Lash Princess-${i}`}
                        />
                    ))
                }
            </section>
            <Button ariaLabel='Show more products' className={styles.btn} onClick={() => {}}>Show more</Button>
        </section>
    )
}

export default Catalog;