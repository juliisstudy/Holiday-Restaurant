export default function LunchList({dishes}) {
  const lunchForTwo = dishes.filter((lunch) => lunch.price === 20);
  const listItem = lunchForTwo.map((lunch) => (
    <li className="list-group-item" >
      <p key={lunch.name}>
        {lunch.name} {"$" + lunch.price} //fix later
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
