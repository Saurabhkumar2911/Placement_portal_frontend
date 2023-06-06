import React from "react";
import styled from "styled-components";

const contact = () => {
  const Wrapper = styled.section`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    text-decoration: none;

    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          width: 50%;
          display: grid;
          place-item: center;
          margin: auto;
          gap: 3rem;
          input[type="submit"] {
            width: 50%;
            display: grid;
            place-item: center;
            margin: auto;
            cursor: pointer;
            border-radius: 10px;
            transition: all 0.2s;
            &:hover {
              background-color: blue;
              border: 1px solid black;
              color: black;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <>
      <Wrapper
        style={{
          backgroundImage:
            "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
          minHeight: `100vh`,
          backgroundSize: `cover`,
        }}
      >
        <h1>Trainning and Placement Cell</h1>
        <h2>Contact Details</h2>

        <div className="Details">
          <h3>Head of T&P - Prof. xyz </h3>
          <h3>Contact Number - +91 123456789 </h3>
          <h3>Contact Mail - Placement@college.com</h3>
        </div>

        <div className="container">
          <div className="contact-form">
            <form className="contact-inputs">
              <input
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                requird
              />

              <textarea
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                required
              ></textarea>

              <input type="submit" value="SEND" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default contact;
