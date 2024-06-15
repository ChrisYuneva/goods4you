import styles from "./productItem.module.scss";
import Button from '../button/button.tsx';
import {Link} from 'react-router-dom';
import Counter from '../counter/counter.tsx';
import useGetQuantity from '../../app/hooks/useGetCount.tsx';

interface ProductItemProps {
    id: number;
    imgSrc: string;
    name: string;
    price: number;
}

function ProductItem({ id, imgSrc, name, price }: ProductItemProps) {
    const quantity = useGetQuantity(id);

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
                <Counter id={id} quantity={quantity} />
            </div>
            <Button className={styles.btnDelete} onClick={() => {}}>Delete</Button>
        </article>
    )
}

export default ProductItem;