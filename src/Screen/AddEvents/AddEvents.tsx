import React, { useState } from "react";
import EventsButton from "../../Components/AppEvents/EventsButton";
import InputField from "../../Components/Auth/InputField";
import Navbar from "../../Navigation";
import defaultStyle from "../../Config/styles";

import { events, Event } from "../../Data/EventsMockData";

function AddEvents(props: any) {
  const [eventName, seteventName] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  return (
    <div>
      <Navbar />
      <div style={{ height: 200 }} />
      <div className="box">
        <b style={{ alignSelf: "center", fontSize: 32 }}>Add Event</b>
        <div
          style={{
            height: 1,
            marginBottom: 16,
            backgroundColor: defaultStyle.colors.grey600,
          }}
        />
        <InputField
          lable={"Event Name: "}
          value={eventName}
          onChangeValue={(e: any) => seteventName(e.target.value)}
        />
        <InputField
          lable={"Company: "}
          value={company}
          onChangeValue={(e: any) => setCompany(e.target.value)}
        />
        <InputField
          lable={"Description: "}
          value={description}
          onChangeValue={(e: any) => setDescription(e.target.value)}
        />
        <InputField
          lable={"Event Date: "}
          value={date}
          type={"date"}
          onChangeValue={(e: any) => setDate(e.target.value)}
        />

        <div style={{ alignSelf: "center" }}>
          <EventsButton
            color={"black"}
            text={"Add event"}
            onPress={() => {
              const event: Event = {
                eventName: eventName,
                eventId: Math.random().toString(),
                eventDate: new Date(date),
                organizingCompanies: [company],
                intrestedPeople: [],
                notIntrestedPeople: [],
                GoingPeople: [],
                eventDescription: description,
              };
              events.push(event);
              alert("Event Added Successfully");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AddEvents;
