'use strict';

// import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Abce from 'abce';
import _ from 'lodash';
import helpers from 'demo/helpers';

helpers.a();
let abce = new Abce(_.assign({}, {x: true}));


class App extends React.Component {

    constructor(props, context, ...args) {
        super(props, context, ...args);
    }

    static get propTypes() {
        return {
            stuff: React.PropTypes.string.isRequired
        }
    }

    render () {
        return (
            <div>App {this.props.stuff || 'stuff is undefined'}</div>
        )
    }
}


ReactDOM.render((
    <App />
), document.getElementById('main'));
