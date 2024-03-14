import { MediaRenderer } from '@thirdweb-dev/react';
import React from 'react'
import { useParams } from "react-router-dom";

function View() {
  const { id } = useParams();
  const data = {
    name: "Taslim Muhammed Moosa",
    description: "This is a test project for thirdweb, this is a good project, this talks about the ip's this has a lot of feutues",
    date: "25 dec 2025",
    currentOwner: "0xd0cc32348E98f148E769f034A9C79b1C5a0e2A78",
    owningHistory: [
      {
        owner: "0xd0cc32348E98f148E769f034A9C79b1C5a0e2A78",
        timeStamp: "10 Dec 2021"
      },
      {
        owner: "0xd0cc32348E98f148E769f034A9C79b1C5a0e2A78",
        timeStamp: "10 Dec 2021"
      }
    ]
  }
  const labelFont = "text-md text-amber-200"
  const itemFont = "inline-block text-sm"
  const glassTile = "bg-yellow-100 bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-lg text-white text-center py-5 "
  const historyFont = {
    date: "",
    owner: "text-xxs"
  }
  return (
    <div className='gradient-bg-welcome'>
      <h1 className='text-center text-white text-5xl py-5'>Test Project</h1>
      {/* Details part */}
      <div className='flex w-full justify-center'>
        <div>
          {/* first layer */}
          <div className='flex'>
            <div className={`${glassTile} w-64  mx-3`}>
              <div className={labelFont}>Creator</div>
              <div className={itemFont}>Taslim Muhammed Moosa</div>
            </div>
            <div className={`${glassTile} w-96  mx-3 px-4`}>
              <div className={labelFont}>Current Owner </div>
              <div className={itemFont}>{data.currentOwner}</div>
            </div>
            <div className={`${glassTile} w-64  mx-3`}>
              <div className={labelFont}>Created on</div>
              <div className={itemFont}>{data.date}</div>
            </div>
          </div>
          {/*  second layer */}
          <div className='flex my-10'>
            <div className={`${glassTile} w-64  mx-3`}>
              <div className={labelFont}>Owning History</div>
              {
                data.owningHistory.map((history, index) => {
                  if (index == 0) {
                    return (
                      <div>
                        <div className={historyFont.owner}>{history.owner}</div>
                        <div className={historyFont.date}>{history.date}</div>
                      </div>
                    )
                  }else{
                    
                  }
                })
              }

            </div>
            <div className={`${glassTile} w-96  mx-3 px-4`}>
              <div className={labelFont}>Description </div>
              <div className={itemFont}>{data.description} This is a test project for thirdweb, this is a good project, this talks about the ip's this has a lot of feutues</div>
            </div>
            <div className={`${glassTile} w-64  mx-3`}>
              <div className={labelFont}>Lending History</div>
              <div className={itemFont}>{data.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
{/* {id}
      <MediaRenderer src="ipfs://QmcqBHFQodYBACkkof6W6a3X9P6Cp9e7ruC1pMX5RE2YSK/0" /> */}