 import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact: React.FC = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-out-right"> Get in Touch</h2>
                <p className='text-gray-650 text-[18px] pt-2' data-aos="zoom-out-right">
                    Drop me a line, give me a call, Or send me a message by submitting the form.
                </p>

                <div className='flex gap-3 items-center' data-aos="zoom-out-right">
                    <AiOutlineMail size={30} /> maheenkhankamalkhan@gmail.com
                </div>
                 
                <div className='flex gap-3 items-center' data-aos="zoom-out-right">
                    <BsFillTelephoneFill size={20}/> (+92)1111111111

                    <div className='flex gap-3 items-center' data-aos="zoom-out-right">
                    <BsFillTelephoneFill size={20}/> (+92)11111111111
                    </div>
                </div>
            </div>
        </div>

        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-out-right">
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id='name'
                    placeholder='Enter your name' // Optional: Add a placeholder
                />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-out-right">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" // Change type to email for better validation
                    className='h-[40px] bg-transparent border border-accent'
                    id='email'
                    placeholder='Enter your email' // Optional: Add a placeholder
                />
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-out-right">
                <label htmlFor='message'>Message</label>
                <textarea
                    className='bg-transparent border border-accent'
                    id='message' rows={6}
                    placeholder='Enter your message'
                />
            </div>
            <button className='bg-accent p-1 px-4 text-blue-1000 rounded' data-aos="zoom-out-right">Send</button> {/* Change text color here */}
        </div>
    </div>
  );
}

export default Contact;