import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// import Logo from "./images/logo.png"

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s8qjfe8",
        "template_npd43ug",
        form.current,
        "UysOMcKiKT22oSQ9V"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      {/* <img alt="logo" src={Logo}></img> */}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  img {
    float: left;
    width: 20%;
    display: flex;
    justify-content: left;
    align-item: left;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16pt;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      color: black;
      font-family: 'Hanalei Fill', cursive;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      font-family: 'Hanalei Fill', cursive;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      font-family: 'Hanalei Fill', cursive;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: purple;
      color: white;
      border: none;
      font-family: 'Hanalei Fill', cursive;
      font-size: 16pt;
    }
  }
`;