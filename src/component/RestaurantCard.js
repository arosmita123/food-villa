import { useContext } from 'react'
import {IMG_CDN_URL} from '../config'
import UserContext from '../utils/UserContext'

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    const {user}=useContext(UserContext)
    // const{}= restaurant.data.data
    return (
        <div className="w-60 p-2 m-2 shadow-lg bg-slate-200">
            <img alt="" src={IMG_CDN_URL +
                cloudinaryImageId
            } />
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
            {/* <h5>{user.name}-{user.email}</h5> */}
        </div>
    )
}
export default RestaurantCard