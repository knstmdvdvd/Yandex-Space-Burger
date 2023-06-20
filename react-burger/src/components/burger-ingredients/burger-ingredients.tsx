import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../../models/ingredient.model";
import IngredientsGroup from "./ingredients-group/ingredients-group";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { SET_SELECTED_INGREDIENT } from "../../services/actions/modal-view";
import { SET_TAB } from "../../services/actions/tabs";

function BurgerIngredients() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  const scrollContainer =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const bunsContainer =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const saucesContainer =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const mainsContainer =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const { ingredientsData, itemsRequest, activeTab } = useSelector(
    (store: any) => ({
      ingredientsData: store.ingredients.ingredients as Ingredient[],
      itemsRequest: store.ingredients.itemsRequest,
      activeTab: store.tabs.activeTab,
    })
  );

  const openItemModal = (id: String) => {
    const selectedItem = ingredientsData.find(
      (item: Ingredient) => item._id === id
    );
    dispatch({ type: SET_SELECTED_INGREDIENT, item: selectedItem });
    openModal();
  };

  const setTab = (tab: String) => {
    dispatch({ type: SET_TAB, item: tab });
  };

  const onScrolContainer = () => {
    if (
      scrollContainer.current.getBoundingClientRect().top >
      bunsContainer.current.getBoundingClientRect().top
    ) {
      setTab("bun");
    }

    if (
      scrollContainer.current.getBoundingClientRect().top >
      saucesContainer.current.getBoundingClientRect().top
    ) {
      setTab("sauce");
    }

    if (
      scrollContainer.current.getBoundingClientRect().top >
      mainsContainer.current.getBoundingClientRect().top
    ) {
      setTab("main");
    }
  };

  React.useEffect(() => {
    document.getElementById(activeTab)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [activeTab]);
  return (
    <>
      <section
        className={`${burgerIngredientsStyles.burger_ingredients_wrapper}`}
      >
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <div className={burgerIngredientsStyles.burger_ingredients_tab}>
          <Tab value="bun" active={activeTab === "bun"} onClick={setTab}>
            Булки
          </Tab>
          <Tab value="sauce" active={activeTab === "sauce"} onClick={setTab}>
            Соусы
          </Tab>
          <Tab value="main" active={activeTab === "main"} onClick={setTab}>
            Начинки
          </Tab>
        </div>
        {!itemsRequest && (
          <div
            className={`custom-scroll mt-10 pr-1 ${burgerIngredientsStyles.burger_ingredients_list_group}`}
            ref={scrollContainer}
            onScroll={onScrolContainer}
          >
            <div ref={bunsContainer}>
              <IngredientsGroup
                type="bun"
                title="Булки"
                openItemModal={openItemModal}
                ingredientsGroupData={ingredientsData.filter(
                  (item: Ingredient) => item.type === "bun"
                )}
              />
            </div>
            <div ref={saucesContainer}>
              <IngredientsGroup
                type="sauce"
                title="Соусы"
                openItemModal={openItemModal}
                ingredientsGroupData={ingredientsData.filter(
                  (item: Ingredient) => item.type === "sauce"
                )}
              />
            </div>
            <div ref={mainsContainer}>
              <IngredientsGroup
                type="main"
                title="Начинки"
                openItemModal={openItemModal}
                ingredientsGroupData={ingredientsData.filter(
                  (item: Ingredient) => item.type === "main"
                )}
              />
            </div>
          </div>
        )}
      </section>
      {isModalOpen && (
        <Modal closeModal={closeModal} title={"Детали ингредиента"}>
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;
