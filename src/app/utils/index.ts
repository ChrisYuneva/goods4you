import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';

export function getErrorMsg(error: FetchBaseQueryError | SerializedError | undefined) {
    if (error) {
        if ('status' in error) {
            return 'error' in error ? error.error : JSON.stringify(error.data);
        }

        return error.message;
    }
}

export function getToken() {
    return localStorage.getItem('token') ?? '';
}

export function getErrorStatus(error: FetchBaseQueryError | SerializedError | undefined) {
    if(error) {
        if('status' in error) {
            return error.status;
        }
    }
}