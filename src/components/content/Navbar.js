import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button } from 'react-bootstrap';
import "./Navbar.scss";

export default props => {

  
  return (
    <Navbar color="light"  className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
      <Button color="info" className="toogle"  onClick={props.toggle}>
        <FontAwesomeIcon icon={faAlignLeft}/>
      </Button>
    </Navbar>
  );
}
