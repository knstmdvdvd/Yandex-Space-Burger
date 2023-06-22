import {
  DELETE_SELECTED_INGREDIENT,
  SET_SELECTED_INGREDIENT,
} from "../actions/modal-view";

const initialState = {
  selectedIngredient: {},
};

export const modalView = (
  state = initialState,
  action: { type: any; item: any }
) => {
  switch (action.type) {
    case SET_SELECTED_INGREDIENT: {
      return {
        selectedIngredient: action.item,
      };
    }
    case DELETE_SELECTED_INGREDIENT: {
      return {
        selectedIngredient: {},
      };
    }
    default: {
      return state;
    }
  }
};
