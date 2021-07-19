import React from 'react';
import ProfileIntro from '../common/CardVertical';
// import './intro.css';

const Intro = () => {
    return (
        <div className=" intro container w-75">
            <div className="row h-75">
                <div></div>

            </div>
            <div className="row">
                <div className="column">
                    <ProfileIntro
                        imagePath='https://picsum.photos/200'
                        cardTitle='Gabriel Lopez'
                        cardText='Software developer who respects and admires the culture, process, and craft of web development.'
                        breadCrumbItemOne='Contact info'
                        breadCrumbItemTwo='Greater Houston'
                        cardFooter='48 Connections'
                    />
                </div>
                <div className="column">


                </div>
            </div>
            <div className="row">

            </div>
        </div>
    );
}

export default Intro;