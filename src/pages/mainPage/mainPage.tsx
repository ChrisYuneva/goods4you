// import './styles/index.scss';
import 'normalize.css';
import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useRef} from 'react';
import Button from '../../components/button/button.tsx';
import Catalog from '../../components/catalog/catalog.tsx';
import Accordion from '../../components/accordion/accordion.tsx';
import SearchForm from '../../components/searchForm/searchForm.tsx';
import styles from './mainPage.module.scss';
import {questions} from './constants.ts';

function MainPage() {
    const location = useLocation();
    const lastHash = useRef('');
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1);
        }

        if (lastHash.current && document.getElementById(lastHash.current)) {
            document.getElementById(lastHash.current)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            lastHash.current = '';
        }
    }, [location]);

    return (
        <>
            <section className={`${styles.banner} container`}>
                <div className={styles.content}>
                    <p className={styles.headline} tabIndex={0}>Any products from famous brands with worldwide delivery</p>
                    <p className={styles.description} tabIndex={0}>
                        We sell smartphones, laptops, clothes, shoes <br/> and many other products at low prices
                    </p>
                    <Button ariaLabel='Go to catalogue' onClick={() => navigate('/#catalog')}>Go to shopping</Button>
                    <h1 className={styles.backText}>Goods4you</h1>
                </div>
            </section>
            <main className={`${styles.catalog} container`} id='catalog'>
                <h2 className={styles.catalogTitle} tabIndex={0}>Catalog</h2>
                <SearchForm />
                <Catalog />
            </main>
            <section className={`${styles.faq} container`} id='FAQ'>
                <div className={styles.faqContent}>
                    <h3 className={styles.faqTitle} tabIndex={0}>faq</h3>
                    {
                        questions.map((item, i) => <Accordion title={item.title} text={item.text} isLast={i === questions.length - 1} key={i}/>)
                    }
                </div>
            </section>
        </>
    );
}

export default MainPage;