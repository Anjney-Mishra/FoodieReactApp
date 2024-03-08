import React, { useContext, useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


 



function Body() {

  const [reslist,setReslist] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([])
  const [searchtext,setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  },[])


  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.29790&lng=82.99560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const jsonData = await data.json();
    //optional chaining ?.
    const resData = await jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants;
    // console.log(resData)
    setReslist(resData);
    setFilteredRestaurant(resData);
  }

  const {loggedInUser,setUser} = useContext(UserContext)

  const onlinestatus = useOnlineStatus();
  if(onlinestatus===false)
  return(<h1>You are offline! Check your internet connection</h1>)

  if(reslist.length === 0)
  {
    return(
      <Shimmer/>
    )
  }


  return (
    <div className='main-body'>
      <div className="filters flex items-center">

          <div className="m-4 p-4">
            <input type="text" className='border border-black' value={searchtext} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button className='px-4 py-1.5 m-4 bg-green-200 rounded-md hover:bg-green-300' onClick={()=>{
              const filteredList = reslist.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
              setFilteredRestaurant(filteredList);
            }}>Search</button>
          </div>
          <div>
          <button className='bg-gray-100 px-4 py-1.5 rounded-md' onClick={()=>{
            const filterRestaurants = reslist.filter((res)=>(res.info.avgRating>4.2))
            setFilteredRestaurant(filterRestaurants)
          }}>Top Rated Restaurants</button><br />
          </div>
          <div className='mx-5'>
            <label htmlFor="">User Name:</label>
            <input type="text" className='px-2 ml-1 border border-black' value={loggedInUser} onChange={(e)=>setUser(e.target.value)}/>
          </div>

          
      </div>


        <div className="card-container flex flex-wrap">
        {filteredRestaurant.length > 0 && filteredRestaurant.map((restaurant)=>(
          <Link to={"/restaurant/"+restaurant.info.id}><RestaurantCard key={restaurant.info.id} restData={restaurant}/></Link>
        ) 
        )}
        </div>
    </div>
  )
}

export default Body