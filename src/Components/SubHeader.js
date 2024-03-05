import React, { useContext, useState } from 'react';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TuneIcon from '@mui/icons-material/Tune';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { myContext } from '../MainPage';

const SubHeader = () => {
  // Context for accessing Products data and setter
  const { Products, setProducts } = useContext(myContext);

  // State to manage subheader data
  const [headData, setHeadData] = useState({
    "All brands": { data: ["brand1", "brand2", "brand3"], isClicked: false, logo: <WidgetsIcon /> },
    "Desk": { data: ["desk1", "desk2", "desk3"], isClicked: false, logo: "" },
    "Tags": { data: ["tag1", "tag2", "tag3"], isClicked: false, logo: "" }
  });

  // Function to handle click on each subheader item
  function handleClick(item) {
    setHeadData(prev => ({
      ...prev,
      [item]: {
        ...prev[item],
        isClicked: !prev[item].isClicked
      }
    }));
  }

  // Function to handle sorting of products
  function handleSorting() {
    const sortedProducts = [...Products].sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sortedProducts);
  }

  return (
    <div className='border overflow-x-scroll no-scrollbar sm:overflow-visible rounded-md text-xs sm:text-sm font-medium p-1 flex justify-between'>
      {/* Left section of subheader */}
      <div className='flex items-center '>
        {Object.keys(headData).map((item, ind) => (
          <div className='m-1 cursor-pointer sm:m-2 sm:mx-4 relative hover:bg-gray-100 ' key={ind}>
            <h1 className={headData[item].isClicked ? 'bg-red-400 rounded-md p-2 shadow-md ' : ' rounded-md p-2 shadow-md '} onClick={() => handleClick(item)}>
              {headData[item].logo} {item} <ArrowDropDownIcon />
            </h1>
            {headData[item].isClicked && (
              <div className='bg-white w-full shadow-md p-2 absolute z-10'>
                {headData[item].data.map((d, i) => <h1 className='hover:bg-slate-200 rounded-md p-1' key={i}>{d}</h1>)}
              </div>
            )}
          </div>
        ))}
        <h1 onClick={handleSorting} className='p-2 m-1 cursor-pointer sm:m-2 sm:mx-4 rounded-md hover:text-black hover:bg-gray-100 shadow-md text-gray-500 '> <SwapVertIcon /> Sort</h1>
        <h1 className='p-2 m-1 sm:m-2 sm:mx-4 rounded-md shadow-md text-gray-500 cursor-pointer hover:text-black hover:bg-gray-100   '> <TuneIcon /> Filter</h1>
      </div>
      {/* Right section of subheader */}
      <div className='flex items-center'>
        <h1 className='p-2 m-1 sm:m-2 sm:mx-4 hover:bg-gray-100 rounded-md shadow-md flex cursor-pointer items-center '> <AddBoxIcon /> Meeting</h1>
        <h1 className='p-2 m-1 sm:m-2 sm:mx-4 hover:bg-gray-100  rounded-md shadow-md flex cursor-pointer items-center '> <ExitToAppIcon /> Import/Export</h1>
      </div>
    </div>
  );
};

export default SubHeader;
