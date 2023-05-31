import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import burgerConstructorStyles from './burger-constructor.module.css'
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

function BurgerConstructor() {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState<boolean>(false);

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
  }

  const openOrderModal = () => {
    setIsOrderModalOpen(true);
  }

  return (
    <>
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
      </div>
      {
        isOrderModalOpen && <Modal closeModal={closeOrderModal} title={''}>
          <OrderDetails/>
        </Modal>
      }
    </>
  );
}

export default BurgerConstructor;
