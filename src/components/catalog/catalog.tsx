import styles from './catalog.module.scss';
import ProductCard from '../productCard/productCard.tsx';
import Button from '../button/button.tsx';
import SearchForm from '../searchForm/searchForm.tsx';
import cn from 'classnames';
import {useGetSearchProductsQuery} from '../../app/store/services/products.ts';
import {useState} from 'react';

function Catalog() {
    const [skip, setSkip] = useState(0);
    const {data} = useGetSearchProductsQuery({name: '', limit: 9, skip: skip});

    return (
        <section className={cn(styles.wrapper, 'container')} id='catalog'>
            <h2 className={styles.catalogTitle} tabIndex={0}>Catalog</h2>
            <section className={styles.catalog}>
                <SearchForm/>
                <section className={styles.products}>
                    {
                        data?.products.map((product) => (
                            <ProductCard
                                name={product.title}
                                price={product.price}
                                imgSrc={product.thumbnail}
                                id={product.id}
                                key={product.id}
                            />
                        ))
                    }
                </section>
                <Button
                    className={styles.btn}
                    onClick={() => {setSkip(prev => prev + 9)}}
                >
                    Show more
                </Button>
            </section>
        </section>
    )
}

export default Catalog;