import styles from "./productCard.module.scss";
import {useState} from 'react';
import cn from 'classnames';
import Counter from '../counter/counter.tsx';
import {useNavigate} from 'react-router-dom';
import Button from '../button/button.tsx';
import basket from '../../assets/icons/basket.svg';
import useGetQuantity from '../../app/hooks/useGetCount.tsx';
import {Product} from '../../app/store/services/products/types';
import {productToProductCart} from '../../app/utils';
import Loader from '../loader/loader.tsx';
import {useAddProduct} from '../../app/hooks/useAddProduct.tsx';

interface ProductCardProps {
    product: Product,
}

function ProductCard({ product }: ProductCardProps) {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const quantity = useGetQuantity(product.id);
    const {addProductHandle, isLoading} = useAddProduct(product);

    function handleHover(hovered: boolean) {
        setIsHover(hovered);
    }

    function redirectToProduct(id: string) {
        navigate(`/product/${id}`);
    }

    return (
        <article
            className={styles.card}
            onMouseOver={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            tabIndex={0}
        >
            <div
                className={cn(styles.imgWrapper, { [styles.imgWrapperHover]: isHover })}
                onClick={() => redirectToProduct(`${product.id}`)}
                aria-label='Go to product page'
            >
                <img src={product.thumbnail} alt={`${product.title}`} className={styles.img} />
            </div>
            <section className={styles.product}>
                <section className={styles.description} onClick={() => redirectToProduct(`${product.id}`)}>
                    <p className={cn(styles.title, {[styles.titleHover]: isHover, [styles.hiddenTitle]: quantity>0})}>{product.title}</p>
                    <span className={styles.price}>{product.price}&#36;</span>
                </section>
                {
                    quantity === 0
                        ? (
                            <>
                                {
                                    isLoading
                                        ? <Loader className={styles.loader} />
                                        : (
                                            <Button
                                                ariaLabel='Add item to basket'
                                                className={styles.btn}
                                                onClick={addProductHandle}
                                            >
                                                <img src={basket} alt='' className={styles.icon}/>
                                            </Button>
                                        )
                                }
                            </>
                        )
                        : (
                            <Counter
                                product={productToProductCart(product)}
                                quantity={quantity}
                                stock={product.stock}
                            />
                        )
                }
            </section>
        </article>
    )
}

export default ProductCard;