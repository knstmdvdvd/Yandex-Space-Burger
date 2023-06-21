import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import burgerConstructorStyles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useModal } from "../../hooks/useModal";
import { useDrop } from "react-dnd";
import BurgerConstructorItem from "./burger-constructor-item/burger-constructor-item";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Ingredient } from "../../models/ingredient.model";
import {
  ADD_BUN,
  ADD_CONSTRUCTOR_ITEM,
  REFRESH_CONSTRUCTOR,
} from "../../services/actions/constructor";
import { sendOrder } from "../../services/actions/order";

const imagePlaceholder = "https://code.s3.yandex.net/react/code/bun-01.png";

function BurgerConstructor() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: ["sauce", "main", "bun"],
    drop(item: Ingredient) {
      if (item.type === "bun") {
        dispatch({ type: ADD_BUN, item: item });
      } else {
        dispatch({ type: ADD_CONSTRUCTOR_ITEM, item: item });
      }
    },
  });
  const {
    burgerItems,
    bun,
    orderSum,
    bunSum,
    orderRequestFailed,
    orderRequest,
  } = useSelector(
    (store: any) => ({
      burgerItems: store.burgerConstructor.burgerItems as Ingredient[],
      bun: store.burgerConstructor.bun as Ingredient,
      orderSum: store.burgerConstructor.orderSum,
      bunSum: store.burgerConstructor.bunSum,
      orderRequestFailed: store.order.orderRequestFailed,
      orderRequest: store.order.orderRequest,
    }),
    shallowEqual
  );

  const sendBurgerOrder = () => {
    if (bun._id && burgerItems.length > 0) {
      let orderItemsId: String[] = [];
      orderItemsId.push(bun._id);
      burgerItems.map((el) => orderItemsId.push(el._id));
      orderItemsId.push(bun._id);
      dispatch(sendOrder(orderItemsId));
      dispatch({ type: REFRESH_CONSTRUCTOR });
      openModal();
    }
  };
  return (
    <>
      <div
        ref={dropTarget}
        className={`${burgerConstructorStyles.burger_constructor_wrapper}`}
      >
        <div className="mb-4 pl-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name || "Добавьте булку"} (верх)`}
            price={bun.price}
            thumbnail={bun.image || imagePlaceholder}
          />
        </div>
        <div
          className={`custom-scroll pr-2  ${burgerConstructorStyles.burger_constructor_list_wrapper}`}
        >
          {burgerItems?.map(function (item, index) {
            return (
              <BurgerConstructorItem
                key={index}
                constructorItem={item}
              ></BurgerConstructorItem>
            );
          })}
        </div>
        <div className="mt-2 pl-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name || "Добавьте булку"} (низ)`}
            price={bun.price}
            thumbnail={bun.image || imagePlaceholder}
          />
        </div>
        <div
          className={`mt-10 pr-4 ${burgerConstructorStyles.burger_constructor_order_button}`}
        >
          <div>
            <span className="mr-2 text text_type_digits-medium">
              {bunSum + orderSum}
            </span>
            <CurrencyIcon type="primary" />
          </div>
          <div className="ml-10">
            <Button
              htmlType="button"
              type="primary"
              size="medium"
              onClick={sendBurgerOrder}
            >
              {bun._id && burgerItems.length > 0
                ? "Оформить заказ"
                : "Соберите бургер"}
            </Button>
          </div>
        </div>
      </div>
      {isModalOpen && !orderRequestFailed && !orderRequest && (
        <Modal closeModal={closeModal} title={""}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

export default BurgerConstructor;
