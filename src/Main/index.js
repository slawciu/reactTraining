import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comments from './../ShowComments/Comments';
import AddCommentForm from './../AddComments/AddCommentForm';
import _ from 'underscore'

const Post = (props) => {  
    return (<div>{props.children}</div>);
};

class MainScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
                {id: 1, isVisible: true, author:'author 1', message: 'message 1', dateAdded:new Date(), imagePath: 'https://vignette3.wikia.nocookie.net/nonsensopedia/images/f/fe/Kulfon.jpg'},
                {id: 2, isVisible: true, author:'author 2', message: 'message 2', dateAdded:new Date(),imagePath: ''},
                {id: 3, isVisible: true, author:'author 3', message: 'message 3', dateAdded:new Date(),imagePath: 'https://vignette3.wikia.nocookie.net/nonsensopedia/images/f/fe/Kulfon.jpg'},
                {id: 4, isVisible: true, author:'author 4', message: 'message 4', dateAdded:new Date(),imagePath: ''}
                ]
        }
    }

    _onCommentSubmit (comment) {
        var comments = this.state.comments;
        var lastComment = _.max(comments, function(c){ return c.id});
        comment.id = lastComment.id + 1;
        comments.push(comment);
        this.setState({comments: comments});
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <Comments comments={ this.state.comments }/>
                </div>
                <div>
                    <AddCommentForm onCommentSubmit={this._onCommentSubmit.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default MainScene;
