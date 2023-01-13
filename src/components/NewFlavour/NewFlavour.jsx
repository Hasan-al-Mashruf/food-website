import React from 'react';
import NewFlavourImage from '../../assets/newFlavour.png'
const NewFlavour = () => {
    return (
        <div className='relative md:h-[100vh] w-full mt-24'>
            <div className='mt-10'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5 w-[90%] mx-auto'>
                    <div className='flex flex-col justify-center md:h-[100vh] '>
                        <h1 className='text-3xl text-secondary'>New Flavour</h1>
                        <h1 className='md:text-[80px] md:leading-[78px] my-8 text-5xl'>Dark Chocolate Berries pack</h1>
                        <h1 className='text-2xl'>We deliver best cupcakes fresh from our shop to your doorstep in recyclable packaging.</h1>

                        <button className='btn bg-secondary text-white shadow border-none mt-10 p-3 w-3/6'>
                            Order Now</button>
                    </div>
                    <div>
                        <div className='md:w-3/5 ml-auto text-right mr-5 md:mt-5 mb-5 mt-10'>
                            <h4 className='bg-secondary inline-block p-3 text-white rounded'>New Flavour</h4>
                            <br />
                            <h1 className='inline-block text-2xl leading-7 my-2'>Dark Chocolate <br />
                                with Berries</h1>
                            <h4>$3.75</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:absolute md:top-0 right-0 md:w-1/2 -z-10'>
                <img src={NewFlavourImage} alt="" />
            </div>
        </div>
    );
};

export default NewFlavour;