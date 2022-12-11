import React, { useState } from "react";
import "./Login.css";

import { useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import EventsButton from "../../Components/AppEvents/EventsButton";
import InputField from "../../Components/Auth/InputField";
import defaultStyle from "../../Config/styles";

const Login = function () {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const onPressLogin = () => {
    //console.log(userName,password);
    navigate("/home");
  };
  const onPressSignup = () => {
    navigate("/register");
  };
  return (
    <div>
      <h1 className="heading">Veteran Meet</h1>
      <div style={{ height: 200 }} />
      <div className="box">
        <b style={{ alignSelf: "center", fontSize: 32 }}>LogIn</b>
        <div
          style={{
            height: 1,
            marginBottom: 16,
            backgroundColor: defaultStyle.colors.grey600,
          }}
        />
        <InputField
          lable={"UserName: "}
          value={userName}
          onChangeValue={(e: any) => setuserName(e.target.value)}
        />
        <InputField
          lable={"Password: "}
          value={password}
          onChangeValue={(e: any) => setPassword(e.target.value)}
        />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="btn">
            <EventsButton
              color={"black"}
              text={"Log In"}
              onPress={onPressLogin}
            />
          </div>
          <div style={{ flex: 1 }} />
          <div className="btn">
            <EventsButton
              color={"black"}
              text={"Sing Up"}
              onPress={onPressSignup}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
