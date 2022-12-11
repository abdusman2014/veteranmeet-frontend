import create from "zustand";

import { Event } from "../Data/EventsMockData";

interface eventState {
  events: Event[];
  addEvent: (event: Event) => void;
}
const eventStore = create<eventState>((set, get) => ({
  events: [],
  addEvent: (event) => {
    const tempevents = get().events;
    tempevents.push(event);
    return set({ events: tempevents });
  },
}));

export default eventStore;
