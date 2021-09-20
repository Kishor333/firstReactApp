import React from 'react';

const SearchBox = ({ searchChange}) => {
    return (
        <div className='ma2'>
            <input type='search' className='pa3 ba b--green bg-lightest-blue' placeholder='Search for the'
            onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;
