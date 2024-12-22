import { useSelector, useDispatch } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
   const dispatch = useDispatch();
   const items = useSelector((state) => state.cart.items);
   console.log(items);
   const total = items?.length ? items?.reduce((T, item) => {
      const price = item?.card?.info?.price || item?.card?.info?.defaultPrice || 0;
      const quantity = item?.quantity || 1;
      return T + (price * quantity) / 100;
   }, 0) : 0;

   return (
      <div className="flex flex-col items-center justify-center ">
         <div> <h1 className="font-bold text-3xl" >Cart</h1></div>
         {items?.length === 0 ? (<div className="border-t-2  text-xl items-center justify-center h-screen"> Cart is Empty ! Please add Item to order</div>) : (<button className=" rounded-md p-1 text-red-500 border-gray-100 shadow-lg m-2" onClick={() => dispatch(clearCart())}>Clear Cart</button>)}
         <div className="p-4"><Itemlist itemlist={items} /></div>
         {items?.length && <div className="font-bold ">Total Price : {total}</div>}
         {items?.length && <button className="font-bold rounded-md p-1 text-green-400 border-gray-100 shadow-lg">ORDER NOW</button>}

      </div>
   );
}

export default Cart;