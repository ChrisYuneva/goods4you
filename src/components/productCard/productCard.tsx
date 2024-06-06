import styles from "./productCard.module.scss";
import {useState} from 'react';
import cn from 'classnames';
import CounterProductCard from '../counterProductCard/counterProductCard.tsx';
import {useNavigate} from 'react-router-dom';
import Button from '../button/button.tsx';
import basket from '../../assets/icons/basket.svg';

interface ProductCardProps {
    id: string;
    title: string;
    price: string;
    imgSrc: string;
}

function ProductCard({ id, title, price, imgSrc }: ProductCardProps) {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const [count, setCount] = useState(0);

    function handleHover(hovered: boolean) {
        setIsHover(hovered);
    }

    function counterChange(type: 'plus'| 'minus') {
        if(type === 'plus') {
            setCount(prev => prev + 1);
        }
        else {
            setCount(prev => prev - 1);
        }
    }

    function redirectToProduct(id: string) {
        navigate(`/product/${id}`);
    }

    return (
        <article className={styles.card} onMouseOver={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
            <div className={cn(styles.imgWrapper, { [styles.imgWrapperHover]: isHover })}>
                <img src={imgSrc} alt="" className={styles.img} onClick={() => redirectToProduct(id)}/>
            </div>
            <section className={styles.product}>
                <section className={styles.description} onClick={() => redirectToProduct(id)}>
                    <h6 className={cn(styles.title, {[styles.titleHover]: isHover, [styles.hiddenTitle]: count>0})}>{title}</h6>
                    <span className={styles.price}>{price}</span>
                </section>
                {
                    count === 0 && (
                        <Button
                            ariaLabel='Add item to basket'
                            onClick={() => counterChange('plus')}
                            className={styles.btn}
                        >
                            <img src={basket} alt="" className={styles.icon}/>
                        </Button>
                    )
                }
                {
                    count > 0 && <CounterProductCard count={count} onClickPlus={() => counterChange('plus')} onClickMinus={() => counterChange('minus')} />
                }
            </section>
        </article>
    )
}

export default ProductCard;