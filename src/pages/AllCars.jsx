import { useLoaderData } from "react-router-dom"

const AllCars = () => {
    const cars = useLoaderData()
    console.log(cars[0])
    return (
        <div id="all-cars-container">
            <div id='search-container'>
                <input type="text" placeholder="search for a car or category..." />
            </div>
        </div>
    )
}

export default AllCars
