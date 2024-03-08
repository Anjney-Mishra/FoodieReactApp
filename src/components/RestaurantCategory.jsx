import React, { useState } from 'react'
import CategoryItems from './CategoryItems'

function RestaurantCategory({data,showItems,setShowIndex}) {
    // const [showItems,setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex()
    }

  return (
    <div>
        {/* Header */}
        <div className='w-6/12 mx-auto my-4 bg-gray-50 p-4'>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className='font-bold text-lg'>{data.title}({data.itemCards.length})</span>
            <span>{showItems?"🔼":"🔽"}</span>
            </div>
            {showItems && <CategoryItems items={data.itemCards}/>}
        </div>
        {/* Body */}
    </div>
  )
}

export default RestaurantCategory