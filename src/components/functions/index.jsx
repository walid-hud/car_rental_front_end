import { TbArrowLeft} from "react-icons/tb"
import { Link } from "react-router-dom"

export function addToFavorite(id , icon){
    let favorite_cars = JSON.parse(localStorage.getItem("favorite_cars")) || []
    if(!favorite_cars.includes(id)){
        favorite_cars.push(id)
        localStorage.setItem("favorite_cars",JSON.stringify(favorite_cars))
    }
    icon.classList.add("saved")
}

export function isFavorite(id){
    let favorite_cars = JSON.parse(localStorage.getItem("favorite_cars")) || []
    if(favorite_cars.includes(id)){
        return true
    }else{
        return false
    }

}
export function removeFromFavorite(id , icon) {
    let favorite_cars = JSON.parse(localStorage.getItem("favorite_cars")) || []
    if(favorite_cars.includes(id)){
        favorite_cars.pop(id)
        localStorage.setItem("favorite_cars", JSON.stringify(favorite_cars))
    }
    icon.classList.remove("saved")
}

export function ReturnButton(){
    return <>
    <Link to="/">
        <button id="return-btn" >
            <TbArrowLeft className="icon"/>
            go back
        </button>
    </Link>
    </>
}