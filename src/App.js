import "./styles.css";
import Breakfast from "./BreakfastList";
import LunchList from "./LunchList";
import Recipe from "./Recipe";
import SpecialMeal from "./SpecialMeal";

export default function FoodList() {
  return (
    <section>
      <div className="App container">
        <div className="row">
          <div className="col-sm-4 menuList">
            <SpecialMeal />
            <hr />
            <Breakfast />
            <hr />
            <LunchList />
          </div>
          <div className=" border col-sm-8 imageSection">
            <Recipe />
          </div>
        </div>
      </div>
    </section>
  );
}
