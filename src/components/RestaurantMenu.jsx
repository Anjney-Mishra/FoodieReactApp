import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

//Custom Hooks are used to attain SINGLE RESPONSIBILITY PRINCIPLE
const RestaurantMenu = () => {
    const {resid} = useParams();
    const resinfo = useRestaurantMenu(resid);//custohook - useRestaurantMenu

    const [showIndex,setShowIndex] = useState(null) //control by children

    if(resinfo===null)
    {
        return(
            <Shimmer/>
        )
    }

    const {name,cuisines} = resinfo?.cards[0]?.card?.card?.info;

    const categories = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories)

    return (
        
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold">{cuisines.join(", ")}</p>
            {/*<h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((itemcard)=>(<li key={itemcard?.card?.info?.id}>{itemcard?.card?.info?.name} <b>PRICE: RS. {(itemcard?.card?.info?.defaultPrice/100)||(itemcard?.card?.info?.price/100)}</b></li>))}
            </ul> */}
            {
            categories.map((category,index)=>(
                //controlled component - parent controlling child (p-ResMenu c-ResCat)
            <RestaurantCategory key={category?.card?.card.title} showItems={index==showIndex && true}  setShowIndex={() => setShowIndex(index)} data={category?.card?.card}/>))
            }
        </div>
    )
}
export default RestaurantMenu;