import React from "react";
import styled from "styled-components";

const FormHolder = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ShowingUp 2s forwards;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  @keyframes ShowingUp {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  label {
    margin: 2px;
  }
  input,
  textarea {
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    margin-bottom: 1.8rem;
    border: 1px solid black;
  }
  textarea {
    resize: none;
    width: 100%;
    height: 50px;
  }
  p {
    margin-bottom: 1rem;
    font-size: larger;
    text-align: center;
    position: relative;
  }
  p::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    content: "";
    margin-top: 0.2rem;
    width: 200px;
    border-bottom: 1px solid gray;
  }
  input[type="submit"] {
    padding: 10px 50px;
    border: 1px solid black;

    margin: 0 auto;
  }
`;
export default function StyledForm() {
  return (
    <FormHolder>
      <p>Contact form</p>
      <div>
        <label>Name</label>
        <input type="text" name="user_name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="user_email" />
      </div>
      <div>
        <label>Message</label>
        <textarea name="message" />
      </div>
      <input type="submit" value="Send Messeage" />
    </FormHolder>
  );
}
