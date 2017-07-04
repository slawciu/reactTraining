import React, { Component } from 'react';
import image from './../img/avatar_2x.png';

export default class Comment extends Component {
    render () {
        var avatar = <img className='avatar' src={image} />
        if (this.props.comment.imagePath !== '') {
            avatar = <img className='avatar' src={this.props.comment.imagePath} />
        }

        return (<div>
                    <div>{this.props.comment.author}</div>
                    <div>{this.props.comment.dateAdded.toLocaleString()}</div>
                    {avatar}
                    {this.props.comment.message}
                </div>);
    }
}

