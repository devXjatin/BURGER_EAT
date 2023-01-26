import React from 'react'
import MenuCard from './MenuCard'
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'
const Menu = () => {

    const addToCartHandler = (itemNum)=>{

    }

  return (
    <section id="menu">
        <h1>MENU</h1>
        <div>
            <MenuCard
            itemNum={1}
            burgerImg={burger1}
            price={100}
            title="Veg Burger"
            handler={addToCartHandler}
            delay={0.1}
            />
            <MenuCard
            itemNum={2}
            burgerImg={burger2}
            price={140}
            title="Cheese Burger"
            handler={addToCartHandler}
            delay={0.4}
            />
            <MenuCard
            itemNum={3}
            burgerImg={burger3}
            price={200}
            title="Veg-Cheese Burger"
            handler={addToCartHandler}
            delay={0.8}
            />
        </div>
    </section>
  )
}

export default Menu