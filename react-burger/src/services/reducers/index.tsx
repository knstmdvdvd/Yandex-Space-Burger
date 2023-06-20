import { combineReducers } from "redux";
import { constructorItemReducer } from "./constructor";
import { ingredientsReducer } from "./ingredients";
import { modalView } from "./modal-view";
import { tabs } from "./tabs";
import { order } from "./order";

export const rootReducer = combineReducers({
  burgerConstructor: constructorItemReducer,
  ingredients: ingredientsReducer,
  modalView: modalView,
  tabs: tabs,
  order: order,
});
