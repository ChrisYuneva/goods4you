import styles from './cartPage.module.scss';
import cn from 'classnames';
import useAuth from '@app/hooks/useAuth.tsx';
import {useGetCartByUserIdQuery} from '@app/store/services/cartByUserId/cartByUserIdApi.ts';
import {useAppSelector} from '@app/hooks/useRedux.ts';
import ProductItem from '@components/productItem/productItem.tsx';
import DescriptionItem from '@components/descriptionItem/descriptionItem.tsx';
import SkeletonCartPage from '@components/skeletons/ skeletonCartPage/ skeletonCartPage.tsx';
import AlertMsg from '@components/alertMsg/alertMsg.tsx';
import {getErrorMsg} from '@app/utils';

function CartPage() {
    const id = useAuth();
    const {isLoading, error, isError} = useGetCartByUserIdQuery(id ?? 0);
    const {cart} = useAppSelector(state => state.cartByUserId);

    return (
        <section className={cn(styles.wrapper, 'container')}>
            <h1 className={styles.title} tabIndex={0}>My cart</h1>
            <section className={styles.content}>
                {
                    !isLoading && !isError && !!cart?.products.length && (
                        <>
                            <section className={styles.products}>
                                {
                                    cart?.products.map((product) => (
                                        <ProductItem
                                            product={product}
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
                                    <span className={styles.price}>{cart?.total.toFixed(2)}&#36;</span>
                                </DescriptionItem>
                                <DescriptionItem title="Total price with discount:" className={styles.totalDiscount}>
                                    <span className={styles.discount}>{cart?.discountedTotal.toFixed(2)}&#36;</span>
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