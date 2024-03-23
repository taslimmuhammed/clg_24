import React, { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import { EthersContext } from '../Context/EthersContext';
import { BlockFunctions } from '../Utils/BlockFunctions';
import Loader from '../Components/Loader';
import HistoryBox from "../Components/HistoryBox";

function HistoryPage() {
  const { id } = useParams();
  const { getIPDetails } = useContext(EthersContext)
  const [Data, setData] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const intiator = async () => {
    setisLoading(true)
    const ip = await getIPDetails(id);
    const data = await BlockFunctions.getIPData(ip)
    console.log({data});
    setData(data)
    setisLoading(false)
  }
  useEffect(() => {
    intiator()
  }, [])
  return isLoading ? <Loader /> :
    (
      <div className='gradient-bg-welcome'>
        <h1 className='text-center text-white text-5xl py-5'>{Data && Data.name}</h1>
        <div className='flex w-full justify-evenly'>
          <div>
            <h2 className="text-xl text-white text-center">Owning History</h2>
            <div className='h_main'>
              <div class="timeline">
                <div class="outer">
                  <HistoryBox />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl text-white text-center">Lending History</h2>
            <div className='h_main'>
              <div class="timeline">
                <div class="outer">
                  <HistoryBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HistoryPage