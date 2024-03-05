import React, { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import { myContext } from '../MainPage';
import { productData } from './Constant';

const Header = () => {
  // Accessing Products and setProducts from context
  const { Products, setProducts } = useContext(myContext);

  // Function to handle search input change
  function handleChange(e) {
    const inputVal = e.target.value.toLowerCase();

    // Filter products based on input value
    if (inputVal.length > 1) {
      const filterProduct = Products.filter((product) => {
        return product.name.toLowerCase().includes(inputVal);
      });
      setProducts(filterProduct);
    } else {
      // Reset products to original data if input length is less than 3 characters
      setProducts(productData);
    }
  }

  return (
    <>
      {/* Header component */}
      <div className='flex justify-between no-scrollbar overflow-x-scroll items-center mt-2 shadow-sm rounded-md border'>
        {/* Title */}
        <div className='m-2 sm:m-3 text-base sm:text-lg font-medium'>
          <h1 className='ml-1 sm:ml-3'>Products</h1>
        </div>
        {/* Icons for search, messages, and settings */}
        <div className='flex m-2 sm:m-3'>
          
          {/* Search input */}
          <div className='p-1 px-1 border flex items-center shadow-md rounded-md mx-1 sm:mx-3'>
            <SearchIcon />
            <input
              onChange={(e) => handleChange(e)}
              className='outline-none w-28 px-1 sm:px-2 sm:w-auto'
              type='text'
              placeholder='Search for..'
            />
          </div>
          {/* Icon for messages */}
          <div className='p-1 border shadow-md rounded-md cursor-pointer mx-1 sm:mx-3'>
            <QuestionAnswerIcon />
          </div>
          {/* Icon for settings */}
          <div className='p-1 border shadow-md cursor-pointer text-sm rounded-md mx-1 sm:mx-3'>
            <SettingsIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
