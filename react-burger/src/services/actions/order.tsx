import { AnyAction } from "redux";
import { sendOrderApi } from "../api";
import { Ingredient } from "../../models/ingredient.model";

export const SEND_ORDER_REQUEST = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILED = "SEND_ORDER_FAILED";

export function sendOrder(items: String[]) {
  return function (
    dispatch: (arg: { type: string; items?: Ingredient[] }) => void
  ) {
    dispatch({
      type: SEND_ORDER_REQUEST,
    });
    sendOrderApi(items).then((res) => {
      console.log(res);
      if (res) {
        dispatch({
          type: SEND_ORDER_SUCCESS,
          items: res,
        });
      } else {
        dispatch({
          type: SEND_ORDER_FAILED,
        });
      }
    });
  } as unknown as AnyAction;
}
