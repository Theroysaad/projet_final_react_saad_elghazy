import React from 'react';
import { Header } from '../../../layouts/header';
import './firstSection.scss'
import headingImage from '../../../assets/images/heading-pages-06.jpg'


export const FirstSectionContact = () => {
    return (
        <>

            <section className=''>
                <div className='headingContact h-[300px] flex justify-center items-center' style={{ backgroundImage: `url(${headingImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >
                    <h1 className='font-bold text-5xl text-white'>CONTACT</h1>
                </div>
                <div className=' max-[430px]:flex-col  flex lg:items-center lg:justify-center gap-12 py-20'>
                    <div className='map-container'>
                        <iframe
                            className='map-iframe'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349440.4804605176!2d-74.29903179649563!3d40.70377732207267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20%C3%89tat%20de%20New%20York%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sma!4v1707919722719!5m2!1sfr!2sma"
                            width={520}
                            height={500}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className='flex flex-col gap-5 lg:pe-24 max-[430px]:ps-7 '>
                        <h1 className='text-3xl'>Send us your message</h1>
                        <div className='flex flex-col gap-y-5 '>
                            <input placeholder='Name' className='py-3 ps-7 px-56 rounded-sm outline-none  border-t-0' type="text" />
                            <input placeholder='Email' className='py-3 ps-7 px-56 rounded-sm outline-none  border-t-0' type="email" />
                            <input placeholder='Phone' className='py-3 ps-7 px-56 rounded-sm outline-none border-t-0' type="number" />
                            <textarea placeholder='Message' className='rounded-sm ps-7 pt-3 border-t-0' name="" id="" cols="30" rows="5"></textarea>
                        </div>
                        <button className='uppercase bg-black text-white border lg:w-[10vw] border-none h-[7vh] rounded-full'>
                            Send
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
