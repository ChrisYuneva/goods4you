// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../store.ts';
//
// interface CounterState {
//     products: Product[]
// }
//
// const initialState: CounterState = {
//     products: [],
// }
//
// export const counterSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {
//         get(state, action: PayloadAction<CounterState>) {
//             // state.products = action.payload;
//         }
//     },
// })
//
// export const { get } = counterSlice.actions;
//
// export const selectCount = (state: RootState) => state.counter.value;
//
// export default counterSlice.reducer;