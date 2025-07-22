import { createAsyncThunk } from '@reduxjs/toolkit';

import { getPlaces, addPlace as addPlaceApi } from '../../../api/places.ts';

export const fetchPlaces = createAsyncThunk('GET api/place', async () => {
    await getPlaces();
});

export const addPlace = createAsyncThunk('POST api/place', async (place) => {
    await addPlaceApi(place);
});