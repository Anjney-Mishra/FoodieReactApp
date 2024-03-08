import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

function Header() {

  const [login,setLogin] = useState('Login')
  const onlinestatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  //subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className='flex justify-between shadow-md mb-4 items-center'>
        <div className='logo-container'>
            <img src="https://static.vecteezy.com/system/resources/previews/008/687/818/original/food-delivery-logo-free-vector.jpg" alt="" height={100} width={100}/>
        </div>
        <div className='nav-items'>
            <ul className='flex p-4 m-4 gap-4'>
                <li>Online Status:{onlinestatus?"🟢":"🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contactus">ContactUs</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/cart">Cart<span className='font-bold'>({cartItems.length})</span></Link></li>
                <button style={{cursor:'pointer'}} onClick={()=>{login==="login"?setLogin("logout"):setLogin("login")}}>{login}</button>
                <li className='font-bold'>{loggedInUser}</li>

            </ul>
        </div>
    </div>
  )
}

export default Header