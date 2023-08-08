import React from 'react';

const Features = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-orange-100' >
               <h1 className='font-extrabold  text-lg mb-10 text-black'>Features of Linkspectrum:</h1>
            <div className='w-full max-w-xl p-10 rounded-lg shadow-xl bg-white'>
               
                <ul className='border p-4'>
                    <li className=' font-bold hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer mb-2 p-3 text-gray-700'>Centralized profile Link</li>
                    <li className= ' font-bold hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer mb-2 p-3 text-gray-700'>Multiple Links in One</li>
                    <li className=' font-bold hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer mb-2 p-3 text-gray-700'>Customization</li>
                    <li className=' font-bold hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer mb-2 p-3 text-gray-700'>Mobile Responsive</li>
                    <li className=' font-bold hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer mb-2 p-3 text-gray-700'>Responsive Navbar</li>
                    <li className=' font-bold hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer mb-2 p-3 text-gray-700'>Link Management</li>
                    <li className=' font-bold hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer mb-2 p-3 text-gray-700'>Notification toast</li>
                </ul>
            </div>
        </div>
    );
};

export default Features;
