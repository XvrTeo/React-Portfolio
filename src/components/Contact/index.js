import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const ContactForm = () => {
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState, [name]: value };

    if (name === "email") {
      const isValid = validateEmail(value);
      setErrorMessage(isValid ? "" : "Your email is invalid.");
    } else {
      setErrorMessage(value.length ? "" : `${name} is required.`);
    }

    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errorMessage) {
      console.log("Form", formState);
      setFormState(initialFormState);
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <a href="mailto:xvrteo@gmail.com">@xvrteo@gmail.com</a>
      <br />
      <h1 data-testid="h1tag">Leave a Message</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={formState.message}
            onChange={handleInputChange}
          />
        </div>
        {errorMessage && <p className="error-text">{errorMessage}</p>}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
