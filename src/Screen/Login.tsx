
import React, { useState } from "react"
import "./Login.css"

const Login = function () {

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handlLogin = (evt: any) => {
      evt.preventDefault();
      alert(`Submitting Name ${username}`)
  }
  return (
    <div className="login-form">
          <form onSubmit={handlLogin}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={e => setusername(e.target.value)}
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
      <input type="submit" value="Login" />
    </form>
    </div>

  );
}

 export default Login;