import { Ingredient } from "../../models/ingredient.model";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_ITEMS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  itemsRequest: false,
  itemsFailed: false,
};

export const ingredientsReducer = (
  state = initialState,
  action: { type: any; items: Ingredient[] }
) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
      };
    }
    case GET_INGREDIENTS_ITEMS_SUCCESS: {
      return {
        ...state,
        itemsFailed: false,
        ingredients: action.items,
        itemsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...initialState, itemsFailed: true, itemsRequest: false };
    }
    default: {
      return state;
    }
  }
};
