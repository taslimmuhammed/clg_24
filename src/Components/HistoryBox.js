import React from 'react'
import '../Styles/HistoryBox.css'
function HistoryBox({ wallet, from, to }) {
    return (
        <div className="card">
            <div className="info">
                <h3 className="title"> 0xd0cc32348E98f148E769f034A9C79b1C5a0e2A78</h3>
                <div className='flex  text-center ml-12 mt-2'>
                    <div className='mr-7 '>From:</div>
                    <div className='font-medium'>2003/ 02/ 23</div>
                </div>
                <div className='flex  text-center ml-12 mt-2'>
                    <div className='mr-12 '>To:</div>
                    <div className='font-medium'>2003/ 02/ 23</div>
                </div>
            </div>
        </div>
    )
}

export default HistoryBox