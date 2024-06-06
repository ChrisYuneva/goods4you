import styles from './catalog.module.scss';
import ProductCard from '../productCard/productCard.tsx';
import productImg from '../../assets/images/product.avif';
import Button from '../button/button.tsx';

function Catalog() {
    const products = new Array(9).fill(1);

    return (
        <main className={styles.catalog}>
            <section className={styles.products}>
                {
                    products.map((_, i) => (
                        // в качестве ключа взять индекс, т.к. массив не изменяется, и других уникальных значений на данном этапе нет
                        <ProductCard
                            title='Essence Mascara Lash Princess'
                            price='110 $'
                            imgSrc={productImg}
                            id='1'
                            // useId может быть пригодится
                            key={i}
                        />
                    ))
                }
            </section>
            <div className={styles.btnContainer}>
                <Button ariaLabel='Show more products' className={styles.btn}>Show more</Button>
            </div>
        </main>
    )
}

export default Catalog;