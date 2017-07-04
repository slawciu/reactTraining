import React, { Component } from 'react';
import image from './../img/avatar_2x.png';
import Autolinker from 'autolinker'
import {ListGroupItem, Panel, Grid, Col} from 'react-bootstrap'
export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true }
    }

    _renderMessage () {
        return { __html: Autolinker.link(this.props.comment.message) };
    }

    _handleClick () {
       this.setState((prevState, props) => {
           console.log('previous: ' + prevState.isVisible + ', next: ' + !prevState.isVisible)
        return {isVisible: !prevState.isVisible};
        });
    }

    render () {
        var avatar = <img className='avatar' src={image} />
        if (this.props.comment.imagePath !== '') {
            avatar = <img className='avatar' src={this.props.comment.imagePath} />
        }

        return (<ListGroupItem>
                    <Grid>
                        <Col md={2}>
                        {avatar}
                        </Col>
                        <Col md={9}>
                        <Panel collapsible={true} expanded={this.state.isVisible} header={this.props.comment.author + ' ' + this.props.comment.dateAdded.toLocaleString()} onClick={this._handleClick.bind(this)}>
                            <span dangerouslySetInnerHTML={ this._renderMessage() } />
                        </Panel>
                        </Col>
                        
                    </Grid>
                </ListGroupItem>);
    }
}

