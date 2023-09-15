import { useState } from "react";
import { lunchMenu } from "./data.js";

export default function Recipe() {
  const [index, setIndex] = useState(0);
  const hasNext = index < lunchMenu.length - 1;
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  let lunch = lunchMenu[index];

  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{lunch.name}</i>
      </h2>
      <h3>
        ({index + 1} of {lunchMenu.length})
      </h3>
      <button onClick={handleShowMore}>
        {showMore ? "Hide" : "show"} recipe
      </button>
      {showMore && <p> {lunch.recipe}</p>}
    </>
  );
}
