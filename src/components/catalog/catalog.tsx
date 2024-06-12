import styles from './catalog.module.scss';
import ProductCard from '../productCard/productCard.tsx';
import Button from '../button/button.tsx';
import SearchForm from '../searchForm/searchForm.tsx';
import cn from 'classnames';
import {useGetSearchProductsQuery} from '../../app/store/services/products.ts';
import {useAppDispatch, useAppSelector} from '../../app/store/hooks/useRedux.ts';
import {searchProductsParamsSlice} from '../../app/store/slices/searchProductParamsSlice.ts';

const { changeSearchProductsParams } = searchProductsParamsSlice.actions;

function Catalog() {
    const {name, limit, skip} = useAppSelector(state => state.searchProductsParams);
    const {data} = useGetSearchProductsQuery({name, limit, skip});
    const dispatch = useAppDispatch();

    return (
        <section className={cn(styles.wrapper, 'container')} id='catalog'>
            <h2 className={styles.catalogTitle} tabIndex={0}>Catalog</h2>
            <section className={styles.catalog}>
                <SearchForm/>
                <section className={styles.products}>
                    {
                        data?.products.map((product, i) => (
                            <ProductCard
                                name={product.title}
                                price={product.price}
                                imgSrc={product.thumbnail}
                                id={product.id}
                                key={`${product.id}-${i}`}
                            />
                        ))
                    }
                </section>
                {
                    data && (skip+9<data?.total) && (
                        <Button
                            className={styles.btn}
                            onClick={() => {dispatch(changeSearchProductsParams({name, limit, skip: skip+9}))}}
                        >
                            Show more
                        </Button>
                    )
                }
            </section>
        </section>
    )
}

export default Catalog;