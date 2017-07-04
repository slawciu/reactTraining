import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comments from './../ShowComments/Comments'

const Post = (props) => {  
    return (<div>{props.children}</div>);
};

class MainScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
                {id: 1, author:'author 1', message: 'message 1', dateAdded:new Date(), image: 'https://vignette3.wikia.nocookie.net/nonsensopedia/images/f/fe/Kulfon.jpg'},
                {id: 2, author:'author 2', message: 'message 2', dateAdded:new Date(),image: ''},
                {id: 3, author:'author 3', message: 'message 3', dateAdded:new Date(),image: 'https://vignette3.wikia.nocookie.net/nonsensopedia/images/f/fe/Kulfon.jpg'},
                {id: 4, author:'author 4', message: 'message 4', dateAdded:new Date(),image: ''}
                ]
        }
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <Comments comments={ this.state.comments }/>
                </div>
            </div>
        );
    }
}

export default MainScene;
