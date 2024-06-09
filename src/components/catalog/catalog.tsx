import styles from './catalog.module.scss';
import ProductCard from '../productCard/productCard.tsx';
import productImg from '../../assets/images/product.avif';
import Button from '../button/button.tsx';
import SearchForm from '../searchForm/searchForm.tsx';
import cn from 'classnames';

function Catalog() {
    const products: number[] = new Array(9).fill(1);

    return (
        <section className={cn(styles.wrapper, 'container')} id='catalog'>
            <h2 className={styles.catalogTitle} tabIndex={0}>Catalog</h2>
            <section className={styles.catalog}>
                <SearchForm/>
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
                <Button
                    className={styles.btn}
                    onClick={() => {}}
                >
                    Show more
                </Button>
            </section>
        </section>
    )
}

export default Catalog;