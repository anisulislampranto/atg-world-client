import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Post.css';

const Post = (props) => {
    const {Headline, picture, topic, description, pictureOwner, nameOwner} = props.post;

    return (
        <div className='post-card mb-3 rounded col-12'>
            <img width={'100%'} height={'250px'} src={picture} alt="" />
            <div className='px-3 py-2'>
                <p>{topic}</p>
                <div className='d-flex justify-content-between align-items-center py-1'>
                    <h5>{Headline}</h5>
                    <span>
                    <div class="btn-group dropstart">
                        <button type="button" class="btn btn-secondary data-toggle text-black bg-transparent border-0" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faEllipsisH}/>
                        </button>
                        <ul class="dropdown-menu">
                            <li className='dropdown-item'>Edit</li>
                            <li className='dropdown-item'>delete</li>
                            <li className='dropdown-item'>Save</li>
                        </ul>
                    </div>
                    </span>
                </div>
                <p className='text-secondery'>{description}</p>
            </div>
            <div className='d-flex px-3 py-3 align-items-center gap-2'>
                <img style={{width:'50px', height:'50px', borderRadius:'30px'}} src={pictureOwner} alt="" />
                <h6>{nameOwner}</h6>
            </div>
        </div>
    );
};

export default Post;