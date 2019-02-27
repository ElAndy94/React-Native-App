import placeImage from '../../assets/beautiful-place.jpg';
import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName: placeName,
    placeImage: placeImage
  };
};

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};
