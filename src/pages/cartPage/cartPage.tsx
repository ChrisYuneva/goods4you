import styles from './cartPage.module.scss';
import ProductItem from '../../components/productItem/productItem.tsx';
import cn from 'classnames';
import DescriptionItem from '../../components/descriptionItem/descriptionItem.tsx';
import {useGetCartByUserIdQuery} from '../../app/store/services/cartByUserId.ts';
import Loader from '../../components/loader/loader.tsx';

function CartPage() {
    const { data, isLoading} = useGetCartByUserIdQuery('');
    return (
        <section className={cn(styles.wrapper, 'container')}>
            {
                isLoading && <Loader />
            }
            {
                !isLoading && (
                    <>
                        <h1 className={styles.title} tabIndex={0}>My cart</h1>
                        <section className={styles.content}>
                            <section className={styles.products}>
                                {
                                    data?.carts[0].products.map((product) => (
                                        <ProductItem id={product.id}
                                                     imgSrc={product.thumbnail}
                                                     name={product.title}
                                                     price={product.price}
                                                     quantity={product.quantity}
                                                     counterChange={() => {
                                                     }}
                                                     key={product.id}
                                        />
                                    ))
                                }
                            </section>
                            <section className={styles.total} tabIndex={0}>
                                <DescriptionItem title='Total count:' className={styles.totalCount}>
                                    <span className={styles.count}>{data?.carts[0].totalProducts}</span>
                                </DescriptionItem>
                                <DescriptionItem title='Total price:' className={styles.totalPrice}>
                                    <span className={styles.price}>{data?.carts[0].total}&#36;</span>
                                </DescriptionItem>
                                <DescriptionItem title='Total price with discount:' className={styles.totalDiscount}>
                                    <span className={styles.discount}>{data?.carts[0].discountedTotal}&#36;</span>
                                </DescriptionItem>
                            </section>
                        </section>
                    </>
                )
            }
        </section>
    )
}

export default CartPage;