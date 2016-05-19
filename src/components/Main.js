require('normalize.css/normalize.css');
require('materialize-css/dist/css/materialize.min.css');
require('materialize-css/dist/js/materialize.min.js');
require('styles/App.css');

import React from 'react';

import Navbar from './Navbar'

class AppComponent extends React.Component {
  render() {
    return (
      <div>
      	<Navbar />
          <div className="fixed-action-btn" style={{bottom: '45px', right: '24px'}}>
          	<a className="btn-floating btn-large red">
          		<i className="material-icons">+</i>
          	</a>
          </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
<div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
          <a class="btn-floating btn-large red">
            <i class="material-icons">mode_edit</i>
          </a>
          <ul>
            <li><a style="transform: scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0px); opacity: 0;" class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
            <li><a style="transform: scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0px); opacity: 0;" class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
            <li><a style="transform: scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0px); opacity: 0;" class="btn-floating green"><i class="material-icons">publish</i></a></li>
            <li><a style="transform: scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0px); opacity: 0;" class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
          </ul>
        </div>