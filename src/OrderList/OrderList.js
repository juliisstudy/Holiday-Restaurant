import { useState } from "react";
import { useOrder, useOrderDispatch } from "./OrderContext.js";

export default function OrderList() {
  const orders = useOrder();
  return (
    <ul>
      {orders.map((order) => (
        <li key={order.id}>
          <Order order={order} />
        </li>
      ))}
    </ul>
  );
}

function Order({ order }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useOrderDispatch();
  let orderContent;
  if (isEditing) {
    orderContent = (
      <>
        <li className="list-group-item">
          <input
            value={order.text}
            onChange={(e) => {
              dispatch({
                type: "changed",
                order: {
                  ...order,
                  text: e.target.value,
                },
              });
            }}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </li>
      </>
    );
  } else {
    orderContent = (
      <>
        {order.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <lable>
      <li className="list-group-item ">
        {orderContent}
        <button
          onClick={() => {
            dispatch({
              type: "deleted",
              id: order.id,
            });
          }}
        >
          Delete
        </button>
      </li>
    </lable>
  );
}
