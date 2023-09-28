const breakfast = [
  "Sausage Burrito",
  "Hotcakes and Sausage",
  "Hash Browns",
  "Bacon, Egg & Cheese Biscuit",
  "Sausage Biscuit",
];

export default function Breakfast() {
  const listItems = breakfast.map((breakfastEach) => <li>{breakfastEach}</li>);
  return (
    <div className="special-block">
      <h2> Rendering Lists</h2>

      <ul>{listItems}</ul>
    </div>
  );
}
