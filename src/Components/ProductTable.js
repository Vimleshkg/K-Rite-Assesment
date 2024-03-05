import React, { useContext, useState } from 'react';
import { Avatar } from '@mui/material';
import { myContext } from '../MainPage';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';

const ProductTable = () => {
  // Accessing Products data from context
  const { Products } = useContext(myContext);
  // for containing count of checked products
   const [checkedList, setCheckeList] =useState([])
  function handleChange(key)
  {
     if(checkedList.includes(key))
        {
        const list= checkedList.filter((val)=>val!=key)
        setCheckeList(list);
        }
        else{
          setCheckeList(prev=>[...prev,key]);
        }
  }

  return (
    <div className='w-full border shadow-md mb-1 rounded-md no-scrollbar overflow-x-auto'>
      {/* Table to display products */}
      <table className='w-full border shadow-sm font-medium' cellPadding="10">
        {/* Table header */}
        <thead className='border text-zinc-400'>
          <tr className='border shadow-md'>
            <th className='border'>Brand</th>
            <th className='border'>Description</th>
            <th className='border'>Members</th>
            <th className='border'>Categories</th>
            <th className='border'>Tags</th>
            <th className='border'>Next meeting</th>
            <th className='border'>+</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {Products.map((data, ind) => (
            <tr key={ind} className='border shadow-md'>
              {/* Brand column */}
              <td className='flex items-center mx-1 sm:mx-2'>
                <input onChange={(e)=>{handleChange(ind)}}  className='h-4 w-4 mr-2' type='checkbox' />
                <img className='h-8 w-8 mr-2 rounded-full' src={data.logo} alt={data.name} />
                <h1>{data.name}</h1>
              </td>
              {/* Description column */}
              <td className='border overflow-hidden mx-1'>{data.desc}</td>
              {/* Members column */}
              <td className='flex overflow-hidden mx-1'>
                {new Array(data.members).fill('').map((_, i) => (
                  <Avatar key={i} style={{ width: '30px', height: '30px' }} className='-mr-4' src='' />
                ))}
              </td>
              {/* Categories column */}
              <td className='border overflow-hidden mx-1'>
                {data.category.map((d,i) => <span key={i} className={ data.color + ' mx-1 p-1  rounded-xl'}>{d}</span>)}
              </td>
              {/* Tags column */}
              <td className='border overflow-x-hidden mx-1'>
                {data.tags.map((d,i) => <span key={i} className='p-1 mx-1 bg-slate-200 rounded-xl'>{d}</span>)}
              </td>
              {/* Next meeting and additional columns */}
              <td className=' border'> <span className={ data.color + ' p-1 mx-1  rounded-xl '} > {data.nextMeeting} </span></td>
              <td className='border'></td>
            </tr>
          ))}
          {/* Row for total count and additional calculations */}
          <tr className='border shadow-md'>
            <td>{Products.length} count</td>
            <td>+ Add calculation</td>
            <td>+ Add calculation</td>
            <td>+ Add calculation</td>
            <td>+ Add calculation</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className='flex justify-center items-center sm:text-sm font-medium mt-[90px] '>
          <div className=' rounded-md shadow-md border overflow-x-scroll no-scrollbar p-2 mb-5'>
          <button className='bg-slate-50 m-[2px] sm:m-1 ml-2 p-[4px] sm:p-[6px] border rounded-md'><span className='bg-black px-[5px] p-[2px] mx-1  rounded-md my-2 text-white'> {checkedList.length} </span> Selected</button>
           <button  className='bg-slate-50 m-[2px] sm:m-1 sm:p-1 border rounded-md'> <ArchiveIcon/> Archieve</button>
           <button  className='bg-slate-50 sm:p-1 m-[2px] sm:m-1 border rounded-md text-red-400'> <DeleteIcon /> Delete</button>
           <button  className='bg-slate-50 sm:p-1 m-[2px] sm:m-1  border rounded-md'>More <ArrowDropDownIcon/> </button>
           <button  className='bg-slate-50 sm:p-1  m-[2px] sm:m-1 mr-2  border rounded-md'> <CloseIcon  /> </button>
          </div>
           
         </div>

    </div>
  );
};

export default ProductTable;
