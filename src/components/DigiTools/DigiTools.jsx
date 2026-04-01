import React from 'react';
import instagram from "../../assets/Instagram.png"
import facebook from "../../assets/Facebook.png"
import twitter from "../../assets/Twitter.png"

const DigiTools = () => {
    return (
        <div className='bg-[#101727]'>

            <div className='w-[83%] mx-auto py-20 flex justify-between  gap-10 flex-wrap '>

                <div className='space-y-2 text-white'>
                    <h1 className='text-3xl'>DigiTools</h1>
                    <p className='text-[#8888]'>Premium digital tools for creators,<br /> professionals, and businesses. <br /> Work smarter with our suite of <br />powerful tools.</p>
                </div>

                <div className='text-[#8888]'>
                    <h1 className='text-white'>Product</h1>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Templates</p>
                    <p>Integrations</p>
                </div>

                <div className='text-[#8888]'>
                    <h1 className='text-white'>About</h1>
                    <p>Blog</p>
                    <p>Pricing</p>
                    <p>Careers</p>
                    <p>Press</p>
                </div>

                <div className='text-[#8888]'>
                    <h1 className='text-white'>Resources</h1>
                    <p>Documentation</p>
                    <p>Help Center</p>
                    <p>Community</p>
                    <p>Contact</p>
                </div>

                <div className='space-y-2'>
                    <h1 className='text-white'>Socil Links</h1>
                    <div className='flex justify-center items-center gap-3'>
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </div>

                </div>

            </div>

            <hr className='w-[83%] mx-auto text-[#8888]' />
            
            <div className='w-[83%] mx-auto mt-5 text-[#8888] flex justify-between items-center pb-20 flex-wrap space-y-2'>
                <p>© 2026 Digitools. All rights reserved.</p>
                <div className='flex justify-center items-center gap-5 '>
                    <p>Privacy Policy </p> 
                    <p> Terms of Service </p>
                    <p>Cookies</p> 
                    
                </div>
            </div>
            
        </div>
    );
};

export default DigiTools;