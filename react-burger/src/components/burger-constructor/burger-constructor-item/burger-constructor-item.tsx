import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useRef, useState } from "react";
import burgerConstructorItemStyles from "./burger-constructor-item.module.css";
import { XYCoord, useDrag, useDrop } from "react-dnd";
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
  const [dropAlign, setDropAlign] = useState<string>("up");
  const itemContainer = useRef() as React.MutableRefObject<HTMLInputElement>;
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
          direction: dropAlign,
        });
      }
    },
    hover(item, monitor) {
      const hoverBoundingRect = itemContainer.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (hoverClientY < hoverMiddleY) {
        setDropAlign("up");
      }

      if (hoverClientY > hoverMiddleY) {
        setDropAlign("down");
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
            isHover && dropAlign === "up"
              ? burgerConstructorItemStyles.hoverDropItem
              : isHover && dropAlign === "down"
              ? burgerConstructorItemStyles.hoverDropItemDown
              : ""
          }`}
        >
          <div ref={itemContainer}>
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
        </div>
      )}
    </>
  );
}

export default BurgerConstructorItem;
