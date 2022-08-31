import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/URA-Tower.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              {/* <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2> */}
              <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
              <p className='py-4 text-3xl text-slate-200'>
                  
              When doing business, the fundamentals remain 
              important and in the world of market acquisition and competition its important to stay 
              updated with the most enguaging tools for business. 
              
              </p><br/>
            
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>The sale's Team </h3>
                          <p className='text-gray-600 text-xl'>
                              Sales is a money-driven role.
                              That’s why you have incentive compensation to motivate
                              sales people to close deals and exceed their quota.
                              But it’s about more than just offering reps money
                              for every deal they close. Discover how you can tailor
                              sales team incentives to each role to maximize their engagement and performance.
                          </p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                          <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' />

                          </p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Social Media Team </h3>
                          <p className='text-gray-600 text-xl'>
                              While it’s true many social media tools offer the opportunity to connect with global audiences,
                              they’re also great for driving local business when used in a targeted fashion. <strong>We</strong> help you
                              create a <strong>Facebook pages</strong>, <strong>LinkedIn pages</strong>, <strong>Google+ pages</strong> and Twitter pages
                              on your own website and link to them from your profile.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Advertisement Team</h3>
                          <p className='text-gray-600 text-xl'>Do you have Advertisement needs for your enterprise,
                              are you working on a campaigne, which ever reason an enterprise has for advertising,
                              we can help you get visibility hence driving up your targeted cash flow while
                              creating brand awareness in the eyes of your targeted audience.
                              Every business always has potential if put infront of the right <strong>Customer</strong></p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
