import React, { useState } from 'react';

const Popup = ({ trigger, setTrigger, handleSubmit }) => {
    const [months, setMonths] = useState('');

    const handleClose = () => {
        setMonths(''); // Reset input value when closing the popup
        setTrigger(false); // Close the popup when the trigger is set to false
    };

    return trigger ? (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={handleClose}>
                    Close
                </button>
                <h2 className="text-xl font-bold mb-4">Enter Number of Months:</h2>
                <input
                    type="number"
                    className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    placeholder="Enter number of months"
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full mb-2"
                    onClick={() => handleSubmit(months)}
                >
                    Buy
                </button>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded w-full"
                    onClick={handleClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    ) : (
        ''
    );
};

export default Popup;
