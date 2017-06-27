import React, { Component } from 'react';
import PropTypes from 'prop-types';
const Post = (props) => {  
    return (<div>{props.children}</div>);
};

const MainScene = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <Post>
                 Some comment
                </Post>
            </div>
        </div>
    )
}

export default MainScene;
