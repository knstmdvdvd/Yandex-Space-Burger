import React from "react";
import { Ingredient } from "../../../models/ingredient.model";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsItemStyles from "./ingredients-item.module.css";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

interface Props {
  ingredientData: Ingredient;
  openItemModal: (id: string) => void;
}

function IngredientsItem({ ingredientData, openItemModal }: Props) {
  const { burgerItems, bun } = useSelector((store: any) => ({
    burgerItems: store.burgerConstructor.burgerItems as Ingredient[],
    bun: store.burgerConstructor.bun as Ingredient,
  }));
  const [, dragRef] = useDrag({
    type: ingredientData.type,
    item: { ...ingredientData },
  });
  return (
    <>
      <div
        ref={dragRef}
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
        {ingredientData.type !== "bun" && (
          <Counter
            count={
              burgerItems.filter((el) => el._id === ingredientData._id).length
            }
            size="default"
          />
        )}
        {ingredientData.type === "bun" && (
          <Counter
            count={bun._id === ingredientData._id ? 2 : 0}
            size="default"
          />
        )}
      </div>
    </>
  );
}

export default IngredientsItem;
