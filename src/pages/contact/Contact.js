import React from 'react'
import "./Contact.scss";
import "../../pages/Variables.scss"

function Contact() {

     
    const handleSubmit = event => {
        event.preventDefault();
        alert("Thank you for submitting a contact form. Aelita, Daniel or Ross will be in touch shortly to help you with your query. Please be advised to check your spam mail if we have sent you an email. Thank you.")
    }

    return (
        <div className="box">
            <div className="contact">
                <div className="form">
                    <h1 className="contact-h1"> Contact Us </h1>
                    <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label>
                            Name:
                            <input type="text"  className="userName" placeholder="Full Name*"></input>
                        </label>
                        <br />
                        <label>
                            Email:
                            <input type="email"  className="userEmail" placeholder="Email Address*"></input>
                        </label>
                        <br />
                        <label>
                            Number:
                            <input type="tel"  className="telNo" placeholder="Telephone Number*"></input>
                        </label>
                        <br />
                        <label>
                            Message:
                            <br />
                            <textarea className="textbox" type="text" placeholder="Enter message here..."></textarea>
                        </label>
                    </fieldset>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                
            </div>
           
        </div>
        
    )
 }

export default Contact;
