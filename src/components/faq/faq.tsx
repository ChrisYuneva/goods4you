import styles from './faq.module.scss';
import {questions} from '../../pages/mainPage/constants.ts';
import Accordion from '../accordion/accordion.tsx';

function Faq() {
    return (
        <section className={`${styles.faq} container`} id='FAQ'>
            <div className={styles.faqContent}>
                <h2 className={styles.faqTitle} tabIndex={0}>faq</h2>
                {
                    questions.map((item, i) => (
                        <Accordion
                            title={item.title}
                            text={item.text}
                            isLast={i === questions.length - 1}
                            key={`${item.title}-${i}`}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Faq;