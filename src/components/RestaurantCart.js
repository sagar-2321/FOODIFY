import CDN_URL from "../utils/constant";

const RestaurantCart = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, sla, costForTwo } =
    props.resData?.info;

  return (
    <div
      className="restaurant-cart border border-gray-300 rounded-lg shadow-md p-4 m-2 bg-[#f9f9f9] w-[240px] h-[380px] text-center overflow-visible 
        hover:border-black hover:border-r-1 hover:shadow-md hover:bg-gray-200
        transition-transform duration-300 ease-in-out transform-cpu
        box-border hover:scale-95"
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-2"
      />
      <div className="restaurant-details">
        <h2 className="text-bold font-semibold">{name}</h2>
        <h4 className="text-md text-gray-600 text-balance ">
          Rating: {avgRating}
        </h4>
        <h4 className="text-md text-gray-600">
          Cuisines: {cuisines.join(", ")}
        </h4>
        <h4 className="text-md text-gray-500">
          Delivery time: {sla.deliveryTime} mins
        </h4>
        <h4 className="text-md font-bold">Price: {costForTwo}</h4>
      </div>
    </div>
  );
};

export const PromotedRestaurantCart= (RestaurantCart) => {
  return (props) => {
    const {availability}=props.resData?.info;
    console.log(availability);
    return (<div>
      <label className="absolute bg-gray-100 z-10 text-black m-2 mt-0 p-2 rounded-lg ">{availability.opened?"opened":"close"}</label>
   
      <RestaurantCart {...props}/>
    </div>)
  };
};
export default RestaurantCart;
