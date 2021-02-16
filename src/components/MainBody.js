import React, { Component } from 'react';
import Header from './Header';
import { Col , Collapse } from 'reactstrap';
import SideBar from './SideBar'
import Dashboard from './Dashboard'
import {BrowserRouter as Router , Switch , Route ,hashHistory} from 'react-router-dom'
import ViewCustomers from './customer/ViewCustomers'
import AddCustomer from './customer/AddCustomer'
import SingleCustomer from './customer/SingleCustomer'
import Pos from './pos/AddOrders'


export class MainBody extends Component {
    constructor(props){
        super(props);

        this.state ={
            isOpen:true,
        }
    }
    toggle  = () =>{
            this.setState({
                isOpen: ! this.state.isOpen
            })
    }

    colMdDefine = (col) => {
        if( col === "col2"){
            if(this.state.isOpen ){
                    return 2
            }else{
                return 0
            }
        }else if (col === "col10"){
            if(this.state.isOpen  ){
                return 10
            }else{
                return 12
            }
        }
           
    }
    render() {
        return (
            <Router>
    
            <div className="container-fluid">
                <div className="row">
                    <Col md={this.colMdDefine("col2")} className="SideBarHolder primary">
                    <Collapse isOpen={this.state.isOpen}>
                         <SideBar />
                         
                    </Collapse>
                    </Col>

                    <Col md={this.colMdDefine("col10")} className="MainBodyHolder "> 
                        <Header onClick={this.toggle} />
                      <Switch>
                          <Route path="/ViewCustomers">
                              <ViewCustomers />
                          </Route>
                          <Route path="/SingleCustomer/:id" component={SingleCustomer}/>
                              {/* <SingleCustomer />
                          </Route> */}
                          <Route path="/AddCustomer" component={AddCustomer}/>
                          <Route path="/pos" component={Pos}/>

                          {/* <Route path="/">
                              <AddCustomer />
                          </Route> */}
                          <Route path="/">
                            <Dashboard />
                          </Route>
                      </Switch>

            

                    </Col>

                </div>
            </div>
</Router>

        )   }
}

export default MainBody;
