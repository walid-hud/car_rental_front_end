import { useEffect, useState} from "react"
import {BarLoader} from 'react-spinners'
import CarCard from "./CarCard"
const Catalog = () => {
  const [cars , setCars] = useState(null)
  const [loading , setLoading] = useState(false)
  const getCarsData = async ()=>{
    const res = fetch
  }
  useEffect(()=>{
    const getData = async ()=>{
      const res = await fetch('http://192.168.11.113:3001/cars')
      const carsData = await res.json()
      setCars(carsData)
    }
    getData()
  } , [])
  
  return (
    <div id="catalog-container">
      <p  className={loading ? "head":"head loaded"} >check our catalog</p>
        {loading ? 
        <BarLoader color="yellow" width={'100%'} height={'.2rem'} />:""}

        {cars === null ? "":
        cars.map((car)=>{
          return <CarCard key={car.id} car={car}/>
        })}
    </div>
  )
}

export default Catalog
