import React from 'react';
import CardHorizontal from '../common/CardHorizontal';

const Experience = () => {
    return (
        <div className='experience-container'>
            <div className='row w-75 mt-3 bg-white border border-bottom-0 border-1'>
                <div className='col'>
                    <h5 className='px-3 pt-3'>Experience</h5>
                </div>
            </div>

            <div className='row w-75 bg-white border border-top-0 border-1 pb-3'>
                <div className="col-9">
                    <CardHorizontal
                        imagePath='https://picsum.photos/80/'
                        cardTitle='Teacher'
                        darkCardText='Westbury High School'
                        firstLightCardText='Aug 2018 - Present'
                        secondLightCardText='Houston, Texas Area'
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;