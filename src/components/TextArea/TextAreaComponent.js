import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitPost = this.handleSubmitPost.bind(this);
        this.state = {
            value: ''
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmitPost(event) {
        event.preventDefault();
        const { handleSubmit, postValue} = this.props;
        handleSubmit(this.state.value);
        this.setState({
            value: postValue
        });
    
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitPost}>
                <label>
                      Post:
                    <textarea onChange={this.handleChange}  value={this.state.value} />
                </label>
                <input type='submit' value='Submit' />
            </form>);
    }
}

TextArea.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    postValue: PropTypes.string
};

export default TextArea;
