import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import Header from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"
import Cart from "./component/Cart"
import { IMG_CDN_URL } from './config'
import About from "./component/About"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Error from "./component/Error"
import Contact from "./component/Contact"
import RestaurantMenu from "./component/RestaurantMenu"
import Profile from "./component/Profile"
import Shimmer from "./component/Shimmer"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import store from "./utils/Store"

const Instamart = lazy(() => import("./component/Instamart"))



// const heading = React.createElement("h1", {id:"heading", xyz: "abc"}, "Hello world from REact!")
// console.log(heading)
const AppLayout = () => {
    const[user, setUser]=useState({
        name:"arosmita jena",
        email: "aros@gmail.com"
    })

    useEffect
    return (
       <Provider store={store}>
         <UserContext.Provider value={{
            user: user,
            setUser: setUser,
            }}>
            <Header />
            <Outlet />
            <Footer />
        </UserContext.Provider >
       </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [

            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children: [{
                    path: "profile",
                    element: <Profile />
                }]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
                 
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer/>}>
                        <Instamart />
                    </Suspense>
                )
            },
         
        ]
    },



])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)