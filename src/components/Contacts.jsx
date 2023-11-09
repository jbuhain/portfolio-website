import React from 'react';
import Title from './Title';

function Contacts() {
    return (
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form 
                    action="https://getform.io/f/38421883-d73e-444a-8cf6-ab0249907896" method="POST"
                    className='flex flex-col w-full md:w-7/12'
                >
                    <Title>Contact</Title>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                    <input 
                        type='text'
                        name='email'
                        placeholder='Your Email'
                        className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                    <textarea
                        name='message'
                        placeholder='Leave a message...'
                        rows="7"
                        className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                
                    <button 
                        type="submit"
                        className='text-center inline-block group relative h-12 w-48 overflow-hidden rounded-lg bg-gray-800 text-lg shadow transition-colors duration-100 hover:bg-gray-600'
                    >

                        <span class="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white drop-shadow-md">
                            Send Message
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
        
}

export default Contacts;