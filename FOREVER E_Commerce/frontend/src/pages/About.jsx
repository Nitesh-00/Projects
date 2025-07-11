import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div className="px-4 md:px-10 py-8 space-y-12">
      {/* About Title */}
      <Title title1='ABOUT' title2='US' />

      {/* About Content Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <img src={assets.about_img} alt="About Us" className="w-full md:w-1/2 rounded-lg shadow-md" />
        <div className="space-y-4 text-gray-700 text-sm leading-6">
          <p>
            ForeverThreads is built on a vision to redefine the online shopping experience by blending fashion with technology. Our platform offers an intuitive and engaging environment where customers can effortlessly browse, discover, and shop from a diverse collection of clothing — all from the comfort of their home.
          </p>
          <p>
            From our launch, we've been committed to delivering quality, variety, and reliability. Whether you're seeking timeless styles or trendsetting designs, our catalog spans across casual, formal, and seasonal wear, sourced from reputable manufacturers and artisans.
          </p>
          <h3 className="font-semibold text-base mt-4">Our Mission</h3>
          <p>
            At ForeverThreads, our mission is to empower shoppers with choice, comfort, and confidence. We strive to deliver a frictionless shopping experience that blends aesthetic appeal with functional excellence — from personalized browsing to secure checkout and timely doorstep delivery.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='flex justify-start text-xl'>
          <Title title1='WHY' title2='CHOOSE US' />
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 justify-between text-center">
        <div className="border p-6 rounded-md shadow-sm flex-1">
          <p className="font-semibold text-base mb-2">Quality Assurance</p>
          <p className="text-sm text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="border p-6 rounded-md shadow-sm flex-1">
          <p className="font-semibold text-base mb-2">Convenience</p>
          <p className="text-sm text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className="border p-6 rounded-md shadow-sm flex-1">
          <p className="font-semibold text-base mb-2">Exceptional Customer Service</p>
          <p className="text-sm text-gray-600">Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  )
}

export default About
