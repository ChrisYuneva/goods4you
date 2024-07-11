import styles from './productItem.module.scss';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {ProductCart} from '@app/store/services/cartByUserId/types';
import {cartByUserIdSlice} from '@app/store/slices/cartByUserId/cartByUserIdSlice.ts';
import {notificationErrorSlice} from '@app/store/slices/notificationError/notificationError.ts';
import useGetQuantity from '@app/hooks/useGetCount.tsx';
import {useAppDispatch, useAppSelector} from '@app/hooks/useRedux.ts';
import {useUpdateCartByUserIdMutation} from '@app/store/services/cartByUserId/cartByUserIdApi.ts';
import {useGetProductByIdQuery} from '@app/store/services/products/productsApi.ts';
import {getErrorMsg} from '@app/utils';
import Loader from '@components/loader/loader.tsx';
import Counter from '@components/counter/counter.tsx';
import Button from '@components/button/button.tsx';

interface ProductItemProps {
    product: ProductCart;
}

const {getCart} = cartByUserIdSlice.actions;
const {addErrorToast} = notificationErrorSlice.actions;

function ProductItem({ product }: ProductItemProps) {
    const quantity = useGetQuantity(product.id);
    const dispatch = useAppDispatch();
    const [ updateCartByUserId, {data, isLoading, isError: isErrorTest, error} ] = useUpdateCartByUserIdMutation();
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

    useEffect(() => {
        if(isErrorTest) {
            dispatch(addErrorToast({message: getErrorMsg(error) ?? ''}));
        }
    }, [dispatch, error, isErrorTest]);

    return (
        <>
            <article className={styles.wrapper}>
                {
                    isLoading
                        ?
                        <Loader/>
                        :
                        <>
                            <Link to={`/product/${product.id}`} className={styles.product}
                                  aria-label='Go to product page'>
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
                                    stock={dataProduct?.stock ?? 0}
                                />
                            </div>
                            <Button className={styles.btnDelete} onClick={deleteProduct}>Delete</Button>
                        </>
                }
            </article>
        </>

    )
}

export default ProductItem;