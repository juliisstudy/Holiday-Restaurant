const mainDish = [
  "Grilled Chicken Breast",
  "Beef Stuffed Poblano",
  "Sushi-Sashimi Combination",
  "Grilled Pork Loin Kebabs",
  "Creamy Garlic Shrimp Pasta",
];

export default function MainDish() {
  const listItems = mainDish.map((main) => (
    <li className="list-group-item">{main}</li>
  ));
  return (
    <div className="special-block">
      <h2> Main</h2>
      <ul className="list-group">{listItems}</ul>
    </div>
  );
}
