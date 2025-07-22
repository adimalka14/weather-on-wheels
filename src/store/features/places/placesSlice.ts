import { createSlice } from '@reduxjs/toolkit';
import { addPlace, fetchPlaces } from './placesThunk.ts';

export const placesSlice = createSlice({
    name: 'places',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlaces.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(addPlace.fulfilled, (state, action) => {
                return [...state, action.payload];
            });
    },
});

export default placesSlice.reducer;