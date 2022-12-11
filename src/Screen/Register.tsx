
import React, { useState } from "react"
import "./Login.css"

const Register = function () {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [interest, setInterest] = useState("");

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt: any) => {
      evt.preventDefault();
      alert(`Submitting Name ${username}`)
  }
  return (
    <div className="login-form">
          <form onSubmit={handleSubmit}>

          <label>
        Full Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Area of Interest:
        <input
          type="text"
          value={interest}
          onChange={e => setInterest(e.target.value)}
        />
      </label>
      <br/>

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
      <input type="submit" value="Register" />
    </form>
    </div>

  );
}

 export default Register;