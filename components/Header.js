import React from 'react';
import {Menu} from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px', background: 'linear-gradient(to bottom right, orange, white, green)'}}>
      <Link route="/">
        <a className="item">CryptoBill</a>
      </Link>
      <Link route="/">
        <a className="item">Crytocurrency Crowdfunding for Billions</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Drive</a>
        </Link>
        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
}
