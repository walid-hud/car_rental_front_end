import { Outlet } from "react-router-dom";
import Background from "./Background";
import Nav from "./Nav";
import Menu from "./Menu";
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <>
    <Background />
    <Nav/>
    <Menu/>
    <ToastContainer className={"toast"} newestOnTop={true} />
    <Outlet/>
      
    </>
  )
}

export default Layout
