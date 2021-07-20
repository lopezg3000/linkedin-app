import React from 'react';
import CardTextOnly from '../common/CardTextOnly';

const About = () => {
    return (
        <div className='about-container row w-75 my-3'>
            <CardTextOnly
                cardTitle='About'
                cardText="Hello, I'm Gabriel Lopez. I am a Frontend developer in Houston, Texas. I have a serious passion for visual and responsive design as well as creating dynamic, user friendly experiences. In short, crafting great software matters to me."
            />
        </div>
    );
}

export default About;