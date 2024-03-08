import { useEffect, useState } from "react"
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resid) => {
    const [resinfo,setResinfo] = useState(null)
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(MENU_URL+resid);
        const json = await data.json();
        setResinfo(json.data);
    }
    return resinfo;

}
export default useRestaurantMenu;