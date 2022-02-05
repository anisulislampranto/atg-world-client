import React from 'react';
import fakData from '../../../fakeData.json';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
    return (
        <div className='container row gap-5 my-5'>
            <div className='col-md-8 col-12'> 
                {
                    fakData.map(post => <Post post={post}></Post>)
                }
            </div>
            <div className='col-md-3 col-12'>
                <input className='search-location mb-5 px-2 py-2' placeholder=' Enter Location' type="text" />
                <p><small> ⚠️ Your Location will help us serve better and extend a personalised experience.</small></p>
            </div>
        </div>
    );
};

export default Posts;