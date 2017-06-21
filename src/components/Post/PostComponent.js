import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import renderHtml from './../../helpers/imageEmbeder'
import { isEmpty } from 'lodash'; 
import './Post.less';

import userImageFallback from './../../img/avatar_2x.png';
const Post = props => {
    const { children, date, image, username } = props;
    const userImage = isEmpty(image) ? userImageFallback : image;
    const userName = isEmpty(username) ? 'Anonymous' : username;
    return (
        <div className='row'>
            <div className='col-sm-1'>
                <div className='thumbnail'>
                    <img
                        className='img-responsive user-photo'
                        src={userImage}
                    /></div>
            </div>
            <div className='post-column'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <strong>{userName}</strong>
                        <span className='text-muted'> { moment(date).fromNow()}</span>
                    </div>
                    <div className='panel-body' dangerouslySetInnerHTML={renderHtml(children)} />
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    children: PropTypes.node,
    date: PropTypes.number,
    image: PropTypes.string,
    username: PropTypes.string
};

export default Post;
