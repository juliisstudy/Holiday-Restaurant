import "./styles.css";
import Header from "./Header";
import MainDish from "./MainDish";
import LunchList from "./LunchList";
import Recipe from "./Recipe";
import SpecialMeal from "./SpecialMeal";
import Order from "./OrderList/Order";
import ProductListFilter from "./productList/ProductListFilter";
import {menuData} from "./productList/menuData.js";


export default function FoodList() {
  return (
    <section>
      <div className="App container">
        <Header headerText="Holiday Restaurant" />
        <div className="row">
          <div className="col-sm-4 menuList">
            <SpecialMeal />
            <hr />
            <MainDish />
            <hr />
            <LunchList />
          </div>
          <div className="  col-sm-8 imageSection">
            <Recipe />
            <Order />
            <ProductListFilter dishes={menuData}/>
          </div>
        </div>
      </div>
    </section>
  );
}
