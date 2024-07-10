import {getErrorStatus} from '../index.ts';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';

describe('getErrorStatus', () => {
    test('should return status if error is FetchBaseQueryError with status', () => {
        const error: FetchBaseQueryError = { status: 404, data: {} };
        const result = getErrorStatus(error);

        expect(result).toBe(404);
    });

    test('should return undefined if error does not have status', () => {
        const error: SerializedError = { message: 'Error' };
        const result = getErrorStatus(error);

        expect(result).toBeUndefined();
    });

    test('should return undefined if error is undefined', () => {
        const result = getErrorStatus(undefined);

        expect(result).toBeUndefined();
    });
});