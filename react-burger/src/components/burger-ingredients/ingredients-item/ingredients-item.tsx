import React from 'react';
import { Ingredient } from '../../../models/ingredient.model';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsItemStyles from './ingredients-item.module.css'
import Modal from '../../modal/modal';

interface Props {
    ingredientData: Ingredient;
}

function IngredientsItem({ ingredientData }: Props) {

    const [isItemModalOpen, setIsItemModalOpen] = React.useState<boolean>(false);

    const closeItemModal = () => {
        setIsItemModalOpen(false);
    }

    const openItemModal = () => {
        setIsItemModalOpen(true);
    }
    return (
        <>
            <div className={`mb-8 ${ingredientsItemStyles.item_wrapper}`} onClick={openItemModal}>
                <div className='mb-2'>
                    <img src={ingredientData.image} alt={ingredientData.name} />
                </div>
                <div className='text text_type_digits-default mb-2'>
                    <span className='mr-2'>
                        {ingredientData.price}
                    </span>
                    <CurrencyIcon type="primary" />
                </div>
                <span className='pr-1 pl-1 text text_type_main-default'>
                    {ingredientData.name}
                </span>
                <Counter count={1} size="default" />
            </div>
            {
                isItemModalOpen && <Modal closeModal={closeItemModal} title={'Детали ингредиента'}>
                    <div className={ingredientsItemStyles.item_modal_wrapper}>
                        <img className='mb-4' src={ingredientData.image_large} alt="" />
                        <span className='text mb-8 text_type_main-medium'>
                            {ingredientData.name}
                        </span>
                        <div className={ingredientsItemStyles.item_modal_nutritions}>
                            <div className={ingredientsItemStyles.item_modal_nutritions_item}>
                                <span className='mb-1 text text_type_main-small text_color_inactive'>Калории,ккал</span>
                                <span className='text text_type_digits-default text_color_inactive'>{ingredientData.calories}</span>
                            </div>
                            <div className={ingredientsItemStyles.item_modal_nutritions_item}>
                                <span className='mb-1 text text_type_main-small text_color_inactive'>Белки, г</span>
                                <span className='text text_type_digits-default text_color_inactive'>{ingredientData.proteins}</span>
                            </div>
                            <div className={ingredientsItemStyles.item_modal_nutritions_item}>
                                <span className='mb-1 text text_type_main-small text_color_inactive'>Жиры, г</span>
                                <span className='text text_type_digits-default text_color_inactive'>{ingredientData.fat}</span>
                            </div>
                            <div className={ingredientsItemStyles.item_modal_nutritions_item}>
                                <span className='mb-1 text text_type_main-small text_color_inactive'>Углеводы, г</span>
                                <span className='text text_type_digits-default text_color_inactive'>{ingredientData.carbohydrates}</span>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </>
    );
}

export default IngredientsItem;
