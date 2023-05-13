import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const loggedInUser = () => {
    return true
}



const Title = () => (
    <a href="/">
        <img
            alt="logo"
            src="https://www.ujudebug.com/wp-content/uploads/2019/08/food_villa-min.jpg"
            className="h-28 px-2" />
    </a>
)
const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true)
    const isOnline = useOnline(true)

    const { user } = useContext(UserContext)
    const cartItems = useSelector(store => store.cart.items)
    return (
        <div className="flex flex-col sm:w-full justify-between bg-slate-200 shadow-lg sm:bg-blue-100 md:flex-row">
            <div>
                <Title />
            </div>
            <div className="nav-items">
                <ul className="flex py-10 ">

                    <li className="px-2 font-bold"> <Link to='/'>Home</Link></li>
                    <li className="px-2 font-bold"><Link to='/about'>About</Link></li>
                    <li className="px-2 font-bold"><Link to="/contact">Contact </Link></li>
                    <li className="px-2 font-bold"> <Link to='/instamart'>Instamart </Link></li>
                    <li className="px-2 font-bold"><Link to="/cart">Cart-{cartItems.length}</Link></li>

                </ul>
            </div>

        </div>
    )
}
export default Header