import React from "react";
import ingredientsDetailsStyles from "./ingredient-details.module.css";
import { Ingredient } from "../../models/ingredient.model";
import { useSelector } from "react-redux";

function IngredientDetails() {
  const { selectedIngredient } = useSelector((store: any) => ({
    selectedIngredient: store.modalView.selectedIngredient as Ingredient,
  }));
  return (
    <div className={ingredientsDetailsStyles.item_modal_wrapper}>
      <img
        className="mb-4"
        src={selectedIngredient.image_large}
        alt={selectedIngredient.name}
      />
      <span className="text mb-8 text_type_main-medium">
        {selectedIngredient.name}
      </span>
      <div className={ingredientsDetailsStyles.item_modal_nutritions}>
        <div className={ingredientsDetailsStyles.item_modal_nutritions_item}>
          <span className="mb-1 text text_type_main-small text_color_inactive">
            Калории,ккал
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {selectedIngredient.calories}
          </span>
        </div>
        <div className={ingredientsDetailsStyles.item_modal_nutritions_item}>
          <span className="mb-1 text text_type_main-small text_color_inactive">
            Белки, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {selectedIngredient.proteins}
          </span>
        </div>
        <div className={ingredientsDetailsStyles.item_modal_nutritions_item}>
          <span className="mb-1 text text_type_main-small text_color_inactive">
            Жиры, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {selectedIngredient.fat}
          </span>
        </div>
        <div className={ingredientsDetailsStyles.item_modal_nutritions_item}>
          <span className="mb-1 text text_type_main-small text_color_inactive">
            Углеводы, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {selectedIngredient.carbohydrates}
          </span>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
