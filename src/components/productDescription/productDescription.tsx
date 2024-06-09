import styles from "./productDescription.module.scss";
import DescriptionItem from '../descriptionItem/descriptionItem.tsx';
import star from '../../assets/icons/star.svg';
import Button from '../button/button.tsx';
import {memo} from 'react';

interface ProductDescriptionProps {
    name: string;
    id: string;
    rating: number;
    price: string;
    discountPercentage: string;
    discountPrice: string;
    stock: string;
    brand: string;
    category: string;
    description: string;
}

function ProductDescription({ name, id, rating, description, category, discountPercentage, discountPrice, price, stock, brand }: ProductDescriptionProps) {
    const ratingArr: number[] = new Array(rating).fill(1);

    return (
        <section className={styles.description} tabIndex={0}>
            <div className={styles.head}>
                <h1 className={styles.name}>{name}</h1>
                <DescriptionItem title="SKU ID">
                    <span className={styles.text}>{id}</span>
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
                    <span className={styles.text}>{price}</span>
                </DescriptionItem>
                <DescriptionItem title='Discount percentage'>
                    <span className={styles.text}>{discountPercentage}</span>
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