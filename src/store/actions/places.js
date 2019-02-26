import placeImage from '../../assets/beautiful-place.jpg';
import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from './actionTypes';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName: placeName,
    placeImage: placeImage
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    placeKey: key
  };
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  };
};
