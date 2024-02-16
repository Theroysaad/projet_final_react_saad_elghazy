'use client';
import React, { useContext, useState } from 'react';
import headingImage from '../../../assets/images/heading-pages-02.jpg'
import { Label, Radio, Select } from 'flowbite-react';
import item3 from '../../../assets/images/item-03.jpg'
import { MyContext } from '../../../utils/contextProvider';
import './firstSectionShop.scss'
import { Navigate, useNavigate } from 'react-router-dom';

export const FirstSecrionShop = () => {

    const navigate = useNavigate()

    const [products, setProducts] = useContext(MyContext)
    const [filteredProductPrice, setFiteredProduct] = useState([...products])

    const filteredByPrice1 = products.filter((element) => element.price >= 20 && element.price <= 40)
    const filteredByPrice2 = products.filter((element) => element.price >= 40 && element.price <= 60)

    const menProducts = products.filter((element) => element.categorie.toLowerCase() === 'men');
    const womenProducts = products.filter((element) => element.categorie.toLowerCase() === 'women');
    const accessoireProducts = products.filter((element) => element.categorie === 'accessoire');

    const menMap = (e) => {
        setFiteredProduct(menProducts)
    }
    const womenMap = (e) => {
        setFiteredProduct(womenProducts)
    }
    const accessoireMap = (e) => {
        setFiteredProduct(accessoireProducts)
    }
    const allMap = (e) => {
        setFiteredProduct(products)
    }
    const price1Map = (e) => {
        setFiteredProduct(filteredByPrice1)
    }
    const price2Map = (e) => {
        setFiteredProduct(filteredByPrice2)
    }

    return (
        <>
            <section className='container '>

                <div>
                    <div className='headingContact h-[300px] flex justify-center items-center' style={{ backgroundImage: `url(${headingImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >
                        <h1 className='font-bold text-5xl text-white'>PRODUCTS</h1>
                    </div>
                </div>

                <div className='flex max-[430px]:flex-col max-[430px]:justify-around p-10 lg:px-52'>
                    <div className=' flex flex-col gap-16 mt-14 '>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <h1 className='text-2xl font-bold'>Categories</h1>
                            </div>
                            <div className=''>
                                <h5 className='mb-2' onClick={allMap}>All</h5>
                                <h5 className='mb-2' onClick={menMap}>Men</h5>
                                <h5 className='mb-2' onClick={womenMap}>Women</h5>
                                <h5 className='mb-2' onClick={accessoireMap}>Accesories</h5>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <h1 className='text-2xl font-bold'>Price</h1>
                            </div>
                            <div>
                                <fieldset className="flex max-w-md flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <Radio onClick={price1Map} id="united-state" name="countries" value="USA" />
                                        <Label htmlFor="united-state">0 - 40</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio onClick={price2Map} id="germany" name="countries" value="Germany" />
                                        <Label htmlFor="germany">40 - 60</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio onClick={allMap} id="germany" name="countries" value="Germany" />
                                        <Label htmlFor="germany">All</Label>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div>
                            <input className='rounded-md' type="search" name="" id="" placeholder='Search ' />
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <div className='flex justify-between gap-10 mt-5 ps-10 pe-10'>
                            <div className="max-w-md outline-none">
                                <select className="stretched-select">
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div>
                                <p>Number of products is <span className='text-red-500'>{filteredProductPrice.length}</span></p>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-7 justify-center items-center p-7'>

                            {
                                filteredProductPrice.map((element, index) =>
                                    <div onClick={() => navigate(`/product/${element.title}`)} key={index} className='lg:w-[30%] '>
                                        <div className=' myImg'>
                                            <img className='' src={element.image} alt="" />
                                            <button className='myBtn'>ADD TO CART</button>
                                        </div>
                                        <h1 className='text-lg'>{element.title}</h1>
                                        <h1 className='text-md'>{element.price}$</h1>
                                    </div>
                                )
                            }

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

