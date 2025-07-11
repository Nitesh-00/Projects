import React from "react";
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox'

function Contact() {
  return (
    <div className="min-h-screen px-4 md:px-10 py-15 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-15 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src={assets.contact_img} alt="Contact Us" className="rounded-lg shadow-md w-full" />
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Store Info */}
          <div>
            <h1 className="text-xl font-semibold mb-2">Our Store</h1>
            <p>John Smith</p>
            <p>4220 Hilltop Drive</p>
            <p>San Diego, CA 92102</p>
            <p>United States</p>
            <p className="mt-3">Tel: +1 (619) 555-0198</p>
            <p>Email: admin@forever.com</p>
          </div>

          {/* Careers */}
          <div>
            <h1 className="text-xl font-semibold mb-2">Careers at Forever</h1>
            <p className="mb-4">Learn more about our teams and job openings.</p>
            <button className="border text-gray px-7 py-5  hover:opacity-90 transition duration-200">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <div className="py-15">
        <NewsletterBox></NewsletterBox>
      </div>
      
    </div>
  );
}

export default Contact;
