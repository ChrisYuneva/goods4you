import styles from './cartPage.module.scss';
import ProductItem from '../../components/productItem/productItem.tsx';
import product from '../../assets/images/productId.avif';
import cn from 'classnames';
import DescriptionItem from '../../components/descriptionItem/descriptionItem.tsx';

function CartPage() {
    return (
        <section className={cn(styles.wrapper, 'container')}>
            <h1 className={styles.title}>My cart</h1>
            <main className={styles.content}>
                <section className={styles.products}>
                    <ProductItem id='1' imgSrc={product} name='Essence Mascara Lash Princess' price='110 $' quantity={1} counterChange={() => {}}/>
                    <ProductItem id='1' imgSrc={product} name='Essence Mascara Lash Princess' price='110 $' quantity={1} counterChange={() => {}}/>
                    <ProductItem id='1' imgSrc={product} name='Essence Mascara Lash Princess' price='110 $' quantity={1} counterChange={() => {}}/>
                </section>
                <section className={styles.total}>
                    <DescriptionItem title='Total count:' className={styles.totalCount}>
                        <span className={styles.count}>3</span>
                    </DescriptionItem>
                    <DescriptionItem title='Total price:' className={styles.totalPrice}>
                        <span className={styles.price}>700$</span>
                    </DescriptionItem>
                    <DescriptionItem title='Total price with discount:' className={styles.totalDiscount}>
                        <span className={styles.discount}>590$</span>
                    </DescriptionItem>
                </section>
            </main>
        </section>
    )
}

export default CartPage;