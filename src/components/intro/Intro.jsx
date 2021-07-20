import React from 'react';
import ProfileIntro from '../common/CardVertical';
import TrainingSummary from '../common/TrainingSummary';
// import './intro.css';

const Intro = () => {
    return (
        <React.Fragment>
            <div className="row border w-75 rounded-top" style={{ width: '50%', height: '200px', background: 'linear-gradient(to right, #00b4db, #0083b0)' }}>

            </div>
            <div className="row w-75 bg-white">
                <div className="col-7 p-3">
                    <ProfileIntro
                        imagePath='https://picsum.photos/200'
                        cardTitle='Gabriel Lopez'
                        cardText='Software developer who respects and admires the culture, process, and craft of web development.'
                        breadCrumbItemOne='Contact info'
                        breadCrumbItemTwo='Greater Houston'
                        cardFooter='48 Connections'
                    />
                </div>
                <div className="col-5 py-5 border-0"  >
                    <TrainingSummary
                        imagePath='https://picsum.photos/id/237/25/25'
                        headline='Westbury High School'
                    />
                    <TrainingSummary
                        imagePath='https://picsum.photos/id/237/25/25'
                        headline='Houston Baptist University'
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Intro;