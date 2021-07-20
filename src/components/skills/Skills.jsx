import React from 'react';
import Skill from '../common/Skill';

const Skills = () => {
    return (
        <div className='skills-container'>
            <div className='row w-75 mt-3 bg-white border border-bottom-0 border-1'>
                <div className='col'>
                    <h5 className='px-3 pt-3 pb-1'>Skills & Endorsements</h5>
                </div>
            </div>
            <div className='row w-75 bg-white border border-top-0 border-1'>
                <Skill
                    firstBreadcrumbItem='JavaScript'
                    counter='2'
                    endorser='Sarah dePalo and 1 connection'
                />
            </div>
            <div className='row w-75 bg-white border border-top-0 border-1 pt-2'>
                <Skill
                    firstBreadcrumbItem='Cascading Style Sheets (CSS)'
                    counter='2'
                    endorser='Sarah dePalo and 1 connection'
                />
            </div>
            <div className='row w-75 bg-white border border-top-0 border-1 pt-2'>
                <Skill
                    firstBreadcrumbItem='HTML5'
                    counter='2'
                    endorser='Ian Eastland and 1 connection'
                />
            </div>

        </div>
    );
}

export default Skills;