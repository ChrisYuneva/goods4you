import styles from "./productItem.module.scss";
import Button from '../button/button.tsx';
import {Link} from 'react-router-dom';
import Counter from '../counter/counter.tsx';

interface ProductItemProps {
    id: number;
    imgSrc: string;
    name: string;
    price: number;
    quantity: number;
    counterChange: (type: 'plus'| 'minus') => void;
}

function ProductItem({ id, imgSrc, name, price, quantity, counterChange }: ProductItemProps) {
    return (
        <article className={styles.wrapper}>
            <Link to={`/product/${id}`} className={styles.product} aria-label='Go to product page'>
                <img src={imgSrc} alt={name} className={styles.img}/>
                <div className={styles.about}>
                    <p className={styles.name}>{name}</p>
                    <span className={styles.price}>{price}&#36;</span>
                </div>
            </Link>
            <div className={styles.btnContainer}>
                <Counter count={quantity} counterChange={counterChange} />
            </div>
            <Button className={styles.btnDelete} onClick={() => {}}>Delete</Button>
        </article>
    )
}

export default ProductItem;