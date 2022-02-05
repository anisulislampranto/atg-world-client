import React from 'react';
import Posts from '../Posts/Posts';
import TimelineNavbar from '../TimelineNavbar/TimelineNavbar';

const GroupTimeline = () => {
    return (
        <div className='container'>
            <TimelineNavbar/>
            <Posts/>
        </div>
    );
};

export default GroupTimeline;