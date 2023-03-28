import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <main className="contact">
            <h2>Contact Me</h2>
            <div className="contactForm">
                <form>
                    <div className="form">
                        <label>Name</label>
                        <input type="text" defaultValue={name} onChange={handleChange}/>
                    </div>

                    <div className="form">
                        <label>Email</label>
                        <input type="email" defaultValue={email} onChange={handleChange}/>
                    </div>

                    <div className="form">
                        <label>Message</label>
                        <textarea defaultValue={message} onChange={handleChange}></textarea>
                    </div>

                    <div>
                        <button className="contactButton" onClick={handleSubmit}>Submit</button>
                    </div>

                </form>
            </div>
        </main>
    )
};

export default Contact;