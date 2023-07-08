import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SignUpForm = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        let response = await fetch("http://fsa-jwt-practice.herokuapp.com/signup");
        let val = (await response).json();
        setToken(val);
        console.log(val);
    try {
    } catch (error) {
      setError(error.message);
    }
  }

  return (
      <>
          <h2 id="loader_cube--glowing">Sign Up</h2>
            {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
              </label>
              <br />
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
              </label>
              <br />
        <button id="loader_cube--color">Submit</button>
      </form>
    </>
  )
}

SignUpForm.propTypes = {}

export default SignUpForm