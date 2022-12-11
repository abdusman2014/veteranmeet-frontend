import React, { useEffect, useState } from "react";
import AppEvents from "../../Components/AppEvents/AppEvents";
import UserDetails from "../../Components/Profile/UserDetails";
import { events, user, Event } from "../../Data/EventsMockData";
import "./ProfileScreen.css";
import defaultStyle from "../../Config/styles";

function fetchSharedEvents(sharedEventIds: String[]) {
    console.log('share: ',sharedEventIds);
  let result: Event[] = [];
  sharedEventIds.forEach((eventId) => {
    const eve = events.find((item) => item.eventId === eventId);
    console.log('eve: ',eve);
    if (eve !== undefined) {
      result.push(eve);
    }
  });
  console.log('res: ',result);
  return result;
}
function ProfileScreen(props: any) {
  //let sharedEvents: Event[] = [];
  const [sharedEvents,setSharedEvents] = useState<Event[]>([])
  useEffect(() => {
    setSharedEvents(fetchSharedEvents(user.sharedEventIds));
  }, []);
  return (
    <div>
      <UserDetails user={user} />
      <div
        style={{
          backgroundColor: defaultStyle.colors.grey400,
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        {sharedEvents.map((event) => (
          <AppEvents event={event} isFromProfileScreen={true}/>
        ))}
      </div>
    </div>
  );
}

export default ProfileScreen;
