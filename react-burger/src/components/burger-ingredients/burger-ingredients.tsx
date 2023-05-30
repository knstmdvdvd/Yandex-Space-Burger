import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredient } from '../../models/ingredient.model';
import IngredientsGroup from './ingredients-group/ingredients-group';
import burgerIngredientsStyles from './burger-ingredients.module.css'

interface Props {
    ingredientsData: Array<Ingredient>;
}

function BurgerIngredients({ ingredientsData }: Props) {
    const [current, setCurrent] = React.useState('bun')

    React.useEffect(() => {
        document.getElementById(current)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, [current]);

    return (
        <section className={burgerIngredientsStyles.burger_ingredients_wrapper}>
            <h1 className="text text_type_main-large mb-5" >Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={`custom-scroll pt-2 pr-1 ${burgerIngredientsStyles.ingredients_list_group}`}>
                <IngredientsGroup type='bun' title='Булки' ingredientsGroupData={ingredientsData.filter(item => item.type === 'bun')} />
                <IngredientsGroup type='sauce' title='Соусы' ingredientsGroupData={ingredientsData.filter(item => item.type === 'sauce')} />
                <IngredientsGroup type='main' title='Начинки' ingredientsGroupData={ingredientsData.filter(item => item.type === 'main')} />
            </div>
        </section>
    );
}

export default BurgerIngredients;
