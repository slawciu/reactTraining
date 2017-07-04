import React, { Component } from 'react';

export default class AddCommentForm extends Component {
    constructor (props) {
        super(props);
        this.state = {author: '', message: '', imagePath: ''};
    }

    _onNickChange (event) {
        this.setState({ author: event.target.value });
    }
    
    _onMessageChange (event) {
        this.setState({ message: event.target.value });
    }

    _onImagePathChange (event) {
        this.setState({ imagePath: event.target.value });
    }

    _handleSubmit (event) {
        event.preventDefault();
        this.props.onCommentSubmit({author: this.state.author.trim(), dateAdded: new Date(), message: this.state.message.trim(), imagePath: this.state.imagePath});
        this.setState({author: '', message: '', imagePath: ''})
    }

    render() {
        return (<div>
                    <form onSubmit={this._handleSubmit.bind(this)}>
                        <input type='text' placeholder='your nick' value={this.state.author} onChange={this._onNickChange.bind(this)}/>
                        <input type='text' placeholder='your comment' value={this.state.message} onChange={this._onMessageChange.bind(this)}/>
                        <input type='text' placeholder='image path' value={this.state.imagePath} onChange={this._onImagePathChange.bind(this)}/>
                        <input type='submit' onSubmit={this._onAddCommitSubmit} value='Fire'/>
                    </form>
                </div>);
    }
}