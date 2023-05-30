import React from 'react';
import appStyles from './app.module.css';
import AppHeader from './app-header/app-header';
import BurgerConstructor from './burger-constructor/burger-constructor';
import BurgerIngredients from './burger-ingredients/burger-ingredients';
import { apiUrl } from '../const/api.const';

function App() {
  const [ingredientsData, setingredientsData] = React.useState([]);

  React.useEffect(() => {
    getIngredients();
  }, [])

  function getIngredients() {
    fetch(apiUrl)
      .then(res => res.json())
      .then((data) => { console.log(data.data); data.success ? setingredientsData(data.data) : console.log(data) })
      .catch(e => {
        console.log(e);
      });
  }
  return (
    <div className="app">
      <AppHeader />
      <main className={`mt-10 ${appStyles.main}`}>
        <BurgerIngredients ingredientsData = {ingredientsData} />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
