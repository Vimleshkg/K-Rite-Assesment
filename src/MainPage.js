import React, { createContext, useEffect, useState } from 'react'
import SideBar from './Components/SideBar'
import MainBody from './Components/MainBody'
import { productData } from './Components/Constant'

export const myContext = createContext();

const MainPage = () => {
 
  //for passsing this data globally using useContext
  const [Products, setProducts] =useState(productData);
  
  return (
    <myContext.Provider value={{Products,setProducts}}>
    <div className='grid grid-flow-col grid-cols-10 '>
      <aside className=' col-span-3 sm:col-span-2'>
      <SideBar/>
      </aside>
      <main className='col-span-7 sm:col-span-8'>
       <MainBody/>
       </main>
       
    </div>
    </myContext.Provider>
  )
}

export default MainPage