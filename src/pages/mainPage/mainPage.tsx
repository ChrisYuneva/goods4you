import {useLocation} from 'react-router-dom';
import {useEffect, useRef} from 'react';
import Banner from '@components/banner/banner.tsx';
import Catalog from '@components/catalog/catalog.tsx';
import Faq from '@components/faq/faq.tsx';

function MainPage() {
    const location = useLocation();
    const lastHash = useRef('');

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
            <Banner />
            <Catalog />
            <Faq />
        </>
    );
}

export default MainPage;