import styles from './productItem.module.scss';
import Button from '../button/button.tsx';
import {Link} from 'react-router-dom';
import Counter from '../counter/counter.tsx';
import useGetQuantity from '../../app/hooks/useGetCount.tsx';
import {cartByUserIdSlice} from '../../app/store/slices/cartByUserId/cartByUserIdSlice.ts';
import {useAppDispatch, useAppSelector} from '../../app/hooks/useRedux.ts';
import {useUpdateCartByUserIdMutation} from '../../app/store/services/cartByUserId/cartByUserIdApi.ts';
import {useEffect} from 'react';
import Loader from '../loader/loader.tsx';
import {ProductCart} from '../../app/store/services/cartByUserId/types';
import {useGetProductByIdQuery} from '../../app/store/services/products/productsApi.ts';

interface ProductItemProps {
    product: ProductCart;
}

const {getCart} = cartByUserIdSlice.actions;

function ProductItem({ product }: ProductItemProps) {
    const quantity = useGetQuantity(product.id);
    const dispatch = useAppDispatch();
    const [ updateCartByUserId, {data, isLoading} ] = useUpdateCartByUserIdMutation();
    const {cart} = useAppSelector(state => state.cartByUserId);
    const {data: dataProduct} = useGetProductByIdQuery(product.id);

    function deleteProduct() {
        updateCartByUserId(
            {
                id: cart?.id ?? 0,
                products: cart?.products.filter((item) => {
                    if(item.id !== product.id) {
                        return {id: item.id, quantity: item.quantity};
                    }
                }) ?? [],
            });
    }

    useEffect(() => {
        if(data) {
            dispatch(getCart(data));
        }
    }, [dispatch, data]);

    return (
        <article className={styles.wrapper}>
            <Link to={`/product/${product.id}`} className={styles.product} aria-label='Go to product page'>
                <img src={product.thumbnail} alt={product.title} className={styles.img}/>
                <div className={styles.about}>
                    <p className={styles.name}>{product.title}</p>
                    <span className={styles.price}>{product.price}&#36;</span>
                </div>
            </Link>
            <div className={styles.btnContainer}>
                <Counter
                    product={product}
                    quantity={quantity}
                    stock={dataProduct?.stock ?? 1}
                />
            </div>
            <Button className={styles.btnDelete} onClick={deleteProduct}>Delete</Button>
            {
                isLoading && <Loader />
            }
        </article>
    )
}

export default ProductItem;