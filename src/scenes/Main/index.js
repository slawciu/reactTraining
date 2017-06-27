import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Post,
} from '../../components/';

import image from  '../../img/avatar_2x.png';

const storageKey = 'posts';

class MainScene extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: {value: ''}
        }
    }

    render () {
        const { post, posts } = this.state;
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <Post
                        date={Date.now()}
                        image={image}
                        username='Your name'
                    >
                        Some comment
                    </Post>
                </div>
            </div>
        )
    }
}

export default MainScene;
