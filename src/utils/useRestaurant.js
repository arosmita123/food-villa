import { useState, useEffect } from "react"

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null)
  useEffect(() => {
    getRestaurantInfo()
  }, [])

  async function getRestaurantInfo() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.93608250719298&lng=77.62457251033699&restaurantId=${resId}&submitAction=ENTER`)
    const json = await data.json()
    const itemCards =
    json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  
   
    
    console.log(itemCards)
    setRestaurant(itemCards)
  }

  return restaurant;

}
export default useRestaurant