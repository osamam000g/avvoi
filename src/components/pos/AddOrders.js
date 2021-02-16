import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText ,Collapse , Spinner ,Modal,ModalBody,ModalHeader ,ModalFooter   } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faBriefcase, faCheckCircle , faDollarSign, faMoneyBill, faPlus, faSearch, faShoppingBag, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {useParams} from 'react-router-dom';
import axios from 'axios'
import './pos.css'

export class AddOrders extends Component {
    constructor(props){
        super(props);
        this.state = {
            spinner:'show',
            getCustomerModalState:false
        }
    }

    componentDidMount(){
        this.setState({spinner:'hide'})

    }
    




    //===============================================
//        IS ACTIVE INOUT HANDEL CHANGE
// ===============================================

// hangelChangeChecked = (e) => {
//     this.setState({
//         isActive:e.target.checked
//     }, () => {console.log(this.state.isActive);
//     })
//  }

//===============================================
//       OTHER  INPUTS HANDEL CHANGE
// ===============================================
//  handelChangeInput = (e) =>{
//          let stateName = e.target.name
//          let stateValue = e.target.value
//          this.setState({
//              [stateName]:stateValue
//          })
//          console.log(e.target.name , this.state[stateName]);
//  }
//===============================================
//       Handel Add customer Form Submition 
// ===============================================
getAllCustomers = () =>{
    console.log('');
}
toggleGetCust = () =>{
    this.setState({getCustomerModalState:!this.state.getCustomerModalState})
}

HandelAddFormSubmition = (e) =>{
e.preventDefault();
 
}
 
    render (){
        return (
            <div className="MainBody">
    <Modal isOpen={this.state.getCustomerModalState} toggle={this.toggleGetCust} className="getCustomerModal">
        <ModalHeader toggle={this.toggleGetCust}>select customer</ModalHeader>
        <ModalBody>
                <input type="text" placeholder="Enter Customer Name" onChange={this.getAllCustomers} className="form-control"/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleGetCust}>select</Button>{' '}
          <Button color="secondary" onClick={this.toggleGetCust}>Cancel</Button>
        </ModalFooter>
     </Modal>
                 <center>
                      <Spinner className={this.state.spinner}  color="primary"/>
                 </center>
                   <div className="container-fluid">
                   <div className="row">
                   <div id="customer" className="col-md-6 ">
                   {/* search */}
                   <div className="card-body chat-fixed-search">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">

                            <FontAwesomeIcon icon={faSearch} />

                            </span>
                        </div>
                        <input type="text" onDoubleClick={this.toggleGetCust} className="form-control" id="pos-customer-box" placeholder="Enter Customer Name or Mobile Number to search"  />
                        <div className="input-group-append" id="button-addon2">
                            <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#Pos_addCustomer">
                            <FontAwesomeIcon icon={faPlus} /> Add</button>
                        </div>
                    </div>
                    </div>
                    {/* order info */}
                    <div className="row bg-gradient-directional-purple white m-0 pt-1 pb-1">
                            <div className="col-6 ">
                                <FontAwesomeIcon icon={faBriefcase} />

                                Products
                            </div>
                            <div className="col-3">
                                <FontAwesomeIcon icon={faDollarSign} />

                                 Price</div>
                            <div className="col-3">
                                <FontAwesomeIcon icon={faShoppingBag} />

                                Total</div>
                     </div>
                     <div id="saman-pos2">
                            <div id="pos_items">
                             <div className="row  m-0 pt-1 pb-1 border-bottom" id="ppid-0">
                             <div className="col-6 ">
                              <span className="quantity">
                              <input type="number" className="form-control req amnt display-inline mousetrap" value="1" />
                     
                              </span>Beets - Pickled-0031-8692</div> <div className="col-3"> 359.00 </div> <div className="col-3"><strong><span className="ttlText" id="result-0">373.93</span></strong><a data-rowid="0" className="red removeItem" title="Remove">
                               <FontAwesomeIcon icon={faTimesCircle}/>
                                </a></div>
                                    <input type="hidden" className="form-control text-center" name="product_name[]" id="productname-0" value="Beets - Pickled-0031-8692"/>
                                    <input type="hidden" id="alert-0" value="80.00" name="alert[]"/>
                                    <input type="hidden" className="form-control req prc" name="product_price[]" id="price-0" onkeypress="return isNumber(event)" onkeyup="rowTotal('0'), billUpyog()" autocomplete="off" value="359.00" inputmode="numeric"/>
                                    <input type="hidden" className="form-control vat" name="product_tax[]" id="vat-0" onkeypress="return isNumber(event)" onkeyup="rowTotal('0'), billUpyog()" autocomplete="off" value="12.00"/>
                                    <input type="hidden" className="form-control discount pos_w" name="product_discount[]" onkeypress="return isNumber(event)" id="discount-0" onkeyup="rowTotal('0'), billUpyog()" autocomplete="off" value="7.00"/>
                                    <input type="hidden" name="taxa[]" id="taxa-0" value="43.08"/>
                                    <input type="hidden" name="disca[]" id="disca-0" value="28.15"/>
                                    <input type="hidden" className="ttInput" name="product_subtotal[]" id="total-0" value="373.93"/>
                                    <input type="hidden" className="pdIn" name="pid[]" id="pid-0" value="5"/> 
                                    <input type="hidden" name="unit[]" id="unit-0" value=""/>
                                    <input type="hidden" name="hsn[]" id="hsn-0" value="0031-8692"/>
                                    <input type="hidden" name="serial[]" id="serial-0" value=""/>
                                 </div>
                              </div>
                        </div>
                        <hr className="mt-1"></hr>
                        <div className="row ">

                        <div className="row m-2">
                        <div className="col-4">
                                <strong>  Tax % </strong>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control form-control-sm shipVal" />
                            </div>
                            <div className="col-4">
                                ( Tax $<span id="ship_final">0.00</span> )
                            </div>
                           {/* <div className="col-3"></div> */}

                        </div>
                         
                    
                        <div className="row m-2">
                        <div className="col-4">
                                <strong>  Total Discount % </strong>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control form-control-sm shipVal" />
                            </div>
                            <div className="col-4">
                                ( Discount $<span id="ship_final">0.00</span> )
                            </div>
                           {/* <div className="col-3"></div> */}

                        </div>
                        <div className="row m-2">
                            <div className="col-4">
                                <strong>  Grand Total</strong>
                            </div>
                            <div className="col-4">$<span className="font-medium-1 blue text-bold-600" id="bigtotal">373.93</span>
                            </div>
                        </div>
                        {/* <div className="row m-2">
                            <div className="col-4">
                                <strong> Extra  Discount</strong>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control form-control-sm discVal" />
                                <input type="hidden"  value="0" />
                            </div>
                            <div className="col-4">
                                ( $<span id="disc_final">0</span> )
                            </div>
                        </div> */}
                        <hr className="mt-1"></hr>
                        <ul className="nav nav-tabs" role="tablist">
                              
                                <li className="nav-item pull-right">
                                    <a className="btn btn-outline-success mb-1" id="base-tab4" href="#tab4" > 
                                    <FontAwesomeIcon icon={faCheckCircle} />    Place Order</a>
                                </li>
                            </ul>
                            {/* <hr className="mt-1"></hr> */}

                        </div>

                   </div>
                 
                 
                   <div id="product" className="col-md-6">
                   <div class="row ">


                        <div class="col-sm-9">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                    <FontAwesomeIcon icon={faBarcode} />
                                        {/* <i class="fa fa-barcode p-0"></i>&nbsp; */}
                                        <input type="checkbox" aria-label="Enable BarCode" value="1" id="bar_only"/>
                                    </div>
                                </div>
                                <input type="text" class="form-control text-center round mousetrap"/>
                            </div>


                        </div>
                        <div class="col-md-3  grey text-xs-center"><select id="v2_categories" class="selectpicker form-control round teal">
                                <option value="0">All</option><option value="12">Shoes</option><option value="11">Home</option><option value="10">Automotive</option><option value="9">Tools</option><option value="8">Music</option><option value="7">Home</option><option value="6">Automotive</option><option value="5">Toys</option><option value="4">Home</option><option value="3">Computers</option><option value="2">Health</option><option value="1">General</option>                            </select>
                        </div>  
                        <br/>
                        <br/>
                        <br/>
                        <hr class=" mt-1"></hr>


                    </div>

                   <div classNameName="row">
                       <div className="row match-height">

                       <div className="col-3 border mb-1">
                                <div className=" rounded">
                                 <a id="posp0" className="v2_select_pos_item round" >
                                        <img className="round" src="https://pos.ultimatekode.com/userfiles/product/default.png" />
                                        <div className="text-center" >
                                            <small >Barley - Pearl</small>
                                        </div></a>
                                  
                                </div>
                        </div>

                        <div className="col-3 border mb-1">
                                <div className=" rounded">
                                 <a id="posp0" className="v2_select_pos_item round" >
                                        <img className="round" src="https://pos.ultimatekode.com/userfiles/product/default.png"/>
                                        <div className="text-center" >
                                            <small >Beer - Sleemans Cream Ale-54482-053
</small>
                                        </div></a>
                                  
                                </div>
                        </div>


                       </div>
                        <br />
                    </div>
               
                   </div>
                   </div>
                  
                
                    
                </div>
   
            </div>
        )
    }
     
}

export default AddOrders
