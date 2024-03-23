import React, { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import { EthersContext } from '../Context/EthersContext';
import { BlockFunctions } from '../Utils/BlockFunctions';
import Loader from '../Components/Loader';
import { stringToBigInt } from "../Utils/convertions";
import InputRow from "../Components/InputRow";

function ManagePage() {
    const { id } = useParams();
    const { getIPDetails, putforSell, changeBuyingPrice, putforLend, changeLendingPrice, withdrwLend, withdrwBuy } = useContext(EthersContext)
    const [Data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const intiator = async () => {
        setisLoading(true)
        const ip = await getIPDetails(id);
        const data = await BlockFunctions.getIPData(ip)
        console.log({ data });
        setData(data)
        setisLoading(false)
    }
    useEffect(() => {
        intiator()
    }, [])
    const voidFxn = (input)=> input
    const managers = [
        { name: "putforSell", fxn: putforSell, params: [{ name: "id", convertor: stringToBigInt }, { name: "price", convertor: stringToBigInt }],setisLoading },
        { name: "changeBuyingPrice", fxn: changeBuyingPrice, params: [{ name: "id", convertor: stringToBigInt }, { name: "price", convertor: stringToBigInt }], setisLoading },
        { name: "putforLend", fxn: putforLend, params: [{ name: "id", convertor: stringToBigInt }, { name: "price", convertor: stringToBigInt }], setisLoading },
        { name: "changeLendingPrice", fxn: changeLendingPrice, params: [{ name: "id", convertor: stringToBigInt }, { name: "price", convertor: stringToBigInt }], setisLoading },
        { name: "withdrwLend", fxn: withdrwLend, params: [{ name: "id", convertor: stringToBigInt }], setisLoading },
        { name: "withdrwBuy", fxn: withdrwBuy, params: [{ name: "id", convertor: stringToBigInt }], setisLoading },
    ]
    return isLoading ? <Loader /> :
        (
            <div className='gradient-bg-welcome'>
                <h1 className='text-center text-white text-5xl py-5'>{Data && Data.name}</h1>
                <div className='flex w-full justify-center'>
                {
                    managers.map(manager=>(<InputRow managers/>))
                }
                </div>
            </div>
        )
}

export default ManagePage