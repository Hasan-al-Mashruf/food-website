import React from 'react';
import Hero from '../../components/Hero/Hero';
import Product from '../../components/Product/Product';
import HeroImage from '../../assets/hero.jpg'
import NewFlavour from '../../components/NewFlavour/NewFlavour';

const Home = () => {
    return (
        <div>
            <Hero bgImage={HeroImage} title={'Hello there'} desc={'Handcrafted cupcakes and curated gift boxes'} />
            <div className='w-[90%] mx-auto'>
                <Product />
            </div>
            <NewFlavour />
        </div>
    );
};

export default Home;