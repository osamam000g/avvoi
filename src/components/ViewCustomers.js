import React, { Component } from 'react'
import {Table , UncontrolledTooltip , Form ,Col , FormGroup,Row , Input , Button , Pagination ,PaginationItem , PaginationLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit , faFileInvoice, faTrash , faPlus ,faFileCsv } from '@fortawesome/free-solid-svg-icons';

export class ViewCustomers extends Component {
    render() {
     
        return (
            <div>
                    <div className="customerSearchForm">
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="text" name="SearchCustomer" id="SearchCustomer" placeholder="Search Customers ex: Name - Phone Number ...." />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <Button className="primary btn-block"  type="button" >
                                    <FontAwesomeIcon icon={faPlus} />
                                    &nbsp; Create New  
                                </Button>
                            </Col>
                            <Col md={2}>
                                <Button className="primary btn-block" type="button" >
                                    <FontAwesomeIcon icon={faFileCsv} />
                                    &nbsp; Export 
                                </Button>
                            </Col>
                        </Row>
                     </Form>
                    </div>

                <Table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Email </th>
                        <th>Phome </th>
                        <th>Balance </th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Osama@gmail.com</td>
                        <td>971504947675</td>
                        <td>20000 UAE</td>
                        <td>
                            <FontAwesomeIcon icon={faEdit} id="EditCustomerIcon" />
                            <UncontrolledTooltip placement="left" target="EditCustomerIcon">
                                Edit Customer
                            </UncontrolledTooltip>
                            &nbsp;
                             <FontAwesomeIcon icon={faFileInvoice} id="CreateIvoiceIcon" />
                             <UncontrolledTooltip placement="top" target="CreateIvoiceIcon">
                                Create invoice
                            </UncontrolledTooltip>
                            &nbsp;

                              <FontAwesomeIcon icon={faTrash} id="DeleteCustomerInvoice" />
                              <UncontrolledTooltip placement="right" target="DeleteCustomerInvoice">
                                Delete Customer
                            </UncontrolledTooltip>
                              </td>
                        </tr>
                       
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Mohamed@#gmail.com</td>
                        <td>971504947675</td>
                        <td>20000 UAE</td>

                        <td>@twitter</td>
                        </tr> <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Mohamed@#gmail.com</td>
                        <td>971504947675</td>
                        <td>20000 UAE</td>

                        <td>@twitter</td>
                        </tr> <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Mohamed@#gmail.com</td>
                        <td>971504947675</td>
                        <td>20000 UAE</td>

                        <td>@twitter</td>
                        </tr> <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Mohamed@#gmail.com</td>
                        <td>971504947675</td>
                        <td>20000 UAE</td>
                        <td>@twitter</td>
                        </tr> <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Mohamed@#gmail.com</td>
                        <td>971504947675</td>
                        <td>20000 UAE</td>

                        <td>@twitter</td>
                        </tr> <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Mohamed@#gmail.com</td>
                        <td>971504947675</td>
                        <td>20000 UAE</td>

                        <td>@twitter</td>
                        </tr> <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Mohamed@#gmail.com</td>
                        <td>971504947675</td>
                        <td>20000 UAE</td>

                        <td>@twitter</td>
                        </tr> <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Mohamed@#gmail.com</td>
                        <td>971504947675</td>
                        <td>20000 UAE</td>

                        <td>@twitter</td>
                        </tr> <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Mohamed@#gmail.com</td>
                        <td>971504947675</td>
                        <td>20000 UAE</td>

                        <td>@twitter</td>
                        </tr> <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>Mohamed@#gmail.com</td>
                        <td>971504947675</td>
                        <td>20000 UAE</td>

                        <td>@twitter</td>
                        </tr> 
                    </tbody>
                </Table>
                <div className="Footer">
                    <div className="Pagination">
                        <Row>
                            <Col md={8}>
                                <Pagination aria-label="Page navigation example">
                                    <PaginationItem disabled>
                                        <PaginationLink first href="#" />
                                    </PaginationItem>
                                    <PaginationItem disabled>
                                        <PaginationLink previous href="#" />
                                    </PaginationItem>
                                    <PaginationItem >
                                        <PaginationLink href="#">
                                        1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                        of  10
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink last href="#" />
                                    </PaginationItem>
                                </Pagination>
                          </Col>
                          <Col md={2} className="CustomersPerPageText">
                          <FontAwesomeIcon icon={faFileInvoice} /> &nbsp; Customers Per Page : &nbsp;
                            </Col>
                            <Col md={1} className="CustomersPerPageSelect">
                          <Input type="select" name="select" id="perPage">
                                <option>  15</option>
                                <option>50</option>
                                <option>250</option>
                                <option>500</option>
                                <option>1000</option>
                          </Input>
                          </Col>

                        </Row>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCustomers
