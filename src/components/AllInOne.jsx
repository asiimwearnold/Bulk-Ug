import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          Get the help you need for your business to get started and thrive within the <st>EA</st> Region.  
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Company Registration</h3>
              <p className='text-lg pt-2 pb-4'>
                Registering a business can be a daunting and
                tiresome task
                e.g: what type of company should I register?
                What are the legal and financial implications of my choice.
                This is where we come in to help make this process a slum dunk.

              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Tin Processing</h3>
              <p className='text-lg pt-2 pb-4'>
                We can help you process a Tax Identification
                Number in just a few minutes, 
                this service has helped our clients save money
                and time in the short and long run.

              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Managed Call Center</h3>
              <p className='text-lg pt-2 pb-4'>
                
                Call centers have become expensive, 
                with our managed call center. 
                we promise to address your customer queries promptly and without fail, 
                for just a fraction of managing an in-house CRM department.

               
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Business E-Mail Registration</h3>
              <p className='text-lg pt-2 pb-4'>
                Do you need a Business E-Mail e.g <strong> ddy@jumia.com </strong> 
                this helps you easily get identified by your clients and
                instills trust in a number of transactional communications
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Tax Filling </h3>
              <p className='text-lg pt-2 pb-4'>
                This is a process where a taxpayer reports accurately,
                correctly and in completeness all tax obligations.
                We help individuals and business to accurately report and
                file theirs tax implications like pro's
               
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Bulk SMS & Unlimited Calls</h3>
              <p className='text-lg pt-2 pb-4'>
                Communication is important, especially if you are in a business environment.
                Our clients usually see a 75% increase in the rate of customer retention and return
                due to keeping an open line of communications with their customers.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Documnet Certification & verification </h3>
              <p className='text-lg pt-2 pb-4'>
                How do you determine the authenticity of documents submitted on your Table, 
                our team of legal experts helps our 
                clients carry out background checks on 
                Documents such as Land Titles, Agreaments, certificates 
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Passport Application</h3>
              <p className='text-lg pt-2 pb-4'>
                Do you need to process a new passport, Renew Passport on time
                Our team of well connected proffetionals has made this process simpler.
                our passport argent will help you fill your application for timely review and approval 
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllInOne;
