import {TbHeart } from 'react-icons/tb'
import { addToFavorite, isFavorite, removeFromFavorite } from "./functions/index"
import { useState } from 'react'
const AddFavorite = ({carId}) => {
    const [isFav, setFavorite] = useState(() => isFavorite(carId))
    return (
        <TbHeart className={isFav ? "save-icon saved" : 'save-icon'}
            onClick={(e) => {
                if (isFav) {
                    removeFromFavorite(carId, e.target)
                    setFavorite(!isFav)
                } else {
                    addToFavorite(carId, e.target)
                    setFavorite(!isFav)
                }
            }}
        />
    )
}

export default AddFavorite
