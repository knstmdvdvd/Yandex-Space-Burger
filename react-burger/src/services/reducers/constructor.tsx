import { Ingredient } from "../../models/ingredient.model";
import {
  ADD_BUN,
  ADD_CONSTRUCTOR_ITEM,
  DELETE_CONSTRUCTOR_ITEM,
  MOVE_ITEM,
  REFRESH_CONSTRUCTOR,
} from "../actions/constructor";

interface State {
  burgerItems: Ingredient[];
  bun: Ingredient;
  orderSum: number;
  bunSum: number;
  constructorId: number;
}

const initialState: State = {
  burgerItems: [],
  bun: {} as Ingredient,
  orderSum: 0,
  bunSum: 0,
  constructorId: 0,
};

export const constructorItemReducer = (
  state = initialState,
  action: {
    dropItem: Ingredient;
    type: any;
    item: Ingredient;
    direction: string;
  }
) => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_ITEM: {
      state.constructorId++;
      return {
        ...state,
        burgerItems: [
          ...state.burgerItems,
          { ...action.item, id: state.constructorId },
        ],
        orderSum: state.orderSum + action.item.price,
      };
    }
    case DELETE_CONSTRUCTOR_ITEM: {
      const constructorItems = state.burgerItems.filter(function (
        element: any
      ) {
        return element.id !== action.item.id;
      });

      return {
        ...state,
        burgerItems: constructorItems,
        orderSum: state.orderSum - action.item.price,
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        bun: action.item,
        bunSum: action.item.price * 2,
      };
    }
    case REFRESH_CONSTRUCTOR: {
      return {
        ...state,
        bun: {},
        bunSum: 0,
        burgerItems: [],
        orderSum: 0,
      };
    }
    case MOVE_ITEM: {
      const ingredient = state.burgerItems.filter(
        (ingredient) => ingredient.id !== action.dropItem.id
      );
      const index = ingredient.findIndex(
        (ingredient) => ingredient.id === action.item.id
      );
      if (action.direction === "up") {
        ingredient.splice(index, 0, action.dropItem);
      } else {
        ingredient.splice(index + 1, 0, action.dropItem);
      }
      return {
        ...state,
        burgerItems: ingredient,
      };
    }
    default: {
      return state;
    }
  }
};
