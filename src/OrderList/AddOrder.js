import { useState } from "react";
import { useOrderDispatch } from "./OrderContext";

export default function AddOrderk() {
  const [text, setText] = useState("");
  const dispatch = useOrderDispatch();
  return (
    <div className="add-order">
      <input
        placeholder="Add an Order"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

let nextId = 3;
