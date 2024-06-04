import React, { Component } from 'react';

import { Link } from 'react-router-dom';



class SignUpForm extends Component {
    constructor() {
     
        super();
       
        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });

        
    }

    handleSubmit(e) {
        e.preventDefault();
       
        alert("Name:" + this.state.name + " Password :" + this.state.password + "Email:"+ this.state.email);

        
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">

                <label className="FormField__Label" htmlFor="name"> name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} pattern="[a-zA-Z][a-zA-Z ]+" required  />
               
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> 
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
