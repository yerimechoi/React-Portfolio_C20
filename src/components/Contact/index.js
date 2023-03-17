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

    const overallStyle = { padding: '10px' };

    return (
        <main style={overallStyle}>
            <h1>Contact Me</h1>
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" defaultValue={name} placeholder="Name" onChange={handleChange} />

                    <label>Email</label>
                    <input type="email" defaultValue={email} placeholder="Email" onChange={handleChange} />

                    <label>Message</label>
                    <textarea defaultValue={message} placeholder="Message" onChange={handleChange}></textarea>

                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </main>
    )
};

export default Contact;