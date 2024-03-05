import React, { useState } from 'react';
import SubHeader from './SubHeader';
import ProductTable from './ProductTable';


const Body = () => {
  

  return (
   
    <>
      <div className='h-screen text-xs sm:text-sm rounded-md'>
       
       <SubHeader/>

        <ProductTable/>
         
        

      </div>
    </>
  );
}

export default Body;
