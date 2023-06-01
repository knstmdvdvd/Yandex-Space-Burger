import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../../models/ingredient.model";
import IngredientsGroup from "./ingredients-group/ingredients-group";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useModal } from "../../hooks/useModal";

interface Props {
  ingredientsData: Array<Ingredient>;
}

function BurgerIngredients({ ingredientsData }: Props) {
  const [current, setCurrent] = React.useState("bun");
  const { isModalOpen, openModal, closeModal } = useModal();
  const [selectedIngredient, setSelectedIngredient] =
    React.useState<Ingredient>({} as Ingredient);

  const openItemModal = (id: String) => {
    const selectedItem = ingredientsData.find((item) => item._id === id);
    setSelectedIngredient(selectedItem as Ingredient);
    openModal();
  };

  React.useEffect(() => {
    document.getElementById(current)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [current]);

  return (
    <>
      <section
        className={`${burgerIngredientsStyles.burger_ingredients_wrapper}`}
      >
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <div className={burgerIngredientsStyles.burger_ingredients_tab}>
          <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="main" active={current === "main"} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <div
          className={`custom-scroll mt-10 pr-1 ${burgerIngredientsStyles.burger_ingredients_list_group}`}
        >
          <IngredientsGroup
            type="bun"
            title="Булки"
            openItemModal={openItemModal}
            ingredientsGroupData={ingredientsData.filter(
              (item) => item.type === "bun"
            )}
          />
          <IngredientsGroup
            type="sauce"
            title="Соусы"
            openItemModal={openItemModal}
            ingredientsGroupData={ingredientsData.filter(
              (item) => item.type === "sauce"
            )}
          />
          <IngredientsGroup
            type="main"
            title="Начинки"
            openItemModal={openItemModal}
            ingredientsGroupData={ingredientsData.filter(
              (item) => item.type === "main"
            )}
          />
        </div>
      </section>
      {isModalOpen && (
        <Modal closeModal={closeModal} title={"Детали ингредиента"}>
          <IngredientDetails ingredientData={selectedIngredient} />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;
