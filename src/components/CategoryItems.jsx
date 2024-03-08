import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

function CategoryItems({items}) {
  // console.log(items)
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    //Dispatch An Action
    dispatch(addItem(item)) //pizza is action.payload
  }

  return (
    <div>
        {
          items.map((item)=>(
          <div key={item.card.info.id} className='p-2 m-2 border-gray-200 border-b-2 text-left'>
            <div className='py-2 flex justify-between'>

              <div className='w-8/12'>
                  <span>{item.card.info.name}</span>
                  <p>₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</p>
                <p className='text-xs mt-2'>{item.card.info.description}</p>
            </div>
            <div className='w-4/12 p-4'>
              <div className='absolute'>
                  <button className='p-2 mx-16 rounded-lg bg-green-600 text-white shadow-lg m-auto' onClick={()=>handleAddItem(item)}>+Add</button>
              </div>
              <img src={item?.card?.info?.imageId?CDN_URL+item?.card?.info?.imageId:""} />
              </div>
            </div>
            
          </div>
          ))
        }
    </div>
  )
}

export default CategoryItems