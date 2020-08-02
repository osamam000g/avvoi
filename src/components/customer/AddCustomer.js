import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText ,Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle , faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export class AddCustomer extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenMoreoptions:false
        }
    }
    toggleMoreOptions = () => this.setState({isOpenMoreoptions:!this.state. isOpenMoreoptions});

    render() {
        return (
            <div className="MainBody">
                <div className="container-fluid">
                     <Form>
                         <div className="row">

                         <div className="col-md-6" ></div>
                         <div className="col-md-6" >
                            <br />
                            <button  className="btn btn-danger  pull-right mr10" ><FontAwesomeIcon icon={faTimesCircle} /> Cancel </button>
                            <button type="submit" className="btn btn-success  pull-right mr10" ><FontAwesomeIcon icon={faCheckCircle} /> Save </button>
                        </div>
                         </div>
                    <div className="row">

                          <div className="col-md-6 ">
                              <br />
                            <h2>Basic Information</h2>
                            <hr/>
                            <div className="BGwhiteBox">
                                <br />
                                <br />
                                <FormGroup check>
                                    <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                      Is Active Customer
                                    </Label>
                                </FormGroup>
                                <br />
                                <FormGroup row>
                                    <Label for="Name" sm={3}> Customer Name</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="name" id="Name"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Loy" sm={3}>Loyalty Points</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="Loy" id="Loy"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Tin" sm={3}>TIN / VAT ID</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="Tin" id="Tin"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Balance" sm={3}>Opening Balance</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="Balance" id="Balance"  />
                                    </Col>
                                </FormGroup>
                                <br />
                                <br />
                                
                               
                            </div>
                         
                          </div>


                          <div className="col-md-6">
                              <br />
                          <h2>Contact Info</h2>
                          <hr/>
                          <div className="BGwhiteBox">
                              
                                <br />
                                <FormGroup row>
                                    <Label for="ContactPerson" sm={3}> Contact Person</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="ContactPerson" id="ContactPerson"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="ContactPerson" sm={3}>Contact Person</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="ContactPerson" id="ContactPerson"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="FaxNumber" sm={3}>Fax Number</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="FaxNumber" id="FaxNumber"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="MobileNumber" sm={3}>Mobile Number</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="MobileNumber" id="MobileNumber"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="EmailAdress" sm={3}>Email Adress</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="EmailAdress" id="EmailAdress"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Website" sm={3}>Website</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="Website" id="Website"  />
                                    </Col>
                                </FormGroup>
                               
                            </div>
                         
                          </div>
                          <div className="col-md-12">
                        <center>
                             <br/>
                          <Button color="primary clear" onClick={this.toggleMoreOptions} >More Options</Button>
                             <br/>
                        </center>

                          </div>

                        <Collapse isOpen={this.state.isOpenMoreoptions} className="collapseAddStyle">
    

                          <div className="col-md-6">
                              <br />
                          <h2>Social Media</h2>
                          <hr/>
                          <div className="BGwhiteBox">
                              
                                <br />
                                <br />
                                <br />
                                <br />
                                <FormGroup row>
                                    <Label for="FaceBook" sm={3}> FaceBook</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="FaceBook" id="ContactPerson"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Linkedin" sm={3}>Linkedin</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="Linkedin" id="Linkedin"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Twitter" sm={3}>Twitter</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="Twitter" id="Twitter"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Google" sm={3}>Google</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="Google" id="Google"  />
                                    </Col>
                                </FormGroup>
                                <br />
                                <br />
                                <br />
                              
                               
                            </div>
                         
                          </div>
                          <div className="col-md-6">
                              <br />
                          <h2>Billing Adress</h2>
                          <hr/>
                          <div className="BGwhiteBox">
                              
                                <br />
                                <FormGroup row>
                                    <Label for="StreetAdress" sm={3}> Street Adress</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="StreetAdress" id="StreetAdress"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="StreetAdress2" sm={3}>Street Adress State2</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="StreetAdress2" id="StreetAdress2"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="State" sm={3}>State</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="State" id="State"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="City" sm={3}>City</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="City" id="City"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="ZipCode" sm={3}>Zipcode</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="ZipCode" id="ZipCode"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Country" sm={3}>Country</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="Country" id="Country"  />
                                    </Col>
                                </FormGroup>
                              
                               
                            </div>
                         
                          </div>
                          <div className="col-md-6">
                              <br />
                          <h2>Shipping Adress</h2>
                          <hr/>
                          <div className="BGwhiteBox">
                              
                                <br />
                                <FormGroup row>
                                    <Label for="ShippingStreetAdress" sm={3}> Street Adress</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="ShippingStreetAdress" id="ShippingStreetAdress"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="ShippingStreetAdress2" sm={3}>Street Adress State2</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="ShippingStreetAdress2" id="ShippingStreetAdress2"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="ShippingState" sm={3}>State</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="ShippingState" id="ShippingState"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="ShippingCity" sm={3}>City</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="ShippingCity" id="ShippingCity"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="ZShippingipCode" sm={3}>Zipcode</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="ShippingZipCode" id="ShippingZipCode"  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="ShippingCountry" sm={3}>Country</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="ShippingCountry" id="ShippingCountry"  />
                                    </Col>
                                </FormGroup>
                              
                               
                            </div>
</div>
                        </Collapse>
                    </div>
                    </Form>
                    <div className="row">
                        <br />
                    </div>
                </div>
   
            </div>
        )
    }
}

export default AddCustomer
