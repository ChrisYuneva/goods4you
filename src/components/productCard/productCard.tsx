import styles from "./productCard.module.scss";
import {useState} from 'react';
import cn from 'classnames';
import Counter from '../counter/counter.tsx';
import {useNavigate} from 'react-router-dom';
import Button from '../button/button.tsx';
import basket from '../../assets/icons/basket.svg';
import useGetQuantity from '../../app/hooks/useGetCount.tsx';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    imgSrc: string;
}

function ProductCard({ id, name, price, imgSrc }: ProductCardProps) {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const quantity = useGetQuantity(id);

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
                onClick={() => redirectToProduct(`${id}`)}
                aria-label='Go to product page'
            >
                <img src={imgSrc} alt={`${name}`} className={styles.img} />
            </div>
            <section className={styles.product}>
                <section className={styles.description} onClick={() => redirectToProduct(`${id}`)}>
                    <p className={cn(styles.title, {[styles.titleHover]: isHover, [styles.hiddenTitle]: quantity>0})}>{name}</p>
                    <span className={styles.price}>{price}&#36;</span>
                </section>
                {
                    quantity === 0
                        ? (
                            <Button
                                ariaLabel='Add item to basket'
                                className={styles.btn}
                            >
                                <img src={basket} alt='' className={styles.icon}/>
                            </Button>
                        )
                        : (
                            <Counter id={id} quantity={quantity} />
                        )
                }
            </section>
        </article>
    )
}

export default ProductCard;