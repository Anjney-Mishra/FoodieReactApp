import React from 'react'

function RestaurantCard({restData}) {

  const {name,avgRating,cloudinaryImageId,costForTwo}=restData?.info;


  return (
    <div className='m-4 p-4 w-[200] border rounded-md'>
        <img className='w-full h-48 object-fill rounded-md' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="" />
        <div className='mt-2 text-center'>
          <h3 className='font-bold'>{name}</h3>
          <h4>{avgRating?avgRating:"No Rating Available"}</h4>
          <h4>{costForTwo}</h4>
        </div>
    </div>

  )
}

export default RestaurantCard