import { TbManualGearbox, TbAutomaticGearbox , TbAirConditioning, TbBluetooth, TbBluetoothX, TbBluetoothConnected, TbArrowRight, TbBookmark, TbUserHeart, TbHeart  } from 'react-icons/tb'
import { BsFuelPump, BsFuelPumpDiesel } from 'react-icons/bs'
import { GiBottomRight3dArrow, GiCarSeat, GiElectric } from 'react-icons/gi'
import { MdGpsFixed } from 'react-icons/md'
import  {addToFavorite , isFavorite , removeFromFavorite} from "./functions/index"
import { useState } from 'react'
const CarCard = ({ car }) => {
  const [isFav , setFavorite] = useState(()=>isFavorite(car.id))
  return (
      <div id="card-container">

        <img className="car-img" loading='lazy' src={car.car_image_link} alt={car.make_and_model} />
        <div className="title">
          <p className="name">
            {car.make_and_model}
            <span className="year">{car.year ? `-${car.year}` : ""}</span>
          </p>

          <p className="category">{car.body_type} <TbArrowRight className='icon'/></p>
        </div>
        <div className="details-container">
          <p>
            {car.fuel_type.toLowerCase() ==='petrol'
            && <BsFuelPump className="icon" /> }
            {car.fuel_type.toLowerCase() ==='diesel'
            && <BsFuelPumpDiesel className='icon'/> }
            {car.fuel_type.toLowerCase() ==='electric'
            && <GiElectric className='icon'/> }
            {car.fuel_type}
            
          </p>
          <div className='devider'></div>
          <p>
            {car.transmission.toLowerCase() === 'automatic' ?
              <TbManualGearbox className="icon" style={{marginBottom:'-2px'}}/>:
              <TbAutomaticGearbox className="icon" style={{marginBottom:'-2px'}}/>}
            {car.transmission}
          </p>
          <div className='devider'></div>
          <p>
            <GiCarSeat className="icon"/>{car.seats} 
            seats
          </p>
          {car.gps?
          <>
          <div className='devider'></div>
          <p><MdGpsFixed className="icon" style={{marginBottom:'-2px'}}/>GPS</p>
          </>:""
          }
          {car.ac?
          <>
          <div className='devider'></div> 
          <p><TbAirConditioning className="icon" style={{marginBottom:'-2px'}}/>AC</p>
          </> :""
          }
          {car.bluetooth?<>
          <div className='devider'></div> 
          <p><TbBluetoothConnected className="icon" style={{marginBottom:'-2px',scale:"1.2"}}/>bluetooth</p>
          </>:""
          }
          

          

        </div>
        <div className='actions'>
            <p className='price'>
              {car.price_day}
              <span translate='no' className='currency'>MAD</span>
              <span className='period'>/day</span>
            </p>
            <TbHeart className={isFav ? "save-icon saved" :'save-icon'}
            
            onClick={(e)=>{
              if(isFav){
                removeFromFavorite(car.id , e.target)
                setFavorite(!isFav)
              }else{
                addToFavorite(car.id , e.target)
                setFavorite(!isFav)

              }
            }}
            />
            <button className='reserve-btn'>
              <TbBookmark className='icon'/>
              reserve</button>
          </div>
      </div>
  )
}

export default CarCard
