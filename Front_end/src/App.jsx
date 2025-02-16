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

const App = () => {
  return (
    <>
      <Background/> 
      <Nav />
      <Header/>
      <SearchBar/>
      <Catalog/>
    </>
  )
}

export default App
