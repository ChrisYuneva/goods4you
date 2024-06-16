import styles from './catalog.module.scss';
import Button from '../button/button.tsx';
import SearchForm from '../searchForm/searchForm.tsx';
import cn from 'classnames';
import {useGetSearchProductsQuery} from '../../app/store/services/products/productsApi.ts';
import {useAppDispatch, useAppSelector} from '../../app/hooks/useRedux.ts';
import {searchProductsParamsSlice} from '../../app/store/slices/searchProductParams/searchProductParamsSlice.ts';
import {getErrorMsg} from '../../app/utils';
import SkeletonProductCard from '../skeletons/skeletonProductCard/skeletonProductCard.tsx';
import ProductCard from '../productCard/productCard.tsx';
import AlertMsg from '../alertMsg/alertMsg.tsx';

const { changeSearchProductsParams } = searchProductsParamsSlice.actions;

function Catalog() {
    const {name, limit, skip} = useAppSelector(state => state.searchProductsParams);
    const {data, isError, error, isLoading, isFetching} = useGetSearchProductsQuery({name, limit, skip});
    const dispatch = useAppDispatch();

    return (
        <section className={cn(styles.wrapper, 'container')} id='catalog'>
            {
                !isError && (
                    <>
                        <h2 className={styles.catalogTitle} tabIndex={0}>Catalog</h2>
                        <section className={styles.catalog}>
                            <SearchForm loading={isLoading} />
                            <section className={styles.products}>
                                {
                                    !isFetching && data?.products.length === 0 && (
                                        <AlertMsg type='default' message='Sorry, nothing was found for this request :(' />
                                    )
                                }
                                {
                                    !isLoading && data?.products.map((product, i) => (
                                        <ProductCard
                                            name={product.title}
                                            price={product.price}
                                            imgSrc={product.thumbnail}
                                            id={product.id}
                                            key={`${product.id}-${i}`}
                                        />
                                    ))
                                }
                                {
                                    isFetching && Array.from({ length: 9 }).map((_, index) => <SkeletonProductCard key={index} />)
                                }
                            </section>
                            {
                                !isLoading && data && (skip + 9 < data?.total) && (
                                    <Button
                                        className={styles.btn}
                                        onClick={() => {
                                            dispatch(changeSearchProductsParams({name, limit, skip: skip + 9}))
                                        }}
                                    >
                                        Show more
                                    </Button>
                                )
                            }
                        </section>
                    </>
                )
            }
            {
                isError && <AlertMsg type='error' message={getErrorMsg(error) ?? ''} />
            }
        </section>
    )
}

export default Catalog;