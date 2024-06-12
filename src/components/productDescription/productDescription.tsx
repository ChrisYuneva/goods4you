import styles from "./productDescription.module.scss";
import DescriptionItem from '../descriptionItem/descriptionItem.tsx';
import star from '../../assets/icons/star.svg';
import Button from '../button/button.tsx';
import {memo} from 'react';

interface ProductDescriptionProps {
    name: string;
    skuId: string;
    rating: number;
    price: number;
    discountPercentage: number;
    stock: number;
    brand: string;
    category: string;
    description: string;
}

function ProductDescription({ name, skuId, rating, description, category, discountPercentage, price, stock, brand }: ProductDescriptionProps) {
    const ratingArr: number[] = new Array(Math.round(rating)).fill(1);
    const discountPrice = (price - (price*(discountPercentage/100))).toFixed(2);

    return (
        <section className={styles.description} tabIndex={0}>
            <div className={styles.head}>
                <h1 className={styles.name}>{name}</h1>
                <DescriptionItem title="SKU ID">
                    <span className={styles.text}>{skuId}</span>
                </DescriptionItem>
            </div>
            <section className={styles.items}>
                <DescriptionItem title='Rating'>
                    <div className={styles.rating}>
                        {
                            ratingArr.map((_, i) => (
                                <img src={star} alt='' key={`Rating-${i}`} className={styles.icon}/>
                            ))
                        }
                    </div>
                </DescriptionItem>
                <DescriptionItem title='Base price'>
                    <span className={styles.text}>{price}&#36;</span>
                </DescriptionItem>
                <DescriptionItem title='Discount percentage'>
                    <span className={styles.text}>{discountPercentage}&#37;</span>
                </DescriptionItem>
                <DescriptionItem title='Discount price'>
                    <span className={styles.text}>{discountPrice}</span>
                </DescriptionItem>
                <DescriptionItem title='Stock'>
                    <span className={styles.text}>{stock}</span>
                </DescriptionItem>
                <DescriptionItem title='Brand'>
                    <span className={styles.text}>{brand}</span>
                </DescriptionItem>
                <DescriptionItem title='Category'>
                    <span className={styles.text}>{category}</span>
                </DescriptionItem>
                <DescriptionItem title='Description'>
                    <span className={styles.text}>{description}</span>
                </DescriptionItem>
                <Button className={styles.btn} onClick={() => {}}>
                    Add to cart
                </Button>
            </section>
        </section>
    )
}

export default memo(ProductDescription);