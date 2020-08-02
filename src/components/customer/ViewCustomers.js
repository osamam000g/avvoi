import React, { Component } from 'react'
import {Table , UncontrolledTooltip , Form ,Col , FormGroup,Row , Input , Button , Pagination ,PaginationItem , PaginationLink , Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit , faFileInvoice, faTrash , faPlus , faSearch } from '@fortawesome/free-solid-svg-icons';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  
import {Link} from 'react-router-dom';
import axios from 'axios'

export class ViewCustomers extends Component {
    constructor(props){
        super(props);
        this.state = {
            customers :[] , //api customers data 
            searchValue:'',
            searchFilterCustomers: [],
            spinner:'show',
            customersLength:0,
            perpage:10,
            nubmerOfPgaes:0,
            pageStart:0,
            pageEnd:0,
            pageNumber:1

        }
    }

    componentDidMount(){
        //============================
        // get all customers from api 
        //============================
        axios.get(`https://mohamedo12.sg-host.com/wp-json/wc/v3/customers?consumer_key=${process.env.REACT_APP_CLIENT_KEY}&consumer_secret=${process.env.REACT_APP_CLIENT_SECRET}`).then(res=>{
                this.setState({spinner:'hide'})
                this.setState({customersLength:res.data.length})
                this.setState({nubmerOfPgaes: Math.ceil(this.state.customersLength/this.state.perpage)}) 
                this.setState({pageEnd:this.state.pageStart+this.state.perpage}) 
                this.setState({customers:res.data.slice(this.state.pageStart , this.state.pageEnd)})


        })
   
    }
    //====================
    //  Render Customer 
    //====================

     renderCustomerToView = () => {
          return(
            this.state.customers.map((customer)=>{
                const   customerId=customer.id ;
                const  linkTo = `/SingleCustomer/${customerId}`
                return(
                    <Link to={linkTo} className="TableLink">
                       <tr key={customer.id}>
                        {/* <th scope="row">{customer.id}</th> */}
                        <td>{customer.username}</td>
                        <td>{customer.email}</td>
                        <td>{customer.billing.phone}</td>
                        <td>{customer.meta_data.length === 0 ? '0' : customer.meta_data[0].value }</td>
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
                            <UncontrolledTooltip placement="bottom" target="DeleteCustomerInvoice">
                                Delete Customer
                            </UncontrolledTooltip>
                            </td>
                        </tr>
                    </Link>                  
                )
                
            })
            
          )
        
    }
    //=========================
    //  Handel Input Change 
    //======================

    handleInputChange = (e) =>{
        this.setState({searchValue:e.target.value});
    }

    //==============================
    //  Handel From Submition
    //==============================

    handelFormSubmit = (e) => {
        e.preventDefault();
        this.setState({spinner:'show'})
        axios.get(`https://mohamedo12.sg-host.com/wp-json/wc/v3/customers?consumer_key=${process.env.REACT_APP_CLIENT_KEY}&consumer_secret=${process.env.REACT_APP_CLIENT_SECRET}`).then(res=>{
            this.setState({customers:res.data.slice(this.state.pageStart , this.state.pageEnd)})
            let FilterdCustomers = this.state.customers.filter((customer)=>{
                return customer.username.toLowerCase().includes(this.state.searchValue) || customer.billing.phone.toLowerCase().includes(this.state.searchValue);
              })
              this.setState({customers: FilterdCustomers})
              this.setState({spinner:'hide'})
              this.setState({customersLength:FilterdCustomers.length})



        })
  
     
    }
    //==============================================================
    // function to handel changes of number of items in the page
    //==============================================================
    handelPerPage = (e) =>{
        this.setState({perpage:e.target.value},function(){
            this.setState({spinner:'show'})
            this.componentDidMount()
        })
    }
    //=======================================
    //  Next Page function
    //======================================
    handelNextPage= () =>{
        this.setState({spinner:'show'})
        this.setState({pageStart:this.state.pageStart+this.state.perpage})
        this.setState({pageNumber:this.state.pageNumber+1})
        this.setState({pageEnd:this.state.pageEnd+this.state.perpage},function(){
            this.componentDidMount()
        })
    }
    //=======================================
    //  Next Page function
    //======================================
    handelBeforePage= () =>{
        this.setState({spinner:'show'})
        this.setState({pageStart:this.state.pageStart-this.state.perpage})
        this.setState({pageNumber:this.state.pageNumber-1})
        this.setState({pageEnd:this.state.pageEnd-this.state.perpage},function(){
            this.componentDidMount()
        })
    }

    //================================
    //  Render Search Form and Table 
    //================================

    render() {
        return (
            <div className="MainBody">
                <br/>
                    <div className="customerSearchForm">
                    <Form onSubmit={this.handelFormSubmit}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
    <Input type="text" name="SearchCustomer" id="SearchCustomer" placeholder="Search Customers ex: Name - Phone Number ...." onChange={this.handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <Button className="primary btn-block"  type="submit" >
                                    <FontAwesomeIcon icon={faSearch} />
                                    &nbsp; Search
                                </Button>
                            </Col>
                            <Col md={2}>
                                <Button className="primary btn-block"  type="button" >
                                    <FontAwesomeIcon icon={faPlus} />
                                    <Link to='/AddCustomer'>
                                          &nbsp; Create New  
                                    </Link>
                                </Button>
                            </Col>
                            <Col md={2}>
                                {/* <Button className="primary btn-block" type="button" > */}
                                    {/* <FontAwesomeIcon icon={faFileCsv} />
                                    &nbsp; Export  */}
                                    <ReactHTMLTableToExcel  
                                                className="btn btn-info btn-block"  
                                                table="emp"  
                                                filename="ReportExcel"  
                                                sheet="Sheet"  
                                                buttonText="Export excel" />
                                {/* </Button> */}
                            </Col>
                        </Row>
                    <div>Number of Customers :  {this.state.customersLength}</div>
                     </Form>
                    </div>
                    <center>
                    <Spinner className={this.state.spinner}  color="primary"/>
                    </center>
                    <div className="tableContainer">
        
                      <Table id="emp" className="table table-bordered">
                    <thead>
                        <tr>
                        {/* <th>#</th> */}
                        <th>First Name</th>
                        <th>Email </th>
                        <th>Phone </th>
                        <th>Balance </th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                   

                       {this.renderCustomerToView()}
              
                    </tbody>
                </Table>
                    </div>
                <div className="Footer">
                    <div className="Pagination">
                        <Row>
                            <Col md={8}>
                                <Pagination aria-label="Page navigation example">
                                    {/* <PaginationItem disabled>
                                        <PaginationLink first href="#" />
                                    </PaginationItem> */}
                                    <PaginationItem className={this.state.pageNumber === 1 ? 'disabled' : 'good'}>
                                        <PaginationLink previous onClick={this.handelBeforePage}/>
                                    </PaginationItem>
                                    <PaginationItem >
                                        <PaginationLink >
                                        {this.state.pageNumber}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                        of {this.state.nubmerOfPgaes}
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem className={this.state.nubmerOfPgaes === this.state.pageNumber ? 'disabled' : 'good'}>
                                        <PaginationLink next  onClick={this.handelNextPage}  />
                                    </PaginationItem>
                                    {/* <PaginationItem>
                                        <PaginationLink last  />
                                    </PaginationItem> */}
                                </Pagination>
                          </Col>
                          <Col md={2} className="CustomersPerPageText">

                          <FontAwesomeIcon icon={faFileInvoice} /> &nbsp; Customers Per Page : &nbsp;
                            </Col>
                            <Col md={1} className="CustomersPerPageSelect">
                          <Input type="select" name="select" id="perPage" onChange={this.handelPerPage}>
                                <option disabled selected >Select your option</option>
                                <option > 5</option>
                                <option >15</option>
                                <option>20 </option>
                                <option>100</option>
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
