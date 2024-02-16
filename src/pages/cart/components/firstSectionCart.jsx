import React from 'react';
import headingImage from '../../../assets/images/master-slide-02.jpg';

export const FirstSectionCart = () => {

    return (
        <>
            <section>

                <div className='h-[30vh] flex justify-center items-center' style={{ backgroundImage: `url(${headingImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <h1 className='text-6xl font-semibold text-white'>YOUR SHOPPING CART</h1>
                </div>

                <div className='py-32 flex flex-col gap-5 justify-center items-center bg-slate-300'>
                    <div className='ps-32 flex justify-center gap-x-40'>
                        <div className='text-md font-semibold '>PRODUCT NAME</div>
                        <div className='text-md font-semibold '>UNIT PRICE</div>
                        <div className='text-md font-semibold '>QUANTITY</div>
                        <div className='text-md font-semibold '>TOTAL</div>
                    </div>
                    <div className='bg-slate-200 w-[80%] h-60 px-7 flex items-center gap-16 '>
                        <div className='w-[15%] h-[70%] bg-black'>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h1>Product 1</h1>
                        </div>
                        <div className='ms-36'>
                            <h1>45415$</h1>
                        </div>
                        <div className='ms-36'>
                            5555
                        </div>
                        <div className='ms-36'>
                            5555
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

