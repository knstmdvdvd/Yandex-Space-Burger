import { OrderResponse } from "../../models/order.model";
import {
  SEND_ORDER_FAILED,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
} from "../actions/order";

interface State {
  orderRequestFailed: boolean;
  orderRequest: boolean;
  order: OrderResponse;
}

const initialState: State = {
  orderRequestFailed: false,
  orderRequest: false,
  order: {} as OrderResponse,
};

export const order = (
  state = initialState,
  action: { type: any; items: any }
) => {
  switch (action.type) {
    case SEND_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case SEND_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequestFailed: false,
        order: action.items,
        orderRequest: false,
      };
    }
    case SEND_ORDER_FAILED: {
      return { ...initialState, itemsFailed: true, itemsRequest: false };
    }
    default: {
      return state;
    }
  }
};
