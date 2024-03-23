import React from 'react'
import { shortenAddress, shortenDesc } from '../Utils/convertions'
import Button from 'react-bootstrap/Button';

function LendMarket() {
  const data = [
    {
      cid: "1233",
      name: "test name",
      description: "helloo this is my name , iam taslim muammed moosa i am a student , , i love to code and play games, I will",
      Creator: "IPFY nam",
      CurrentOwner: "0xd0cc32348E98f148E769f034A9C79b1C5a0e2A78",
      Price: "0.01"
    },
    {
      cid: "1233",
      name: "test name",
      description: "helloo this is my name , iam taslim muammed moosa i am a student , , i love to code and play games, I will",
      Creator: "IPFY nam",
      CurrentOwner: "0xd0cc32348E98f148E769f034A9C79b1C5a0e2A78",
      Price: "0.01"
    },
    {
      cid: "1233",
      name: "test name",
      description: "helloo this is my name , iam taslim muammed moosa i am a student , , i love to code and play games, I will",
      Creator: "IPFY nam",
      CurrentOwner: "0xd0cc32348E98f148E769f034A9C79b1C5a0e2A78",
      Price: "0.01"
    },
  ]
  return (
    <div className="gradient-bg-welcome ">
      <h1 className='text-center text-white text-5xl py-5'>Lend IP's</h1>
      <div class="flex w-full justify-center">
        <div>
          {/* heading */}
          <div className='flex  text-xl bg-yellow-100 bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg mr-5 mb-3 text-white px-4  text-center'>
            <div className="w-40 py-4">CID</div>
            <div className="w-40 py-4">Name</div>
            <div className="w-80 py-4">Description</div>
            <div className="w-40 py-4">Creator</div>
            <div className="w-64 py-4">Current Owner</div>
            <div className="w-40 py-4">Price[Matic]</div>
            <div className="w-40 py-4">View</div>
          </div>
          {/* items */}
          {data.map((item, index) => {
            return (
              <div className='flex  text-l bg-yellow-100 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg py-1 mr-5 mb-3 text-white px-4 text-center'>
                <div className="w-40 py-2">{item.cid}</div>
                <div className="w-40 py-2">{item.name}</div>
                <div className="w-80 py-2">{shortenDesc(item.description)}</div>
                <div className="w-40 py-2">{item.Creator}</div>
                <div className="w-64 py-2">{shortenAddress(item.CurrentOwner)}</div>
                <div className="w-40 py-2">{item.Price} M</div>
                <div className="w-40 "><Button variant="outline-warning">View</Button></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LendMarket