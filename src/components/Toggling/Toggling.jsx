import React from 'react';

const Toggling = () => {
    return (
        <div className='space-y-5 text-center mt-20'>
            <h1 className='text-4xl font-bold  '>Premium Digital Tools</h1>
            <p className='text-[#615f5f]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='space-x-5 flex justify-center '>
                <button className='px-5 py-3 rounded-3xl text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold '>Products</button>
                <button className='font-semibold'>Cart (0) </button>
            </div>
        </div>
    );
};

export default Toggling;