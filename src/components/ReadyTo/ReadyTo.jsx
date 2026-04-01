import React from 'react';

const ReadyTo = () => {
    return (
        <div>
            <div className='text-center bg-linear-to-r from-[#4F39F6] to-[hsl(274,96%,53%)] py-20 space-y-5'>
                <h1 className='text-2xl text-white font-semibold'>Ready to Transform Your Workflow?</h1>

                <p className='text-white text-[12px]'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>

                <div className=' flex gap-5 justify-center items-center'>
                    <button className='px-4 py-1 text  rounded-2xl bg-white text-[#4F39F6] font-semibold'>Explore Products</button>

                    <button className='text-white bg-violet-600 rounded-2xl border px-4 py-1 '>View Pricing</button>
                </div>
                <p className='text-white text-[12px]'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
            
        </div>
    );
};

export default ReadyTo;