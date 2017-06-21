import React from 'react';
import PropTypes from 'prop-types';
import './Post.less';

const Post = props => {
    return (
        <div className='row'>
            <div className='col-sm-1'>
                <div className='thumbnail'>
                    <img
                        className='img-responsive user-photo'
                        src='https://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                    /></div>
            </div>
            <div className='col-sm-5'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <strong>myusername</strong>
                        <span className='text-muted'>commented 5 days ago</span>
                    </div>
                    <div className='panel-body'>
                        { props.children }
                    </div>
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    children: PropTypes.node
};

export default Post;
