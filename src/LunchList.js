import { lunchMenu } from "./data";

export default function LunchList() {
  const lunchForTwo = lunchMenu.filter((lunch) => lunch.price === 2);
  const listItem = lunchForTwo.map((lunch) => (
    <li>
      <p>
        {lunch.name} {"$" + lunch.price}
      </p>
    </li>
  ));
  return <ul>{listItem}</ul>;
}
