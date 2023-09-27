export default function SpecialMeal() {
  return (
    <div>
      <h2>Conditional Rendering</h2>
      <ul>
        <Item isChecked={true} name="Bacon, Egg & Cheese Biscuit" />
        <Item isChecked={true} name="Sausage Biscuit " />
        <Item isChecked={false} name="Hotcakes" />
      </ul>
    </div>
  );
}

function Item({ name, isChecked }) {
  return (
    <li>
      {name}
      {isChecked && "✔"}
    </li>
  );
}
