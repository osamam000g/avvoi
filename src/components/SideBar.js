import React, { useState } from 'react';
import { Collapse, Button, ListGroupItem , ListGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom';

const SideBar = (props) => {
  const [isOpenCustomer, setIsOpenCustomer] = useState(false);
  const [isOpenSuppler, setIsOpenSupplier] = useState(false);
//   const [isOpenCustomer, setIsOpenCustomer] = useState(false);
//   const [isOpenCustomer, setIsOpenCustomer] = useState(false);

  const customers = () => setIsOpenCustomer(!isOpenCustomer);
  const supplier = () => setIsOpenSupplier(!isOpenSuppler);


  return (
    <div>
        <div className="Logo">
            <center>
              <img src={logo} width="100" />
            </center>
        </div>
        <div className="sideBarItem">
            <hr /><Button className="btn-block" color="primary"  style={{ marginBottom: '1rem' }}><Link to="/">Dashboard</Link> </Button><hr />
    
        </div>

        <div className="sideBarItem">
           <Button className="btn-block" color="primary" onClick={customers} style={{ marginBottom: '1rem' }}>Customers</Button><hr />
            <Collapse isOpen={isOpenCustomer}>
                <ListGroup>
                    <Link to="/ViewCustomers">
                    <ListGroupItem className="primary"><FontAwesomeIcon icon={faArrowCircleRight} /> &nbsp; &nbsp; View Customers </ListGroupItem>
                    </Link>
                    <ListGroupItem className="primary"> <FontAwesomeIcon icon={faArrowCircleRight} /> &nbsp; &nbsp; Add Customer </ListGroupItem>
                </ListGroup>
            </Collapse>
        </div>

        <div className="sideBarItem">
           <Button className="btn-block" color="primary" onClick={supplier} style={{ marginBottom: '1rem' }}>Supplier</Button><hr />
            <Collapse isOpen={isOpenSuppler}>
                <ListGroup>
                    <ListGroupItem className="primary"><FontAwesomeIcon icon={faArrowCircleRight} /> &nbsp; &nbsp; View Supplier </ListGroupItem>
                    <ListGroupItem className="primary"> <FontAwesomeIcon icon={faArrowCircleRight} /> &nbsp; &nbsp; Add Supplier </ListGroupItem>
                </ListGroup>
            </Collapse>
        </div>

        {/* <div className="sideBarItem">
            <hr /><Button className="btn-block" color="primary" onClick={customers} style={{ marginBottom: '1rem' }}>Customers</Button><hr />
            <Collapse isOpen={isOpen}>
                <ListGroup>
                    <ListGroupItem className="primary"><FontAwesomeIcon icon={faArrowCircleRight} /> &nbsp; &nbsp; View Customer </ListGroupItem>
                    <ListGroupItem className="primary"> <FontAwesomeIcon icon={faArrowCircleRight} /> &nbsp; &nbsp; Add Customer </ListGroupItem>
                </ListGroup>
            </Collapse>
        </div> */}




    </div>
  );
}

export default SideBar;