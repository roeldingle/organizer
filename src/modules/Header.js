import React, { Component } from 'react';
import UserComp from '../components/UserComp';
import CurrentDateComp from '../components/CurrentDateComp';

class Header extends Component {

  render() {

    let user = {
      name: 'Emman Dubria',
      position: 'Web Developer',
      avatar: require('../images/avatar/emman.jpg')
    }

    return (
      <div className="header row">
        <div className="col-9">
          <UserComp data={user}/>
        </div>
        <div className="col">
          <CurrentDateComp />
        </div>
      </div>
    );
  }
}

export default Header;
