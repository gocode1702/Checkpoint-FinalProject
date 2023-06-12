import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Sign.css";
import SignUp from "../signUp/SignUp";

function SignIn({ users, setIsLoggedIn }) {
    const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({ email: "", username: "" });

  const handleChange = (e) => {
    setFormInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const nav = () => {
    setIsLoggedIn(true);
    navigate("/Home1");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    users.find(
      (e) => e.email == formInput.email && e.name == formInput.username
    )
      ? nav()
      : alert("user not found");
  };
  return (
    <>
      <button
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Sign Ip
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div
                    className="container-fluid"
                    style={{
                      backgroundColor: "#fb4764",
                    }}
                  >
                    <Form id="login" className="sign-box enters" method="post">
                      <div className="sign-avatar">
                        <img src="https://i.imgur.com/p1XqpVg.png" alt="" />
                      </div>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          onChange={() => handleChange(event)}
                          name="email"
                          placeholder="Enter email"
                          style={{ backgroundColor: "#fb4764" }}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          onChange={() => handleChange(event)}
                          name="username"
                          type="text"
                          placeholder="Password"
                          style={{
                            backgroundColor: "#fb4764",
                          }}
                        />
                      </Form.Group>
                      <button onClick={(e) => handleLogin(e)} variant="primary">
                        Submit
                      </button>
                      <Form.Text>
                        Don't have an account : <SignUp />
                      </Form.Text>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className=" text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                          style={{ backgroundColor: "#fb4764" }}
                        >
                          Save Changes
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default SignIn;