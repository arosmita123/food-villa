import React from "react"
const Shimmer = () => {
    return (
        <div className="restaurant-list w-20 h-24">
            {Array(20).fill("").map((e, index) => <div  key={index} className="shimmer-card"></div>)}
            {/* <h1>Shimmer ui loading...</h1> */}
        </div>
    )
}

export default Shimmer