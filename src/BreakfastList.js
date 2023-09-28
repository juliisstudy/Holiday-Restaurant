const breakfast = [
  "Sausage Burrito",
  "Hotcakes and Sausage",
  "Hash Browns",
  "Bacon, Egg & Cheese Biscuit",
  "Sausage Biscuit",
];

export default function Breakfast() {
  const listItems = breakfast.map((breakfastEach) => (
    <li className="list-group-item">{breakfastEach}</li>
  ));
  return (
    <div className="special-block">
      <h2> Main</h2>
      <ul className="list-group">{listItems}</ul>
    </div>
  );
}
