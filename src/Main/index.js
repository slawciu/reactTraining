import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comments from './../ShowComments/Comments';
import AddCommentForm from './../AddComments/AddCommentForm';
import _ from 'underscore'

class MainScene extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            comments: JSON.parse(localStorage.getItem('comments'))
        }
    }

    _onCommentSubmit (comment) {
        var comments = this.state.comments;
        
        if (comments === null) {
            comments = [];
            comment.id = 0;
        } else {
            var lastComment = _.max(comments, function(c){ return c.id});
            comment.id = lastComment.id + 1;
        }

        comments.push(comment);
        this.setState({comments: comments});
        localStorage.setItem('comments', JSON.stringify(this.state.comments));
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
