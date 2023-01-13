import React from 'react';

const Sorting = ({ setSortBy, setSearchFor }) => {
    return (
        <div className='grid md:grid-cols-5 grid-cols-1 gap-3'>
            <div className='col-span-3'>
                <h2>Showing 25 items</h2>
            </div>
            <div >
                <select className="select select-bordered w-full max-w-xs" onChange={(e) => setSortBy(e.target.value)}>
                    <option selected>Sort by default</option>
                    <option>Low to high</option>
                    <option>High to low</option>
                </select>
            </div>
            <div>
                <input type="text" placeholder="Looking for" onChange={(e) => setSearchFor(e.target.value)} className="input input-bordered w-full max-w-xs"  />
            </div>
        </div>
    );
};

export default Sorting;