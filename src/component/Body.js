import { useState, useEffect, useContext } from "react"
import { restrau } from "../config"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { filterData } from "../utils/helper"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext"

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchTxt, setSearchTxt] = useState("")
    const { user, setUser } = useContext(UserContext)


    useEffect(() => {
        getRestaurants()
    }, [])
    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93608250719298&lng=77.62457251033699&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        // console.log(json)
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    const isOnline = useOnline()
    if (!isOnline) {
        return <h1> Offline, please check your internet connection!!</h1>
    }

    // if(!allRestaurants) return null;
    // if(filteredRestaurants?.length===0) return <h1>No restaurant match found!!</h1>

    return allRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <>
            <div className="search-container p-5 bg-slate-100 flex justify-center">
                <input type="text" placeholder="Search" className="  w-2/4 h-10 mt-1 rounded-xl py-1 px-2  focus:bg-blue-200" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
                <button className="p-1 m-2 bg-gray-500 hover:bg-slate-800 text-white rounded-md" onClick={() => {
                    const data = filterData(searchTxt, allRestaurants)
                    setFilteredRestaurants(data)
                }}>Search</button>
                {/* <input value={user.name} onChange={(e)=>setUser({
                  ...user,
                  name: e.target.value,
                  
                })}/> */}
                {/* <input value={user.email} onChange={(e)=>setUser({
                   ...user,
                   email: e.target.value,
                  
                })}/> */}
            </div>

            <div className="flex flex-wrap justify-evenly">
                {
                    filteredRestaurants.map((restaurant) => {
                        return <Link to={"/restaurant/" + restaurant.data.id}><RestaurantCard {...restaurant.data} key={restaurant.data.id} /></Link>
                    })
                }

            </div>
        </>
    )
}
export default Body