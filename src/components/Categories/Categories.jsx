import React, { useEffect, useState } from 'react';

const Categories = ({ setCategory }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://food-website-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='my-4'>
            {
                categories.map(category => <div key={category._id}>
                    <h4 className='my-2 text-sm cursor-pointer' onClick={() => setCategory(category.category)}>{category.category}</h4>
                </div>
                )
            }
        </div>
    );
};

export default Categories;