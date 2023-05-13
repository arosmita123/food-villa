export function filterData(searchTxt, allRestaurants) {
    const filterData= allRestaurants.filter((restaurant) => 
        restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    )
    return filterData
}