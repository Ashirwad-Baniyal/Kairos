import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'


function Footer() {
  return (
    // <section className="relative overflow-hidden py-10 bg-gray-900 border border-t-2 border-t-black">
    //         <div className="relative z-10 mx-auto max-w-7xl px-4">
    //             <div className="-m-6 flex flex-wrap">
    //                 <div className="w-full p-6 md:w-1/2 lg:w-5/12">
    //                     <div className="flex h-full flex-col justify-between">
    //                         <div className="mb-4 inline-flex items-center">
    //                             <Logo width="100px" />
    //                         </div>
    //                         <div>
    //                             <p className="text-sm text-gray-600">
    //                                 &copy; Copyright 2023. All Rights Reserved by DevUI.
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="w-full p-6 md:w-1/2 lg:w-2/12">
    //                     <div className="h-full">
    //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //                             Company
    //                         </h3>
    //                         <ul>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Features
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Pricing
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Affiliate Program
    //                                 </Link>
    //                             </li>
    //                             <li>
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Press Kit
    //                                 </Link>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //                 <div className="w-full p-6 md:w-1/2 lg:w-2/12">
    //                     <div className="h-full">
    //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //                             Support
    //                         </h3>
    //                         <ul>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Account
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Help
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Contact Us
    //                                 </Link>
    //                             </li>
    //                             <li>
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Customer Support
    //                                 </Link>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //                 <div className="w-full p-6 md:w-1/2 lg:w-3/12">
    //                     <div className="h-full">
    //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //                             Legals
    //                         </h3>
    //                         <ul>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Terms &amp; Conditions
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Privacy Policy
    //                                 </Link>
    //                             </li>
    //                             <li>
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Licensing
    //                                 </Link>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    

<footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">Kairos™</a>. All Rights Reserved.</span>
    </div>
</footer>

  )
}

export default Footer