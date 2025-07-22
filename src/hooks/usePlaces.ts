import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectPlacesListSelector } from '../store/features/places/placesSelector';
import { addPlace as addPlaceThunk } from '../store/features/places/placesThunk';


export const usePlaces = () => {
    const dispatch = useDispatch();

    const getPlaces = useSelector(selectPlacesListSelector);
    const addPlace = (place: any) => dispatch(addPlaceThunk(place));

    return {
        getPlaces,
        addPlace
    }
}