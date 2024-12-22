import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constant";
import { addItem,removeItem } from "../utils/cartSlice";


const Itemlist = ({ itemlist }) => {
  const items = useSelector(store => store.cart.items)
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div>
      {itemlist?.map((item) => {
        const cartItem = items.find((cartItem) => cartItem.card.info.id === item.card.info.id);
        return (
          <div
            key={item.card.info.id}
            className="menu-items border-b border-gray-300 py-2 flex items-center justify-between"
          >
            <div className="flex-grow">
              <h4 className="text-md font-semibold">
                {item.card.info.name}
              </h4>
              <h5 className="text-sm text-gray-600">
                {item.card.info.description}
              </h5>
              <h6 className="text-sm text-gray-500">
                Price:{" "}
                {item.card.info.price * (cartItem?.quantity||1)/ 100 ||
                  item.card.info.defaultPrice 
                  * (cartItem?.quantity||1) / 100}
              </h6>
            </div>
            <div className="relative object-cover ">
              <img
                src={IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              {cartItem?.quantity>0 ? (<>
                <button  className="px-2 py-1 bg-gray-200 rounded" onClick={() =>dispatch(removeItem(item.card.info.id))} >
                  -
                </button>
                <span>{cartItem.quantity}</span>
                <button
                  onClick={() =>
                    handleAddItem(item)
                  }
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </>) : (
                <button className="absolute bottom-[-3px] left-5 bg-black text-white rounded-md z-10" onClick={() => handleAddItem(item)}>Add</button>)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Itemlist;