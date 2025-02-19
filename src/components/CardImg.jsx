import { useState } from "react"
import { ImgLoadError } from "./Errors"

const CardImg = ({imgLink}) => {
    const [isloaded , setLoaded] = useState(false)
    const [isLoadError , setLoadError] = useState(false)

  return (
    <>
        <img className="car-img" loading='lazy' src={imgLink}
        onLoad={()=>{
            setLoaded(true)
            setLoadError(false)}
        }
        onError={()=>{
            setLoaded(false)
            setLoadError(true)}}
        />
        {isLoadError && <ImgLoadError/>}
    </>
  )
}

export default CardImg
