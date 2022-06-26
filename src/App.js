import React,{useState,useEffect} from "react";
import {Routes,Route} from "react-router-dom";
import axios from "axios";
import { AddProduct } from "./components/AddProduct";
import { AllProducts } from "./components/AllProducts";
import { EditProduct } from "./components/EditProduct";
import { Header } from "./components/Header";
// import { getDefaultNormalizer } from "@testing-library/react";
export const prodContext = React.createContext("");

 function App(){

  useEffect(()=>{
    getData()
  },[])

  async function getData() {
    try {
      let respon = await axios.get('https://614eacb5b4f6d30017b4833b.mockapi.io/products')
    setData(respon.data)
    } catch (error) {
      alert('someting went worng:'+error)
    }
  }

  let [data,setData]=useState([])


  return(
    <div className="container">
      
        <prodContext.Provider value={{data,setData}}>
      <Header/>
      <Routes>
        <Route path='/all' element={<AllProducts/>}/>
        <Route path='/' element={<AllProducts/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/edit-product/:id' element={<EditProduct/>}/>
      </Routes>
      </prodContext.Provider>   
      
    </div>
  )
}

export default App;