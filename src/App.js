import "./styles.css";

function Item({ name, isChecked }) {
  if (isChecked) {
    return <li> {name}✔</li>;
  }
  return <li> {name} </li>;
}

export default function FoodList() {
  return (
    <section>
      <div className="App">
        <h1>Conditional Rendering</h1>
        <ul>
          <Item isChecked={true} name="Bacon, Egg & Cheese Biscuit" />
          <Item isChecked={true} name="Sausage Biscuit " />
          <Item isChecked={true} name="Hotcakes" />
        </ul>
      </div>
    </section>
  );
}
