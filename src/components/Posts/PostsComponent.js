import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './../Post/';
const Posts = props => {
    const { posts } = props;
    const postRender = [];
    posts.forEach(function(post) {
        postRender.push(<Post>{post}</Post>)
    }, this);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h3>User Comment Example</h3>
                </div>
            </div>
            {postRender}
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string)
};

export default Posts;
