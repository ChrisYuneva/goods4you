import styles from "./productDescription.module.scss";
import DescriptionItem from '../descriptionItem/descriptionItem.tsx';
import star from '../../assets/icons/star.svg';
import Button from '../button/button.tsx';
import {memo} from 'react';
import Counter from '../counter/counter.tsx';
import useGetQuantity from '../../app/hooks/useGetCount.tsx';
import {Product} from '../../app/store/services/products/types';
import {productToProductCart} from '../../app/utils';
import {useAppDispatch, useAppSelector} from '../../app/hooks/useRedux.ts';
import {cartByUserIdSlice} from '../../app/store/slices/cartByUserId/cartByUserIdSlice.ts';
import {useUpdateCartByUserIdMutation} from '../../app/store/services/cartByUserId/cartByUserIdApi.ts';

interface ProductDescriptionProps {
   product: Product;
}

const {addProduct} = cartByUserIdSlice.actions;

function ProductDescription({ product }: ProductDescriptionProps) {
    const ratingArr: number[] = new Array(Math.round(product.rating)).fill(1);
    const discountPrice = (product.price - (product.price*(product.discountPercentage/100))).toFixed(2);
    const quantity = useGetQuantity(product.id);
    const dispatch = useAppDispatch();
    const [updateCartByUserId] = useUpdateCartByUserIdMutation();
    const {cart} = useAppSelector(state => state.cartByUserId);

    function addProductHandle() {
        dispatch(addProduct(productToProductCart(product)));
        if(product) {
            updateCartByUserId(
                {
                    id: cart?.id ?? 0,
                    products: cart?.products ?? [],
                    merge: true,
                });
        }
    }

    return (
        <section className={styles.description} tabIndex={0}>
            <div className={styles.head}>
                <h1 className={styles.name}>{product.title}</h1>
                <DescriptionItem title="SKU ID">
                    <span className={styles.text}>{product.sku}</span>
                </DescriptionItem>
            </div>
            <section className={styles.items}>
                <DescriptionItem title='Rating'>
                    <div className={styles.rating}>
                        {
                            ratingArr.map((_, i) => (
                                <img src={star} alt='' key={`Rating-${i}`} className={styles.icon}/>
                            ))
                        }
                    </div>
                </DescriptionItem>
                <DescriptionItem title='Base price'>
                    <span className={styles.text}>{product.price}&#36;</span>
                </DescriptionItem>
                <DescriptionItem title='Discount percentage'>
                    <span className={styles.text}>{product.discountPercentage}&#37;</span>
                </DescriptionItem>
                <DescriptionItem title='Discount price'>
                    <span className={styles.text}>{discountPrice}&#36;</span>
                </DescriptionItem>
                <DescriptionItem title='Stock'>
                    <span className={styles.text}>{product.stock}</span>
                </DescriptionItem>
                <DescriptionItem title='Brand'>
                    <span className={styles.text}>{product.brand}</span>
                </DescriptionItem>
                <DescriptionItem title='Category'>
                    <span className={styles.text}>{product.category}</span>
                </DescriptionItem>
                <DescriptionItem title='Description'>
                    <span className={styles.text}>{product.description}</span>
                </DescriptionItem>
                {
                    quantity === 0
                        ? (
                            <Button className={styles.btn} onClick={addProductHandle}>
                                Add to cart
                            </Button>
                        )
                        : (
                            <Counter product={productToProductCart(product)} size='big' quantity={quantity} className={styles.counter}/>
                        )
                }
            </section>
        </section>
    )
}

export default memo(ProductDescription);