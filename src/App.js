import "./styles.css";

function Item({ name, isChecked }) {
  // return <li>{isChecked ? name + "✔" : <del> {name} </del>}</li>;
  return (
    <li>
      {name}
      {isChecked && "✔"}
    </li>
  );
}

export default function FoodList() {
  return (
    <section>
      <div className="App">
        <h1>Conditional Rendering</h1>
        <ul>
          <Item isChecked={true} name="Bacon, Egg & Cheese Biscuit" />
          <Item isChecked={true} name="Sausage Biscuit " />
          <Item isChecked={false} name="Hotcakes" />
        </ul>
      </div>
    </section>
  );
}
