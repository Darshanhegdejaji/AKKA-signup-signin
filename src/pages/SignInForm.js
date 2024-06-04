import React, { Component } from 'react';


class SignInForm extends Component {
   render(){
        return (
          <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" />
              </div>
             
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" />
              </div>
             
              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> 
              </div>
         </form>
        </div>
     );
   }
}
 export default SignInForm