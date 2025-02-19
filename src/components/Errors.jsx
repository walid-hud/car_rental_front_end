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