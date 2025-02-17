import { TbManualGearbox, TbAutomaticGearbox , TbAirConditioning, TbBluetooth, TbBluetoothX, TbBluetoothConnected, TbArrowRight, TbBookmark  } from 'react-icons/tb'
import { BsFuelPump, BsFuelPumpDiesel } from 'react-icons/bs'
import { GiBottomRight3dArrow, GiCarSeat, GiElectric } from 'react-icons/gi'
import { MdGpsFixed } from 'react-icons/md'
import { useState } from 'react'
import AddFavorite from './AddFavorite'
import CardImg from './CardImg'
const CarCard = ({ car }) => {
  const { car_image_link, make_and_model, year, body_type, fuel_type, transmission, seats, gps, ac, bluetooth, price_day, id } = car;

  return (
      <div id="card-container">
        <CardImg imgLink={car_image_link}/>
        <div className="title">
          <p className="name">
            {make_and_model}
            <span className="year">{year ? `-${year}` : ""}</span>
          </p>

          <p className="category">{body_type} <TbArrowRight className='icon'/></p>
        </div>
        <div className="details-container">
          <p>
            {fuel_type.toLowerCase() ==='petrol'
            && <BsFuelPump className="icon" /> }
            {fuel_type.toLowerCase() ==='diesel'
            && <BsFuelPumpDiesel className='icon'/> }
            {fuel_type.toLowerCase() ==='electric'
            && <GiElectric className='icon'/> }
            {fuel_type}
            
          </p>
          <div className='devider'></div>
          <p>
            {transmission.toLowerCase() === 'automatic' ?
              <TbManualGearbox className="icon" style={{marginBottom:'-2px'}}/>:
              <TbAutomaticGearbox className="icon" style={{marginBottom:'-2px'}}/>}
            {transmission}
          </p>
          <div className='devider'></div>
          <p>
            <GiCarSeat className="icon"/>{seats + ' '} 
            seats
          </p>
          {gps?
          <>
          <div className='devider'></div>
          <p><MdGpsFixed className="icon" style={{marginBottom:'-2px'}}/>GPS</p>
          </>:""
          }
          {ac?
          <>
          <div className='devider'></div> 
          <p><TbAirConditioning className="icon" style={{marginBottom:'-2px'}}/>AC</p>
          </> :""}
          {bluetooth?<>
          <div className='devider'></div> 
          <p><TbBluetoothConnected className="icon" style={{marginBottom:'-2px',scale:"1.2"}}/>bluetooth</p>
          </>:""}
        </div>
        <div className='actions'>
            <p className='price'>
              {price_day}
              <span translate='no' className='currency'>MAD</span>
              <span className='period'>/day</span>
            </p>
            <AddFavorite carId={id}/>
            <button className='reserve-btn'>
              <TbBookmark className='icon'/>
              reserve</button>
          </div>
      </div>
  )
}

export default CarCard
