import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import burgerConstructorStyles from './burger-constructor.module.css'
import Modal from '../modal/modal';
import doneIcon from '../../images/done-icon.svg'

function BurgerConstructor() {
  const [isOrderPopupOpen, setisOrderPopupOpen] = React.useState<boolean>(false);

  const closeOrderModal = () => {
    setisOrderPopupOpen(false);
  }

  const openOrderModal = () => {
    setisOrderPopupOpen(true);
  }

  return (
    <div className={`${burgerConstructorStyles.burger_constructor_wrapper}`}>
      <div className='mb-4 pl-8'>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
        />
      </div>
      <div className={`custom-scroll pr-2  ${burgerConstructorStyles.burger_constructor_list_wrapper}`}>
        <div className={`mb-2  ${burgerConstructorStyles.burger_constructor_item_wrapper}`}>
          <div className='mr-2'>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
          />
        </div>
        <div className={`mb-2  ${burgerConstructorStyles.burger_constructor_item_wrapper}`}>
          <div className='mr-2'>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
          />
        </div>
        <div className={`mb-2  ${burgerConstructorStyles.burger_constructor_item_wrapper}`}>
          <div className='mr-2'>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
          />
        </div>
        <div className={`mb-2  ${burgerConstructorStyles.burger_constructor_item_wrapper}`}>
          <div className='mr-2'>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
          />
        </div>
        <div className={`mb-2  ${burgerConstructorStyles.burger_constructor_item_wrapper}`}>
          <div className='mr-2'>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
          />
        </div>
        <div className={`mb-2  ${burgerConstructorStyles.burger_constructor_item_wrapper}`}>
          <div className='mr-2'>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
          />
        </div>
        <div className={`mb-2  ${burgerConstructorStyles.burger_constructor_item_wrapper}`}>
          <div className='mr-2'>
            <DragIcon type="primary" />
          </div>
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
          />
        </div>
      </div>
      <div className='mt-2 pl-8'>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
        />
      </div>
      <div className={`mt-10 pr-4 ${burgerConstructorStyles.burger_constructor_order_button}`} >
        <div>
          <span className='mr-2 text text_type_digits-medium'>
            610
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <div className='ml-10'>
          <Button htmlType="button" type="primary" size="medium" onClick={openOrderModal}>
            Оформить заказ
          </Button>
        </div>
      </div>

      {
        isOrderPopupOpen && <Modal closeModal={closeOrderModal} title={''}>
          <div className={burgerConstructorStyles.order_modal_wrapper}>
            <span className='mt-10 text text_type_digits-large'>
              034536
            </span>
            <span className='mt-8 mb-15 text text_type_main-small'>
              идентификатор заказа
            </span>
            <img className='mb-15' src={doneIcon} alt="Заказ оформлен" />
            <span className='mb-2 text text_type_main-small'>
              Ваш заказ начали готовить
            </span>
            <span className='text text_type_main-small text_color_inactive'>
              Дождитесь готовности на орбитальной станции
            </span>
          </div>
        </Modal>
      }
    </div>
  );
}

export default BurgerConstructor;
