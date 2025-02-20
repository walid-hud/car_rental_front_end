import { MdHeartBroken } from "react-icons/md";
import { TbError404Off } from "react-icons/tb";

export function ImgLoadError(){
    return(
        <div id="img-error">
            <TbError404Off className="icon"/>
            <p>
            Sorry, we couldn't get the image for this car.
            </p>
        </div>
    )
}

export function Nofavorites(){
    return(
        <div id="no-favorites">
            <MdHeartBroken className="icon"/>
            <p>
            no favorites yet 
            </p>
        </div>
    )
}