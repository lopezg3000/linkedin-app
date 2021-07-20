import React from 'react';
import FeaturedItem from '../common/FeaturedItem';

const Featured = () => {
    return (
        <div className='row w-75 my-3'>
            <div className='col-6 px-0'>
                <FeaturedItem
                    imagePath='https://picsum.photos/400/300'
                    cardTitle='Featured'
                    cardSubtitle='subtitle'
                    cardText="I am text"
                />
            </div>
        </div>
    );
}

export default Featured;