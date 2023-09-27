import "./styles.css";
import Breakfast from "./BreakfastList";
import LunchList from "./LunchList";
import Interaction from "./Interaction";
import Recipe from "./Recipe";
import SpecialMeal from "./SpecialMeal";

export default function FoodList() {
  return (
    <section>
      <div className="App container">
        <div className="row">
          <div className=" border col-sm-4">
            <SpecialMeal />
            <Breakfast />
            <LunchList />
          </div>
          <div className=" border col-sm-8">
            <Recipe />
          </div>
        </div>
      </div>
    </section>
  );
}
