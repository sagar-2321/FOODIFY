import { useEffect, useState } from "react";
import { REST_MENU_URL, REST_PART } from "../utils/constant";

const useRestMenu = (resId) => {
  const [RestaurantMenu, setRestaurantMenu] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(REST_MENU_URL + resId + REST_PART);
    const jsonData = await response.json();
    setRestaurantMenu(jsonData.data);
    console.log("data fetch");
  }
  
  return RestaurantMenu;
};

export default useRestMenu;
