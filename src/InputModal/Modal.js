import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import "./Modal.css"

const Modal = () => {

  // States for storing the information.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);

  // Storing the First name.
  const firstChangeHandler = (event) => {
    setFirstName(event.target.value);
  }
  
  // Storing the Last name.
  const lastChangeHandler = (event) => {
    setLastName(event.target.value);
  }

  // Storing Email.
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);

    // For checking the validity of email address after each input.
    if (event.target.value.includes('@' && '.com')) setFormValid(true);
    else setFormValid(false);
  }

  // Storing Password.
  const paswordHandler = (event) => {
    setPassword(event.target.value);
  }

  // Handling Input submit.
  const UserInformationHandler = (event) => {
    event.preventDefault();
    const UserInformation = 
      {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Password: password
      }
    
    // Storing the user information and viewing it in the console.
    console.log(UserInformation);

    // Alert Box Welcomming the user with his/her First Name.
    alert("Welcome " + firstName + "!");

    // Reload the webpage after the user clicks "OK" button in the alert box.
    window.location.reload();


  }

    return (
        <div>
            {/* Form */}
            <form onSubmit={UserInformationHandler} className="form__box">
             <div className="boxes">
                <input type="text" className="input" onChange={firstChangeHandler} value={firstName} placeholder="First Name"></input>
                <input type="text" className="input" onChange={lastChangeHandler} value={lastName} placeholder='Last Name'></input>
             </div>
              <p className="boxes">
                <input type="text" className="input" onChange={emailChangeHandler} value={email} placeholder='Email Address'></input>
              </p>
              <p className="boxes">
                <input type="text" className="input" onChange={paswordHandler} value={password} placeholder='Password'></input>
              </p>
              <input type="checkbox" className="checkbox"/>Subscribe to our Newsletter
              <div className="boxes">
                <button type="submit" className="boxes button-box" disabled={!formValid}>SIGN UP</button>
            </div>
            </form>
            {/* Form End */}

            {/* Icons for Signing up. */}
            <div>
                <div className="boxes icon">Or Sign up with:</div>
                <a className="icon i" href='./Facebook'><FaFacebookF /> </a>
                <a className="icon i" href='./Twitter'><FaTwitter/></a>
                <a className="icon i" href='./Google'><FaGoogle /></a>
                <a className="icon i" href='./Github'><FaGithub /></a>
            </div>
            {/* Icons end. */}
        </div>
    )
}

export default Modal;