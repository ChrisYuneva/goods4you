import styles from "./productItem.module.scss";
import Button from '../button/button.tsx';
import {Link} from 'react-router-dom';
import Counter from '../counter/counter.tsx';

interface ProductItemProps {
    id: string;
    imgSrc: string;
    name: string;
    price: string;
    quantity: number;
    counterChange: (type: 'plus'| 'minus') => void;
}

function ProductItem({ id, imgSrc, name, price, quantity, counterChange }: ProductItemProps) {
    return (
        <article className={styles.wrapper}>
            <Link to={`/product/${id}`} className={styles.product} aria-label='Go to product page'>
                <img src={imgSrc} alt={name} className={styles.img}/>
                <div className={styles.about}>
                    <h2 className={styles.name}>{name}</h2>
                    <span className={styles.price}>{price}</span>
                </div>
            </Link>
            <div className={styles.btnContainer}>
                <Counter count={quantity} counterChange={counterChange} classNameBtn={styles.btnCount} classNameCount={styles.count}/>
            </div>
            <Button ariaLabel='Remove an item from the basket' className={styles.btnDelete} onClick={() => {}}>Delete</Button>
        </article>
    )
}

export default ProductItem;