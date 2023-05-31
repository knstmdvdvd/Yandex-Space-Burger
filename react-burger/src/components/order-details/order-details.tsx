import React from 'react';
import orderDetailsStyles from './order-details.module.css'
import doneIcon from '../../images/done-icon.svg'


function OrderDetails() {
  return (
    <div className={orderDetailsStyles.order_modal_wrapper}>
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
  );
}

export default OrderDetails;
