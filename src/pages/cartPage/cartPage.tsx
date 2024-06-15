import styles from './cartPage.module.scss';
import ProductItem from '../../components/productItem/productItem.tsx';
import cn from 'classnames';
import DescriptionItem from '../../components/descriptionItem/descriptionItem.tsx';
import {useGetCartByUserIdQuery} from '../../app/store/services/cartByUserId/cartByUserIdApi.ts';
import {getErrorMsg} from '../../app/utils';
import SkeletonCartPage from '../../components/skeletons/ skeletonCartPage/ skeletonCartPage.tsx';
import {useAppSelector} from '../../app/hooks/useRedux.ts';
import AlertMsg from '../../components/alertMsg/alertMsg.tsx';

function CartPage() {
    const {isLoading, error, isError} = useGetCartByUserIdQuery('');
    const {cart} = useAppSelector(state => state.cartByUserId);

    return (
        <section className={cn(styles.wrapper, 'container')}>
            <h1 className={styles.title} tabIndex={0}>My cart</h1>
            <section className={styles.content}>
                {
                    !isLoading && !isError && cart?.products.length &&(
                        <>
                            <section className={styles.products}>
                                {
                                    cart?.products.map((product) => (
                                        <ProductItem
                                            id={product.id}
                                            imgSrc={product.thumbnail}
                                            name={product.title}
                                            price={product.price}
                                            key={product.id}
                                        />
                                    ))
                                }
                            </section>
                            <section className={styles.total} tabIndex={0}>
                                <DescriptionItem title="Total count:" className={styles.totalCount}>
                                    <span className={styles.count}>{cart?.totalQuantity}</span>
                                </DescriptionItem>
                                <DescriptionItem title="Total price:" className={styles.totalPrice}>
                                    <span className={styles.price}>{cart?.total}&#36;</span>
                                </DescriptionItem>
                                <DescriptionItem title="Total price with discount:" className={styles.totalDiscount}>
                                    <span className={styles.discount}>{cart?.discountedTotal}&#36;</span>
                                </DescriptionItem>
                            </section>
                        </>
                    )
                }
                {
                    !cart?.products.length && !isLoading && !isError && <AlertMsg message='Your cart is empty :(' />
                }
                {
                    isLoading && <SkeletonCartPage/>
                }
            </section>
            {
                isError && <AlertMsg type='error' message={getErrorMsg(error) ?? ''} />
            }
        </section>
    );
}

export default CartPage;