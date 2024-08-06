import React from 'react'

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-4xl font-bold mb-8 text-center text-indigo-600'>About PropertyPal</h1>
      <div className='flex flex-col md:flex-row items-center mb-8'>
        <div className='md:w-1/2 mb-4 md:mb-0'>
          <img src='/images/property.jpg' loading="lazy" alt='Property' className='rounded-lg shadow-lg' />
        </div>
        <div className='md:w-1/2 md:pl-8'>
          <p className='mb-4 text-lg text-gray-700'>PropertyPal is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
          <p className='mb-4 text-lg text-gray-700'>Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.</p>
          <p className='mb-4 text-lg text-gray-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img src='/images/icon1.jpg' alt='Service' className='w-16 h-16 mb-4 mx-auto' />
          <h2 className='text-xl font-semibold mb-2 text-center'>Exceptional Service</h2>
          <p className='text-gray-700 text-center'>Our agents are committed to providing the highest level of service to make your real estate experience smooth and enjoyable.</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img src='/images/icon2.jpg' alt='Advice' className='w-16 h-16 mb-4 mx-auto' />
          <h2 className='text-xl font-semibold mb-2 text-center'>Expert Advice</h2>
          <p className='text-gray-700 text-center'>Benefit from our extensive knowledge and experience in the real estate industry.</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img src='/images/icon3.jpg' alt='Market Knowledge' className='w-16 h-16 mb-4 mx-auto' />
          <h2 className='text-xl font-semibold mb-2 text-center'>Local Market Knowledge</h2>
          <p className='text-gray-700 text-center'>We have a deep understanding of the local market to help you make informed decisions.</p>
        </div>
      </div>
    </div>
  )
}
