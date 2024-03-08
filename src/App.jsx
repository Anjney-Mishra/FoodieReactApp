import { Outlet } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'





function App() {
  const [user,setUser] = useState("")

  useEffect(()=>{
    const data = {
      username:"Anjney Mishra",
    }
    setUser(data.username)
  },[])

  return (
    <>
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:user,setUser}}>
    <Header/>
    <Outlet/>
    </UserContext.Provider>
    </Provider>
    </>
  )
}



export default App
