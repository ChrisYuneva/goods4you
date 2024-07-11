import styles from './catalog.module.scss';
import cn from 'classnames';
import {searchProductsParamsSlice} from '@app/store/slices/searchProductParams/searchProductParamsSlice.ts';
import {useAppDispatch, useAppSelector} from '@app/hooks/useRedux.ts';
import {useGetSearchProductsQuery} from '@app/store/services/products/productsApi.ts';
import AlertMsg from '@components/alertMsg/alertMsg.tsx';
import SearchForm from '@components/searchForm/searchForm.tsx';
import ProductCard from '@components/productCard/productCard.tsx';
import Button from '@components/button/button.tsx';
import {getErrorMsg} from '@app/utils';
import SkeletonProductCard from '@components/skeletons/skeletonProductCard/skeletonProductCard.tsx';

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
                                            product={product}
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