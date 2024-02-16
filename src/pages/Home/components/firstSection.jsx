'use client';

import { useContext } from 'react';
import './firstSection.scss'
import { MyContext } from '../../../utils/contextProvider';
import { Header } from '../../../layouts/header';
import { Card, Footer, Tabs } from 'flowbite-react';
import { FooterComponent } from '../../../layouts/footer';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import slide1 from '../../../assets/images/master-slide-01.jpg';
import slide2 from '../../../assets/images/master-slide-02.jpg';
import slide3 from '../../../assets/images/master-slide-04.jpg';

import dresses from '../../../assets/images/banner-02.jpg'
import sunglasses from '../../../assets/images/banner-05.jpg'
import watches from '../../../assets/images/banner-03.jpg'
import footerWear from '../../../assets/images/banner-07.jpg'
import bags from '../../../assets/images/banner-04.jpg'
import accessories from '../../../assets/images/banner-09.jpg'

import banner8 from '../../../assets/images/banner-08.jpg'

import blog1 from '../../../assets/images/blog-01.jpg'
import blog2 from '../../../assets/images/blog-02.jpg'
import blog3 from '../../../assets/images/blog-03.jpg'



export const FirstSection = () => {

    const [products, setProducts] = useContext(MyContext)
    const randomIndex = Math.floor(Math.random() * products.length)

    const newDataBase = products[randomIndex]
    const navigate = useNavigate()

    console.log(newDataBase.title);

    const oldProducts = products.filter((element) => element.categorie2.toLowerCase() === 'old');
    const newProducts = products.filter((element) => element.categorie2.toLowerCase() === 'new');
    const sellProducts = products.filter((element) => element.categorie2.toLowerCase() === 'sell');


    return (
        <>

            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
                <Carousel>
                    <div style={{ backgroundImage: `url(${slide1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className="flex h-full items-center justify-center   dark:text-white">
                        <div className='flex flex-col items-center justify-center lg:gap-10 max-[430px]:gap-5'>
                            <h3 className='text-2xl text-white'> Woman Collection 2018 </h3>
                            <h1 className='text-6xl text-white'> NEW ARRIVALS</h1>
                            <button className='px-12 py-3 bg-white rounded-full'>SHOP NOW</button>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${slide2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <div className='flex flex-col items-center justify-center lg:gap-10 max-[430px]:gap-5'>
                            <h3 className='text-2xl text-white'> Woman Collection 2018 </h3>
                            <h1 className='text-6xl text-white'> NEW ARRIVALS</h1>
                            <button className='px-12 py-3 bg-white rounded-full'>SHOP NOW</button>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${slide3})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <div className='flex flex-col items-center justify-center lg:gap-10 max-[430px]:gap-5'>
                            <h3 className='text-2xl text-white'> Woman Collection 2018 </h3>
                            <h1 className='text-6xl text-white'> NEW ARRIVALS</h1>
                            <button className='px-12 py-3 bg-white rounded-full'>SHOP NOW</button>
                        </div>
                    </div>
                </Carousel>
            </div>

            <section className='sec-2 lg:py-20 lg:px-16 flex items-center justify-center w-[100%]  '>
                <div className=' lg:p-16 flex justify-center items-center w-[100%]'>
                    <div className='flex justify-center items-center max-[430px]:flex-col lg:flex-row lg:gap-5 w-[100%]'>
                        <div className=' flex flex-col gap-5 lg:w-[30%] max-[430px]:p-10 '>
                            <div className=' overflow-hidden'>
                                <img className='hover:scale-110 transition-transform relative' src={dresses} alt="" />
                                <div className='flex justify-center'>
                                    <button className='absolute bottom-0  bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>FOOTERWEAR</button>
                                </div>
                            </div>
                            <div className=' overflow-hidden'>
                                <img className='hover:scale-110 transition-transform' src={sunglasses} alt="" />
                            </div>
                        </div>
                        <div className=' flex flex-col gap-5 lg:w-[30%] max-[430px]:p-10'>
                            <div className=' overflow-hidden'>
                                <img className='hover:scale-110 transition-transform' src={watches} alt="" />
                            </div>
                            <div className=' overflow-hidden'>
                                <img className='hover:scale-110 transition-transform' src={footerWear} alt="" />
                            </div>
                        </div>
                        <div className=' flex flex-col gap-5 lg:w-[30%] max-[430px]:p-10'>
                            <div className=' overflow-hidden'>
                                <img className='hover:scale-110 transition-transform' src={bags} alt="" />
                            </div>
                            <div className=' overflow-hidden'>
                                <img className='hover:scale-110 transition-transform' src={accessories} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=' py-10 text-center w-[100%] flex flex-col justify-center items-center gap-10 '>
                <div>
                    <h1 className='text-5xl'>FEATURED PRODUCTS</h1>
                </div>

                <Tabs aria-label="Pills" style="underline" className=' flex items-center  justify-center'>
                    <Tabs.Item title="WOMEN" >
                        <div className=' flex justify-center items-center'>
                            <div className='flex max-[430px]:flex-col max-[430px]:gap-y-10 lg:flex-wrap  justify-center items-center w-[90%] gap-x-10  '>
                                {
                                    oldProducts.map((element, index) =>
                                        <div key={index} className='lg:w-[25%]'>
                                            <Card
                                                className="max-w-sm "
                                                imgSrc={element.image}
                                            >
                                                <button className='myBtn'></button>

                                                <a href="#">
                                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                        {element.title}
                                                    </h5>
                                                    <h6 className='text-lg'>{element.price} $</h6>
                                                </a>
                                            </Card>
                                        </div>
                                    )

                                }
                            </div>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Tab 2">

                        <div className=' flex justify-center items-center'>
                            <div className='flex :lgflex-wrap max-[430px]:flex-col max-[430px]:gap-y-10 justify-center items-center w-[90%] gap-x-10  '>
                                {
                                    newProducts.map((element, index) =>
                                        <div key={index} className='lg:w-[25%]'>
                                            <Card
                                                className="max-w-sm"
                                                imgSrc={element.image}

                                            >
                                                <a href="#">
                                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                        {element.title}
                                                    </h5>
                                                    <h6 className='text-lg'>{element.price} $</h6>
                                                </a>

                                            </Card>
                                        </div>
                                    )

                                }
                            </div>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Tab 3">
                        <div className=' flex justify-center items-center'>
                            <div className='flex lg:flex-wrap max-[430px]:flex-col max-[430px]:gap-y-10 justify-center items-center w-[90%] gap-x-10  '>
                                {
                                    sellProducts.map((element, index) =>
                                        <div key={index} className='lg:w-[20%]'>
                                            <Card
                                                className="max-w-sm "
                                                imgSrc={element.image}
                                            >
                                                <a href="#">
                                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                        {element.title}
                                                    </h5>
                                                    <h6 className='text-lg'>{element.price} $</h6>
                                                </a>
                                            </Card>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </Tabs.Item>
                </Tabs>
            </section>

            <section className='w-[100%] flex max-[430px]:flex-col max-[430px]:gap-y-5 max-[430px]:p-10 justify-center lg:gap-x-5 py-[4rem]'>
                <div className='lg:w-[35%] h-[50vh] overflow-hidden relative'>

                    <div className='h-[100%] w-[100%] bg-white hover:scale-110 transition-transform ' style={{ backgroundImage: `url(${banner8})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >
                    </div>
                    <h1 className='absolute  right-[25%] text-white bottom-[30%] text-center'>
                        <h3 className='text-2xl font-semibold'>The Beauty</h3>
                        <span className='text-5xl font-bold'>LOOKBOOK</span>
                        <p className=''>VIEW COLLECTION </p>
                    </h1>

                </div>
                <div className='lg:w-[35%] h-[50vh] bg-black overflow-hidden'>
                    <img className='w-[100%] h-[100%] hover:scale-110 transition-transform' src={newDataBase.image} alt="" />
                </div>
            </section>

            <section className='py-10 flex flex-col gap-y-10'>
                <div>
                    <h1 className='text-5xl font-semibold text-center'>OUR BLOG</h1>
                </div>
                <div className='flex max-[430px]:flex-col justify-center items-center gap-7'>
                    <div className='overflow-hidden'>
                        <Card
                            className="max-w-sm hover:scale-110 transition-transform"
                            imgSrc={blog1}
                        >
                            <div className='flex flex-col gap-y-5'>
                                <div>
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Black Friday Guide: Best Sales & Discount Codes
                                    </h5>
                                </div>
                                <div>
                                    <p>by fashe-theme Admin on Dec 28,2017</p>
                                    <br />
                                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='overflow-hidden'>
                        <Card
                            className="max-w-sm hover:scale-110 transition-transform"
                            imgSrc={blog2}
                        >
                            <div className='flex flex-col gap-y-5'>
                                <div>
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        The White Sneakers Nearly Every Fashion Girls Own
                                    </h5>
                                </div>
                                <div>
                                    <p>by fashe-theme Admin on Dec 28,2017</p>
                                    <br />
                                    <p className=''>Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='overflow-hidden'>
                        <Card
                            className="max-w-sm hover:scale-110 transition-transform"
                            imgSrc={blog3}
                        >
                            <div className='flex flex-col gap-y-5'>
                                <div>
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        New York SS 2018 Street Style: By Annina Mislin
                                    </h5>
                                </div>
                                <div>
                                    <p>by fashe-theme Admin on Dec 28,2017</p>
                                    <br />
                                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <section className='py-10'>
                <div>
                    <h1 className='font-semibold text-4xl text-center'>@ FOLLOW US ON INSTAGRAM</h1>
                </div>
                <div className='flex flex-wrap justify-around items-center py-20 px-10 text-center'>
                    <div className='py-10 px-10 '>
                        <h3 className='text-xl'>Free Delivery Worldwide</h3>
                        <p>Mirum est notare quam littera gothica</p>
                    </div>
                    <div className='py-10 max-[430px]:px-10 lg:px-32 border-2 border-t-0 border-b-0'>
                        <h3 className='text-xl'>30 Days Return</h3>
                        <p>Simply return it within 30 days for an exchange.</p>
                    </div>
                    <div className='py-10 px-10 '>
                        <h3 className='text-xl'>Store Opening</h3>
                        <p>Shop open from Monday to Sunday</p>
                    </div>
                </div>
            </section>

        </>
    );
}
