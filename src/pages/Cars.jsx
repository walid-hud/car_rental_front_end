import { useParams } from "react-router-dom"

const Cars = () => {
    if(isNaN(useParams().id)){
        window.location.href = "/notFound";
        return
    }
  return (
    <>
      <h1>{useParams().id}</h1>
    </>
  )
}

export default Cars
