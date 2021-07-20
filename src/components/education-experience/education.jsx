import React from 'react';
import CardHorizontal from '../common/CardHorizontal';
import HoustonBaptistUniversityThumbnail from '../../assets/houstonBaptistUniversityThumbnail.png'
import DigitalcraftsThumbnail from '../../assets/digitalcraftsThumbnail.png'

const Education = () => {
    return (
        <div className='education-container'>
            <div className='row w-75 bg-white border border-bottom-0 border-1'>
                <div className='col'>
                    <h5 className='px-3 pt-3'>Education</h5>
                </div>
            </div>

            <div className='row w-75 bg-white border border-top-0 border-1'>
                <div className="col-9">
                    <CardHorizontal
                        imagePath={DigitalcraftsThumbnail}
                        cardTitle='Digitalcrafts'
                        firstLightCardText='2021 - 2021'
                    />
                </div>
            </div>

            <div className='row w-75 bg-white border border-top-0 border-1'>
                <div className="col-9">
                    <CardHorizontal
                        imagePath={HoustonBaptistUniversityThumbnail}
                        cardTitle='Houston Bapstist University'
                        darkCardText="Bachelor's degree, Biochemistry/Molecular Biology"
                        firstLightCardText='2012 - 2016'
                    />
                </div>
            </div>
        </div>

    );
}

export default Education;