import React from 'react';
import {} from 'semantic-ui-react';

export default (props) => {
  return (
    <div>
      <h1>Header</h1>
      {props.children}
      <h1>Footer</h1>
    </div>
  )
}
