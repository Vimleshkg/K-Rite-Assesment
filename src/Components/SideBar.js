import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CampaignIcon from '@mui/icons-material/Campaign';
import CodeIcon from '@mui/icons-material/Code';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NoteIcon from '@mui/icons-material/Note';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HelpIcon from '@mui/icons-material/Help';

const SideBar = () => {
  // Sidebar item data
  const sideBarItem1 = {
    "Design Team": <DesignServicesIcon />,
    "Marketing Team": <CampaignIcon />,
    "Development Team": <CodeIcon />
  };

  // State for managing expanded sub-items
  const [sideBarItems2, setSideBarItem2] = useState({
    "Products": false,
    "Sales": false,
    "Design": false,
    "Office": false,
    "Legal": false
  });

  // Sub-items for each main item
  const SubItems = ["Roadmap", "Feedback", "Performance", "Team", "Analytics"];

  // Sidebar item data
  const sideBarItem3 = {"Invite teammates":<GroupAddIcon/>, "Help and First Steps":<HelpIcon/>};

  // Function to toggle sub-items
  function handleClick(d) {
    setSideBarItem2(prev => ({ ...prev, [d]: !sideBarItems2[d] }));
  }

  return (
    <div className='h-screen text-xs sm:text-sm font-medium'>
      <div className='border m-2 shadow-md rounded-md'>
        {/* Logo and avatar */}
        <div className='my-4 mx-2 sm:m-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <img className='w-8 h-8 sm:w-10 sm:h-10 rounded-md mr-2' src="https://t3i.io/logo.png" alt="Logo" />
            <div>
              <h1>INC</h1>
              <h2 className='hidden md:block'>InnovateHub</h2>
            </div>
          </div>
          <Avatar style={{ width: '30px', height: '30px' }} className='shadow-md' src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRjsm06sh25gqAP132l58ZPYczhgVUKlEpSGlGuqMf2_wv9_gDPALusfdwmTrpB8zUEW7-_BtIQt4DvoNo" alt="Avatar" />
        </div>

        {/* First set of sidebar items */}
        <div className='m-2'>
          <ul>
            {Object.keys(sideBarItem1).map((d, i) => (
              <li key={i} className='p-2 hover:bg-slate-200 cursor-pointer border shadow-md rounded-lg'>
                {sideBarItem1[d]} {d}
              </li>
            ))}
          </ul>
          <h1 className='p-2 border cursor-pointer shadow-md text-gray-500 rounded-lg'><AddBoxIcon /> Create a team</h1>
        </div>

        {/* Second set of sidebar items with sub-items */}
        <div className='m-3'>
          <div className='p-2 text-gray-500'><h1>Folders</h1></div>
          <ul>
            {Object.keys(sideBarItems2).map((d, i) => (
              <li key={i} className='p-2 cursor-pointer border shadow-md rounded-md'>
                <h1 className={(sideBarItems2[d] ? 'bg-slate-300' : "bg-white") + " p-1 px-2 rounded-md"} onClick={() => handleClick(d)}>
                  <NoteIcon className='text-gray-500 shadow-nd' /> {d}
                </h1>
                {sideBarItems2[d] === true && (
                  <ul className='ml-4 shadow-md'>
                    {SubItems.map((d, i) => <li key={i} className='border-l-2 hover:shadow-md rounded-md pl-2 p-1'>{d}</li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
          
        <div className='m-3 mt-24'>
        <ul>
            {Object.keys(sideBarItem3).map((d, i) => (
              <li key={i} className='p-2 hover:bg-slate-200 cursor-pointer border shadow-md rounded-lg'>
                {sideBarItem3[d]} {d}
              </li>
            ))}
            <li  className='p-2 flex hover:bg-slate-200 cursor-pointer border shadow-md rounded-lg'>
                 <h1 className='bg-slate-100 p-1 rounded-md'>7 days left on trial</h1> <button className='p-1 bg-black text-white rounded-lg'>Add billing</button>
              </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default SideBar;
