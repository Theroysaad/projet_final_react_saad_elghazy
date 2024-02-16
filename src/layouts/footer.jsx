import React from 'react';
import { FaSquarePinterest } from "react-icons/fa6";

export const FooterComponent = () => {
    return (

        <>
            <footer
                className="bg-neutral-100  text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 :lgtext-left p-7">

                {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
                <div className="lg:mx-6 py-10 md:text-left lg:p-10 mb-5 ">
                    <div className="grid-1 grid gap-16 md:grid-cols-2 lg:grid-cols-5 ">
                        {/* <!-- GET IN TOUCH --> */}   
                        <div className="">
                            <h6
                                className="mb-4 flex font-bold uppercase md:justify-start ">
                                GET IN TOUCH
                            </h6>
                            <p className='flex flex-col '>
                                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                                <span>New York, NY 10018 or call us on (+1) 96 716 6879</span>
                            </p>
                            <div className="flex justify-start opacity-80 items-center mt-6">
                                <a className="mr-6 text-neutral-600 dark:text-neutral-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                                <a className="mr-6 text-neutral-600 dark:text-neutral-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a className="mr-6 text-neutral-600 dark:text-neutral-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                            fillRule="evenodd"
                                            clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a className="mr-6 text-neutral-600 dark:text-neutral-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="" className="mr-6 text-neutral-600 dark:text-neutral-200" >
                                <FaSquarePinterest />
                                </a>

                            </div>
                        </div>
                        {/* <!-- Products section --> */}
                        <div className="w-fit">
                            <h6
                                className="mb-4 flex  font-bold uppercase md:justify-start">
                                CATEGORIES
                            </h6>
                            <p className="mb-4">
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >Men</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >Women</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >Dresses</a>
                            </p>
                            <p>
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >Sunglasses</a>
                            </p>
                        </div>
                        {/* <!-- Useful links section --> */}
                        <div className="w-fit">
                            <h6
                                className="mb-4 flex  font-bold uppercase md:justify-start">
                                LINKS
                            </h6>
                            <p className="mb-4">
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >Search</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >About Us</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >Contact Us</a>
                            </p>
                            <p>
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >Returns</a>
                            </p>
                        </div>
                        {/* HELP */}

                        <div className="w-fit ">
                            <h6
                                className="mb-4 flex  font-bold uppercase md:justify-start">
                                help
                            </h6>
                            <p className="mb-4">
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >Track Order</a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >Returns </a>
                            </p>
                            <p className="mb-4">
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >Shipping</a>
                            </p>
                            <p>
                                <a className="text-neutral-600 dark:text-neutral-200"
                                >FAQs</a>
                            </p>
                        </div>

                        {/* <!-- Contact section --> */}
                        <div className='w-fit '>
                            <h6
                                className="mb-4 flex lg:justify-center font-bold uppercase md:justify-start">
                                NEWSLETTER
                            </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <input type="text" placeholder='Email Address ' className='border-r-0 border-l-0 border-t-0 border-b-[1px] text-sm ps-0 pe-16 py-3 bg-transparent ' />
                            </p>
                            <button className='uppercase bg-black text-white border py-3 px-14 rounded-full'>
                                subscribe
                            </button>
                            
                        </div>
                    </div>
                </div>

                {/* <!--Copyright section--> */}
                <div className=" p-6 text-center ">
                    <span>© 2023 Copyright:</span>
                    <a
                        className="font-semibold  "
                        href="https://tw-elements.com/"
                    >Copyright © 2022 Shopify Theme Developed by ELGHAZY SAAD All rights reserved.</a>
                </div>
            </footer>
        </>
    );
};

