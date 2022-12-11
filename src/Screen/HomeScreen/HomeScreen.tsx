import React, { useEffect, useState } from "react";
import "./HomeScreen.css";

import AppEvents from "../../Components/AppEvents/AppEvents";
import Screen from "../../Components/Screen";
import { Event } from "../../Data/EventsMockData";
import Navbar from "../../Navigation";
import eventStore from "../../State Management/eventState";
function HomeScreen() {
  const { events } = eventStore();

  return (
    <div className="Event">
      <Navbar />

      {events.length === 0 ? (
        <div style={{alignSelf: 'center'}}>

            <b style={{fontSize: 42}}>No events</b>
        </div>
      ) : (
        events.map((event) => <AppEvents event={event} />)
      )}
    </div>
  );
}

export default HomeScreen;
