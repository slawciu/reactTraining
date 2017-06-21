import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Posts,
    TextArea
} from '../../components/';

import { loadArray, saveArray } from './../../helpers/localStorageHelpers';

const storageKey = 'posts';

class MainScene extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            postValue:'',
            posts: []
        }
    }

    componentDidMount() {
        const posts = loadArray(storageKey);
        posts && this.setState({posts: posts});
    }

    handleSubmit(post) {
        const { posts } = this.state;
        posts.push(post); 
        saveArray(storageKey, posts);
        this.setState({value: ''});
    }

    render () {
        const { postValue, posts } = this.state;
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <Posts posts={posts} />
                </div>
                <div className='row'>
                    <TextArea handleSubmit={this.handleSubmit} postValue={postValue} />
                </div>
            </div>
        )
    }
}

export default MainScene;
