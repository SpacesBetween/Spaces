import { fetchEvents } from "../model/event/eventFunc.js";

fetchEvents(0)
  .then((arr) => console.log(arr))
  .catch((err) => console.log(err));