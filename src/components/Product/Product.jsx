import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Spinner from '../Spinner/Spinner';

const Product = () => {

    const { setLoader, user } = useContext(AuthContext)
    const [savedproduct, setSavedProduct] = useState({})

    const { isLoading, error, data: products = [] } = useQuery({
        queryKey: ['items'],
        queryFn: () =>
            fetch('https://food-website-server.vercel.app/items')
                .then((res) => res.json())
    })


    if (isLoading) {
        return <Spinner />
    }

    const cartProduct = (product) => {
        if (!user) {
            alert('no user')
            return
        }

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
                if (data.acknowledged) {
                    setLoader(true)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    return (
        <div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 my-5'>
                {products.slice(0, 3).map(product => {
                    const { name, category, price, img, bg } = product
                    const primary = `#${bg}`
                    return (
                        <div className={`rounded-sm text-center py-6`} key={product._id} style={{ background: `${primary}` }}>
                            <img src={img} alt="" className='w-3/4 mx-auto mb-3' />
                            <h4>{category}</h4>
                            <h1 className='text-3xl font-semibold mt-3 mb-3'>{name}</h1>
                            <h4>${price}</h4>
                            <button onClick={() => cartProduct(product)} className='btn btn-primary shadow-lg shadow-[#77767688] mt-3'>Add to cart</button>
                        </div>
                    )
                })}
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 my-5 '>
                {products.slice(3, 5).map(product => {
                    const { name, category, price, img, bg } = product
                    const primary = `#${bg}`
                    console.log(primary)
                    return (
                        <div className={`bg-[${primary}] rounded-sm md:py-2 py-6`} key={product._id} style={{ background: `${primary}` }}>
                            <div className='flex items-center '>
                                <img src={img} alt="" className='w-2/4 mx-auto' />
                                <div className='pr-5'>
                                    <h4>{category}</h4>
                                    <h1 className='md:text-3xl text-2xl font-semibold mt-2 mb-1'>{name}</h1>
                                    <h4>${price}</h4>
                                    <button onClick={() => cartProduct(product)} className='btn btn-primary shadow-lg shadow-[#77767688] mt-3'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-5 my-5'>
                {products.slice(5, 9).map(product => {
                    const { name, category, price, img, bg } = product
                    const primary = `#${bg}`
                    return (
                        <div className='bg-primary rounded-sm text-center py-6' key={product._id} style={{ background: `${primary}` }}>
                            <img src={img} alt="" className='w-3/4 mx-auto mb-3' />
                            <h4>{category}</h4>
                            <h1 className='text-3xl font-semibold mt-3 mb-2'>{name}</h1>
                            <h4>${price}</h4>
                            <button onClick={() => cartProduct(product)} className='btn btn-primary shadow-lg shadow-[#77767688] mt-3'>Add to cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Product;