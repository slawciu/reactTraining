import React, { Component } from 'react';
import {FormGroup, FormControl, Button } from 'react-bootstrap'
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

    _getValidationState () {
        if (this.state.author.length > 0 && this.state.message.length > 0) return 'success';
        else return 'error';
    }

    render() {
        return (<div>
                    <FormGroup controlId="formBasicText" validationState={this._getValidationState()}>
                        <FormControl type='text' placeholder='your nick' value={this.state.author} onChange={this._onNickChange.bind(this)}/>
                        <FormControl type='text' placeholder='your comment' value={this.state.message} onChange={this._onMessageChange.bind(this)}/>
                        <FormControl type='text' placeholder='image path' value={this.state.imagePath} onChange={this._onImagePathChange.bind(this)}/>
                        <Button type='submit' onClick={this._handleSubmit.bind(this)}>Fire</Button>
                    </FormGroup>
                </div>);
    }
}