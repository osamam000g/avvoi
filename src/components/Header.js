import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream , faEnvelope , faBell , faCog} from '@fortawesome/free-solid-svg-icons';
import userImage from '../assets/user.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Badge,
  Button
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">

     
      <Navbar  light expand="md">
      <Button color="primary" onClick={props.onClick} style={{ marginBottom: '1rem' }}> <FontAwesomeIcon icon={faStream} /> </Button> &nbsp;&nbsp;&nbsp;
        <NavbarBrand href="/">AVVOI</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"><FontAwesomeIcon icon={faEnvelope} />  <Badge color="danger">2</Badge>  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">  <FontAwesomeIcon icon={faBell} />  <Badge color="danger">1</Badge> </NavLink>
            </NavItem>
           
          </Nav>
          <NavbarText>
          <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">  <FontAwesomeIcon icon={faCog} />  <Badge color="danger">1</Badge> </NavLink>
            </NavItem>
          <UncontrolledDropdown nav inNavbar>
        

              <DropdownToggle nav caret>
                Mohamed osama <img src={userImage} className="userImage" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavbarText>
        </Collapse>
      </Navbar>
      </div>
      </div>
    </div>
  );
}

export default Header;