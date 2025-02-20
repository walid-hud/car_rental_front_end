import { useEffect, useState} from "react"
import {BarLoader} from 'react-spinners'
import CarCard from "./CarCard"
import { NavLink } from "react-router-dom"
const Catalog = () => {
  const [limit , setLimit] = useState(3)
  const [cars , setCars] = useState(null)
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
    const getData = async ()=>{
      const res = await fetch(`http://192.168.11.113:3001/cars?_limit=${limit}`)
      const carsData = await res.json()
      setCars(carsData)
    }
    getData()
  } , [limit])
  
  return (
    <>
    <div id="catalog-container">
      <p  className={loading ? "head":"head loaded"} >check our catalog</p>
        {loading ? 
        <BarLoader color="yellow" width={'100%'} height={'.2rem'} />:""}

        {cars === null ? "":
        cars.map((car)=>{
          return <CarCard key={car.id} car={car}/>
        })}
    </div>
    <div id="load-more-container">
        {limit === 3 && <button onClick={()=>setLimit(6)}>more</button>}
        {limit === 6 && <NavLink to={"/cars"} onClick={()=>setLimit(3)}>
                          <button>see all cars</button>
                        </NavLink>}
    </div>
    </>
  )
}

export default Catalog
