/* eslint-disable jsx-a11y/img-redundant-alt */
 import React from "react";
 import ImageContent from "../assets/images/image1.png";
 import "../assets/styles/SignIn.css";
 function Sign() {
     return(
         <>
        
         <div className="sign-content">
    <div className="imageContent">
        <img src={ImageContent} alt="Image 1" />
    </div>
    <div className="form-content">
        <h1>Create Account</h1>
        <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="#sign-In">Sign In</a></p>
    </div>
</div>

         </>
      )
 }

 export default Sign;