import { useState } from "react";
import { lunchMenu } from "./data.js";
import { getImageSrc, getImageRef } from "./utils.js";

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
      <img className="image" src={getImageSrc(lunch.name)} alt={lunch.name} />
      <p className="imageRef">
        <i>{getImageRef(lunch.imgRef)}</i>
      </p>
      <h2>
        <i>{lunch.name}</i>
      </h2>
      <h4>
        ({index + 1} of {lunchMenu.length})
      </h4>
      <button onClick={handleShowMore}>
        {showMore ? "Hide" : "show"} ingredients
      </button>
      <button onClick={handleNextClick}>Next</button>

      {showMore && <p className="ingredients"> {lunch.ingredients}</p>}
    </>
  );
}
