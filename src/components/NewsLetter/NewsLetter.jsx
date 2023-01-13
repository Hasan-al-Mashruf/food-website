import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <div className='md:w-4/6 mx-auto text-white text-center py-20'>
                <h1 className='text-4xl'>Stay informed about special offers</h1>
                <h1 className='text-2xl my-5'>Subscribe to the newsleter</h1 >
                <div className='flex'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full rounded-none" />
                    <button className='btn rounded-none bg-primary border-none text-black'>Subscribe</button>
                </div>
            </div>
        </div >
    );
};

export default NewsLetter;