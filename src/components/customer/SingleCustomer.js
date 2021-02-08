import React  from 'react'
// import { useParams } from 'react-srouter-dom'
import { Col, Button, Form, FormGroup, Label, Input, FormText ,Collapse , Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle , faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

class SingleCustomer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            spinner:'show',

            id: this.props.match.params.id ,
            isOpenMoreoptions:true,

            isActive:' ',
            customerName:'',
            LoyaltyPoint:'',
            VATID:'',
            openingBalance:'',
            contactPerson:'',
            contactOption:'',
            fax:'',
            mobileNumber:'',
            email:'',
            website:'',

            FB:'',
            Linkedin:'',
            Google:'',
            Twitter:'',

            billingStreetAdress:'',
            billingStreetAdress2:'',
            billingState:'',
            billingCity:'',
            billingZipCode:'',
            billingCountry:'',

            shippingStreetAdress:'',
            shippingStreetAdress2:'',
            shippingState:'',
            shippingCity:'',
            shippingZipCode:'',
            shippingCountry:'',

        }
    }
// =========================================
//               Get USER DATA 
//==========================================
 componentDidMount(){

     axios.get(`https://127.0.0.1/wordpress/wp-json/wc/v3/customers/${this.state.id}?consumer_key=${process.env.REACT_APP_CLIENT_KEY}&consumer_secret=${process.env.REACT_APP_CLIENT_SECRET}`).then(
        res=>{

            this.setState({customerName:res.data.username});
// isActive
            let is_Active = res.data.meta_data[4];
            if(is_Active){
                 this.setState({isActive:is_Active.value }); console.log(this.state.isActive)  }else{ console.log('is_Active')    }
//loyalty
            let loyalty = res.data.meta_data[14];
            if(loyalty){this.setState({LoyaltyPoint:loyalty.value }); console.log(this.state.LoyaltyPoint)  }else{ console.log('loyalty')    }
//vat
            let vat = res.data.meta_data[16];
            if(vat){this.setState({VATID:vat.value }); console.log(this.state.VATID)  }else{ console.log('VATID')    }
//balance
            let balance = res.data.meta_data[0];
            if(balance){this.setState({openingBalance:balance.value }); console.log(this.state.openingBalance)  }else{ console.log('balance')    }
//contactOption
            let contactOption = res.data.meta_data[2];
            if(contactOption){this.setState({contactOption:contactOption.value }); console.log(this.state.contactOption)  }else{ console.log('contactOption')    }
//contactPerson
            let contactPerson = res.data.meta_data[18];
            if(contactPerson){this.setState({contactPerson:contactPerson.value }); console.log(this.state.contactPerson)  }else{ console.log('contactPerson')    }
//fax
            let fax = res.data.meta_data[20];
            if(fax){this.setState({fax:fax.value }); console.log(this.state.fax)  }else{ console.log('fax')    }

 //mobileNumber
            let mobileNumber = res.data.meta_data[22];
            if(mobileNumber){this.setState({mobileNumber:mobileNumber.value }); console.log(this.state.mobileNumber)  }else{ console.log('mobileNumber')    }

 // email
            let email = res.data.meta_data[24];
            if(email){this.setState({email:email.value }); console.log(this.state.email)  }else{ console.log('email')    }

//web url
            let website = res.data.meta_data[25];
            if(website){this.setState({website:website.value }); console.log(this.state.website)  }else{ console.log('website')    }
// FB:'',
            let FB = res.data.meta_data[8];
            if(FB){this.setState({FB:FB.value }); console.log(this.state.FB)  }else{ console.log('FB')    }

 // Linkedin:'',
            let Linkedin = res.data.meta_data[6];
            if(Linkedin){this.setState({Linkedin:Linkedin.value }); console.log(this.state.Linkedin)  }else{ console.log('Linkedin')    }
// Twitter:'',
            let Twitter = res.data.meta_data[10];
            if(Twitter){this.setState({Twitter:Twitter.value }); console.log(this.state.Twitter)  }else{ console.log('Twitter')    }
// Google:'',
            let Google = res.data.meta_data[12];
            if(Google){this.setState({Google:Google.value }); console.log(this.state.Google)  }else{ console.log('Google')    }


// billingStreetAdress:'',
            let billingStreetAdress = res.data.billing.address_1;
            if(billingStreetAdress){this.setState({billingStreetAdress:billingStreetAdress }); console.log(this.state.billingStreetAdress)  }else{ console.log('billingStreetAdress')    }

// billingStreetAdress2:'',
            let billingStreetAdress2 = res.data.billing.address_2;
            if(billingStreetAdress2){this.setState({billingStreetAdress2:billingStreetAdress2 }); console.log(this.state.billingStreetAdress2)  }else{ console.log('billingStreetAdress2')    }

// billingCity:'',

            let billingCity = res.data.billing.city;
            if(billingCity){this.setState({billingCity:billingCity }); console.log(this.state.billingCity)  }else{ console.log('billingCity')    }

// billingState:'',
            let billingState = res.data.billing.state;
            if(billingState){this.setState({billingState:billingState }); console.log(this.state.billingState)  }else{ console.log('billingState')    }


// billingCountry:'',

            let billingCountry = res.data.billing.country;
            if(billingCountry){this.setState({billingCountry:billingCountry }); console.log(this.state.billingCountry)  }else{ console.log('billingCountry')    }

// shippingStreetAdress:'',
            let shippingStreetAdress = res.data.shipping.address_1;
            if(shippingStreetAdress){this.setState({shippingStreetAdress:shippingStreetAdress }); console.log(this.state.shippingStreetAdress)  }else{ console.log('shippingStreetAdress')    }


// shippingStreetAdress2:'',
            let shippingStreetAdress2 = res.data.shipping.address_2;
            if(shippingStreetAdress2){this.setState({shippingStreetAdress2:shippingStreetAdress2 }); console.log(this.state.shippingStreetAdress2)  }else{ console.log('shippingStreetAdress2')    }


// shippingState:'',
            let shippingState = res.data.shipping.state;
            if(shippingState){this.setState({shippingState:shippingState }); console.log(this.state.shippingState)  }else{ console.log('shippingState')    }


// shippingCity:'',
            let shippingCity = res.data.shipping.city;
            if(shippingCity){this.setState({shippingCity:shippingCity }); console.log(this.state.shippingCity)  }else{ console.log('shippingCity')    }

// shippingCountry:'',
            let shippingCountry = res.data.shipping.country;
            if(shippingCountry){this.setState({shippingCountry:shippingCountry }); console.log(this.state.shippingCountry)  }else{ console.log('shippingCountry')    }
            this.setState({spinner:'hide'})

        }
     ).catch(error =>{
            //location to home 
            this.props.history.push('/');    
        }

     )
 }
 //===============================================
//         TOGGLE MORE OPTION Button FUN 
// ===============================================

    toggleMoreOptions = () => this.setState({isOpenMoreoptions:!this.state. isOpenMoreoptions});

 //===============================================
//        IS ACTIVE INOUT HANDEL CHANGE
// ===============================================

    hangelChangeChecked = (e) => {
       this.setState({
           isActive:e.target.checked
       }, () => {console.log(this.state.isActive);
       })
    }

 //===============================================
//       OTHER  INPUTS HANDEL CHANGE
// ===============================================
    handelChangeInput = (e) =>{
            let stateName = e.target.name
            let stateValue = e.target.value
            this.setState({
                [stateName]:stateValue
            })
            console.log(e.target.name , this.state[stateName]);
    }
 //===============================================
//              FORM SUBMITTION FUN
// ===============================================

    handelSubmitForm = (e) => {
        this.setState({spinner:'show'})
        e.preventDefault();
        console.log('form submited');
        axios.put(`https://mohamedo12.sg-host.com/wp-json/wc/v3/customers/${this.state.id}?consumer_key=${process.env.REACT_APP_CLIENT_KEY}&consumer_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
         {
      
            "billing": {
              "address_1": this.state.billingStreetAdress,
              "address_2": this.state.billingStreetAdress2,
              "city": this.state.billingCity,
              "state": this.state.billingState,
              "country": this.state.billingCountry,
            },
            "shipping": {
              "address_1": this.state.shippingStreetAdress,
              "address_2": this.state.shippingStreetAdress2,
              "city": this.state.shippingCity,
              "state": this.state.shippingState,
              "country": this.state.shippingCountry
            }
            ,"meta_data":[
                { "key":"userBalance" , "value":this.state.openingBalance},
                { "key":"contact_option" , "value":this.state.contactOption },
                { "key":"is_active","value":"104"},
                { "key":"linkedin_url", "value":this.state.Linkedin },
                { "key":"facebook" , "value":this.state.FB },
                { "key":"twitter" , "value":this.state.Twitter },
                { "key":"google+" , "value":this.state.Google },
                { "key":"user_loyalty_points" , "value":this.state.LoyaltyPoint },
                { "key":"vatid" , "value":this.state.VATID },
                { "key":"contact_person" , "value":this.state.contactPerson },
                { "key":"fax" , "value":this.state.fax },
                { "key":"mobile_number" , "value":this.state.mobileNumber },
                { "key":"email" , "value":this.state.email },
                { "key":"website_url" , "value":this.state.website },

        ]
        
                    }
                    
                    ).then(res => {
                        this.setState({spinner:'hide'}, () =>{
                            window.location.reload(false)
                        })
            console.log(res.data);
        }).catch(error => {
            console.log(error)
        })
    }

// ================= Render ====================
    render (){
        let  {id}  = this.props.match.params
        return (
            <div className="MainBody">
                 <center>
                      <Spinner className={this.state.spinner}  color="primary"/>
                    </center>
                   <div className="container-fluid">
                     <Form onSubmit={this.handelSubmitForm}>
                         <div className="row">

                         <div className="col-md-6" ></div>
                         <div className="col-md-6" >
                            <br />
                            {/* <button  className="btn btn-danger  pull-right mr10" ><FontAwesomeIcon icon={faTimesCircle} /> Cancel </button> */}
                            <button type="submit" className="btn btn-success  pull-right mr10" ><FontAwesomeIcon icon={faCheckCircle} /> update customer </button>
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
                                    <Input type="checkbox" id="checkbox2" onChange={this.hangelChangeChecked} defaultChecked={this.state.isActive}/>{' '}
                                      Is Active Customer
                                    </Label>
                                </FormGroup>
                                <br />
                                <FormGroup row>
                                    <Label for="Name" sm={3}> Customer Name</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="customerName" id="Name" onChange={this.handelChangeInput} defaultValue={this.state.customerName} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Loy" sm={3}>Loyalty Points</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="LoyaltyPoint" id="Loy" onChange={this.handelChangeInput} defaultValue={this.state.LoyaltyPoint} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Tin" sm={3}>TIN / VAT ID</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="VATID" id="Tin" onChange={this.handelChangeInput} defaultValue={this.state.VATID} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Balance" sm={3}>Opening Balance</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="openingBalance" id="Balance"  onChange={this.handelChangeInput} defaultValue={this.state.openingBalance} />
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
                                    <Label for="ContactOption" sm={3}> Contact Option</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="contactOption" onChange={this.handelChangeInput} id="ContactOption" defaultValue={this.state.contactOption} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="ContactPerson" sm={3}>Contact Person</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="contactPerson" id="ContactPerson" onChange={this.handelChangeInput} defaultValue={this.state.contactPerson} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="FaxNumber" sm={3}>Fax Number</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="fax" id="FaxNumber" onChange={this.handelChangeInput} defaultValue={this.state.fax}  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="MobileNumber" sm={3}>Mobile Number</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="mobileNumber" id="MobileNumber" onChange={this.handelChangeInput} defaultValue={this.state.mobileNumber} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="EmailAdress" sm={3}>Email Adress</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="email" id="EmailAdress"onChange={this.handelChangeInput} defaultValue={this.state.email}  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Website" sm={3}>Website</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="website" id="Website" onChange={this.handelChangeInput} defaultValue={this.state.website}/>
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
                                    <Input type="text" name="FB" id="ContactPerson" onChange={this.handelChangeInput} defaultValue={this.state.FB} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Linkedin" sm={3}>Linkedin</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="Linkedin" id="Linkedin" onChange={this.handelChangeInput}  defaultValue={this.state.Linkedin}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Twitter" sm={3}>Twitter</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="Twitter" id="Twitter" onChange={this.handelChangeInput} defaultValue={this.state.Twitter} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Google" sm={3}>Google</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="Google" id="Google" onChange={this.handelChangeInput} defaultValue={this.state.Google} />
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
                                <br />
                                <FormGroup row>
                                    <Label for="StreetAdress" sm={3}> Street Adress</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="billingStreetAdress" id="StreetAdress" onChange={this.handelChangeInput} defaultValue={this.state.billingStreetAdress} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="StreetAdress2" sm={3}>Street Adress State2</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="billingStreetAdress2" id="StreetAdress2" onChange={this.handelChangeInput}  defaultValue={this.state.billingStreetAdress2}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="State" sm={3}>State</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="billingState" id="State" onChange={this.handelChangeInput}  defaultValue={this.state.billingState}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="City" sm={3}>City</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="billingCity" id="City" onChange={this.handelChangeInput} defaultValue={this.state.billingCity} />
                                    </Col>
                                </FormGroup>
                            
                                <FormGroup row>
                                    <Label for="Country" sm={3}>Country</Label>
                                    <Col sm={9}>
                                    {/* <Input type="text" name="Country" id="Cou   ntry"  /> */}
                                    <select   onChange={this.handelChangeInput}  name="billingCountry" id="Country"  class="form-control" value={this.state.billingCountry} >
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">Åland Islands</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">Antigua and Barbuda</option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia, Plurinational State of</option>
                                        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="BA">Bosnia and Herzegovina</option>
                                        <option value="BW">Botswana</option>
                                        <option value="BV">Bouvet Island</option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">British Indian Ocean Territory</option>
                                        <option value="BN">Brunei Darussalam</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">Cayman Islands</option>
                                        <option value="CF">Central African Republic</option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">Christmas Island</option>
                                        <option value="CC">Cocos (Keeling) Islands</option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">Congo</option>
                                        <option value="CD">Congo, the Democratic Republic of the</option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">Côte d'Ivoire</option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CW">Curaçao</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">Czech Republic</option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">Dominican Republic</option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">Equatorial Guinea</option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">Falkland Islands (Malvinas)</option>
                                        <option value="FO">Faroe Islands</option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">French Guiana</option>
                                        <option value="PF">French Polynesia</option>
                                        <option value="TF">French Southern Territories</option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">Guinea-Bissau</option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HM">Heard Island and McDonald Islands</option>
                                        <option value="VA">Holy See (Vatican City State)</option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">Iran, Islamic Republic of</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                        <option value="KR">Korea, Republic of</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">Lao People's Democratic Republic</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">Liechtenstein</option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">Macao</option>
                                        <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">Marshall Islands</option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="FM">Micronesia, Federated States of</option>
                                        <option value="MD">Moldova, Republic of</option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="NC">New Caledonia</option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">Norfolk Island</option>
                                        <option value="MP">Northern Mariana Islands</option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">Palestinian Territory, Occupied</option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">Papua New Guinea</option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">Pitcairn</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Réunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">Russian Federation</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">Saint Barthélemy</option>
                                        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                        <option value="KN">Saint Kitts and Nevis</option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">Saint Martin (French part)</option>
                                        <option value="PM">Saint Pierre and Miquelon</option>
                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">Sao Tome and Principe</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SX">Sint Maarten (Dutch part)</option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">Solomon Islands</option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                                        <option value="SS">South Sudan</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">Syrian Arab Republic</option>
                                        <option value="TW">Taiwan, Province of China</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">Tanzania, United Republic of</option>
                                        <option value="TH">Thailand</option>
                                        <option value="TL">Timor-Leste</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">Trinidad and Tobago</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">Turks and Caicos Islands</option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US">United States</option>
                                        <option value="UM">United States Minor Outlying Islands</option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VE">Venezuela, Bolivarian Republic of</option>
                                        <option value="VN">Viet Nam</option>
                                        <option value="VG">Virgin Islands, British</option>
                                        <option value="VI">Virgin Islands, U.S.</option>
                                        <option value="WF">Wallis and Futuna</option>
                                        <option value="EH">Western Sahara</option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                    </select>
                                    </Col>
                                </FormGroup>
                              
                                <br />
                                <br />
                               
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
                                    <Input type="text" name="shippingStreetAdress" onChange={this.handelChangeInput} id="ShippingStreetAdress"  defaultValue={this.state.shippingStreetAdress}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="ShippingStreetAdress2" sm={3}>Street Adress State2</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="shippingStreetAdress2" onChange={this.handelChangeInput} id="ShippingStreetAdress2" defaultValue={this.state.shippingStreetAdress2}  />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="ShippingState" sm={3}>State</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="shippingState" onChange={this.handelChangeInput} id="ShippingState" defaultValue={this.state.shippingState} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="ShippingCity" sm={3}>City</Label>
                                    <Col sm={9}>
                                    <Input type="text" name="shippingCity" onChange={this.handelChangeInput} id="shippingCity"  defaultValue={this.state.shippingCity}/>
                                    </Col>
                                </FormGroup>
                            
                                <FormGroup row>
                                    <Label for="Country" sm={3}>Country</Label>
                                    <Col sm={9}>
                                    {/* <Input type="text" name="Country" id="Cou   ntry"  /> */}
                                    <select name="shippingCountry" id="Country" multiple="" onChange={this.handelChangeInput} class="form-control" value={this.state.shippingCountry}>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">Åland Islands</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">Antigua and Barbuda</option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia, Plurinational State of</option>
                                        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="BA">Bosnia and Herzegovina</option>
                                        <option value="BW">Botswana</option>
                                        <option value="BV">Bouvet Island</option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">British Indian Ocean Territory</option>
                                        <option value="BN">Brunei Darussalam</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">Cayman Islands</option>
                                        <option value="CF">Central African Republic</option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">Christmas Island</option>
                                        <option value="CC">Cocos (Keeling) Islands</option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">Congo</option>
                                        <option value="CD">Congo, the Democratic Republic of the</option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">Côte d'Ivoire</option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CW">Curaçao</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">Czech Republic</option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">Dominican Republic</option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">Equatorial Guinea</option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">Falkland Islands (Malvinas)</option>
                                        <option value="FO">Faroe Islands</option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">French Guiana</option>
                                        <option value="PF">French Polynesia</option>
                                        <option value="TF">French Southern Territories</option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">Guinea-Bissau</option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HM">Heard Island and McDonald Islands</option>
                                        <option value="VA">Holy See (Vatican City State)</option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">Iran, Islamic Republic of</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                        <option value="KR">Korea, Republic of</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">Lao People's Democratic Republic</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">Liechtenstein</option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">Macao</option>
                                        <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">Marshall Islands</option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="FM">Micronesia, Federated States of</option>
                                        <option value="MD">Moldova, Republic of</option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="NC">New Caledonia</option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">Norfolk Island</option>
                                        <option value="MP">Northern Mariana Islands</option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">Palestinian Territory, Occupied</option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">Papua New Guinea</option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">Pitcairn</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Réunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">Russian Federation</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">Saint Barthélemy</option>
                                        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                        <option value="KN">Saint Kitts and Nevis</option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">Saint Martin (French part)</option>
                                        <option value="PM">Saint Pierre and Miquelon</option>
                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">Sao Tome and Principe</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SX">Sint Maarten (Dutch part)</option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">Solomon Islands</option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                                        <option value="SS">South Sudan</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">Syrian Arab Republic</option>
                                        <option value="TW">Taiwan, Province of China</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">Tanzania, United Republic of</option>
                                        <option value="TH">Thailand</option>
                                        <option value="TL">Timor-Leste</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">Trinidad and Tobago</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">Turks and Caicos Islands</option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US">United States</option>
                                        <option value="UM">United States Minor Outlying Islands</option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VE">Venezuela, Bolivarian Republic of</option>
                                        <option value="VN">Viet Nam</option>
                                        <option value="VG">Virgin Islands, British</option>
                                        <option value="VI">Virgin Islands, U.S.</option>
                                        <option value="WF">Wallis and Futuna</option>
                                        <option value="EH">Western Sahara</option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                    </select>
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

export default SingleCustomer
