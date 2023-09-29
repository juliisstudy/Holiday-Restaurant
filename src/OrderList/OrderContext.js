import { createContext, useContext, useReducer } from "react";

const OrderContext = createContext(null);
const OrderDispatchContext = createContext(null);

export function OrderProvider({ children }) {
  const [orders, dispatch] = useReducer(ordersReducer, initialOrders);
  return (
    <OrderContext.Provider value={orders}>
      <OrderDispatchContext.Provider value={dispatch}>
        {children}
      </OrderDispatchContext.Provider>
    </OrderContext.Provider>
  );
}
export function useOrder() {
  return useContext(OrderContext);
}
export function useOrderDispatch() {
  return useContext(OrderDispatchContext);
}
function ordersReducer(orders, action) {
  switch (action.type) {
    case "added": {
      return [
        ...orders,
        {
          id: action.id,
          text: action.text,
        },
      ];
    }
    case "changed": {
      return orders.map((o) => {
        if (o.id == action.order.id) {
          return action.order;
        } else {
          return o;
        }
      });
    }
    case "deleted": {
      return orders.filter((o) => o.id !== action.id);
    }
    default: {
      throw Error("Unknown action:" + action.type);
    }
  }
}

const initialOrders = [
  { id: 0, text: "Grilled Chicken Breast" },
  { id: 1, text: "Meatballs Sub" },
  { id: 2, text: "Caesar Salad" },
];
