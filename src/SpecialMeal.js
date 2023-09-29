export default function SpecialMeal() {
  return (
    <div className="special-block">
      <h2>Today Specials</h2>
      <ul className="list-group">
        <Item isChecked={true} name="Grilled Pork Loin Kebabs" />
        <Item isChecked={true} name="Grilled Chicken Breast" />
        <Item isChecked={false} name="Sushi-Sashimi Combination" />
      </ul>
      <p className="text-description"> ✔ Meals are available</p>
    </div>
  );
}

function Item({ name, isChecked }) {
  return (
    <li className="list-group-item">
      {name} {isChecked && "  ✔"}
    </li>
  );
}
