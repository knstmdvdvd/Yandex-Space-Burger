import { AnyAction } from "redux";
import { getItemsRequest } from "../api";
import { Ingredient } from "../../models/ingredient.model";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_ITEMS_SUCCESS = "GET_INGREDIENTS_ITEMS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export function getIngredients() {
  return function (
    dispatch: (arg: { type: string; items?: Ingredient[] }) => void
  ) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getItemsRequest().then((res: Ingredient[]) => {
      if (res) {
        dispatch({
          type: GET_INGREDIENTS_ITEMS_SUCCESS,
          items: res,
        });
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      }
    });
  } as unknown as AnyAction;
}
