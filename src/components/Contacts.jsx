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
                    <Title>Contact Me</Title>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        className='p-2 bg-white text-black border-2 border-black dark:border-white rounded-md focus:outline-none'
                        required
                    />
                    <input 
                        type='text'
                        name='email'
                        placeholder='Your Email'
                        className='my-2 p-2 bg-white text-black border-2 border-black dark:border-white rounded-md focus:outline-none'
                        required
                    />
                    <textarea
                        name='message'
                        placeholder='Leave me a message...'
                        rows="7"
                        className='p-2 mb-4 bg-white text-black border-2 border-black dark:border-white rounded-md focus:outline-none resize-none'
                        maxlength="250"
                        required
                    />
                
                    <button 
                        type="submit"
                        className='text-center inline-block border-black group relative h-12 w-48 overflow-hidden rounded-lg bg-gray-800 dark:bg-yellow-500 text-lg shadow transition-colors duration-100 hover:bg-gray-600 dark:hover:bg-yellow-600'
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