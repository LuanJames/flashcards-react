import React from 'react';

class NavbarComponent extends React.Component {
  render() {
    return (
    	<nav className="blue">
		    <div className="nav-wrapper">
		      <a href="#" className="brand-logo"></a>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li><a href="collapsible.html">Test</a></li>
		      </ul>
		    </div>
		  </nav>
    );
  }
}

NavbarComponent.defaultProps = {
};

export default NavbarComponent;
