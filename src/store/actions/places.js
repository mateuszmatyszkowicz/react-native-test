import {
  ADD_PLACE,
  DELETE_PLACE,
} from "./actionTypes";

export const addPlace = name => ({
  type: ADD_PLACE,
  placeName: name
});

export const deletePlace = () => ({
  type: DELETE_PLACE
});
