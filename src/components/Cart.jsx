import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryItems from './CategoryItems'
import { clearCart } from '../utils/cartSlice'

function Cart() {

    const cartItems = useSelector((store)=>store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className='w-5/12 m-auto mt-5'>
            <button className='px-3 py-2 bg-slate-300 rounded-lg hover:bg-slate-200'
            onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1 className='mt-5'>Cart is empty! Add items to cart</h1>}
            <CategoryItems items={cartItems}/>
        </div>
    </div>
  )
}

export default Cart