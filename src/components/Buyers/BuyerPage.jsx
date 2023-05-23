import React from 'react'
import { useState } from 'react';
import Profile from './Profile';
import BuyerSideBar from './BuyerSideBar';
import "./Buyer.css"
import ViewAvail from './ViewAvail';

const BuyerPage = () => {
    const [selectedPage, setSelectedPage] = useState('');

    const renderSelectedPage = () => {
        switch (selectedPage){
            case 'profile':
                return <Profile />;

            case 'viewAvail':
                return <ViewAvail />
            default:
                return <Profile />;
        }
    }
  return (
    <div className='dashboard'>
    {/* <h1 className='h1-buyer'>Buyers Dashboard</h1> */}
        <BuyerSideBar setSelectedPage = {setSelectedPage} />
        <div className="content">
            {renderSelectedPage()}
        </div>
    </div>
  )
}

export default BuyerPage;
