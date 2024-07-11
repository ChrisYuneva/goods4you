import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';
import {getErrorMsg} from '@app/utils';

describe('getErrorMsg', () => {
    test('should return JSON string of data if error is FetchBaseQueryError without error property', () => {
        const error: FetchBaseQueryError = { status: 500, data: { message: 'Internal Server Error' } };
        const result = getErrorMsg(error);

        expect(result).toBe(JSON.stringify({ message: 'Internal Server Error' }));
    });

    test('should return error string if error is FetchBaseQueryError with error property', () => {
        const error: FetchBaseQueryError = { status: 'FETCH_ERROR', error: 'Error!' };
        const result = getErrorMsg(error);

        expect(result).toBe('Error!');
    });

    test('should return message if error is SerializedError', () => {
        const error: SerializedError = { message: 'Error!' };
        const result = getErrorMsg(error);

        expect(result).toBe('Error!')
    });

    test('should return undefined if error is undefined', () => {
        const result = getErrorMsg(undefined);

        expect(result).toBeUndefined();
    })
})