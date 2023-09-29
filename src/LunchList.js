import { lunchMenu } from "./data";

export default function LunchList() {
  const lunchForTwo = lunchMenu.filter((lunch) => lunch.price === 20);
  const listItem = lunchForTwo.map((lunch) => (
    <li className="list-group-item">
      <p>
        {lunch.name} {"$" + lunch.price}
      </p>
    </li>
  ));
  return (
    <div className="special-block">
      <h2> Dinner around $20 </h2>

      <ul className="list-group">{listItem}</ul>
      <p className="text-description"></p>
    </div>
  );
}
