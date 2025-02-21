import { Outlet } from "react-router-dom";
import Background from "./Background";
import Nav from "./Nav";
import Menu from "./Menu";
import { ToastContainer } from 'react-toastify'
import {ScrollToTop} from "./functions/index";

const Layout = () => {
  return (
    <>
    <ScrollToTop/>
    <Background />
    <Nav/>
    <Menu/>
    <ToastContainer className={"toast"} newestOnTop={true} />
    <Outlet/>
      
    </>
  )
}

export default Layout
