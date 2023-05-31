import React from 'react';
import appStyles from './app.module.css';
import AppHeader from './app-header/app-header';
import BurgerConstructor from './burger-constructor/burger-constructor';
import BurgerIngredients from './burger-ingredients/burger-ingredients';
import { Ingredient } from '../models/ingredient.model';
import { apiUrl } from '../const/api.const';

function App() {
  const [ingredientsData, setIngredientsData] = React.useState<Ingredient[]>([]);

  React.useEffect(() => {
    const getIngredientsData = async () => {
      try {
        const response = await fetch(apiUrl);
        const responseData = await response.json();
        if (!responseData.success) {
          throw new Error(responseData);
        }
        else{
          console.log(responseData.data);
          setIngredientsData(responseData.data);
        }
      }
      catch (error) {
        console.log(error);
      }
    }
    getIngredientsData();
  }, [])

  return (
    <div className="app">
      <AppHeader /> <main className={`mt-10 ${appStyles.main}`}>
        <BurgerIngredients ingredientsData={ingredientsData} />
        <BurgerConstructor/>
      </main>
    </div>
  );
}

export default App;
