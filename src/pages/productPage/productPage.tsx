import styles from './productPage.module.scss';
import cn from 'classnames';
import product from '../../assets/images/productId.avif'
import {useState} from 'react';
import ProductDescription from '../../components/productDescription/productDescription.tsx';

// interface ProductPageProps {
//     imgSrc: string;
// }

function ProductPage() {
    const imgArr: number[] = new Array(6).fill(1);
    const [activeImg, setActiveImg] = useState(0);

    function changeMainImg(index: number) {
        setActiveImg(index);
    }

    return (
        <section className={cn(styles.wrapper, 'container')}>
            <h3 className={styles.title}>Product 5</h3>
            <main className={styles.product}>
                <section className={styles.slider}>
                    {/*<div >*/}
                        <img src={product} alt=''className={styles.mainImg}/>
                    {/*</div>*/}
                    <div className={styles.items}>
                        {
                            imgArr.map((_, i) => (
                                <img key={i} src={product} alt='' className={cn(styles.img, {[styles.activeImg]: i ===activeImg})} onClick={() => changeMainImg(i)}/>
                            ))
                        }
                    </div>
                </section>
                <ProductDescription name='Puma Force 1 Shadow' id='0005' rating={5} price='500$' discountPercentage='10%' discountPrice='450$' stock='13' brand='Puma' category='Smartphones' description='An apple mobile which is nothing like apple' />
            </main>
        </section>
    );
}

export default ProductPage;