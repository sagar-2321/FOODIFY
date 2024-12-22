import Itemlist from "./Itemlist";

const RestaurantCategory = ({ items ,showList, setShowList,index}) => {
  const { title, itemCards } = items;

  console.log(title, itemCards);
  toggleList=()=>{
    showList?
     setShowList(null):setShowList(index);
  }

  return (
    <div className="m-4 p-4 flex flex-col border-b-black shadow-lg rounded-lg">
      <div className="flex justify-between items-center text-lg font-bold pb-2 cursor-pointer" onClick={toggleList}>
       
       {title} ({itemCards.length})
        <span className="text-sm cursor-pointer">{showList?"▲":"▼"}</span>
      
      </div>
      {showList && <div><Itemlist itemlist={itemCards} /></div>}

    </div>
  )
};
export default RestaurantCategory;
