import { RESTAURANT_LIST_API } from "./constant";

export const fetchData = async () => {

  const data = await fetch(RESTAURANT_LIST_API);
  const jsonData = await data.json();
  console.log(jsonData);
  return jsonData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

};