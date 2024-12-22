import RestaurantCart , { PromotedRestaurantCart} from "./RestaurantCart";
import ShimmerUI from "./shimmerUI";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Link } from "react-router-dom";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filtredRest, setFiltredRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  let [filter, setFilter] = useState(false);
  const RestaurantCartPromoted = PromotedRestaurantCart(RestaurantCart);
  console.log("body rendered");

  function FilterData() {
    const newFilter = !filter;
    if (newFilter) {
      const filteredData = filtredRest.filter(
        (rest) => rest.info.avgRating > 4.5
      );
      setFiltredRest(filteredData);
    } else {
      if (searchText !== "") {
        setFiltredRest(
          resData.filter((res) => {
            return res.info.name
              .toLowerCase()
              .includes(searchText.toLowerCase());
          })
        );
      } else setFiltredRest(resData);
    }
    setFilter(newFilter);
    console.log(filtredRest);
  }

  function handelSearch() {
    setFiltredRest(resData);
    const restaurant = resData.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    if (filter) setFilter(false);
    setFiltredRest(restaurant);
    console.log(filtredRest);
  }

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchData();
        setResData(data);
        setFiltredRest(data);
      };
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return resData.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="mx-4 py-2">
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search for food"
          className=" border border-gray-500 rounded p-1 w-100 h-10 "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div> <button
          className="bg-blue-500 text-white rounded p-2 ml-2 hover:bg-blue-600 m-4 px-4 py-2"
          onClick={handelSearch}
        >
          Search
        </button></div>
        <div>
        <button
          onClick={FilterData}
          className={`m-4 px-4 py-2 bg-gray-200 text-gray-800 rounded p-2 hover:bg-gray-300 ${filter ? "bg-green-500 text-white hover:bg-green-500" : ""}`}
        >
          {filter ? "Filtered" : "Filter"}
        </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-4 ml-4 pl-6 ">
        { filtredRest.map((resdata) => (
          <Link key={resdata.info.id} to={"restaurant/" + resdata.info.id}>
          
             {resdata.info.availability.opened ? (<RestaurantCartPromoted resData={resdata}/>):
            (<RestaurantCart resData={resdata} />)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
