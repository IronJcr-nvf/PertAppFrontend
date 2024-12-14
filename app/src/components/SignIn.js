 import React from "react";
 
 function Sign() {
     return(
         <>
         <p>Hello from Sign In</p>
         <div className="sign-content" >
            <div className="image-content">
                <img src="../assets/images/image1.png" alt="Image 1" />
            </div>
            <div className="form-content">
                <h1>Create Account</h1>
                <form>
                  <input type="text" placeholder="Username" required/>
                  <input type="email" placeholder="Email" required/>
                  <input type="password" placeholder="Password" required/>
                  <input type="password" placeholder="Confirm Password" required/>
                  <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="#">Sign In</a></p>

                            
            </div>

         </div>
         </>
      )
 }

 export default Sign;