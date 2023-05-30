import React from 'react';
import { Ingredient } from '../../../models/ingredient.model';
import IngredientsItem from '../ingredients-item/ingredients-item';
import ingredientsGroupStyles from './ingredients-group.module.css'

interface Props {
    ingredientsGroupData: Array<Ingredient>;
    title: string;
    type: string;
}

function IngredientsGroup({ ingredientsGroupData, title, type }: Props) {
    return (
        <section id = {type} className='mt-10'>
            <h2 className='text text_type_main-medium mb-6'>{title}</h2>
            <div className={ingredientsGroupStyles.ingredients_group_wrapper}>
                {ingredientsGroupData.map(function (item, index) {
                    return (<IngredientsItem key={index} ingredientData={item} />)
                })}
            </div>
        </section>
    );
}

export default IngredientsGroup;
