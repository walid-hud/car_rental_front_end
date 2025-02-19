import {TbHeart } from 'react-icons/tb'
import { addToFavorite, isFavorite, removeFromFavorite } from "./functions/index"
import { useState } from 'react'
import { toast } from 'react-toastify'
const AddFavorite = ({carId , carName}) => {
    const [isFav, setFavorite] = useState(() => isFavorite(carId))
    return (
        <TbHeart className={isFav ? "save-icon saved" : 'save-icon'}
            onClick={(e) => {
                if (isFav) {
                    removeFromFavorite(carId, e.target)
                    toast.error(`removed ${carName} from favs`, {
                        position:'top-left',
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        style:{borderRadius:"15px" , fontFamily:"Source Code Pro"}


                        });
                    setFavorite(!isFav)
                } else {
                    addToFavorite(carId, e.target)
                    setFavorite(!isFav)
                    toast.success(`added ${carName} to favs`,
                        {position:'top-left',
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            style:{borderRadius:"15px",fontFamily:"Source Code Pro" , color:"yellow" , fill:"yellow"}
                            }
                    )
                }
            }}
        />
    )
}

export default AddFavorite
