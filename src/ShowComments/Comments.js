import React, { Component } from 'react';
import Comment from './Comment'

export default class Comments extends Component {
    render () {
        var comments = this.props.comments.map(function(comment){
                        return (
                                <Comment key={comment.id} comment={comment}/>);
                    } );

        return <div>{comments}</div>;
            
    }
}