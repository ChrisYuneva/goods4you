import styles from './catalog.module.scss';
import Button from '../button/button.tsx';
import SearchForm from '../searchForm/searchForm.tsx';
import cn from 'classnames';
import {useGetSearchProductsQuery} from '../../app/store/services/products/products.ts';
import {useAppDispatch, useAppSelector} from '../../app/hooks/useRedux.ts';
import {searchProductsParamsSlice} from '../../app/store/slices/searchProductParams/searchProductParamsSlice.ts';
import {getErrorMsg} from '../../app/utils';
import ErrorMsg from '../errorMsg/errorMsg.tsx';
import SkeletonProductCard from '../skeletons/skeletonProductCard/skeletonProductCard.tsx';
import ProductCard from '../productCard/productCard.tsx';

const { changeSearchProductsParams } = searchProductsParamsSlice.actions;

function Catalog() {
    const {name, limit, skip} = useAppSelector(state => state.searchProductsParams);
    const {data, isError, error, isLoading, isFetching} = useGetSearchProductsQuery({name, limit, skip});
    const dispatch = useAppDispatch();

    return (
        <section className={cn(styles.wrapper, 'container')} id='catalog'>
            {
                isError && <ErrorMsg message={getErrorMsg(error) ?? ''} />
            }
            {
                !isError && (
                    <>
                        <h2 className={styles.catalogTitle} tabIndex={0}>Catalog</h2>
                        <section className={styles.catalog}>
                            <SearchForm loading={isLoading}/>
                            <section className={styles.products}>
                                {
                                    !isLoading && data?.products.length === 0 && (
                                        <p>Sorry, nothing was found for this request :(</p>
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
        </section>
    )
}

export default Catalog;