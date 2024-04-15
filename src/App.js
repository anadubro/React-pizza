import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import axios from 'axios';

import Skeleton from './components/PizzaBlock/Skeleton';
// import pizzas from './assets/pizzas.json';


function App() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get('http://127.0.0.1:8000/pizzas/').then(res => {
            setItems(res.data);
            setIsLoading(false);
        })
    }, []);
    
    return (
        <div className="wrapper">
        <Header />
        <div className="content">
            <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading 
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
            </div>
        </div>
        </div>
        
  );
}

export default App;
