import styles from './productPage.module.scss';
import cn from 'classnames';
import {useState} from 'react';
import ProductDescription from '../../components/productDescription/productDescription.tsx';
import {useGetProductByIdQuery} from '../../app/store/services/products/products.ts';
import {useParams} from 'react-router-dom';
import ErrorMsg from '../../components/errorMsg/errorMsg.tsx';
import {getErrorMsg} from '../../app/utils';
import SkeletonProductPage from '../../components/skeletons/skeletonProductPage/skeletonProductPage.tsx';

function ProductPage() {
    const {id} = useParams<{ id: string }>();
    const [activeImg, setActiveImg] = useState(0);
    const {data, isLoading, isError, error} = useGetProductByIdQuery(id ?? '');

    function changeMainImg(index: number) {
        setActiveImg(index);
    }

    return (
        <section className={cn(styles.wrapper, 'container')}>
            {
                isError && <ErrorMsg message={getErrorMsg(error) ?? ''}/>
            }
            {
                !isError && (
                    <>
                        {
                            isLoading && (<SkeletonProductPage />)
                        }
                        {
                            !isLoading && (
                                <>
                                    <p className={styles.title} tabIndex={0}>{data?.id}</p>
                                    <section className={styles.product}>
                                        <section className={styles.slider}>
                                            <img src={data?.images[activeImg]} alt={data?.title}
                                                 className={styles.mainImg}/>
                                            <div className={styles.items}>
                                                {
                                                    data?.images.map((item, i) => (
                                                        <img key={`${item}-${i}`}
                                                             src={item}
                                                             alt={data?.title}
                                                             className={cn(styles.img, {[styles.activeImg]: i === activeImg})}
                                                             onClick={() => changeMainImg(i)}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </section>
                                        <ProductDescription
                                            name={data?.title ?? ''}
                                            skuId={data?.sku ?? ''}
                                            rating={data?.rating ?? 0}
                                            price={data?.price ?? 0}
                                            discountPercentage={data?.discountPercentage ?? 0}
                                            stock={data?.stock ?? 0}
                                            brand={data?.brand ?? ''}
                                            category={data?.category ?? ''}
                                            description={data?.description ?? ''}
                                        />
                                    </section>
                                </>
                            )
                        }
                    </>
                )
            }
        </section>
    );
}

export default ProductPage;