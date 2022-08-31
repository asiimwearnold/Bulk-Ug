import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';
import Slider from 'react-slick'
const product = {
  firstp: 'SMS',
  secondp: 'SMS',
  thirdp: 'SMS',
  fourthp:'SMS'
}
const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>{product.firstp } Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-8'>The right price for your Business.</h3>
          <p className='text-3xl'>
            We know that your needs will always vary and thats
            why our pricess have between
            carefuly concieved to accommodate
            your ever changing needs. why pay more when you need less?
          </p>
        </div><br/><br/>
        
          <div className='grid md:grid-cols-4 gap-2'>

<div class="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
    <p class="text-black dark:text-white text-3xl font-bold">
        Essential
    </p>
    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
        For the basics tailwind
    </p>
    <p class="text-black dark:text-white  text-3xl font-bold">
        $99
    </p>
    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
        Per agent per month
    </p>
    
    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            All illimited components Tailwind
        </li>
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Own analitycs templates
        </li>
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            24/24 support link
        </li>
    </ul>
    <span class="w-56 block bg-gray-100 h-1 rounded-lg my-2">
            </span>
            <button type="button" class="w-56 m-auto px-3 py-3 text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 ">
        Request demo
    </button>
    
</div>

              
<div class="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
    <p class="text-black dark:text-white text-3xl font-bold">
        Essential
    </p>
    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
        For the basics tailwind
    </p>
    <p class="text-black dark:text-white  text-3xl font-bold">
        $99
    </p>
    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
        Per agent per month
    </p>
    
    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            All illimited components Tailwind
        </li>
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Own analitycs templates
        </li>
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            24/24 support link
        </li>
    </ul>
    <span class="w-56 block bg-gray-100 h-1 rounded-lg my-2">
            </span>
            <button type="button" class="w-56 m-auto px-3 py-3 text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 ">
        Request demo
    </button>
    
</div>

<div class="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
    <p class="text-black dark:text-white text-3xl font-bold">
        Essential
    </p>
    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
        For the basics tailwind
    </p>
    <p class="text-black dark:text-white  text-3xl font-bold">
        $99
    </p>
    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
        Per agent per month
    </p>
   
    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            All illimited components Tailwind
        </li>
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Own analitycs templates
        </li>
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            24/24 support link
        </li>
    </ul>
    <span class="w-56 block bg-gray-100 h-1 rounded-lg my-2">
            </span>
            <button type="button" class="w-56 m-auto px-3 py-3 text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 ">
        Request demo
    </button>
  
</div>

<div class="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
    <p class="text-black dark:text-white text-3xl font-bold">
        Essential
    </p>
    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
        For the basics tailwind
    </p>
    <p class="text-black dark:text-white  text-3xl font-bold">
        $99
    </p>
    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
        Per agent per month
    </p>
    
    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            All illimited components Tailwind
        </li>
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Own analitycs templates
        </li>
        <li class="mb-3 flex items-center">
            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            24/24 support link
        </li>
    </ul>
    <span class="w-56 block bg-gray-100 h-1 rounded-lg my-2">
            </span>
            <button type="button" class="w-56 m-auto px-3 py-3 text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 ">
        Request demo
    </button>
   
</div>

          
        </div>
        
        
      </div>
    </div>
  );
};

export default Pricing;
