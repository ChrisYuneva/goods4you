import {useMemo} from 'react';
import {useAppSelector} from '@app/hooks/useRedux.ts';

function useAuth() {
    const {id} = useAppSelector(state => state.auth);

    return useMemo(() => id, [id]);
}

export default useAuth;