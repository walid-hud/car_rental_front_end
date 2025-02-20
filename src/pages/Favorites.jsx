import { useEffect, useState } from "react"
import CarCard from "../components/CarCard";
import { Nofavorites } from "../components/Errors";
import { ReturnButton } from "../components/functions";
const Favorites = () => {
  const favs = JSON.parse(localStorage.getItem("favorite_cars")) || [1]
  const [loading , setLoading] = useState(false)
  const [cars , setCars] = useState(null)
  useEffect(()=>{
    if(favs.length > 0){
      const getData = async ()=>{
      const res = await fetch('http://192.168.11.113:3001/cars')
      const carsData = await res.json()
      setCars(carsData)
        }  
      getData()
    }}, [])
  return (
    <div id="favorites-container">
      <p className={loading ? "head" : "head loaded"}>Favorites</p>
      {favs.length > 0 ? (
        cars && cars.length === 0 ? (
          ""
        ) : (
          cars && cars.map((car) => {
            if (favs.includes(car.id)) {
              return <CarCard key={car.id} car={car} />
            }
            return null;
          })
        )
      ) : <Nofavorites/>}
      <ReturnButton/> 
    </div>
  )
}

export default Favorites
