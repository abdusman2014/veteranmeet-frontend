import React, { useState } from "react";
import "./Login.css";

import { User } from "../../Data/EventsMockData";

import { useNavigate } from "react-router-dom";

import userStore from "../../State Management/UserState";
import EventsButton from "../../Components/AppEvents/EventsButton";
import InputField from "../../Components/Auth/InputField";
import defaultStyle from "../../Config/styles";

const SignUp = function () {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const { setUser } = userStore();
  const [company, setCompany] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const onPressSingup = () => {
    const res: User = {
      userId: "123",
      userName: userName,
      age: Number(age),
      company: company,
      intrestedEventsId: [],
      notIntrestedEventsId: [],
      goingEventsId: [],
      sharedEventIds: [],
      password: password,
    };
    setUser(res);
    navigate("/home");
  };
  return (
    <div>
      <h1 className="heading">Veteran Meet</h1>
      <div style={{ height: 150 }} />
      <div className="box">
        <b style={{ alignSelf: "center", fontSize: 32 }}>SignUp</b>
        <div
          style={{
            height: 1,
            marginBottom: 16,
            backgroundColor: defaultStyle.colors.grey600,
          }}
        />
        <InputField
          lable={"FullName: "}
          value={name}
          onChangeValue={(e: any) => setName(e.target.value)}
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
        <InputField
          lable={"Age: "}
          value={age}
          type={"number"}
          onChangeValue={(e: any) => setAge(e.target.value)}
        />
        <InputField
          lable={"Company: "}
          value={company}
          onChangeValue={(e: any) => setCompany(e.target.value)}
        />

        <div style={{ alignSelf: "center" }}>
          <EventsButton
            color={"black"}
            text={"Sing Up"}
            onPress={onPressSingup}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
