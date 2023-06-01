import React from "react";
import { Ingredient } from "../../../models/ingredient.model";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsItemStyles from "./ingredients-item.module.css";

interface Props {
  ingredientData: Ingredient;
  openItemModal: (id: string) => void;
}

function IngredientsItem({ ingredientData, openItemModal }: Props) {
  return (
    <>
      <div
        className={`mb-8 ${ingredientsItemStyles.item_wrapper}`}
        onClick={() => openItemModal(ingredientData._id)}
      >
        <div className="mb-2">
          <img src={ingredientData.image} alt={ingredientData.name} />
        </div>
        <div className="text text_type_digits-default mb-2">
          <span className="mr-2">{ingredientData.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <span className="pr-1 pl-1 text text_type_main-default">
          {ingredientData.name}
        </span>
        <Counter count={1} size="default" />
      </div>
    </>
  );
}

export default IngredientsItem;
