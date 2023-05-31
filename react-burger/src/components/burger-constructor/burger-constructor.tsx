import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import burgerConstructorStyles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useModal } from "../../hooks/useModal";

const selectedBurgerIngredients = [
  {
    _id: "643d69a5c3f7b9001cfa0941",
    name: "Биокотлета из марсианской Магнолии",
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
  },
  {
    _id: "643d69a5c3f7b9001cfa0942",
    name: "Соус Spicy-X",
    price: 90,
    image: "https://code.s3.yandex.net/react/code/sauce-02.png",
  },
  {
    _id: "643d69a5c3f7b9001cfa0944",
    name: "Соус традиционный галактический",
    price: 15,
    image: "https://code.s3.yandex.net/react/code/sauce-03.png",
  },
  {
    _id: "643d69a5c3f7b9001cfa0946",
    name: "Хрустящие минеральные кольца",
    price: 300,
    image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
  },
  {
    _id: "643d69a5c3f7b9001cfa0947",
    name: "Плоды Фалленианского дерева",
    price: 874,
    image: "https://code.s3.yandex.net/react/code/sp_1.png",
  },
  {
    _id: "643d69a5c3f7b9001cfa0949",
    name: "Мини-салат Экзо-Плантаго",
    price: 4400,
    image: "https://code.s3.yandex.net/react/code/salad.png",
  },
  {
    _id: "643d69a5c3f7b9001cfa094a",
    name: "Сыр с астероидной плесенью",
    price: 4142,
    image: "https://code.s3.yandex.net/react/code/cheese.png",
  },
];

const selectedBun = {
  _id: "643d69a5c3f7b9001cfa093c",
  name: "Краторная булка N-200i",
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
};

function BurgerConstructor() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className={`${burgerConstructorStyles.burger_constructor_wrapper}`}>
        <div className="mb-4 pl-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${selectedBun.name} (верх)`}
            price={selectedBun.price}
            thumbnail={selectedBun.image}
          />
        </div>
        <div
          className={`custom-scroll pr-2  ${burgerConstructorStyles.burger_constructor_list_wrapper}`}
        >
          {selectedBurgerIngredients.map(function (item, index) {
            return (
              <div
                className={`mb-2  ${burgerConstructorStyles.burger_constructor_item_wrapper}`}
                key={item._id}
              >
                <div className="mr-2">
                  <DragIcon type="primary" />
                </div>
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-2 pl-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${selectedBun.name} (низ)`}
            price={selectedBun.price}
            thumbnail={selectedBun.image}
          />
        </div>
        <div
          className={`mt-10 pr-4 ${burgerConstructorStyles.burger_constructor_order_button}`}
        >
          <div>
            <span className="mr-2 text text_type_digits-medium">610</span>
            <CurrencyIcon type="primary" />
          </div>
          <div className="ml-10">
            <Button
              htmlType="button"
              type="primary"
              size="medium"
              onClick={openModal}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal} title={""}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

export default BurgerConstructor;
