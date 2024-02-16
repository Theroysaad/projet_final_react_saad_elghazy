import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';

export const FirstSectionProducts = () => {

    const { id } = useParams()

    const [products, setProducts] = useContext(MyContext)
    const selectedItem = products.find(element => element.title == id);

    console.log(selectedItem.image);

    return (
        <>
            <section>
                <div className='flex justify-evenly py-20'>
                    <div className='w-[30%] flex gap-5'>
                        <img className='w-[20%] h-[20%] border-[2px] border-black' src={selectedItem.image} alt="" />
                        <img className=' border-black border-[2px]' src={selectedItem.image} alt="" />
                    </div>
                    <div className='w-[40%] p-7 flex flex-col gap-10'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-3xl font-semibold'>{selectedItem.title}</h1>
                            <span className='text-3xl'> $ {selectedItem.price}</span>
                        </div>

                        <div>
                            <p>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....</p>
                        </div>

                        <div className='flex flex-col gap-10 '>

                            <div className='flex gap-x-5'>
                                <div className='w-14 h-14 border-red-600 border-[2px] bg-red-500' >
                                    <span className='text-3xl flex justify-center text-center mt-2'>S</span>
                                </div>

                                <div className='w-14 h-14 bg-transparent border-red-600 border-[2px]'>
                                    <span className='text-3xl flex justify-center text-center mt-2'>M</span>
                                </div>

                                <div className='w-14 h-14 bg-transparent border-red-600 border-[2px]'>
                                    <span className='text-3xl flex justify-center text-center mt-2'>L</span>
                                </div>

                                <div className='w-14 h-14 bg-transparent border-red-600 border-[2px]'>
                                    <span className='text-3xl flex justify-center text-center mt-2'>XL</span>
                                </div>
                            </div>

                            <div>
                                <div className='flex justify-start gap-5 py-3 '>
                                    <input className='w-[40%] rounded-full ' type="number" name="" id="" />
                                    <button className='w-[30%] py-2 bg-black rounded-full text-white'>ADD TO CART</button>
                                </div>
                                <div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
