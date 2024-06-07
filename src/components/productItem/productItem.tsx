import styles from "./productItem.module.scss";
import Button from '../button/button.tsx';
import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import {Link} from 'react-router-dom';

interface ProductItemProps {
    imgSrc: string;
    name: string;
    price: string;
    quantity: number;
}

function ProductItem({ imgSrc, name, price, quantity }: ProductItemProps) {
    return (
        <aside className={styles.wrapper}>
            <div className={styles.description}>
                <Link to={'/product/1'} className={styles.product}>
                    <img src={imgSrc} alt="" className={styles.img}/>
                    <div className={styles.about}>
                        <h6 className={styles.name}>{name}</h6>
                        <span className={styles.price}>{price}</span>
                    </div>
                </Link>
                <div className={styles.btnContainer}>
                    <Button ariaLabel="Reduce the quantity of goods by 1" className={styles.btnCount}>
                        <img src={minus} alt=""/>
                    </Button>
                    <span className={styles.count}>{quantity}</span>
                    <Button ariaLabel='Increase the quantity of goods by 1' className={styles.btnCount}>
                        <img src={plus} alt=''/>
                    </Button>
                </div>
                <Button ariaLabel='Remove an item from the basket' className={styles.btnDelete}>Delete</Button>
            </div>
        </aside>
    )
}

export default ProductItem;