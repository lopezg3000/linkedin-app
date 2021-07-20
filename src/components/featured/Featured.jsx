import React from 'react';
import FeaturedItem from '../common/FeaturedItem';

const Featured = () => {
    return (
        <React.Fragment>
            <div className='row w-75 mt-3 bg-white border border-bottom-0 border-1'>
                <div className='col-6 '>
                    <h5 className='card-title px-3 pt-3'>Featured</h5>
                </div>
            </div>
            <div className='row w-75 mb-3 bg-white pb-3 border border-top-0 border-1'>
                <div className='col-6 py-2 ps-4 pe-2'>
                    <FeaturedItem
                        imagePath='https://picsum.photos/400/300'
                        cardTitle="Gabriel Lopez's Portfolio"
                        cardSubtitle="gabriellopez.netlify.app "
                        cardText="Click on my portfolio link and feel free to take a look around."
                    />
                </div>
                <div className='col-6 py-2 pe-4 ps-2'>
                    <FeaturedItem
                        imagePath='https://picsum.photos/400/300'
                        cardTitle="Gabriel Lopez's Resume"
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Featured;