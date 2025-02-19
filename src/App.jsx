import "./css/Global.css"
import "./css/desktop.css"
import "./css/laptop.css"
import "./css/mobile.css"
import Background from "./components/Background"
import Nav from "./components/Nav"
import React from "react"
import SearchBar from "./components/SearchBar"
import Header from "./components/Header"
import Catalog from "./components/Catalog"
import { ToastContainer } from 'react-toastify'
import Menu from "./components/Menu"

const App = () => {
  return (
    <>
      <Background />
      <Nav /> 
      <Menu />
      <Header />
      <ToastContainer className={"toast"} newestOnTop={true} />
      <SearchBar />
      <Catalog />
    </>
  )
}

export default App
