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
    }

    render () {
        return (
            <div className='container-fluid'>
                
            </div>
        )
    }
}

export default MainScene;
