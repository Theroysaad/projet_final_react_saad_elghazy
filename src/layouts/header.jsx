'use client';

import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import logo from '../assets/images/logo.png'
import userIcon from '../assets/images/icon-header-01.png'
import panierIcon from '../assets/images/icon-header-02.png'
import { Link, Navigate, useNavigate } from 'react-router-dom';

export const Header = () => {

    const navigate = useNavigate()

    return (
        <>
            <Navbar fluid rounded className='py-5 ' >
                <Navbar.Brand href="https://flowbite-react.com" className='ps-7 '>
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="  w-[8vw] flex justify-between md:order-2 pe-7 ">
                    <div className=''>
                        <img className='w-8' src={userIcon} alt="" />
                    </div>
                    <div className='ps-4 border-l-2'>
                        
                        <Link to={`/cart`}><img className='w-6 ' src={panierIcon} alt="" /></Link>
                    </div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                    <Navbar.Link  active>
                        <Link to={`/`}>Home</Link>
                    </Navbar.Link>
                    <Navbar.Link ><Link to={`/shop`}>Shop</Link></Navbar.Link>
                    <Navbar.Link ><Link to={`/about`}>About</Link></Navbar.Link>
                    <Navbar.Link ><Link to={`/contact`}>Contact</Link></Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

