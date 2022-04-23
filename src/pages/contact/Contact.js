import React from 'react'
import "./Contact.scss";
import "../../pages/Variables.scss";

function Contact() {
     
    const handleSubmit = event => {
        var name;
        var email;
        var telNum;
        name=document.getElementById("name").value;
        email=document.getElementById("email").value;
        telNum=document.getElementById("telNum").value;


        alert(name+" thank you for submitting a contact form. Aelita, Daniel or Ross will be in touch shortly via "+email+" or "+telNum+" to help you with your query. Please be advised to check your spam mail if we have sent you an email. Thank you.")
        event.preventDefault();

    }

    return (
        <div className="box">
            <div className="contact">
                <div className="form">
                    <h1 className="contact-h1"> Contact Us </h1>
                    <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h3>Send us a message and we will get back to you!</h3> 
                        <label>
                            Name:
                            <input type="text"  id="name" placeholder="Full Name*"></input>
                        </label>
                        <br />
                        <label>
                            Email:
                            <input type="email"  id="email" placeholder="Email Address*"></input>
                        </label>
                        <br />
                        <label>
                            Number:
                            <input type="tel"  id="telNum" placeholder="Telephone Number*"></input>
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
                        <div className="contact-info">
                            <p>Phone us on: +353 86 1234567 </p>  
                            <p>Email us at: info@dra_finance.ie</p>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
 }

export default Contact;
