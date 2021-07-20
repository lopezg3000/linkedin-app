import React from 'react';

const Skill = ({ firstBreadcrumbItem, counter, endorser }) => {
    return (
        <div aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item ps-3"><strong href="#">{firstBreadcrumbItem}</strong></li>
                <i className='bi bi-dot text-muted'></i>
                <li class="breadcrumb-item active" aria-current="page"><strong>{counter}</strong></li>
            </ol>
            <p className='ps-3'><strong>{endorser}</strong> have given endorsements for this skill</p>
        </div>
    );
}

export default Skill;