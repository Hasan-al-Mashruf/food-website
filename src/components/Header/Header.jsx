import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/logo.png'
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdPhoneAndroid } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Cart from '../Cart/Cart';

const Header = () => {
    const { showCart, setShowCart, user, logOut, cartCount } = useContext(AuthContext)
    const [showMenu, setShowMenu] = useState(true)

    const menu = <>
        <li className='my-4'><Link className='p-3 text-gray-400' to='/'>Home</Link></li>
        <li className='my-4'><Link className='p-3 text-gray-400' to='/shop'>Shop</Link></li>
        <li className='my-4'><Link className='p-3 text-gray-400'>About</Link></li>
        <li className='my-4'><Link className='p-3 text-gray-400'>Blog</Link></li>
        {
            user?.displayName ? <> <li className='my-4'><Link className='p-3 text-gray-400' to='/signin' onClick={logOut}>Sign Out</Link></li>
                <li className='my-4'><Link className='p-3 text-gray-400' to='/signin'>{user.displayName}</Link></li></> : <> <li className='my-4'><Link className='p-3 text-gray-400' to='/signin'>Sign in</Link></li></>
        }

    </>
    return (
        <div className='relative'>
            <nav className='md:flex justify-between items-center h-12 bg-primary hidden'>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <HiOutlineLocationMarker className='text-secondary mr-1' />
                        <h5 className='mr-2 text-sm'>310 West 14th North Street, NY </h5>
                    </div>
                    <div className='flex items-center'>
                        <MdPhoneAndroid className='text-secondary mr-1' />
                        <h5 className='text-sm'>(+1) 88 700 600</h5>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <FaFacebookF className='text-secondary mx-1' />
                        <FaInstagram className='text-secondary mx-1' />
                        <FaTwitter className='text-secondary mx-1' />
                        <FaGithub className='text-secondary mx-1' />
                        <button className='btn btn-secondary rounded-none ml-2 text-white'>Go to shop</button>
                    </div>
                </div>
            </nav>


            <header>
                <nav className='flex justify-between items-center md:h-[80px] shadow-lg shadow-gray-500/50 px-5'>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <img src={Logo} alt="" />
                            <div onClick={() => setShowMenu(!showMenu)} className='md:hidden cursor-pointer'>
                                <FaBars />
                            </div>
                        </div>
                        <div>
                            <ul className='md:flex items-center md:relative absolute top-0 left-0 md:w-auto w-3/6 md:bg-transparent bg-white cursor-pointer' hidden={showMenu}>
                                <li className='md:hidden block'><img src={Logo} alt="" className='mx-auto' /></li>
                                <li onClick={() => setShowMenu(!showMenu)} className='md:hidden absolute top-[2%] -right-2 text-xl'> <AiOutlineCloseCircle /></li>
                                {menu}
                            </ul>
                        </div>
                    </div>
                    <div className='flex-grow text-right md:relative '>
                        <div className='flex items-center justify-end'>
                            <FaSearch className='text-secondary' />
                            <div className='w-14 h-14 bg-primary rounded-sm flex items-center justify-center md:ml-14 ml-4 relative'>
                                <FaShoppingCart className='text-secondary cursor-pointer' onClick={() => setShowCart(!showCart)} />
                                <div>
                                    <h2 className='text-xl ml-1'>{cartCount}</h2>
                                </div>
                            </div>
                        </div>
                        {<Cart css={showCart ? 'absolute right-0' : 'absolute -right-[200%]'} width={'min-w-[200px] w-3/5'} bg={'bg-primary'} />}
                    </div>
                </nav>
            </header>

        </div >
    );
};

export default Header;