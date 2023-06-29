/* File to request data from NUSMOD and transfer to supabase*/
import { supabase } from "../configuration/supabaseClient.js";

const requestURL = new Request(
  "https://api.nusmods.com/v2/2022-2023/semesters/1/venueInformation.json"
);
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const getVenueLesson = () => {
  const data = fetch(requestURL, myInit);

  data
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then(async (newRes) => {
      for (const venue in newRes) {
        for (const day in venue) {
          if (newRes[venue][day] == null) {
            continue;
          }
          await supabase.from("Venue").insert({
            venueName: venue,
            day: newRes[venue][day]["day"],
            timetableAvailability: newRes[venue][day]["availability"],
          });
        }
      }
    })
    .catch((error) => {
      console.error("Error: " + error);
    });
};

const updateVenueCapacity = () => {
  const data = fetch(requestURL, myInit);

  data
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then(async (newRes) => {
      for (const venue in newRes) {
        if (!newRes[venue][0]) {
          continue;
        }

        const { error } = await supabase
          .from("venues")
          .update({ totalCapacity: newRes[venue][0]["classes"][0]["size"] })
          .eq("venueName", venue);

        if (error) {
          throw error;
        }
      }
    })
    .catch((error) => {
      console.error("Error: " + error);
    });
};
