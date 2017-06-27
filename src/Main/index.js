import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from './../img/avatar_2x.png';
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
                <img src={image} />
            </div>
        </div>
    )
}

export default MainScene;
