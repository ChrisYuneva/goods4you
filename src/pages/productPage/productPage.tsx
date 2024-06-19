import styles from './productPage.module.scss';
import cn from 'classnames';
import {useState} from 'react';
import ProductDescription from '../../components/productDescription/productDescription.tsx';
import {useGetProductByIdQuery} from '../../app/store/services/products/productsApi.ts';
import {useParams} from 'react-router-dom';
import {getErrorMsg} from '../../app/utils';
import SkeletonProductPage from '../../components/skeletons/skeletonProductPage/skeletonProductPage.tsx';
import AlertMsg from '../../components/alertMsg/alertMsg.tsx';

function ProductPage() {
    const {id} = useParams<{ id: string }>();
    const [activeImg, setActiveImg] = useState(0);
    const {data, isLoading, isError, error} = useGetProductByIdQuery(Number(id));

    function changeMainImg(index: number) {
        setActiveImg(index);
    }

    return (
        <section className={cn(styles.wrapper, 'container')}>
            {
                isError && <AlertMsg type='error' message={getErrorMsg(error) ?? ''}/>
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
                                    <p className={styles.title} tabIndex={0}>Product {data?.id}</p>
                                    <section className={styles.product}>
                                        <section className={styles.slider}>
                                            <img
                                                src={data?.images[activeImg]}
                                                alt={data?.title}
                                                className={styles.mainImg}
                                            />
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
                                        {
                                            data && <ProductDescription product={data} />
                                        }
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