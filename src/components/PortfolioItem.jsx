import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link}) {

    return (
        
        <div className="border-2 border-stone-900 m-2 dark:border-white rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <a href={link} target="_blank">
                <img 
                    src={imgUrl} 
                    alt="portfolio" 
                    className="w-full h-36 md:h-48 object-cover"
                />
            
                <div className='w-full p-4'>
                    <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
                    <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                        {stack.map(item => (
                            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                                {item}
                            </span>
                        ))}
                    </p>
                </div>
            </a>
        </div>
        
    )
}

export default PortfolioItem;