import React from 'react';

function Title({ children, id }) {
    return (
       <h1
        id={id && id}
        className='text-2xl font-bold dark:text-white underline underline-offset-8 decoration-4 mb-5'
       >
        {children}
       </h1>
    )
        
}

export default Title;