import React from 'react';
import ProfileIntro from '../common/CardVertical';
import TrainingSummary from '../common/TrainingSummary';
import LinkedinPicture from '../../assets/linkedinPictureReal.JPG';
import DigitalcraftsThumbnail from '../../assets/digitalcraftsThumbnail.png';
import WestburyThumbnail from '../../assets/westburyThumbnail.png';
// import './intro.css';

const Intro = () => {
    return (
        <React.Fragment>
            <div className="row border border-bottom-0 border-1 w-75 rounded-top" style={{ width: '50%', height: '200px', background: 'linear-gradient(to right, #00b4db, #0083b0)' }}>

            </div>
            <div className="row border border-top-0 border-1 w-75 bg-white">
                <div className="col-7 p-3">
                    <ProfileIntro
                        imagePath={LinkedinPicture}
                        cardTitle='Gabriel Lopez'
                        cardText='Software developer who respects and admires the culture, process, and craft of web development.'
                        breadCrumbItemOne='Contact info'
                        breadCrumbItemTwo='Greater Houston'
                        cardFooter='48 Connections'
                    />
                </div>
                <div className="training-container col-5 py-5 border-0"  >
                    <TrainingSummary
                        imagePath={WestburyThumbnail}
                        headline='Westbury High School'
                    />
                    <TrainingSummary
                        imagePath={DigitalcraftsThumbnail}
                        headline='Digitalcrafts'
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Intro;