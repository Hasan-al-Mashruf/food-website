import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Cart from '../../components/Cart/Cart';
import Categories from '../../components/Categories/Categories';
import { AuthContext } from '../../Context/AuthProvider';
import shopImage from '../../assets/shop.jpg'
import Sorting from '../../components/Sorting/Sorting';
import Spinner from '../../components/Spinner/Spinner';
import Hero from '../../components/Hero/Hero';
import { useNavigate } from 'react-router-dom';
const Shop = () => {

    const { loader, setLoader, user } = useContext(AuthContext)
    const [savedproduct, setSavedProduct] = useState({})
    const [category, setCategory] = useState('')
    const [sortBy, setSortBy] = useState()
    const [searchFor, setSearchFor] = useState('')
    const navigate = useNavigate()

    const { isLoading, error, data: products = [] } = useQuery({
        queryKey: ['items', category, sortBy, searchFor],
        queryFn: () =>
            fetch(`https://food-website-server.vercel.app/items?categoryName=${category}&sort=${sortBy}&search=${searchFor}`)
                .then((res) => res.json())
    })



    const cartProduct = (product) => {
        if (!user) {
            navigate('/signin')
        }

        if (user) {
            product.userName = user?.displayName,
                product.email = user?.email
            delete product._id
            fetch('https://food-website-server.vercel.app/cartItems', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setLoader(true)
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
        }
    }

    // console.log(savedproduct)


    return (
        <div>
            <Hero bgImage={shopImage} title={'Shop'} desc={'We make amazing artisan cupcakes'} />
            <div className='w-[90%] mx-auto'>

                {
                    <Sorting setSortBy={setSortBy} sortBy={sortBy} setSearchFor={setSearchFor} />
                }

                <div className='flex md:flex-row flex-col mt-10'>
                    <div className={isLoading ? 'grid grid-cols-1 gap-3 md:w-4/5' : 'grid md:grid-cols-3 grid-cols-1 gap-3 md:w-4/5'}>
                        {
                            isLoading ? <Spinner /> :
                                products.map(product => {
                                    const { name, category, price, img } = product
                                    return (
                                        <div className='text-center h-[60vh] flex items-center flex-col justify-center rounded-sm shadow' key={product._id}>
                                            <img src={img} alt="" className='w-2/4 mx-auto mb-3' />
                                            <h4>{category}</h4>
                                            <h4 className='text-2xl font-semibold mt-3 mb-2'>{name}</h4>
                                            <h4>$ {price}</h4>
                                            <button onClick={() => cartProduct(product)} className="btn btn-primary shadow-lg shadow-[#77767688] mt-3 btn-wide">Add to cart</button>
                                        </div>
                                    )
                                })
                        }

                    </div>
                    <div className='md:ml-5 md:mt-0 mt-5 md:w-1/5'>
                        <h1 className='text-2xl'>Cart</h1>
                        {<Cart bg={'bg-transparent'} />}
                        <h1 className='text-2xl my-5'>Categories</h1>
                        {<Categories setCategory={setCategory} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;