import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import burgerConstructorItemStyles from "./burger-constructor-item.module.css";
import { useDrag, useDrop } from "react-dnd";
import { Ingredient } from "../../../models/ingredient.model";
import { useDispatch } from "react-redux";
import {
  DELETE_CONSTRUCTOR_ITEM,
  MOVE_ITEM,
} from "../../../services/actions/constructor";

interface Props {
  constructorItem: Ingredient;
}

function BurgerConstructorItem({ constructorItem }: Props) {
  const dispatch = useDispatch();
  const [{ isDrag }, dragRef] = useDrag({
    type: "constructor-item",
    item: constructorItem,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const [{ isHover }, dropTarget] = useDrop({
    accept: "constructor-item",
    drop(dropItem: Ingredient) {
      if (dropItem.id === constructorItem.id) {
        return;
      } else {
        dispatch({
          type: MOVE_ITEM,
          dropItem: dropItem,
          item: constructorItem,
        });
      }
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const deleteItem = () => {
    dispatch({ type: DELETE_CONSTRUCTOR_ITEM, item: constructorItem });
  };

  return (
    <>
      {!isDrag && (
        <div
          ref={dropTarget}
          className={`${
            isHover ? burgerConstructorItemStyles.hoverDropItem : ""
          }`}
        >
          <div
            className={`mb-2  ${burgerConstructorItemStyles.burger_constructor_item_wrapper}`}
            ref={dragRef}
          >
            <div className="mr-2">
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              text={constructorItem.name}
              price={constructorItem.price}
              thumbnail={constructorItem.image}
              handleClose={deleteItem}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default BurgerConstructorItem;
