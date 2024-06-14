import styles from "./productCard.module.scss";
import {useState} from 'react';
import cn from 'classnames';
import Counter from '../counter/counter.tsx';
import {useNavigate} from 'react-router-dom';
import Button from '../button/button.tsx';
import basket from '../../assets/icons/basket.svg';
import {useGetCartByUserIdQuery} from '../../app/store/services/cartByUserId/cartByUserIdApi.ts';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    imgSrc: string;
}

function ProductCard({ id, name, price, imgSrc }: ProductCardProps) {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const {data} = useGetCartByUserIdQuery('');

    function handleHover(hovered: boolean) {
        setIsHover(hovered);
    }

    function getCountProduct() {
        if(data) {
            const {products} = data.carts[0];
            return products.find((product) => product.id === id)?.quantity ?? 0;
        }

        return 0;
    }

    const count = getCountProduct();

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
                    <p className={cn(styles.title, {[styles.titleHover]: isHover, [styles.hiddenTitle]: count>0})}>{name}</p>
                    <span className={styles.price}>{price}&#36;</span>
                </section>
                {
                    count === 0
                        ? (
                            <Button
                                ariaLabel='Add item to basket'
                                className={styles.btn}
                            >
                                <img src={basket} alt='' className={styles.icon}/>
                            </Button>
                        )
                        : (
                            <Counter count={count} counterChange={() => {}} />
                        )
                }
            </section>
        </article>
    )
}

export default ProductCard;