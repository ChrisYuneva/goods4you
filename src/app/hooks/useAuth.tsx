import {useAppSelector} from './useRedux.ts';
import {useMemo} from 'react';

function useAuth() {
    const {id} = useAppSelector(state => state.auth);

    return useMemo(() => id, [id]);
}

export default useAuth;