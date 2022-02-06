import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TimelineNavbar.css'


const TimelineNavbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-light border-bottom'>
                <div class="collapse navbar-collapse">
                    <a className='nav-link text-secondary' href="">Article</a>
                    <a className='nav-link text-secondary' href="">Event</a>
                    <a className='nav-link text-secondary' href="">Education</a>
                    <a className='nav-link text-secondary' href="">Job</a>
                </div>
                <div className='navbar gap-2'>
                    <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Write a Post
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">New Post </a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                    </div>
                    <button className='btn btn-primary'> <FontAwesomeIcon icon={faUserPlus} /> Join Group</button>
                </div>
            </nav>
        </div>
    );
};

export default TimelineNavbar;