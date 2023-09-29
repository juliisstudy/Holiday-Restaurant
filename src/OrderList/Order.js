import OrderList from "./OrderList";
import { OrderProvider } from "./OrderContext";
import AddOrder from "./AddOrder";

export default function Order() {
  return (
    <div className="border special-block">
      <h2>Start An Order</h2>
      <ul className="list-group">
        <OrderProvider>
          <AddOrder />
          <OrderList />
        </OrderProvider>
      </ul>
    </div>
  );
}
