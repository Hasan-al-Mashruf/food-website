import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Cart = ({ css, width, bg }) => {
    const { loader, setLoader, user, setCartCount, cartCount } = useContext(AuthContext)
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const { isLoading, error, data: products = [] } = useQuery({
        queryKey: ['cartItems', loader, user?.email],
        queryFn: () =>
            fetch(`https://food-website-server.vercel.app/cartItems?email=${user?.email}`)
                .then((res) => res.json())
                .finally(() => setLoader(false))
    })

    useEffect(() => {
        let addition = 0;
        let totalquantity = 0
        for (const iterator of products) {
            const quantity = iterator.quantity
            const total = quantity * iterator.price
            addition += total
            totalquantity += iterator.quantity
        }
        setCartCount(totalquantity)
        setTotal(addition)
        setLoader(false)
    }, [products, loader])

    return (
        <div className=''>
            <div className={`${css}`}>
                <div className={`${width} ml-auto p-3 ${bg} rounded`}>
                    {
                        products.length < 1 ? <h2></h2> :
                            products.map(product => <React.Fragment key={product._id}>
                                <div className='flex my-3 items-center' >
                                    <img src={product.img} alt="" className='w-1/4' />
                                    <div className='text-start ml-2'>
                                        <h4 className='text-md'>{product.name}</h4>
                                        <h4 className='text-sm'>x{product.quantity}</h4>
                                        <h4 className=''>${product.price}</h4>
                                    </div>
                                </div>
                            </React.Fragment>)
                    }
                    {
                        products.length < 1 ? <h2>Cart is empty</ h2> : <div className='border-t border-gray-400'>
                            <div className='flex justify-between my-2'>
                                <h2>Subtotal</h2>
                                <h2>{total.toFixed(2)}</h2>
                            </div>
                            <div className='flex md:w-3/5 mx-auto'>
                                <button className='btn bg-white shadow border-none text-black shadow-[#77767688] mt-3 p-3 mr-3'>View Cart</button>
                                <button className='btn bg-white shadow border-none text-black shadow-[#77767688] mt-3 p-3'>Checkout</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div >

    );
};

export default Cart;