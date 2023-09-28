export default function SpecialMeal() {
  return (
    <div className="special-block">
      <h2>Today Specials</h2>
      <ul className="list-group">
        <Item isChecked={true} name="Bacon, Egg & Cheese Biscuit" />
        <Item isChecked={true} name="Sausage Biscuit " />
        <Item isChecked={false} name="Hotcakes" />
      </ul>
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
