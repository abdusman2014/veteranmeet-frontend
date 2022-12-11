
import React, { useState } from "react"
import "./Login.css"

import { useNavigate } from "react-router-dom";

const Login = function () {

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handlLogin = (evt: any) => {
      evt.preventDefault();

      navigate("/home");

  }
  return (
    <div >
      <h1 className="heading">Veteran Meet</h1>
    <div className="body">
    <div className="box">
      <h1>Sign In</h1>
          <form onSubmit={handlLogin}>
      <label>
        Username:
        <input
          type="text"
          value={userName}
          onChange={e => setuserName(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Password:
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <br/>
      <input type="submit" value="Login" className="btn"/>
    </form>
    </div>
    </div>
    </div>
  );
}

 export default Login;