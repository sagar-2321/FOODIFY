import {useState } from "react";
import ShimmerUI from "./shimmerUI";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  
  const data=useRestMenu(resId);
  const [showList ,setShowList]=useState(null);
  // console.log(data);
  console.log("render");
  if (data.length === 0) return <ShimmerUI />;
  const { name, sla,totalRatingsString,avgRating,cuisines, costForTwoMessage,areaName,} = data?.cards[2]?.card?.card?.info;
  const itemCategory  = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => card?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
   
 console.log(itemCategory)

  return (
    <div className="Restaurant-details p-4">
      <div className="restaurant-header mb-auto p-10 px-auto grid items-center rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2 className="text-lg text-gray-700">
          {avgRating}({totalRatingsString}) . {costForTwoMessage}
        </h2>
        <h3 className="text-md text-gray-600">{cuisines.join(", ")}</h3>
        <h4 className="text-md text-gray-500">{areaName}</h4>
        <h4 className="text-md text-gray-500">Delivery time: {sla.slaString}</h4>
      </div>
      <div>
        {itemCategory.map((item,index)=>{return <RestaurantCategory key={item?.card?.card?.title} items={item?.card?.card} setShowList={setShowList} showList={showList==index} index={index}/>})}
        
      </div>
    </div>
  );
};

export default RestaurantMenu;
