import React from "react";
import { Ingredient } from "../../../models/ingredient.model";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsItemStyles from "./ingredients-item.module.css";
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";

interface Props {
  ingredientData: Ingredient;
}

function IngredientsItem({ ingredientData }: Props) {
  const [isItemModalOpen, setIsItemModalOpen] = React.useState<boolean>(false);

  const closeItemModal = () => {
    setIsItemModalOpen(false);
  };

  const openItemModal = () => {
    setIsItemModalOpen(true);
  };
  return (
    <>
      <div
        className={`mb-8 ${ingredientsItemStyles.item_wrapper}`}
        onClick={openItemModal}
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
      {isItemModalOpen && (
        <Modal closeModal={closeItemModal} title={"Детали ингредиента"}>
          <IngredientDetails ingredientData={ingredientData} />
        </Modal>
      )}
    </>
  );
}

export default IngredientsItem;
