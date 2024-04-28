import React from 'react'
import { appleImg, searchImg, bagImg } from '../utils/index'
import { navLists } from '../constants/index'

const Navbar = () => {
    return (
        <>
            <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center '>
                <nav className='flex justify-between items-center w-full screen-max-width'>
                    <img src={appleImg} alt="Apple" height={18} width={14} />

                    <div className='flex flex-1 justify-center max-sm:hidden'>
                        {
                            navLists.map((nav) => (
                                <div className='px-5 text-[12px] cursor-pointer text-gray hover:text-white transition-all' key={nav}>
                                    {nav}
                                </div>
                            ))
                        }
                    </div>

                    <div className='flex items-baseline max-sm:justify-end max-sm:flex-1 gap-x-7'>
                        <img src={searchImg} alt="Serach" height={18} width={18} />
                        <img src={bagImg} alt="Bag" height={18} width={18} />
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Navbar