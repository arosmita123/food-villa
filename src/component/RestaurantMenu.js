import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config'
import Shimmer from './Shimmer'
import useRestaurant from '../utils/useRestaurant'
import { addItem } from '../utils/CartSlice'
import { useDispatch } from 'react-redux'
import RestaurantItemCard from './RestaurantItemCard'


const RestaurantMenu = () => {

  const { resId } = useParams()
  // console.log(params)
  // const [restauraunt, setRestaurant] = useState(null)
const restauraunt = useRestaurant(resId)
const dispatch=useDispatch(resId)

const handleAddItems=()=>{
  dispatch(addItem("grapes")) 
}
  
  return !restauraunt ?  (<Shimmer />):(
   
  
    <div className='menu'>
      {console.log(">>>restaurant is calling",restauraunt)}
      <div>
      <h1>Restraunt id: {resId}</h1>
      {/* <h2>{restauraunt?.cards[0]?.card?.card?.info?.name}</h2>
      <img src={IMG_CDN_URL + restauraunt?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
      <h3>{restauraunt?.cards[0]?.card?.card?.info?.areaName}</h3>
      <h3>{restauraunt?.cards[0]?.card?.card?.info?.city}</h3>
      <h3>{restauraunt?.cards[0]?.card?.card?.info?.avgRating}</h3>
      <h3>{restauraunt?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3> */}
     {restauraunt.map((item) => {
        return <RestaurantItemCard item={item} key={item.card.info.id} />;
      })}
    </div>
    <div>
      <button className='p-2 m-5 bg-purple-100' onClick={()=> handleAddItems()}>Add items</button>
    </div>
    <div>
      <h1>Menu</h1>
      {/* <ul>
        {Object.values(restauraunt?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item)=>(
          <li key={item.id}>{item.restauraunt?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1].card.info.name}</li>
        ))}
      </ul> */}
    </div>
    </div>
  )
}

export default RestaurantMenu